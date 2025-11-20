import React from 'react'
import Spline from '@splinetool/react-spline'
import { motion } from 'framer-motion'

const Hero = () => {
  return (
    <section className="relative min-h-[90vh] w-full overflow-hidden bg-slate-950">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/FduaNp3csZktbOi3/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      {/* Glow overlays */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-32 left-1/2 h-[80vh] w-[80vw] -translate-x-1/2 rounded-full bg-[radial-gradient(circle,rgba(59,130,246,0.25)_0%,transparent_60%)] blur-3xl" />
        <div className="absolute bottom-0 left-0 right-0 h-64 bg-gradient-to-t from-slate-950/90 to-transparent" />
      </div>

      <div className="relative mx-auto flex max-w-7xl items-center justify-center px-6 pt-32 pb-24 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl"
        >
          <span className="inline-flex items-center gap-2 rounded-full border border-blue-500/30 bg-blue-500/10 px-4 py-1 text-xs font-semibold tracking-wider text-blue-200 backdrop-blur">
            FLAMES.BLUE THEME
            <span className="h-1 w-1 rounded-full bg-blue-400 shadow-[0_0_12px_rgba(59,130,246,0.8)]" />
            FUTURISTIC • GLOWING • MINIMAL
          </span>

          <h1 className="mt-6 bg-gradient-to-b from-blue-200 to-blue-500/70 bg-clip-text text-4xl font-extrabold tracking-tight text-transparent sm:text-6xl">
            INOTRIZ GLOBAL — Powering Brands & Global Trade.
          </h1>
          <p className="mt-4 text-lg leading-relaxed text-blue-100/90 sm:text-xl">
            Digital Growth. International Reach. One Global Partner.
          </p>

          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <a href="#smm" className="group inline-flex items-center gap-3 rounded-xl bg-gradient-to-r from-blue-600 to-blue-500 px-6 py-3 text-sm font-semibold text-white shadow-[0_10px_40px_rgba(37,99,235,0.35)] transition hover:shadow-[0_10px_60px_rgba(37,99,235,0.55)]">
              <span className="relative">
                <span className="absolute -inset-0.5 rounded-xl bg-blue-400/30 blur transition group-hover:bg-blue-400/40" />
                <span className="relative">Social Media Marketing</span>
              </span>
            </a>
            <a href="#impex" className="inline-flex items-center gap-3 rounded-xl border border-blue-500/40 bg-slate-900/60 px-6 py-3 text-sm font-semibold text-blue-100 backdrop-blur transition hover:bg-slate-900/90">
              Impex / Import–Export Solutions
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Hero
