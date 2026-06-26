'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';

function FadeInUp({ children, delay = 0, className = '' }: { children: React.ReactNode; delay?: number; className?: string }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.6, delay, ease: [0.16, 1, 0.3, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

function HeroSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: sectionRef, offset: ['start start', 'end start'] });
  const heroY = useTransform(scrollYProgress, [0, 1], [0, 150]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <section ref={sectionRef} className="relative min-h-screen flex items-center overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 opacity-[0.03]">
          <svg className="w-full h-full">
            <defs>
              <pattern id="grid" width="60" height="60" patternUnits="userSpaceOnUse">
                <path d="M 60 0 L 0 0 0 60" fill="none" stroke="white" strokeWidth="0.5" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#grid)" />
          </svg>
        </div>

        <div className="absolute top-20 left-[10%] w-72 h-72 rounded-full bg-blue-500/10 blur-[100px] floating-shape" style={{ animationDelay: '0s', animationDuration: '25s' }} />
        <div className="absolute top-10 right-[10%] w-56 h-56 rounded-full bg-purple-500/10 blur-[80px] floating-shape" style={{ animationDelay: '-8s', animationDuration: '30s' }} />
        <div className="absolute bottom-40 right-[25%] w-48 h-48 rounded-full bg-pink-500/10 blur-[70px] floating-shape" style={{ animationDelay: '-4s', animationDuration: '22s' }} />
        <div className="absolute bottom-20 left-[20%] w-40 h-40 rounded-full bg-emerald-500/10 blur-[60px] floating-shape" style={{ animationDelay: '-12s', animationDuration: '28s' }} />

        <motion.div
          style={{ y: heroY, opacity: heroOpacity }}
          className="absolute inset-0 bg-[radial-gradient(ellipse_at_30%_50%,rgba(99,102,241,0.06),transparent_60%),radial-gradient(ellipse_at_70%_50%,rgba(168,85,247,0.04),transparent_60%)]"
        />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-6 w-full">
        <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-20">
          <div className="flex-1 text-center lg:text-left">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="inline-flex items-center gap-2 px-4 py-1.5 mb-8 border border-line/50 rounded-full bg-overlay/[0.02]"
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500" />
              </span>
              <span className="text-xs text-subtle tracking-wide">Open to opportunities</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold text-content mb-6 leading-[1.1] tracking-tight"
            >
              Hi, I&apos;m{' '}
              <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent bg-[length:200%_200%] animate-gradient">
                Mohsin
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="text-lg sm:text-xl text-subtle max-w-xl mx-auto lg:mx-0 mb-4 leading-relaxed"
            >
              CSE student &middot; Full-stack developer &middot; Researcher
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.45, duration: 0.6 }}
              className="text-sm text-muted max-w-md mx-auto lg:mx-0 mb-10 leading-relaxed"
            >
              I build web apps, mobile apps, games, and AI tools &mdash; with 6 research papers in ML, NLP, and CV.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.6 }}
              className="flex items-center gap-4 flex-wrap justify-center lg:justify-start"
            >
              <Link
                href="/projects"
                className="px-8 py-3.5 bg-white text-black rounded-full text-sm font-semibold hover:bg-zinc-200 transition-colors"
              >
                Explore my work
              </Link>

              <a
                href="/Mohsin_Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-3.5 border border-line text-content rounded-full text-sm font-medium hover:bg-card hover:border-zinc-500 transition-colors inline-flex items-center gap-2"
              >
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" /></svg>
                Download CV
              </a>

              <a
                href="mailto:mohsinibnahossain@gmail.com"
                className="px-8 py-3.5 border border-line text-content rounded-full text-sm font-medium hover:bg-card hover:border-zinc-500 transition-colors"
              >
                Get in touch
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7, duration: 0.6 }}
              className="flex items-center gap-8 mt-12 justify-center lg:justify-start"
            >
              {[
                { href: 'https://github.com/MIHMahmudEli', label: 'GitHub', hoverColor: 'hover:text-content' },
                { href: 'https://linkedin.com/in/mihmahmudeli', label: 'LinkedIn', hoverColor: 'hover:text-blue-400' },
                { href: 'https://instagram.com/mihmahmudeli2002', label: 'Instagram', hoverColor: 'hover:text-pink-400' },
              ].map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`text-xs text-muted ${link.hoverColor} transition-colors tracking-wider uppercase`}
                >
                  {link.label}
                </a>
              ))}
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="relative shrink-0"
          >
            <div className="relative w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96">
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-blue-500/20 via-purple-500/20 to-pink-500/20 animate-pulse-slow blur-3xl" />

              <div className="absolute inset-0 rounded-full border border-line/50 orbit-ring will-change-transform">
                {[0, 60, 120, 180, 240, 300].map((deg) => (
                  <div
                    key={deg}
                    className="absolute w-2 h-2 rounded-full bg-blue-400/60 shadow-[0_0_12px_rgba(96,165,250,0.4)]"
                    style={{
                      top: '50%',
                      left: '50%',
                      transform: `rotate(${deg}deg) translateY(-50%) translateX(-50%) rotate(${deg}deg)`,
                      transformOrigin: '0 0',
                    }}
                  />
                ))}
              </div>

              <div className="absolute inset-4 rounded-full border border-line/30 orbit-ring-reverse will-change-transform" />

              <div className="absolute inset-8 rounded-full overflow-hidden border border-line/50 shadow-2xl">
                <Image src="/mohsin-photo.png" alt="Mohsin Mahmud Eli" fill className="object-cover" priority />
              </div>

              <div className="absolute -bottom-2 -right-2 bg-card/80 backdrop-blur-md border border-line/50 rounded-2xl px-4 py-2.5">
                <div className="text-lg font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">41+</div>
                <div className="text-[10px] text-muted tracking-wide">Repositories</div>
              </div>

              <div className="absolute -top-2 -left-2 bg-card/80 backdrop-blur-md border border-line/50 rounded-2xl px-4 py-2.5">
                <div className="text-lg font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">6</div>
                <div className="text-[10px] text-muted tracking-wide">Papers</div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2">
        <div className="flex flex-col items-center gap-2 scroll-bounce">
          <span className="text-[10px] text-zinc-700 tracking-[0.3em]">SCROLL</span>
          <svg className="w-3.5 h-3.5 text-zinc-700" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" /></svg>
        </div>
      </div>
    </section>
  );
}

