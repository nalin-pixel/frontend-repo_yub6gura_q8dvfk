import React from 'react'
import { Check } from 'lucide-react'

const tiers = [
  {
    name: 'Starter', price: '$29/mo', features: ['1 brand voice', 'Basic automations', 'Email support']
  },
  {
    name: 'Pro', price: '$79/mo', features: ['3 brand voices', 'Advanced funnels', 'Priority support']
  },
  {
    name: 'Agency', price: '$199/mo', features: ['10+ accounts', 'Team roles', 'Audit logs']
  },
  {
    name: 'Enterprise', price: 'Contact', features: ['SLA', 'Custom integrations', 'SSO']
  },
]

const Pricing = () => {
  return (
    <section id="pricing" className="relative w-full bg-black py-24 text-white">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-10 text-center">
          <h2 className="text-3xl font-bold tracking-tight md:text-4xl">Pricing</h2>
        </div>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-4">
          {tiers.map((t) => (
            <div key={t.name} className="group rounded-2xl border border-white/10 bg-white/5 p-6 transition hover:border-blue-500/30 hover:bg-white/10">
              <div className="flex items-baseline justify-between">
                <h3 className="text-xl font-semibold">{t.name}</h3>
                <div className="text-blue-300">{t.price}</div>
              </div>
              <ul className="mt-4 space-y-2 text-sm text-blue-200/90">
                {t.features.map((f) => (
                  <li key={f} className="flex items-center gap-2">
                    <span className="inline-flex h-5 w-5 items-center justify-center rounded-full bg-blue-600/30 text-blue-300"><Check size={14} /></span>
                    {f}
                  </li>
                ))}
              </ul>
              <a href="#" className="mt-6 inline-flex w-full items-center justify-center rounded-xl bg-blue-600 px-4 py-2 text-sm font-semibold text-white shadow-[0_0_25px_rgba(59,130,246,0.6)] transition hover:scale-[1.01]">
                Choose {t.name}
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Pricing
