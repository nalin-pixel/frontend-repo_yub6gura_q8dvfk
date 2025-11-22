import React from 'react'

const Problem = () => {
  return (
    <section className="relative w-full bg-black py-20 text-white">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-8 text-center">
          <h2 className="text-3xl font-bold tracking-tight md:text-4xl">The Problem</h2>
          <p className="mt-3 text-blue-300/80">Creators, agencies, and shops drown in messages.</p>
        </div>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-4">
          {['Too many DMs','Missed leads','Endless repetitive questions','Lost sales'].map((t) => (
            <div key={t} className="rounded-xl border border-white/10 bg-white/5 p-5 text-center">
              <div className="text-sm font-medium text-blue-100">{t}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Problem
