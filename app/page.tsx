'use client';

import { useMemo, useState } from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';
import { ArrowUpRight, CalendarDays, Flame, Instagram, MapPin, Sparkles, Star, Utensils, Users } from 'lucide-react';
import { allTags, menuSections, type MenuItem } from '@/lib/menu';

const instagramUrl = 'https://www.instagram.com/lunamarrephl?igsh=MWhhNzV0YWJrbHFnZg==';

const gallery = [
  {
    label: 'Family dinner energy',
    src: 'https://images.unsplash.com/photo-1552332386-f8dd00dc2f85?auto=format&fit=crop&w=1400&q=85',
    description: 'Colorful plates, warm service, and a room that feels easy to settle into with the people you love.'
  },
  {
    label: 'Tacos, cocktails, color',
    src: 'https://images.unsplash.com/photo-1565299585323-38d6b0865b47?auto=format&fit=crop&w=1400&q=85',
    description: 'Bright food, bold drinks, and enough visual punch to make every table feel camera-ready.'
  },
  {
    label: 'Date night polish',
    src: 'https://images.unsplash.com/photo-1551504734-5ee1c4a1479b?auto=format&fit=crop&w=1400&q=85',
    description: 'Modern Mexican flavor with an elevated edge for birthdays, girls night, date night, and late dinners.'
  }
];

function LogoMark({ className = '' }: { className?: string }) {
  return <img src="/logo.svg" alt="Luna Marre bull and star logo" className={className} />;
}

function Wordmark({ className = '' }: { className?: string }) {
  return <img src="/lunamarre-wordmark.svg" alt="Luna Marre" className={className} />;
}

function NoNameMark({ className = '' }: { className?: string }) {
  return <img src="/noname-hospitality.svg" alt="No Name Hospitality" className={className} />;
}

function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 160, damping: 24 });
  return <motion.div className="fixed left-0 top-0 z-[70] h-1 w-full origin-left bg-agave" style={{ scaleX }} />;
}

function FloatingNav({ activeSection, setActiveSection }: { activeSection: string; setActiveSection: (id: string) => void }) {
  return (
    <div className="fixed bottom-4 left-1/2 z-50 hidden -translate-x-1/2 rounded-full border border-crema/15 bg-mole/70 p-1 shadow-glow backdrop-blur-xl md:flex">
      {menuSections.map((section) => (
        <button
          key={section.id}
          onClick={() => {
            setActiveSection(section.id);
            document.getElementById('menu')?.scrollIntoView({ behavior: 'smooth' });
          }}
          className={`rounded-full px-4 py-2 text-xs font-bold uppercase tracking-[0.18em] transition ${activeSection === section.id ? 'bg-agave text-chile' : 'text-crema/65 hover:text-crema'}`}
        >
          {section.label.replace('The ', '')}
        </button>
      ))}
    </div>
  );
}

