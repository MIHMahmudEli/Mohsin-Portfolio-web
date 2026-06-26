'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { useParams } from 'next/navigation';
import ProjectPreview from '@/components/ProjectPreview';

interface ProjectDetail {
  title: string;
  slug: string;
  description: string;
  longDescription: string;
  techStack?: string[];
  category: string;
  emoji: string;
  story: string;
  challenge: string;
  solution: string;
  features: string[];
  liveUrl?: string;
  githubUrl?: string;
  images: string[];
}

const projectData: Record<string, ProjectDetail> = {
  'studyhub': {
    title: 'StudyHub v2', slug: 'studyhub', category: 'Web', emoji: '📚',
    description: 'Academic note-sharing platform rebuilt with Next.js',
    longDescription: 'A complete rewrite of the original StudyHub using Next.js. Modern UI, API-driven architecture, enhanced user experience with seamless note sharing, moderation, gamification, and mobile-friendly access.',
    techStack: ['TypeScript', 'Next.js', 'PostgreSQL'],
    story: 'The original StudyHub (v1) was built with vanilla PHP and served students well, but as the user base grew, performance bottlenecks and maintenance challenges became apparent. The monolithic PHP codebase made it hard to add new features. v2 was born from the need for a scalable, modern architecture that could handle growth.',
    challenge: 'Migrating from a monolithic PHP architecture to a modern Next.js stack without losing years of accumulated features and user data. The original database schema had evolved organically with inconsistencies. Real-time features like moderation queues and gamification leaderboards required careful rethinking.',
    solution: 'We adopted an incremental migration strategy — first building the new API layer with Next.js API routes while keeping the old PHP backend running in parallel. The database was normalized and migrated using a custom ETL script. For real-time features, we implemented WebSocket connections.',
    features: ['Role-based access', 'Real-time moderation queue', 'Gamification with XP', 'Material upload with preview', 'React Native mobile app', 'RESTful API architecture'],
    liveUrl: 'https://studyhubbd.vercel.app', githubUrl: 'https://github.com/MIHMahmudEli/Studyhub-web', images: [],
  },
  'studyhub-v1': {
    title: 'StudyHub v1', slug: 'studyhub-v1', category: 'Web', emoji: '📖',
    description: 'Original PHP version with moderation and gamification',
    longDescription: 'The original StudyHub — a web platform where students share, browse, and manage academic notes with roles for Students, Moderators, and Admins.',
    techStack: ['PHP', 'MySQL', 'JavaScript'],
    story: 'StudyHub started as a university project to solve a simple problem: students had notes scattered across WhatsApp groups, Google Drive links, and USB drives. There was no centralized place to find quality academic materials.',
    challenge: 'Building a complete academic sharing platform with vanilla PHP and MySQL while managing three user roles with different permissions. The moderation system needed to prevent spam and copyrighted content.',
    solution: 'Implemented a modular PHP architecture with separate controllers for each feature. Used MySQL views and optimized indexes to handle queries efficiently. Session-based auth with role checks at every endpoint.',
    features: ['Student, Moderator, Admin roles', 'Note and slide upload system', 'Content moderation workflow', 'XP points and gamification', 'Search and filter by subject'],
    liveUrl: 'https://studyhubb.great-site.net', githubUrl: 'https://github.com/MIHMahmudEli/StudyHub-Old-Version', images: [],
  },
  'routinepro': {
    title: 'RoutinePro', slug: 'routinepro', category: 'Web', emoji: '📅',
    description: 'Smart university class routine generator',
    longDescription: 'A high-performance web app for generating conflict-free university class routines with smart modes, gap optimization, and dynamic XLSX/JSON data sync.',
    techStack: ['JavaScript'],
    story: 'Every semester, university administrators spent days manually creating class routines — juggling teacher availability, room capacity, subject requirements. Mistakes meant scheduling conflicts that disrupted entire semesters.',
    challenge: 'The scheduling algorithm had to handle multiple constraints simultaneously: no two classes in the same room at the same time, teacher time preferences, subject credit hour requirements, lab vs theory differentiation.',
    solution: 'Implemented a constraint satisfaction algorithm with backtracking and heuristic pruning. Teachers and rooms are assigned using a weighted scoring system. The algorithm completes in under 5 seconds for a typical timetable.',
    features: ['Conflict-free schedule generation', 'Multi-mode generation', 'Gap optimization', 'XLSX and JSON data export', 'Teacher time preference support'],
    liveUrl: 'https://routine-pro-fawn.vercel.app', githubUrl: 'https://github.com/MIHMahmudEli/RoutinePro', images: [],
  },
  'truenetmeter': {
    title: 'TrueNetMeter', slug: 'truenetmeter', category: 'Web', emoji: '📶',
    description: 'Premium internet speed test app',
    longDescription: 'A premium, high-accuracy PHP speed test app with a vibrant circular speedometer and professional multi-stream algorithms for genuine performance metrics.',
    techStack: ['PHP', 'JavaScript'],
    story: 'Existing speed test websites were either inaccurate, bloated with ads, or required Flash. I wanted a clean, accurate speed test that anyone could use without distractions.',
    challenge: 'Measuring actual internet speed accurately requires downloading multiple files of varying sizes from different servers, accounting for TCP slow start, and filtering out network jitter.',
    solution: 'Used multiple concurrent download streams to saturate the connection. Implemented a progressive measurement algorithm that starts with small files and scales up. Results are averaged across multiple tests.',
    features: ['Multi-stream download algorithm', 'Real-time speedometer', 'Ping and jitter measurement', 'Upload speed testing', 'Ad-free experience'],
    liveUrl: 'https://truenetmeter.infinityfreeapp.com', githubUrl: 'https://github.com/MIHMahmudEli/TrueNetMeter', images: [],
  },
  'automata-playground': {
    title: 'Automata Playground', slug: 'automata-playground', category: 'Web', emoji: '⚙️',
    description: 'Interactive automata theory visualization',
    longDescription: 'An interactive web-based tool for visualizing and experimenting with automata theory concepts including finite automata, pushdown automata, and Turing machines.',
    techStack: ['TypeScript', 'React'],
    story: 'Studying automata theory was challenging — textbooks were dense with mathematical notation, and there were no good interactive tools to visualize how different automata actually work.',
    challenge: 'Implementing working simulations of deterministic and non-deterministic finite automata, pushdown automata with stack operations, and Turing machines with infinite tape — all with visual step-by-step execution.',
    solution: 'Built a custom graph visualization engine using React. For NFA simulation, implemented a breadth-first exploration of all possible paths. The Turing machine uses a virtual infinite tape with lazy allocation.',
    features: ['DFA and NFA simulation', 'Pushdown automata with stack view', 'Turing machine with infinite tape', 'Step-by-step execution mode', 'Custom automata builder'],
    liveUrl: 'https://automata-playground-beige.vercel.app', githubUrl: 'https://github.com/MIHMahmudEli/automata-playground', images: [],
  },
  'counting-game': {
    title: 'Counting Game', slug: 'counting-game', category: 'Game', emoji: '🔢',
    description: 'Fun number game against a smart computer',
    longDescription: 'A simple number game where you and the computer take turns counting from 0 to 21. Each player adds 1 to 3 numbers per turn, and whoever says 21 loses.',
    techStack: ['JavaScript'],
    story: 'I remember playing this game with friends during school breaks — it is deceptively simple but has deep mathematical strategy. I wanted to digitize it with an AI opponent that actually plays well.',
    challenge: 'The computer opponent needed to play optimally using game theory. But making it feel natural rather than robotic was tricky — if the AI always plays perfectly, it becomes predictable.',
    solution: 'Implemented a minimax-based AI with depth limiting for difficulty levels. Easy mode makes random mistakes, medium plays suboptimally, and hard always chooses the mathematically correct move.',
    features: ['Smart AI with 3 difficulty levels', 'Turn-by-turn gameplay', 'Move history display', 'Win/loss tracking', 'Mobile-friendly design'],
    liveUrl: 'https://mihmahmudeli.github.io/Counting-Game/', githubUrl: 'https://github.com/MIHMahmudEli/Counting-Game', images: [],
  },
  'quick-dodge': {
    title: 'Quick Dodge', slug: 'quick-dodge', category: 'Game', emoji: '🎯',
    description: 'Fast-paced reflex dodge game',
    longDescription: 'A fast-paced reflex game where you dodge incoming obstacles. The longer you survive, the harder it gets.',
    techStack: ['JavaScript'],
    story: 'I wanted to build a game that tests pure reflexes — no complex rules, no levels to unlock, just you against increasingly fast obstacles. The kind of game you play for 30 seconds between classes.',
    challenge: 'Making the difficulty curve feel fair was the biggest challenge. If obstacles get faster too quickly, players get frustrated. Obstacle generation also needed to avoid impossible patterns.',
    solution: 'Implemented a sinusoidal difficulty curve with small plateaus to let players adjust. Obstacle patterns are pre-validated to ensure at least one clear path exists.',
    features: ['Increasing difficulty curve', 'Smooth responsive controls', 'Score tracking', 'Instant replay', 'Keyboard and touch support'],
    liveUrl: 'https://mihmahmudeli.github.io/Quick-Dodge/', githubUrl: 'https://github.com/MIHMahmudEli/Quick-Dodge', images: [],
  },
  'nexgen-os': {
    title: 'NexGen.OS', slug: 'nexgen-os', category: 'Web', emoji: '🖥️',
    description: 'Web-based OS simulation',
    longDescription: 'A web-based operating system simulation with a desktop experience including windows, taskbar, file management, and interactive applications.',
    techStack: ['JavaScript'],
    story: 'I have always been fascinated by operating systems — how they manage windows, files, and processes. Building a web-based OS simulation was a way to understand these concepts deeply.',
    challenge: 'Implementing a window management system (move, resize, minimize, z-index stacking), a functional file manager, and multiple concurrent applications in vanilla JavaScript.',
    solution: 'Built a custom window manager with a doubly-linked list for z-index ordering. Each window has its own render context. The file system is simulated with a JSON tree structure.',
    features: ['Draggable and resizable windows', 'File manager with navigation', 'Multiple built-in apps', 'Taskbar with window switching', 'Boot screen simulation'],
    liveUrl: 'https://nex-gen-os.vercel.app', githubUrl: 'https://github.com/MIHMahmudEli/NexGen.OS', images: [],
  },
  'studyhub-mobile': {
    title: 'StudyHub Mobile', slug: 'studyhub-mobile', category: 'Mobile', emoji: '📱',
    description: 'Kotlin Android app for StudyHub',
    longDescription: 'An Android application extending StudyHub to mobile devices for browsing, uploading, and managing academic notes on the go.',
    techStack: ['Kotlin'],
    story: 'Students kept asking for a mobile app — they wanted to browse notes during commutes, upload photos directly from their phones, and get notifications when new materials were added.',
    challenge: 'Adapting a web-first platform to mobile required rethinking the entire UX for smaller screens. Offline access was a requested feature requiring local storage synchronization.',
    solution: 'Built using Kotlin with clean MVVM architecture. Notes cached locally using Room database for offline access. Upload flow uses camera intent for photo capture.',
    features: ['Browse and search notes', 'Camera upload for photos', 'Offline access', 'Push notifications', 'Material You design'],
    githubUrl: 'https://github.com/MIHMahmudEli/StudyHub-Mobile-apk', images: [],
  },
  'koshai-finder': {
    title: 'Koshai Finder', slug: 'koshai-finder', category: 'Mobile', emoji: '📍',
    description: 'Android app for local services',
    longDescription: 'An Android application that helps users find local services and businesses in their area with an intuitive interface.',
    techStack: ['Kotlin'],
    story: 'Finding reliable local services in Bangladesh often means asking friends or scrolling through Facebook groups. There was no centralized, trustworthy platform.',
    challenge: 'Getting accurate location data and business listings. User-generated content needed verification to prevent spam. Search had to handle Bengali language queries.',
    solution: 'Started with Google Places API and allowed users to add missing businesses with verification. Search uses fuzzy matching for spelling variations and Bengali transliteration.',
    features: ['Location-based business search', 'Category browsing', 'User reviews and ratings', 'Map integration', 'Bengali language support'],
    githubUrl: 'https://github.com/MIHMahmudEli/Koshai-Finder', images: [],
  },
  'career-sync': {
    title: 'Career-Sync', slug: 'career-sync', category: 'Tool', emoji: '💼',
    description: 'Career management platform',
    longDescription: 'A career management platform that helps users track job applications, manage professional development, and organize career goals.',
    techStack: ['TypeScript'],
    story: 'Job hunting is overwhelming — you apply to dozens of positions with different statuses and follow-up dates. Spreadsheets work but are messy. I built Career-Sync to bring order to the chaos.',
    challenge: 'Designing a flexible pipeline that works for different industries and job search styles. The status workflow varies by company. Data portability was also important.',
    solution: 'Used a kanban-style pipeline with customizable stages. Each application stores notes, contacts, and deadlines. Full JSON export/import ensures users own their data.',
    features: ['Kanban-style tracking', 'Customizable pipeline stages', 'Contact and notes', 'Deadline reminders', 'Data export to JSON'],
    githubUrl: 'https://github.com/MIHMahmudEli/Career-Sync', images: [],
  },
  'passwordvault': {
    title: 'PasswordVault', slug: 'passwordvault', category: 'Tool', emoji: '🔒',
    description: 'Secure password management tool',
    longDescription: 'A secure password management tool built with Python that helps users store, generate, and manage their passwords with strong encryption.',
    techStack: ['Python'],
    story: 'After seeing too many friends use the same password for everything, I wanted to build a simple, local-first password manager. No cloud subscriptions — a secure vault you control completely.',
    challenge: 'Implementing AES-256 encryption correctly without introducing vulnerabilities. The master password needed verification without storing it. Clipboard needed auto-clear timeout.',
    solution: 'Used Python\'s cryptography library with AES-256-GCM. Master password verification uses PBKDF2 key derivation. Clipboard auto-clears after 30 seconds.',
    features: ['AES-256-GCM encryption', 'Master password protection', 'Strong password generator', 'Clipboard auto-clear', 'Portable single-file vault'],
    githubUrl: 'https://github.com/MIHMahmudEli/PasswordVault', images: [],
  },
  'elitejersey': {
    title: 'EliteJersey', slug: 'elitejersey', category: 'Tool', emoji: '👕',
    description: 'Java Swing desktop app',
    longDescription: 'A Java Swing desktop application for admin login, product management, and account management.',
    techStack: ['Java'],
    story: 'Built as a comprehensive OOP project demonstrating how desktop applications handle real business workflows — inventory, authentication, and CRUD operations.',
    challenge: 'Building a clean Swing UI that doesnt look outdated. The product-image association needed file system management alongside database records.',
    solution: 'Used layered architecture (UI, Business, Data). Custom cell renderers improved appearance. Images stored in structured directories with database references.',
    features: ['Admin authentication', 'Product catalog management', 'Account CRUD', 'Search and filter', 'Order tracking'],
    githubUrl: 'https://github.com/MIHMahmudEli/EliteJersey', images: [],
  },
  'agrobridge': {
    title: 'AgroBridge', slug: 'agrobridge', category: 'Tool', emoji: '🌾',
    description: 'Digital platform for agricultural empowerment',
    longDescription: 'A digital platform connecting farmers with resources, market information, and community support.',
    techStack: ['C#'],
    story: 'Farmers in rural areas lack access to real-time market prices, weather forecasts, and modern techniques. Middlemen exploit this information gap.',
    challenge: 'Building an app that works in low-connectivity rural environments. UI needed to be usable by people with limited technical literacy. Bengali content was essential.',
    solution: 'Offline-first architecture — core features work without internet. Large buttons, icons, and Bengali text with voice guidance. Market prices from government databases.',
    features: ['Real-time market prices', 'Weather forecasts', 'Farming technique guides', 'Community forum', 'Bengali language interface'],
    githubUrl: 'https://github.com/MIHMahmudEli/AgroBridge', images: [],
  },
  'glutproject': {
    title: 'GlutProject', slug: 'glutproject', category: 'Tool', emoji: '🌆',
    description: '2D animated smart city with OpenGL',
    longDescription: 'A 2D animated smart city simulation with dynamic weather, moving vehicles, day-night cycle, rain, lightning, and interactive controls.',
    techStack: ['C++', 'OpenGL'],
    story: 'Computer graphics assignments are usually boring geometric shapes. I wanted to create something visually stunning that teaches OpenGL concepts while being portfolio-worthy.',
    challenge: 'Smooth animations require careful frame timing. Day-night cycle means every object needs two visual states. Moving vehicles need collision avoidance.',
    solution: 'Used delta-time-based animation for smooth framerates. Color interpolation handles day-night transitions. Vehicles follow predefined paths with adaptive speed.',
    features: ['Day-night cycle', 'Dynamic weather effects', 'Moving vehicles', 'Interactive keyboard controls', 'Multiple camera scenes'],
    githubUrl: 'https://github.com/MIHMahmudEli/GlutProject', images: [],
  },
  'fp-reseller-console': {
    title: 'FP Reseller Console', slug: 'fp-reseller-console', category: 'Web', emoji: '📊',
    description: 'Reseller management dashboard',
    longDescription: 'A full-featured reseller management console for managing products, orders, client accounts, and analytics.',
    techStack: ['TypeScript'],
    story: 'Resellers needed a centralized dashboard to manage operations — tracking inventory, processing orders, and monitoring sales. Most solutions were too expensive for individuals.',
    challenge: 'Aggregating data from multiple sources (payment gateways, inventory APIs, shipping providers) into a unified view with real-time notifications.',
    solution: 'Modular TypeScript architecture where each data source is a plugin. Uses server-sent events for real-time updates. Analytics presented as progressive disclosure.',
    features: ['Multi-source order management', 'Real-time notifications', 'Inventory tracking', 'Client management', 'Sales analytics'],
    liveUrl: 'https://fp-reseller-console.vercel.app', images: [],
  },
  'mad-project-pipeline': {
    title: 'MAD Project Pipeline', slug: 'mad-project-pipeline', category: 'Web', emoji: '🔧',
    description: 'Project pipeline management',
    longDescription: 'A project pipeline management tool for tracking mobile app development workflows with task organization and progress monitoring.',
    techStack: ['CSS', 'JavaScript'],
    story: 'Managing mobile app projects across teams required a simple, visual way to track progress. Existing tools were overkill for small teams.',
    challenge: 'Creating a pipeline visualization that clearly shows each project phase. Drag-and-drop needed to work smoothly across devices.',
    solution: 'Kanban-inspired pipeline with customizable stages. HTML5 Drag and Drop API with touch event polyfills for mobile support.',
    features: ['Visual pipeline with custom stages', 'Drag-and-drop task management', 'Team member assignment', 'Deadline tracking', 'Progress calculation'],
    liveUrl: 'https://mad-project-pipe-line.vercel.app', images: [],
  },
  'portfolio-v1': {
    title: 'Portfolio v1', slug: 'portfolio-v1', category: 'Web', emoji: '🎨',
    description: 'Previous version of my personal portfolio',
    longDescription: 'An earlier version of my personal portfolio — the foundation that evolved into this current portfolio.',
    techStack: ['TypeScript'],
    story: 'Every developer needs a portfolio, and v1 was my first attempt. It taught me React, TypeScript, and responsive design fundamentals.',
    challenge: 'Starting from scratch with React and TypeScript meant a steep learning curve. Getting responsive design right took multiple iterations.',
    solution: 'Started with a clean, minimal design using React functional components. Used CSS Grid for layout with responsive breakpoints.',
    features: ['Project showcase with filtering', 'Skills section', 'Responsive design', 'Contact form', 'Dark/light mode'],
    liveUrl: 'https://portfolio-three-snowy-49.vercel.app', images: [],
  },
  'git-analytics': {
    title: 'GitAnalytics', slug: 'git-analytics', category: 'Web', emoji: '📈',
    description: 'GitHub analytics dashboard',
    longDescription: 'A GitHub analytics dashboard that visualizes repository statistics, language distribution, star history, and contribution patterns.',
    techStack: ['CSS', 'JavaScript'],
    story: 'GitHub provides basic stats but nothing visual or comparative. I wanted to see my coding patterns over time and understand my language usage.',
    challenge: 'GitHub API rate limits and fetching data for multiple repos requires many requests. Star history requires time-series data the API doesnt directly provide.',
    solution: 'Aggressive caching with localStorage. Language distribution aggregates bytes per language. Star history reconstructed from repository events.',
    features: ['Repository statistics', 'Language distribution chart', 'Star history timeline', 'Contribution heatmap', 'Data export to image'],
    liveUrl: 'https://git-analytics-sigma.vercel.app', githubUrl: 'https://github.com/MIHMahmudEli/GitAnalytics', images: [],
  },
  'research-to-json': {
    title: 'Research to JSON', slug: 'research-to-json', category: 'Web', emoji: '🔬',
    description: 'Convert research papers to structured JSON',
    longDescription: 'A Streamlit-powered tool that converts research papers and academic documents into structured JSON format.',
    techStack: ['Python'],
    story: 'During research, I needed to extract structured data from dozens of papers. Manual extraction was painfully slow. I built this tool to automate it.',
    challenge: 'PDF parsing is unreliable — formatting, columns, and fonts affect accuracy. Different papers use different section structures.',
    solution: 'Used PyMuPDF with layout analysis for multi-column PDFs. Section detection uses regex covering multiple academic formats. Editable interface before export.',
    features: ['PDF upload and parsing', 'Multi-format detection', 'Editable results', 'JSON export', 'Batch processing'],
    liveUrl: 'https://mihmahmudeli-research-to-json-app-r2bfaf.streamlit.app', githubUrl: 'https://github.com/MIHMahmudEli/Research-to-JSON', images: [],
  },
  'number-grid-game': {
    title: 'Number Grid Game', slug: 'number-grid-game', category: 'Game', emoji: '🧩',
    description: 'Interactive number grid puzzle',
    longDescription: 'An engaging number grid puzzle game that challenges pattern recognition with multiple difficulty levels.',
    techStack: ['CSS', 'JavaScript'],
    story: 'I enjoy logic puzzles and wanted to recreate the satisfying feeling of completing a number grid with a competitive digital twist.',
    challenge: 'Generating valid puzzles with unique solutions requires complex backtracking. Ensuring each puzzle has exactly one solution is computationally expensive.',
    solution: 'Constraint-based puzzle generator that starts with a complete valid grid and removes numbers based on difficulty. Solution verified using SAT solver approach.',
    features: ['Multiple difficulty levels', 'Unique puzzle generation', 'Smart hint system', 'Progress tracking', 'Timer and scoring'],
    liveUrl: 'https://number-grid-game.netlify.app', githubUrl: 'https://github.com/MIHMahmudEli/Number-Grid-Game', images: [],
  },
  'tic-tac-toe': {
    title: 'Tic Tac Toe', slug: 'tic-tac-toe', category: 'Game', emoji: '⭕',
    description: 'Classic tic tac toe with multiple modes',
    longDescription: 'A fully-featured Tic Tac Toe game with friend and computer modes, multiple themes, and smooth animations.',
    techStack: ['JavaScript'],
    story: 'Tic Tac Toe is the first game many programmers build, but I wanted mine to stand out — polished with themes, AI, and animations.',
    challenge: 'The AI needed to be unbeatable using minimax but also offer variable difficulty. The theme system required complete visual redesign per theme without code duplication.',
    solution: 'Minimax algorithm with alpha-beta pruning. Difficulty levels make AI choose random suboptimal moves. Themes implemented as CSS custom properties swapped at runtime.',
    features: ['Play vs friend or AI', 'Three difficulty levels', 'Multiple visual themes', 'Smooth win animations', 'Score tracking'],
    liveUrl: 'https://mihmahmudeli.github.io/tic-tac-toe-game/', githubUrl: 'https://github.com/MIHMahmudEli/tic-tac-toe-game', images: [],
  },
};

