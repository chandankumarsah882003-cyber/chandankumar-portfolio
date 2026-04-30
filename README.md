# Chandankumar Portfolio Website

A simple, modern, and conversion-focused personal portfolio website built with Next.js App Router and Tailwind CSS.

## Stack

- Next.js (App Router)
- TypeScript
- Tailwind CSS
- Deployment target: Vercel

## Run locally

1. Install dependencies:
   - `npm install`
2. Start dev server:
   - `npm run dev`
3. Build for production:
   - `npm run build`

## Pages

- `/` Home (primary newsletter conversion page)
- `/about` About
- `/projects` Projects
- `/admin/login` Admin login
- `/admin` Protected admin editor

## Admin-only content management

This project now includes an admin-only editor for website content (text, image URLs, video URLs, and project entries).

### 1) Configure admin credentials

Create a `.env.local` file from `.env.example` and set:

- `ADMIN_EMAIL` (set to your email)
- `ADMIN_PASSWORD` (strong password)
- `ADMIN_JWT_SECRET` (long random secret)

### 2) Login and edit

1. Run the app (`npm run dev`).
2. Open `/admin/login`.
3. Login with your configured credentials.
4. Edit JSON in `/admin` and click **Save changes**.

The website reads content from `src/data/site-content.json`, so updates appear across pages.

## Newsletter integration

The newsletter form currently posts to a placeholder endpoint:

- `https://example.com/subscribe`

Replace this `action` URL in `src/components/newsletter-form.tsx` with your ConvertKit or Mailchimp form endpoint.
