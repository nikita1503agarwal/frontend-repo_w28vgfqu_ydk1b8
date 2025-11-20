import React from 'react'

const WhyChoose = () => {
  const items = [
    'Dual expertise: Marketing + Trade',
    'Cost-effective solutions',
    'Global network',
    '24/7 support',
    'Data-driven decisions',
  ]

  return (
    <section className="relative w-full bg-slate-950 py-20">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(500px_circle_at_80%_20%,rgba(59,130,246,0.2),transparent_60%)]" />
      <div className="relative mx-auto max-w-6xl px-6">
        <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">Why Choose INOTRIZ GLOBAL</h2>
        <div className="mt-8 grid gap-6 sm:grid-cols-2">
          {items.map((item) => (
            <div key={item} className="rounded-2xl border border-blue-500/20 bg-slate-900/60 p-6 backdrop-blur">
              <div className="h-1 w-12 rounded-full bg-blue-500 shadow-[0_0_18px_rgba(59,130,246,0.6)]" />
              <p className="mt-4 text-blue-100/90">{item}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default WhyChoose
