export const pricingInquiries = {
  starter: {
    budget: '100',
    service: 'mobile',
    message: `Hi! I'm interested in the Starter mobile plan ($100+) — Essential app builder.

I'd like a mobile app build up to 3 screens, following my Figma design.

Please share next steps to get started.`,
  },
  growth: {
    budget: '400',
    service: 'mobile',
    message: `Hi! I'm interested in the Growth mobile plan ($400+) — Standard mobile app development.

I'd like a mobile app up to 10 screens with provided API integrations.

Please share next steps to get started.`,
  },
  advanced: {
    budget: '700',
    service: 'mobile',
    message: `Hi! I'm interested in the Advanced mobile plan ($700+) — Pro custom app development.

I'd like full Figma-to-React Native development, deployment, and handoff.

Please share next steps to get started.`,
  },
  'web-starter': {
    budget: '100',
    service: 'website',
    message: `Hi! I'm interested in the Starter web plan ($100+) — Essential landing page.

I'd like a responsive landing page with SEO basics and a contact form.

Please share next steps to get started.`,
  },
  'web-growth': {
    budget: '400',
    service: 'website',
    message: `Hi! I'm interested in the Growth web plan ($400+) — Standard website development.

I'd like a multi-page business website up to 5 pages with CMS-ready structure.

Please share next steps to get started.`,
  },
  'web-advanced': {
    budget: '700',
    service: 'webapp',
    message: `Hi! I'm interested in the Advanced web plan ($700+) — Pro web application.

I'd like a full-stack web app with custom features, admin tools, and deployment.

Please share next steps to get started.`,
  },
};

export function getPricingContactHref(slug) {
  return `/contact?plan=${slug}`;
}