function AboutSection() {
  const highlights = [
    { label: 'Focus', value: 'Full-stack development, ML research, and system design' },
    { label: 'Experience', value: 'Built platforms used by hundreds of students and professionals' },
    { label: 'Research', value: '6 papers in AI, NLP, CV, and telecommunications' },
  ];

  return (
    <section className="py-28 relative">
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none">
        <svg className="w-full h-full">
          <defs>
            <pattern id="grid2" width="60" height="60" patternUnits="userSpaceOnUse">
              <path d="M 60 0 L 0 0 0 60" fill="none" stroke="white" strokeWidth="0.5" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid2)" />
        </svg>
      </div>
      <div className="max-w-6xl mx-auto px-6">
        <FadeInUp>
          <h2 className="text-3xl md:text-5xl font-bold text-content mb-4">
            Building at the intersection of{' '}
            <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">code, research, and creativity</span>
          </h2>
        </FadeInUp>

        <FadeInUp delay={0.1}>
          <p className="text-subtle text-lg max-w-2xl mb-12 leading-relaxed">
            CSE student at American International University-Bangladesh. I create full-stack applications, 
            contribute to ML research, and build games &mdash; always exploring the edge where technology meets impact.
          </p>
        </FadeInUp>

        <div className="grid md:grid-cols-3 gap-4">
          {highlights.map((h, i) => (
            <FadeInUp key={h.label} delay={0.1 + i * 0.1}>
              <div className="p-5 rounded-2xl border border-zinc-800 bg-card/30 hover:bg-card/50 hover:border-line transition-colors">
                <span className="text-[10px] tracking-[0.2em] text-muted uppercase mb-2 block">{h.label}</span>
                <p className="text-sm text-content leading-relaxed">{h.value}</p>
              </div>
            </FadeInUp>
          ))}
        </div>
      </div>
    </section>
  );
}

