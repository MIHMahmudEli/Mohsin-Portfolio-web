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
  TypeScript: '#3178c6', JavaScript: '#f1e05a', Python: '#3572A5', Kotlin: '#A97BFF',
  PHP: '#4F5B93', 'C++': '#f34b7d', Java: '#b07219', 'C#': '#178600',
  MySQL: '#00758F', React: '#61dafb', 'Next.js': '#ffffff', PostgreSQL: '#336791',
  OpenGL: '#5586a4', HTML: '#e34c26', CSS: '#563d7c',
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

export default function ProjectsPage() {
  const [activeTab, setActiveTab] = useState<Category>('All');
  const [prevTab, setPrevTab] = useState<Category>('All');

  const filtered = activeTab === 'All' ? projects : projects.filter(p => p.category === activeTab);

  const handleTabChange = (cat: Category) => {
    setPrevTab(activeTab);
    setActiveTab(cat);
  };

  const titleWords = ["Things", "I've", "built"];

  return (
    <>
      <div className="fixed inset-0 bg-gradient-to-br from-blue-950/20 via-surface to-purple-950/20 pointer-events-none" />

      <div className="relative py-16 md:py-24">
        <div className="max-w-6xl mx-auto px-6">
          <div className="mb-10 md:mb-14">
            <motion.span
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="text-xs tracking-[0.2em] text-muted uppercase mb-3 block"
            >
              Portfolio
            </motion.span>

            <h1 className="text-4xl md:text-6xl font-bold text-content mb-3 leading-tight">
              {titleWords.map((word, i) => (
                <motion.span
                  key={word}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.1 + i * 0.12, ease: [0.16, 1, 0.3, 1] }}
                  className="inline-block mr-3"
                >
                  {word === 'built' ? (
                    <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent bg-[length:200%_200%] animate-gradient">
                      built
                    </span>
                  ) : (
                    word
                  )}
                </motion.span>
              ))}
            </h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="text-subtle text-base max-w-xl"
            >
              {projects.length} projects across web, mobile, games, and tools &mdash; each one taught me something new.
            </motion.p>
          </div>

          <div className="flex items-center gap-1 mb-10 border-b border-line/50">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => handleTabChange(cat)}
                className={`relative px-4 py-3 text-xs font-medium transition-colors duration-200 ${
                  activeTab === cat ? 'text-content' : 'text-muted hover:text-content'
                }`}
              >
                {cat}
                {activeTab === cat && (
                  <motion.div
                    layoutId="tab-underline"
                    className={`absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r ${categoryAccent(cat)}`}
                    transition={{ type: 'spring', stiffness: 400, damping: 35 }}
                  />
                )}
              </button>
            ))}
            <motion.span
              key={activeTab + filtered.length}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              className="ml-auto text-[10px] text-muted tracking-wider"
            >
              {filtered.length} projects
            </motion.span>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            <AnimatePresence mode="popLayout">
              {filtered.map((p, i) => {
                const primaryTech = p.tech[0];
                const accentColor = techColors[primaryTech] || '#6366f1';

                return (
                  <motion.div
                    key={p.slug}
                    layout
                    initial={{ opacity: 0, y: 24, scale: 0.96 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: -16, scale: 0.96 }}
                    transition={{
                      opacity: { duration: 0.35 },
                      y: { type: 'spring', stiffness: 250, damping: 25, delay: i * 0.04 },
                      scale: { duration: 0.35 },
                      layout: { type: 'spring', stiffness: 250, damping: 25 },
                    }}
                  >
                    <Link
                      href={`/projects/${p.slug}`}
                      className="group relative block rounded-2xl bg-card/60 border border-line transition-all duration-300 overflow-hidden"
                      style={{ perspective: '600px' }}
                    >
                      <motion.div
                        className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100"
                        style={{
                          background: `radial-gradient(500px circle at 30% 20%, ${accentColor}15, transparent 60%)`,
                        }}
                        transition={{ duration: 0.4 }}
                      />

                      <div
                        className="absolute top-0 left-0 right-0 h-[2px] opacity-60 group-hover:opacity-100 transition-opacity duration-300"
                        style={{ background: `linear-gradient(90deg, ${accentColor}40, ${accentColor}, ${accentColor}40)` }}
                      />

                      <motion.div
                        className="relative p-5"
                        whileHover={{ y: -2 }}
                        transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                      >
                        <div className="flex items-start justify-between mb-4">
                          <motion.div
                            className="flex items-center gap-3"
                            whileHover={{ x: 2 }}
                            transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                          >
                            <motion.div
                              className="w-10 h-10 rounded-xl flex items-center justify-center text-lg"
                              style={{ backgroundColor: `${accentColor}18` }}
                              whileHover={{ scale: 1.15, rotate: -8 }}
                              transition={{ type: 'spring', stiffness: 300, damping: 15 }}
                            >
                              {p.emoji}
                            </motion.div>
                          </motion.div>
                          <div className="flex items-center gap-2 shrink-0">
                            {p.liveUrl && (
                              <motion.span
                                initial={{ opacity: 0, x: -8 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: 0.2 + i * 0.04 }}
                                className="flex items-center gap-1.5 text-[10px] text-emerald-400/70"
                              >
                                <span className="relative flex h-1.5 w-1.5">
                                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                                  <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-emerald-500" />
                                </span>
                                Live
                              </motion.span>
                            )}
                            {p.year && (
                              <span className="text-[10px] px-2 py-0.5 rounded-full bg-card text-muted border border-line/50">{p.year}</span>
                            )}
                          </div>
                        </div>

                        <h3 className="text-sm font-semibold text-content mb-1.5 group-hover:text-blue-400 transition-colors duration-200">{p.title}</h3>
                        <p className="text-xs text-muted leading-relaxed mb-4 line-clamp-2 group-hover:text-blue-400 transition-colors duration-200">{p.desc}</p>

                        <div className="flex items-center justify-between">
                          <div className="flex flex-wrap gap-1.5">
                            {p.tech.map((t, ti) => (
                              <motion.span
                                key={t}
                                initial={{ opacity: 0, y: 8 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.3 + i * 0.04 + ti * 0.06 }}
                                className="text-[9px] px-2 py-0.5 rounded-full border font-medium transition-all duration-200"
                                style={{
                                  backgroundColor: `${techColors[t] || '#6366f1'}15`,
                                  color: techColors[t] || '#6366f1',
                                  borderColor: `${techColors[t] || '#6366f1'}25`,
                                }}
                                whileHover={{ y: -2, scale: 1.05 }}
                              >
                                {t}
                              </motion.span>
                            ))}
                          </div>
                          <motion.div
                            className="w-7 h-7 rounded-full bg-white/[0.03] border border-white/[0.06] flex items-center justify-center shrink-0 ml-3"
                            initial={{ opacity: 0, x: -8 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.35 + i * 0.04 }}
                            whileHover={{ scale: 1.1, backgroundColor: 'rgba(59,130,246,0.1)', borderColor: 'rgba(59,130,246,0.2)' }}
                          >
                            <motion.svg
                              className="w-3 h-3 text-muted"
                              fill="none" viewBox="0 0 24 24" stroke="currentColor"
                              whileHover={{ x: 2, color: '#60a5fa' }}
                              transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                            >
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                            </motion.svg>
                          </motion.div>
                        </div>
                      </motion.div>
                    </Link>
                  </motion.div>
                );
              })}
            </AnimatePresence>
          </div>

          <AnimatePresence>
            {filtered.length === 0 && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                className="text-center py-20 text-muted text-sm"
              >
                No projects in this category yet.
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </>
  );
}
