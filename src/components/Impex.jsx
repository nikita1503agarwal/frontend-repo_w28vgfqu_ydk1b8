import React from 'react'
import { motion } from 'framer-motion'
import { Globe2, FileCheck2, Ship, Boxes, BadgeCheck, DoorOpen } from 'lucide-react'

const points = [
  { icon: Boxes, title: 'Product Sourcing', desc: 'Vetted suppliers, quality control, and cost optimization.' },
  { icon: Globe2, title: 'International Trading', desc: 'Cross-border operations across APAC, EMEA, and Americas.' },
  { icon: FileCheck2, title: 'Export Documentation', desc: 'Error-free documentation compliant with regulations.' },
  { icon: Ship, title: 'Freight & Logistics', desc: 'Sea, air, and multimodal coordination with tracking.' },
  { icon: BadgeCheck, title: 'Compliance & Certifications', desc: 'Country-specific certifications and standards.' },
  { icon: DoorOpen, title: 'Market Entry Support', desc: 'Go-to-market planning and channel partnerships.' },
]

const Impex = () => {
  return (
    <section id="impex" className="relative w-full bg-slate-950 py-20">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(600px_500px_at_20%_20%,rgba(37,99,235,0.25),transparent_60%)]" />
      <div className="relative mx-auto max-w-7xl px-6">
        <div className="mb-10 flex items-end justify-between gap-6">
          <div>
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">Impex / Import–Export Solutions</h2>
            <p className="mt-3 max-w-2xl text-blue-100/90">Professional, globally-minded trade support with a modern edge. World maps, trade icons, and clarity baked in.</p>
          </div>
          <div className="hidden sm:block rounded-xl border border-blue-500/20 bg-slate-900/60 px-4 py-2 text-xs text-blue-200">Global reach • Compliance • Logistics</div>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {points.map(({ icon: Icon, title, desc }) => (
            <motion.div key={title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }} className="group relative overflow-hidden rounded-2xl border border-blue-500/20 bg-slate-900/60 p-6 backdrop-blur">
              <div className="absolute -left-10 -top-10 h-24 w-24 rounded-full bg-blue-500/20 blur-2xl transition group-hover:scale-125" />
              <Icon className="h-6 w-6 text-blue-400 drop-shadow-[0_0_10px_rgba(59,130,246,0.7)]" />
              <h3 className="mt-3 text-lg font-semibold text-white">{title}</h3>
              <p className="mt-2 text-sm text-blue-100/90">{desc}</p>
              <div className="mt-6 h-28 rounded-lg bg-[linear-gradient(135deg,rgba(30,41,59,0.7),rgba(2,6,23,0.8))] ring-1 ring-inset ring-blue-500/20 shadow-[0_10px_40px_rgba(37,99,235,0.15)]" />
            </motion.div>
          ))}
        </div>

        <div className="mt-10 overflow-hidden rounded-2xl border border-blue-500/20 bg-slate-900/60 p-6">
          <div className="h-64 w-full rounded-xl bg-[url('https://images.unsplash.com/photo-1544989164-31dc3c645987?q=80&w=1600&auto=format&fit=crop')] bg-cover bg-center opacity-80 ring-1 ring-blue-500/20" />
        </div>
      </div>
    </section>
  )
}

export default Impex
