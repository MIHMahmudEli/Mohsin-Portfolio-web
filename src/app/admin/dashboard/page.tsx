'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';

export default function AdminDashboard() {
  const [admin, setAdmin] = useState<{ name: string; email: string } | null>(null);
  const router = useRouter();

  useEffect(() => {
    const token = localStorage.getItem('admin_token');
    const adminData = localStorage.getItem('admin');
    if (!token) {
      router.push('/admin');
    } else if (adminData) {
      setAdmin(JSON.parse(adminData));
    }
  }, [router]);

  const handleLogout = () => {
    localStorage.removeItem('admin_token');
    localStorage.removeItem('admin');
    router.push('/admin');
  };

  if (!admin) return null;

  return (
    <div className="py-20">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex items-center justify-between mb-10">
          <div>
            <h1 className="text-3xl font-bold">Dashboard</h1>
            <p className="text-zinc-500 text-sm">Welcome, {admin.name}</p>
          </div>
          <button onClick={handleLogout} className="px-4 py-2 text-sm border border-zinc-300 rounded-lg hover:bg-zinc-100 transition-colors">
            Logout
          </button>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {[
            { label: 'Profile', href: '#', desc: 'Edit your personal info' },
            { label: 'Projects', href: '#', desc: 'Manage your projects' },
            { label: 'Skills', href: '#', desc: 'Update your skills' },
            { label: 'Experience', href: '#', desc: 'Work history' },
            { label: 'Education', href: '#', desc: 'Academic background' },
            { label: 'Games', href: '#', desc: 'Your game projects' },
            { label: 'Research', href: '#', desc: 'Research papers' },
            { label: 'Tours', href: '#', desc: 'Travel log' },
            { label: 'Settings', href: '#', desc: 'Site settings' },
          ].map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="p-5 rounded-xl border border-zinc-200 bg-white hover:border-blue-200 hover:shadow-sm transition-all"
            >
              <h3 className="font-semibold mb-1">{item.label}</h3>
              <p className="text-sm text-zinc-500">{item.desc}</p>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}
