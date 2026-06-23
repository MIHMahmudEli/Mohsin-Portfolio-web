export interface Profile {
  id: string;
  name: string;
  title: string;
  bio?: string;
  avatarUrl?: string;
  resumeUrl?: string;
  location?: string;
  email?: string;
  phone?: string;
  githubUrl?: string;
  linkedinUrl?: string;
  twitterUrl?: string;
  instagramUrl?: string;
  websiteUrl?: string;
}

export interface ProjectImage {
  id: string;
  url: string;
  alt?: string;
  sortOrder: number;
}

export interface Project {
  id: string;
  title: string;
  slug: string;
  description?: string;
  longDescription?: string;
  techStack: string[];
  liveUrl?: string;
  githubUrl?: string;
  featured: boolean;
  category?: string;
  images: ProjectImage[];
}

export interface Skill {
  id: string;
  name: string;
  category: string;
  level: number;
  color?: string;
  iconUrl?: string;
}

export interface Experience {
  id: string;
  company: string;
  role: string;
  description?: string;
  startDate: string;
  endDate?: string;
  current: boolean;
}

export interface Education {
  id: string;
  institution: string;
  degree: string;
  field?: string;
  description?: string;
  startDate: string;
  endDate?: string;
  current: boolean;
}

export interface Game {
  id: string;
  title: string;
  slug: string;
  description?: string;
  techStack: string[];
  imageUrl?: string;
  liveUrl?: string;
  githubUrl?: string;
  featured: boolean;
}

export interface Research {
  id: string;
  title: string;
  authors: string;
  description?: string;
  status: string;
  field?: string;
  expectedDate?: string;
}

export interface Tour {
  id: string;
  title: string;
  location: string;
  description?: string;
  startDate: string;
  endDate?: string;
  images: string[];
  latitude?: number;
  longitude?: number;
  featured: boolean;
}
