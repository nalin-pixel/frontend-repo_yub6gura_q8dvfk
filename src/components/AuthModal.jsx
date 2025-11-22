import React, { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X, Mail, Lock, User2, CheckCircle2 } from 'lucide-react'

const API_BASE = import.meta.env.VITE_BACKEND_URL || ''

function parseError(detail) {
  if (!detail) return 'Something went wrong'
  if (typeof detail === 'string') return detail
  if (Array.isArray(detail)) {
    // FastAPI validation errors
    const first = detail[0]
    if (first?.msg) return first.msg
    try { return JSON.stringify(detail) } catch { return 'Unexpected error' }
  }
  if (typeof detail === 'object') {
    if (detail.msg) return detail.msg
    try { return JSON.stringify(detail) } catch { return 'Unexpected error' }
  }
  return 'Something went wrong'
}

export default function AuthModal({ open, onClose, onAuthed }) {
  const [mode, setMode] = useState('login') // 'login' | 'register'
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [name, setName] = useState('')
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')
  const [success, setSuccess] = useState('')

  useEffect(() => {
    if (!open) {
      setError('')
      setSuccess('')
      setPassword('')
    }
  }, [open])

  const submit = async (e) => {
    e.preventDefault()
    setError('')
    setSuccess('')
    setLoading(true)
    try {
      const endpoint = mode === 'login' ? '/auth/login' : '/auth/register'
      const body = mode === 'login' ? { email, password } : { email, password, name }
      const res = await fetch(`${API_BASE}${endpoint}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(body)
      })
      const data = await res.json().catch(() => ({}))
      if (!res.ok) throw new Error(parseError(data?.detail))
      const token = data.access_token
      localStorage.setItem('inboxforge_token', token)
      setSuccess(mode === 'login' ? 'Welcome back!' : 'Account created!')
      // fetch profile
      const meRes = await fetch(`${API_BASE}/auth/me`, {
        headers: { Authorization: `Bearer ${token}` }
      })
      const me = await meRes.json()
      onAuthed?.({ token, user: me })
      setTimeout(() => {
        onClose?.()
      }, 600)
    } catch (err) {
      setError(err.message || 'Something went wrong')
    } finally {
      setLoading(false)
    }
  }

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/70 backdrop-blur"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <motion.div
            className="relative w-full max-w-md rounded-2xl border border-white/10 bg-neutral-950 p-6 shadow-2xl"
            initial={{ y: 20, scale: 0.98, opacity: 0 }}
            animate={{ y: 0, scale: 1, opacity: 1 }}
            exit={{ y: 10, opacity: 0 }}
            transition={{ type: 'spring', stiffness: 260, damping: 24 }}
          >
            <button
              onClick={onClose}
              className="absolute right-3 top-3 rounded-lg p-2 text-white/70 hover:bg-white/10 hover:text-white"
            >
              <X size={18} />
            </button>

            <div className="mb-5 flex items-center gap-2">
              <div className="h-6 w-6 rounded-full bg-gradient-to-tr from-blue-500 via-sky-400 to-indigo-500 shadow-[0_0_18px_rgba(59,130,246,0.9)]" />
              <div className="text-sm font-semibold tracking-wide">InboxForge</div>
            </div>

            <div className="mb-4 flex gap-2 rounded-lg bg-white/5 p-1">
              <button
                onClick={() => setMode('login')}
                className={`flex-1 rounded-md px-3 py-2 text-sm ${mode === 'login' ? 'bg-blue-600 text-white' : 'text-blue-200/80 hover:bg-white/5'}`}
              >
                Login
              </button>
              <button
                onClick={() => setMode('register')}
                className={`flex-1 rounded-md px-3 py-2 text-sm ${mode === 'register' ? 'bg-blue-600 text-white' : 'text-blue-200/80 hover:bg-white/5'}`}
              >
                Register
              </button>
            </div>

            <form onSubmit={submit} className="space-y-3">
              {mode === 'register' && (
                <div className="group">
                  <label className="mb-1 block text-xs text-white/60">Name</label>
                  <div className="flex items-center gap-2 rounded-lg border border-white/10 bg-white/5 px-3 py-2 focus-within:border-blue-500/70">
                    <User2 size={16} className="text-blue-300/80" />
                    <input
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="w-full bg-transparent text-sm text-white placeholder:text-white/40 focus:outline-none"
                      placeholder="Jane Creator"
                    />
                  </div>
                </div>
              )}
              <div className="group">
                <label className="mb-1 block text-xs text-white/60">Email</label>
                <div className="flex items-center gap-2 rounded-lg border border-white/10 bg-white/5 px-3 py-2 focus-within:border-blue-500/70">
                  <Mail size={16} className="text-blue-300/80" />
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full bg-transparent text-sm text-white placeholder:text-white/40 focus:outline-none"
                    placeholder="you@brand.com"
                    required
                  />
                </div>
              </div>
              <div className="group">
                <label className="mb-1 block text-xs text-white/60">Password</label>
                <div className="flex items-center gap-2 rounded-lg border border-white/10 bg-white/5 px-3 py-2 focus-within:border-blue-500/70">
                  <Lock size={16} className="text-blue-300/80" />
                  <input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="w-full bg-transparent text-sm text-white placeholder:text-white/40 focus:outline-none"
                    placeholder="••••••••"
                    required
                    minLength={6}
                  />
                </div>
              </div>

              {error && (
                <div className="flex items-center gap-2 rounded-lg border border-red-500/30 bg-red-500/10 px-3 py-2 text-sm text-red-200">
                  {error}
                </div>
              )}
              {success && (
                <div className="flex items-center gap-2 rounded-lg border border-emerald-500/30 bg-emerald-500/10 px-3 py-2 text-sm text-emerald-200">
                  <CheckCircle2 size={16} /> {success}
                </div>
              )}

              <button
                disabled={loading}
                className="mt-1 w-full rounded-lg bg-blue-600 py-2 text-sm font-semibold text-white shadow-[0_0_20px_rgba(59,130,246,0.7)] hover:scale-[1.01] disabled:opacity-60"
              >
                {loading ? 'Please wait…' : (mode === 'login' ? 'Login' : 'Create account')}
              </button>
            </form>

            <p className="mt-3 text-center text-xs text-white/50">
              By continuing you agree to our Terms and Privacy.
            </p>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
