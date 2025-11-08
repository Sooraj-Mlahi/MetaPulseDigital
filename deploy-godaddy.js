#!/usr/bin/env node

/**
 * GoDaddy Deployment Script for MetaPulse Digital
 * This script builds and deploys the Next.js app to GoDaddy hosting
 */

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');
require('dotenv').config({ path: '.env.local' });

console.log('Starting GoDaddy Deployment for MetaPulse Digital...\n');

// Check required environment variables
const requiredVars = [
  'GODADDY_DOMAIN',
  'GODADDY_FTP_HOST', 
  'GODADDY_FTP_USERNAME',
  'GODADDY_FTP_PASSWORD'
];

const missingVars = requiredVars.filter(varName => !process.env[varName]);

if (missingVars.length > 0) {
  console.error('❌ Missing required environment variables:');
  missingVars.forEach(varName => {
    console.error(`   - ${varName}`);
  });
  console.error('\nPlease add these to your .env.local file');
  process.exit(1);
}

async function deploy() {
  try {
    console.log('📦 Step 1: Building Next.js application...');
    execSync('npm run build', { stdio: 'inherit' });
    
    console.log('📁 Step 2: Exporting static files...');
    execSync('npm run export', { stdio: 'inherit' });
    
    console.log('🔍 Step 3: Preparing files for upload...');
    const exportDir = './out';
    
    if (!fs.existsSync(exportDir)) {
      throw new Error('Export directory not found. Make sure the build was successful.');
    }
    
    console.log('📋 Step 4: Files ready for upload:');
    console.log(`   Source: ${path.resolve(exportDir)}`);
    console.log(`   Destination: ${process.env.GODADDY_FTP_HOST}${process.env.GODADDY_HOSTING_PATH || '/public_html'}`);
    
    console.log('\n✅ Build complete! Files are ready in the "out" directory.');
    console.log('\n📤 Next steps:');
    console.log('1. Upload all files from the "out" directory to your GoDaddy hosting');
    console.log('2. Point your domain to the hosting directory');
    console.log('3. Test the website at your domain');
    
    console.log('\n🔧 FTP Upload Command (you can use an FTP client):');
    console.log(`   Host: ${process.env.GODADDY_FTP_HOST}`);
    console.log(`   Username: ${process.env.GODADDY_FTP_USERNAME}`);
    console.log(`   Path: ${process.env.GODADDY_HOSTING_PATH || '/public_html'}`);
    
  } catch (error) {
    console.error('❌ Deployment failed:', error.message);
    process.exit(1);
  }
}

deploy();