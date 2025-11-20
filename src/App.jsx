import React from 'react'
import Hero from './components/Hero'
import About from './components/About'
import SMM from './components/SMM'
import Impex from './components/Impex'
import WhyChoose from './components/WhyChoose'
import Contact from './components/Contact'

function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <header className="fixed inset-x-0 top-0 z-50 border-b border-blue-500/10 bg-slate-950/70 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <a href="#" className="text-lg font-bold tracking-tight">
            <span className="bg-gradient-to-r from-blue-300 to-blue-500 bg-clip-text text-transparent">INOTRIZ GLOBAL</span>
          </a>
          <nav className="hidden gap-6 text-sm text-blue-100/80 sm:flex">
            <a href="#about" className="hover:text-white">About</a>
            <a href="#smm" className="hover:text-white">SMM</a>
            <a href="#impex" className="hover:text-white">Impex</a>
            <a href="#contact" className="hover:text-white">Contact</a>
          </nav>
        </div>
      </header>

      <main className="pt-16">
        <Hero />
        <About />
        <SMM />
        <Impex />
        <WhyChoose />
        <Contact />
      </main>
    </div>
  )
}

export default App
