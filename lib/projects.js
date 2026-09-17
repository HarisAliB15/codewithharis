const legacyProjects = [
  {
    image: '/project-weather-app.png',
    tag: 'React Native',
    name: 'Weather App',
    desc: 'Real-time weather with dynamic UI, accurate forecasts, and location-based updates.',
  },
  {
    tag: 'React Native',
    name: 'Movie Hub',
    desc: 'Movie catalog with search, trailers, cast details, and personalized watchlists.',
  },
  {
    image: '/project-andy-ai.png',
    tag: 'React Native',
    name: 'Andy AI Voice Assistant',
    desc: 'Hands-free voice assistant powered by modern AI for smart on-the-fly responses.',
  },
  {
    image: '/project-snap-savior.png',
    tag: 'Web App',
    name: 'Snap Savior',
    desc: 'Secure web app for saving, organizing, and sharing photos online.',
  },
];

const zorvale = {
  slug: 'zorvale',
  image: '/projects/zorvale/feature-graphic-photo-v2.png',
  tag: 'React Native · AI',
  name: 'Zorvale',
  tagline: 'AI Fitness & Nutrition App · Live on Google Play',
  desc:
    'AI-powered fitness & nutrition app. Snap a photo, get an instant AI meal breakdown. Built and shipped solo — from architecture to Play Store release.',
  techTags: ['Expo', 'TypeScript', 'Supabase', 'Firebase'],
  playStoreUrl: 'https://play.google.com/store/apps/details?id=com.ironpulse.app2026&pcampaignid=web_share',
  caseStudyTagline:
    'AI-powered fitness & nutrition app · Founder & Lead Engineer · Live on Google Play',
  heroImage: '/projects/zorvale/feature-graphic-photo-v2.png',
  galleryImages: [
    '/projects/zorvale/screenshot-2.jpg',
    '/projects/zorvale/screenshot-3.jpg',
    '/projects/zorvale/screenshot-4.jpg',
    '/projects/zorvale/screenshot-5.jpg',
    '/projects/zorvale/screenshot-6.png',
    '/projects/zorvale/screenshot-7.jpg',
    '/projects/zorvale/screenshot-8.jpg',
  ],
  problem:
    'Most fitness apps force manual logging or lock core features behind a signup wall. Zorvale lets people try the full experience as a guest — and log a meal just by taking a photo.',
  whatItDoes:
    'Personalized workout programs, live session tracking, AI-powered food logging, and progress insights — wrapped in an app that survives bad networks and interrupted sessions.',
  howItsBuilt: [
    'Auth & data: Firebase (Google + anonymous guest) → Supabase third-party JWT, Postgres with RLS, and a guest-to-account merge so trial data never gets lost or duplicated on sign-in',
    'AI food logging: camera/text input → server-side estimate via Supabase Edge Functions → user review → diary — no API keys exposed client-side, no photo gallery stored',
    'Resilience: offline-tolerant caching (TanStack Query + MMKV), session recovery if the app is killed mid-workout',
    'Polish: home-screen widget, light/dark theme, regional ad consent, Sentry crash monitoring in production',
    'Release: versioned EAS builds, CI (lint/typecheck), Play signing, public privacy policy',
  ],
  stack:
    'Expo · React Native · TypeScript · Firebase Auth · Supabase (RLS, Edge Functions) · TanStack Query · EAS / Google Play · Sentry',
};

export const projects = [...legacyProjects, zorvale];

export function getProjectBySlug(slug) {
  return projects.find((project) => project.slug === slug);
}

export function getCaseStudySlugs() {
  return projects.filter((project) => project.slug).map((project) => ({ slug: project.slug }));
}
