import { ArrowIcon } from './Icons'
import { SectionHeading } from './SectionHeading'
import { ContactButton } from '../contact/ContactModalContext'

const steps = [
  { title: 'Review', text: 'We assess your books, software, and BAS position.' },
  { title: 'Set up', text: 'We fix gaps and configure Xero or MYOB properly.' },
  { title: 'Run monthly', text: 'Bookkeeping, reconciliation, and reporting on a fixed rhythm.' },
  { title: 'Improve', text: "We use each month's results to sharpen the process." },
]

export function ProcessSection() {
  return (
    <section id="how-it-works" className="section-space bg-white">
      <div className="container-shell">
        <div className="flex flex-col justify-between gap-7 md:flex-row md:items-end">
          <SectionHeading eyebrow="How it works" title="Up and running in four steps." />
          <ContactButton className="inline-flex shrink-0 items-center gap-2 self-start rounded-lg border border-[#b9d6cb] bg-white px-5 py-3 text-sm font-extrabold text-[#176b67] transition hover:border-[#176b67] hover:text-[#0d514d] md:self-auto">
            Book a free call <ArrowIcon className="h-4 w-4" />
          </ContactButton>
        </div>

        <ol className="mt-14 grid gap-8 md:grid-cols-2 xl:grid-cols-4 xl:gap-0">
          {steps.map((step, index) => (
            <li key={step.title} className="relative border-t-2 border-[#c7dcd5] pr-7 pt-8 xl:pl-7 xl:first:pl-0">
              <span className="absolute -top-3 left-0 flex h-6 w-6 items-center justify-center rounded-full border-[6px] border-white bg-[#2e9278] xl:left-7 xl:first:left-0" aria-hidden="true" />
              <span className="text-[11px] font-extrabold uppercase tracking-[0.2em] text-[#176b67]">Step {String(index + 1).padStart(2, '0')}</span>
              <h3 className="mt-4 text-xl font-extrabold tracking-tight text-[#10313c]">{step.title}</h3>
              <p className="body-copy mt-3 max-w-[260px] text-sm leading-7 text-[#5a6d72] min-[1920px]:max-w-[300px]">{step.text}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
