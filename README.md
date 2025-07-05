# Hafthap Ali M - Portfolio

A modern, responsive portfolio website built with React, TypeScript, and Tailwind CSS.

## Features

- 🎨 Modern design with smooth animations
- 📱 Fully responsive layout
- 📧 Working contact form with email integration
- 🚀 Fast performance with Vite
- 🎯 SEO optimized
- ♿ Accessible design

## Contact Form Setup

The contact form uses Netlify Functions to send emails through Gmail. To set it up:

### 1. Enable Gmail App Passwords

1. Go to your Google Account settings: https://myaccount.google.com/
2. Navigate to "Security" → "2-Step Verification" (enable if not already)
3. Go to "App passwords": https://myaccount.google.com/apppasswords
4. Generate a new app password for "Mail"
5. Copy the 16-character password (remove spaces)

### 2. Configure Environment Variables in Netlify

In your Netlify site dashboard:

1. Go to "Site settings" → "Environment variables"
2. Add these variables:
   - `GMAIL_USER`: Your Gmail address (e.g., hafthafalimpt@gmail.com)
   - `GMAIL_APP_PASSWORD`: The 16-character app password from step 1

### 3. Deploy

The contact form will automatically work once deployed to Netlify with the environment variables set.

## Local Development

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build
```

## Technologies Used

- React 18
- TypeScript
- Tailwind CSS
- Framer Motion
- Vite
- Netlify Functions
- Nodemailer

## Contact

- Email: hafthafalimpt@gmail.com
- Phone: +91 6383837514
- Location: Chennai, Tamil Nadu

---

Made with ❤️ and lots of data