import React from 'react'

const SocialProof = () => {
  return (
    <section className="relative w-full bg-black py-20 text-white">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-10 text-center">
          <h2 className="text-3xl font-bold tracking-tight md:text-4xl">Loved by fast-moving teams</h2>
          <p className="mt-2 text-blue-300/80">Real results, real time-savings.</p>
        </div>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
          {[1,2,3].map((i) => (
            <div key={i} className="rounded-xl border border-white/10 bg-white/5 p-6">
              <div className="text-lg font-semibold">“Saved 15 hours per week.”</div>
              <div className="mt-2 text-sm text-blue-200/90">— Placeholder testimonial</div>
            </div>
          ))}
        </div>
        <div className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-4">
          {[
            ['15+ hrs', 'Saved weekly'],
            ['98%', 'Satisfaction'],
            ['10x', 'Response speed'],
            ['24/7', 'Coverage'],
          ].map(([k, v]) => (
            <div key={k} className="rounded-xl border border-white/10 bg-white/5 p-4 text-center">
              <div className="text-2xl font-bold text-white">{k}</div>
              <div className="text-xs text-blue-300/80">{v}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default SocialProof
