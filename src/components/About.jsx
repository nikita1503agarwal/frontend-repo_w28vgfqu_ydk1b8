import React from 'react'
import { motion } from 'framer-motion'

const About = () => {
  return (
    <section id="about" className="relative w-full bg-slate-950 py-20">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(600px_circle_at_20%_20%,rgba(37,99,235,0.2),transparent_60%)]" />
      <div className="relative mx-auto max-w-6xl px-6">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">About Us</h2>
          <p className="mt-4 max-w-3xl text-blue-100/90">
            We are a global, tech-forward partner helping brands accelerate digital growth and expand across borders. Our expertise spans brand visibility, social media, paid growth, and end-to-end international trade — from sourcing and compliance to logistics and market entry.
          </p>
          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {[
              'Digital growth strategies built for scale',
              'International trade networks across key markets',
              'Compliance-ready processes and documentation',
              'High-quality sourcing with vetted suppliers',
              'Seamless freight and logistics coordination',
              'Data-led decisions at every step',
            ].map((item) => (
              <div key={item} className="group rounded-2xl border border-blue-500/20 bg-slate-900/60 p-6 backdrop-blur transition hover:border-blue-400/40 hover:bg-slate-900/80">
                <div className="h-1 w-12 rounded-full bg-gradient-to-r from-blue-400 to-blue-600 shadow-[0_0_18px_rgba(59,130,246,0.6)]" />
                <p className="mt-4 text-blue-100/90">{item}</p>
              </div>
            ))}
          </div>
          <div className="mt-10 rounded-2xl border border-blue-500/20 bg-gradient-to-r from-slate-900 via-slate-900/80 to-slate-900/60 p-6">
            <p className="text-lg font-semibold text-blue-100">Mission</p>
            <p className="mt-2 text-blue-200/90">Connecting brands with people and markets worldwide.</p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default About