function SkillsSection() {
  const skills = [
    { name: 'TypeScript', level: 85, color: '#3178c6' },
    { name: 'JavaScript', level: 92, color: '#f1e05a' },
    { name: 'React', level: 88, color: '#61dafb' },
    { name: 'Next.js', level: 82, color: '#ffffff' },
    { name: 'Python', level: 75, color: '#3572A5' },
    { name: 'NestJS', level: 78, color: '#e0234e' },
    { name: 'Kotlin', level: 70, color: '#A97BFF' },
    { name: 'Tailwind', level: 85, color: '#06b6d4' },
  ];

  return (
    <section className="py-28 bg-surface/50 relative">
      <div className="max-w-6xl mx-auto px-6">
        <FadeInUp>
          <h2 className="text-3xl md:text-5xl font-bold text-content mb-12">Tech Stack</h2>
        </FadeInUp>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
          {skills.map((s, i) => (
            <FadeInUp key={s.name} delay={i * 0.03}>
              <div className="p-4 rounded-xl bg-card/40 border border-zinc-800 hover:border-line transition-colors">
                <div className="flex items-center gap-3 mb-3">
                  <div
                    className="w-8 h-8 rounded-lg flex items-center justify-center text-[11px] font-bold"
                    style={{ backgroundColor: s.color + '20', color: s.color }}
                  >
                    {s.name.slice(0, 2)}
                  </div>
                  <span className="text-sm font-medium text-content">{s.name}</span>
                </div>
                <div className="h-1 bg-card rounded-full overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${s.level}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.2 + i * 0.03, ease: [0.16, 1, 0.3, 1] }}
                    className="h-full rounded-full will-change-transform"
                    style={{ backgroundColor: s.color }}
                  />
                </div>
              </div>
            </FadeInUp>
          ))}
        </div>
      </div>
    </section>
  );
}

function StatsSection() {
  const stats = [
    { num: '41+', label: 'Repositories', gradient: 'from-blue-500 to-cyan-500' },
    { num: '10+', label: 'Apps Built', gradient: 'from-purple-500 to-pink-500' },
    { num: '6', label: 'Papers', gradient: 'from-emerald-500 to-teal-500' },
    { num: '2', label: 'Launched', gradient: 'from-amber-500 to-orange-500' },
  ];

  return (
    <section className="py-20 relative">
      <div className="max-w-5xl mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-card/50 rounded-2xl overflow-hidden border border-line/50">
          {stats.map((s, i) => (
            <FadeInUp key={s.label} delay={i * 0.1}>
              <div className="bg-surface p-8 text-center hover:bg-card/80 transition-colors h-full">
                <div className={`text-3xl md:text-5xl font-bold mb-1 bg-gradient-to-r ${s.gradient} bg-clip-text text-transparent`}>{s.num}</div>
                <div className="text-xs text-muted tracking-wide">{s.label}</div>
              </div>
            </FadeInUp>
          ))}
        </div>
      </div>
    </section>
  );
}

