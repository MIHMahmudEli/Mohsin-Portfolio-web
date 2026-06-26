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
    desc: 'Implements the alpha-beta pruning algorithm — the computer always wins. Built to understand how game AI works at the algorithmic level.',
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

function stagger(i: number) {
  return { delay: i * 0.06 };
}

export default function GamesPage() {
  return (
    <>
      <div className="fixed inset-0 bg-gradient-to-br from-emerald-950/20 via-black to-blue-950/20 pointer-events-none" />

      <div className="relative py-16 md:py-24">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="mb-12 md:mb-16">
            <motion.span
              initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-[10px] text-emerald-400/80 tracking-wide mb-4"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
              Playground
            </motion.span>

            <h1 className="text-4xl md:text-6xl font-bold text-white mb-3 leading-tight">
              Games{' '}
              <span className="bg-gradient-to-r from-emerald-400 via-teal-400 to-cyan-400 bg-clip-text text-transparent">I&apos;ve Built</span>
            </h1>

            <motion.p
              initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.15, duration: 0.5 }}
              className="text-zinc-400 text-base max-w-xl"
            >
              From AI-powered opponents to mobile game engines &mdash; each game taught me something new.
            </motion.p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {games.map((g, i) => (
              <motion.div
                key={g.slug}
                initial={{ opacity: 0, y: 24, scale: 0.96 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ duration: 0.5, ...stagger(i), ease: [0.16, 1, 0.3, 1] }}
              >
                <div className={`group relative rounded-2xl border border-zinc-800 overflow-hidden h-full ${g.featured ? 'bg-zinc-900/50' : 'bg-zinc-900/30'}`}>
                  <div className={`absolute inset-0 bg-gradient-to-br ${g.gradient} opacity-40 group-hover:opacity-60 transition-opacity duration-500`} />

                  <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-emerald-500/60 via-teal-500/60 to-cyan-500/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                  <div className="relative p-5 flex flex-col h-full">
                    <div className="flex items-start justify-between mb-4">
                      <motion.div
                        className="w-12 h-12 rounded-2xl flex items-center justify-center text-2xl bg-zinc-900/60 border border-zinc-700/50"
                        whileHover={{ scale: 1.1, rotate: -8 }}
                        transition={{ type: 'spring', stiffness: 300, damping: 15 }}
                      >
                        {g.emoji}
                      </motion.div>
                      {g.featured && (
                        <span className="text-[9px] px-2 py-0.5 rounded-full bg-emerald-500/15 text-emerald-300 border border-emerald-500/25 shrink-0">
                          Featured
                        </span>
                      )}
                    </div>

                    <h3 className="text-base font-semibold text-white mb-2 group-hover:text-emerald-300 transition-colors">{g.title}</h3>
                    <p className="text-xs text-zinc-500 leading-relaxed mb-5 line-clamp-2 group-hover:text-zinc-400 transition-colors flex-1">{g.desc}</p>

                    <div className="flex flex-wrap gap-1.5 mb-4">
                      {g.tech.map((t) => (
                        <span
                          key={t}
                          className="text-[9px] px-2 py-0.5 rounded-full border font-medium"
                          style={{
                            backgroundColor: `${techColors[t] || '#6366f1'}18`,
                            color: techColors[t] || '#6366f1',
                            borderColor: `${techColors[t] || '#6366f1'}30`,
                          }}
                        >
                          {t}
                        </span>
                      ))}
                    </div>

                    <div className="flex items-center gap-3 pt-3 border-t border-zinc-800">
                      {g.liveUrl && (
                        <motion.a
                          href={g.liveUrl} target="_blank" rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-emerald-500/15 text-emerald-300 text-[11px] font-medium border border-emerald-500/25 hover:bg-emerald-500/25 transition-colors"
                          whileHover={{ scale: 1.03 }}
                          whileTap={{ scale: 0.97 }}
                        >
                          <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 24 24"><path d="M8 5v14l11-7z" /></svg>
                          Play
                        </motion.a>
                      )}
                      {g.githubUrl && (
                        <a href={g.githubUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 text-[11px] text-zinc-500 hover:text-zinc-300 transition-colors">
                          <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" /></svg>
                          Source
                        </a>
                      )}
                      {!g.liveUrl && g.githubUrl && (
                        <span className="text-[10px] text-zinc-600 italic">In development</span>
                      )}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.5 }}
            className="mt-12 p-6 rounded-2xl border border-zinc-800 bg-zinc-900/20 flex items-center justify-between flex-wrap gap-4"
          >
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-amber-500/10 flex items-center justify-center text-lg">🎮</div>
              <div>
                <div className="text-sm text-white font-medium">More games coming</div>
                <div className="text-xs text-zinc-500">I&apos;m building more games. Stay tuned!</div>
              </div>
            </div>
            <Link href="/projects" className="px-5 py-2.5 border border-zinc-700 text-zinc-300 rounded-full text-xs font-medium hover:bg-zinc-800 hover:border-zinc-500 transition-colors">
              View all projects
            </Link>
          </motion.div>
        </div>
      </div>
    </>
  );
}
