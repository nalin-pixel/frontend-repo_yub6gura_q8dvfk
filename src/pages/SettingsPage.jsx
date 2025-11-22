import React, { useState } from 'react'
import { User, Users, Shield, Bell, Lock, Globe2, Clock3, Mail, KeyRound, Building2, Plus, X, Edit3, Trash2, Wand2, MessageSquareQuote, ToggleLeft, PlugZap, Instagram, MessageCircle, Facebook, Store, CreditCard, Receipt, ChevronDown, Sliders, AlertTriangle, Moon, Languages, CalendarClock, Inbox } from 'lucide-react'

const BLUE = '#006BFF'

function SectionHeader({ icon: Icon, title, subtitle }) {
  return (
    <div className="mb-3 flex items-center justify-between">
      <div className="flex items-center gap-2">
        <div className="flex h-8 w-8 items-center justify-center rounded-lg border border-white/10 bg-white/5">
          <Icon size={16} className="text-blue-400" />
        </div>
        <div>
          <div className="text-sm font-semibold text-white">{title}</div>
          {subtitle ? <div className="text-xs text-white/60">{subtitle}</div> : null}
        </div>
      </div>
    </div>
  )
}

function Card({ children }) {
  return (
    <section className="rounded-2xl border border-white/10 bg-black/40 p-4">
      {children}
    </section>
  )
}

function Divider() {
  return <div className="my-4 h-px w-full bg-white/10" />
}

