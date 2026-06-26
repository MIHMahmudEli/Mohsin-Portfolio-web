'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import Link from 'next/link';

interface Project {
  title: string;
  slug: string;
  desc: string;
  tech: string[];
  category: string;
  emoji: string;
  liveUrl?: string;
  year?: string;
}

const projects: Project[] = [
  { title: 'StudyHub v2', slug: 'studyhub', desc: 'Academic note-sharing platform rebuilt with Next.js, API-driven architecture, and enhanced UX.', tech: ['TypeScript', 'Next.js', 'PostgreSQL'], category: 'Web', emoji: '📚', liveUrl: 'https://studyhubbd.vercel.app', year: '2026' },
  { title: 'StudyHub v1', slug: 'studyhub-v1', desc: 'Original PHP version with full moderation, gamification, and role-based student access.', tech: ['PHP', 'MySQL', 'JavaScript'], category: 'Web', emoji: '📖', liveUrl: 'https://studyhubb.great-site.net', year: '2025' },
  { title: 'RoutinePro', slug: 'routinepro', desc: 'Smart university class routine generator with conflict-free scheduling and gap optimization.', tech: ['JavaScript'], category: 'Web', emoji: '📅', liveUrl: 'https://routine-pro-fawn.vercel.app', year: '2026' },
  { title: 'TrueNetMeter', slug: 'truenetmeter', desc: 'Premium internet speed test with circular speedometer and multi-stream algorithms.', tech: ['PHP', 'JavaScript'], category: 'Web', emoji: '📶', liveUrl: 'https://truenetmeter.infinityfreeapp.com', year: '2026' },
  { title: 'Automata Playground', slug: 'automata-playground', desc: 'Interactive web tool for visualizing automata theory concepts.', tech: ['TypeScript', 'React'], category: 'Web', emoji: '⚙️', liveUrl: 'https://automata-playground-beige.vercel.app', year: '2026' },
  { title: 'NexGen.OS', slug: 'nexgen-os', desc: 'Web-based OS simulation with windows, taskbar, file manager, and interactive apps.', tech: ['JavaScript'], category: 'Web', emoji: '🖥️', liveUrl: 'https://nex-gen-os.vercel.app', year: '2026' },
  { title: 'FP Reseller Console', slug: 'fp-reseller-console', desc: 'Reseller management console for managing products, orders, and clients.', tech: ['TypeScript'], category: 'Web', emoji: '📊', liveUrl: 'https://fp-reseller-console.vercel.app', year: '2026' },
  { title: 'MAD Project Pipeline', slug: 'mad-project-pipeline', desc: 'Project pipeline management tool for tracking mobile app development workflows.', tech: ['CSS', 'JavaScript'], category: 'Web', emoji: '🔧', liveUrl: 'https://mad-project-pipe-line.vercel.app', year: '2026' },
  { title: 'Portfolio v1', slug: 'portfolio-v1', desc: 'Previous version of my personal portfolio built with TypeScript.', tech: ['TypeScript'], category: 'Web', emoji: '🎨', liveUrl: 'https://portfolio-three-snowy-49.vercel.app', year: '2026' },
  { title: 'GitAnalytics', slug: 'git-analytics', desc: 'GitHub analytics dashboard that visualizes repository stats and contribution data.', tech: ['CSS', 'JavaScript'], category: 'Web', emoji: '📈', liveUrl: 'https://git-analytics-sigma.vercel.app', year: '2026' },
  { title: 'Research to JSON', slug: 'research-to-json', desc: 'Streamlit-powered tool that converts research papers into structured JSON format.', tech: ['Python'], category: 'Web', emoji: '🔬', liveUrl: 'https://mihmahmudeli-research-to-json-app-r2bfaf.streamlit.app', year: '2026' },
  { title: 'StudyHub Mobile', slug: 'studyhub-mobile', desc: 'Android mobile app extending StudyHub for on-the-go note access.', tech: ['Kotlin'], category: 'Mobile', emoji: '📱' },
  { title: 'Koshai Finder', slug: 'koshai-finder', desc: 'Android app built with Kotlin that helps users find local services and businesses.', tech: ['Kotlin'], category: 'Mobile', emoji: '📍' },
  { title: 'Counting Game', slug: 'counting-game', desc: 'Fun turn-based number game where you compete against a smart computer opponent.', tech: ['JavaScript'], category: 'Game', emoji: '🔢', liveUrl: 'https://mihmahmudeli.github.io/Counting-Game/', year: '2025' },
  { title: 'Quick Dodge', slug: 'quick-dodge', desc: 'Fast-paced reflex game where you dodge incoming obstacles.', tech: ['JavaScript'], category: 'Game', emoji: '🎯', liveUrl: 'https://mihmahmudeli.github.io/Quick-Dodge/', year: '2026' },
  { title: 'Number Grid Game', slug: 'number-grid-game', desc: 'Interactive number grid puzzle game with multiple difficulty levels.', tech: ['CSS', 'JavaScript'], category: 'Game', emoji: '🧩', liveUrl: 'https://number-grid-game.netlify.app', year: '2026' },
  { title: 'Tic Tac Toe', slug: 'tic-tac-toe', desc: 'Classic Tic Tac Toe with friend and computer modes, themes, and smooth animations.', tech: ['JavaScript'], category: 'Game', emoji: '⭕', liveUrl: 'https://mihmahmudeli.github.io/tic-tac-toe-game/', year: '2025' },
  { title: 'Career-Sync', slug: 'career-sync', desc: 'Career management platform for tracking job applications, skill development, and goals.', tech: ['TypeScript'], category: 'Tool', emoji: '💼' },
  { title: 'PasswordVault', slug: 'passwordvault', desc: 'Secure password manager built with Python for storing, generating, and managing credentials.', tech: ['Python'], category: 'Tool', emoji: '🔒' },
  { title: 'EliteJersey', slug: 'elitejersey', desc: 'Java Swing desktop app for admin login, product management, and account management.', tech: ['Java'], category: 'Tool', emoji: '👕' },
  { title: 'AgroBridge', slug: 'agrobridge', desc: 'Digital platform connecting farmers with resources, market data, and community support.', tech: ['C#'], category: 'Tool', emoji: '🌾' },
  { title: 'GlutProject', slug: 'glutproject', desc: '2D animated smart city with weather, vehicles, day-night cycle, and interactive controls.', tech: ['C++', 'OpenGL'], category: 'Tool', emoji: '🌆' },
];

