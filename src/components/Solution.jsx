import React from 'react'
import { Check } from 'lucide-react'

const bullets = [
  'AI auto-replies with your voice.',
  'Handles comments, DMs, support, and leads.',
  'Learns your brand instantly.',
]

const Solution = () => {
  return (
    <section className="relative w-full bg-gradient-to-b from-black to-slate-950 py-20 text-white">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-8 text-center">
          <h2 className="text-3xl font-bold tracking-tight md:text-4xl">Your AI Inbox Assistant</h2>
        </div>
        <div className="mx-auto grid max-w-4xl grid-cols-1 gap-4">
          {bullets.map((b) => (
            <div key={b} className="flex items-center gap-3 rounded-xl border border-white/10 bg-white/5 p-4">
              <span className="flex h-6 w-6 items-center justify-center rounded-full bg-blue-600/30 text-blue-300">
                <Check size={16} />
              </span>
              <p className="text-blue-100">{b}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Solution
