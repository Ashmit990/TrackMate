import React from 'react';
import { Zap, Sparkles, ArrowRight, Building2, Map, MessageSquare, Briefcase, Search, Cpu, BookOpen, Rocket } from 'lucide-react';
import { Reveal, RevealList, RevealItem } from '@/components/Reveal';
import { div } from 'framer-motion/m';

const Navbar = () => (
  <nav className="fixed top-0 left-0 right-0 z-50 bg-[#08060f]/60 backdrop-blur-xl border-b border-white/[0.04]">
    <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8">
      <div className="flex items-center gap-2.5">
        <div className="h-9 w-9 rounded-md bg-gradient-to-br from-[#7c3aed] to-[#4f46e5] flex items-center justify-center shadow-[0_0_15px_rgba(124,58,237,0.4)]">
          <Zap className="h-5 w-5 text-white" fill="white" />
        </div>
        <span className="text-xl font-display font-black tracking-tight text-white focus:outline-none">TrackMate</span>
      </div>
      
      <div className="hidden md:flex items-center gap-10 text-sm font-medium text-white/60">
        <a href="#features" className="hover:text-white transition-colors duration-300">Features</a>
        <a href="#how-it-works" className="hover:text-white transition-colors duration-300">How It Works</a>
      </div>
      
      <div className="flex items-center gap-6">
        <button className="text-sm font-medium text-white/70 hover:text-white transition-colors duration-300">Log in</button>
        <button className="rounded-md bg-gradient-to-r from-[#7c3aed] to-[#4f46e5] px-6 py-2.5 text-sm font-bold text-white shadow-[0_0_20px_rgba(124,58,237,0.3)] hover:shadow-[0_0_30px_rgba(124,58,237,0.5)] transition-all duration-300 hover:scale-[1.02] active:scale-[0.98]">
          Get Started Free
        </button>
      </div>
    </div>
  </nav>
);