const categories = ['All', 'Web', 'Mobile', 'Game', 'Tool'] as const;
type Category = typeof categories[number];

const techColors: Record<string, string> = {
  TypeScript: '#3178c6',
  JavaScript: '#f1e05a',
  Python: '#3572A5',
  Kotlin: '#A97BFF',
  PHP: '#4F5B93',
  'C++': '#f34b7d',
  Java: '#b07219',
  'C#': '#178600',
  MySQL: '#00758F',
  React: '#61dafb',
  'Next.js': '#ffffff',
  PostgreSQL: '#336791',
  OpenGL: '#5586a4',
  HTML: '#e34c26',
  CSS: '#563d7c',
};

function categoryAccent(cat: Category): string {
  switch (cat) {
    case 'Web': return 'from-blue-500 to-cyan-500';
    case 'Mobile': return 'from-purple-500 to-pink-500';
    case 'Game': return 'from-emerald-500 to-teal-500';
    case 'Tool': return 'from-amber-500 to-orange-500';
    default: return 'from-zinc-500 to-zinc-400';
  }
}

function categoryGlow(cat: string): string {
  switch (cat) {
    case 'Web': return 'rgba(59,130,246,0.04)';
    case 'Mobile': return 'rgba(168,85,247,0.04)';
    case 'Game': return 'rgba(52,211,153,0.04)';
    case 'Tool': return 'rgba(245,158,11,0.04)';
    default: return 'transparent';
  }
}

