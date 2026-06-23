'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

const games = [
  {
    title: 'Tic-Tac-Toe (Alpha-Beta)',
    slug: 'tic-tac-toe',
    desc: 'Implements the alpha-beta pruning algorithm — the computer always wins. Built to understand how game AI works at the algorithmic level.',
    tech: ['JavaScript', 'HTML', 'CSS'],
    liveUrl: 'https://mihmahmudeli.github.io/tic-tac-toe-game/',
    githubUrl: 'https://github.com/MIHMahmudEli/tic-tac-toe-game',
    featured: true,
  },
  {
    title: 'Counting Game',
    slug: 'counting-game',
    desc: 'Take turns counting from 0 to 21 with a smart computer opponent. Whoever says 21 loses. Uses game theory strategy.',
    tech: ['JavaScript'],
    liveUrl: 'https://mihmahmudeli.github.io/Counting-Game/',
    githubUrl: 'https://github.com/MIHMahmudEli/Counting-Game',
    featured: true,
  },
  {
    title: 'Ludo Game App',
    slug: 'ludo-game-app',
    desc: 'Currently building a Ludo game in React Native to understand how game engines work on mobile platforms.',
    tech: ['TypeScript', 'React Native'],
    githubUrl: 'https://github.com/MIHMahmudEli/ludo-game-app',
    featured: true,
  },
  {
    title: 'Quick Dodge',
    slug: 'quick-dodge',
    desc: 'Fast-paced dodge game. Avoid obstacles and survive as long as you can.',
    tech: ['JavaScript'],
    liveUrl: 'https://mihmahmudeli.github.io/Quick-Dodge/',
    githubUrl: 'https://github.com/MIHMahmudEli/Quick-Dodge',
    featured: false,
  },
  {
    title: 'Number Grid Game',
    slug: 'number-grid-game',
    desc: 'A puzzle game built around number grids with multiple difficulty levels.',
    tech: ['CSS', 'JavaScript'],
    liveUrl: 'https://number-grid-game.netlify.app/',
    githubUrl: 'https://github.com/MIHMahmudEli/Number-Grid-Game',
    featured: false,
  },
];

const techColors: Record<string, string> = {
  JavaScript: 'bg-yellow-500/15 text-yellow-300 border-yellow-500/25',
  TypeScript: 'bg-blue-500/15 text-blue-300 border-blue-500/25',
  CSS: 'bg-blue-400/15 text-blue-200 border-blue-400/25',
  HTML: 'bg-red-500/15 text-red-300 border-red-500/25',
  'React Native': 'bg-sky-500/15 text-sky-300 border-sky-500/25',
};

export default function GamesPage() {
  const featured = games.filter((g) => g.featured);
  const rest = games.filter((g) => !g.featured);

  return (
    <>
      <div className="fixed inset-0 bg-gradient-to-br from-emerald-950/30 via-black to-blue-950/30 pointer-events-none" />
      <div className="fixed inset-0 bg-[radial-gradient(ellipse_at_top_left,rgba(16,185,129,0.06),transparent_50%),radial-gradient(ellipse_at_bottom_right,rgba(59,130,246,0.06),transparent_50%)] pointer-events-none" />
      <div className="relative py-20">
        <div className="max-w-5xl mx-auto px-4">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="mb-12">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs text-zinc-400 mb-4">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
              Playground
            </div>
            <h1 className="text-4xl font-bold text-white mb-3">Games I&apos;ve Built</h1>
            <p className="text-zinc-500 max-w-xl">
              From AI-powered opponents to mobile game engines — each game taught me something new.
            </p>
          </motion.div>

          {featured.length > 0 && (
            <div className="mb-10">
              <div className="flex items-center gap-3 mb-5">
                <div className="h-px flex-1 bg-gradient-to-r from-transparent via-emerald-500/30 to-transparent" />
                <span className="text-xs font-semibold tracking-widest text-emerald-400 uppercase">Featured</span>
                <div className="h-px flex-1 bg-gradient-to-r from-transparent via-emerald-500/30 to-transparent" />
              </div>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                {featured.map((g, i) => (
                  <GameCard key={g.slug} game={g} index={i} featured />
                ))}
              </div>
            </div>
          )}

          <div className="flex items-center gap-3 mb-5">
            <div className="h-px flex-1 bg-gradient-to-r from-transparent via-zinc-500/20 to-transparent" />
            <span className="text-xs font-semibold tracking-widest text-zinc-500 uppercase">More Games</span>
            <div className="h-px flex-1 bg-gradient-to-r from-transparent via-zinc-500/20 to-transparent" />
          </div>

          <div className="grid md:grid-cols-2 gap-4">
            {rest.map((g, i) => (
              <GameCard key={g.slug} game={g} index={i} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

function GameCard({ game: g, index: i, featured }: { game: typeof games[0]; index: number; featured?: boolean }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: i * 0.05 }}
      className={`relative rounded-2xl border ${
        featured
          ? 'border-emerald-500/20 bg-gradient-to-br from-emerald-500/5 via-transparent to-blue-500/5 hover:border-emerald-400/30'
          : 'border-white/10 bg-white/[0.03] hover:border-white/20'
      } transition-all overflow-hidden group`}
    >
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500" style={{ background: 'radial-gradient(400px circle at 50% 0%, rgba(16,185,129,0.06), transparent)' }} />
      <div className="relative p-5">
        <div className="flex items-start justify-between gap-3 mb-3">
          <div className="flex items-center gap-2">
            <div className={`w-2 h-2 rounded-full ${featured ? 'bg-emerald-400' : 'bg-zinc-600'}`} />
            <h3 className="font-semibold text-white text-sm">{g.title}</h3>
          </div>
          {featured && (
            <span className="text-[9px] px-2 py-0.5 rounded-full bg-emerald-500/15 text-emerald-300 border border-emerald-500/25 shrink-0">
              Featured
            </span>
          )}
        </div>
        <p className="text-sm text-zinc-500 leading-relaxed mb-4 line-clamp-2">{g.desc}</p>
        <div className="flex flex-wrap gap-1.5 mb-4">
          {g.tech.map((t) => (
            <span key={t} className={`text-[9px] px-2 py-0.5 rounded-full border font-medium ${techColors[t] || 'bg-white/5 text-zinc-500 border-white/10'}`}>
              {t}
            </span>
          ))}
        </div>
        <div className="flex gap-3">
          {g.liveUrl && (
            <a href={g.liveUrl} target="_blank" rel="noopener noreferrer" className="group/btn inline-flex items-center gap-1.5 text-xs font-medium text-emerald-400 hover:text-emerald-300 transition-colors">
              Play
              <svg className="w-3 h-3 group-hover/btn:translate-x-0.5 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
            </a>
          )}
          {g.githubUrl && (
            <a href={g.githubUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 text-xs font-medium text-zinc-500 hover:text-zinc-300 transition-colors">
              <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" /></svg>
              Source
            </a>
          )}
        </div>
      </div>
    </motion.div>
  );
}