function Toggle({ checked, onChange, label }) {
  return (
    <button onClick={() => onChange(!checked)} className="group inline-flex items-center gap-3">
      <span className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${checked ? 'bg-blue-600' : 'bg-white/15'}`}>
        <span className={`absolute left-0.5 top-0.5 h-5 w-5 rounded-full bg-white transition-transform ${checked ? 'translate-x-5' : ''}`} />
      </span>
      {label ? <span className="text-sm text-white/80">{label}</span> : null}
    </button>
  )
}

function Select({ value, onChange, options }) {
  return (
    <div className="relative inline-block">
      <select value={value} onChange={(e)=>onChange(e.target.value)} className="appearance-none rounded-lg border border-white/10 bg-black/60 px-3 py-2 pr-8 text-sm text-white outline-none focus:ring-1 focus:ring-blue-500">
        {options.map(opt => <option key={opt} value={opt}>{opt}</option>)}
      </select>
      <ChevronDown size={16} className="pointer-events-none absolute right-2 top-1/2 -translate-y-1/2 text-white/60" />
    </div>
  )
}

function Input({ value, onChange, placeholder, type='text' }) {
  return (
    <input type={type} value={value} onChange={(e)=>onChange(e.target.value)} placeholder={placeholder} className="w-full rounded-lg border border-white/10 bg-black/60 px-3 py-2 text-sm text-white outline-none placeholder:text-white/40 focus:ring-1 focus:ring-blue-500" />
  )
}

function Textarea({ value, onChange, rows=3, placeholder }) {
  return (
    <textarea rows={rows} value={value} onChange={(e)=>onChange(e.target.value)} placeholder={placeholder} className="w-full rounded-lg border border-white/10 bg-black/60 px-3 py-2 text-sm text-white outline-none placeholder:text-white/40 focus:ring-1 focus:ring-blue-500" />
  )
}

export default function SettingsPage() {
  // Local demo state
  const [name, setName] = useState('Alex Rivera')
  const [email, setEmail] = useState('alex@inboxforge.com')
  const [tz, setTz] = useState('UTC')
  const [notifNew, setNotifNew] = useState(true)
  const [notifVip, setNotifVip] = useState(true)
  const [notifAi, setNotifAi] = useState(false)
  const [twoFA, setTwoFA] = useState(false)

  const [wsName, setWsName] = useState('Default Workspace')
  const [inviteEmail, setInviteEmail] = useState('')
  const [members, setMembers] = useState([
    { id: 1, name: 'You', email: email, role: 'Owner' },
    { id: 2, name: 'Sam Lee', email: 'sam@example.com', role: 'Admin' },
    { id: 3, name: 'Jordan Kim', email: 'jordan@example.com', role: 'Editor' },
  ])

  const [tone, setTone] = useState(50) // 0 Friendly, 50 Balanced, 100 Professional
  const [brandVoice, setBrandVoice] = useState('Friendly, concise, helpful. Avoid jargon.')
  const [exampleReplies, setExampleReplies] = useState('Thanks for reaching out! Here’s a quick answer...')
  const [avoidWords, setAvoidWords] = useState('guarantee, promise, 100%')
  const [aiAutoReply, setAiAutoReply] = useState(true)
  const [maxReplyLen, setMaxReplyLen] = useState(280)
  const [profanity, setProfanity] = useState(true)
  const [keywords, setKeywords] = useState(['DEMO', 'GUIDE', 'PRICING'])

  const [integrations, setIntegrations] = useState([
    { name: 'Instagram', key: 'instagram', connected: true },
    { name: 'TikTok', key: 'tiktok', connected: false },
    { name: 'Facebook', key: 'facebook', connected: false },
    { name: 'Shopify', key: 'shopify', connected: false },
  ])

  const [plan, setPlan] = useState('Pro')
  const [cycle, setCycle] = useState('Monthly')
  const [paymentMethod, setPaymentMethod] = useState('Visa •••• 4242')

  const [darkMode, setDarkMode] = useState(true)
  const [language, setLanguage] = useState('English')
  const [dtFormat, setDtFormat] = useState('YYYY-MM-DD, 24h')
  const [defaultView, setDefaultView] = useState('Unified Inbox')

  const IconMap = {
    Instagram: Instagram,
    TikTok: MessageCircle,
    Facebook: Facebook,
    Shopify: Store,
  }

  const handleInvite = () => {
    if (!inviteEmail) return
    setMembers([...members, { id: Date.now(), name: inviteEmail.split('@')[0], email: inviteEmail, role: 'Editor' }])
    setInviteEmail('')
  }

  const removeMember = (id) => setMembers(members.filter(m => m.id !== id))
  const changeRole = (id, role) => setMembers(members.map(m => m.id===id ? { ...m, role } : m))

  const addKeyword = (k) => {
    if (!k) return
    const val = k.toUpperCase()
    if (!keywords.includes(val)) setKeywords([...keywords, val])
  }
  const removeKeyword = (k) => setKeywords(keywords.filter(x => x !== k))

  return (
    <div className="min-h-screen w-full bg-black text-white">
      {/* Top bar */}
      <header className="sticky top-0 z-40 border-b border-white/10 bg-black/70 px-4 py-3 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="h-6 w-6 rounded-full bg-gradient-to-tr from-blue-500 via-sky-400 to-indigo-500 shadow-[0_0_18px_rgba(0,107,255,0.6)]" />
            <span className="text-sm font-semibold">InboxForge</span>
          </div>
          <nav className="flex items-center gap-3 text-sm text-white/70">
            <a href="/dashboard" className="hover:text-white">Dashboard</a>
            <a className="rounded-lg border border-white/10 bg-white/5 px-3 py-1.5 text-white hover:bg-white/10" href="/">Home</a>
          </nav>
        </div>
      </header>

      <main className="mx-auto max-w-6xl space-y-4 px-4 py-6">
        {/* 1. Account Settings */}
        <Card>
          <SectionHeader icon={User} title="Account Settings" subtitle="Manage your personal information and security" />
          <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
            <div className="flex items-center gap-3">
              <div className="h-14 w-14 shrink-0 rounded-full bg-white/10" />
              <div className="space-y-2">
                <button className="rounded-lg border border-white/10 bg-white/5 px-3 py-1.5 text-xs text-white hover:bg-white/10">Change Photo</button>
                <button className="rounded-lg border border-white/10 bg-white/5 px-3 py-1.5 text-xs text-white/70 hover:bg-white/10">Remove</button>
              </div>
            </div>
            <div className="md:col-span-2 grid grid-cols-1 gap-3 sm:grid-cols-2">
              <div>
                <label className="mb-1 block text-xs text-white/60">Name</label>
                <Input value={name} onChange={setName} placeholder="Your name" />
              </div>
              <div>
                <label className="mb-1 block text-xs text-white/60">Email</label>
                <Input value={email} onChange={setEmail} placeholder="name@company.com" type="email" />
              </div>
              <div>
                <label className="mb-1 block text-xs text-white/60">Timezone</label>
                <Select value={tz} onChange={setTz} options={[ 'UTC', 'PST', 'EST', 'CET', 'IST' ]} />
              </div>
              <div className="flex items-end">
                <button className="h-[38px] w-full rounded-lg bg-[var(--blue)] px-3 text-sm font-semibold text-white shadow-[0_0_16px_rgba(0,107,255,0.5)] hover:brightness-110" style={{ ['--blue']: BLUE }}>Reset Password</button>
              </div>
            </div>
          </div>
          <Divider />
          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 md:grid-cols-3">
            <Toggle checked={notifNew} onChange={setNotifNew} label="Notify on new messages" />
            <Toggle checked={notifVip} onChange={setNotifVip} label="Notify on VIP leads" />
            <Toggle checked={notifAi} onChange={setNotifAi} label="Notify on AI actions" />
            <Toggle checked={twoFA} onChange={setTwoFA} label="Two-factor authentication" />
          </div>
        </Card>

        {/* 2. Workspace Settings */}
        <Card>
          <SectionHeader icon={Building2} title="Workspace Settings" subtitle="Team members and permissions" />
          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
            <div>
              <label className="mb-1 block text-xs text-white/60">Workspace name</label>
              <Input value={wsName} onChange={setWsName} />
            </div>
            <div className="flex items-end gap-2">
              <Input value={inviteEmail} onChange={setInviteEmail} placeholder="Invite by email" />
              <button onClick={handleInvite} className="shrink-0 rounded-lg bg-[var(--blue)] px-3 py-2 text-sm font-semibold text-white hover:brightness-110" style={{ ['--blue']: BLUE }}>
                Invite
              </button>
            </div>
          </div>
          <div className="mt-3 rounded-xl border border-white/10">
            <div className="grid grid-cols-12 gap-2 border-b border-white/10 px-3 py-2 text-xs text-white/60">
              <div className="col-span-4">Member</div>
              <div className="col-span-4">Email</div>
              <div className="col-span-3">Role</div>
              <div className="col-span-1 text-right">Actions</div>
            </div>
            {members.map(m => (
              <div key={m.id} className="grid grid-cols-12 items-center gap-2 px-3 py-2 text-sm">
                <div className="col-span-4 flex items-center gap-2">
                  <div className="h-7 w-7 rounded-full bg-white/10" />
                  <span className="text-white/90">{m.name}</span>
                </div>
                <div className="col-span-4 text-white/70">{m.email}</div>
                <div className="col-span-3">
                  <Select value={m.role} onChange={(v)=>changeRole(m.id, v)} options={[ 'Owner', 'Admin', 'Editor' ]} />
                </div>
                <div className="col-span-1 text-right">
                  <button onClick={()=>removeMember(m.id)} className="rounded-lg border border-white/10 bg-white/5 px-2 py-1 text-xs text-white/70 hover:bg-white/10">Remove</button>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-3">
            <div className="mb-1 text-xs text-white/60">Permissions editor</div>
            <div className="grid grid-cols-2 gap-2 sm:grid-cols-4">
              {['Manage Billing','Connect Accounts','Edit Brand Voice','Manage Funnels','View Analytics','Manage Members','Export Data','Dangerous Actions'].map((p)=> (
                <label key={p} className="flex items-center gap-2 rounded-lg border border-white/10 bg-white/5 px-3 py-2 text-sm text-white/80">
                  <input type="checkbox" className="h-4 w-4 accent-blue-600" defaultChecked /> {p}
                </label>
              ))}
            </div>
          </div>
        </Card>

        {/* 3. AI Behavior Settings */}
        <Card>
          <SectionHeader icon={Wand2} title="AI Behavior Settings" subtitle="Tune how InboxForge replies and behaves" />
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
            <div>
              <div className="mb-1 text-xs text-white/60">Tone</div>
              <div className="flex items-center justify-between text-xs text-white/60">
                <span>Friendly</span><span>Balanced</span><span>Professional</span>
              </div>
              <input type="range" min={0} max={100} value={tone} onChange={(e)=>setTone(parseInt(e.target.value))} className="mt-2 w-full accent-blue-600" />
            </div>
            <div>
              <div className="mb-1 text-xs text-white/60">Max reply length</div>
              <input type="range" min={80} max={800} step={20} value={maxReplyLen} onChange={(e)=>setMaxReplyLen(parseInt(e.target.value))} className="w-full accent-blue-600" />
              <div className="mt-1 text-xs text-white/60">{maxReplyLen} characters</div>
            </div>
          </div>
          <div className="mt-3 grid grid-cols-1 gap-3 md:grid-cols-2">
            <div>
              <div className="mb-1 text-xs text-white/60">Brand voice</div>
              <Textarea value={brandVoice} onChange={setBrandVoice} rows={3} placeholder="Describe your tone" />
            </div>
            <div>
              <div className="mb-1 text-xs text-white/60">Example replies</div>
              <Textarea value={exampleReplies} onChange={setExampleReplies} rows={3} placeholder="Provide a few example replies" />
            </div>
            <div className="md:col-span-2">
              <div className="mb-1 text-xs text-white/60">Words/phrases to avoid</div>
              <Textarea value={avoidWords} onChange={setAvoidWords} rows={2} placeholder="Comma-separated list" />
            </div>
          </div>
          <Divider />
          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 md:grid-cols-3">
            <Toggle checked={aiAutoReply} onChange={setAiAutoReply} label="AI auto-reply" />
            <Toggle checked={profanity} onChange={setProfanity} label="Profanity filter" />
          </div>
          <div className="mt-4">
            <div className="mb-2 text-xs text-white/60">Keyword triggers for DM funnels</div>
            <div className="flex flex-wrap gap-2">
              {keywords.map(k => (
                <span key={k} className="inline-flex items-center gap-1 rounded-full border border-white/10 bg-white/5 px-2 py-1 text-xs text-white/80">
                  {k}
                  <button onClick={()=>removeKeyword(k)} className="text-white/50 hover:text-white"><X size={12} /></button>
                </span>
              ))}
            </div>
            <div className="mt-2 flex gap-2">
              <Input value="" onChange={()=>{}} placeholder="Type a keyword and press Add" />
              {/* Simple add with prompt to keep UI minimal */}
              <button onClick={() => {
                const k = window.prompt('Add keyword:')
                if (k) addKeyword(k)
              }} className="rounded-lg bg-[var(--blue)] px-3 py-2 text-sm font-semibold text-white hover:brightness-110" style={{ ['--blue']: BLUE }}>Add</button>
            </div>
          </div>
        </Card>

        {/* 4. Connected Accounts */}
        <Card>
          <SectionHeader icon={PlugZap} title="Connected Accounts" subtitle="Manage your integrations" />
          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 md:grid-cols-4">
            {integrations.map((i) => {
              const Ico = IconMap[i.name]
              return (
                <div key={i.key} className="rounded-xl border border-white/10 bg-black/40 p-3">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      {Ico ? <Ico size={16} className="text-blue-400" /> : null}
                      <span className="text-sm text-white/90">{i.name}</span>
                    </div>
                    {i.connected ? (
                      <span className="rounded-full bg-emerald-500/10 px-2 py-0.5 text-xs text-emerald-300">Connected</span>
                    ) : (
                      <span className="rounded-full bg-white/10 px-2 py-0.5 text-xs text-white/70">Not connected</span>
                    )}
                  </div>
                  <div className="mt-3 flex gap-2">
                    {i.connected ? (
                      <>
                        <button className="flex-1 rounded-lg border border-white/10 bg-white/5 px-2 py-1.5 text-xs text-white/80 hover:bg-white/10">Disconnect</button>
                        <button className="flex-1 rounded-lg border border-amber-300/20 bg-amber-500/10 px-2 py-1.5 text-xs text-amber-300 hover:bg-amber-500/20">Reconnect</button>
                      </>
                    ) : (
                      <button className="w-full rounded-lg bg-[var(--blue)] px-2 py-1.5 text-xs font-semibold text-white hover:brightness-110" style={{ ['--blue']: BLUE }}>Connect</button>
                    )}
                  </div>
                </div>
              )
            })}
          </div>
        </Card>

        {/* 5. Billing Settings */}
        <Card>
          <SectionHeader icon={CreditCard} title="Billing" subtitle="Plan and payment" />
          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
            <div className="rounded-xl border border-white/10 bg-black/40 p-3">
              <div className="text-sm text-white/80">Current plan</div>
              <div className="mt-1 text-xl font-semibold text-white">{plan}</div>
              <div className="mt-2 flex items-center gap-2 text-sm text-white/70">
                <span>Billing cycle</span>
                <Select value={cycle} onChange={setCycle} options={[ 'Monthly', 'Yearly' ]} />
              </div>
              <div className="mt-3 flex gap-2">
                <button className="flex-1 rounded-lg bg-[var(--blue)] px-3 py-2 text-sm font-semibold text-white hover:brightness-110" style={{ ['--blue']: BLUE }}>Upgrade</button>
                <button className="flex-1 rounded-lg border border-white/10 bg-white/5 px-3 py-2 text-sm text-white/80 hover:bg-white/10">Downgrade</button>
              </div>
            </div>
            <div className="rounded-xl border border-white/10 bg-black/40 p-3">
              <div className="text-sm text-white/80">Payment method</div>
              <div className="mt-1 text-white/90">{paymentMethod}</div>
              <div className="mt-3 flex gap-2">
                <button className="rounded-lg border border-white/10 bg-white/5 px-3 py-2 text-sm text-white/80 hover:bg-white/10">Update Card</button>
                <button className="rounded-lg border border-white/10 bg-white/5 px-3 py-2 text-sm text-white/80 hover:bg-white/10">Add Method</button>
              </div>
            </div>
          </div>
          <div className="mt-3 rounded-xl border border-white/10">
            <div className="grid grid-cols-12 gap-2 border-b border-white/10 px-3 py-2 text-xs text-white/60">
              <div className="col-span-5">Invoice</div>
              <div className="col-span-3">Date</div>
              <div className="col-span-2">Amount</div>
              <div className="col-span-2 text-right">Download</div>
            </div>
            {[1,2,3].map(i => (
              <div key={i} className="grid grid-cols-12 items-center gap-2 px-3 py-2 text-sm">
                <div className="col-span-5 text-white/80">INV-00{i} • {plan} Plan</div>
                <div className="col-span-3 text-white/60">2025-01-0{i}</div>
                <div className="col-span-2 text-white/80">${(29*i).toFixed(2)}</div>
                <div className="col-span-2 text-right">
                  <button className="rounded-lg border border-white/10 bg-white/5 px-2 py-1 text-xs text-white/80 hover:bg-white/10">PDF</button>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-3">
            <button className="text-sm text-white/60 underline underline-offset-4 hover:text-white">Cancel subscription</button>
          </div>
        </Card>

        {/* 6. App Preferences */}
        <Card>
          <SectionHeader icon={Sliders} title="App Preferences" subtitle="Personalize how InboxForge looks and feels" />
          <div className="grid grid-cols-1 gap-4 md:grid-cols-4">
            <div className="flex items-center justify-between rounded-xl border border-white/10 bg-black/40 p-3 md:col-span-1">
              <div>
                <div className="text-sm text-white/80">Dark mode</div>
                <div className="text-xs text-white/60">Use dark theme</div>
              </div>
              <Toggle checked={darkMode} onChange={setDarkMode} />
            </div>
            <div className="md:col-span-1">
              <div className="mb-1 text-xs text-white/60">Language</div>
              <Select value={language} onChange={setLanguage} options={[ 'English', 'Spanish', 'German', 'French' ]} />
            </div>
            <div className="md:col-span-1">
              <div className="mb-1 text-xs text-white/60">Date/Time format</div>
              <Select value={dtFormat} onChange={setDtFormat} options={[ 'YYYY-MM-DD, 24h', 'MM/DD/YYYY, 12h' ]} />
            </div>
            <div className="md:col-span-1">
              <div className="mb-1 text-xs text-white/60">Default inbox view</div>
              <Select value={defaultView} onChange={setDefaultView} options={[ 'Unified Inbox', 'Needs Review', 'Leads', 'AI Suggestions' ]} />
            </div>
          </div>
        </Card>

        {/* 7. Danger Zone */}
        <Card>
          <SectionHeader icon={AlertTriangle} title="Danger Zone" subtitle="Irreversible actions. Proceed with caution." />
          <div className="grid grid-cols-1 gap-2 sm:grid-cols-2 md:grid-cols-4">
            <button className="rounded-xl border border-white/10 bg-white/5 px-3 py-2 text-sm text-white/80 hover:bg-white/10">Export data</button>
            <button className="rounded-xl border border-white/10 bg-white/5 px-3 py-2 text-sm text-white/80 hover:bg-white/10">Reset AI training</button>
            <button className="rounded-xl border border-red-500/30 bg-red-500/10 px-3 py-2 text-sm font-semibold text-red-300 hover:bg-red-500/20">Delete workspace</button>
            <button className="rounded-xl border border-red-500/30 bg-red-500/10 px-3 py-2 text-sm font-semibold text-red-300 hover:bg-red-500/20">Delete account</button>
          </div>
        </Card>
      </main>
    </div>
  )
}
