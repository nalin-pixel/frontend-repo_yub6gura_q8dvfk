import React, { useEffect, useState } from 'react'
import Hero from './components/Hero'
import Problem from './components/Problem'
import Solution from './components/Solution'
import Features from './components/Features'
import UseCases from './components/UseCases'
import SocialProof from './components/SocialProof'
import Pricing from './components/Pricing'
import CTA from './components/CTA'
import Footer from './components/Footer'
import AuthModal from './components/AuthModal'
import { useNavigate } from 'react-router-dom'

function App() {
  const [authOpen, setAuthOpen] = useState(false)
  const [user, setUser] = useState(null)
  const navigate = useNavigate()

  useEffect(() => {
    const token = localStorage.getItem('inboxforge_token')
    const API_BASE = import.meta.env.VITE_BACKEND_URL || ''
    if (token) {
      fetch(`${API_BASE}/auth/me`, { headers: { Authorization: `Bearer ${token}` } })
        .then(r => r.ok ? r.json() : null)
        .then(me => me && setUser(me))
        .catch(() => {})
    }
  }, [])

  const logout = () => {
    localStorage.removeItem('inboxforge_token')
    setUser(null)
  }

  const goDashboard = () => {
    navigate('/dashboard')
  }

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
            <a href="#features" className="hover:text-white">Features</a>
            <a href="#pricing" className="hover:text-white">Pricing</a>
            {user ? (
              <div className="flex items-center gap-2">
                <button onClick={goDashboard} className="rounded-xl bg-white/10 px-3 py-1.5 font-semibold text-white hover:bg-white/20">Open Dashboard</button>
                <span className="text-white/80">Hi, {user.name || user.email}</span>
                <button onClick={logout} className="rounded-xl bg-white/10 px-3 py-1.5 font-semibold text-white hover:bg-white/20">Logout</button>
              </div>
            ) : (
              <>
                <button onClick={() => setAuthOpen(true)} className="hover:text-white">Login</button>
                <button onClick={() => setAuthOpen(true)} className="rounded-xl bg-blue-600 px-3 py-1.5 font-semibold text-white shadow-[0_0_20px_rgba(59,130,246,0.8)] hover:scale-[1.02]">Start Free</button>
              </>
            )}
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

      <AuthModal
        open={authOpen}
        onClose={() => setAuthOpen(false)}
        onAuthed={({ user }) => { setUser(user); navigate('/dashboard') }}
      />
    </div>
  )
}

export default App
