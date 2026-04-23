import { useState } from 'react'
import { Mail, MapPin, Phone, Send } from 'lucide-react'
import AnimatedSection from './AnimatedSection.jsx'

export default function ContactCTA() {
  const [submitted, setSubmitted] = useState(false)

  function handleSubmit(event) {
    event.preventDefault()
    setSubmitted(true)
  }

  return (
    <AnimatedSection id="contact" className="bg-slate-950 py-20 text-white sm:py-24">
      <div className="section-shell">
        <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
          <div>
            <p className="inline-flex rounded-md border border-teal-300/30 bg-teal-300/10 px-3 py-1 text-xs font-semibold uppercase text-teal-100">
              Contact and demo request
            </p>
            <h2 className="mt-4 text-3xl font-semibold leading-tight sm:text-4xl lg:text-5xl">
              Ready to adapt one device to your next monitoring use case?
            </h2>
            <p className="mt-5 text-base leading-7 text-slate-300 sm:text-lg">
              Share your deployment context, sensor needs, and security requirements. This frontend
              form is a placeholder and can be connected to a CRM or backend later.
            </p>

            <div className="mt-8 grid gap-4">
              <ContactLine icon={Mail} label="Email" value="hello@spectron.example" />
              <ContactLine icon={Phone} label="Phone" value="+94 00 000 0000" />
              <ContactLine icon={MapPin} label="Location" value="IoT lab and deployment pilots" />
            </div>
          </div>

          <form onSubmit={handleSubmit} className="rounded-lg border border-white/10 bg-white p-5 text-slate-950 shadow-2xl sm:p-6">
            <div className="grid gap-4 sm:grid-cols-2">
              <label className="grid gap-2 text-sm font-semibold">
                Name
                <input
                  required
                  type="text"
                  name="name"
                  className="rounded-lg border border-slate-200 px-4 py-3 text-sm outline-none transition focus:border-teal-500 focus:ring-4 focus:ring-teal-100"
                  placeholder="Your name"
                />
              </label>
              <label className="grid gap-2 text-sm font-semibold">
                Work email
                <input
                  required
                  type="email"
                  name="email"
                  className="rounded-lg border border-slate-200 px-4 py-3 text-sm outline-none transition focus:border-teal-500 focus:ring-4 focus:ring-teal-100"
                  placeholder="you@company.com"
                />
              </label>
              <label className="grid gap-2 text-sm font-semibold">
                Industry
                <select
                  name="industry"
                  className="rounded-lg border border-slate-200 px-4 py-3 text-sm outline-none transition focus:border-teal-500 focus:ring-4 focus:ring-teal-100"
                >
                  <option>Greenhouse monitoring</option>
                  <option>Cold storage</option>
                  <option>Class attendance</option>
                  <option>Facility monitoring</option>
                  <option>Other</option>
                </select>
              </label>
              <label className="grid gap-2 text-sm font-semibold">
                Device count
                <input
                  type="number"
                  min="1"
                  name="devices"
                  className="rounded-lg border border-slate-200 px-4 py-3 text-sm outline-none transition focus:border-teal-500 focus:ring-4 focus:ring-teal-100"
                  placeholder="10"
                />
              </label>
            </div>
            <label className="mt-4 grid gap-2 text-sm font-semibold">
              What do you want to monitor?
              <textarea
                required
                name="message"
                rows="5"
                className="resize-none rounded-lg border border-slate-200 px-4 py-3 text-sm outline-none transition focus:border-teal-500 focus:ring-4 focus:ring-teal-100"
                placeholder="Tell us about your sensors, site, alerts, battery needs, and security requirements."
              />
            </label>

            <button type="submit" className="primary-button mt-5 w-full">
              Send demo request <Send className="h-4 w-4" aria-hidden="true" />
            </button>

            {submitted ? (
              <p className="mt-4 rounded-lg bg-teal-50 px-4 py-3 text-sm font-semibold text-teal-800">
                Demo request captured in the frontend placeholder.
              </p>
            ) : null}
          </form>
        </div>
      </div>
    </AnimatedSection>
  )
}

function ContactLine({ icon: LucideIcon, label, value }) {
  return (
    <div className="flex items-center gap-3 rounded-lg border border-white/10 bg-white/5 p-4">
      <span className="grid h-10 w-10 place-items-center rounded-lg bg-teal-300/10 text-teal-200">
        <LucideIcon className="h-5 w-5" aria-hidden="true" />
      </span>
      <div>
        <p className="text-xs font-semibold uppercase text-slate-400">{label}</p>
        <p className="font-semibold text-white">{value}</p>
      </div>
    </div>
  )
}