function FeaturedSection() {
  const items = [
    {
      title: 'Research',
      description: '6 papers in AI/ML, NLP, CV, and telecommunications',
      link: '/research',
      gradient: 'from-emerald-500/10 to-teal-500/5',
      border: 'border-emerald-500/20',
      hoverBorder: 'hover:border-emerald-400/40',
      accent: 'text-emerald-400',
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" /></svg>
      ),
    },
    {
      title: 'Photography',
      description: 'Capturing moments through the lens &mdash; Instagram: @mihmahmudeli2002',
      link: '/photography',
      gradient: 'from-amber-500/10 to-orange-500/5',
      border: 'border-amber-500/20',
      hoverBorder: 'hover:border-amber-400/40',
      accent: 'text-amber-400',
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6.827 6.175A2.31 2.31 0 015.186 7.23c-.38.054-.757.112-1.134.175C2.999 7.58 2.25 8.507 2.25 9.574V18a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021.75 18V9.574c0-1.067-.75-1.994-1.802-2.16a15.53 15.53 0 00-1.134-.175 2.31 2.31 0 01-1.64-1.055l-.822-1.316a2.192 2.192 0 00-1.736-1.039 48.774 48.774 0 00-5.232 0 2.192 2.192 0 00-1.736 1.039l-.821 1.316z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16.5 12.75a4.5 4.5 0 11-9 0 4.5 4.5 0 019 0z" /></svg>
      ),
    },
    {
      title: 'Games',
      description: 'Tic-tac-toe AI, counting game, ludo &mdash; built for fun and learning',
      link: '/games',
      gradient: 'from-purple-500/10 to-pink-500/5',
      border: 'border-purple-500/20',
      hoverBorder: 'hover:border-purple-400/40',
      accent: 'text-purple-400',
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M14.25 6.087c0-.355.186-.676.401-.959.221-.29.349-.634.349-1.003 0-1.036-1.007-1.875-2.25-1.875s-2.25.84-2.25 1.875c0 .369.128.713.349 1.003.215.283.401.604.401.959v0a.64.64 0 01-.657.643 48.39 48.39 0 01-4.163-.3c.186 1.613.293 3.25.315 4.907a.656.656 0 01-.658.663v0c-.355 0-.676-.186-.959-.401a1.647 1.647 0 00-1.003-.349c-1.036 0-1.875 1.007-1.875 2.25s.84 2.25 1.875 2.25c.369 0 .713-.128 1.003-.349.283-.215.604-.401.959-.401v0c.31 0 .555.26.532.57a48.039 48.039 0 01-.642 5.056c1.518.19 3.058.309 4.616.354a.64.64 0 00.657-.643v0c0-.355-.186-.676-.401-.959a1.647 1.647 0 01-.349-1.003c0-1.035 1.007-1.875 2.25-1.875s2.25.84 2.25 1.875c0 .369-.128.713-.349 1.003-.215.283-.401.604-.401.959v0c0 .333.277.599.61.58a48.1 48.1 0 005.427-.63 48.05 48.05 0 00.582-4.717.532.532 0 00-.533-.57v0c-.355 0-.676.186-.959.401-.29.221-.634.349-1.003.349-1.035 0-1.875-1.007-1.875-2.25s.84-2.25 1.875-2.25c.37 0 .713.128 1.003.349.283.215.604.401.959.401v0a.656.656 0 00.658-.663 48.422 48.422 0 00-.37-5.36c-1.886.342-3.81.574-5.766.689a.64.64 0 01-.657-.643l.001-.001z" /></svg>
      ),
    },
  ];

  return (
    <section className="py-28 bg-surface/50 relative">
      <div className="max-w-6xl mx-auto px-6">
        <FadeInUp>
          <h2 className="text-3xl md:text-5xl font-bold text-content mb-4">Explore more</h2>
        </FadeInUp>
        <FadeInUp delay={0.1}>
          <p className="text-subtle text-lg mb-12 max-w-xl">Beyond code &mdash; research, photography, and game development.</p>
        </FadeInUp>

        <div className="grid md:grid-cols-3 gap-5">
          {items.map((item, i) => (
            <FadeInUp key={item.title} delay={0.1 + i * 0.1}>
              <Link href={item.link} className={`group block p-6 rounded-2xl border ${item.border} ${item.hoverBorder} bg-gradient-to-br ${item.gradient} transition-colors h-full`}>
                <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-5 ${item.accent} bg-overlay/5 group-hover:bg-overlay/10 transition-colors`}>
                  {item.icon}
                </div>
                <h3 className="text-xl font-bold text-content mb-2">{item.title}</h3>
                <p className="text-sm text-subtle leading-relaxed mb-5">{item.description}</p>
                <span className={`inline-flex items-center gap-1.5 text-xs font-medium ${item.accent} group-hover:gap-2.5 transition-all`}>
                  Learn more <span className="text-sm">&rarr;</span>
                </span>
              </Link>
            </FadeInUp>
          ))}
        </div>
      </div>
    </section>
  );
}

function ProjectsPreviewSection() {
  const projects = [
    { title: 'StudyHub', desc: 'Academic note-sharing platform with moderation & gamification', slug: 'studyhub', color: '#6366f1' },
    { title: 'RoutinePro', desc: 'Smart class routine generator with conflict-free scheduling', slug: 'routinepro', color: '#ec4899' },
    { title: 'TrueNetMeter', desc: 'Premium internet speed test with circular speedometer', slug: 'truenetmeter', color: '#f59e0b' },
    { title: 'Automata Playground', desc: 'Interactive visualization tool for automata theory', slug: 'automata-playground', color: '#10b981' },
    { title: 'Tic-Tac-Toe AI', desc: 'Alpha-beta pruning algorithm &mdash; computer always wins', slug: 'tic-tac-toe', color: '#8b5cf6' },
    { title: 'Counting Game', desc: 'Number game against a smart computer opponent', slug: 'counting-game', color: '#ef4444' },
  ];

  return (
    <section className="py-28 relative">
      <div className="max-w-6xl mx-auto px-6">
        <FadeInUp>
          <h2 className="text-3xl md:text-5xl font-bold text-content mb-4">Projects</h2>
        </FadeInUp>
        <FadeInUp delay={0.1}>
          <p className="text-subtle text-lg mb-12 max-w-xl">Selected works across web, mobile, and game development.</p>
        </FadeInUp>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {projects.map((p, i) => (
            <FadeInUp key={p.slug} delay={i * 0.05}>
              <Link
                href={`/projects/${p.slug}`}
                className="group block p-5 rounded-2xl bg-card/30 border border-zinc-800 hover:border-line transition-colors h-full"
              >
                <div
                  className="w-11 h-11 rounded-xl flex items-center justify-center mb-4 text-base font-bold transition-transform group-hover:scale-110"
                  style={{ backgroundColor: p.color + '20', color: p.color }}
                >
                  {p.title[0]}
                </div>
                <h3 className="text-base font-semibold text-content mb-2 group-hover:text-blue-400 transition-colors">{p.title}</h3>
                <p className="text-sm text-subtle leading-relaxed">{p.desc}</p>
              </Link>
            </FadeInUp>
          ))}
        </div>

        <FadeInUp delay={0.3}>
          <div className="mt-10 text-center">
            <Link
              href="/projects"
              className="inline-flex items-center gap-2 px-6 py-3 border border-line text-content rounded-full text-sm hover:bg-card hover:border-zinc-500 transition-colors"
            >
              View all projects <span>&rarr;</span>
            </Link>
          </div>
        </FadeInUp>
      </div>
    </section>
  );
}

function ContactSection() {
  return (
    <section className="py-28 bg-surface/50 relative border-t border-line/50">
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none">
        <svg className="w-full h-full">
          <defs>
            <pattern id="grid3" width="60" height="60" patternUnits="userSpaceOnUse">
              <path d="M 60 0 L 0 0 0 60" fill="none" stroke="white" strokeWidth="0.5" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid3)" />
        </svg>
      </div>
      <div className="max-w-3xl mx-auto px-6 text-center">
        <FadeInUp>
          <h2 className="text-3xl md:text-5xl font-bold text-content mb-4">Let&apos;s work together</h2>
        </FadeInUp>
        <FadeInUp delay={0.1}>
          <p className="text-subtle text-lg mb-10 max-w-md mx-auto">
            Open to collaborations, research discussions, or just a conversation about tech.
          </p>
        </FadeInUp>
        <FadeInUp delay={0.2}>
          <div className="flex items-center justify-center gap-4 flex-wrap">
            <a
              href="mailto:mohsinibnahossain@gmail.com"
              className="px-8 py-3.5 bg-white text-black rounded-full text-sm font-semibold hover:bg-zinc-200 transition-colors"
            >
              Send an email
            </a>
             <a
              href="/Mohsin_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-3.5 border border-line text-content rounded-full text-sm font-medium hover:bg-card hover:border-zinc-500 transition-colors inline-flex items-center gap-2"
            >
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" /></svg>
              Download CV
            </a>
            <a
              href="https://github.com/MIHMahmudEli"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-3.5 border border-line text-content rounded-full text-sm font-medium hover:bg-card hover:border-zinc-500 transition-colors"
            >
              GitHub
            </a>
            <a
              href="https://instagram.com/mihmahmudeli2002"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-3.5 border border-line text-content rounded-full text-sm font-medium hover:bg-card hover:border-zinc-500 transition-colors"
            >
              Instagram
            </a>
          </div>
        </FadeInUp>
      </div>
    </section>
  );
}

export default function Home() {
  return (
    <>
      <div className="fixed inset-0 bg-gradient-to-br from-blue-950/20 via-black to-purple-950/20 pointer-events-none" />

      <HeroSection />
      <AboutSection />
      <StatsSection />
      <SkillsSection />
      <FeaturedSection />
      <ProjectsPreviewSection />
      <ContactSection />
    </>
  );
}
