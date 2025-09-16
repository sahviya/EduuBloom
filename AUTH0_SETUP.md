# Auth0 Setup Guide for EduBloom

## Quick Setup (5 minutes)

### 1. Create Auth0 Account
1. Go to [https://auth0.com](https://auth0.com)
2. Sign up for a free account
3. Choose "Personal" account type

### 2. Create Application
1. In your Auth0 dashboard, go to "Applications"
2. Click "Create Application"
3. Name it "EduBloom"
4. Choose "Single Page Application"
5. Click "Create"

### 3. Configure Application Settings
In your application settings, add these URLs:

**Allowed Callback URLs:**
```
http://localhost:5173/dashboard
```

**Allowed Logout URLs:**
```
http://localhost:5173
```

**Allowed Web Origins:**
```
http://localhost:5173
```

### 4. Enable Google Social Connection
1. Go to "Authentication" → "Social"
2. Click on "Google"
3. Toggle "Enabled" to ON
4. You'll need to create a Google OAuth app (optional for now)

### 5. Update Configuration
1. Copy your **Domain** and **Client ID** from the Auth0 dashboard
2. Open `src/auth0-config.ts`
3. Replace the placeholder values:

```typescript
export const auth0Config = {
  domain: 'your-domain.auth0.com', // Replace with your domain
  clientId: 'your-client-id', // Replace with your client ID
  authorizationParams: {
    redirect_uri: window.location.origin + '/dashboard',
    audience: 'https://edubloom-api',
    scope: 'openid profile email'
  }
};
```

### 6. Test the Application
1. Run `npm run dev`
2. Go to `http://localhost:5173/auth`
3. Click "Continue with Google" or use email/password

## Features Available

✅ **Google OAuth** - Sign in with Google account
✅ **Email/Password** - Traditional signup and login
✅ **Secure Authentication** - Industry-standard security
✅ **User Management** - Built-in user profiles
✅ **Session Management** - Automatic token refresh

## Troubleshooting

**"Invalid redirect URI" error:**
- Make sure you added `http://localhost:5173/dashboard` to Allowed Callback URLs

**Google sign-in not working:**
- Enable Google social connection in Auth0 dashboard
- Make sure your domain and client ID are correct

**Email/password not working:**
- The Username-Password-Authentication connection is enabled by default
- Check that your domain and client ID are correct

## Production Deployment

For production, update the URLs in Auth0 to use your production domain:
- `https://yourdomain.com/dashboard`
- `https://yourdomain.com`
- `https://yourdomain.com`

And update the `redirect_uri` in your config accordingly.
