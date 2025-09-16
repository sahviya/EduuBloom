# Google OAuth Setup Guide for EduBloom

## Quick Setup (10 minutes)

### 1. Create Google Cloud Project
1. Go to [Google Cloud Console](https://console.cloud.google.com/)
2. Create a new project or select existing one
3. Name it "EduBloom" or similar

### 2. Enable Google+ API
1. Go to "APIs & Services" → "Library"
2. Search for "Google+ API" and enable it
3. Also enable "Google OAuth2 API"

### 3. Create OAuth 2.0 Credentials
1. Go to "APIs & Services" → "Credentials"
2. Click "Create Credentials" → "OAuth 2.0 Client IDs"
3. Choose "Web application"
4. Name it "EduBloom Web Client"

### 4. Configure OAuth Consent Screen
1. Go to "OAuth consent screen"
2. Choose "External" user type
3. Fill in required fields:
   - App name: "EduBloom"
   - User support email: your email
   - Developer contact: your email
4. Add scopes: `email`, `profile`, `openid`
5. Add test users (your email addresses)

### 5. Configure Authorized URLs
In your OAuth 2.0 Client ID settings, add:

**Authorized JavaScript origins:**
```
http://localhost:3001
http://localhost:8082
```

**Authorized redirect URIs:**
```
http://localhost:3001/auth/google/callback
```

### 6. Update Environment Variables
1. Copy your Client ID and Client Secret from Google Console
2. Update the `.env` file:

```env
GOOGLE_CLIENT_ID=your-actual-google-client-id
GOOGLE_CLIENT_SECRET=your-actual-google-client-secret
JWT_SECRET=your-super-secret-jwt-key
SESSION_SECRET=your-session-secret-key
```

### 7. Start the Application
```bash
# Start both frontend and backend
npm run dev:full

# Or start them separately:
# Terminal 1: npm run server (backend on port 3001)
# Terminal 2: npm run dev (frontend on port 8082)
```

## How It Works

1. **User clicks "Continue with Google"**
2. **Redirects to Google OAuth** (`http://localhost:3001/auth/google`)
3. **User signs in with Google**
4. **Google redirects back** with authorization code
5. **Backend exchanges code for user info**
6. **Backend generates JWT token**
7. **Redirects to frontend** with token (`http://localhost:8082/dashboard?token=...`)
8. **Frontend stores token** and verifies it
9. **User is logged in** and sees dashboard

## Features

✅ **Real Google OAuth** - Actual Google sign-in
✅ **JWT Authentication** - Secure token-based auth
✅ **Session Management** - Automatic token refresh
✅ **User Profiles** - Real Google profile data
✅ **Secure Backend** - Express.js with Passport.js
✅ **CORS Enabled** - Frontend-backend communication

## Troubleshooting

**"Error 400: redirect_uri_mismatch"**
- Check that `http://localhost:3001/auth/google/callback` is in Authorized redirect URIs

**"This app isn't verified"**
- Add your email to test users in OAuth consent screen
- Or publish the app (requires verification for production)

**"Access blocked"**
- Make sure Google+ API is enabled
- Check that OAuth consent screen is configured

**Backend not starting**
- Make sure port 3001 is not in use
- Check that all packages are installed: `npm install`

## Production Deployment

For production, update:
1. **Authorized origins/redirects** to your production domain
2. **Environment variables** with production secrets
3. **HTTPS** for secure OAuth flow
4. **Database** for user storage (PostgreSQL)

## Next Steps

1. **Set up PostgreSQL** for user data storage
2. **Add user registration** with email/password
3. **Implement user profiles** and preferences
4. **Add role-based access** control
5. **Deploy to production** with proper security

