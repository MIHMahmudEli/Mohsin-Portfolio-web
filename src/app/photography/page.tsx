'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';

const photos = [
  'photo-1.jpg', 'photo-2.jpg', 'photo-3.jpg', 'photo-4.jpg', 'photo-5.jpg',
  'photo-6.jpg', 'photo-7.jpg', 'photo-8.webp', 'photo-9.webp', 'photo-10.jpg',
  'photo-11.jpg', 'photo-12.webp', 'photo-13.webp', 'photo-14.webp', 'photo-15.jpg',
  'photo-16.jpg', 'photo-17.jpg', 'photo-18.jpg', 'photo-19.webp', 'photo-20.jpg',
  'photo-21.jpg',
].map((f, i) => ({ src: `/photography/${f}`, alt: `Photography ${i + 1}`, id: i }));

const instagram = {
  handle: '@mihmahmudeli2002',
  url: 'https://www.instagram.com/mihmahmudeli2002/',
};

const ease = [0.25, 0.46, 0.45, 0.94] as const;

export default function PhotographyPage() {
  const [lightbox, setLightbox] = useState<typeof photos[0] | null>(null);
  const idx = lightbox ? photos.findIndex(p => p.id === lightbox.id) : -1;

  const open = (p: typeof photos[0]) => setLightbox(p);
  const close = () => setLightbox(null);
  const prev = () => idx > 0 && setLightbox(photos[idx - 1]);
  const next = () => idx < photos.length - 1 && setLightbox(photos[idx + 1]);

  return (
    <>
      <div className="relative min-h-screen">
        <div className="absolute inset-0 bg-gradient-to-b from-amber-950/15 via-black to-black pointer-events-none" />

        <section className="relative pt-32 pb-16 md:pt-40 md:pb-20">
          <div className="max-w-6xl mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease }}
              className="max-w-2xl"
            >
              <span className="text-[10px] tracking-[0.25em] text-amber-500/70 uppercase mb-4 block">Portfolio</span>
              <h1 className="text-5xl md:text-7xl font-bold text-content mb-4 leading-tight tracking-tight">
                Photography
              </h1>
              <p className="text-subtle text-base leading-relaxed max-w-lg">
                A visual journal captured through the lens — landscapes, streets, architecture, and everyday moments.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2, ease }}
              className="flex items-center gap-4 mt-8"
            >
              <a
                href={instagram.url} target="_blank" rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-gradient-to-r from-amber-500 to-orange-500 text-content text-xs font-semibold hover:from-amber-400 hover:to-orange-400 transition-all"
              >
                <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" /></svg>
                {instagram.handle}
              </a>
              <span className="text-[10px] text-muted">{photos.length} photos</span>
            </motion.div>
          </div>
        </section>

        <section className="pb-24">
          <div className="max-w-6xl mx-auto px-6">
            <div className="columns-2 md:columns-3 gap-4 space-y-4">
              {photos.map((photo, i) => (
                <motion.button
                  key={photo.id}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-40px' }}
                  transition={{ duration: 0.5, delay: i * 0.04, ease }}
                  onClick={() => open(photo)}
                  className="group relative overflow-hidden rounded-xl break-inside-avoid w-full text-left bg-card/50 border border-line/50"
                >
                  <img
                    src={photo.src}
                    alt={photo.alt}
                    loading="lazy"
                    className="w-full h-auto object-cover transition-all duration-700 group-hover:scale-[1.03]"
                  />
                  <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <div className="w-9 h-9 rounded-full bg-overlay/10 backdrop-blur-sm border border-white/20 flex items-center justify-center">
                      <svg className="w-3.5 h-3.5 text-content" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" /></svg>
                    </div>
                  </div>
                </motion.button>
              ))}
            </div>
          </div>
        </section>
      </div>

      <AnimatePresence>
        {lightbox && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4"
            onClick={close}
          >
            <motion.div
              key={lightbox.id}
              initial={{ opacity: 0, scale: 0.97 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.97 }}
              transition={{ duration: 0.3, ease }}
              className="relative w-full max-w-5xl flex items-center justify-center"
              style={{ maxHeight: '90vh' }}
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={close}
                className="absolute -top-10 right-0 text-xs text-muted hover:text-content transition-colors z-10"
              >
                Close
              </button>

              <img
                src={lightbox.src}
                alt={lightbox.alt}
                className="max-w-full max-h-[85vh] object-contain rounded-lg"
              />

              {idx > 0 && (
                <button
                  onClick={prev}
                  className="absolute left-2 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-black/60 border border-line flex items-center justify-center text-subtle hover:text-content hover:bg-black/80 transition-all"
                >
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" /></svg>
                </button>
              )}
              {idx < photos.length - 1 && (
                <button
                  onClick={next}
                  className="absolute right-2 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-black/60 border border-line flex items-center justify-center text-subtle hover:text-content hover:bg-black/80 transition-all"
                >
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
                </button>
              )}

              <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 text-[10px] text-muted">
                {idx + 1} / {photos.length}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
