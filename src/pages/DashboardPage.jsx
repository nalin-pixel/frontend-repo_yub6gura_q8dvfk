import React, { useEffect, useState } from 'react'
import Dashboard from '../components/Dashboard'

const API_BASE = import.meta.env.VITE_BACKEND_URL || ''

export default function DashboardPage() {
  const [user, setUser] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const token = localStorage.getItem('inboxforge_token')
    if (!token) {
      window.location.replace('/')
      return
    }
    fetch(`${API_BASE}/auth/me`, { headers: { Authorization: `Bearer ${token}` } })
      .then(async (r) => {
        if (!r.ok) throw new Error('unauthorized')
        const me = await r.json()
        setUser(me)
      })
      .catch(() => {
        localStorage.removeItem('inboxforge_token')
        window.location.replace('/')
      })
      .finally(() => setLoading(false))
  }, [])

  const logout = () => {
    localStorage.removeItem('inboxforge_token')
    window.location.replace('/')
  }

  if (loading) {
    return (
      <div className="min-h-screen w-full bg-black text-white">
        <div className="flex h-screen items-center justify-center">
          <div className="h-10 w-10 animate-spin rounded-full border-2 border-blue-500 border-t-transparent" />
        </div>
      </div>
    )
  }

  return <Dashboard user={user} onLogout={logout} />
}
