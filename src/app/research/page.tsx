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

export default function ResearchPage() {
  return (
    <div className="py-20">
      <div className="max-w-4xl mx-auto px-4">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-12">
          <span className="text-xs font-semibold tracking-widest text-blue-600 uppercase">Research</span>
          <h1 className="text-4xl font-bold mt-2">Research Papers</h1>
          <p className="text-zinc-600 mt-3 max-w-xl mx-auto">
            Currently working on 7 research papers across ML, NLP, cybersecurity, and EdTech.
            Papers will be uploaded once published.
          </p>
        </motion.div>

        <div className="space-y-4">
          {papers.map((p, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.05 }}
              className="p-5 rounded-xl border border-zinc-200 bg-white hover:border-blue-200 transition-all"
            >
              <div className="flex items-start justify-between gap-4">
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-xs font-mono text-zinc-400">#{i + 1}</span>
                    <span className="text-[10px] font-medium px-2 py-0.5 bg-yellow-100 text-yellow-700 rounded-full">{p.status}</span>
                  </div>
                  <h3 className="font-semibold mb-1">{p.title}</h3>
                  <p className="text-xs text-zinc-500 mb-1">{p.authors}</p>
                  <p className="text-sm text-zinc-600">{p.description}</p>
                </div>
                <span className="text-xs text-zinc-400 whitespace-nowrap shrink-0">{p.field}</span>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="text-center text-sm text-zinc-400 mt-10"
        >
          Due to privacy, PDF files will be shared once papers are published.
        </motion.p>
      </div>
    </div>
  );
}
