import { site } from '../config/site'
import { faqs } from '../content/faqs'

// Schema.org data that helps search engines understand who we are and what the page answers.

export const businessSchema = {
  '@context': 'https://schema.org',
  '@type': 'AccountingService',
  name: 'Growwth Partners',
  description:
    'Outsourced accounting for Australian startups and SMEs. Xero, MYOB, BAS and GST support, and monthly reporting.',
  url: `${site.url}/`,
  logo: `${site.url}/favicon.png`,
  image: `${site.url}${site.heroImage.src}`,
  telephone: site.phoneDisplay,
  email: site.email,
  areaServed: { '@type': 'Country', name: 'Australia' },
  // The company is headquartered in Singapore and serves Australian clients from there.
  address: { '@type': 'PostalAddress', addressCountry: 'SG' },
  founder: { '@type': 'Person', name: 'Jatin Detwani' },
  sameAs: [
    'https://www.linkedin.com/company/growwth-partners/',
    'https://www.youtube.com/@Growwth-Partners',
  ],
}

export const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqs.map((faq) => ({
    '@type': 'Question',
    name: faq.question,
    acceptedAnswer: { '@type': 'Answer', text: faq.answer },
  })),
}
