'use client';

import { motion } from 'framer-motion';

const papers = [
  {
    title: '5G Network Traffic Forecasting with Machine Learning',
    field: 'Telecommunications / ML',
    status: 'In Progress',
    authors: 'Mohsin Mahmud Eli et al.',
    description: 'Developing predictive models for 5G network traffic using HDE (Hybrid Deep Ensemble) approaches.',
  },
  {
    title: 'NLP-Based Disease Pattern Discovery',
    field: 'Natural Language Processing',
    status: 'In Progress',
    authors: 'Mohsin Mahmud Eli et al.',
    description: 'Using NLP techniques to discover disease patterns from unstructured medical text data.',
  },
  {
    title: 'Video Game Sales Market Analysis',
    field: 'Data Science',
    status: 'In Progress',
    authors: 'Mohsin Mahmud Eli et al.',
    description: 'Analyzing global video game sales data to identify market trends and prediction models.',
  },
  {
    title: 'Network Security with Machine Learning',
    field: 'Cybersecurity / ML',
    status: 'In Progress',
    authors: 'Mohsin Mahmud Eli et al.',
    description: 'Applying machine learning algorithms for intrusion detection and network security analysis.',
  },
  {
    title: 'Optimizing Educational Platforms with Gamification',
    field: 'EdTech',
    status: 'In Progress',
    authors: 'Mohsin Mahmud Eli et al.',
    description: 'Study on how gamification elements improve student engagement in digital learning platforms (based on StudyHub).',
  },
  {
    title: 'Mobile App Performance Optimization',
    field: 'Mobile Computing',
    status: 'In Progress',
    authors: 'Mohsin Mahmud Eli et al.',
    description: 'Research on performance optimization techniques for React Native and native Android applications.',
  },
  {
    title: 'AI-Driven Adaptive Learning Systems',
    field: 'AI / Education',
    status: 'In Progress',
    authors: 'Mohsin Mahmud Eli et al.',
    description: 'Exploring adaptive learning algorithms that personalize educational content based on student performance.',
  },
];

const fieldColors: Record<string, string> = {
  'Telecommunications / ML': 'border-blue-500/20 bg-blue-500/5 hover:border-blue-400/30',
  'Natural Language Processing': 'border-emerald-500/20 bg-emerald-500/5 hover:border-emerald-400/30',
  'Data Science': 'border-purple-500/20 bg-purple-500/5 hover:border-purple-400/30',
  'Cybersecurity / ML': 'border-red-500/20 bg-red-500/5 hover:border-red-400/30',
  EdTech: 'border-amber-500/20 bg-amber-500/5 hover:border-amber-400/30',
  'Mobile Computing': 'border-sky-500/20 bg-sky-500/5 hover:border-sky-400/30',
  'AI / Education': 'border-violet-500/20 bg-violet-500/5 hover:border-violet-400/30',
};

export default function ResearchPage() {
  return (
    <>
      <div className="fixed inset-0 bg-gradient-to-br from-blue-950/30 via-black to-emerald-950/30 pointer-events-none" />
      <div className="fixed inset-0 bg-[radial-gradient(ellipse_at_top_left,rgba(59,130,246,0.06),transparent_50%),radial-gradient(ellipse_at_bottom_right,rgba(16,185,129,0.06),transparent_50%)] pointer-events-none" />
      <div className="relative py-20">
        <div className="max-w-4xl mx-auto px-4">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="mb-12">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs text-zinc-400 mb-4">
              <span className="w-1.5 h-1.5 rounded-full bg-blue-400 animate-pulse" />
              Research
            </div>
            <h1 className="text-4xl font-bold text-white mb-3">Research Papers</h1>
            <p className="text-zinc-500 max-w-xl">
              Currently working on {papers.length} research papers across ML, NLP, cybersecurity, and EdTech.
              Papers will be uploaded once published.
            </p>
          </motion.div>

          <div className="space-y-3">
            {papers.map((p, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.04 }}
                className={`relative rounded-xl border ${fieldColors[p.field] || 'border-white/10 bg-white/[0.03]'} transition-all overflow-hidden group`}
              >
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-r from-transparent via-white/[0.02] to-transparent" />
                <div className="relative p-5">
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2 mb-2">
                        <span className="text-xs text-zinc-600 font-mono">#{String(i + 1).padStart(2, '0')}</span>
                        <span className="text-[10px] font-medium px-2 py-0.5 rounded-full bg-amber-500/15 text-amber-300 border border-amber-500/25">
                          {p.status}
                        </span>
                      </div>
                      <h3 className="text-sm font-semibold text-white mb-1">{p.title}</h3>
                      <p className="text-xs text-zinc-500 mb-1">{p.authors}</p>
                      <p className="text-sm text-zinc-400 leading-relaxed">{p.description}</p>
                    </div>
                    <span className="text-[10px] text-zinc-500 whitespace-nowrap shrink-0 mt-1">{p.field}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="text-center text-sm text-zinc-600 mt-10"
          >
            Due to privacy, PDF files will be shared once papers are published.
          </motion.p>
        </div>
      </div>
    </>
  );
}