export default function Home() {
  return (
    <div className="relative min-h-screen bg-[#08060f] selection:bg-[#7c3aed]/30 overflow-x-hidden">
      {/* Global Noise Overlay */}
      <div className="fixed inset-0 z-[100] noise-overlay h-full w-full opacity-[0.03]" />

      {/* Background Mesh and Grid */}
      <div className="fixed inset-0 z-0 h-screen w-screen overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] h-[60%] w-[60%] rounded-full bg-[#7c3aed]/15 blur-[120px]" />
        <div className="absolute bottom-[-10%] right-[-10%] h-[60%] w-[60%] rounded-full bg-[#06b6d4]/10 blur-[120px]" />
        <div className="absolute top-[20%] right-[10%] h-[40%] w-[40%] rounded-full bg-[#4f46e5]/10 blur-[120px]" />
        
        {/* Subtle Grid Texture */}
        <div 
          className="absolute inset-0 opacity-[0.02]" 
          style={{ 
            backgroundImage: 'linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)',
            backgroundSize: '60px 60px'
          }} 
        />
      </div>

      <Navbar />

      <main className="relative z-10 pt-8 lg:pt-12">
        <section className="mx-auto max-w-7xl px-6 lg:px-8 py-20 lg:py-32">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Left Content */}
            <div className="text-center lg:text-left order-2 lg:order-1">
              {/* Badge */}
              <Reveal delay={0.1}>
                <div className="inline-flex items-center gap-2 rounded-md border border-white/[0.08] bg-white/[0.04] px-4 py-1.5 text-xs font-semibold text-white/80">
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                  <Sparkles className="h-3 w-3 text-violet-400" />
                  <span>100% Free · AI-Powered · No Account Needed</span>
                </div>
              </Reveal>

              {/* Heading */}
              <Reveal delay={0.2} y={30}>
                <h1 className="mt-4 text-5xl font-black font-display tracking-[-0.04em] leading-[0.95] text-white md:text-7xl lg:text-[88px]">
                  <span className="premium-gradient-text">Your AI roadmap <br className="hidden lg:block" /> to become a</span> <br className="hidden lg:block" />
                  <span className="bg-gradient-to-r from-violet-400 via-fuchsia-400 to-cyan-400 bg-clip-text text-transparent drop-shadow-[0_0_35px_rgba(124,58,237,0.5)]">
                    Data Scientist
                  </span>
                </h1>
              </Reveal>

              {/* Subtext */}
              <Reveal delay={0.4}>
                <p className="mt-4 max-w-xl text-lg font-medium text-white/40 leading-relaxed md:text-xl mx-auto lg:mx-0">
                  Enter your target role. Get the companies hiring, a custom learning roadmap, 
                  built-in interview prep, and real job listings.
                </p>
              </Reveal>

              {/* Buttons */}
              <Reveal delay={0.6}>
                <div className="mt-12 flex flex-col sm:flex-row items-center lg:justify-start justify-center gap-5">
                  <button className="group flex items-center justify-center gap-2 w-full sm:w-auto rounded-xl bg-gradient-to-r from-[#7c3aed] to-[#4f46e5] px-8 py-4.5 text-base font-bold text-white shadow-[0_0_30px_rgba(124,58,237,0.4)] hover:shadow-[0_0_50px_rgba(124,58,237,0.6)] transition-all duration-300 hover:scale-[1.02] active:scale-[0.98]">
                    Start Your Career Path
                    <ArrowRight className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
                  </button>
                  <button className="w-full sm:w-auto rounded-xl border border-white/10 bg-white/[0.03] px-10 py-4.5 text-base font-bold text-white/90 hover:bg-white/[0.08] hover:border-white/20 transition-all duration-300">
                    See How It Works
                  </button>
                </div>
              </Reveal>
            </div>

            {/* Right Content - Visual */}
            <div className="order-1 lg:order-2 flex justify-center lg:justify-end">
              <Reveal delay={0.4} x={40}>
                <div className="relative group w-full max-w-[550px] lg:max-w-none -mt-16 lg:-mt-24" style={{ transform: 'translateY(-30px)' }}>
                  {/* Extended Decorative Background Elements - Full Coverage */}
                  <div className="absolute -top-40 -right-40 h-[600px] w-[600px] bg-brand-violet/20 blur-[150px] rounded-full animate-pulse" />
                  <div className="absolute -bottom-40 -left-40 h-[600px] w-[600px] bg-brand-cyan/20 blur-[150px] rounded-full" />
                  
                  {/* Seamless AI Integration */}
                  <div className="relative transition-all duration-1000">
                    {/* Clean Border Frame */}
                    <div className="relative rounded-[2.5rem] border-2 border-white/15 bg-white/[0.02] p-4 backdrop-blur-xl shadow-2xl">
                      <div className="relative aspect-[4/5] lg:aspect-square overflow-hidden rounded-2xl">
                        <img 
                          src="/images/ai.png" 
                          alt="Futuristic AI Robot" 
                          className="h-full w-full object-cover opacity-100 transition-all duration-1000 saturate-[0.8]"
                        />
                        {/* Subtle Overlay Gradients */}
                        <div className="absolute inset-0 bg-gradient-to-t from-[#08060f]/50 via-transparent to-transparent opacity-60" />
                        <div className="absolute inset-0 bg-gradient-to-b from-[#08060f]/40 via-transparent to-transparent opacity-40" />
                        
                        {/* AI Scanning Effect Overlay */}
                        <div className="absolute inset-0 z-20 pointer-events-none overflow-hidden opacity-0 transition-opacity duration-700">
                          <div className="absolute top-0 left-0 w-full h-[1px] bg-cyan-400/30 shadow-[0_0_20px_#22d3ee] animate-[scan_4s_linear_infinite]" />
                        </div>
                      </div>
                    </div>

                    {/* Floating HUD Badges - Small corner floats */}
                    <div className="absolute top-4 right-4 p-3 rounded-lg bg-black/50 border border-white/10 backdrop-blur-sm shadow-lg animate-float transition-all duration-500">
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

                    <div className="absolute bottom-4 left-4 p-3 rounded-lg bg-black/50 border border-white/10 backdrop-blur-sm shadow-lg animate-float-delayed transition-all duration-500">
                      <div className="flex items-center gap-2">
                        <div className="h-6 w-6 rounded-full border border-emerald-500/30 flex items-center justify-center bg-emerald-500/10">
                          <Sparkles className="h-3 w-3 text-emerald-400" />
                        </div>
                        <div>
                          <p className="text-[7px] font-black uppercase tracking-widest text-white/50">Status</p>
                          <p className="text-xs font-black text-emerald-400 leading-none">Active</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </Reveal>
            </div>
          </div>

          {/* Stats Section moved inside hero for better flow */}
          <div className="mt-32 mx-auto max-w-5xl">
            <Reveal delay={0.8} y={40}>
              <div className="relative group p-px rounded-[2.5rem] bg-gradient-to-b from-white/[0.1] to-transparent">
                <div className="relative rounded-[2.5rem] bg-[#08060f]/60 backdrop-blur-2xl px-8 py-14 md:px-20 overflow-hidden">
                  {/* Background Glow */}
                  <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 w-64 h-64 bg-violet-500/10 blur-[100px]" />
                  <div className="absolute bottom-0 left-0 translate-y-1/2 -translate-x-1/2 w-64 h-64 bg-cyan-500/10 blur-[100px]" />
                  
                  <div className="relative z-10 grid grid-cols-1 gap-y-16 md:grid-cols-3 md:gap-y-0">
                    <RevealItem>
                      <div className="flex flex-col items-center md:items-start text-center md:text-left transition-transform duration-500 group-hover:translate-y-[-4px]">
                        <span className="text-5xl md:text-6xl font-black font-display tracking-tight text-white drop-shadow-[0_0_20px_rgba(255,255,255,0.2)]">
                          2,400+
                        </span>
                        <span className="mt-4 text-xs font-black uppercase tracking-[0.3em] text-violet-400">
                          Career paths built
                        </span>
                      </div>
                    </RevealItem>
                    <RevealItem>
                      <div className="flex flex-col items-center md:items-start text-center md:text-left md:border-l md:border-white/10 md:pl-16 transition-transform duration-500 delay-75 group-hover:translate-y-[-4px]">
                        <span className="text-5xl md:text-6xl font-black font-display tracking-tight text-white drop-shadow-[0_0_20px_rgba(255,255,255,0.2)]">
                          94%
                        </span>
                        <span className="mt-4 text-xs font-black uppercase tracking-[0.3em] text-cyan-400">
                          Success rate
                        </span>
                      </div>
                    </RevealItem>
                    <RevealItem>
                      <div className="flex flex-col items-center md:items-start text-center md:text-left md:border-l md:border-white/10 md:pl-16 transition-transform duration-500 delay-150 group-hover:translate-y-[-4px]">
                        <span className="text-5xl md:text-6xl font-black font-display tracking-tight text-white drop-shadow-[0_0_20px_rgba(255,255,255,0.2)]">
                          3 wks
                        </span>
                        <span className="mt-4 text-xs font-black uppercase tracking-[0.3em] text-emerald-400">
                          Avg. time to offer
                        </span>
                      </div>
                    </RevealItem>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </section>

        {/* Features Section */}
        <section id="features" className="relative overflow-hidden pt-32 pb-16 lg:pt-48 lg:pb-24">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <Reveal delay={0.1}>
              <div className="text-center mb-24">
                <span className="text-[10px] font-black font-display uppercase tracking-[0.4em] text-violet-400 opacity-80">
                  The Ecosystem
                </span>
                <h2 className="mt-8 text-5xl font-black font-display tracking-tight text-white md:text-7xl">
                  One platform. <br className="md:hidden" /> <span className="premium-gradient-text">Zero guesswork.</span>
                </h2>
                <p className="mx-auto mt-10 max-w-2xl text-lg text-white/30 font-medium leading-relaxed italic">
                  TrackMate replaces scattered tutorials, outdated roadmaps, and generic interview prep with one intelligent, opinionated system.
                </p>
              </div>
            </Reveal>

            <RevealList delay={0.2}>
              <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:gap-12">
                {/* Card 1 - Violet */}
                <RevealItem>
                  <div className="group relative rounded-[2.5rem] border border-white/[0.04] bg-white/[0.01] p-12 transition-all duration-700 hover:-translate-y-2 hover:bg-white/[0.03] hover:border-violet-500/20">
                    <div className="absolute inset-0 rounded-[2.5rem] bg-gradient-to-br from-violet-500/[0.05] to-transparent opacity-0 transition-opacity duration-700 group-hover:opacity-100" />
                    <div className="relative z-10">
                      <div className="mb-10 flex h-16 w-16 items-center justify-center rounded-2xl bg-violet-600/10 text-violet-400 shadow-[0_0_30px_rgba(124,58,237,0.1)] transition-all duration-700 group-hover:rotate-12 group-hover:scale-110 group-hover:shadow-[0_0_40px_rgba(124,58,237,0.3)]">
                        <Building2 className="h-8 w-8" />
                      </div>
                      <h3 className="text-3xl font-display font-black text-white tracking-tight transition-colors group-hover:text-violet-200">Top Companies Hiring</h3>
                      <p className="mt-8 text-base font-medium leading-relaxed text-white/40 transition-colors group-hover:text-white/60">
                        See the top 3 companies actively hiring for your role — their real problems, hiring process, and exactly what they need you to solve.
                      </p>
                    </div>
                  </div>
                </RevealItem>

                {/* Card 2 - Cyan */}
                <RevealItem>
                  <div className="group relative rounded-[2.5rem] border border-white/[0.04] bg-white/[0.01] p-12 transition-all duration-700 hover:-translate-y-2 hover:bg-white/[0.03] hover:border-cyan-500/20">
                    <div className="absolute inset-0 rounded-[2.5rem] bg-gradient-to-br from-cyan-500/[0.05] to-transparent opacity-0 transition-opacity duration-700 group-hover:opacity-100" />
                    <div className="relative z-10">
                      <div className="mb-10 flex h-16 w-16 items-center justify-center rounded-2xl bg-cyan-600/10 text-cyan-400 shadow-[0_0_30px_rgba(6,182,212,0.1)] transition-all duration-700 group-hover:-rotate-12 group-hover:scale-110 group-hover:shadow-[0_0_40px_rgba(6,182,212,0.3)]">
                        <Map className="h-8 w-8" />
                      </div>
                      <h3 className="text-3xl font-display font-black text-white tracking-tight transition-colors group-hover:text-cyan-200">Custom Roadmap</h3>
                      <p className="mt-8 text-base font-medium leading-relaxed text-white/40 transition-colors group-hover:text-white/60">
                        AI-generated roadmaps with topics, code to write, projects to build, and curated source links — tailored to your exact role and level.
                      </p>
                    </div>
                  </div>
                </RevealItem>

                {/* Card 3 - Emerald */}
                <RevealItem>
                  <div className="group relative rounded-[2.5rem] border border-white/[0.04] bg-white/[0.01] p-12 transition-all duration-700 hover:-translate-y-2 hover:bg-white/[0.03] hover:border-emerald-500/20">
                    <div className="absolute inset-0 rounded-[2.5rem] bg-gradient-to-br from-emerald-500/[0.05] to-transparent opacity-0 transition-opacity duration-700 group-hover:opacity-100" />
                    <div className="relative z-10">
                      <div className="mb-10 flex h-16 w-16 items-center justify-center rounded-2xl bg-emerald-600/10 text-emerald-400 shadow-[0_0_30px_rgba(16,185,129,0.1)] transition-all duration-700 group-hover:rotate-12 group-hover:scale-110 group-hover:shadow-[0_0_40px_rgba(16,185,129,0.3)]">
                        <MessageSquare className="h-8 w-8" />
                      </div>
                      <h3 className="text-3xl font-display font-black text-white tracking-tight transition-colors group-hover:text-emerald-200">Interview Prep</h3>
                      <p className="mt-8 text-base font-medium leading-relaxed text-white/40 transition-colors group-hover:text-white/60">
                        Real interview questions embedded in every topic. By the time you finish, you've prepared hundreds of questions without realizing it.
                      </p>
                    </div>
                  </div>
                </RevealItem>

                {/* Card 4 - Orange */}
                <RevealItem>
                  <div className="group relative rounded-[2.5rem] border border-white/[0.04] bg-white/[0.01] p-12 transition-all duration-700 hover:-translate-y-2 hover:bg-white/[0.03] hover:border-orange-500/20">
                    <div className="absolute inset-0 rounded-[2.5rem] bg-gradient-to-br from-orange-500/[0.05] to-transparent opacity-0 transition-opacity duration-700 group-hover:opacity-100" />
                    <div className="relative z-10">
                      <div className="mb-10 flex h-16 w-16 items-center justify-center rounded-2xl bg-orange-600/10 text-orange-400 shadow-[0_0_30px_rgba(234,88,12,0.1)] transition-all duration-700 group-hover:-rotate-12 group-hover:scale-110 group-hover:shadow-[0_0_40px_rgba(234,88,12,0.3)]">
                        <Briefcase className="h-8 w-8" />
                      </div>
                      <h3 className="text-3xl font-display font-black text-white tracking-tight transition-colors group-hover:text-orange-200">Junior to Senior</h3>
                      <p className="mt-8 text-base font-medium leading-relaxed text-white/40 transition-colors group-hover:text-white/60">
                        Follow a structured path from junior to senior. When you're ready, see real job listings matched to your skills and apply directly.
                      </p>
                    </div>
                  </div>
                </RevealItem>
              </div>
            </RevealList>
          </div>
        </section>

        {/* Simple Process Section */}
        <section id="how-it-works" className="relative w-full py-32 lg:py-56 overflow-hidden bg-[#08060f]">
          <div className="relative w-full max-w-7xl mx-auto px-6">
            <Reveal delay={0.1}>
              <div className="flex flex-col items-center text-center">
                <span className="text-[10px] font-black font-display uppercase tracking-[0.4em] text-cyan-400 opacity-80">
                  The Journey
                </span>
                <h2 className="mt-8 font-display text-5xl font-black tracking-tight text-white md:text-7xl">
                  From zero to hired <br className="md:hidden" /> <span className="bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent drop-shadow-[0_0_15px_rgba(34,211,238,0.4)]">in 4 steps</span>
                </h2>
                <p className="mt-10 max-w-2xl text-lg font-medium text-white/30 leading-relaxed italic">
                  No more piecing together bootcamps, YouTube playlists, and LeetCode. TrackMate handles it all — intelligently.
                </p>
              </div>
            </Reveal>

            <RevealList delay={0.3}>
              <div className="mt-32 grid grid-cols-1 gap-16 md:grid-cols-2 lg:grid-cols-4">
                {/* Step 1 */}
                <RevealItem>
                  <div className="relative group">
                    <div className="relative mb-12 flex h-28 w-28 items-center justify-center rounded-[2rem] border border-white/[0.04] bg-white/[0.01] transition-all duration-700 group-hover:border-violet-500/50 group-hover:bg-violet-500/[0.05] group-hover:shadow-[0_0_60px_rgba(124,58,237,0.1)] group-hover:-translate-y-2">
                      <div className="absolute -top-2 -right-2 h-8 w-11 rounded-xl bg-[#08060f] border border-white/10 flex items-center justify-center text-[10px] font-black text-white/30 transition-colors group-hover:text-violet-400 group-hover:border-violet-500/30">01</div>
                      <Search className="h-12 w-12 text-violet-400/50 transition-all duration-700 group-hover:scale-110 group-hover:text-violet-400 group-hover:rotate-6" />
                    </div>
                    <h3 className="text-2xl font-display font-black text-white tracking-tight transition-colors group-hover:text-violet-100">Pick your target</h3>
                    <p className="mt-6 text-sm font-medium leading-relaxed text-white/30 group-hover:text-white/50 transition-all">
                      Tell TrackMate what you want to become — AI Engineer, Frontend Dev, Data Scientist, or any other tech role.
                    </p>
                  </div>
                </RevealItem>

                {/* Step 2 */}
                <RevealItem>
                  <div className="relative group">
                    <div className="relative mb-12 flex h-28 w-28 items-center justify-center rounded-[2rem] border border-white/[0.04] bg-white/[0.01] transition-all duration-700 group-hover:border-cyan-500/50 group-hover:bg-cyan-500/[0.05] group-hover:shadow-[0_0_60px_rgba(6,182,212,0.1)] group-hover:-translate-y-2">
                      <div className="absolute -top-2 -right-2 h-8 w-11 rounded-xl bg-[#08060f] border border-white/10 flex items-center justify-center text-[10px] font-black text-white/30 transition-colors group-hover:text-cyan-400 group-hover:border-cyan-500/30">02</div>
                      <Cpu className="h-12 w-12 text-cyan-400/50 transition-all duration-700 group-hover:scale-110 group-hover:text-cyan-400 group-hover:-rotate-6" />
                    </div>
                    <h3 className="text-2xl font-display font-black text-white tracking-tight transition-colors group-hover:text-cyan-100">AI builds your path</h3>
                    <p className="mt-6 text-sm font-medium leading-relaxed text-white/30 group-hover:text-white/50 transition-all">
                      Our AI analyzes the market, identifies hiring companies, and generates a custom roadmap with real projects.
                    </p>
                  </div>
                </RevealItem>

                {/* Step 3 */}
                <RevealItem>
                  <div className="relative group">
                    <div className="relative mb-12 flex h-28 w-28 items-center justify-center rounded-[2rem] border border-white/[0.04] bg-white/[0.01] transition-all duration-700 group-hover:border-emerald-500/50 group-hover:bg-emerald-500/[0.05] group-hover:shadow-[0_0_60px_rgba(16,185,129,0.1)] group-hover:-translate-y-2">
                      <div className="absolute -top-2 -right-2 h-8 w-11 rounded-xl bg-[#08060f] border border-white/10 flex items-center justify-center text-[10px] font-black text-white/30 transition-colors group-hover:text-emerald-400 group-hover:border-emerald-500/30">03</div>
                      <BookOpen className="h-12 w-12 text-emerald-400/50 transition-all duration-700 group-hover:scale-110 group-hover:text-emerald-400 group-hover:rotate-6" />
                    </div>
                    <h3 className="text-2xl font-display font-black text-white tracking-tight transition-colors group-hover:text-emerald-100">Learn & practice</h3>
                    <p className="mt-6 text-sm font-medium leading-relaxed text-white/30 group-hover:text-white/50 transition-all">
                      Follow your roadmap topic by topic. Write code, build projects, and answer interview questions as you progress.
                    </p>
                  </div>
                </RevealItem>

                {/* Step 4 */}
                <RevealItem>
                  <div className="relative group">
                    <div className="relative mb-12 flex h-28 w-28 items-center justify-center rounded-[2rem] border border-white/[0.04] bg-white/[0.01] transition-all duration-700 group-hover:border-orange-500/50 group-hover:bg-orange-500/[0.05] group-hover:shadow-[0_0_60px_rgba(249,115,22,0.1)] group-hover:-translate-y-2">
                      <div className="absolute -top-2 -right-2 h-8 w-11 rounded-xl bg-[#08060f] border border-white/10 flex items-center justify-center text-[10px] font-black text-white/30 transition-colors group-hover:text-orange-400 group-hover:border-orange-500/30">04</div>
                      <Rocket className="h-12 w-12 text-orange-400/50 transition-all duration-700 group-hover:scale-110 group-hover:text-orange-400 group-hover:-rotate-6" />
                    </div>
                    <h3 className="text-2xl font-display font-black text-white tracking-tight transition-colors group-hover:text-orange-100">Land the job</h3>
                    <p className="mt-6 text-sm font-medium leading-relaxed text-white/30 group-hover:text-white/50 transition-all">
                      When you're ready, browse curated job listings matched to your skills and apply with confidence.
                    </p>
                  </div>
                </RevealItem>
              </div>
            </RevealList>
          </div>
        </section>

        {/* Highlight Section: The "No Extra Phase" Interview Prep */}
        <section className="relative w-full py-24 lg:py-32 overflow-hidden bg-[#08060f]">
          <div className="relative w-auto max-w-5xl mx-auto px-6">
            <Reveal delay={0.1} y={40}>
              <div className="relative rounded-[3rem] border border-white/[0.05] bg-gradient-to-b from-white/[0.03] to-transparent p-12 lg:p-20 overflow-hidden group">
                {/* Background Glow */}
                <div className="absolute -top-24 -right-24 h-96 w-96 bg-brand-violet/10 blur-[100px] pointer-events-none" />
                <div className="absolute -bottom-24 -left-24 h-96 w-96 bg-brand-cyan/10 blur-[100px] pointer-events-none" />
                
                <div className="relative z-10 flex flex-col items-center text-center">
                  <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-white/5 border border-white/10 mb-8">
                    <Sparkles className="h-8 w-8 text-violet-400 animate-pulse" />
                  </div>
                  
                  <h2 className="font-display text-3xl md:text-5xl font-black tracking-tight text-white leading-tight">
                    There is no <span className="text-red-500/80 drop-shadow-[0_0_15px_rgba(239,68,68,0.4)] px-2">"Interview Prep Phase"</span>
                  </h2>
                  
                  <p className="mt-8 text-xl text-white/60 font-medium max-w-2xl leading-relaxed">
                    Most platforms make you study, then prepare. <span className="text-white">We built the prep into the learning.</span> 
                    As soon as you complete a topic, you're hit with interview questions specifically about what you just learned.
                  </p>

                  <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8 w-full text-left">
                    <RevealItem>
                      <div className="p-8 rounded-2xl border border-white/[0.05] bg-white/[0.02] flex flex-col justify-between h-full">
                        <div>
                          <div className="text-white/40 font-bold mb-4 flex items-center gap-2 text-xs uppercase tracking-widest">
                            <div className="h-1.5 w-1.5 rounded-full bg-white/20" />
                            Other Platforms
                          </div>
                          <div className="relative mb-6 p-4 rounded-xl bg-white/[0.03] border border-white/5">
                            <div className="h-2 w-24 bg-white/10 rounded mb-2" />
                            <div className="h-2 w-32 bg-white/10 rounded" />
                            <div className="absolute -bottom-2 -right-2 text-[10px] bg-red-500/10 text-red-400 px-2 py-1 rounded-md border border-red-500/20">Forgotten by Phase 4</div>
                          </div>
                          <p className="text-sm text-white/40 leading-relaxed">You learn a concept in Week 1, but don't see interview questions until Week 12. By then, the nuances are gone.</p>
                        </div>
                      </div>
                    </RevealItem>

                    <RevealItem>
                      <div className="p-8 rounded-2xl border border-emerald-500/20 bg-emerald-500/[0.04] flex flex-col justify-between h-full shadow-[0_0_50px_rgba(16,185,129,0.05)]">
                        <div>
                          <div className="text-emerald-400 font-bold mb-4 flex items-center gap-2 text-xs uppercase tracking-widest">
                            <div className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
                            The TrackMate Loop
                          </div>
                          
                          {/* Topic Card Mockup */}
                          <div className="mb-6 p-4 rounded-xl bg-emerald-500/10 border border-emerald-500/20 space-y-3">
                            <div className="flex items-center justify-between">
                              <div className="h-2 w-20 bg-emerald-400/40 rounded" />
                              <div className="h-4 w-4 rounded-full bg-emerald-500 flex items-center justify-center">
                                <Zap className="h-2 w-2 text-[#08060f]" fill="#08060f" />
                              </div>
                            </div>
                            <div className="h-px w-full bg-emerald-500/10" />
                            <div className="py-1">
                              <div className="text-[10px] text-emerald-300 font-bold mb-1">REAL INTERVIEW QUESTION:</div>
                              <div className="text-[11px] text-white/90">"Explain the memory implications of this specific pattern..."</div>
                            </div>
                          </div>

                          <p className="text-sm text-white/80 leading-relaxed">Learn a topic. Build the feature. <span className="text-emerald-400 font-bold text-base block mt-2">Immediately face the interview questions.</span> While it's fresh, while you're focused.</p>
                        </div>
                      </div>
                    </RevealItem>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </section>

        {/* Cinematic Visual Section */}
        <section className="relative w-full py-48 lg:py-64 overflow-hidden bg-[#08060f]">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1200px] h-[1200px] bg-violet-600/5 blur-[180px] pointer-events-none" />
          
          <div className="relative w-full max-w-7xl mx-auto px-6">
            <Reveal delay={0.1}>
              <div className="mx-auto max-w-2xl text-center mb-32">
                <span className="text-[10px] font-black font-display uppercase tracking-[0.5em] text-violet-400 opacity-80">
                  The Progression
                </span>
                <h2 className="mt-8 font-display text-5xl font-black tracking-tight text-white md:text-7xl">
                  The Career <span className="premium-gradient-text text-nowrap">Ladder.</span>
                </h2>
                <p className="mt-10 text-lg font-medium text-white/30 leading-relaxed italic">
                  Visualize your journey from Level 1 to Senior Excellence. Each rung is a milestone in your evolution.
                </p>
              </div>
            </Reveal>

            <div className="relative flex justify-center">
              {/* The Ladder Image with Enhanced Premium Styling */}
              <Reveal delay={0.3} y={50}>
                <div className="relative group max-w-5xl w-full">
                  {/* HUD Elements around the ladder */}
                  <div className="absolute -left-20 top-20 hidden lg:block opacity-20 transition-opacity duration-1000">
                    <div className="h-px w-32 bg-gradient-to-r from-violet-500 to-transparent shadow-[0_0_10px_rgba(124,58,237,0.5)]" />
                    <div className="mt-2 text-[8px] font-black tracking-[0.3em] text-violet-400 uppercase">System Active</div>
                  </div>
                  <div className="absolute -right-20 bottom-40 hidden lg:block opacity-20 transition-opacity duration-1000">
                    <div className="h-px w-32 bg-gradient-to-l from-cyan-500 to-transparent shadow-[0_0_10px_rgba(6,182,212,0.5)]" />
                    <div className="mt-2 text-right text-[8px] font-black tracking-[0.3em] text-cyan-400 uppercase">Trajectory Locked</div>
                  </div>

                  <div className="relative aspect-[21/9] w-full overflow-hidden rounded-[4rem]">
                    {/* Blurred Borders / Vignette / Edge Fading */}
                    <div className="absolute inset-0 z-20 pointer-events-none shadow-[inset_0_0_150px_80px_#08060f]" />
                    
                    <img 
                      src="/images/ladder-roadmap.png" 
                      alt="Career Roadmap Ladder" 
                      className="w-full h-full object-cover opacity-60 transition-all duration-1000"
                      style={{ maskImage: 'radial-gradient(ellipse at center, black 40%, transparent 90%)' }}
                    />
                    
                    {/* Glowing Mesh Overlay */}
                    <div className="absolute inset-0 z-10 opacity-30 bg-[radial-gradient(circle_at_50%_50%,rgba(124,58,237,0.2),transparent_70%)]" />
                  </div>
                  
                  {/* HUD Labels */}
                  <div className="absolute top-[85%] left-[59%] flex items-center gap-4 transition-all duration-700 z-30">
                    <div className="h-px w-[90px] bg-white/70 shadow-[0_0_20px_rgba(255,255,255,0.8)]" />
                    <div className="px-4 py-1.5 rounded-sm border border-white/20 bg-black/60 backdrop-blur-xl">
                      <span className="block text-[8px] font-black text-white/40 tracking-widest uppercase mb-0.5">Origin Point</span>
                      <span className="text-xs font-black text-white tracking-[0.2em]">LEVEL 01</span>
                    </div>
                  </div>

                  <div className="absolute top-[50%] left-[67%] flex items-center gap-4 transition-all duration-700 z-30">
                    <div className="h-px w-[100px] bg-white/60 shadow-[0_0_20px_rgba(255,255,255,0.7)]" />
                    <div className="px-4 py-1.5 rounded-sm border border-white/10 bg-black/40 backdrop-blur-xl">
                      <span className="text-xs font-black text-white/60 tracking-widest uppercase">Specialization Phase</span>
                    </div>
                  </div>

                  <div className="absolute top-[35%] right-[48%] flex items-center flex-row-reverse gap-4 transition-all duration-700 z-30">
                    <div className="h-px w-[150px] bg-cyan-500/80 shadow-[0_0_25px_rgba(34,211,238,0.9)]" />
                    <div className="px-5 py-2 rounded-sm border border-cyan-500/30 bg-black/60 backdrop-blur-xl shadow-[0_0_30px_rgba(6,182,212,0.1)]">
                      <span className="block text-[8px] font-black text-cyan-400/50 tracking-widest uppercase mb-0.5">Career Checkpoint</span>
                      <span className="text-sm font-black text-cyan-400 tracking-[0.2em]">SENIOR ENGINEER</span>
                    </div>
                  </div>

                  <div className="absolute top-[1%] right-[26%] flex items-center flex-row-reverse gap-6 transition-all duration-700 z-30">
                    <div className="h-px w-[150px] bg-gradient-to-l from-orange-500 to-transparent shadow-[0_0_30px_rgba(249,115,22,0.9)]" />
                    <div className="relative">
                      <div className="absolute inset-0 bg-orange-500/20 blur-2xl rounded-full" />
                      <div className="relative px-6 py-3 rounded-sm border border-orange-500/50 bg-orange-950/60 backdrop-blur-2xl shadow-[0_0_40px_rgba(249,115,22,0.3)]">
                        <span className="block text-[8px] font-black text-orange-400 tracking-[0.4em] uppercase mb-1.5 animate-pulse">Final Objective</span>
                        <span className="text-lg font-black text-white tracking-[0.25em] whitespace-nowrap">FUTURE YOU</span>
                      </div>
                    </div>
                  </div>
                </div>
              </Reveal>
            </div>
          </div>
        </section>

        {/* Final CTA Section */}
        <section className="relative w-full py-24 lg:py-40 overflow-hidden bg-[#08060f]">
          {/* Subtle Ambient Glows */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-brand-violet/5 blur-[120px] pointer-events-none" />
          
          <div className="relative z-10 mx-auto max-w-7xl px-6 text-center">
            <Reveal delay={0.1}>
              <div className="flex flex-col items-center">
                <span className="inline-block rounded-full border border-white/5 bg-white/[0.03] px-4 py-1.5 text-[10px] font-display font-black uppercase tracking-[0.2em] text-violet-400 shadow-[0_0_20px_rgba(124,58,237,0.1)]">
                  Start Today — It's Free
                </span>
                
                <h2 className="mt-8 font-display text-4xl font-extrabold tracking-tight text-white sm:text-6xl lg:text-7xl max-w-4xl leading-[1.1]">
                  Your dream tech career is <span className="bg-gradient-to-r from-violet-400 via-fuchsia-400 to-cyan-400 bg-clip-text text-transparent drop-shadow-[0_0_25px_rgba(167,139,250,0.3)]">closer than you think</span>
                </h2>
                
                <p className="mt-8 max-w-2xl text-lg font-medium text-white/40 leading-relaxed italic">
                  Join thousands of developers who stopped guessing and started following a clear, AI-powered path to their target role.
                </p>

                <div className="mt-12 flex flex-col items-center gap-6">
                  <button className="group relative flex items-center gap-3 rounded-2xl bg-linear-to-br from-brand-violet to-brand-indigo px-10 py-5 text-lg font-display font-black text-white shadow-[0_20px_50px_rgba(124,58,237,0.3)] transition-all duration-300 hover:scale-105 hover:shadow-[0_25px_60px_rgba(124,58,237,0.5)] active:scale-95">
                    Start Your Career Path — It's Free
                    <ArrowRight className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
                  </button>
                  
                  <p className="text-sm font-medium text-white/20 tracking-wide uppercase">
                    No credit card required · Takes 2 minutes to set up
                  </p>
                </div>
              </div>
            </Reveal>
          </div>
        </section>

        {/* Footer */}
        <footer className="border-t border-white/[0.04] bg-[#08060f] py-12">
          <div className="mx-auto max-w-7xl px-6 text-center md:flex md:items-center md:justify-between">
            <div className="flex items-center justify-center gap-2.5 md:justify-start">
              <div className="h-7 w-7 rounded bg-gradient-to-br from-[#7c3aed] to-[#4f46e5] flex items-center justify-center shadow-[0_0_10px_rgba(124,58,237,0.3)]">
                <Zap className="h-4 w-4 text-white" fill="white" />
              </div>
              <span className="text-lg font-display font-black tracking-tight text-white">TrackMate</span>
            </div>
            <p className="mt-8 text-sm text-white/40 md:mt-0">
              © 2026 TrackMate AI. Built for the next generation of engineers.
            </p>
          </div>
        </footer>
      </main>
    </div>
  );
}
