'use client';

import { useState, useRef, useEffect, useCallback } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';

const channel = {
  name: 'StudyHub',
  handle: '@studyhub991',
  url: 'https://www.youtube.com/@studyhub991',
  subscribers: 540,
  videos: 44,
  views: 14979,
  telegram: { handle: 'studyhub991', subscribers: 3058, files: 76, url: 'https://t.me/studyhub991' },
};

const videos = [
  { id: 'vaVYbn1ZdPg', title: 'COA Final Term — Complete Syllabus One Shot', category: 'COA', duration: '48:32' },
  { id: 'HI_Fypa-YT4', title: 'Microprocessor Final Part 2 — ALU Design & Processor Unit', category: 'MP', duration: '42:15' },
  { id: '_5De2EXaGl0', title: 'OS Mid Term Lab Part 3 — Shell Command', category: 'OS', duration: '35:20' },
  { id: '2GN0a-pZjiU', title: 'CN Final Term Lab Part 6 — EIGRP with VLSM', category: 'CN', duration: '52:10' },
  { id: '44Hxe9F9B3Y', title: 'EM Final Term Part 1 — Transportation Model', category: 'EM', duration: '38:45' },
  { id: 'keMJxF1goCU', title: 'CN Final Term Part 3 — IPv6', category: 'CN', duration: '41:30' },
  { id: '8JxtfGfCWT0', title: 'CN Final Term Lab Part 7 — DHCP with EIGRP & RIPv2', category: 'CN', duration: '55:05' },
  { id: 'WGK4fRw4bDs', title: 'OS Mid Term Lab Part 1 — Shell Command', category: 'OS', duration: '32:18' },
];

const categories = ['All', 'CN', 'OS', 'EM', 'COA', 'MP'];
const badgeColors: Record<string, string> = {
  CN: 'bg-blue-500/10 text-blue-300 border-blue-500/20',
  OS: 'bg-yellow-500/10 text-yellow-300 border-yellow-500/20',
  EM: 'bg-emerald-500/10 text-emerald-300 border-emerald-500/20',
  COA: 'bg-purple-500/10 text-purple-300 border-purple-500/20',
  MP: 'bg-rose-500/10 text-rose-300 border-rose-500/20',
};
const catAccents: Record<string, string> = {
  CN: 'from-blue-500 to-cyan-500',
  OS: 'from-yellow-500 to-amber-500',
  EM: 'from-emerald-500 to-green-500',
  COA: 'from-purple-500 to-violet-500',
  MP: 'from-rose-500 to-pink-500',
};

