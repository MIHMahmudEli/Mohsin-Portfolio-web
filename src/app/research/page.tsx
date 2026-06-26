'use client';

import { motion } from 'framer-motion';

interface Paper {
  title: string;
  field: string;
  status: string;
  authors: string;
  description: string;
  tags: string[];
}

const papers: Paper[] = [
  {
    title: 'PIRD: Paraphrase-Invariant Robust Detection of AI-Generated Text via Multi-Signal Fusion and Invariance Learning',
    field: 'NLP / AI Detection', status: 'Manuscript in Progress',
    authors: 'Mohsin Mahmud Eli et al.',
    description: 'A lightweight detector that breaks the coupling between paraphrase fragility and non-native-writer bias by removing surface-perplexity reliance. Holds ~0.98 AUROC under obfuscation attacks that drop SoTA detectors to near random.',
    tags: ['PIRD', 'Robustness', 'Fairness'],
  },
  {
    title: 'ImageVerify AI: Multi-Frequency Fusion Transformer (MFFT) for AI-Generated Image and Deepfake Detection',
    field: 'Computer Vision / AI', status: 'In Progress',
    authors: 'Mohsin Mahmud Eli et al.',
    description: 'A novel MFFT architecture that decomposes images into low/mid/high frequency bands via DCT and uses cross-attention fusion for detecting AI-generated and deepfake images. Achieves 97.2% accuracy with 55% fewer parameters than Swin-T SOTA.',
    tags: ['MFFT', 'Deepfake Detection', 'Computer Vision'],
  },
  {
    title: 'Cross-Domain Knowledge Transfer Between LLM and Human-AI Interaction Research: A Dual-Granularity Clustering Framework for Semantic Overlap Analysis',
    field: 'AI / NLP', status: 'Completed',
    authors: 'Mohsin Mahmud Eli et al.',
    description: 'A dual-granularity clustering framework that analyzes semantic overlap between LLM-generated and human-written text in AI interaction research using UMAP, HDBSCAN, and TF-IDF embeddings.',
    tags: ['LLM', 'Clustering', 'Semantic Analysis'],
  },
  {
    title: 'Machine Learning-Based Network Traffic Prediction for 5G Reliability Enhancement',
    field: 'Telecommunications / ML', status: 'Completed',
    authors: 'Mohsin Mahmud Eli et al.',
    description: 'Hybrid deep ensemble model (LSTM-GPR-MH-STGCN) for network traffic prediction in high-density 5G environments, achieving superior accuracy over single-model baselines.',
    tags: ['5G', 'Deep Learning', 'Time Series'],
  },
  {
    title: 'An Empirical Study of Food Price Volatility in Bangladesh: A Data-Driven Analysis with AgroBridge Marketplace Framework',
    field: 'Data Science / Economics', status: 'In Progress',
    authors: 'Mohsin Mahmud Eli et al.',
    description: 'Analyzing monthly retail price trends (2020-2025) of key commodities in Bangladesh and proposing the AgroBridge digital marketplace to connect farmers directly with consumers.',
    tags: ['Data Science', 'Economics', 'AgriTech'],
  },
  {
    title: 'Uncovering Micro-Topics in Biomedical Literature: A Comparative Study of TF-IDF and BioBERT Embeddings for Disease Knowledge Mapping',
    field: 'NLP / Biomedical', status: 'Completed',
    authors: 'Mohsin Mahmud Eli et al.',
    description: 'Comparative analysis of TF-IDF and BioBERT embeddings with KMeans, HDBSCAN, and hierarchical clustering for uncovering latent micro-topics in PubMed biomedical literature.',
    tags: ['BioBERT', 'Topic Modeling', 'Biomedical'],
  },
];

const fieldMeta: Record<string, { gradient: string; dot: string; label: string; bar: string }> = {
  'NLP / AI Detection': { gradient: 'from-sky-500/20 to-blue-500/10', dot: 'bg-sky-400', label: 'text-sky-300', bar: 'from-sky-500 to-blue-500' },
  'Computer Vision / AI': { gradient: 'from-violet-500/20 to-purple-500/10', dot: 'bg-violet-400', label: 'text-violet-300', bar: 'from-violet-500 to-purple-500' },
  'AI / NLP': { gradient: 'from-purple-500/20 to-fuchsia-500/10', dot: 'bg-purple-400', label: 'text-purple-300', bar: 'from-purple-500 to-fuchsia-500' },
  'Telecommunications / ML': { gradient: 'from-emerald-500/20 to-teal-500/10', dot: 'bg-emerald-400', label: 'text-emerald-300', bar: 'from-emerald-500 to-teal-500' },
  'Data Science / Economics': { gradient: 'from-amber-500/20 to-orange-500/10', dot: 'bg-amber-400', label: 'text-amber-300', bar: 'from-amber-500 to-orange-500' },
  'NLP / Biomedical': { gradient: 'from-rose-500/20 to-pink-500/10', dot: 'bg-rose-400', label: 'text-rose-300', bar: 'from-rose-500 to-pink-500' },
};

