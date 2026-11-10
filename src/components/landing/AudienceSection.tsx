import { ArrowIcon } from './Icons'
import { SectionHeading } from './SectionHeading'
import { ContactButton } from '../contact/ContactModalContext'

const audiences = [
  { title: 'Startups', text: 'Investor-ready books from launch.' },
  { title: 'SaaS and tech', text: 'MRR/ARR reporting and deferred revenue.' },
  { title: 'Ecommerce', text: 'Multi-channel sales, inventory, and GST.' },
  { title: 'Professional services', text: 'Retainers, WIP, and project margins.' },
  { title: 'Overseas businesses entering Australia', text: 'ATO-compliant setup.' },
  { title: 'SMEs that outgrew their bookkeeper', text: 'A full team, one contact.' },
]

export function AudienceSection() {
  return (
    <section id="who-we-help" className="section-space bg-[#0d3441] text-white">
      <div className="container-shell grid gap-12 lg:grid-cols-[.72fr_1.28fr] lg:gap-20">
        <div>
          <SectionHeading eyebrow="Who we help" title="Built for growing Australian businesses." light />
          <ContactButton className="mt-8 inline-flex items-center gap-2 rounded-lg border border-white/35 px-5 py-3 text-sm font-extrabold text-white transition hover:bg-white/10">
            Talk to our team <ArrowIcon className="h-4 w-4" />
          </ContactButton>
        </div>

        <div className="grid gap-x-9 sm:grid-cols-2">
          {audiences.map((audience, index) => (
            <article key={audience.title} className="border-t border-white/20 py-6">
              <span className="text-[11px] font-extrabold tracking-[0.18em] text-[#a7e8d8]">{String(index + 1).padStart(2, '0')}</span>
              <h3 className="mt-3 text-lg font-extrabold tracking-tight text-white">{audience.title}</h3>
              <p className="body-copy mt-2 text-sm leading-7 text-[#bed2d4]">{audience.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
