import React from 'react'
import { MessageCircle, Workflow, ShoppingCart, Star, Shield, Filter } from 'lucide-react'

const features = [
  {
    title: 'AI Comment Responder',
    icon: MessageCircle,
    desc: 'Instant, on-brand replies to comments across your socials.'
  },
  {
    title: 'Smart DM Funnels',
    icon: Workflow,
    desc: 'Keyword-triggered sequences that capture and qualify leads.'
  },
  {
    title: 'Order & Tracking Lookups',
    icon: ShoppingCart,
    desc: 'Native Shopify integration to answer “where’s my order?”.'
  },
  {
    title: 'VIP Lead Detection',
    icon: Star,
    desc: 'Auto-flags high-intent buyers so you can jump in fast.'
  },
  {
    title: 'Spam Filtering & Auto-Hiding',
    icon: Filter,
    desc: 'Keep your threads clean and focused on real customers.'
  },
  {
    title: 'Enterprise-Grade Security',
    icon: Shield,
    desc: 'Role-based access, audit logs, and data encryption.'
  }
]

const Features = () => {
  return (
    <section className="relative w-full bg-black py-20 text-white">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-10 text-center">
          <h2 className="text-3xl font-bold tracking-tight md:text-4xl">Feature Highlights</h2>
        </div>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3">
          {features.map(({ title, icon: Icon, desc }) => (
            <div key={title} className="group rounded-xl border border-white/10 bg-white/5 p-5 transition hover:bg-white/10">
              <div className="mb-3 inline-flex rounded-lg bg-blue-600/20 p-2 text-blue-300">
                <Icon size={20} />
              </div>
              <h3 className="text-lg font-semibold">{title}</h3>
              <p className="mt-1 text-sm text-blue-200/90">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Features
