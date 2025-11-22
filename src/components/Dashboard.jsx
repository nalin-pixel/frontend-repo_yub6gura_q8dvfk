import React, { useMemo } from 'react'
import { Menu, Bell, User, ChevronDown, Plus, LogOut, CheckCircle2, XCircle, Mail, Zap, Flame, Rocket, MessageSquare } from 'lucide-react'

function TopNav({ user, onLogout }) {
  return (
    <header className="sticky top-0 z-40 flex h-14 items-center justify-between border-b border-white/10 bg-black/70 px-4 backdrop-blur-lg">
      <div className="flex items-center gap-3">
        <button className="inline-flex h-9 w-9 items-center justify-center rounded-lg border border-white/10 text-white/70 hover:bg-white/5 lg:hidden">
          <Menu size={18} />
        </button>
        <div className="flex items-center gap-2">
          <div className="h-6 w-6 rounded-full bg-gradient-to-tr from-blue-500 via-sky-400 to-indigo-500 shadow-[0_0_18px_rgba(59,130,246,0.7)]" />
          <span className="text-sm font-semibold tracking-wide">InboxForge</span>
        </div>
        <nav className="ml-6 hidden items-center gap-6 text-sm text-blue-300/80 lg:flex">
          <a className="hover:text-white" href="#">Inbox</a>
          <a className="hover:text-white" href="#">Automations</a>
          <a className="hover:text-white" href="#">Analytics</a>
          <a className="hover:text-white" href="#">Accounts</a>
          <a className="hover:text-white" href="#">Settings</a>
        </nav>
      </div>
      <div className="flex items-center gap-2">
        <button className="relative inline-flex h-9 w-9 items-center justify-center rounded-lg border border-white/10 text-white/70 hover:bg-white/5">
          <Bell size={18} />
          <span className="absolute -right-0.5 -top-0.5 h-2.5 w-2.5 rounded-full bg-blue-500" />
        </button>
        <div className="group relative">
          <button className="flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-2.5 py-1.5 text-sm text-white/90 hover:bg-white/10">
            <div className="flex h-6 w-6 items-center justify-center rounded-full bg-gradient-to-br from-slate-700 to-slate-900 text-xs font-semibold">
              {(user?.name || user?.email || '?').slice(0,1).toUpperCase()}
            </div>
            <span className="hidden sm:block max-w-[140px] truncate">{user?.name || user?.email}</span>
            <ChevronDown size={16} className="text-white/60" />
          </button>
          <div className="invisible absolute right-0 mt-2 w-56 translate-y-1 rounded-xl border border-white/10 bg-black/90 p-2 opacity-0 shadow-xl backdrop-blur-md transition-all group-hover:visible group-hover:translate-y-0 group-hover:opacity-100">
            <div className="px-2 py-1.5 text-xs text-white/60">Workspace</div>
            <button className="flex w-full items-center gap-2 rounded-lg px-2 py-2 text-sm text-white/80 hover:bg-white/5">
              <User size={16} /> Default Workspace
            </button>
            <div className="my-2 h-px bg-white/10" />
            <button onClick={onLogout} className="flex w-full items-center gap-2 rounded-lg px-2 py-2 text-sm text-red-300 hover:bg-white/5">
              <LogOut size={16} /> Logout
            </button>
          </div>
        </div>
      </div>
    </header>
  )
}

function Sidebar() {
  const items = [
    { label: 'Unified Inbox', icon: Mail },
    { label: 'DM Funnels', icon: Rocket },
    { label: 'Reply Templates', icon: MessageSquare },
    { label: 'Brand Voice', icon: Flame },
    { label: 'Integrations', icon: Zap },
    { label: 'Help Center', icon: CheckCircle2 },
  ]
  return (
    <aside className="hidden w-60 shrink-0 border-r border-white/10 bg-black/40 p-3 lg:block">
      <div className="space-y-1">
        {items.map((it) => (
          <button key={it.label} className="group flex w-full items-center gap-3 rounded-xl px-3 py-2 text-sm text-white/70 hover:bg-white/5 hover:text-white">
            <it.icon size={16} className="text-blue-300/80 group-hover:text-blue-400" />
            <span>{it.label}</span>
          </button>
        ))}
      </div>
    </aside>
  )
}

