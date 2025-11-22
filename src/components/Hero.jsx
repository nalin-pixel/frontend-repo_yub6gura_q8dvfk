import React from 'react'
import { motion } from 'framer-motion'
import { Play, ArrowRight } from 'lucide-react'
import Spline from '@splinetool/react-spline'

const Hero = () => {
  return (
    <section className="relative min-h-[92vh] w-full overflow-hidden bg-black text-white">
      {/* Background grid */}
      <div className="pointer-events-none absolute inset-0 opacity-[0.06]" aria-hidden>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(59,130,246,0.25),transparent_50%)]" />
        <svg className="absolute inset-0 h-full w-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="grid" width="32" height="32" patternUnits="userSpaceOnUse">
              <path d="M 32 0 L 0 0 0 32" fill="none" stroke="white" strokeWidth="0.5" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>

      {/* Spline 3D animation */}
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/4cHQr84zOGAHOehh/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      {/* Content */}
      <div className="relative mx-auto flex max-w-7xl flex-col items-center px-6 pt-28 pb-24 text-center">
        <motion.span
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1 text-xs uppercase tracking-wider text-blue-300 backdrop-blur-sm"
        >
          Built for creators, agencies, and ecommerce
        </motion.span>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="text-balance text-4xl font-extrabold leading-[1.05] tracking-tight sm:text-5xl md:text-6xl"
        >
          Automate Your DMs, Scale Your Inbox.
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.25 }}
          className="mt-5 max-w-2xl text-pretty text-base text-blue-200 sm:text-lg"
        >
          InboxForge is the AI inbox manager that replies to comments, answers DMs, and captures leads — 24/7.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.35 }}
          className="mt-8 flex flex-col items-center gap-4 sm:flex-row"
        >
          <a
            href="#pricing"
            className="group relative inline-flex items-center justify-center rounded-xl bg-blue-600 px-6 py-3 text-sm font-semibold text-white shadow-[0_0_30px_rgba(59,130,246,0.6)] transition-transform hover:scale-[1.02] focus:outline-none"
          >
            <span className="relative z-10 flex items-center gap-2">
              Start Free Trial <ArrowRight size={18} className="transition-transform group-hover:translate-x-0.5" />
            </span>
            <span className="pointer-events-none absolute inset-0 -z-0 rounded-xl bg-blue-500 blur-md opacity-60" aria-hidden />
          </a>

          <button className="group inline-flex items-center gap-2 rounded-xl border border-white/15 bg-white/5 px-6 py-3 text-sm font-medium text-white/90 backdrop-blur-sm transition hover:bg-white/10">
            <div className="flex h-6 w-6 items-center justify-center rounded-full bg-blue-600/20 text-blue-300">
              <Play size={16} />
            </div>
            Watch Demo
          </button>
        </motion.div>

        {/* Logos or mini stats */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.6 }}
          className="mt-12 grid w-full max-w-3xl grid-cols-2 gap-3 text-left sm:grid-cols-4"
        >
          {[
            ['15h', 'Saved weekly'],
            ['24/7', 'Hands-off replies'],
            ['+32%', 'More leads'],
            ['<2m', 'Setup time'],
          ].map(([k, v]) => (
            <div key={k} className="rounded-lg border border-white/10 bg-white/5 p-4">
              <div className="text-2xl font-bold text-white">{k}</div>
              <div className="text-xs text-blue-300/80">{v}</div>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Bottom fade */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-44 bg-gradient-to-t from-black to-transparent" />
    </section>
  )
}

export default Hero
