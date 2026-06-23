'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { useState } from 'react';

const allProjects = [
  { title: 'StudyHub', slug: 'studyhub', desc: 'Academic note-sharing platform with moderation, gamification, and role-based access.', tech: ['PHP', 'MySQL', 'JavaScript'], featured: true },
  { title: 'RoutinePro', slug: 'routinepro', desc: 'Smart university class routine generator with conflict-free scheduling, gap optimization, and XLSX/JSON sync.', tech: ['JavaScript', 'CSS'], featured: true },
  { title: 'TrueNetMeter', slug: 'truenetmeter', desc: 'Premium internet speed test with circular speedometer and multi-stream algorithms.', tech: ['PHP', 'JavaScript'], featured: true },
  { title: 'Automata Playground', slug: 'automata-playground', desc: 'Interactive visualization tool for automata theory concepts.', tech: ['TypeScript', 'React'], featured: true },
  { title: 'StudyHub Mobile', slug: 'studyhub-mobile', desc: 'React Native mobile app for the StudyHub platform.', tech: ['Kotlin'], featured: false },
  { title: 'Koshai Finder', slug: 'koshai-finder', desc: 'Android app built with Kotlin for finding local services.', tech: ['Kotlin'], featured: false },
  { title: 'Career-Sync', slug: 'career-sync', desc: 'Career management platform built with TypeScript.', tech: ['TypeScript'], featured: false },
  { title: 'PasswordVault', slug: 'passwordvault', desc: 'Secure password management tool built with Python.', tech: ['Python'], featured: false },
  { title: 'Counting Game', slug: 'counting-game', desc: 'Fun number game where you compete against a smart computer opponent.', tech: ['JavaScript'], featured: false },
  { title: 'Quick Dodge', slug: 'quick-dodge', desc: 'Fast-paced dodge game built with JavaScript.', tech: ['JavaScript'], featured: false },
  { title: 'NexGen.OS', slug: 'nexgen-os', desc: 'Web-based OS simulation with a unique desktop experience.', tech: ['JavaScript'], featured: false },
  { title: 'EliteJersey', slug: 'elitejersey', desc: 'Java Swing desktop app for admin login, product & account management.', tech: ['Java'], featured: false },
  { title: 'AgroBridge', slug: 'agrobridge', desc: 'Digital platform for agricultural empowerment.', tech: ['C#'], featured: false },
  { title: 'GlutProject', slug: 'glutproject', desc: '2D animated smart city with OpenGL and C++. Features weather, vehicles, day-night cycle.', tech: ['C++', 'OpenGL'], featured: false },
];

const categories = ['All', 'JavaScript', 'TypeScript', 'Python', 'Kotlin', 'PHP', 'C++', 'Java', 'C#'];

export default function ProjectsPage() {
  const [active, setActive] = useState('All');

  const filtered = active === 'All' ? allProjects : allProjects.filter(p => p.tech.some(t => t === active));

  return (
    <div className="py-20">
      <div className="max-w-6xl mx-auto px-4">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-12">
          <span className="text-xs font-semibold tracking-widest text-blue-600 uppercase">Portfolio</span>
          <h1 className="text-4xl font-bold mt-2">All Projects</h1>
          <p className="text-zinc-600 mt-3 max-w-xl mx-auto">
            Every project I&apos;ve built — web apps, mobile apps, games, and tools.
          </p>
        </motion.div>

        <div className="flex items-center justify-center gap-2 mb-12 flex-wrap">
          {categories.map((c) => (
            <button
              key={c}
              onClick={() => setActive(c)}
              className={`px-4 py-1.5 rounded-full text-sm font-medium transition-colors ${
                active === c ? 'bg-black text-white' : 'bg-zinc-100 text-zinc-600 hover:bg-zinc-200'
              }`}
            >
              {c}
            </button>
          ))}
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {filtered.map((p, i) => (
            <motion.div
              key={p.slug}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.05 }}
            >
              <Link
                href={`/projects/${p.slug}`}
                className="block p-5 rounded-xl border border-zinc-200 bg-white hover:border-blue-200 hover:shadow-md transition-all h-full"
              >
                {p.featured && <span className="text-[10px] font-semibold tracking-widest text-blue-600 uppercase mb-2 block">Featured</span>}
                <h3 className="font-semibold mb-1.5">{p.title}</h3>
                <p className="text-sm text-zinc-600 mb-3 line-clamp-2">{p.desc}</p>
                <div className="flex flex-wrap gap-1.5">
                  {p.tech.map((t) => (
                    <span key={t} className="text-[10px] px-2 py-0.5 bg-zinc-100 text-zinc-600 rounded-full">{t}</span>
                  ))}
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
