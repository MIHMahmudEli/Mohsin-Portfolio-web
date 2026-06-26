'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';

const channel = {
  name: 'StudyHub',
  handle: '@studyhub991',
  url: 'https://t.me/studyhub991',
  subscribers: 3058,
  files: 76,
  description: '🚀 Level up your studies with StudyHub! 🤖 StudyHub Bot: @StudyhubBDBot 🌐 Explore our resources: https://studyhubb.great-site.net 📺 Watch tutorials: https://www.youtube.com/@studyhub991 🗓️ Routine generator: https://routine-pro-fawn.vercel.app/',
  topics: ['Academic Resources', 'Tech & Innovation', 'Programming', 'Study Tips', 'AI & ML', 'Cybersecurity'],
};

const fileTypes = [
  { label: 'PDF Notes', icon: '📄', count: 28, color: 'from-red-500/20 to-orange-500/20' },
  { label: 'Code Snippets', icon: '💻', count: 18, color: 'from-sky-500/20 to-blue-500/20' },
  { label: 'Study Guides', icon: '📖', count: 15, color: 'from-emerald-500/20 to-teal-500/20' },
  { label: 'Tutorials', icon: '🎥', count: 10, color: 'from-purple-500/20 to-pink-500/20' },
  { label: 'Cheat Sheets', icon: '📝', count: 3, color: 'from-yellow-500/20 to-amber-500/20' },
  { label: 'Tools', icon: '🔧', count: 2, color: 'from-zinc-500/20 to-zinc-400/20' },
];

const recentPosts = [
  { type: 'Resource', title: 'OS Mid Term Syllabus — Complete Guide', file: 'PDF', size: '2.4 MB', time: '2 days ago' },
  { type: 'Code', title: 'EIGRP Configuration Script — Cisco Packet Tracer', file: 'TXT', size: '1.1 KB', time: '5 days ago' },
  { type: 'Guide', title: 'Transportation Model — EM Final Term Notes', file: 'PDF', size: '3.7 MB', time: '1 week ago' },
  { type: 'Tutorial', title: 'Microprocessor ALU Design — Step by Step', file: 'PDF', size: '4.2 MB', time: '2 weeks ago' },
];

