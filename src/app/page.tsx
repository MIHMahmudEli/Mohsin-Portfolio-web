'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef, useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';

const projects = [
  { title: 'StudyHub', desc: 'Academic note-sharing platform with moderation & gamification — used by hundreds of students', slug: 'studyhub', tech: ['PHP', 'MySQL', 'JavaScript'], color: '#6366f1' },
  { title: 'RoutinePro', desc: 'Smart university class routine generator with conflict-free scheduling and gap optimization', slug: 'routinepro', tech: ['JavaScript', 'CSS', 'Glassmorphism'], color: '#ec4899' },
  { title: 'TrueNetMeter', desc: 'Premium internet speed test with circular speedometer and multi-stream algorithms', slug: 'truenetmeter', tech: ['PHP', 'JavaScript'], color: '#f59e0b' },
  { title: 'Automata Playground', desc: 'Interactive visualization tool for automata theory concepts', slug: 'automata-playground', tech: ['TypeScript', 'React'], color: '#10b981' },
  { title: 'Tic-Tac-Toe AI', desc: 'Alpha-beta pruning algorithm — computer always wins. Built to understand game AI', slug: 'tic-tac-toe', tech: ['JavaScript', 'Algorithm'], color: '#8b5cf6' },
  { title: 'Counting Game', desc: 'Number game against a smart computer opponent using game theory', slug: 'counting-game', tech: ['JavaScript'], color: '#ef4444' },
];

const skills = [
  { name: 'TypeScript', level: 85, color: '#3178c6', icon: 'TS' },
  { name: 'JavaScript', level: 92, color: '#f1e05a', icon: 'JS' },
  { name: 'Python', level: 75, color: '#3572A5', icon: 'Py' },
  { name: 'React', level: 88, color: '#61dafb', icon: 'R' },
  { name: 'Next.js', level: 82, color: '#000000', icon: 'N' },
  { name: 'NestJS', level: 78, color: '#e0234e', icon: 'Ns' },
  { name: 'Kotlin', level: 70, color: '#A97BFF', icon: 'K' },
  { name: 'Tailwind', level: 85, color: '#06b6d4', icon: 'T' },
];

