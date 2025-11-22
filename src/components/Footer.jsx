import React from 'react'

const Footer = () => {
  const links = ['Features','Pricing','Login','Contact']
  return (
    <footer className="relative w-full bg-black py-10 text-white">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-6 sm:flex-row">
        <div className="text-lg font-bold">InboxForge</div>
        <nav className="flex items-center gap-6 text-sm text-blue-300/90">
          {links.map(l => (
            <a key={l} href="#" className="transition hover:text-blue-400">{l}</a>
          ))}
        </nav>
        <div className="text-xs text-blue-400/70">© {new Date().getFullYear()} InboxForge. All rights reserved.</div>
      </div>
    </footer>
  )
}

export default Footer
