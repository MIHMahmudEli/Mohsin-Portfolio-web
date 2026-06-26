'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

interface Game {
  title: string;
  slug: string;
  desc: string;
  tech: string[];
  emoji: string;
  gradient: string;
  liveUrl?: string;
  githubUrl?: string;
  featured: boolean;
}

const games: Game[] = [
  {
    title: 'Tic-Tac-Toe (Alpha-Beta)', slug: 'tic-tac-toe',
    desc: 'Implements the alpha-beta pruning algorithm — the computer always wins. Built to understand how game AI works.',
    tech: ['JavaScript'], emoji: '⭕', gradient: 'from-purple-600/40 to-pink-600/20',
    liveUrl: 'https://mihmahmudeli.github.io/tic-tac-toe-game/', githubUrl: 'https://github.com/MIHMahmudEli/tic-tac-toe-game', featured: true,
  },
  {
    title: 'Counting Game', slug: 'counting-game',
    desc: 'Take turns counting from 0 to 21 with a smart computer opponent. Whoever says 21 loses. Uses game theory strategy.',
    tech: ['JavaScript'], emoji: '🔢', gradient: 'from-blue-600/40 to-cyan-600/20',
    liveUrl: 'https://mihmahmudeli.github.io/Counting-Game/', githubUrl: 'https://github.com/MIHMahmudEli/Counting-Game', featured: true,
  },
  {
    title: 'Ludo Game App', slug: 'ludo-game-app',
    desc: 'Currently building a Ludo game in React Native to understand how game engines work on mobile platforms.',
    tech: ['TypeScript', 'React Native'], emoji: '🎲', gradient: 'from-emerald-600/40 to-teal-600/20',
    githubUrl: 'https://github.com/MIHMahmudEli/ludo-game-app', featured: true,
  },
  {
    title: 'Quick Dodge', slug: 'quick-dodge',
    desc: 'Fast-paced dodge game. Avoid obstacles and survive as long as you can.',
    tech: ['JavaScript'], emoji: '🎯', gradient: 'from-red-600/40 to-orange-600/20',
    liveUrl: 'https://mihmahmudeli.github.io/Quick-Dodge/', githubUrl: 'https://github.com/MIHMahmudEli/Quick-Dodge', featured: false,
  },
  {
    title: 'Number Grid Game', slug: 'number-grid-game',
    desc: 'A puzzle game built around number grids with multiple difficulty levels.',
    tech: ['CSS', 'JavaScript'], emoji: '🧩', gradient: 'from-amber-600/40 to-yellow-600/20',
    liveUrl: 'https://number-grid-game.netlify.app/', githubUrl: 'https://github.com/MIHMahmudEli/Number-Grid-Game', featured: false,
  },
];

const techColors: Record<string, string> = {
  JavaScript: '#f1e05a', TypeScript: '#3178c6', CSS: '#563d7c', HTML: '#e34c26', 'React Native': '#61dafb',
};

