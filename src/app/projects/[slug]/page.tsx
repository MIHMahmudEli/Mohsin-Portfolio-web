'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { useParams } from 'next/navigation';

const projectData: Record<string, { title: string; slug: string; description: string; longDescription: string; techStack: string[]; liveUrl?: string; githubUrl?: string; images: string[] }> = {
  'studyhub': {
    title: 'StudyHub',
    slug: 'studyhub',
    description: 'Academic note-sharing platform with moderation & gamification',
    longDescription: 'StudyHub is a comprehensive web-based platform where students can share, browse, and manage academic notes and slides. With roles for Students, Moderators, and Admins, it promotes collaborative learning, ensures content quality through moderation, and adds gamification to make studying more engaging. The platform also has a React Native mobile app for on-the-go access.',
    techStack: ['PHP', 'MySQL', 'JavaScript', 'React Native', 'Kotlin'],
    liveUrl: 'https://studyhubbd.vercel.app',
    githubUrl: 'https://github.com/MIHMahmudEli/StudyHub',
    images: [],
  },
  'routinepro': {
    title: 'RoutinePro',
    slug: 'routinepro',
    description: 'Smart university class routine generator',
    longDescription: 'A high-performance web app for generating conflict-free university class routines with smart modes, gap optimization, and dynamic XLSX/JSON data sync — featuring a modern Glassmorphism UI. Supports multiple generation modes and real-time schedule adjustments.',
    techStack: ['JavaScript', 'CSS', 'HTML'],
    liveUrl: 'https://routine-pro-fawn.vercel.app',
    githubUrl: 'https://github.com/MIHMahmudEli/RoutinePro',
    images: [],
  },
  'truenetmeter': {
    title: 'TrueNetMeter',
    slug: 'truenetmeter',
    description: 'Premium internet speed test app',
    longDescription: 'TrueNetMeter is a premium, high-accuracy PHP speed test app with a vibrant circular speedometer. It uses professional multi-stream algorithms to deliver genuine internet performance metrics in a stunning, modern UI.',
    techStack: ['PHP', 'JavaScript', 'CSS'],
    liveUrl: 'https://truenetmeter.infinityfreeapp.com',
    githubUrl: 'https://github.com/MIHMahmudEli/TrueNetMeter',
    images: [],
  },
  'automata-playground': {
    title: 'Automata Playground',
    slug: 'automata-playground',
    description: 'Interactive automata theory visualization',
    longDescription: 'An interactive web-based tool for visualizing and experimenting with automata theory concepts including finite automata, pushdown automata, and Turing machines. Built with TypeScript and React.',
    techStack: ['TypeScript', 'React'],
    liveUrl: 'https://automata-playground-beige.vercel.app',
    githubUrl: 'https://github.com/MIHMahmudEli/automata-playground',
    images: [],
  },
  'counting-game': {
    title: 'Counting Game',
    slug: 'counting-game',
    description: 'Fun number game against a smart computer',
    longDescription: 'Counting Game is a simple and fun number game where you and the computer take turns counting from 0 to 21. Each player can add 1 to 3 numbers per turn, and whoever says 21 loses. The computer plays smart using game theory — can you beat its strategy?',
    techStack: ['JavaScript', 'CSS', 'HTML'],
    liveUrl: 'https://mihmahmudeli.github.io/Counting-Game/',
    githubUrl: 'https://github.com/MIHMahmudEli/Counting-Game',
    images: [],
  },
};

export default function ProjectDetail() {
  const { slug } = useParams();
  const project = projectData[slug as string];

  if (!project) {
    return (
      <div className="py-32 text-center">
        <h1 className="text-2xl font-bold mb-3">Project not found</h1>
        <Link href="/projects" className="text-blue-600 hover:underline">Back to projects</Link>
      </div>
    );
  }

  return (
    <div className="py-20">
      <div className="max-w-4xl mx-auto px-4">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
          <Link href="/projects" className="text-sm text-zinc-500 hover:text-black transition-colors">&larr; Back to projects</Link>

          <h1 className="text-4xl font-bold mt-6 mb-4">{project.title}</h1>

          <div className="flex flex-wrap gap-2 mb-6">
            {project.techStack.map((t) => (
              <span key={t} className="text-xs px-3 py-1 bg-zinc-100 rounded-full text-zinc-600">{t}</span>
            ))}
          </div>

          <p className="text-lg text-zinc-700 leading-relaxed mb-8">{project.longDescription}</p>

          <div className="flex flex-wrap gap-3 mb-12">
            {project.liveUrl && (
              <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="px-5 py-2.5 bg-black text-white rounded-full text-sm font-medium hover:bg-zinc-800 transition-colors">
                Live Demo &rarr;
              </a>
            )}
            {project.githubUrl && (
              <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="px-5 py-2.5 border border-zinc-300 rounded-full text-sm font-medium hover:bg-zinc-100 transition-colors">
                View Source
              </a>
            )}
          </div>

          {project.images.length > 0 && (
            <div className="grid md:grid-cols-2 gap-4">
              {project.images.map((img, i) => (
                <img key={i} src={img} alt={`${project.title} screenshot ${i + 1}`} className="rounded-xl border border-zinc-200 w-full" />
              ))}
            </div>
          )}
        </motion.div>
      </div>
    </div>
  );
}
