import { useState } from 'react'
import Button from './Button'
const links = [{label:'Главная',href:'#home'},{label:'Преимущества',href:'#features'},{label:'Абонементы',href:'#pricing'},{label:'Контакты',href:'#contact'}]
export default function Header() {
  const [open,setOpen] = useState(false)
  return <header className="sticky top-0 z-50 border-b border-stone-200/70 bg-[#faf6ef]/95 backdrop-blur-xl">
    <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 sm:px-8 lg:px-12">
      <a href="#home" className="flex items-center gap-2 text-xl font-black tracking-tight text-stone-900" aria-label="Brew & Bloom — на главную"><span className="grid size-10 place-items-center rounded-full bg-amber-800 text-xl text-white">☕</span> brew<span className="text-amber-700">&</span>bloom<span className="text-amber-700">.</span></a>
      <nav className="hidden items-center gap-7 md:flex" aria-label="Основное меню">{links.map(l=><a key={l.href} href={l.href} className="text-sm font-medium text-stone-600 transition hover:text-amber-800">{l.label}</a>)}</nav>
      <div className="hidden md:block"><Button size="sm" onClick={()=>document.getElementById('pricing')?.scrollIntoView({behavior:'smooth'})}>Выбрать кофе ↗</Button></div>
      <button className="grid size-11 place-items-center rounded-xl border border-stone-200 md:hidden" aria-expanded={open} aria-controls="mobile-menu" aria-label={open?'Закрыть меню':'Открыть меню'} onClick={()=>setOpen(!open)}><span className="text-2xl">{open?'✕':'☰'}</span></button>
    </div>
    {open && <nav id="mobile-menu" className="flex flex-col gap-1 border-t border-stone-200 bg-[#faf6ef] px-5 py-4 md:hidden" aria-label="Мобильное меню">{links.map(l=><a key={l.href} href={l.href} onClick={()=>setOpen(false)} className="rounded-lg px-3 py-3 font-medium text-stone-700 hover:bg-amber-100">{l.label}</a>)}</nav>}
  </header>
}
