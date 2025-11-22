import React from 'react'
import { ArrowRight } from 'lucide-react'

const CTA = () => {
  return (
    <section className="relative w-full bg-gradient-to-b from-black via-black to-slate-950 py-24 text-white">
      <div className="mx-auto max-w-5xl px-6 text-center">
        <h2 className="text-balance text-3xl font-extrabold tracking-tight md:text-5xl">Turn Your Inbox Into a Conversion Machine.</h2>
        <p className="mx-auto mt-3 max-w-2xl text-blue-300/90">Launch in minutes. See results this week.</p>
        <a href="#pricing" className="mt-8 inline-flex items-center justify-center gap-2 rounded-2xl bg-blue-600 px-6 py-3 text-sm font-semibold text-white shadow-[0_0_35px_rgba(59,130,246,0.8)] transition hover:scale-[1.02]">
          Start Your Free Trial <ArrowRight size={18} />
        </a>
      </div>
    </section>
  )
}

export default CTA
