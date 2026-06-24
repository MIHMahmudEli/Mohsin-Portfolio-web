'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

const photos = [
  { src: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb', w: 3, h: 4, alt: 'Nature landscape' },
  { src: 'https://images.unsplash.com/photo-1501785888041-af3ef285b470', w: 4, h: 3, alt: 'Mountain view' },
  { src: 'https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05', w: 3, h: 4, alt: 'Forest path' },
  { src: 'https://images.unsplash.com/photo-1441974231531-c6227db76b6e', w: 4, h: 3, alt: 'Sunlight through trees' },
  { src: 'https://images.unsplash.com/photo-1504198453319-5ce911bafcde', w: 4, h: 3, alt: 'Cityscape at dusk' },
  { src: 'https://images.unsplash.com/photo-1469474968028-56623f02e42e', w: 3, h: 4, alt: 'Mountain range' },
  { src: 'https://images.unsplash.com/photo-1682687220742-aba13b6e50ba', w: 4, h: 3, alt: 'Ocean horizon' },
  { src: 'https://images.unsplash.com/photo-1518173946687-a36f968f7d9b', w: 3, h: 4, alt: 'Street photography' },
  { src: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4', w: 4, h: 3, alt: 'Starry night' },
  { src: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d', w: 3, h: 4, alt: 'Urban architecture' },
  { src: 'https://images.unsplash.com/photo-1472214103451-9374bd1c798e', w: 4, h: 3, alt: 'Autumn colors' },
  { src: 'https://images.unsplash.com/photo-1469474968028-56623f02e42e', w: 3, h: 4, alt: 'River view' },
];

const instagram = {
  handle: '@mihmahmudeli2002',
  url: 'https://www.instagram.com/mihmahmudeli2002/',
};

export default function PhotographyPage() {
  return (
    <>
      <div className="fixed inset-0 bg-gradient-to-br from-amber-950/30 via-black to-orange-950/30 pointer-events-none" />
      <div className="fixed inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(251,146,60,0.06),transparent_50%),radial-gradient(ellipse_at_bottom_left,rgba(251,191,36,0.06),transparent_50%)] pointer-events-none" />
      <div className="relative">
        <section className="relative min-h-[80vh] flex items-center overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-amber-500/5 via-transparent to-black/60" />
          <div className="absolute top-20 right-48 w-72 h-72 bg-amber-500/10 rounded-full blur-[120px] animate-pulse" />
          <div className="absolute bottom-20 left-20 w-96 h-96 bg-orange-500/8 rounded-full blur-[140px]" />

          <div className="relative z-10 max-w-5xl mx-auto px-4 w-full py-20">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <motion.div initial={{ opacity: 0, x: -40 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.7 }}>
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 }}
                  className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs text-zinc-400 mb-6"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-amber-400 animate-pulse" />
                  Photography
                </motion.div>

                <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
                  Capturing moments
                  <span className="block bg-gradient-to-r from-amber-400 via-orange-400 to-rose-400 bg-clip-text text-transparent">
                    through the lens
                  </span>
                </h1>

                <p className="text-zinc-400 text-base max-w-xl leading-relaxed mb-8">
                  A visual journey through landscapes, architecture, and everyday stories.
                  Follow my adventures on Instagram.
                </p>

                <div className="flex items-center gap-4 flex-wrap">
                  <motion.a
                    href={instagram.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.97 }}
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-amber-500 to-orange-600 hover:from-amber-400 hover:to-orange-500 text-white text-sm font-semibold transition-all shadow-lg shadow-amber-500/25"
                  >
                    <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" /></svg>
                    Follow on Instagram
                  </motion.a>
                  <span className="text-sm text-zinc-500">{instagram.handle}</span>
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
                    { icon: '📷', label: 'Photos', value: 'Latest shots' },
                    { icon: '📍', label: 'Locations', value: 'Worldwide' },
                    { icon: '🎨', label: 'Style', value: 'Documentary' },
                    { icon: '📱', label: 'Instagram', value: 'Active' },
                  ].map((stat, i) => (
                    <motion.div
                      key={stat.label}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.3 + i * 0.08 }}
                      className="relative rounded-2xl border border-white/10 bg-white/[0.03] p-5 group hover:border-amber-500/20 transition-all overflow-hidden"
                    >
                      <div className="absolute inset-0 bg-gradient-to-br from-amber-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                      <span className="relative text-2xl mb-2 block">{stat.icon}</span>
                      <p className="relative text-xl font-bold text-white">{stat.value}</p>
                      <p className="relative text-xs text-zinc-500 mt-1">{stat.label}</p>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        <section className="pb-24">
          <div className="max-w-6xl mx-auto px-4">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="flex items-center gap-3 mb-10"
            >
              <div className="h-px flex-1 bg-gradient-to-r from-transparent via-amber-500/30 to-transparent" />
              <span className="text-xs font-semibold tracking-[0.2em] text-amber-400 uppercase shrink-0">Gallery</span>
              <div className="h-px flex-1 bg-gradient-to-r from-transparent via-amber-500/30 to-transparent" />
            </motion.div>

            <div className="columns-2 md:columns-3 gap-3 space-y-3">
              {photos.map((photo, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.03 }}
                  className="relative group rounded-xl overflow-hidden border border-white/10 break-inside-avoid"
                >
                  <Image
                    src={photo.src}
                    alt={photo.alt}
                    width={400}
                    height={photo.h / photo.w * 400}
                    className="w-full h-auto object-cover transition-all duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <a
                      href={instagram.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-4 py-2 rounded-lg bg-white/90 text-black text-xs font-medium hover:bg-white transition-all"
                    >
                      View on Instagram
                    </a>
                  </div>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mt-12 text-center"
            >
              <motion.a
                href={instagram.url}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl bg-gradient-to-r from-amber-500 to-orange-600 hover:from-amber-400 hover:to-orange-500 text-white text-sm font-semibold transition-all shadow-lg shadow-amber-500/25"
              >
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" /></svg>
                    See More on Instagram
                  </motion.a>
              <p className="text-xs text-zinc-600 mt-4">@{instagram.handle.replace('@', '')}</p>
            </motion.div>
          </div>
        </section>
      </div>
    </>
  );
}