function StaggerChildren({ children, className }: { children: React.ReactNode; className?: string }) {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-50px' }}
      variants={{ visible: { transition: { staggerChildren: 0.05 } } }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

function FadeUp({ children, className }: { children: React.ReactNode; className?: string }) {
  return (
    <motion.div
      variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

function SectionDivider({ label }: { label: string }) {
  return (
    <div className="flex items-center gap-3 mb-8">
      <div className="h-px flex-1 bg-gradient-to-r from-transparent via-sky-500/30 to-transparent" />
      <span className="text-xs font-semibold tracking-[0.2em] text-sky-400 uppercase shrink-0">{label}</span>
      <div className="h-px flex-1 bg-gradient-to-r from-transparent via-sky-500/30 to-transparent" />
    </div>
  );
}

export default function TelegramPage() {
  return (
    <>
      <div className="fixed inset-0 bg-gradient-to-br from-sky-950/30 via-black to-blue-950/30 pointer-events-none" />
      <div className="fixed inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(56,189,248,0.06),transparent_50%),radial-gradient(ellipse_at_bottom_left,rgba(59,130,246,0.06),transparent_50%)] pointer-events-none" />
      <div className="relative">
        <section className="relative min-h-[85vh] flex items-center overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-sky-500/5 via-transparent to-black/60" />
          <div className="absolute top-20 right-48 w-72 h-72 bg-sky-500/10 rounded-full blur-[120px] animate-pulse" />
          <div className="absolute bottom-20 left-20 w-96 h-96 bg-blue-500/8 rounded-full blur-[140px]" />
          <div className="absolute top-1/3 left-1/2 w-56 h-56 bg-cyan-500/8 rounded-full blur-[100px]" />

          <div className="relative z-10 max-w-6xl mx-auto px-4 w-full py-20">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <motion.div initial={{ opacity: 0, x: -40 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.7 }}>
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 }}
                  className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-overlay/5 border border-line text-xs text-subtle mb-6"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-sky-400 animate-pulse" />
                  Telegram Channel
                </motion.div>

                <div className="flex items-center gap-4 mb-4">
                  <motion.div
                    initial={{ scale: 0, rotate: -180 }}
                    animate={{ scale: 1, rotate: 0 }}
                    transition={{ type: 'spring', stiffness: 200, delay: 0.25 }}
                    className="relative w-16 h-16 shrink-0 overflow-hidden rounded-2xl ring-2 ring-sky-500/30 shadow-xl shadow-sky-500/10 bg-surface flex items-center justify-center"
                  >
                    <Image src="/logos/telegram logo.png" alt="Telegram" width={64} height={64} className="object-cover" />
                  </motion.div>
                  <div>
                    <h1 className="text-4xl md:text-6xl font-bold text-content">{channel.name}</h1>
                    <p className="text-muted text-sm mt-1">{channel.handle}</p>
                  </div>
                </div>

                <p className="text-subtle text-base max-w-xl leading-relaxed mb-8">
                  {channel.description}
                </p>

                <div className="flex items-center gap-4 flex-wrap">
                  <motion.a
                    href={channel.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.97 }}
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-sky-500 to-blue-600 hover:from-sky-400 hover:to-blue-500 text-content text-sm font-semibold transition-all shadow-lg shadow-sky-500/25"
                  >
                    <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor"><path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z" /></svg>
                    Join Channel
                  </motion.a>
                  <a
                    href="https://t.me/StudyhubBDBot"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-xl border border-line text-content text-sm font-medium hover:bg-overlay/5 transition-all"
                  >
                    <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor"><path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z" /></svg>
                    Try Bot
                  </a>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 40 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.7, delay: 0.2 }}
                className="relative"
              >
                <div className="grid grid-cols-2 gap-3">
                  {[
                    { value: channel.subscribers.toLocaleString(), label: 'Subscribers', icon: '👥' },
                    { value: channel.files, label: 'Shared Files', icon: '📁' },
                    { value: channel.topics.length, label: 'Topics', icon: '🎯' },
                    { value: `${channel.subscribers % 100}+`, label: 'Active Daily', icon: '⚡' },
                  ].map((stat, i) => (
                    <motion.div
                      key={stat.label}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.3 + i * 0.08 }}
                      className="relative rounded-2xl border border-line bg-white/[0.03] p-5 group hover:border-sky-500/20 transition-all overflow-hidden"
                    >
                      <div className="absolute inset-0 bg-gradient-to-br from-sky-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                      <span className="relative text-2xl mb-2 block">{stat.icon}</span>
                      <p className="relative text-3xl font-bold text-content">{stat.value}</p>
                      <p className="relative text-xs text-muted mt-1">{stat.label}</p>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        <div className="max-w-5xl mx-auto px-4 pb-24">
          <SectionDivider label="File Categories" />

          <StaggerChildren className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3 mb-16">
            {fileTypes.map((f) => (
              <FadeUp key={f.label}>
                <div className="relative rounded-2xl border border-line bg-white/[0.03] p-5 text-center group hover:border-sky-500/20 transition-all overflow-hidden cursor-default">
                  <div className={`absolute inset-0 bg-gradient-to-br ${f.color} opacity-0 group-hover:opacity-100 transition-opacity`} />
                  <span className="relative text-3xl mb-2 block">{f.icon}</span>
                  <p className="relative text-2xl font-bold text-content">{f.count}</p>
                  <p className="relative text-[10px] text-muted mt-1 uppercase tracking-wider">{f.label}</p>
                </div>
              </FadeUp>
            ))}
          </StaggerChildren>

          <SectionDivider label="Recent Posts" />

          <div className="rounded-2xl border border-line bg-white/[0.03] overflow-hidden mb-16">
            <div className="divide-y divide-white/[0.04]">
              {recentPosts.map((post, i) => (
                <motion.div
                  key={post.title}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08 }}
                  className="flex items-center gap-4 p-4 hover:bg-white/[0.03] transition-colors group"
                >
                  <div className={`w-10 h-10 rounded-xl flex items-center justify-center text-xs font-bold shrink-0 ${
                    post.file === 'PDF' ? 'bg-red-500/15 text-red-300' : 'bg-sky-500/15 text-sky-300'
                  }`}>
                    {post.file}
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm text-content truncate group-hover:text-content transition-colors">{post.title}</p>
                    <div className="flex items-center gap-2 mt-1">
                      <span className="text-[10px] px-1.5 py-0.5 rounded bg-overlay/5 text-muted">{post.type}</span>
                      <span className="text-[10px] text-muted">{post.size}</span>
                    </div>
                  </div>
                  <span className="text-[10px] text-muted shrink-0">{post.time}</span>
                </motion.div>
              ))}
            </div>
          </div>

          <SectionDivider label="Connect" />

          <div className="grid lg:grid-cols-2 gap-4 mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="rounded-2xl border border-line bg-white/[0.03] p-6 relative group hover:border-sky-500/30 transition-all flex flex-col"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-sky-500/[0.02] to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-2xl" />
              <div className="relative flex items-center gap-4 mb-4">
                <div className="w-12 h-12 rounded-xl bg-surface flex items-center justify-center shrink-0 overflow-hidden ring-1 ring-white/10">
                  <Image src="/logos/telegram logo.png" alt="" width={48} height={48} className="object-cover" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-content">{channel.handle}</p>
                  <p className="text-xs text-muted">{channel.subscribers.toLocaleString()} subscribers · {channel.files} files</p>
                </div>
              </div>
              <p className="relative text-sm text-muted leading-relaxed flex-1 mb-4">
                Academic resources, tech insights, programming tutorials, and study materials shared regularly. Join thousands of students leveling up their skills.
              </p>
              <a
                href={channel.url}
                target="_blank"
                rel="noopener noreferrer"
                className="relative inline-flex items-center gap-2 w-full justify-center px-4 py-2.5 rounded-xl bg-gradient-to-r from-sky-500 to-blue-600 hover:from-sky-400 hover:to-blue-500 text-content text-sm font-medium transition-all shadow-lg shadow-sky-500/20"
              >
                Open in Telegram
                <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="rounded-2xl border border-line bg-white/[0.03] p-6 relative group hover:border-red-500/30 transition-all flex flex-col"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-red-500/[0.02] to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-2xl" />
              <div className="relative flex items-center gap-4 mb-4">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-red-500 to-rose-600 flex items-center justify-center shrink-0">
                  <svg className="w-5 h-5 text-content" viewBox="0 0 24 24" fill="currentColor"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" /></svg>
                </div>
                <div>
                  <p className="text-sm font-semibold text-content">YouTube Channel</p>
                  <p className="text-xs text-muted">@studyhub991</p>
                </div>
              </div>
              <p className="relative text-sm text-muted leading-relaxed flex-1 mb-4">
                Video tutorials on OS, Computer Networks, Microprocessor, COA & more CSE topics. Subscribe for free academic content.
              </p>
              <a
                href="https://www.youtube.com/@studyhub991"
                target="_blank"
                rel="noopener noreferrer"
                className="relative inline-flex items-center gap-2 w-full justify-center px-4 py-2.5 rounded-xl bg-gradient-to-r from-red-500 to-rose-600 hover:from-red-400 hover:to-rose-500 text-content text-sm font-medium transition-all shadow-lg shadow-red-500/20"
              >
                Visit YouTube
                <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
              </a>
            </motion.div>
          </div>

          <SectionDivider label="Bot" />

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="rounded-2xl border border-line bg-gradient-to-br from-sky-500/5 to-blue-500/5 p-6 sm:p-8 flex flex-col sm:flex-row items-start sm:items-center gap-5 hover:border-sky-500/30 transition-all group"
          >
            <motion.div
              whileHover={{ rotate: [0, -10, 10, -5, 0] }}
              transition={{ duration: 0.5 }}
              className="w-16 h-16 shrink-0 overflow-hidden rounded-2xl ring-2 ring-sky-500/30 bg-surface flex items-center justify-center"
            >
              <Image src="/logos/StudyHubBot.png" alt="StudyHub Bot" width={64} height={64} className="object-cover" />
            </motion.div>
            <div className="flex-1">
              <div className="flex items-center gap-2 mb-1">
                <h3 className="text-lg font-semibold text-content">StudyHub Bot</h3>
                <span className="text-[9px] px-2 py-0.5 rounded-full bg-emerald-500/15 text-emerald-300 border border-emerald-500/25">Active</span>
              </div>
              <p className="text-xs text-muted mb-1">@StudyhubBDBot</p>
              <p className="text-sm text-subtle leading-relaxed">
                Your AI-powered study assistant on Telegram. Get academic resources, routine schedules, 
                and instant access to StudyHub&apos;s learning materials directly in your chat.
              </p>
            </div>
            <motion.a
              href="https://t.me/StudyhubBDBot"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-gradient-to-r from-sky-500 to-blue-600 hover:from-sky-400 hover:to-blue-500 text-content text-sm font-medium transition-all shadow-lg shadow-sky-500/20 shrink-0"
            >
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor"><path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z" /></svg>
              Start Bot
            </motion.a>
          </motion.div>
        </div>
      </div>
    </>
  );
}