function Hero() {
  return (
    <section className="relative min-h-screen overflow-hidden bg-chile text-agave">
      <div className="absolute -left-40 top-16 h-[40rem] w-[40rem] rounded-full bg-agave/20 blur-3xl" />
      <div className="absolute right-[-8rem] top-[-2rem] hidden h-[38rem] w-[38rem] rounded-full border border-agave/15 md:block" />
      <motion.div
        initial={{ opacity: 0, scale: 0.86, rotate: -8 }}
        animate={{ opacity: 1, scale: 1, rotate: 0 }}
        transition={{ duration: 1.1, ease: [0.19, 1, 0.22, 1] }}
        className="absolute right-4 top-6 z-10 hidden h-56 w-64 md:block lg:right-12 lg:top-10 lg:h-72 lg:w-80"
      >
        <LogoMark className="h-full w-full object-contain drop-shadow-2xl" />
      </motion.div>

      <div className="relative z-10 mx-auto grid min-h-screen max-w-7xl grid-cols-1 items-end gap-10 px-5 pb-10 pt-28 md:grid-cols-[1fr_.68fr] md:px-8 lg:px-12">
        <div>
          <motion.div initial={{ opacity: 0, y: 22 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }} className="mb-7 flex items-center gap-4">
            <LogoMark className="h-20 w-24 object-contain md:hidden" />
            <p className="inline-flex items-center gap-2 rounded-full border border-agave/30 bg-agave/10 px-4 py-2 text-xs font-bold uppercase tracking-[0.28em]">
              <Sparkles size={14} /> Modern Mexican Restaurant
            </p>
          </motion.div>
          <motion.h1 initial={{ opacity: 0, y: 34 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.9, delay: 0.08 }} aria-label="Luna Marre">
            <Wordmark className="h-auto w-full max-w-[880px]" />
          </motion.h1>
          <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.2 }} className="mt-8 max-w-2xl text-xl leading-relaxed text-agave/90 md:text-2xl">
            Bold Mexican flavor, warm hospitality, beautiful cocktails, and a room made for family dinners, date nights, and photos your friends ask about.
          </motion.div>
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.32 }} className="mt-10 flex flex-wrap gap-3">
            <a href="#menu" className="group inline-flex items-center gap-2 rounded-full bg-agave px-6 py-4 text-sm font-extrabold uppercase tracking-[0.18em] text-chile shadow-glow transition hover:scale-[1.03]">
              View Menu <ArrowUpRight className="transition group-hover:translate-x-1 group-hover:-translate-y-1" size={18} />
            </a>
            <a href="mailto:reservations@lunamarre.com" className="inline-flex items-center gap-2 rounded-full border border-agave/40 px-6 py-4 text-sm font-extrabold uppercase tracking-[0.18em] text-agave transition hover:bg-agave hover:text-chile">
              Reserve <CalendarDays size={18} />
            </a>
            <a href={instagramUrl} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full border border-agave/40 px-6 py-4 text-sm font-extrabold uppercase tracking-[0.18em] text-agave transition hover:bg-agave hover:text-chile">
              Instagram <Instagram size={18} />
            </a>
          </motion.div>
        </div>

        <motion.div initial={{ opacity: 0, scale: 0.94, y: 40 }} animate={{ opacity: 1, scale: 1, y: 0 }} transition={{ duration: 0.9, delay: 0.18 }} className="relative mb-10 rounded-[2.5rem] border border-agave/25 bg-mole/15 p-3 shadow-2xl backdrop-blur-xl">
          <div className="media-card relative aspect-[4/5] overflow-hidden rounded-[2rem] bg-mole">
            <img src="https://images.unsplash.com/photo-1565299585323-38d6b0865b47?auto=format&fit=crop&w=1400&q=90" alt="Tacos and tortillas" className="h-full w-full object-cover opacity-85" />
            <div className="absolute inset-0 bg-gradient-to-t from-mole via-mole/10 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-6">
              <div className="mb-3 flex items-center gap-2 text-xs font-black uppercase tracking-[0.25em] text-agave"><Flame size={16} /> Signature Bite</div>
              <p className="text-3xl font-black text-crema">Short Rib Birria</p>
              <p className="mt-2 max-w-sm text-sm leading-relaxed text-crema/75">12-hour braised beef, Oaxaca cheese, onion, cilantro, and a rich 3-chile consomme.</p>
            </div>
          </div>
          <div className="absolute -right-6 -top-8 rounded-[2rem] bg-chile p-3 shadow-glow"><LogoMark className="h-24 w-28 object-contain" /></div>
        </motion.div>
      </div>
    </section>
  );
}

function Marquee() {
  const copy = ['modern mexican', 'family dinner', 'girls night', 'date night', 'cocktails', 'tacos worth posting'];
  return (
    <div className="overflow-hidden border-y border-agave/20 bg-agave py-4 text-chile">
      <div className="marquee-track flex w-max gap-8 whitespace-nowrap text-sm font-black uppercase tracking-[0.34em]">
        {[...copy, ...copy, ...copy, ...copy].map((item, index) => <span key={`${item}-${index}`} className="flex items-center gap-8">{item} <Star size={16} fill="currentColor" /></span>)}
      </div>
    </div>
  );
}

function DishCard({ item, index }: { item: MenuItem; index: number }) {
  return (
    <motion.article layout initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: '-40px' }} transition={{ duration: 0.55, delay: Math.min(index * 0.035, 0.22) }} className="group relative overflow-hidden rounded-[2rem] border border-chile/20 bg-agave p-5 text-chile shadow-chile">
      <div className="absolute -right-16 -top-16 h-36 w-36 rounded-full bg-chile/10 transition group-hover:scale-150" />
      <div className="relative flex items-start justify-between gap-4">
        <h3 className="max-w-[13rem] text-2xl font-black leading-none tracking-[-0.04em]">{item.name}</h3>
        <span className="rounded-full bg-chile px-3 py-1 text-sm font-black text-agave">{item.price}</span>
      </div>
      <p className="relative mt-4 text-sm font-medium leading-relaxed text-chile/75">{item.description}</p>
      {item.tags?.length ? <div className="relative mt-5 flex flex-wrap gap-2">{item.tags.map((tag) => <span key={tag} className="rounded-full border border-chile/25 px-3 py-1 text-[10px] font-black uppercase tracking-[0.18em] text-chile/70">{tag}</span>)}</div> : null}
    </motion.article>
  );
}

