import React from 'react'

const cases = [
  { label: 'Creators', text: 'Stop spending hours replying.' },
  { label: 'UGC', text: 'Instantly answer pricing inquiries.' },
  { label: 'Shopify', text: 'Automate support without hiring.' },
  { label: 'Agencies', text: 'Manage 10+ accounts effortlessly.' },
]

const UseCases = () => {
  return (
    <section className="relative w-full bg-gradient-to-b from-slate-950 to-black py-20 text-white">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-8 text-center">
          <h2 className="text-3xl font-bold tracking-tight md:text-4xl">Use Cases</h2>
        </div>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-4">
          {cases.map((c) => (
            <div key={c.label} className="rounded-xl border border-white/10 bg-white/5 p-5">
              <div className="text-sm uppercase tracking-wide text-blue-300">{c.label}</div>
              <div className="mt-1 text-blue-100">{c.text}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default UseCases