const statusMeta: Record<string, { color: string; pulse: string }> = {
  'Completed': { color: 'text-emerald-300', pulse: 'bg-emerald-400' },
  'In Progress': { color: 'text-amber-300', pulse: 'bg-amber-400' },
  'Manuscript in Progress': { color: 'text-blue-300', pulse: 'bg-blue-400' },
};

export default function ResearchPage() {
  const completed = papers.filter(p => p.status === 'Completed').length;
  const inProgress = papers.filter(p => p.status !== 'Completed').length;

  return (
    <>
      <div className="fixed inset-0 bg-gradient-to-br from-blue-950/20 via-surface to-emerald-950/20 pointer-events-none" />

      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-20 left-[5%] w-72 h-72 rounded-full bg-blue-500/[var(--orb-alpha)] blur-[120px] floating-shape" style={{ animationDuration: '28s' }} />
        <div className="absolute bottom-20 right-[5%] w-80 h-80 rounded-full bg-emerald-500/[var(--orb-alpha)] blur-[120px] floating-shape" style={{ animationDuration: '32s', animationDelay: '-8s' }} />
      </div>

      <div className="relative py-16 md:py-24">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div className="mb-12 md:mb-16">
            <motion.span
              initial={{ opacity: 0, y: -10, scale: 0.9 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ type: 'spring', stiffness: 200, damping: 15 }}
              className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-[10px] text-blue-400/80 tracking-wide mb-4"
            >
              <span className="relative flex h-1.5 w-1.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-blue-500" />
              </span>
              Research
            </motion.span>

            <h1 className="text-4xl md:text-6xl font-bold text-content mb-3 leading-tight">
              <motion.span
                initial={{ opacity: 0, y: 30, rotateX: -40 }}
                animate={{ opacity: 1, y: 0, rotateX: 0 }}
                transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                className="inline-block mr-3"
                style={{ perspective: '600px' }}
              >
                Research
              </motion.span>
              <motion.span
                initial={{ opacity: 0, y: 30, rotateX: -40 }}
                animate={{ opacity: 1, y: 0, rotateX: 0 }}
                transition={{ duration: 0.6, delay: 0.12, ease: [0.16, 1, 0.3, 1] }}
                className="inline-block"
                style={{ perspective: '600px' }}
              >
                <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-emerald-400 bg-clip-text text-transparent bg-[length:200%_200%] animate-gradient">Papers</span>
              </motion.span>
            </h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.25 }}
              className="text-subtle text-base max-w-2xl mb-8"
            >
              Active research across ML, NLP, telecommunications, and data science.
            </motion.p>

            <div className="flex items-center gap-6">
              {[
                { label: 'Completed', value: completed, gradient: 'from-emerald-500 to-teal-500' },
                { label: 'In Progress', value: inProgress, gradient: 'from-amber-500 to-orange-500' },
                { label: 'Total', value: papers.length, gradient: 'from-blue-500 to-purple-500' },
              ].map((stat, i) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 15, scale: 0.95 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  transition={{ delay: 0.3 + i * 0.08, type: 'spring', stiffness: 200, damping: 18 }}
                  className="flex items-center gap-3"
                >
                  <span className={`text-2xl md:text-3xl font-bold bg-gradient-to-r ${stat.gradient} bg-clip-text text-transparent`}>{stat.value}</span>
                  <span className="text-[10px] text-muted tracking-wide leading-tight">{stat.label}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-5">
            {papers.map((p, i) => {
              const field = fieldMeta[p.field] || fieldMeta['NLP / AI Detection'];
              const status = statusMeta[p.status] || statusMeta['In Progress'];
              const rotate = i % 2 === 0 ? 2 : -2;
              return (
                <motion.div
                  key={p.title}
                  initial={{ opacity: 0, y: 40, scale: 0.95, rotate }}
                  animate={{ opacity: 1, y: 0, scale: 1, rotate: 0 }}
                  transition={{ type: 'spring', stiffness: 160, damping: 20, delay: i * 0.07 }}
                  whileHover={{ y: -5, scale: 1.005 }}
                  style={{ perspective: '800px' }}
                >
                  <div
                    className="group relative rounded-2xl border border-line overflow-hidden h-full bg-card/60 transition-shadow duration-300"
                    style={{ transformStyle: 'preserve-3d' }}
                    onMouseEnter={(e) => { e.currentTarget.style.boxShadow = '0 20px 60px -12px rgba(59,130,246,0.12)'; }}
                    onMouseLeave={(e) => { e.currentTarget.style.boxShadow = '0 0 0 0 transparent'; }}
                  >
                    <div className={`absolute inset-0 bg-gradient-to-br ${field.gradient} opacity-30 group-hover:opacity-50 transition-opacity duration-500`} />

                    <motion.div
                      className={`absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r ${field.bar}`}
                      initial={{ scaleX: 0, opacity: 0 }}
                      animate={{ scaleX: 1, opacity: 1 }}
                      transition={{ delay: i * 0.07 + 0.3, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                      style={{ transformOrigin: 'left' }}
                    />

                    <div className="relative p-5 flex flex-col h-full">
                      <div className="flex items-center gap-2 mb-3">
                        <motion.span
                          initial={{ opacity: 0, scale: 0.5 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ delay: 0.15 + i * 0.07, type: 'spring', stiffness: 200 }}
                          className="flex items-center gap-1.5"
                        >
                          <span className={`w-2 h-2 rounded-full ${field.dot}`} />
                          <span className={`text-[10px] font-medium ${field.label}`}>{p.field}</span>
                        </motion.span>
                        <span className="text-[9px] text-muted font-mono ml-auto">#{String(i + 1).padStart(2, '0')}</span>
                      </div>

                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 + i * 0.07 }}
                        className="flex items-center gap-2 mb-3"
                      >
                        <motion.span
                          className={`relative flex h-2 w-2`}
                          animate={{ scale: [1, 1.3, 1] }}
                          transition={{ repeat: Infinity, duration: 2.5, ease: 'easeInOut', delay: i * 0.2 }}
                        >
                          <span className={`animate-ping absolute inline-flex h-full w-full rounded-full ${status.pulse} opacity-75`} />
                          <span className={`relative inline-flex rounded-full h-2 w-2 ${status.pulse}`} />
                        </motion.span>
                        <span className={`text-[10px] font-medium ${status.color}`}>{p.status}</span>
                      </motion.div>

                      <h3 className="text-sm font-semibold text-content mb-2 leading-relaxed group-hover:text-blue-200 transition-colors duration-200">
                        {p.title}
                      </h3>

                      <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.25 + i * 0.07 }}
                        className="text-[10px] text-muted mb-3 font-mono"
                      >
                        {p.authors}
                      </motion.p>

                      <p className="text-xs text-subtle leading-relaxed mb-4 group-hover:text-content transition-colors duration-200 flex-1">
                        {p.description}
                      </p>

                      <motion.div
                        className="flex flex-wrap gap-1.5"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.3 + i * 0.07 }}
                      >
                        {p.tags.map((t, ti) => (
                          <motion.span
                            key={t}
                            initial={{ opacity: 0, y: 8, scale: 0.9 }}
                            animate={{ opacity: 1, y: 0, scale: 1 }}
                            transition={{ delay: 0.35 + i * 0.07 + ti * 0.06, type: 'spring', stiffness: 200, damping: 15 }}
                            className="text-[9px] px-2 py-0.5 rounded-full border font-medium transition-all duration-200"
                            style={{
                              backgroundColor: `${field.dot.replace('bg-', '').replace('-400', '')}18`,
                              color: '#a1a1aa',
                              borderColor: 'rgba(255,255,255,0.06)',
                            }}
                            whileHover={{ y: -2, scale: 1.08 }}
                          >
                            {t}
                          </motion.span>
                        ))}
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
            className="mt-12 p-6 rounded-2xl border border-line bg-card/50 relative overflow-hidden group"
          >
            <motion.div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 via-transparent to-emerald-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <div className="relative flex items-center gap-4 flex-wrap">
              <div className="flex items-center gap-3">
                <motion.div
                  className="w-10 h-10 rounded-xl bg-blue-500/10 flex items-center justify-center text-lg"
                  animate={{ y: [0, -3, 0] }}
                  transition={{ repeat: Infinity, duration: 3, ease: 'easeInOut' }}
                >
                  📄
                </motion.div>
                <div>
                  <div className="text-sm text-content font-medium">Collaboration welcome</div>
                  <div className="text-xs text-muted">PDF files will be shared once papers are published or approved for release.</div>
                </div>
              </div>
              <a
                href="mailto:mohsinibnahossain@gmail.com"
                className="ml-auto px-5 py-2.5 bg-overlay/5 border border-line text-content rounded-full text-xs font-medium hover:bg-card hover:border-blue-500/30 hover:text-blue-300 transition-all"
              >
                Reach out
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </>
  );
}
