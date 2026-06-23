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
    desc: 'A puzzle game built around number grids.',
    tech: ['CSS', 'JavaScript'],
    liveUrl: 'https://number-grid-game.netlify.app/',
    githubUrl: 'https://github.com/MIHMahmudEli/Number-Grid-Game',
    featured: false,
  },
];

export default function GamesPage() {
  return (
    <div className="py-20">
      <div className="max-w-5xl mx-auto px-4">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-12">
          <span className="text-xs font-semibold tracking-widest text-blue-600 uppercase">Play</span>
          <h1 className="text-4xl font-bold mt-2">Games I&apos;ve Built</h1>
          <p className="text-zinc-600 mt-3 max-w-xl mx-auto">
            From AI-powered opponents to mobile game engines — each game taught me something new.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {games.map((g, i) => (
            <motion.div
              key={g.slug}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="p-6 rounded-2xl border border-zinc-200 bg-white hover:border-blue-200 hover:shadow-md transition-all"
            >
              {g.featured && <span className="text-[10px] font-semibold tracking-widest text-green-600 uppercase mb-2 block">Featured</span>}
              <h3 className="text-lg font-semibold mb-2">{g.title}</h3>
              <p className="text-sm text-zinc-600 mb-4 leading-relaxed">{g.desc}</p>
              <div className="flex flex-wrap gap-1.5 mb-4">
                {g.tech.map((t) => (
                  <span key={t} className="text-[10px] px-2 py-0.5 bg-zinc-100 text-zinc-600 rounded-full">{t}</span>
                ))}
              </div>
              <div className="flex gap-3">
                {g.liveUrl && (
                  <a href={g.liveUrl} target="_blank" rel="noopener noreferrer" className="text-xs font-medium text-blue-600 hover:underline">
                    Play &rarr;
                  </a>
                )}
                {g.githubUrl && (
                  <a href={g.githubUrl} target="_blank" rel="noopener noreferrer" className="text-xs font-medium text-zinc-500 hover:underline">
                    Source
                  </a>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