export default function Home() {
  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ['start start', 'end start'] });
  const heroY = useTransform(scrollYProgress, [0, 1], [0, 150]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const imageRef = useRef<HTMLDivElement>(null);
  const [tilt, setTilt] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMove = (e: MouseEvent) => setMousePos({ x: e.clientX, y: e.clientY });
    window.addEventListener('mousemove', handleMove);
    return () => window.removeEventListener('mousemove', handleMove);
  }, []);

  useEffect(() => {
    const el = imageRef.current;
    if (!el) return;
    const handleTilt = (e: MouseEvent) => {
      const rect = el.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width - 0.5;
      const y = (e.clientY - rect.top) / rect.height - 0.5;
      setTilt({ x: y * -20, y: x * 20 });
    };
    const elRef = el;
    elRef.addEventListener('mousemove', handleTilt);
    elRef.addEventListener('mouseleave', () => setTilt({ x: 0, y: 0 }));
    return () => {
      elRef.removeEventListener('mousemove', handleTilt);
      elRef.removeEventListener('mouseleave', () => setTilt({ x: 0, y: 0 }));
    };
  }, []);

  return (
    <>
      <section ref={heroRef} className="relative min-h-screen flex items-center overflow-hidden bg-black">
        <motion.div style={{ y: heroY, opacity: heroOpacity }} className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-[128px]" style={{ transform: `translate(${mousePos.x * 0.02}px, ${mousePos.y * 0.02}px)` }} />
          <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-purple-500/10 rounded-full blur-[128px]" style={{ transform: `translate(${-mousePos.x * 0.015}px, ${-mousePos.y * 0.015}px)` }} />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-zinc-900 via-black to-black" />
        </motion.div>

        <div className="relative z-10 max-w-6xl mx-auto px-4 w-full">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div initial={{ opacity: 0, x: -60 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }}>
              <motion.div initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.2 }} className="inline-flex items-center gap-2 px-4 py-1.5 mb-6 border border-zinc-700 rounded-full">
                <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                <span className="text-xs text-zinc-400 tracking-wide">Available for opportunities</span>
              </motion.div>

              <h1 className="text-5xl md:text-7xl font-bold text-white mb-4 leading-tight">
                Hi, I&apos;m{' '}
                <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                  Mohsin
                </span>
              </h1>
              <p className="text-lg md:text-xl text-zinc-400 mb-8 leading-relaxed max-w-lg">
                CSE student, full-stack developer, and researcher. I build web apps, mobile apps, games, 
                and AI tools — with 6 research papers in ML, NLP, and CV.
              </p>
              <div className="flex items-center gap-4 flex-wrap">
                <Link href="/projects" className="group relative px-8 py-3.5 bg-white text-black rounded-full text-sm font-semibold overflow-hidden transition-all hover:bg-zinc-200">
                  View My Work
                </Link>
                <a href="https://github.com/MIHMahmudEli" target="_blank" rel="noopener noreferrer" className="group flex items-center gap-2 px-6 py-3.5 border border-zinc-700 text-zinc-300 rounded-full text-sm font-medium hover:bg-zinc-900 transition-all">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
                  GitHub
                </a>
              </div>

              <div className="flex items-center gap-6 mt-10">
                <a href="https://github.com/MIHMahmudEli" target="_blank" rel="noopener noreferrer" className="text-xs text-zinc-500 hover:text-zinc-300 transition-colors tracking-wider uppercase">GitHub</a>
                <a href="https://instagram.com/mihmahmudeli2002" target="_blank" rel="noopener noreferrer" className="text-xs text-zinc-500 hover:text-zinc-300 transition-colors tracking-wider uppercase">Instagram</a>
                <a href="https://linkedin.com/in/mihmahmudeli" target="_blank" rel="noopener noreferrer" className="text-xs text-zinc-500 hover:text-zinc-300 transition-colors tracking-wider uppercase">LinkedIn</a>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="relative flex justify-center"
            >
              <div ref={imageRef} className="relative w-80 h-80 md:w-[28rem] md:h-[28rem]" style={{ perspective: '1000px' }}>
                <motion.div
                  className="absolute inset-0 rounded-full border border-blue-500/20"
                  animate={{ rotate: 360 }}
                  transition={{ repeat: Infinity, duration: 20, ease: 'linear' }}
                  style={{ transformStyle: 'preserve-3d' }}
                >
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3 h-3 bg-blue-400 rounded-full shadow-[0_0_20px_rgba(96,165,250,0.8)]" />
                </motion.div>
                <motion.div
                  className="absolute inset-4 rounded-full border border-purple-500/20"
                  animate={{ rotate: -360 }}
                  transition={{ repeat: Infinity, duration: 25, ease: 'linear' }}
                >
                  <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 w-2 h-2 bg-purple-400 rounded-full shadow-[0_0_20px_rgba(168,85,247,0.8)]" />
                </motion.div>
                <motion.div
                  className="absolute inset-8 rounded-full border border-emerald-500/15"
                  animate={{ rotate: 360 }}
                  transition={{ repeat: Infinity, duration: 30, ease: 'linear' }}
                >
                  <div className="absolute top-1/2 right-0 translate-x-1/2 -translate-y-1/2 w-2 h-2 bg-emerald-400 rounded-full shadow-[0_0_20px_rgba(52,211,153,0.8)]" />
                </motion.div>

                <motion.div
                  className="relative w-full h-full"
                  style={{
                    transformStyle: 'preserve-3d',
                    transform: `rotateX(${tilt.x}deg) rotateY(${tilt.y}deg)`,
                    transition: 'transform 0.1s ease-out',
                  }}
                >
                  <div className="relative w-full h-full" style={{ transform: 'translateZ(30px)' }}>
                    <div className="absolute inset-0 rounded-[3rem] overflow-hidden border border-zinc-700 shadow-2xl">
                      <Image src="/mohsin-photo.png" alt="Mohsin" fill className="object-cover" priority />
                    </div>
                  </div>

                  <div className="absolute -bottom-2 -right-4 bg-zinc-900/90 backdrop-blur-md border border-zinc-700/50 rounded-2xl px-5 py-3 shadow-xl" style={{ transform: 'translateZ(50px)' }}>
                    <div className="text-2xl font-bold text-white">41+</div>
                    <div className="text-xs text-zinc-400">GitHub Repos</div>
                  </div>
                  <div className="absolute -top-2 -left-4 bg-zinc-900/90 backdrop-blur-md border border-zinc-700/50 rounded-2xl px-5 py-3 shadow-xl" style={{ transform: 'translateZ(50px)' }}>
                    <div className="text-2xl font-bold text-white">6</div>
                    <div className="text-xs text-zinc-400">Research Papers</div>
                  </div>

                  {[
                    { color: '#3b82f6', left: '25%', top: '30%', dur: 2.5 },
                    { color: '#8b5cf6', left: '70%', top: '25%', dur: 3 },
                    { color: '#10b981', left: '75%', top: '65%', dur: 2 },
                    { color: '#f59e0b', left: '30%', top: '70%', dur: 3.5 },
                    { color: '#ef4444', left: '55%', top: '20%', dur: 2.8 },
                    { color: '#ec4899', left: '65%', top: '75%', dur: 2.2 },
                  ].map((p, i) => (
                    <motion.div
                      key={i}
                      className="absolute w-1.5 h-1.5 rounded-full"
                      style={{
                        backgroundColor: p.color,
                        left: p.left,
                        top: p.top,
                        transform: 'translateZ(60px)',
                      }}
                      animate={{ y: [0, -15, 0], opacity: [0.6, 1, 0.6] }}
                      transition={{ repeat: Infinity, duration: p.dur, delay: i * 0.3 }}
                    />
                  ))}
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>

        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.5 }} className="absolute bottom-8 left-1/2 -translate-x-1/2">
          <motion.div animate={{ y: [0, 8, 0] }} transition={{ repeat: Infinity, duration: 2 }} className="flex flex-col items-center gap-2">
            <span className="text-xs text-zinc-600 tracking-wider">SCROLL</span>
            <svg className="w-4 h-4 text-zinc-600" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" /></svg>
          </motion.div>
        </motion.div>
      </section>

      <section className="py-32 bg-zinc-950">
        <div className="max-w-6xl mx-auto px-4">
          <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
            <span className="text-xs font-semibold tracking-[0.2em] text-blue-400 uppercase">About</span>
            <h2 className="text-3xl md:text-5xl font-bold text-white mt-3 mb-8">Building at the intersection of code, research & creativity</h2>
            <div className="grid md:grid-cols-2 gap-12">
              <p className="text-zinc-400 leading-relaxed text-lg">
                I&apos;m a CSE student at American International University-Bangladesh with a deep passion for 
                full-stack development, mobile apps, game development, and ML research. I&apos;ve built platforms 
                used by hundreds of students and I&apos;m actively working on 6 research papers spanning AI text 
                detection, 5G networks, NLP, and computer vision.
              </p>
              <div className="space-y-6">
                {[
                  { label: 'Email', value: 'mohsinibnahossain@gmail.com' },
                  { label: 'Location', value: 'Bangladesh' },
                  { label: 'Instagram', value: '@mihmahmudeli2002 — Photography' },
                ].map((item) => (
                  <div key={item.label} className="flex items-start gap-4">
                    <span className="text-xs font-medium text-zinc-500 w-24 shrink-0 pt-0.5">{item.label}</span>
                    <span className="text-sm text-zinc-300">{item.value}</span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          <div className="mt-24">
            <motion.h3 initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="text-sm font-semibold tracking-[0.2em] text-zinc-500 uppercase mb-8">Tech Stack</motion.h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
              {skills.map((s, i) => (
                <motion.div
                  key={s.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.05 }}
                  className="group relative p-4 rounded-xl bg-zinc-900 border border-zinc-800 hover:border-zinc-700 transition-all"
                >
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-8 h-8 rounded-lg flex items-center justify-center text-xs font-bold" style={{ backgroundColor: s.color + '20', color: s.color }}>{s.icon}</div>
                    <span className="text-sm font-medium text-white">{s.name}</span>
                  </div>
                  <div className="h-1.5 bg-zinc-800 rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${s.level}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, delay: 0.2 + i * 0.05 }}
                      className="h-full rounded-full"
                      style={{ backgroundColor: s.color }}
                    />
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-32 bg-black">
        <div className="max-w-6xl mx-auto px-4">
          <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="flex items-end justify-between mb-16">
            <div>
              <span className="text-xs font-semibold tracking-[0.2em] text-blue-400 uppercase">Projects</span>
              <h2 className="text-3xl md:text-5xl font-bold text-white mt-3">Featured Work</h2>
            </div>
            <Link href="/projects" className="hidden md:flex items-center gap-2 text-sm text-zinc-400 hover:text-white transition-colors">
              View All <span>&rarr;</span>
            </Link>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {projects.map((p, i) => (
              <motion.div
                key={p.slug}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
              >
                <Link
                  href={`/projects/${p.slug}`}
                  className="group block p-6 rounded-2xl bg-zinc-900/50 border border-zinc-800 hover:bg-zinc-900 transition-all h-full"
                >
                  <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-4 text-lg font-bold transition-colors" style={{ backgroundColor: p.color + '20', color: p.color }}>
                    {p.title[0]}
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-blue-400 transition-colors">{p.title}</h3>
                  <p className="text-sm text-zinc-400 mb-4 leading-relaxed">{p.desc}</p>
                  <div className="flex flex-wrap gap-1.5">
                    {p.tech.map((t) => (
                      <span key={t} className="text-[10px] px-2 py-0.5 bg-zinc-800 text-zinc-500 rounded-full">{t}</span>
                    ))}
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>

          <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="mt-10 text-center md:hidden">
            <Link href="/projects" className="inline-flex px-6 py-3 border border-zinc-700 text-zinc-300 rounded-full text-sm hover:bg-zinc-900 transition-all">
              View All Projects &rarr;
            </Link>
          </motion.div>
        </div>
      </section>

      <section className="py-20 bg-zinc-950 border-y border-zinc-900">
        <div className="max-w-5xl mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { num: '41+', label: 'GitHub Repos', desc: 'Public repositories' },
              { num: '10+', label: 'Apps Built', desc: 'Web, mobile & desktop' },
              { num: '6', label: 'Research Papers', desc: 'ML, NLP, CV, Telecom' },
              { num: '2', label: 'Apps Launched', desc: 'Production deployments' },
            ].map((s, i) => (
              <motion.div
                key={s.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="text-center"
              >
                <div className="text-4xl md:text-5xl font-bold text-white mb-1">{s.num}</div>
                <div className="text-sm font-medium text-zinc-300">{s.label}</div>
                <div className="text-xs text-zinc-600 mt-1">{s.desc}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-32 bg-black">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-6">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
              <span className="text-xs font-semibold tracking-[0.2em] text-green-400 uppercase">Play</span>
              <h3 className="text-2xl font-bold text-white mt-2 mb-4">Games</h3>
              <p className="text-zinc-400 text-sm mb-6">From alpha-beta pruning to game engines.</p>
              <div className="space-y-3 mb-6">
                {[
                  { title: 'Tic-Tac-Toe (Alpha-Beta)', desc: 'AI that always wins' },
                  { title: 'Counting Game', desc: 'Game theory strategy' },
                  { title: 'Ludo Game App', desc: 'React Native game engine' },
                ].map((g) => (
                  <div key={g.title} className="p-4 rounded-xl bg-zinc-900/50 border border-zinc-800">
                    <h4 className="text-sm font-medium text-white">{g.title}</h4>
                    <p className="text-xs text-zinc-500 mt-1">{g.desc}</p>
                  </div>
                ))}
              </div>
              <Link href="/games" className="inline-flex text-sm text-green-400 hover:text-green-300 transition-colors">
                View All Games &rarr;
              </Link>
            </motion.div>

            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }}>
              <span className="text-xs font-semibold tracking-[0.2em] text-yellow-400 uppercase">Research</span>
              <h3 className="text-2xl font-bold text-white mt-2 mb-4">Papers</h3>
              <p className="text-zinc-400 text-sm mb-6">6 papers across AI, ML, NLP, and CV.</p>
              <div className="space-y-3 mb-6">
                {[
                  { title: 'PIRD — AI Text Detection', field: 'NLP / AI' },
                  { title: '5G Network Traffic Prediction', field: 'Telecom / ML' },
                  { title: 'Food Price Volatility', field: 'Data Science' },
                ].map((r) => (
                  <div key={r.title} className="p-4 rounded-xl bg-zinc-900/50 border border-zinc-800">
                    <h4 className="text-sm font-medium text-white">{r.title}</h4>
                    <p className="text-xs text-zinc-500 mt-1">{r.field}</p>
                  </div>
                ))}
              </div>
              <Link href="/research" className="inline-flex text-sm text-yellow-400 hover:text-yellow-300 transition-colors">
                View All Research &rarr;
              </Link>
            </motion.div>

            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }}>
              <span className="text-xs font-semibold tracking-[0.2em] text-amber-400 uppercase">Photography</span>
              <h3 className="text-2xl font-bold text-white mt-2 mb-4">Lens</h3>
              <p className="text-zinc-400 text-sm mb-6">Capturing moments through the lens.</p>
              <div className="space-y-3 mb-6">
                {[
                  { title: 'Instagram', desc: '@mihmahmudeli2002' },
                  { title: 'Nature & Landscape', desc: 'Documentary style' },
                  { title: 'Street Photography', desc: 'Urban stories' },
                ].map((g) => (
                  <div key={g.title} className="p-4 rounded-xl bg-zinc-900/50 border border-zinc-800">
                    <h4 className="text-sm font-medium text-white">{g.title}</h4>
                    <p className="text-xs text-zinc-500 mt-1">{g.desc}</p>
                  </div>
                ))}
              </div>
              <Link href="/photography" className="inline-flex text-sm text-amber-400 hover:text-amber-300 transition-colors">
                View Gallery &rarr;
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-zinc-950">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <span className="text-xs font-semibold tracking-[0.2em] text-zinc-500 uppercase">Connect</span>
            <h2 className="text-2xl md:text-4xl font-bold text-white mt-3 mb-6">Let&apos;s Work Together</h2>
            <p className="text-zinc-400 mb-8 max-w-lg mx-auto">
              Open to collaborations, research discussions, or just a conversation about tech.
            </p>
            <div className="flex items-center justify-center gap-4 flex-wrap">
              <a href="mailto:mohsinibnahossain@gmail.com" className="px-8 py-3.5 bg-white text-black rounded-full text-sm font-semibold hover:bg-zinc-200 transition-all">
                Email Me
              </a>
              <a href="https://github.com/MIHMahmudEli" target="_blank" rel="noopener noreferrer" className="px-8 py-3.5 border border-zinc-700 text-zinc-300 rounded-full text-sm font-medium hover:bg-zinc-900 transition-all">
                GitHub
              </a>
              <a href="https://instagram.com/mihmahmudeli2002" target="_blank" rel="noopener noreferrer" className="px-8 py-3.5 border border-zinc-700 text-zinc-300 rounded-full text-sm font-medium hover:bg-zinc-900 transition-all">
                Instagram
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
