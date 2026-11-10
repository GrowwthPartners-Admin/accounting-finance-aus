// Everything that changes from one country page to the next lives in this file.
// Update it here and the header, pop-up, WhatsApp button, footer and SEO tags all follow.

const siteUrlFromEnv = import.meta.env.VITE_SITE_URL?.trim().replace(/\/+$/, '')

const whatsappMessage = "Hi, I'm interested in your accounting services in Australia."

export const site = {
  country: 'Australia',
  url: siteUrlFromEnv || 'https://accounting-services-australia.growwthpartners.com',

  // There is no Australian number yet, so this is the main Growwth Partners line for now.
  // When the Australian number is ready, change these three lines and nothing else.
  phoneDisplay: '+65 9861 5600',
  phoneHref: 'tel:+6598615600',
  whatsappHref: `https://wa.me/6598615600?text=${encodeURIComponent(whatsappMessage)}`,
  email: 'jd@growwthpartners.com',

  calendlyUrl: 'https://calendly.com/jd-growwthpartners/demo',
  mainSiteUrl: 'https://growwthpartners.com/',
  privacyUrl: 'https://growwthpartners.com/privacy-policy',
  termsUrl: 'https://growwthpartners.com/terms',

  // The hero photo. It is also the preview image when someone shares the page.
  heroImage: {
    src: '/image/hero-financial-reports.jpg',
    width: 1536,
    height: 1024,
    alt: 'Financial charts on a tablet next to a calculator and printed reports',
  },

  // Sent with every lead so the team can tell which page it came from.
  campaignMessage: 'Accounting-AU-Marketing-page',

  // Google Ads conversion that fires on the thank-you page.
  adsConversionId: 'AW-18185462224/psZmCIXJxKUdENDDwN9D',
}
