'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function AdminLogin() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    try {
      const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL || 'http://localhost:4000'}/api/auth/login`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password }),
      });

      if (!res.ok) throw new Error('Invalid credentials');

      const data = await res.json();
      localStorage.setItem('admin_token', data.accessToken);
      localStorage.setItem('admin', JSON.stringify(data.admin));
      router.push('/admin/dashboard');
    } catch {
      setError('Invalid email or password');
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-zinc-50">
      <form onSubmit={handleSubmit} className="w-full max-w-sm p-8 bg-white rounded-2xl border border-zinc-200 shadow-sm">
        <h1 className="text-2xl font-bold mb-1">Admin Login</h1>
        <p className="text-sm text-zinc-500 mb-6">Sign in to manage your portfolio</p>

        {error && <p className="text-sm text-red-600 mb-4">{error}</p>}

        <div className="space-y-4">
          <div>
            <label className="text-xs font-medium text-zinc-600 block mb-1">Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-3 py-2 border border-zinc-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>
          <div>
            <label className="text-xs font-medium text-zinc-600 block mb-1">Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-3 py-2 border border-zinc-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>
          <button type="submit" className="w-full py-2.5 bg-black text-white rounded-lg text-sm font-medium hover:bg-zinc-800 transition-colors">
            Sign In
          </button>
        </div>
      </form>
    </div>
  );
}
