#!/usr/bin/env node

const { execSync } = require('child_process');

console.log('🔍 Getting Firebase configuration for project: campaign-71998\n');

try {
    // Check if Firebase CLI is installed
    execSync('firebase --version', { stdio: 'pipe' });
    console.log('✅ Firebase CLI is installed\n');
} catch (error) {
    console.log('❌ Firebase CLI is not installed. Please install it first:');
    console.log('   npm install -g firebase-tools\n');
    process.exit(1);
}

try {
    // Get Firebase project info
    console.log('📋 Getting project configuration...');
    const projectInfo = execSync('firebase projects:list --json', { encoding: 'utf8' });
    const projects = JSON.parse(projectInfo);
    
    const project = projects.result.find(p => p.projectId === 'campaign-71998');
    
    if (!project) {
        console.log('❌ Project "campaign-71998" not found in your Firebase projects.');
        console.log('   Available projects:');
        projects.result.forEach(p => console.log(`   - ${p.projectId} (${p.displayName})`));
        process.exit(1);
    }
    
    console.log(`✅ Found project: ${project.displayName} (${project.projectId})\n`);
    
    // Get web app configuration
    console.log('🌐 Getting web app configuration...');
    const apps = execSync('firebase apps:list --json', { encoding: 'utf8' });
    const appsList = JSON.parse(apps);
    
    const webApp = appsList.result.find(app => app.platform === 'WEB');
    
    if (!webApp) {
        console.log('❌ No web app found. Creating one...');
        execSync('firebase apps:create WEB "Nomination Campaign"', { stdio: 'inherit' });
        console.log('✅ Web app created. Please run this script again to get the configuration.');
        process.exit(0);
    }
    
    console.log(`✅ Found web app: ${webApp.displayName} (${webApp.appId})\n`);
    
    // Get app configuration
    const config = execSync(`firebase apps:sdkconfig WEB ${webApp.appId} --json`, { encoding: 'utf8' });
    const sdkConfig = JSON.parse(config);
    
    console.log('🎯 Firebase Configuration for your HTML file:\n');
    console.log('const firebaseConfig = {');
    console.log(`    apiKey: "${sdkConfig.result.sdkConfig.apiKey}",`);
    console.log(`    authDomain: "${sdkConfig.result.sdkConfig.authDomain}",`);
    console.log(`    projectId: "${sdkConfig.result.sdkConfig.projectId}",`);
    console.log(`    storageBucket: "${sdkConfig.result.sdkConfig.storageBucket}",`);
    console.log(`    messagingSenderId: "${sdkConfig.result.sdkConfig.messagingSenderId}",`);
    console.log(`    appId: "${sdkConfig.result.sdkConfig.appId}"`);
    console.log('};\n');
    
    console.log('📝 Copy this configuration and replace the placeholder in nomination.html\n');
    
} catch (error) {
    console.log('❌ Error:', error.message);
    console.log('\n🔧 Manual steps to get Firebase config:');
    console.log('1. Go to https://console.firebase.google.com/');
    console.log('2. Select your project: campaign-71998');
    console.log('3. Click on the gear icon (⚙️) next to "Project Overview"');
    console.log('4. Select "Project settings"');
    console.log('5. Scroll down to "Your apps" section');
    console.log('6. If no web app exists, click "Add app" and choose "Web"');
    console.log('7. Copy the firebaseConfig object');
    console.log('8. Replace the placeholder config in nomination.html\n');
} 