export default function GamesPage() {
  const titleWords = ['Games', "I've", 'Built'];

  return (
    <>
      <div className="fixed inset-0 bg-gradient-to-br from-emerald-950/20 via-surface to-blue-950/20 pointer-events-none" />

      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        <div className="absolute -top-40 -left-40 w-80 h-80 rounded-full bg-emerald-500/[var(--orb-alpha)] blur-[120px] floating-shape" style={{ animationDelay: '0s', animationDuration: '30s' }} />
        <div className="absolute -bottom-40 -right-40 w-96 h-96 rounded-full bg-blue-500/[var(--orb-alpha)] blur-[120px] floating-shape" style={{ animationDelay: '-10s', animationDuration: '35s' }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 rounded-full bg-teal-500/[var(--orb-alpha)] blur-[100px] floating-shape" style={{ animationDelay: '-5s', animationDuration: '25s' }} />
      </div>

      <div className="relative py-16 md:py-24">
        <div className="max-w-6xl mx-auto px-6">
          <div className="mb-12 md:mb-16">
            <motion.span
              initial={{ opacity: 0, y: -10, scale: 0.9 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ type: 'spring', stiffness: 200, damping: 15 }}
              className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-[10px] text-emerald-400/80 tracking-wide mb-4"
            >
              <span className="relative flex h-1.5 w-1.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-emerald-500" />
              </span>
              Playground
            </motion.span>

            <h1 className="text-4xl md:text-6xl font-bold text-content mb-3 leading-tight">
              {titleWords.map((word, i) => (
                <motion.span
                  key={word}
                  initial={{ opacity: 0, y: 30, rotateX: -40 }}
                  animate={{ opacity: 1, y: 0, rotateX: 0 }}
                  transition={{ duration: 0.6, delay: 0.1 + i * 0.15, ease: [0.16, 1, 0.3, 1] }}
                  className="inline-block mr-3"
                  style={{ perspective: '600px' }}
                >
                  {word === 'Built' ? (
                    <span className="bg-gradient-to-r from-emerald-400 via-teal-400 to-cyan-400 bg-clip-text text-transparent bg-[length:200%_200%] animate-gradient">
                      Built
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
              transition={{ duration: 0.5, delay: 0.5 }}
              className="text-subtle text-base max-w-xl"
            >
              From AI-powered opponents to mobile game engines &mdash; each game taught me something new.
            </motion.p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {games.map((g, i) => {
              const rotate = i % 2 === 0 ? 3 : -3;
              return (
                <motion.div
                  key={g.slug}
                  initial={{ opacity: 0, y: 40, scale: 0.92, rotate }}
                  animate={{ opacity: 1, y: 0, scale: 1, rotate: 0 }}
                  transition={{
                    type: 'spring', stiffness: 180, damping: 20,
                    delay: i * 0.08,
                  }}
                  whileHover={{ y: -6, scale: 1.01 }}
                  style={{ perspective: '800px' }}
                >
                  <div
                    className={`group relative rounded-2xl border border-line overflow-hidden h-full transition-shadow duration-300 ${
                      g.featured ? 'bg-card/70' : 'bg-card/50'
                    }`}
                    style={{
                      transformStyle: 'preserve-3d',
                      boxShadow: '0 0 0 0 rgba(52,211,153,0)',
                      transition: 'box-shadow 0.3s ease',
                    }}
                    onMouseEnter={(e) => { e.currentTarget.style.boxShadow = '0 20px 60px -12px rgba(52,211,153,0.15)'; }}
                    onMouseLeave={(e) => { e.currentTarget.style.boxShadow = '0 0 0 0 rgba(52,211,153,0)'; }}
                  >
                    <div className={`absolute inset-0 bg-gradient-to-br ${g.gradient} opacity-30 group-hover:opacity-60 transition-opacity duration-500`} />

                    <motion.div
                      className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-emerald-500/60 via-teal-500/60 to-cyan-500/60"
                      initial={{ scaleX: 0, opacity: 0 }}
                      whileInView={{ scaleX: 1, opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.08 + 0.3, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                      style={{ transformOrigin: 'left' }}
                    />

                    <div className="relative p-5 flex flex-col h-full">
                      <div className="flex items-start justify-between mb-4">
                        <motion.div
                          className="w-12 h-12 rounded-2xl flex items-center justify-center text-2xl bg-card/80 border border-line/50 emoji-bob"
                          style={{ animationDelay: `${i * 0.2}s` }}
                          whileHover={{ scale: 1.15, rotate: -12 }}
                          transition={{ type: 'spring', stiffness: 250, damping: 12 }}
                        >
                          {g.emoji}
                        </motion.div>
                        {g.featured && (
                          <motion.span
                            initial={{ opacity: 0, x: 10 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.15 + i * 0.08 }}
                            className="text-[9px] px-2 py-0.5 rounded-full shrink-0 relative overflow-hidden"
                            style={{
                              backgroundColor: 'rgba(52,211,153,0.15)',
                              color: 'rgba(52,211,153,0.9)',
                              border: '1px solid rgba(52,211,153,0.25)',
                            }}
                          >
                            <motion.div
                              className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent"
                              animate={{ x: ['-100%', '200%'] }}
                              transition={{ repeat: Infinity, duration: 3, ease: 'linear', delay: 1 }}
                            />
                            <span className="relative">Featured</span>
                          </motion.span>
                        )}
                      </div>

                      <h3 className="text-base font-semibold text-content mb-2 group-hover:text-emerald-400 transition-colors duration-200">{g.title}</h3>
                      <p className="text-xs text-muted leading-relaxed mb-5 line-clamp-2 group-hover:text-emerald-400 transition-colors duration-200 flex-1">{g.desc}</p>

                      <div className="flex flex-wrap gap-1.5 mb-4">
                        {g.tech.map((t, ti) => (
                          <motion.span
                            key={t}
                            initial={{ opacity: 0, y: 10, scale: 0.8 }}
                            animate={{ opacity: 1, y: 0, scale: 1 }}
                            transition={{ delay: 0.3 + i * 0.08 + ti * 0.08, type: 'spring', stiffness: 200, damping: 15 }}
                            className="text-[9px] px-2 py-0.5 rounded-full border font-medium"
                            style={{
                              backgroundColor: `${techColors[t] || '#6366f1'}18`,
                              color: techColors[t] || '#6366f1',
                              borderColor: `${techColors[t] || '#6366f1'}30`,
                            }}
                            whileHover={{ y: -2, scale: 1.1 }}
                          >
                            {t}
                          </motion.span>
                        ))}
                      </div>

                      <motion.div
                        className="flex items-center gap-3 pt-3 border-t border-line"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.4 + i * 0.08 }}
                      >
                        {g.liveUrl && (
                          <motion.a
                            href={g.liveUrl} target="_blank" rel="noopener noreferrer"
                            className="relative inline-flex items-center gap-1.5 px-4 py-2 rounded-full text-[11px] font-medium overflow-hidden"
                            style={{
                              backgroundColor: 'rgba(52,211,153,0.12)',
                              color: 'rgba(52,211,153,0.9)',
                              border: '1px solid rgba(52,211,153,0.25)',
                            }}
                            whileHover={{ scale: 1.04 }}
                            whileTap={{ scale: 0.96 }}
                          >
                            <motion.div
                              className="absolute inset-0 rounded-full"
                              style={{
                                background: 'radial-gradient(circle at 50% 50%, rgba(52,211,153,0.15), transparent 70%)',
                              }}
                              animate={{ scale: [1, 1.2, 1], opacity: [0.5, 1, 0.5] }}
                              transition={{ repeat: Infinity, duration: 2.5, ease: 'easeInOut' }}
                            />
                            <svg className="relative w-3 h-3" fill="currentColor" viewBox="0 0 24 24"><path d="M8 5v14l11-7z" /></svg>
                            <span className="relative">Play</span>
                          </motion.a>
                        )}
                        {g.githubUrl && (
                          <motion.a
                            href={g.githubUrl} target="_blank" rel="noopener noreferrer"
                            className="inline-flex items-center gap-1.5 text-[11px] text-muted hover:text-blue-400 transition-colors"
                            whileHover={{ x: 2 }}
                          >
                            <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" /></svg>
                            Source
                          </motion.a>
                        )}
                        {!g.liveUrl && g.githubUrl && (
                          <span className="text-[10px] text-muted italic">In development</span>
                        )}
                      </motion.div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ delay: 0.6, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="mt-12 p-6 rounded-2xl border border-line bg-card/50 flex items-center justify-between flex-wrap gap-4 relative overflow-hidden group"
            whileHover={{ y: -2 }}
          >
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-emerald-500/5 via-transparent to-blue-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
            />
            <div className="relative flex items-center gap-3">
              <motion.div
                className="w-10 h-10 rounded-xl bg-amber-500/10 flex items-center justify-center text-lg"
                animate={{ rotate: [0, -8, 8, -4, 0] }}
                transition={{ repeat: Infinity, duration: 4, ease: 'easeInOut' }}
              >
                🎮
              </motion.div>
              <div>
                <div className="text-sm text-content font-medium">More games coming</div>
                <div className="text-xs text-muted">I&apos;m building more games. Stay tuned!</div>
              </div>
            </div>
            <Link
              href="/projects"
              className="relative px-5 py-2.5 border border-line text-content rounded-full text-xs font-medium hover:bg-card hover:border-line transition-colors"
            >
              View all projects
            </Link>
          </motion.div>
        </div>
      </div>
    </>
  );
}
