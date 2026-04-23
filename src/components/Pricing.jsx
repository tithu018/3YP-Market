import { CheckCircle2 } from 'lucide-react'
import AnimatedSection from './AnimatedSection.jsx'
import SectionHeading from './SectionHeading.jsx'
import { pricing } from '../data/siteData.js'

export default function Pricing() {
  return (
    <AnimatedSection id="pricing" className="bg-white py-20 sm:py-24">
      <div className="section-shell">
        <SectionHeading
          eyebrow="Pricing placeholders"
          title="Flexible packages for prototypes, deployments, and platform partnerships."
          description="The frontend is ready for real prices later. For now, the structure supports custom startup pricing while the product scope is validated."
          align="center"
        />

        <div className="mt-12 grid gap-5 lg:grid-cols-3">
          {pricing.map((tier) => (
            <div
              key={tier.name}
              className={
                tier.highlighted
                  ? 'rounded-lg border-2 border-teal-500 bg-slate-950 p-6 text-white shadow-xl shadow-teal-950/20'
                  : 'card'
              }
            >
              {tier.highlighted ? (
                <p className="mb-4 inline-flex rounded-md bg-teal-300 px-3 py-1 text-xs font-bold uppercase text-slate-950">
                  Recommended
                </p>
              ) : null}
              <h3 className={`text-2xl font-bold ${tier.highlighted ? 'text-white' : 'text-slate-950'}`}>
                {tier.name}
              </h3>
              <p className={`mt-3 text-sm leading-6 ${tier.highlighted ? 'text-slate-300' : 'text-slate-600'}`}>
                {tier.description}
              </p>
              <p className="mt-6 text-4xl font-bold">{tier.price}</p>
              <ul className="mt-6 space-y-3">
                {tier.features.map((feature) => (
                  <li key={feature} className="flex gap-3 text-sm">
                    <CheckCircle2
                      className={`mt-0.5 h-5 w-5 shrink-0 ${
                        tier.highlighted ? 'text-teal-200' : 'text-teal-700'
                      }`}
                      aria-hidden="true"
                    />
                    <span className={tier.highlighted ? 'text-slate-100' : 'text-slate-700'}>{feature}</span>
                  </li>
                ))}
              </ul>
              <a
                href="#contact"
                className={tier.highlighted ? 'secondary-button mt-8 w-full' : 'primary-button mt-8 w-full'}
              >
                Talk to us
              </a>
            </div>
          ))}
        </div>
      </div>
    </AnimatedSection>
  )
}
