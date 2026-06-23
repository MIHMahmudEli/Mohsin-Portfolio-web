'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

interface Project {
  title: string;
  slug: string;
  desc: string;
  tech: string[];
  liveUrl?: string;
  year?: string;
}

const webApps: Project[] = [
  { title: 'StudyHub v2', slug: 'studyhub', desc: 'Academic note-sharing platform rebuilt with Next.js, API-driven architecture, and enhanced UX.', tech: ['TypeScript', 'Next.js', 'PostgreSQL'], liveUrl: 'https://studyhubbd.vercel.app', year: '2026' },
  { title: 'StudyHub v1', slug: 'studyhub-v1', desc: 'Original PHP version with full moderation, gamification, and role-based student access.', tech: ['PHP', 'MySQL', 'JavaScript'], liveUrl: 'https://studyhubb.great-site.net', year: '2025' },
  { title: 'RoutinePro', slug: 'routinepro', desc: 'Smart university class routine generator with conflict-free scheduling and gap optimization.', tech: ['JavaScript', 'CSS'], liveUrl: 'https://routine-pro-fawn.vercel.app', year: '2026' },
  { title: 'TrueNetMeter', slug: 'truenetmeter', desc: 'Premium internet speed test with circular speedometer and multi-stream algorithms.', tech: ['PHP', 'JavaScript'], liveUrl: 'https://truenetmeter.infinityfreeapp.com', year: '2026' },
  { title: 'Automata Playground', slug: 'automata-playground', desc: 'Interactive web tool for visualizing automata theory concepts like finite automata and Turing machines.', tech: ['TypeScript', 'React'], liveUrl: 'https://automata-playground-beige.vercel.app', year: '2026' },
  { title: 'NexGen.OS', slug: 'nexgen-os', desc: 'Web-based OS simulation with windows, taskbar, file manager, and interactive apps in the browser.', tech: ['JavaScript'], liveUrl: 'https://nex-gen-os.vercel.app', year: '2026' },
  { title: 'FP Reseller Console', slug: 'fp-reseller-console', desc: 'Reseller management console built with TypeScript for managing products, orders, and clients.', tech: ['TypeScript'], liveUrl: 'https://fp-reseller-console.vercel.app', year: '2026' },
  { title: 'MAD Project Pipeline', slug: 'mad-project-pipeline', desc: 'Project pipeline management tool for tracking and organizing mobile app development workflows.', tech: ['HTML', 'CSS'], liveUrl: 'https://mad-project-pipe-line.vercel.app', year: '2026' },
  { title: 'Portfolio v1', slug: 'portfolio-v1', desc: 'Previous version of my personal portfolio built with TypeScript showcasing my early work.', tech: ['TypeScript'], liveUrl: 'https://portfolio-three-snowy-49.vercel.app', year: '2026' },
  { title: 'GitAnalytics', slug: 'git-analytics', desc: 'GitHub analytics dashboard that visualizes repository stats, language distribution, and contribution data.', tech: ['CSS', 'JavaScript'], liveUrl: 'https://git-analytics-sigma.vercel.app', year: '2026' },
  { title: 'Research to JSON', slug: 'research-to-json', desc: 'Streamlit-powered tool that converts research papers and academic documents into structured JSON format.', tech: ['Python'], liveUrl: 'https://mihmahmudeli-research-to-json-app-r2bfaf.streamlit.app', year: '2026' },
];

const mobileApps: Project[] = [
  { title: 'StudyHub Mobile', slug: 'studyhub-mobile', desc: 'React Native mobile app extending StudyHub to Android for on-the-go note access.', tech: ['Kotlin'], year: '2026' },
  { title: 'Koshai Finder', slug: 'koshai-finder', desc: 'Android app built with Kotlin that helps users find local services and businesses.', tech: ['Kotlin'], year: '2026' },
];

const games: Project[] = [
  { title: 'Counting Game', slug: 'counting-game', desc: 'Fun turn-based number game where you compete against a smart computer opponent.', tech: ['JavaScript'], liveUrl: 'https://mihmahmudeli.github.io/Counting-Game/', year: '2025' },
  { title: 'Quick Dodge', slug: 'quick-dodge', desc: 'Fast-paced reflex game where you dodge incoming obstacles. How long can you survive?', tech: ['JavaScript'], liveUrl: 'https://mihmahmudeli.github.io/Quick-Dodge/', year: '2026' },
  { title: 'Number Grid Game', slug: 'number-grid-game', desc: 'Interactive number grid puzzle game with multiple difficulty levels and responsive design.', tech: ['CSS', 'JavaScript'], liveUrl: 'https://number-grid-game.netlify.app', year: '2026' },
  { title: 'Tic Tac Toe', slug: 'tic-tac-toe', desc: 'Classic Tic Tac Toe with friend and computer modes, multiple themes, and smooth animations.', tech: ['JavaScript'], liveUrl: 'https://mihmahmudeli.github.io/tic-tac-toe-game/', year: '2025' },
];

