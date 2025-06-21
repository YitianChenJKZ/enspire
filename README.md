# Enspire - Firebase Email Collection Setup

This is a complete setup for collecting email addresses using Firebase Firestore without user authentication. Perfect for waitlists, newsletters, or simple email collection forms.

## 🚀 Features

- **Simple Email Collection**: Collect emails without user authentication
- **Duplicate Prevention**: Prevents duplicate email submissions
- **Email Validation**: Client-side email format validation
- **Admin Dashboard**: View and export collected emails
- **Real-time Updates**: Instant feedback to users
- **CSV Export**: Download email list as CSV file

## 📁 File Structure

```
enspire/
├── index.html          # Main landing page with email form
├── admin.html          # Admin dashboard to view emails
├── firebase-config.js  # Firebase configuration
├── email-service.js    # Email collection service
└── README.md          # This file
```

## 🔧 Setup Instructions

### 1. Firebase Project Setup

1. Go to [Firebase Console](https://console.firebase.google.com/)
2. Create a new project or use existing one
3. Enable Firestore Database
4. Go to Project Settings > General
5. Copy your Firebase config (apiKey, authDomain, etc.)

### 2. Update Firebase Configuration

Edit `firebase-config.js` and replace with your Firebase project details:

```javascript
const firebaseConfig = {
    apiKey: "your-api-key",
    authDomain: "your-project.firebaseapp.com",
    projectId: "your-project-id",
    storageBucket: "your-project.appspot.com",
    messagingSenderId: "your-sender-id",
    appId: "your-app-id"
};
```

### 3. Firestore Security Rules

Set up Firestore security rules to allow read/write access:

```javascript
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    match /waitlist/{email} {
      allow read, write: if true;  // For development
      // For production, consider more restrictive rules
    }
  }
}
```

### 4. Deploy to Web Server

Upload all files to your web server. The setup works with any static hosting service like:
- GitHub Pages
- Netlify
- Vercel
- Firebase Hosting

## 📝 How It Works

### Email Collection Flow

1. **User submits email** → Form validation
2. **Check for duplicates** → Query Firestore
3. **Store email** → Create document in 'waitlist' collection
4. **Show feedback** → Success/error message

### Data Structure

Each email is stored as a document in the `waitlist` collection:

```javascript
{
  email: "user@example.com",
  name: "John Doe",  // Optional
  timestamp: "2024-01-15T10:30:00.000Z",
  status: "active"
}
```

## 🎯 Usage

### Main Page (`index.html`)
- Users visit your landing page
- Enter their email address
- Get instant feedback on submission

### Admin Page (`admin.html`)
- View all collected emails
- See statistics (total subscribers, today's signups)
- Export emails to CSV
- Access at `yourdomain.com/admin.html`

## 🔒 Security Considerations

### Development
- Current setup allows public read/write access
- Suitable for testing and development

### Production
Consider implementing:
- Rate limiting
- CAPTCHA verification
- Email verification
- Admin authentication for admin page
- More restrictive Firestore rules

## 🛠️ Customization

### Styling
- Modify CSS in `index.html` and `admin.html`
- Update colors, fonts, and layout as needed

### Form Fields
- Add more fields by updating the form in `index.html`
- Modify `email-service.js` to handle additional data

### Email Validation
- Update the `isValidEmail()` function in `email-service.js`
- Add more sophisticated validation rules

### Success Messages
- Customize success/error messages in `email-service.js`
- Add email templates for confirmation emails

## 📊 Analytics

The admin dashboard provides:
- Total number of subscribers
- Today's signup count
- Chronological list of all emails
- CSV export functionality

## 🚨 Troubleshooting

### Common Issues

1. **"Firebase: Error (auth/email-already-in-use)"**
   - This error occurs when trying to create user accounts
   - Solution: Use the provided setup that stores emails directly in Firestore

2. **CORS Errors**
   - Ensure your domain is added to Firebase authorized domains
   - Check Firebase project settings

3. **Module Import Errors**
   - Ensure you're serving files from a web server (not file://)
   - Check that all files are in the correct directory

### Debug Mode

Enable console logging by uncommenting debug lines in `email-service.js`:

```javascript
console.log('Adding email to waitlist:', email);
```

## 📞 Support

For issues or questions:
1. Check Firebase Console for errors
2. Review browser console for JavaScript errors
3. Verify Firebase configuration is correct
4. Ensure Firestore is enabled in your project

## 🔄 Updates

To update the setup:
1. Backup your current configuration
2. Update the relevant files
3. Test thoroughly before deploying
4. Monitor for any breaking changes

---

**Note**: This setup is designed for simple email collection. For more complex applications, consider implementing additional security measures and user authentication.