function StatCard({ title, value, trend, icon: Icon }) {
  return (
    <div className="rounded-2xl border border-white/10 bg-gradient-to-b from-white/[0.03] to-transparent p-4 shadow-[0_0_24px_rgba(59,130,246,0.12)]">
      <div className="flex items-center justify-between">
        <span className="text-sm text-white/60">{title}</span>
        {Icon ? <Icon size={18} className="text-blue-400" /> : null}
      </div>
      <div className="mt-2 text-3xl font-semibold text-white">{value}</div>
      <div className="mt-1 text-xs text-blue-300/80">{trend}</div>
    </div>
  )
}

function ActivityFeed() {
  const items = [
    { text: "Replied to DM on @clientname", time: "2m" },
    { text: "Flagged VIP lead: 'Can I book a call?'", time: "5m" },
    { text: "Auto-hid spam comment on TikTok", time: "12m" },
    { text: "Sent funnel message to keyword: GUIDE", time: "15m" },
    { text: "AI suggested reply for @brand mention", time: "22m" },
  ]
  return (
    <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-4">
      <div className="mb-3 flex items-center justify-between">
        <div className="text-sm font-medium text-white">Activity</div>
      </div>
      <div className="max-h-64 space-y-3 overflow-auto pr-1">
        {items.map((it, idx) => (
          <div key={idx} className="flex items-start justify-between rounded-xl border border-white/10 bg-black/40 px-3 py-2">
            <div className="flex items-center gap-3">
              <div className="h-8 w-8 shrink-0 rounded-full bg-gradient-to-br from-blue-600 to-indigo-600" />
              <div className="text-sm text-white/80">{it.text}</div>
            </div>
            <div className="ml-3 shrink-0 text-xs text-white/50">{it.time}</div>
          </div>
        ))}
      </div>
    </div>
  )
}

function InboxPreview() {
  const tabs = ["All", "Needs Review", "AI Suggestion", "Leads", "Spam"]
  const items = useMemo(() => (
    [
      { name: "Ava Martinez", snippet: "Hey! Can you share pricing?", tag: "needs review", time: "1m" },
      { name: "VIP: Noah Chen", snippet: "Can I book a call this week?", tag: "VIP lead", time: "6m" },
      { name: "@clientname", snippet: "Thanks for the quick help!", tag: "AI handled", time: "14m" },
      { name: "SpamBot 42", snippet: "FREE followers now!!!", tag: "spam", time: "29m" },
    ]
  ), [])
  return (
    <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-4">
      <div className="mb-3 flex items-center justify-between">
        <div className="text-sm font-medium text-white">Inbox Preview</div>
        <div className="flex items-center gap-2 text-xs">
          {tabs.map((t) => (
            <button key={t} className="rounded-lg border border-white/10 px-2 py-1 text-white/70 hover:bg-white/5 hover:text-white">{t}</button>
          ))}
        </div>
      </div>
      <div className="space-y-2">
        {items.map((it, idx) => (
          <button key={idx} className="flex w-full items-center justify-between rounded-xl border border-white/10 bg-black/40 px-3 py-2 text-left hover:bg-white/[0.06]">
            <div className="flex items-center gap-3">
              <div className="h-8 w-8 rounded-full bg-white/10" />
              <div>
                <div className="text-sm text-white/90">{it.name}</div>
                <div className="text-xs text-white/60">{it.snippet}</div>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <span className="rounded-full bg-blue-500/10 px-2 py-0.5 text-xs text-blue-300">{it.tag}</span>
              <span className="text-xs text-white/50">{it.time}</span>
            </div>
          </button>
        ))}
      </div>
    </div>
  )
}

function SetupChecklist() {
  const items = [
    { label: 'Connect Instagram', done: true },
    { label: 'Connect TikTok', done: true },
    { label: 'Set brand voice', done: false },
    { label: 'Add keywords for funnels', done: false },
    { label: 'Create 3 reply templates', done: false },
  ]
  const completed = items.filter(i => i.done).length
  return (
    <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-4">
      <div className="mb-2 text-sm font-medium text-white">Setup Checklist</div>
      <div className="space-y-2">
        {items.map((i) => (
          <div key={i.label} className="flex items-center justify-between rounded-xl border border-white/10 bg-black/40 px-3 py-2">
            <span className="text-sm text-white/80">{i.label}</span>
            {i.done ? (
              <span className="inline-flex items-center gap-1 rounded-full bg-emerald-500/10 px-2 py-0.5 text-xs text-emerald-300"><CheckCircle2 size={14}/> Done</span>
            ) : (
              <span className="inline-flex items-center gap-1 rounded-full bg-white/10 px-2 py-0.5 text-xs text-white/70"><XCircle size={14}/> Pending</span>
            )}
          </div>
        ))}
      </div>
      <div className="mt-3 text-xs text-white/60">{completed} / {items.length} completed</div>
      <button className="mt-3 w-full rounded-xl bg-blue-600 px-3 py-2 text-sm font-semibold text-white shadow-[0_0_16px_rgba(59,130,246,0.5)] hover:brightness-110">Complete Setup</button>
    </div>
  )
}

