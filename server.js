const express = require('express');
const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const session = require('express-session');
const jwt = require('jsonwebtoken');
const cors = require('cors');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3001;

// Middleware
app.use(cors({
  origin: 'http://localhost:8082', // Your frontend URL
  credentials: true
}));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Session configuration
app.use(session({
  secret: process.env.SESSION_SECRET || 'your-secret-key',
  resave: false,
  saveUninitialized: false,
  cookie: {
    secure: false, // Set to true in production with HTTPS
    maxAge: 24 * 60 * 60 * 1000 // 24 hours
  }
}));

// Passport middleware
app.use(passport.initialize());
app.use(passport.session());

// Google OAuth Strategy
passport.use(new GoogleStrategy({
  clientID: process.env.GOOGLE_CLIENT_ID || 'your-google-client-id',
  clientSecret: process.env.GOOGLE_CLIENT_SECRET || 'your-google-client-secret',
  callbackURL: "/auth/google/callback"
}, async (accessToken, refreshToken, profile, done) => {
  try {
    // Here you would typically save/update user in your database
    // For now, we'll just return the profile
    const user = {
      id: profile.id,
      email: profile.emails[0].value,
      name: profile.displayName,
      avatar: profile.photos[0].value,
      provider: 'google'
    };
    
    return done(null, user);
  } catch (error) {
    return done(error, null);
  }
}));

// Serialize user for session
passport.serializeUser((user, done) => {
  done(null, user);
});

// Deserialize user from session
passport.deserializeUser((user, done) => {
  done(null, user);
});

// Routes
app.get('/auth/google', passport.authenticate('google', {
  scope: ['profile', 'email']
}));

app.get('/auth/google/callback', 
  passport.authenticate('google', { failureRedirect: 'http://localhost:8082/auth?error=google_failed' }),
  (req, res) => {
    // Generate JWT token
    const token = jwt.sign(
      { 
        id: req.user.id, 
        email: req.user.email, 
        name: req.user.name 
      },
      process.env.JWT_SECRET || 'your-jwt-secret',
      { expiresIn: '7d' }
    );
    
    // Redirect to frontend with token
    res.redirect(`http://localhost:8082/dashboard?token=${token}`);
  }
);

// Verify token endpoint
app.get('/api/verify-token', (req, res) => {
  const token = req.headers.authorization?.replace('Bearer ', '');
  
  if (!token) {
    return res.status(401).json({ error: 'No token provided' });
  }
  
  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET || 'your-jwt-secret');
    res.json({ user: decoded });
  } catch (error) {
    res.status(401).json({ error: 'Invalid token' });
  }
});

// Logout endpoint
app.post('/api/logout', (req, res) => {
  req.logout((err) => {
    if (err) {
      return res.status(500).json({ error: 'Logout failed' });
    }
    res.json({ message: 'Logged out successfully' });
  });
});

// Health check
app.get('/api/health', (req, res) => {
  res.json({ status: 'OK', message: 'EduBloom API is running' });
});

// Music Generation Routes
const musicRouter = require('./server/music');
app.use(musicRouter);

// Serve static files in production
if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, 'dist')));
  
  app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'dist', 'index.html'));
  });
}

app.listen(PORT, () => {
  console.log(`🚀 EduBloom API server running on port ${PORT}`);
  console.log(`📱 Frontend URL: http://localhost:8082`);
  console.log(`🔗 Google OAuth: http://localhost:${PORT}/auth/google`);
});

module.exports = app;
