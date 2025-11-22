import React from 'react'
import Hero from './components/Hero'
import Problem from './components/Problem'
import Solution from './components/Solution'
import Features from './components/Features'
import UseCases from './components/UseCases'
import SocialProof from './components/SocialProof'
import Pricing from './components/Pricing'
import CTA from './components/CTA'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen w-full bg-black text-white">
      {/* Top nav */}
      <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-black/60 backdrop-blur-md">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-3">
          <div className="flex items-center gap-2">
            <div className="h-6 w-6 rounded-full bg-gradient-to-tr from-blue-500 via-sky-400 to-indigo-500 shadow-[0_0_20px_rgba(59,130,246,0.8)]" />
            <span className="text-sm font-semibold tracking-wide">InboxForge</span>
          </div>
          <nav className="hidden items-center gap-6 text-sm text-blue-300/90 sm:flex">
            <a href="#" className="hover:text-white">Features</a>
            <a href="#pricing" className="hover:text-white">Pricing</a>
            <a href="#" className="hover:text-white">Login</a>
            <a href="#" className="rounded-xl bg-blue-600 px-3 py-1.5 font-semibold text-white shadow-[0_0_20px_rgba(59,130,246,0.8)] hover:scale-[1.02]">Start Free</a>
          </nav>
        </div>
      </header>

      <main className="pt-14">
        <Hero />
        <Problem />
        <Solution />
        <Features />
        <UseCases />
        <SocialProof />
        <Pricing />
        <CTA />
      </main>

      <Footer />
    </div>
  )
}

export default App