function MenuExperience({ activeSection, setActiveSection }: { activeSection: string; setActiveSection: (id: string) => void }) {
  const [activeTag, setActiveTag] = useState('all');
  const section = menuSections.find((entry) => entry.id === activeSection) ?? menuSections[0];
  const filteredItems = useMemo(() => activeTag === 'all' ? section.items : section.items.filter((item) => item.tags?.includes(activeTag)), [activeTag, section]);

  return (
    <section id="menu" className="relative bg-agave py-24 text-chile md:py-32">
      <LogoMark className="absolute right-4 top-10 hidden h-48 w-56 object-contain opacity-10 md:block lg:h-72 lg:w-80" />
      <div className="mx-auto max-w-7xl px-5 md:px-8 lg:px-12">
        <div className="grid gap-10 lg:grid-cols-[0.7fr_1fr]">
          <div className="lg:sticky lg:top-12 lg:self-start">
            <p className="mb-5 inline-flex items-center gap-2 rounded-full bg-chile px-4 py-2 text-xs font-black uppercase tracking-[0.28em] text-agave"><Utensils size={14} /> Modern Mexican Menu</p>
            <h2 className="text-balance text-5xl font-black leading-[0.9] tracking-[-0.08em] md:text-7xl">Bright, bold, built to share.</h2>
            <p className="mt-6 max-w-lg text-lg leading-relaxed text-chile/70">Explore colorful starters, house-made salsas, tacos, seafood, steak, and signature plates made for the center of the table.</p>
            <div className="mt-8 flex flex-wrap gap-2">
              {menuSections.map((entry) => (
                <button key={entry.id} onClick={() => { setActiveSection(entry.id); setActiveTag('all'); }} className={`rounded-full border px-4 py-3 text-xs font-black uppercase tracking-[0.18em] transition ${activeSection === entry.id ? 'border-chile bg-chile text-agave' : 'border-chile/25 text-chile hover:border-chile'}`}>{entry.label}</button>
              ))}
            </div>
            <div className="mt-6 flex flex-wrap gap-2">
              <button onClick={() => setActiveTag('all')} className={`rounded-full px-3 py-2 text-[10px] font-black uppercase tracking-[0.18em] ${activeTag === 'all' ? 'bg-mole text-agave' : 'bg-chile/10 text-chile/70'}`}>all</button>
              {allTags.map((tag) => <button key={tag} onClick={() => setActiveTag(tag)} className={`rounded-full px-3 py-2 text-[10px] font-black uppercase tracking-[0.18em] ${activeTag === tag ? 'bg-mole text-agave' : 'bg-chile/10 text-chile/70'}`}>{tag}</button>)}
            </div>
          </div>
          <div>
            <motion.div key={section.id} initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4 }} className="mb-8 border-t-[1.1rem] border-chile pt-5">
              <p className="text-sm font-black uppercase tracking-[0.28em]">{section.label}</p>
              <h3 className="mt-2 text-4xl font-black tracking-[-0.06em] md:text-6xl">{section.title}</h3>
              <p className="mt-3 text-lg italic text-chile/70">{section.intro}</p>
            </motion.div>
            <motion.div layout className="menu-grid grid gap-4">{filteredItems.map((item, index) => <DishCard key={item.name} item={item} index={index} />)}</motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}