const techColors: Record<string, string> = {
  JavaScript: '#f1e05a', TypeScript: '#3178c6', Python: '#3572A5', Kotlin: '#A97BFF',
  PHP: '#4F5B93', 'C++': '#f34b7d', Java: '#b07219', 'C#': '#178600',
  MySQL: '#00758F', React: '#61dafb', 'Next.js': '#ffffff', PostgreSQL: '#336791',
  OpenGL: '#5586a4', HTML: '#e34c26', CSS: '#563d7c',
};

function getTechGradient(tech: string[]): string {
  const map: Record<string, string> = {
    TypeScript: 'from-blue-600 via-blue-500 to-cyan-400',
    JavaScript: 'from-yellow-500 via-amber-500 to-orange-400',
    Python: 'from-green-600 via-emerald-500 to-teal-400',
    Kotlin: 'from-purple-600 via-violet-500 to-pink-400',
    PHP: 'from-indigo-600 via-indigo-500 to-purple-400',
    'C++': 'from-pink-600 via-rose-500 to-red-400',
    Java: 'from-orange-600 via-amber-500 to-yellow-400',
    'C#': 'from-violet-600 via-purple-500 to-fuchsia-400',
    'Next.js': 'from-zinc-600 via-zinc-500 to-zinc-400',
  };
  const primary = tech[0] || 'TypeScript';
  return map[primary] || 'from-blue-600 to-purple-500';
}

