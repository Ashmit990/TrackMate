'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Zap, Eye, EyeOff, ArrowRight, GitFork, Globe, Sparkles, Cpu, Lock, Mail } from 'lucide-react';

export default function LoginPage() {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setTimeout(() => setIsLoading(false), 2000);
  };

  return (
    <div className="min-h-screen bg-[#0a0b1b] flex overflow-hidden">
      {/* Noise Overlay */}
      <div className="fixed inset-0 z-[100] pointer-events-none opacity-[0.025]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
        }}
      />

      {/* ─── LEFT PANEL — Login Form ─── */}
      <div className="relative flex flex-col justify-center w-full lg:w-[54%] xl:w-[50%] 2xl:w-[46%] min-h-screen px-10 sm:px-16 lg:px-20 xl:px-24 2xl:px-28 py-10 lg:py-12 z-10">
        {/* Ambient glow */}
        <div className="absolute top-0 left-0 w-[400px] h-[400px] bg-violet-600/10 blur-[130px] pointer-events-none rounded-full -translate-x-1/2 -translate-y-1/2" />

        <div className="relative z-10 w-full max-w-[440px] mx-auto flex flex-col gap-5">

          {/* Logo */}
          <div className="animate-slide-up" style={{ animationDelay: '100ms' }}>
            <Link href="/" className="inline-flex items-center gap-2 group">
              <div className="h-9 w-9 rounded-md bg-gradient-to-br from-[#7c3aed] to-[#4f46e5] flex items-center justify-center shadow-[0_0_16px_rgba(124,58,237,0.45)] group-hover:shadow-[0_0_24px_rgba(124,58,237,0.65)] transition-shadow duration-300">
                <Zap className="h-5 w-5 text-white" fill="white" />
              </div>
              <span className="text-2xl font-black tracking-tight text-white" style={{ fontFamily: 'var(--font-space-grotesk)' }}>TrackMate</span>
            </Link>
          </div>

          {/* Badge + Heading */}
          <div className="animate-slide-up" style={{ animationDelay: '200ms' }}>
            <div>
              <div className="inline-flex items-center gap-1.5 rounded-md border border-white/[0.08] bg-white/[0.04] px-3 py-1 text-[11px] font-semibold text-white/70 mb-2.5">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
                <Sparkles className="h-3 w-3 text-violet-400" />
                <span>AI-Powered Career Platform</span>
              </div>
              <h1 className="text-4xl lg:text-[2.5rem] font-black tracking-tight text-white leading-none mb-2" style={{ fontFamily: 'var(--font-space-grotesk)' }}>
                Welcome{' '}
                <span className="bg-gradient-to-r from-violet-400 via-fuchsia-400 to-cyan-400 bg-clip-text text-transparent">back</span>
              </h1>
              <p className="text-white/40 text-[0.95rem] font-medium mt-1">Sign in to continue your AI career journey.</p>
            </div>
          </div>

          {/* Social Buttons */}
          <div className="animate-slide-up" style={{ animationDelay: '300ms' }}>
            <div className="flex gap-2.5">
              <button id="login-google-btn" className="flex-1 flex items-center justify-center gap-2 rounded-md border border-white/[0.08] bg-white/[0.03] px-4 py-2.5 text-sm font-semibold text-white/80 hover:bg-white/[0.07] hover:border-white/[0.14] transition-all duration-300 group">
                <Globe className="h-4 w-4 text-white/50 group-hover:text-white transition-colors" />
                Google
              </button>
              <button id="login-github-btn" className="flex-1 flex items-center justify-center gap-2 rounded-md border border-white/[0.08] bg-white/[0.03] px-4 py-2.5 text-sm font-semibold text-white/80 hover:bg-white/[0.07] hover:border-white/[0.14] transition-all duration-300 group">
                <GitFork className="h-4 w-4 text-white/50 group-hover:text-white transition-colors" />
                GitHub
              </button>
            </div>
          </div>

          {/* Divider */}
          <div className="animate-slide-up" style={{ animationDelay: '350ms' }}>
            <div className="flex items-center gap-3">
              <div className="flex-1 h-px bg-white/[0.07]" />
              <span className="text-[10px] font-bold text-white/25 uppercase tracking-widest">or email</span>
              <div className="flex-1 h-px bg-white/[0.07]" />
            </div>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="flex flex-col gap-3 animate-slide-up" style={{ animationDelay: '400ms' }}>
            {/* Email */}
            <div className="group">
              <label htmlFor="login-email" className="block text-[10px] font-bold text-white/35 uppercase tracking-widest mb-1.5">Email</label>
              <div className="relative">
                <div className="absolute inset-y-0 left-3.5 flex items-center pointer-events-none">
                  <Mail className="h-4 w-4 text-white/20 group-focus-within:text-violet-400 transition-colors" />
                </div>
                <input
                  id="login-email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="you@example.com"
                  required
                  className="w-full rounded-md border border-white/[0.08] bg-white/[0.03] pl-10 pr-4 py-2.5 text-sm text-white placeholder-white/20 outline-none focus:border-violet-500/60 focus:bg-violet-500/[0.04] focus:shadow-[0_0_0_3px_rgba(124,58,237,0.10)] transition-all duration-300"
                />
              </div>
            </div>

            {/* Password */}
            <div className="group">
              <div className="flex items-center justify-between mb-1.5">
                <label htmlFor="login-password" className="block text-[10px] font-bold text-white/35 uppercase tracking-widest">Password</label>
                <a href="#" className="text-xs font-semibold text-violet-400 hover:text-violet-300 transition-colors">Forgot?</a>
              </div>
              <div className="relative">
                <div className="absolute inset-y-0 left-3.5 flex items-center pointer-events-none">
                  <Lock className="h-4 w-4 text-white/20 group-focus-within:text-violet-400 transition-colors" />
                </div>
                <input
                  id="login-password"
                  type={showPassword ? 'text' : 'password'}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="••••••••"
                  required
                  className="w-full rounded-md border border-white/[0.08] bg-white/[0.03] pl-10 pr-10 py-2.5 text-sm text-white placeholder-white/20 outline-none focus:border-violet-500/60 focus:bg-violet-500/[0.04] focus:shadow-[0_0_0_3px_rgba(124,58,237,0.10)] transition-all duration-300"
                />
                <button type="button" id="toggle-password-visibility" onClick={() => setShowPassword(!showPassword)}
                  className="absolute inset-y-0 right-3.5 flex items-center text-white/25 hover:text-white/60 transition-colors">
                  {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                </button>
              </div>
            </div>

            {/* Remember me */}
            <div className="flex items-center gap-2">
              <input id="login-remember" type="checkbox" className="h-3.5 w-3.5 rounded border border-white/[0.12] bg-white/[0.03] accent-violet-500 cursor-pointer" />
              <label htmlFor="login-remember" className="text-xs text-white/35 cursor-pointer select-none">Keep me signed in</label>
            </div>

            {/* Submit */}
            <button
              id="login-submit-btn"
              type="submit"
              disabled={isLoading}
              className="relative w-full flex items-center justify-center gap-2 rounded-md bg-gradient-to-r from-[#7c3aed] to-[#4f46e5] px-6 py-3 text-sm font-black text-white shadow-[0_0_24px_rgba(124,58,237,0.35)] hover:shadow-[0_0_40px_rgba(124,58,237,0.55)] transition-all duration-300 hover:scale-[1.015] active:scale-[0.98] disabled:opacity-60 overflow-hidden group"
            >
              {isLoading
                ? <><div className="h-4 w-4 rounded-full border-2 border-white/30 border-t-white animate-spin" />Signing in...</>
                : <>Sign In <ArrowRight className="h-4 w-4 group-hover:translate-x-0.5 transition-transform" /></>
              }
              <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 bg-gradient-to-r from-transparent via-white/10 to-transparent skew-x-12" />
            </button>
          </form>

          {/* Sign up + Footer */}
          <div className="flex flex-col gap-1 text-center animate-slide-up" style={{ animationDelay: '500ms' }}>
            <p className="text-sm text-white/30">
              Don&apos;t have an account?{' '}
              <a href="#" className="font-bold text-violet-400 hover:text-violet-300 transition-colors">Create one free</a>
            </p>
            <p className="text-[11px] text-white/15">© 2026 TrackMate AI</p>
          </div>

        </div>
      </div>

      {/* ─── RIGHT PANEL — AI Image ─── */}
      <div className="hidden lg:flex lg:w-[46%] xl:w-[50%] 2xl:w-[54%] relative overflow-hidden bg-[#0a0b1b] opacity-0 animate-fade-in" style={{ animationDelay: '150ms' }}>
        {/* Glow orbs — kept subtle so they don't create a color band */}
        <div className="absolute top-1/3 right-1/3 w-[450px] h-[450px] bg-violet-600/10 blur-[140px] rounded-full pointer-events-none" />
        <div className="absolute bottom-1/3 left-1/3 w-[350px] h-[350px] bg-cyan-500/8 blur-[120px] rounded-full pointer-events-none" />

        {/* AI Image — fills the panel, fades hard from the left so left panel background bleeds through */}
        <div className="absolute inset-0">
          <img
            src="/images/ai.png"
            alt="Futuristic AI Robot"
            className="h-full w-full object-cover saturate-[0.8]"
            style={{
              maskImage: 'linear-gradient(to right, transparent 0%, rgba(0,0,0,0.15) 12%, rgba(0,0,0,0.6) 28%, black 48%, black 90%, transparent 100%)',
              WebkitMaskImage: 'linear-gradient(to right, transparent 0%, rgba(0,0,0,0.15) 12%, rgba(0,0,0,0.6) 28%, black 48%, black 90%, transparent 100%)',
            }}
          />
          {/* Left-edge cover: same color as both panels so seam is invisible */}
          <div className="absolute inset-y-0 left-0 w-[25%] bg-gradient-to-r from-[#0a0b1b] via-[#0a0b1b]/55 to-transparent pointer-events-none" />
          {/* Top + bottom vignettes */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#0a0b1b]/60 via-transparent to-[#0a0b1b]/30 pointer-events-none" />
        </div>

        {/* Floating HUD Badges */}
        <div className="absolute top-10 right-10 p-3 rounded-md bg-black/50 border border-white/10 backdrop-blur-sm shadow-lg opacity-0"
          style={{ animation: 'float 5s ease-in-out infinite, fadeIn 1.2s cubic-bezier(0.16, 1, 0.3, 1) 400ms forwards' }}>
          <div className="flex items-center gap-2">
            <div className="h-6 w-6 rounded-md bg-violet-500/20 flex items-center justify-center border border-violet-500/30">
              <Cpu className="h-3 w-3 text-violet-400" />
            </div>
            <div>
              <p className="text-[7px] font-black uppercase tracking-widest text-white/50">Latency</p>
              <p className="text-xs font-black text-white leading-none">0.04ms</p>
            </div>
          </div>
        </div>

        <div className="absolute bottom-10 left-10 p-3 rounded-md bg-black/50 border border-white/10 backdrop-blur-sm shadow-lg opacity-0"
          style={{ animation: 'float 7s ease-in-out infinite 1s, fadeIn 1.2s cubic-bezier(0.16, 1, 0.3, 1) 500ms forwards' }}>
          <div className="flex items-center gap-2">
            <div className="h-6 w-6 rounded-full border border-emerald-500/30 flex items-center justify-center bg-emerald-500/10">
              <Sparkles className="h-3 w-3 text-emerald-400" />
            </div>
            <div>
              <p className="text-[7px] font-black uppercase tracking-widest text-white/50">AI Status</p>
              <p className="text-xs font-black text-emerald-400 leading-none">Active</p>
            </div>
          </div>
        </div>

        {/* Brand overlay text */}
        <div className="absolute bottom-10 right-10 text-right opacity-0"
          style={{ animation: 'fadeIn 1.2s cubic-bezier(0.16, 1, 0.3, 1) 600ms forwards' }}>
          <p className="text-[10px] font-black uppercase tracking-[0.4em] text-white/20">Powered by</p>
          <p className="text-lg font-black text-white/40 tracking-tight" style={{ fontFamily: 'var(--font-space-grotesk)' }}>
            TrackMate AI
          </p>
        </div>

      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes slideUp {
          from { opacity: 0; transform: translateY(16px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
        }
        .animate-fade-in {
          animation: fadeIn 1s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }
        .animate-slide-up {
          opacity: 0;
          animation: slideUp 0.9s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }
      `}} />
      </div>
    </div>
  );
}
