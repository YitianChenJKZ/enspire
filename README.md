# The Ultimate Nomination Challenge

An interactive web application that allows users to nominate themselves and see their connections in a beautiful D3.js force-directed graph.

## Features

- ✨ Interactive nomination form
- 🌐 Real-time participant web visualization using D3.js
- 🔥 Firebase Firestore backend for data persistence
- 📱 Responsive design with Tailwind CSS
- 🔐 Secure authentication and data access

## Project Setup

### Prerequisites

- Node.js (version 16 or higher)
- Firebase CLI
- A Firebase project (already configured: `campaign-71998`)

### Installation

1. **Install Firebase CLI globally:**
   ```bash
   npm install -g firebase-tools
   ```

2. **Login to Firebase:**
   ```bash
   firebase login
   ```

3. **Install project dependencies:**
   ```bash
   npm install
   ```

4. **Initialize Firebase in your project (if not already done):**
   ```bash
   firebase use campaign-71998
   ```

### Development

1. **Start the local development server:**
   ```bash
   npm start
   # or
   firebase serve
   ```

2. **Open your browser and navigate to:**
   ```
   http://localhost:5000
   ```

### Deployment

1. **Deploy to Firebase Hosting:**
   ```bash
   npm run deploy
   # or
   firebase deploy
   ```

2. **Your app will be available at:**
   ```
   https://campaign-71998.web.app
   ```

## Firebase Configuration

The project is configured to use:
- **Project ID:** `campaign-71998`
- **Database:** Firestore
- **Hosting:** Firebase Hosting
- **Authentication:** Anonymous authentication

### Firestore Structure

```
artifacts/
  {appId}/
    public/
      data/
        nominations/
          {documentId}/
            name: string
            email: string
            timestamp: timestamp
            submittedBy: string (user ID)
```

## Security Rules

The Firestore security rules allow:
- ✅ Authenticated users to read and write nomination data
- ✅ Public read access to nominations
- ❌ Unauthenticated users cannot write data

## Features

### Nomination Form
- Collects user name and email
- Validates input data
- Stores submissions in Firestore
- Real-time feedback

### Interactive Web Visualization
- D3.js force-directed graph
- Real-time updates when new nominations are added
- Hover tooltips with participant information
- Draggable nodes
- Responsive design

### Real-time Updates
- Firebase Firestore listeners
- Automatic graph updates
- Live participant count

## Troubleshooting

### Common Issues

1. **Firebase not initialized:**
   - Ensure you're logged in: `firebase login`
   - Check project selection: `firebase use campaign-71998`

2. **Permission denied errors:**
   - Verify Firestore rules are deployed
   - Check authentication status

3. **Graph not displaying:**
   - Check browser console for errors
   - Verify Firestore connection
   - Ensure D3.js is loading properly

### Debug Mode

To enable debug logging, open browser console and look for:
- Firebase initialization messages
- Firestore connection status
- D3.js graph updates

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test locally
5. Submit a pull request

## License

MIT License - see LICENSE file for details 