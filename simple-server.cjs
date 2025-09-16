require('dotenv').config();
const express = require('express');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 3001;

// Middleware
app.use(cors({
  origin: 'http://localhost:8083', // Your frontend URL
  credentials: true
}));
app.use(express.json());

// Health check
app.get('/api/health', (req, res) => {
  console.log('Health check requested');
  res.json({ status: 'OK', message: 'EduBloom API is running', port: PORT });
});

// Google OAuth route (placeholder)
app.get('/auth/google', (req, res) => {
  console.log('Google OAuth requested');
  res.json({ 
    message: 'Google OAuth endpoint', 
    note: 'This is a placeholder. Set up Google OAuth credentials to enable real authentication.',
    setup: 'See GOOGLE_OAUTH_SETUP.md for instructions'
  });
});

// Start server
app.listen(PORT, () => {
  console.log(`🚀 EduBloom API server running on port ${PORT}`);
  console.log(`📱 Frontend URL: http://localhost:8083`);
  console.log(`🔗 Health check: http://localhost:${PORT}/api/health`);
  console.log(`🔗 Google OAuth: http://localhost:${PORT}/auth/google`);
  console.log(`\n📋 Next steps:`);
  console.log(`1. Set up Google OAuth credentials in .env file`);
  console.log(`2. Follow GOOGLE_OAUTH_SETUP.md for complete setup`);
});

module.exports = app;