function ConnectedAccounts() {
  const items = [
    { name: 'Instagram', connected: true },
    { name: 'TikTok', connected: false },
    { name: 'Facebook', connected: false },
    { name: 'Shopify', connected: false },
  ]
  return (
    <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-4">
      <div className="mb-2 text-sm font-medium text-white">Connected Accounts</div>
      <div className="grid grid-cols-2 gap-3 sm:grid-cols-2 md:grid-cols-4">
        {items.map((i) => (
          <div key={i.name} className="rounded-xl border border-white/10 bg-black/40 p-3">
            <div className="flex items-center justify-between">
              <span className="text-sm text-white/80">{i.name}</span>
              {i.connected ? (
                <span className="rounded-full bg-emerald-500/10 px-2 py-0.5 text-xs text-emerald-300">Connected</span>
              ) : (
                <span className="rounded-full bg-white/10 px-2 py-0.5 text-xs text-white/70">Not Connected</span>
              )}
            </div>
            <button className={`mt-3 w-full rounded-lg px-2 py-1 text-sm font-semibold ${i.connected ? 'bg-white/10 text-white/60' : 'bg-blue-600 text-white shadow-[0_0_14px_rgba(59,130,246,0.4)] hover:brightness-110'}`}>{i.connected ? 'Manage' : 'Connect'}</button>
          </div>
        ))}
      </div>
    </div>
  )
}

function QuickActions() {
  const actions = [
    { label: 'Create DM Funnel' },
    { label: 'Add Custom Reply Template' },
    { label: 'Train Brand Voice' },
    { label: 'View Analytics' },
  ]
  return (
    <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-4">
      <div className="mb-2 text-sm font-medium text-white">Quick Actions</div>
      <div className="grid grid-cols-1 gap-2 sm:grid-cols-2 md:grid-cols-4">
        {actions.map((a) => (
          <button key={a.label} className="flex items-center justify-center gap-2 rounded-xl border border-white/10 bg-black/40 px-3 py-2 text-sm text-white/80 hover:bg-white/5">
            <Plus size={16} className="text-blue-400" /> {a.label}
          </button>
        ))}
      </div>
    </div>
  )
}

export default function Dashboard({ user, onLogout }) {
  return (
    <div className="min-h-screen w-full bg-black text-white">
      <TopNav user={user} onLogout={onLogout} />
      <div className="mx-auto flex max-w-7xl gap-4 px-4 py-4">
        <Sidebar />
        <main className="flex-1 space-y-4">
          {/* Welcome Header */}
          <section className="rounded-2xl border border-white/10 bg-gradient-to-br from-white/[0.04] to-transparent p-5">
            <div className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-center">
              <div>
                <h1 className="text-xl font-semibold">Your AI Inbox Assistant Is Ready</h1>
                <p className="text-sm text-white/70">Here’s everything happening across your accounts.</p>
              </div>
              <div className="flex items-center gap-2">
                <span className="rounded-full border border-blue-400/30 bg-blue-500/10 px-3 py-1 text-xs text-blue-300">Connected accounts: <span className="font-semibold">1</span> / 3</span>
                <button className="rounded-xl bg-blue-600 px-3 py-2 text-sm font-semibold text-white shadow-[0_0_18px_rgba(59,130,246,0.55)] hover:brightness-110"><Plus size={16} className="mr-1 inline"/> Connect New Account</button>
              </div>
            </div>
          </section>

          {/* Stat Cards */}
          <section className="grid grid-cols-1 gap-3 sm:grid-cols-2 md:grid-cols-3">
            <StatCard title="Total Messages Today" value="124" trend="↑ 12% this week" icon={Mail} />
            <StatCard title="AI-Handled Automatically" value="78" trend="↑ 9% this week" icon={Zap} />
            <StatCard title="Leads Identified" value="16" trend="↑ 6% this week" icon={Flame} />
          </section>

          {/* Activity + Inbox + Right rail */}
          <section className="grid grid-cols-1 gap-4 lg:grid-cols-3">
            <div className="space-y-4 lg:col-span-2">
              <ActivityFeed />
              <InboxPreview />
              <QuickActions />
            </div>
            <div className="space-y-4">
              <SetupChecklist />
              <ConnectedAccounts />
            </div>
          </section>
        </main>
      </div>
    </div>
  )
}
