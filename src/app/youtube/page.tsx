'use client';

import { useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

const channel = {
  name: 'StudyHub',
  handle: '@studyhub991',
  url: 'https://www.youtube.com/@studyhub991',
  subscribers: 540,
  videos: 44,
  views: 14979,
  telegram: {
    handle: 'studyhub991',
    subscribers: 3056,
    files: 76,
    url: 'https://t.me/studyhub991',
  },
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
const categoryColors: Record<string, string> = {
  CN: 'from-blue-500/20 to-cyan-500/20 border-blue-500/30',
  OS: 'from-yellow-500/20 to-amber-500/20 border-yellow-500/30',
  EM: 'from-emerald-500/20 to-green-500/20 border-emerald-500/30',
  COA: 'from-purple-500/20 to-violet-500/20 border-purple-500/30',
  MP: 'from-rose-500/20 to-pink-500/20 border-rose-500/30',
};

const badgeColors: Record<string, string> = {
  CN: 'bg-blue-500/10 text-blue-300 border-blue-500/20',
  OS: 'bg-yellow-500/10 text-yellow-300 border-yellow-500/20',
  EM: 'bg-emerald-500/10 text-emerald-300 border-emerald-500/20',
  COA: 'bg-purple-500/10 text-purple-300 border-purple-500/20',
  MP: 'bg-rose-500/10 text-rose-300 border-rose-500/20',
};

export default function YouTubePage() {
  const [activeVideo, setActiveVideo] = useState<string | null>(null);
  const [activeCategory, setActiveCategory] = useState('All');

  const filtered = activeCategory === 'All' ? videos : videos.filter((v) => v.category === activeCategory);

  return (
    <>
      <div className="fixed inset-0 bg-gradient-to-br from-red-950/30 via-black to-rose-950/30 pointer-events-none" />
      <div className="fixed inset-0 bg-[radial-gradient(ellipse_at_top_left,rgba(239,68,68,0.06),transparent_50%),radial-gradient(ellipse_at_bottom_right,rgba(244,63,94,0.06),transparent_50%)] pointer-events-none" />
      <div className="relative">
        <section className="relative min-h-[70vh] flex items-center overflow-hidden">
          <div className="absolute inset-0">
            <Image src="/logos/yt cover.png" alt="" fill className="object-cover opacity-20" priority />
            <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/80 to-black" />
          </div>
          <div className="relative z-10 max-w-5xl mx-auto px-4 w-full py-20">
            <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }}>
              <div className="flex items-center gap-4 mb-6">
                <div className="relative w-16 h-16 shrink-0 overflow-hidden rounded-2xl ring-2 ring-red-500/30 shadow-xl shadow-red-500/10 bg-black flex items-center justify-center">
                  <Image src="/logos/project logo.png" alt="" width={64} height={64} className="object-cover" />
                </div>
                <div>
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs text-zinc-400">
                    <span className="w-1.5 h-1.5 rounded-full bg-red-400 animate-pulse" />
                    YouTube Channel
                  </div>
                  <h1 className="text-4xl md:text-6xl font-bold text-white mt-2">{channel.name}</h1>
                </div>
              </div>
              <p className="text-zinc-400 text-lg max-w-xl mb-8">{channel.handle} &mdash; Academic tutorials & study resources for CSE students</p>
              <div className="flex items-center gap-3 flex-wrap">
                <a
                  href={channel.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-red-600 hover:bg-red-500 text-white text-sm font-semibold transition-all hover:shadow-xl hover:shadow-red-500/25 hover:-translate-y-0.5"
                >
                  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" /></svg>
                  Subscribe
                </a>
                <div className="flex items-center gap-4 text-sm text-zinc-500">
                  <span>{channel.subscribers} subscribers</span>
                  <span className="w-1 h-1 rounded-full bg-zinc-600" />
                  <span>{channel.videos} videos</span>
                  <span className="w-1 h-1 rounded-full bg-zinc-600" />
                  <span>{channel.views.toLocaleString()} views</span>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {activeVideo && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4"
            onClick={() => setActiveVideo(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              className="relative w-full max-w-4xl aspect-video rounded-2xl overflow-hidden shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setActiveVideo(null)}
                className="absolute -top-10 right-0 text-zinc-400 hover:text-white transition-colors text-sm z-10"
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

        <div className="max-w-5xl mx-auto px-4 pb-20">
          <div className="flex items-center gap-3 mb-8">
            <div className="h-px flex-1 bg-gradient-to-r from-transparent via-red-500/30 to-transparent" />
            <span className="text-xs font-semibold tracking-widest text-red-400 uppercase shrink-0">Latest Videos</span>
            <div className="h-px flex-1 bg-gradient-to-r from-transparent via-red-500/30 to-transparent" />
          </div>

          <div className="flex gap-1.5 mb-6 flex-wrap">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all ${
                  activeCategory === cat
                    ? 'bg-red-500/20 text-red-300 border border-red-500/30 shadow-lg shadow-red-500/5'
                    : 'bg-white/[0.03] text-zinc-500 border border-white/5 hover:text-zinc-300 hover:border-white/10'
                }`}
              >
                {cat === 'All' ? 'All Videos' : cat}
              </button>
            ))}
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-3">
            {filtered.map((video, i) => (
              <motion.button
                key={video.id}
                layout
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ delay: i * 0.04 }}
                onClick={() => setActiveVideo(video.id)}
                className="group relative text-left rounded-xl overflow-hidden border border-white/10 bg-white/[0.03] hover:border-white/20 transition-all"
              >
                <div className="relative aspect-video bg-zinc-900 overflow-hidden">
                  <Image
                    src={`https://i.ytimg.com/vi/${video.id}/hqdefault.jpg`}
                    alt={video.title}
                    fill
                    className="object-cover transition-all duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black/30 group-hover:bg-black/10 transition-colors" />
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                    <div className="w-12 h-12 rounded-full bg-red-600/90 flex items-center justify-center shadow-xl shadow-red-500/30">
                      <svg className="w-5 h-5 text-white ml-0.5" fill="currentColor" viewBox="0 0 24 24"><path d="M8 5v14l11-7z" /></svg>
                    </div>
                  </div>
                  <div className="absolute bottom-1.5 right-1.5 px-1.5 py-0.5 rounded bg-black/80 text-[10px] text-zinc-300 font-medium">
                    {video.duration}
                  </div>
                </div>
                <div className="p-3">
                  <div className="flex items-center gap-1.5 mb-1.5">
                    <span className={`text-[8px] px-1.5 py-0.5 rounded-full border font-medium ${badgeColors[video.category] || 'bg-white/5 text-zinc-500 border-white/10'}`}>
                      {video.category}
                    </span>
                  </div>
                  <p className="text-xs text-zinc-300 leading-relaxed line-clamp-2 group-hover:text-white transition-colors">
                    {video.title}
                  </p>
                </div>
              </motion.button>
            ))}
          </div>

          <div className="grid md:grid-cols-2 gap-4 mt-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="rounded-2xl border border-white/10 bg-white/[0.03] p-5 flex flex-col group hover:border-sky-500/30 transition-all"
            >
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 rounded-xl bg-black flex items-center justify-center shrink-0 overflow-hidden ring-1 ring-white/10">
                  <Image src="/logos/telegram logo.png" alt="" width={40} height={40} className="object-cover" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-white">Telegram — {channel.telegram.handle}</p>
                  <p className="text-xs text-zinc-500">{channel.telegram.subscribers.toLocaleString()} subs &middot; {channel.telegram.files} files</p>
                </div>
              </div>
              <p className="text-xs text-zinc-500 leading-relaxed flex-1">
                Academic resources, tech insights, study materials & CSE notes shared daily.
              </p>
              <a
                href={channel.telegram.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 w-full justify-center px-4 py-2.5 rounded-xl bg-sky-600 hover:bg-sky-500 text-white text-sm font-medium transition-all hover:shadow-xl hover:shadow-sky-500/20 hover:-translate-y-0.5 mt-3"
              >
                Join Telegram Channel
                <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="rounded-2xl border border-white/10 bg-white/[0.03] p-5 flex flex-col"
            >
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-red-500 to-rose-600 flex items-center justify-center shrink-0">
                  <svg className="w-5 h-5 text-white" viewBox="0 0 24 24" fill="currentColor"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" /></svg>
                </div>
                <div>
                  <p className="text-sm font-semibold text-white">{channel.handle}</p>
                  <p className="text-xs text-zinc-500">{channel.subscribers} subscribers</p>
                </div>
              </div>
              <p className="text-xs text-zinc-500 leading-relaxed flex-1">
                Academic tutorials covering OS, Computer Networks, Microprocessor, COA, Engineering Management & more.
              </p>
              <a
                href={channel.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 w-full justify-center px-4 py-2.5 rounded-xl bg-red-600 hover:bg-red-500 text-white text-sm font-medium transition-all hover:shadow-xl hover:shadow-red-500/20 hover:-translate-y-0.5 mt-3"
              >
                Visit Full Channel
                <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" /></svg>
              </a>
            </motion.div>
          </div>
        </div>
      </div>
    </>
  );
}
