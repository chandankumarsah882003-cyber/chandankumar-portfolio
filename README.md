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

## Newsletter integration

The newsletter form currently posts to a placeholder endpoint:

- `https://example.com/subscribe`

Replace this `action` URL in `src/components/newsletter-form.tsx` with your ConvertKit or Mailchimp form endpoint.