function getCategoryGradient(cat: string): string {
  switch (cat) {
    case 'Web': return 'from-blue-500/20 to-cyan-500/10';
    case 'Mobile': return 'from-purple-500/20 to-pink-500/10';
    case 'Game': return 'from-emerald-500/20 to-teal-500/10';
    case 'Tool': return 'from-amber-500/20 to-orange-500/10';
    default: return 'from-zinc-500/20 to-zinc-400/10';
  }
}

function stagger(i: number) {
  return { delay: i * 0.08 };
}

export default function ProjectDetail() {
  const { slug } = useParams();
  const project = projectData[slug as string];

  if (!project || !project.features) {
    return (
      <div className="relative py-32 text-center">
        <div className="fixed inset-0 bg-gradient-to-br from-blue-950/40 via-surface to-purple-950/40 pointer-events-none" />
        <div className="relative">
          <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} className="text-7xl mb-4 opacity-20 font-bold text-content">404</motion.div>
          <motion.h1 initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="text-xl font-bold text-content mb-4">Project not found</motion.h1>
          <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}>
            <Link href="/projects" className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-overlay/10 text-content text-sm hover:bg-white/20 border border-line transition-colors">
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" /></svg>
              Back to projects
            </Link>
          </motion.div>
        </div>
      </div>
    );
  }

  const sectionNavs = [
    { key: 'story', label: 'The Story' },
    { key: 'challenge', label: 'The Challenge' },
    { key: 'solution', label: 'The Solution' },
  ];

  return (
    <>
      <div className="fixed inset-0 bg-gradient-to-br from-blue-950/20 via-surface to-purple-950/20 pointer-events-none" />

      <div className="relative">
        <div className={`absolute inset-0 bg-gradient-to-b ${getCategoryGradient(project.category)} pointer-events-none`} />

        <div className="max-w-5xl mx-auto px-6 py-16 md:py-24">
          <motion.div
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4 }}
          >
            <Link href="/projects" className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-overlay/[0.03] border border-line text-xs text-muted hover:text-content hover:border-line transition-all">
              <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" /></svg>
              Back to projects
            </Link>
          </motion.div>

          <div className="mt-8 mb-12">
            <div className="flex items-center gap-4 mb-6">
              <motion.div
                initial={{ opacity: 0, scale: 0.5, rotate: -20 }}
                animate={{ opacity: 1, scale: 1, rotate: 0 }}
                transition={{ type: 'spring', stiffness: 200, damping: 15, delay: 0.1 }}
                className="w-16 h-16 rounded-2xl flex items-center justify-center text-3xl"
                style={{ backgroundColor: `${techColors[project.techStack?.[0] || ''] || '#6366f1'}20` }}
              >
                {project.emoji}
              </motion.div>
              <motion.span
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 }}
                className="text-[10px] tracking-[0.2em] text-muted uppercase"
              >
                {project.category} Project
              </motion.span>
            </div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.15, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
              className="text-4xl md:text-6xl font-bold text-content mb-4 leading-tight"
            >
              {project.title}
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.25, duration: 0.5 }}
              className="text-lg text-subtle max-w-2xl mb-6"
            >
              {project.description}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.35, duration: 0.5 }}
              className="flex flex-wrap gap-2 mb-8"
            >
              {(project.techStack || []).map((t) => (
                <span
                  key={t}
                  className="text-[11px] px-3 py-1 rounded-full border font-medium"
                  style={{
                    backgroundColor: `${techColors[t] || '#6366f1'}18`,
                    color: techColors[t] || '#6366f1',
                    borderColor: `${techColors[t] || '#6366f1'}30`,
                  }}
                >
                  {t}
                </span>
              ))}
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.45, duration: 0.5 }}
              className="flex flex-wrap gap-3"
            >
              {project.liveUrl && (
                <a
                  href={project.liveUrl} target="_blank" rel="noopener noreferrer"
                  className="group relative inline-flex items-center gap-2 px-6 py-3 rounded-full overflow-hidden"
                >
                  <div className={`absolute inset-0 bg-gradient-to-r ${getTechGradient(project.techStack || ['TypeScript'])} opacity-80 group-hover:opacity-100 transition-opacity`} />
                  <svg className="relative z-10 w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" /></svg>
                  <span className="relative z-10 text-white text-sm font-semibold">Live Demo</span>
                </a>
              )}
              {project.githubUrl && (
                <a
                  href={project.githubUrl} target="_blank" rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-overlay/5 border border-line text-content text-sm font-medium hover:bg-overlay/10 hover:text-content hover:border-line transition-all"
                >
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" /></svg>
                  Source Code
                </a>
              )}
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="mb-16 rounded-2xl overflow-hidden border border-line"
          >
            <ProjectPreview title={project.title} tech={project.techStack || []} liveUrl={project.liveUrl} />
          </motion.div>

          <div className="mb-4 flex items-center gap-4">
            {sectionNavs.map((s) => {
              const sectionEl = document.getElementById(s.key);
              return (
                <a
                  key={s.key}
                  href={`#${s.key}`}
                  className="text-[10px] tracking-[0.2em] text-muted hover:text-content uppercase transition-colors"
                >
                  {s.label}
                </a>
              );
            })}
          </div>

          <div className="space-y-10 mb-14">
            {[
              { key: 'story', icon: '💡', title: 'The Story', content: project.story, border: 'border-blue-500/30' },
              { key: 'challenge', icon: '⚠️', title: 'The Challenge', content: project.challenge, border: 'border-amber-500/30' },
              { key: 'solution', icon: '✅', title: 'The Solution', content: project.solution, border: 'border-emerald-500/30' },
            ].map((section, i) => (
              <motion.div
                key={section.key}
                id={section.key}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.5, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
              >
                <div className="relative pl-8 md:pl-10 border-l border-line">
                  <div className={`absolute left-0 top-0 bottom-0 w-px bg-gradient-to-b ${section.border.replace('border-', 'from-').replace('/30', '/50')} to-transparent`} />
                  <motion.div
                    className="absolute -left-3 top-0 w-6 h-6 rounded-full flex items-center justify-center text-xs bg-card border border-line"
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ type: 'spring', stiffness: 300, damping: 15, delay: i * 0.12 }}
                  >
                    {section.icon}
                  </motion.div>
                  <div>
                    <h3 className="text-sm font-semibold text-content mb-3">{section.title}</h3>
                    <p className="text-sm text-subtle leading-relaxed">{section.content}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.5 }}
            className="rounded-2xl border border-line bg-card/30 p-6 md:p-8 mb-14"
          >
            <h3 className="text-sm font-semibold text-content mb-6 flex items-center gap-2">
              <span>✨</span> Key Features
            </h3>
            <div className="grid sm:grid-cols-2 gap-3">
              {(project.features || []).map((f, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.05 }}
                  className="flex items-center gap-3 p-3 rounded-xl bg-card/30 border border-line hover:bg-card/50 hover:border-line transition-colors"
                >
                  <div className="w-6 h-6 rounded-full bg-blue-500/10 flex items-center justify-center shrink-0">
                    <svg className="w-3 h-3 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" /></svg>
                  </div>
                  <span className="text-sm text-content">{f}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="flex flex-wrap gap-3 items-center justify-between p-6 rounded-2xl border border-line bg-gradient-to-r from-blue-500/[0.03] to-purple-500/[0.03]"
          >
            <div>
              <div className="text-sm text-content font-medium">Like what you see?</div>
              <div className="text-xs text-muted">Check the live demo or browse the source code.</div>
            </div>
            <div className="flex gap-3">
              {project.liveUrl && (
                <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="px-5 py-2.5 bg-white text-black rounded-full text-xs font-semibold hover:bg-zinc-200 transition-colors">
                  Live Demo
                </a>
              )}
              {project.githubUrl && (
                <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="px-5 py-2.5 border border-line text-content rounded-full text-xs font-medium hover:bg-card hover:border-line transition-colors">
                  Source Code
                </a>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </>
  );
}