export default function YouTubePage() {
  const [activeVideo, setActiveVideo] = useState<string | null>(null);
  const [activeCategory, setActiveCategory] = useState('All');
  const filtered = activeCategory === 'All' ? videos : videos.filter((v) => v.category === activeCategory);

  const catRefs = useRef<Record<string, HTMLButtonElement | null>>({});
  const [indicator, setIndicator] = useState({ left: 0, width: 0 });
  const updateIndicator = useCallback(() => {
    const btn = catRefs.current[activeCategory];
    if (!btn) return;
    const parent = btn.parentElement;
    if (!parent) return;
    const pr = parent.getBoundingClientRect();
    const br = btn.getBoundingClientRect();
    setIndicator({ left: br.left - pr.left, width: br.width });
  }, [activeCategory]);
  useEffect(() => { updateIndicator(); }, [updateIndicator]);
  useEffect(() => {
    window.addEventListener('resize', updateIndicator);
    return () => window.removeEventListener('resize', updateIndicator);
  }, [updateIndicator]);

  return (
    <>
      <div className="fixed inset-0 bg-gradient-to-br from-red-950/20 via-surface to-rose-950/20 pointer-events-none" />

      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        <div className="absolute -top-40 -left-40 w-96 h-96 rounded-full bg-red-500/10 blur-[120px] floating-shape" style={{ animationDuration: '28s' }} />
        <div className="absolute -bottom-40 -right-40 w-80 h-80 rounded-full bg-rose-500/10 blur-[120px] floating-shape" style={{ animationDuration: '32s', animationDelay: '-8s' }} />
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-64 h-64 rounded-full bg-orange-500/8 blur-[100px] floating-shape" style={{ animationDuration: '25s', animationDelay: '-4s' }} />
      </div>

      <div className="relative">
        <section className="relative min-h-[70vh] flex items-center overflow-hidden">
          <div className="absolute inset-0">
            <Image src="/logos/yt cover.png" alt="" fill className="object-cover opacity-15" priority />
            <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/85 to-black" />
          </div>
          <div className="relative z-10 max-w-5xl mx-auto px-6 w-full py-20">
            <motion.span
              initial={{ opacity: 0, y: -10, scale: 0.9 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ type: 'spring', stiffness: 200, damping: 15 }}
              className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-500/10 border border-red-500/20 text-[10px] text-red-400/80 tracking-wide mb-6"
            >
              <span className="relative flex h-1.5 w-1.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-red-500" />
              </span>
              YouTube Channel
            </motion.span>

            <div className="flex items-center gap-4 md:gap-6 mb-4">
              <motion.div
                initial={{ opacity: 0, scale: 0.5, rotate: -15 }}
                animate={{ opacity: 1, scale: 1, rotate: 0 }}
                transition={{ type: 'spring', stiffness: 180, damping: 14, delay: 0.1 }}
                className="relative w-16 h-16 md:w-20 md:h-20 shrink-0 overflow-hidden rounded-2xl ring-2 ring-red-500/30 shadow-xl shadow-red-500/10 bg-surface"
              >
                <Image src="/logos/project logo.png" alt="" width={80} height={80} className="object-cover" />
              </motion.div>
              <motion.h1
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                className="text-4xl md:text-6xl font-bold text-content"
              >
                {channel.name}
              </motion.h1>
            </div>

            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.5 }}
              className="text-subtle text-base md:text-lg max-w-xl mb-6"
            >
              {channel.handle} &mdash; Academic tutorials & study resources for CSE students
            </motion.p>

            <div className="flex items-center gap-4 mb-6">
              {[
                { value: channel.subscribers, label: 'Subscribers' },
                { value: channel.videos, label: 'Videos' },
                { value: channel.views.toLocaleString(), label: 'Views' },
              ].map((stat, i) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.35 + i * 0.06, type: 'spring', stiffness: 200, damping: 18 }}
                  className="flex items-center gap-2"
                >
                  <span className="text-lg md:text-xl font-bold text-content">{stat.value}</span>
                  <span className="text-[10px] text-muted">{stat.label}</span>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.5 }}
            >
              <a
                href={channel.url} target="_blank" rel="noopener noreferrer"
                className="group inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-red-600 hover:bg-red-500 text-content text-sm font-semibold transition-all hover:shadow-xl hover:shadow-red-500/25"
              >
                <motion.svg
                  className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor"
                  animate={{ scale: [1, 1.15, 1] }}
                  transition={{ repeat: Infinity, duration: 2.5, ease: 'easeInOut' }}
                >
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                </motion.svg>
                Subscribe
              </a>
            </motion.div>
          </div>
        </section>

        <AnimatePresence>
          {activeVideo && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4"
              onClick={() => setActiveVideo(null)}
            >
              <motion.div
                initial={{ scale: 0.9, opacity: 0, y: 20 }}
                animate={{ scale: 1, opacity: 1, y: 0 }}
                exit={{ scale: 0.9, opacity: 0, y: 20 }}
                transition={{ type: 'spring', stiffness: 200, damping: 25 }}
                className="relative w-full max-w-4xl aspect-video rounded-2xl overflow-hidden shadow-2xl shadow-red-500/10"
                onClick={(e) => e.stopPropagation()}
              >
                <button
                  onClick={() => setActiveVideo(null)}
                  className="absolute -top-10 right-0 text-subtle hover:text-content transition-colors text-sm z-10"
                >
                  Close [Esc]
                </button>
                <iframe
                  src={`https://www.youtube.com/embed/${activeVideo}?autoplay=1`}
                  className="w-full h-full"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

        <div className="max-w-5xl mx-auto px-6 pb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="flex items-center gap-3 mb-8">
              <div className="h-px flex-1 bg-gradient-to-r from-transparent via-red-500/30 to-transparent" />
              <span className="text-xs font-semibold tracking-widest text-red-400 uppercase shrink-0">Latest Videos</span>
              <div className="h-px flex-1 bg-gradient-to-r from-transparent via-red-500/30 to-transparent" />
            </div>
          </motion.div>

          <motion.div
            className="flex gap-1.5 mb-6 flex-wrap relative"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1, duration: 0.4 }}
          >
            <div className="absolute inset-0 pointer-events-none">
              <motion.div
                className="absolute top-0 h-full rounded-lg bg-gradient-to-b from-red-500/10 to-rose-500/10 border border-red-500/20"
                animate={{ left: indicator.left, width: indicator.width }}
                transition={{ type: 'spring', stiffness: 350, damping: 30 }}
              />
            </div>
            {categories.map((cat) => (
              <button
                key={cat}
                ref={(el) => { catRefs.current[cat] = el; }}
                onClick={() => setActiveCategory(cat)}
                className={`relative px-3 py-1.5 rounded-lg text-xs font-medium border transition-colors duration-150 ${
                  activeCategory === cat
                    ? 'text-red-300 border-red-500/30'
                    : 'text-muted border-transparent hover:text-content'
                }`}
              >
                {cat === 'All' ? 'All Videos' : cat}
              </button>
            ))}
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-3">
            <AnimatePresence mode="popLayout">
              {filtered.map((video, i) => {
                const rotate = i % 2 === 0 ? 2 : -2;
                return (
                  <motion.button
                    key={video.id}
                    layout
                    initial={{ opacity: 0, y: 30, scale: 0.95, rotate }}
                    animate={{ opacity: 1, y: 0, scale: 1, rotate: 0 }}
                    exit={{ opacity: 0, scale: 0.92, y: -10 }}
                    transition={{ type: 'spring', stiffness: 160, damping: 20, delay: i * 0.05 }}
                    onClick={() => setActiveVideo(video.id)}
                    className="group relative text-left rounded-xl overflow-hidden border border-line bg-card/60 hover:border-line transition-all"
                    whileHover={{ y: -4 }}
                  >
                    <div className="relative aspect-video bg-card overflow-hidden">
                      <Image
                        src={`https://i.ytimg.com/vi/${video.id}/hqdefault.jpg`}
                        alt={video.title}
                        fill
                        className="object-cover transition-all duration-500 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-black/30 group-hover:bg-black/10 transition-colors duration-300" />
                      <motion.div
                        className="absolute inset-0 flex items-center justify-center"
                        initial={{ opacity: 0 }}
                        whileHover={{ opacity: 1 }}
                      >
                        <motion.div
                          className="w-12 h-12 rounded-full bg-red-600/90 flex items-center justify-center shadow-xl shadow-red-500/30"
                          whileHover={{ scale: 1.1 }}
                          transition={{ type: 'spring', stiffness: 300, damping: 15 }}
                        >
                          <svg className="w-5 h-5 text-content ml-0.5" fill="currentColor" viewBox="0 0 24 24"><path d="M8 5v14l11-7z" /></svg>
                        </motion.div>
                      </motion.div>
                      <div className="absolute bottom-1.5 right-1.5 px-1.5 py-0.5 rounded bg-black/80 text-[10px] text-content font-medium">
                        {video.duration}
                      </div>
                    </div>
                    <div className="p-3">
                      <div className="flex items-center gap-1.5 mb-1.5">
                        <span className={`text-[8px] px-1.5 py-0.5 rounded-full border font-medium ${badgeColors[video.category] || 'bg-overlay/5 text-muted border-line'}`}>
                          {video.category}
                        </span>
                      </div>
                      <p className="text-xs text-content leading-relaxed line-clamp-2 group-hover:text-content transition-colors duration-200">
                        {video.title}
                      </p>
                    </div>
                  </motion.button>
                );
              })}
            </AnimatePresence>
          </div>

          <div className="grid md:grid-cols-2 gap-4 mt-10">
            {[
              {
                icon: <Image src="/logos/telegram logo.png" alt="" width={40} height={40} className="object-cover" />,
                title: `Telegram — ${channel.telegram.handle}`,
                subs: `${channel.telegram.subscribers.toLocaleString()} subs · ${channel.telegram.files} files`,
                desc: 'Academic resources, tech insights, study materials & CSE notes shared daily.',
                url: channel.telegram.url,
                btnText: 'Join Telegram Channel',
                accent: 'from-sky-500/5 to-blue-500/5',
                border: 'hover:border-sky-500/30',
                btnClass: 'bg-sky-600 hover:bg-sky-500 hover:shadow-sky-500/20',
              },
              {
                icon: (
                  <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-red-500 to-rose-600 flex items-center justify-center">
                    <svg className="w-5 h-5 text-content" viewBox="0 0 24 24" fill="currentColor"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" /></svg>
                  </div>
                ),
                title: channel.handle,
                subs: `${channel.subscribers} subscribers`,
                desc: 'Academic tutorials covering OS, Computer Networks, Microprocessor, COA, Engineering Management & more.',
                url: channel.url,
                btnText: 'Visit Full Channel',
                accent: 'from-red-500/5 to-rose-500/5',
                border: 'hover:border-red-500/30',
                btnClass: 'bg-red-600 hover:bg-red-500 hover:shadow-red-500/20',
              },
            ].map((card, i) => (
              <motion.div
                key={card.title}
                initial={{ opacity: 0, y: 30, scale: 0.97 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, type: 'spring', stiffness: 180, damping: 20 }}
                whileHover={{ y: -3 }}
                className={`rounded-2xl border border-line bg-gradient-to-br ${card.accent} p-5 flex flex-col group ${card.border} transition-all`}
              >
                <div className="flex items-center gap-3 mb-3">
                  <motion.div
                    className="w-10 h-10 rounded-xl bg-surface flex items-center justify-center shrink-0 overflow-hidden ring-1 ring-white/10"
                    whileHover={{ scale: 1.1, rotate: -5 }}
                    transition={{ type: 'spring', stiffness: 300, damping: 15 }}
                  >
                    {card.icon}
                  </motion.div>
                  <div>
                    <p className="text-sm font-semibold text-content">{card.title}</p>
                    <p className="text-xs text-muted">{card.subs}</p>
                  </div>
                </div>
                <p className="text-xs text-muted leading-relaxed flex-1">
                  {card.desc}
                </p>
                <a
                  href={card.url} target="_blank" rel="noopener noreferrer"
                  className={`inline-flex items-center gap-2 w-full justify-center px-4 py-2.5 rounded-xl text-content text-sm font-medium transition-all hover:shadow-xl hover:-translate-y-0.5 mt-3 ${card.btnClass}`}
                >
                  {card.btnText}
                  <svg className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
                </a>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
