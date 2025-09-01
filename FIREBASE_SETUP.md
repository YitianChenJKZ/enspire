# Firebase Setup Guide

## Prerequisites
1. Create a Firebase project at [Firebase Console](https://console.firebase.google.com/)
2. Enable Realtime Database in your Firebase project
3. Set up database rules for your use case

## Configuration

### 1. Install Dependencies
The Firebase dependencies are already added to `package.json`. Run:
```bash
npm install
```

### 2. Environment Variables
Create a `.env` file in your project root with your Firebase configuration:

```env
VITE_FIREBASE_API_KEY=your-api-key-here
VITE_FIREBASE_AUTH_DOMAIN=your-project.firebaseapp.com
VITE_FIREBASE_DATABASE_URL=https://your-project-default-rtdb.firebaseio.com/
VITE_FIREBASE_PROJECT_ID=your-project-id
VITE_FIREBASE_STORAGE_BUCKET=your-project.appspot.com
VITE_FIREBASE_MESSAGING_SENDER_ID=your-sender-id
VITE_FIREBASE_APP_ID=your-app-id
```

### 3. Get Firebase Config Values
1. Go to your Firebase project console
2. Click on the gear icon (⚙️) next to "Project Overview"
3. Select "Project settings"
4. Scroll down to "Your apps" section
5. Copy the config values from your web app

### 4. Database Rules
Update your Realtime Database rules in Firebase Console:

```json
{
  "rules": {
    "waitlist": {
      ".read": false,
      ".write": true
    }
  }
}
```

## Usage
The Firebase configuration is centralized in `firebase/config.ts` and imported where needed:
- `SocialProofSection.tsx` uses it for waitlist submissions
- Database instance is exported as `database` for use in other components

## Security Notes
- Never commit your `.env` file to version control
- Use appropriate database rules to restrict access
- Consider implementing user authentication for production use
