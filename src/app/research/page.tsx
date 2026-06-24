'use client';

import { motion } from 'framer-motion';

const papers = [
  {
    title: 'PIRD: Paraphrase-Invariant Robust Detection of AI-Generated Text via Multi-Signal Fusion and Invariance Learning',
    field: 'NLP / AI Detection',
    status: 'Manuscript in Progress',
    authors: 'Mohsin Mahmud Eli et al.',
    description: 'A lightweight detector that breaks the coupling between paraphrase fragility and non-native-writer bias by removing surface-perplexity reliance. Holds ~0.98 AUROC under obfuscation attacks that drop SoTA detectors to near random.',
    tags: ['PIRD', 'Robustness', 'Fairness'],
  },
  {
    title: 'ImageVerify AI: Multi-Frequency Fusion Transformer (MFFT) for AI-Generated Image and Deepfake Detection',
    field: 'Computer Vision / AI',
    status: 'In Progress',
    authors: 'Mohsin Mahmud Eli et al.',
    description: 'A novel MFFT architecture that decomposes images into low/mid/high frequency bands via DCT and uses cross-attention fusion for detecting AI-generated and deepfake images. Achieves 97.2% accuracy with 55% fewer parameters than Swin-T SOTA.',
    tags: ['MFFT', 'Deepfake Detection', 'Computer Vision'],
  },
  {
    title: 'Cross-Domain Knowledge Transfer Between LLM and Human-AI Interaction Research: A Dual-Granularity Clustering Framework for Semantic Overlap Analysis',
    field: 'AI / NLP',
    status: 'Completed',
    authors: 'Mohsin Mahmud Eli et al.',
    description: 'A dual-granularity clustering framework that analyzes semantic overlap between LLM-generated and human-written text in AI interaction research using UMAP, HDBSCAN, and TF-IDF embeddings.',
    tags: ['LLM', 'Clustering', 'Semantic Analysis'],
  },
  {
    title: 'Machine Learning-Based Network Traffic Prediction for 5G Reliability Enhancement',
    field: 'Telecommunications / ML',
    status: 'Completed',
    authors: 'Mohsin Mahmud Eli et al.',
    description: 'Hybrid deep ensemble model (LSTM-GPR-MH-STGCN) for network traffic prediction in high-density 5G environments, achieving superior accuracy over single-model baselines.',
    tags: ['5G', 'Deep Learning', 'Time Series'],
  },
  {
    title: 'An Empirical Study of Food Price Volatility in Bangladesh: A Data-Driven Analysis with AgroBridge Marketplace Framework',
    field: 'Data Science / Economics',
    status: 'In Progress',
    authors: 'Mohsin Mahmud Eli et al.',
    description: 'Analyzing monthly retail price trends (2020-2025) of key commodities in Bangladesh and proposing the AgroBridge digital marketplace to connect farmers directly with consumers.',
    tags: ['Data Science', 'Economics', 'AgriTech'],
  },
  {
    title: 'Uncovering Micro-Topics in Biomedical Literature: A Comparative Study of TF-IDF and BioBERT Embeddings for Disease Knowledge Mapping',
    field: 'NLP / Biomedical',
    status: 'Completed',
    authors: 'Mohsin Mahmud Eli et al.',
    description: 'Comparative analysis of TF-IDF and BioBERT embeddings with KMeans, HDBSCAN, and hierarchical clustering for uncovering latent micro-topics in PubMed biomedical literature.',
    tags: ['BioBERT', 'Topic Modeling', 'Biomedical'],
  },
];

const statusColors: Record<string, string> = {
  'Completed': 'bg-emerald-500/15 text-emerald-300 border-emerald-500/25',
  'In Progress': 'bg-amber-500/15 text-amber-300 border-amber-500/25',
  'Manuscript in Progress': 'bg-blue-500/15 text-blue-300 border-blue-500/25',
};

const fieldAccents: Record<string, string> = {
  'NLP / AI Detection': 'from-sky-500/10 to-blue-500/10 border-sky-500/20',
  'AI / NLP': 'from-purple-500/10 to-violet-500/10 border-purple-500/20',
  'Telecommunications / ML': 'from-emerald-500/10 to-teal-500/10 border-emerald-500/20',
  'Data Science / Economics': 'from-orange-500/10 to-amber-500/10 border-orange-500/20',
  'NLP / Biomedical': 'from-rose-500/10 to-pink-500/10 border-rose-500/20',
};

export default function ResearchPage() {
  return (
    <>
      <div className="fixed inset-0 bg-gradient-to-br from-blue-950/30 via-black to-emerald-950/30 pointer-events-none" />
      <div className="fixed inset-0 bg-[radial-gradient(ellipse_at_top_left,rgba(59,130,246,0.06),transparent_50%),radial-gradient(ellipse_at_bottom_right,rgba(16,185,129,0.06),transparent_50%)] pointer-events-none" />
      <div className="relative py-20">
        <div className="max-w-5xl mx-auto px-4">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="mb-12">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs text-zinc-400 mb-4">
              <span className="w-1.5 h-1.5 rounded-full bg-blue-400 animate-pulse" />
              Research
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-3">Research Papers</h1>
            <p className="text-zinc-500 max-w-2xl leading-relaxed">
              Active research across ML, NLP, telecommunications, and data science. 
              {papers.filter((p) => p.status === 'Completed').length} papers completed, 
              {papers.filter((p) => p.status !== 'Completed').length} in progress.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-4">
            {papers.map((p, i) => (
              <motion.div
                key={p.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.06 }}
                className={`relative rounded-2xl border p-5 group transition-all flex flex-col ${fieldAccents[p.field] || 'border-white/10 bg-white/[0.03]'}`}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-white/[0.02] to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-2xl" />

                <div className="relative flex-1">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="text-xs text-zinc-600 font-mono">#{String(i + 1).padStart(2, '0')}</span>
                    <span className={`text-[10px] font-medium px-2 py-0.5 rounded-full border ${statusColors[p.status] || 'bg-zinc-500/15 text-zinc-300 border-zinc-500/25'}`}>
                      {p.status}
                    </span>
                    <span className="text-[10px] text-zinc-600 ml-auto">{p.field}</span>
                  </div>

                  <h3 className="text-sm font-semibold text-white mb-2 leading-relaxed">{p.title}</h3>
                  <p className="text-xs text-zinc-500 mb-2">{p.authors}</p>
                  <p className="text-xs text-zinc-400 leading-relaxed mb-3">{p.description}</p>

                  <div className="flex flex-wrap gap-1.5">
                    {p.tags.map((t) => (
                      <span key={t} className="text-[9px] px-2 py-0.5 rounded-full bg-white/5 text-zinc-600">{t}</span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="mt-12 rounded-2xl border border-white/10 bg-white/[0.03] p-5 text-center"
          >
            <p className="text-xs text-zinc-600 leading-relaxed">
              PDF files will be shared once papers are published or approved for public release.
              For collaboration inquiries, reach out via{' '}
              <a href="mailto:mohsinibnahossain@gmail.com" className="text-blue-400 hover:text-blue-300 transition-colors">email</a>.
            </p>
          </motion.div>
        </div>
      </div>
    </>
  );
}
