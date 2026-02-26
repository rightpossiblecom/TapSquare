# TapSquare Landing Page

This is the official landing page for TapSquare, a fast-paced reaction tapping game.

## Features

- **Responsive Design**: Mobile-first responsive layout that works on all devices
- **Dark Mode Support**: Built-in dark and light theme support
- **Modern UI**: Clean, professional design using Tailwind CSS
- **SEO Optimized**: Proper metadata and semantic HTML
- **Performance**: Next.js 16 with optimized performance

## Pages Included

### Main Landing Page (`/`)
- Hero section with game overview
- Features showcase (6 key features)
- How it works guide (3-step process)
- FAQ section with expandable questions
- Call-to-action buttons
- Footer with links

### Privacy Policy (`/privacy-policy`)
- Comprehensive privacy policy
- Data collection and usage information
- Third-party services disclosure
- Children's privacy protection

### Terms of Service (`/terms`)
- Full terms and conditions
- User responsibilities
- Intellectual property rights
- Limitation of liability

### Help Center (`/help`)
- Getting started guide
- Gameplay instructions
- Settings and features guide
- Troubleshooting section
- Contact information

### Contact Page (`/contact`)
- Multiple contact options
- Quick links to resources
- Response time information
- Support category guidance

## Quick Start

### Installation

```bash
# Navigate to landing_page directory
cd landing_page

# Install dependencies
npm install
# or
pnpm install
```

### Development

```bash
# Start the development server
npm run dev
# or
pnpm dev
```

The site will be available at `http://localhost:3000`

### Build for Production

```bash
# Create optimized production build
npm run build

# Start production server
npm run start
```

## Project Structure

```
landing_page/
├── app/
│   ├── layout.tsx          # Root layout with metadata
│   ├── page.tsx            # Home page
│   ├── globals.css         # Global styles
│   ├── privacy-policy/
│   │   └── page.tsx        # Privacy policy
│   ├── terms/
│   │   └── page.tsx        # Terms of service
│   ├── help/
│   │   └── page.tsx        # Help center
│   └── contact/
│       └── page.tsx        # Contact page
├── public/                 # Static assets
├── package.json
├── tsconfig.json
├── tailwind.config.js
└── next.config.ts
```

## Customization Guide

### Update App Branding

1. **Color Scheme**: Search for `emerald-500` and replace with your brand color
2. **Logo**: 
   - Update the "TS" logo marks in navigation and branding areas
   - Replace with an image by adding to `/public` folder
   - Update `src="/path/to/logo.png"`
3. **Contact Information**: 
   - Replace `support@tapsquare.app` with your email
   - Replace `privacy@tapsquare.app` with your privacy email

### Add Download Links

Update the download buttons in:
- [app/page.tsx](app/page.tsx) - Hero CTA section and bottom CTA section
- Replace `href="#"` with actual app store links (Google Play, Apple App Store)

### Update FAQs

Edit the FAQ section in [app/page.tsx](app/page.tsx) to add, remove, or modify questions.

### Modify Features

Update the 6-feature grid in [app/page.tsx](app/page.tsx) with your specific app features and descriptions.

## Technology Stack

- **Framework**: Next.js 16.1.6
- **React**: 19.2.3
- **Styling**: Tailwind CSS 4
- **Language**: TypeScript 5
- **Linting**: ESLint 9

## Performance Considerations

- Static pages for fast load times
- Tailwind CSS for minimal CSS bundle
- No external analytics or tracking
- Optimized images and assets
- SEO-friendly markdown metadata

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## Deployment

This site can be deployed to:

- **Vercel** (Recommended - Built by the creators of Next.js)
- **Netlify**
- **AWS Amplify**
- **Self-hosted** (Node.js server or similar)

### Deploy to Vercel

```bash
npm install -g vercel
vercel
```

## License

All rights reserved. TapSquare © 2026. See `Terms of Service` for details.

## Support

For questions or issues with the landing page, contact: support@tapsquare.app

---

**Last Updated**: February 26, 2026
