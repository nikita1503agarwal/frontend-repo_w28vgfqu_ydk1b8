import React, { useState } from 'react'
import { Mail, Phone } from 'lucide-react'

const Contact = () => {
  const [form, setForm] = useState({ name: '', email: '', business: '', service: '' })
  const [sent, setSent] = useState(false)

  const onChange = (e) => setForm({ ...form, [e.target.name]: e.target.value })
  const onSubmit = (e) => {
    e.preventDefault()
    setSent(true)
  }

  return (
    <section id="contact" className="relative w-full bg-slate-950 py-20">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(600px_circle_at_30%_80%,rgba(59,130,246,0.2),transparent_60%)]" />
      <div className="relative mx-auto max-w-6xl px-6">
        <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">Contact</h2>
        <p className="mt-2 text-blue-100/90">Tell us about your brand or trade needs. We’ll get back right away.</p>

        <div className="mt-8 grid gap-8 lg:grid-cols-3">
          <form onSubmit={onSubmit} className="lg:col-span-2 rounded-2xl border border-blue-500/20 bg-slate-900/60 p-6 backdrop-blur">
            <div className="grid gap-4 sm:grid-cols-2">
              <div>
                <label className="text-sm text-blue-200">Name</label>
                <input name="name" value={form.name} onChange={onChange} className="mt-1 w-full rounded-lg border border-blue-500/20 bg-slate-950/60 px-3 py-2 text-blue-100 outline-none ring-0 placeholder:text-blue-300/50" placeholder="Your name" required />
              </div>
              <div>
                <label className="text-sm text-blue-200">Email</label>
                <input type="email" name="email" value={form.email} onChange={onChange} className="mt-1 w-full rounded-lg border border-blue-500/20 bg-slate-950/60 px-3 py-2 text-blue-100 outline-none" placeholder="you@company.com" required />
              </div>
              <div>
                <label className="text-sm text-blue-200">Business</label>
                <input name="business" value={form.business} onChange={onChange} className="mt-1 w-full rounded-lg border border-blue-500/20 bg-slate-950/60 px-3 py-2 text-blue-100 outline-none" placeholder="Brand / Company" />
              </div>
              <div>
                <label className="text-sm text-blue-200">Service Needed</label>
                <input name="service" value={form.service} onChange={onChange} className="mt-1 w-full rounded-lg border border-blue-500/20 bg-slate-950/60 px-3 py-2 text-blue-100 outline-none" placeholder="SMM or Impex" />
              </div>
            </div>
            <button className="mt-6 w-full rounded-xl bg-gradient-to-r from-blue-600 to-blue-500 px-6 py-3 font-semibold text-white shadow-[0_10px_40px_rgba(37,99,235,0.35)] transition hover:shadow-[0_10px_60px_rgba(37,99,235,0.55)]">Send</button>
            {sent && <p className="mt-3 text-sm text-blue-300">Thanks! We’ll be in touch.</p>}
          </form>

          <div className="space-y-4">
            <a href="mailto:hello@inotrizglobal.com" className="flex items-center gap-3 rounded-2xl border border-blue-500/20 bg-slate-900/60 p-4 text-blue-100">
              <Mail className="h-5 w-5 text-blue-400" /> hello@inotrizglobal.com
            </a>
            <a href="https://wa.me/1234567890" target="_blank" rel="noreferrer" className="flex items-center gap-3 rounded-2xl border border-blue-500/20 bg-slate-900/60 p-4 text-blue-100">
              <Phone className="h-5 w-5 text-blue-400" /> WhatsApp us
            </a>
          </div>
        </div>
      </div>

      <footer className="mt-16 border-t border-blue-500/10 bg-gradient-to-r from-blue-900/20 via-slate-900 to-blue-900/20 py-8">
        <div className="mx-auto max-w-6xl px-6 text-blue-300">
          <p className="text-sm">© {new Date().getFullYear()} INOTRIZ GLOBAL — All rights reserved.</p>
        </div>
      </footer>
    </section>
  )
}

export default Contact
