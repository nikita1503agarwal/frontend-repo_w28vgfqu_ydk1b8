import React from 'react'
import { motion } from 'framer-motion'
import { ChartLine, Palette, Target, Sparkles, Users, BarChart3 } from 'lucide-react'

const cards = [
  { icon: Target, title: 'Social Media Strategy', desc: 'Roadmaps tailored for platforms and audiences that drive measurable outcomes.' },
  { icon: Palette, title: 'Content Creation & Design', desc: 'High-impact visuals, carousels, and reels with consistent branding.' },
  { icon: ChartLine, title: 'Paid Ads', desc: 'Full-funnel campaigns across Meta, Google, LinkedIn, and TikTok.' },
  { icon: Sparkles, title: 'Brand Positioning', desc: 'Define narratives, tone, and category differentiation for recognition.' },
  { icon: Users, title: 'Influencer Outreach', desc: 'Creator collaborations, UGC, and partnerships that convert.' },
  { icon: BarChart3, title: 'Analytics & Scaling', desc: 'Dashboards, cohort tracking, and growth loops for scale.' },
]

const SMM = () => {
  return (
    <section id="smm" className="relative w-full bg-slate-950 py-20">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(700px_400px_at_80%_10%,rgba(59,130,246,0.25),transparent_60%)]" />
      <div className="relative mx-auto max-w-7xl px-6">
        <div className="mb-10 flex items-end justify-between gap-6">
          <div>
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">Social Media Marketing Services</h2>
            <p className="mt-3 max-w-2xl text-blue-100/90">Vibrant visuals, high-performance campaigns, and data-led scaling — all with electric blue highlights.</p>
          </div>
          <div className="hidden sm:block rounded-xl border border-blue-500/20 bg-slate-900/60 px-4 py-2 text-xs text-blue-200">Blue neon accents • Mockups • Dashboards</div>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {cards.map(({ icon: Icon, title, desc }) => (
            <motion.div key={title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }} className="group relative overflow-hidden rounded-2xl border border-blue-500/20 bg-slate-900/60 p-6 backdrop-blur">
              <div className="absolute -right-10 -top-10 h-24 w-24 rounded-full bg-blue-500/20 blur-2xl transition group-hover:scale-125" />
              <Icon className="h-6 w-6 text-blue-400 drop-shadow-[0_0_10px_rgba(59,130,246,0.7)]" />
              <h3 className="mt-3 text-lg font-semibold text-white">{title}</h3>
              <p className="mt-2 text-sm text-blue-100/90">{desc}</p>
              <div className="mt-6 h-28 rounded-lg bg-gradient-to-br from-slate-800/60 to-slate-900/80 ring-1 ring-inset ring-blue-500/20 shadow-[0_10px_40px_rgba(37,99,235,0.15)]" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default SMM