const tools: Project[] = [
  { title: 'Career-Sync', slug: 'career-sync', desc: 'Career management platform for tracking job applications, skill development, and goals.', tech: ['TypeScript'], year: '2026' },
  { title: 'PasswordVault', slug: 'passwordvault', desc: 'Secure password manager built with Python for storing, generating, and managing credentials.', tech: ['Python'], year: '2026' },
  { title: 'EliteJersey', slug: 'elitejersey', desc: 'Java Swing desktop app for admin login, product management, and account management.', tech: ['Java'], year: '2025' },
  { title: 'AgroBridge', slug: 'agrobridge', desc: 'Digital platform connecting farmers with resources, market data, and community support.', tech: ['C#'], year: '2025' },
  { title: 'GlutProject', slug: 'glutproject', desc: '2D animated smart city with weather, vehicles, day-night cycle, and interactive controls.', tech: ['C++', 'OpenGL'], year: '2025' },
];

const sections = [
  { title: 'Web Applications', icon: '🌐', projects: webApps },
  { title: 'Mobile Apps', icon: '📱', projects: mobileApps },
  { title: 'Games', icon: '🎮', projects: games },
  { title: 'Tools & More', icon: '🛠️', projects: tools },
];

const techColors: Record<string, string> = {
  TypeScript: 'bg-blue-500/15 text-blue-300 border-blue-500/25',
  JavaScript: 'bg-yellow-500/15 text-yellow-300 border-yellow-500/25',
  Python: 'bg-green-500/15 text-green-300 border-green-500/25',
  Kotlin: 'bg-purple-500/15 text-purple-300 border-purple-500/25',
  PHP: 'bg-indigo-500/15 text-indigo-300 border-indigo-500/25',
  'C++': 'bg-pink-500/15 text-pink-300 border-pink-500/25',
  Java: 'bg-orange-500/15 text-orange-300 border-orange-500/25',
  'C#': 'bg-violet-500/15 text-violet-300 border-violet-500/25',
  MySQL: 'bg-cyan-500/15 text-cyan-300 border-cyan-500/25',
  React: 'bg-sky-500/15 text-sky-300 border-sky-500/25',
  'Next.js': 'bg-zinc-500/15 text-zinc-300 border-zinc-500/25',
  PostgreSQL: 'bg-blue-600/15 text-blue-300 border-blue-600/25',
  OpenGL: 'bg-emerald-500/15 text-emerald-300 border-emerald-500/25',
};

export default function ProjectsPage() {
  return (
    <>
      <div className="fixed inset-0 bg-gradient-to-br from-blue-950/30 via-black to-purple-950/30 pointer-events-none" />
      <div className="relative py-20">
        <div className="max-w-5xl mx-auto px-4">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="mb-16">
            <h1 className="text-4xl font-bold text-white mb-3">Projects</h1>
            <p className="text-zinc-500 max-w-xl">
              A collection of web apps, mobile apps, games, and tools I&apos;ve built over the years.
            </p>
          </motion.div>

          {sections.map((section, si) => (
            <motion.section
              key={section.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: si * 0.1 }}
              className="mb-12"
            >
              <div className="flex items-center gap-3 mb-5">
                <span className="text-lg">{section.icon}</span>
                <h2 className="text-lg font-semibold text-zinc-300">{section.title}</h2>
                <span className="text-xs text-zinc-600 ml-auto">{section.projects.length} projects</span>
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                {section.projects.map((p) => (
                  <Link
                    key={p.slug}
                    href={`/projects/${p.slug}`}
                    className="group relative block rounded-xl overflow-hidden transition-all duration-300 hover:-translate-y-0.5"
                  >
                    <div className="absolute inset-0 bg-gradient-to-br from-white/[0.04] to-white/[0.01] group-hover:from-white/[0.07] group-hover:to-white/[0.02] transition-all duration-300 rounded-xl border border-white/[0.06] group-hover:border-white/20" />
                    <div className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" style={{ background: 'radial-gradient(400px circle at 50% 0%, rgba(59,130,246,0.06), transparent)' }} />
                    <div className="absolute left-0 top-3 bottom-3 w-0.5 rounded-full bg-gradient-to-b from-transparent via-white/10 to-transparent group-hover:via-blue-400/50 transition-all duration-300" />
                    <div className="relative p-4 pl-5">
                      <div className="flex items-start justify-between gap-3">
                        <div className="min-w-0 flex-1">
                          <div className="flex items-center gap-2.5 mb-1.5">
                            <div className="w-1.5 h-1.5 rounded-full bg-blue-400/50 group-hover:bg-blue-400 transition-colors" />
                            <h3 className="font-medium text-white text-sm group-hover:text-blue-300 transition-colors">{p.title}</h3>
                            {p.year && (
                              <span className="text-[9px] px-1.5 py-0.5 rounded bg-zinc-800/80 text-zinc-500 border border-zinc-700/50">{p.year}</span>
                            )}
                          </div>
                          <p className="text-xs text-zinc-500 leading-relaxed line-clamp-2 group-hover:text-zinc-400 transition-colors">{p.desc}</p>
                          <div className="flex flex-wrap gap-1.5 mt-3">
                            {p.tech.map((t) => (
                              <span key={t} className={`text-[9px] px-2 py-0.5 rounded-full border font-medium ${techColors[t] || 'bg-white/5 text-zinc-500 border-white/10'}`}>
                                {t}
                              </span>
                            ))}
                          </div>
                        </div>
                        <div className="w-7 h-7 rounded-full bg-white/[0.03] border border-white/[0.06] flex items-center justify-center shrink-0 mt-0.5 group-hover:bg-blue-500/10 group-hover:border-blue-500/20 transition-all duration-300">
                          <svg className="w-3 h-3 text-zinc-600 group-hover:text-blue-400 transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
                        </div>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </motion.section>
          ))}
        </div>
      </div>
    </>
  );
}
