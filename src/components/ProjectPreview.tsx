'use client';

import { useRef, useState } from 'react';

const gradients: Record<string, string> = {
  PHP: 'from-indigo-600 to-purple-700',
  JavaScript: 'from-yellow-500 to-orange-600',
  TypeScript: 'from-blue-600 to-cyan-500',
  Python: 'from-green-500 to-teal-600',
  Kotlin: 'from-purple-500 to-pink-500',
  Java: 'from-red-500 to-orange-500',
  'C#': 'from-violet-600 to-indigo-700',
  'C++': 'from-blue-700 to-indigo-800',
  MySQL: 'from-blue-500 to-cyan-600',
  OpenGL: 'from-emerald-500 to-teal-700',
};

const patterns: Record<string, string> = {
  PHP: "bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[length:20px_20px]",
  JavaScript: "bg-[linear-gradient(45deg,rgba(255,255,255,0.03)_25%,transparent_25%,transparent_75%,rgba(255,255,255,0.03)_75%)] bg-[length:40px_40px]",
  TypeScript: "bg-[radial-gradient(ellipse_at_top,rgba(255,255,255,0.08),transparent_70%)]",
  Python: "bg-[repeating-linear-gradient(0deg,transparent,transparent_20px,rgba(255,255,255,0.02)_20px,rgba(255,255,255,0.02)_21px)]",
};

export default function ProjectPreview({ title, tech, liveUrl }: { title: string; tech: string[]; liveUrl?: string }) {
  const iframeRef = useRef<HTMLIFrameElement>(null);
  const [iframeFailed, setIframeFailed] = useState(false);

  const primary = tech[0] || 'JavaScript';
  const grad = gradients[primary] || 'from-zinc-600 to-zinc-800';
  const pattern = patterns[primary] || '';

  if (liveUrl && !iframeFailed) {
    return (
      <div className="relative w-full rounded-xl overflow-hidden bg-zinc-900/80 border border-white/10">
        <div className="flex items-center gap-2 px-4 py-2.5 bg-zinc-900/90 border-b border-white/5">
          <div className="flex gap-1.5">
            <div className="w-3 h-3 rounded-full bg-red-500/80" />
            <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
            <div className="w-3 h-3 rounded-full bg-green-500/80" />
          </div>
          <div className="flex-1 mx-3 px-3 py-1 rounded-md bg-zinc-800 text-xs text-zinc-400 truncate select-none">
            {liveUrl}
          </div>
          <button onClick={() => window.open(liveUrl, '_blank')} className="text-zinc-500 hover:text-white transition-colors cursor-pointer">
            <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" /></svg>
          </button>
        </div>
        <div className="relative w-full" style={{ height: 400 }}>
          <iframe
            ref={iframeRef}
            src={liveUrl}
            className="w-full h-full bg-white"
            style={{ minHeight: 400 }}
            onError={() => setIframeFailed(true)}
            sandbox="allow-scripts allow-same-origin allow-forms allow-popups"
          />
          {iframeFailed && (
            <div className={`absolute inset-0 flex items-center justify-center bg-gradient-to-br ${grad} ${pattern}`}>
              <div className="text-center">
                <div className="w-12 h-12 mx-auto mb-3 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center text-white/60 text-lg font-bold">
                  {title[0]}
                </div>
                <h3 className="text-white font-semibold text-lg">{title}</h3>
                <p className="text-zinc-400 text-sm mt-1">Could not load preview</p>
                <button onClick={() => window.open(liveUrl, '_blank')} className="inline-block mt-3 px-4 py-1.5 rounded-full bg-white/10 text-white text-sm hover:bg-white/20 transition-all border border-white/10 cursor-pointer">
                  Open Live
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    );
  }

  return (
    <div className={`relative w-full aspect-video rounded-xl overflow-hidden bg-gradient-to-br ${grad} ${pattern}`}>
      <div className="absolute inset-0 bg-black/20" />
      <div className="absolute inset-0 flex items-center justify-center p-6">
        <div className="text-center">
          <div className="w-12 h-12 mx-auto mb-3 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center text-white/60 text-lg font-bold">
            {title[0]}
          </div>
          <h3 className="text-white font-semibold text-lg drop-shadow-lg">{title}</h3>
          <div className="flex flex-wrap justify-center gap-1.5 mt-2">
            {tech.slice(0, 3).map((t) => (
              <span key={t} className="text-[9px] px-2 py-0.5 rounded-full bg-white/10 text-white/70 border border-white/10">
                {t}
              </span>
            ))}
          </div>
        </div>
      </div>
      <div className="absolute inset-0 ring-1 ring-white/10 rounded-xl" />
    </div>
  );
}