export default function ProjectsPage() {
  const [activeTab, setActiveTab] = useState<Category>('All');

  const filtered = activeTab === 'All' ? projects : projects.filter(p => p.category === activeTab);

  return (
    <>
      <div className="fixed inset-0 bg-gradient-to-br from-blue-950/20 via-black to-purple-950/20 pointer-events-none" />

      <div className="relative py-16 md:py-24">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="mb-10 md:mb-14">
            <span className="text-xs tracking-[0.2em] text-zinc-500 uppercase mb-3 block">Portfolio</span>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-3 leading-tight">
              Things I&apos;ve{' '}
              <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">built</span>
            </h1>
            <p className="text-zinc-400 text-base max-w-xl">
              {projects.length} projects across web, mobile, games, and tools — each one taught me something new.
            </p>
          </motion.div>

          <div className="flex items-center gap-1 mb-10 border-b border-zinc-800/50">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveTab(cat)}
                className={`relative px-4 py-3 text-xs font-medium transition-colors ${
                  activeTab === cat ? 'text-white' : 'text-zinc-500 hover:text-zinc-300'
                }`}
              >
                {cat}
                {activeTab === cat && (
                  <motion.div
                    layoutId="tab-underline"
                    className={`absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r ${categoryAccent(cat)}`}
                    transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                  />
                )}
              </button>
            ))}
            <span className="ml-auto text-[10px] text-zinc-600 tracking-wider">{filtered.length} projects</span>
          </div>

          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.25 }}
              className="grid md:grid-cols-2 lg:grid-cols-3 gap-4"
            >
              {filtered.map((p) => {
                const primaryTech = p.tech[0];
                const accentColor = techColors[primaryTech] || '#6366f1';

                return (
                  <Link
                    key={p.slug}
                    href={`/projects/${p.slug}`}
                    className="group relative rounded-2xl bg-zinc-900/40 border border-zinc-800 hover:border-zinc-600/50 transition-all duration-300 overflow-hidden"
                    style={{ perspective: '600px' }}
                  >
                    <div
                      className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                      style={{
                        background: `radial-gradient(500px circle at 30% 20%, ${accentColor}12, transparent 60%)`,
                      }}
                    />

                    <div
                      className="absolute top-0 left-0 right-0 h-[2px] opacity-60 group-hover:opacity-100 transition-opacity"
                      style={{ background: `linear-gradient(90deg, ${accentColor}40, ${accentColor}, ${accentColor}40)` }}
                    />

                    <div className="relative p-5">
                      <div className="flex items-start justify-between mb-4">
                        <div className="flex items-center gap-3">
                          <div
                            className="w-10 h-10 rounded-xl flex items-center justify-center text-lg transition-transform group-hover:scale-110 group-hover:-translate-y-0.5"
                            style={{ backgroundColor: `${accentColor}18` }}
                          >
                            {p.emoji}
                          </div>
                        </div>
                        <div className="flex items-center gap-2 shrink-0">
                          {p.liveUrl && (
                            <span className="flex items-center gap-1.5 text-[10px] text-emerald-400/70">
                              <span className="relative flex h-1.5 w-1.5">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                                <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-emerald-500" />
                              </span>
                              Live
                            </span>
                          )}
                          {p.year && (
                            <span className="text-[10px] px-2 py-0.5 rounded-full bg-zinc-800 text-zinc-500 border border-zinc-700/50">{p.year}</span>
                          )}
                        </div>
                      </div>

                      <h3 className="text-sm font-semibold text-white mb-1.5 group-hover:text-blue-300 transition-colors">{p.title}</h3>
                      <p className="text-xs text-zinc-500 leading-relaxed mb-4 line-clamp-2 group-hover:text-zinc-400 transition-colors">{p.desc}</p>

                      <div className="flex items-center justify-between">
                        <div className="flex flex-wrap gap-1.5">
                          {p.tech.map((t) => (
                            <span
                              key={t}
                              className="text-[9px] px-2 py-0.5 rounded-full border font-medium transition-colors"
                              style={{
                                backgroundColor: `${techColors[t] || '#6366f1'}15`,
                                color: techColors[t] || '#6366f1',
                                borderColor: `${techColors[t] || '#6366f1'}25`,
                              }}
                            >
                              {t}
                            </span>
                          ))}
                        </div>
                        <div className="w-7 h-7 rounded-full bg-white/[0.03] border border-white/[0.06] flex items-center justify-center shrink-0 ml-3 opacity-0 group-hover:opacity-100 transition-all duration-300 group-hover:bg-blue-500/10 group-hover:border-blue-500/20 group-hover:-translate-y-0.5">
                          <svg className="w-3 h-3 text-zinc-600 group-hover:text-blue-400 transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
                        </div>
                      </div>
                    </div>
                  </Link>
                );
              })}
            </motion.div>
          </AnimatePresence>

          {filtered.length === 0 && (
            <div className="text-center py-20 text-zinc-600 text-sm">No projects in this category yet.</div>
          )}
        </div>
      </div>
    </>
  );
}