function SocialSection() {
  return (
    <section className="relative overflow-hidden bg-mole py-24 text-crema md:py-32">
      <div className="absolute left-10 top-10 h-72 w-72 rounded-full bg-chile/20 blur-3xl" />
      <div className="absolute bottom-10 right-10 h-80 w-80 rounded-full bg-agave/20 blur-3xl" />
      <div className="mx-auto max-w-7xl px-5 md:px-8 lg:px-12">
        <div className="mb-12 flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div>
            <p className="mb-4 inline-flex items-center gap-2 rounded-full border border-agave/25 px-4 py-2 text-xs font-black uppercase tracking-[0.28em] text-agave"><Instagram size={14} /> @lunamarrephl</p>
            <h2 className="text-balance text-5xl font-black leading-[0.92] tracking-[-0.08em] md:text-7xl">Made for dinner plans and camera rolls.</h2>
          </div>
          <p className="max-w-lg text-lg leading-relaxed text-crema/65">Luna Marre is family-friendly at dinner, polished for date night, and energetic enough for the group chat. Beautiful plates, warm lighting, bold cocktails, and details made to be shared.</p>
        </div>
        <div className="grid gap-4 md:grid-cols-3">
          {gallery.map((shot, index) => (
            <motion.div key={shot.label} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: index * 0.08 }} className="media-card group overflow-hidden rounded-[2.5rem] border border-crema/10 bg-crema/5">
              <div className="relative aspect-[4/5] overflow-hidden">
                <img src={shot.src} alt={shot.label} className="h-full w-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-mole via-transparent to-transparent" />
                <div className="absolute bottom-0 p-6">
                  <p className="text-2xl font-black tracking-[-0.05em] text-crema">{shot.label}</p>
                  <p className="mt-2 text-sm leading-relaxed text-crema/70">{shot.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        <a href={instagramUrl} target="_blank" rel="noreferrer" className="mt-10 inline-flex items-center gap-2 rounded-full bg-agave px-6 py-4 text-sm font-black uppercase tracking-[0.18em] text-chile shadow-glow transition hover:scale-[1.02]">Follow Luna Marre <ArrowUpRight size={18} /></a>
      </div>
    </section>
  );
}

function ReservationBand() {
  return (
    <section className="relative overflow-hidden bg-chile px-5 py-20 text-agave md:px-8 lg:px-12">
      <div className="liquid-orb absolute -left-20 top-8 h-72 w-72 bg-agave/25" />
      <div className="mx-auto grid max-w-7xl gap-8 md:grid-cols-[1fr_.7fr] md:items-center">
        <div>
          <p className="mb-4 inline-flex items-center gap-2 rounded-full bg-agave px-4 py-2 text-xs font-black uppercase tracking-[0.28em] text-chile"><MapPin size={14} /> Modern Mexican Restaurant</p>
          <h2 className="text-balance text-6xl font-black leading-[0.86] tracking-[-0.09em] md:text-8xl">A table worth gathering around.</h2>
        </div>
        <div className="rounded-[2rem] border border-agave/25 bg-agave/10 p-6 backdrop-blur-xl">
          <p className="text-xl leading-relaxed text-agave/85">Bring the family early, bring the group later, or make it the start of the night. Luna Marre is built for food, photos, cocktails, and the kind of dinner people remember.</p>
          <div className="mt-6 grid gap-3 sm:grid-cols-2">
            <a href="mailto:reservations@lunamarre.com" className="inline-flex items-center justify-center gap-2 rounded-full bg-agave px-6 py-4 text-sm font-black uppercase tracking-[0.18em] text-chile shadow-glow transition hover:scale-[1.02]">Reserve <CalendarDays size={18} /></a>
            <a href={instagramUrl} target="_blank" rel="noreferrer" className="inline-flex items-center justify-center gap-2 rounded-full border border-agave/40 px-6 py-4 text-sm font-black uppercase tracking-[0.18em] text-agave transition hover:bg-agave hover:text-chile">Instagram <Instagram size={18} /></a>
          </div>
        </div>
      </div>
    </section>
  );
}

function HospitalityStrip() {
  return (
    <section className="bg-mole px-5 py-14 text-crema md:px-8 lg:px-12">
      <div className="mx-auto grid max-w-7xl gap-6 rounded-[2rem] border border-agave/15 bg-crema/[0.03] p-6 md:grid-cols-[1fr_auto] md:items-center">
        <div>
          <p className="mb-2 flex items-center gap-2 text-xs font-black uppercase tracking-[0.24em] text-agave"><Users size={14} /> Hospitality Group</p>
          <p className="max-w-2xl text-lg leading-relaxed text-crema/70">Luna Marre is a No Name Hospitality concept, created with the same focus on service, atmosphere, and memorable restaurant experiences.</p>
        </div>
        <NoNameMark className="h-24 w-44 object-contain opacity-70 md:h-28 md:w-56" />
      </div>
    </section>
  );
}

export default function Home() {
  const [activeSection, setActiveSection] = useState(menuSections[0].id);
  return (
    <main>
      <ScrollProgress />
      <div className="noise" />
      <FloatingNav activeSection={activeSection} setActiveSection={setActiveSection} />
      <Hero />
      <Marquee />
      <MenuExperience activeSection={activeSection} setActiveSection={setActiveSection} />
      <SocialSection />
      <ReservationBand />
      <HospitalityStrip />
      <footer className="bg-mole px-5 py-10 text-crema/55 md:px-8 lg:px-12">
        <div className="mx-auto flex max-w-7xl flex-col justify-between gap-6 border-t border-crema/10 pt-8 md:flex-row md:items-center">
          <div className="flex flex-col gap-3">
            <Wordmark className="h-auto w-56" />
            <p className="text-sm uppercase tracking-[0.2em] text-crema/45">Modern Mexican Restaurant</p>
          </div>
          <div className="flex flex-col gap-3 md:items-end">
            <p className="text-sm">A No Name Hospitality concept</p>
            <a href={instagramUrl} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 text-sm font-bold uppercase tracking-[0.18em] text-agave hover:text-crema">Follow @lunamarrephl <ArrowUpRight size={16} /></a>
          </div>
        </div>
      </footer>
    </main>
  );
}
