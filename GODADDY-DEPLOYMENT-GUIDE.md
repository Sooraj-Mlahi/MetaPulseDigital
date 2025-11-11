# 🚀 MetaPulse Digital - GoDaddy Deployment Guide

## 📋 Required Information from Client

### 🔑 1. GoDaddy Hosting Details
```
Domain Name: ____________________
FTP Host: _______________________
FTP Username: ___________________
FTP Password: ___________________
Hosting Path: /public_html (usually)
```

### 🔧 2. API Keys & Credentials

#### Web3Forms (REQUIRED - Contact Form)
- [ ] Sign up at: https://web3forms.com
- [ ] Get Access Key: ____________________
- [ ] **Without this, contact form won't work**

#### Google Analytics 4 (REQUIRED - Website Analytics)
- [ ] Create GA4 property at: https://analytics.google.com
- [ ] Get Measurement ID (G-XXXXXXXXXX): ____________________
- [ ] **Without this, no website analytics**

#### LinkedIn Insight Tag (OPTIONAL - B2B Tracking)
- [ ] Get Partner ID from LinkedIn Campaign Manager: ____________________

### 📧 3. Contact Information Verification
```
Email: info@metapulsedigital.com ✓ or ❌
Phone: ____________________
Address: ____________________
```

### 🌐 4. Social Media Links Verification
```
LinkedIn: https://www.linkedin.com/company/metapulse-digital ✓ or ❌
Twitter: https://x.com/MetapulseD ✓ or ❌  
Instagram: https://www.instagram.com/meta.pulsedigital/ ✓ or ❌
```

## 🛠️ Setup Instructions

### Step 1: Environment Configuration
1. Copy `.env.example` to `.env.local`
2. Fill in all the values above
3. Save the file

### Step 2: Build for GoDaddy
Run these commands:
```bash
npm run build:godaddy
npm run export
```

### Step 3: Upload to GoDaddy
1. All files will be in the `out` folder
2. Upload everything from `out` folder to your GoDaddy hosting
3. Use FTP client or GoDaddy File Manager

### Step 4: Domain Configuration
1. Point your domain to the hosting directory
2. Wait for DNS propagation (up to 24 hours)
3. Test the website

## ✅ Pre-Launch Checklist

- [ ] All environment variables filled in `.env.local`
- [ ] Contact form tested with real Web3Forms key
- [ ] Google Analytics tracking code active
- [ ] All social media links verified
- [ ] All content reviewed and approved
- [ ] Files uploaded to GoDaddy hosting
- [ ] Domain pointing to correct directory
- [ ] Website accessible at live domain

## 🆘 Troubleshooting

### Contact Form Not Working
- Check Web3Forms access key is correct
- Verify internet connection during form submission

### Analytics Not Tracking
- Verify GA4 Measurement ID format (G-XXXXXXXXXX)
- Check if ad blockers are interfering

### Website Not Loading
- Verify all files uploaded to correct directory
- Check domain DNS settings
- Wait for DNS propagation

## 📞 Support
If you encounter any issues during deployment, please provide:
1. Error messages (screenshots)
2. Domain name
3. What step you're stuck on

---
*Generated for MetaPulse Digital - Phase 1 Deployment*