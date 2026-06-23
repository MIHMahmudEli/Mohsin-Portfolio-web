const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:4000';

async function fetchAPI<T>(path: string, options?: RequestInit): Promise<T> {
  const res = await fetch(`${API_URL}${path}`, {
    headers: { 'Content-Type': 'application/json', ...options?.headers },
    ...options,
  });
  if (!res.ok) throw new Error(`API Error: ${res.statusText}`);
  return res.json();
}

export const api = {
  profile: {
    get: () => fetchAPI<import('./types').Profile>('/api/profile'),
  },
  projects: {
    list: () => fetchAPI<import('./types').Project[]>('/api/projects'),
    get: (slug: string) => fetchAPI<import('./types').Project>(`/api/projects/${slug}`),
  },
  skills: {
    list: () => fetchAPI<import('./types').Skill[]>('/api/skills'),
  },
  experiences: {
    list: () => fetchAPI<import('./types').Experience[]>('/api/experiences'),
  },
  educations: {
    list: () => fetchAPI<import('./types').Education[]>('/api/educations'),
  },
  games: {
    list: () => fetchAPI<import('./types').Game[]>('/api/games'),
    get: (slug: string) => fetchAPI<import('./types').Game>(`/api/games/${slug}`),
  },
  research: {
    list: () => fetchAPI<import('./types').Research[]>('/api/research'),
  },
  tours: {
    list: () => fetchAPI<import('./types').Tour[]>('/api/tours'),
  },
};
