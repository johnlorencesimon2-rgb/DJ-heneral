/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from "motion/react";

export default function App() {
  const modules = [
    {
      title: "DJ Basics",
      desc: "Understand gear, setup, tempo, phrasing, and how to build confidence behind the decks.",
    },
    {
      title: "Beatmatching",
      desc: "Train your ears, master timing, and create smooth transitions without sounding messy.",
    },
    {
      title: "Mixing Styles",
      desc: "Learn clean mixes, quick cuts, EQ blending, drop swaps, and crowd-friendly transitions.",
    },
    {
      title: "Set Building",
      desc: "Create your identity, organize tracks, and build a DJ set that feels exciting and original.",
    },
  ];

  const mentor = {
    name: "DJ Ang Heneral",
    title: "Lead Instructor & Performance Mentor",
    bio: "An officer of Aguinaldo's army turned DJ. Ang Heneral brings a unique fusion of historical discipline and modern electronic energy. Known for his high-intensity sets and motivational content, he has built a community of thousands around the philosophy of 'Leveling Up Your Mix'.",
    credentials: [
      "Professional DJ & Content Creator",
      "45K+ TikTok Likes & 9K+ Followers",
      "Specialist in Performance Development",
      "Expert in Phrasing & Crowd Energy"
    ],
    socials: {
      tiktok: "https://www.tiktok.com/@hnral_dj",
      instagram: "https://www.instagram.com/hnral_dj"
    }
  };

  const features = [
    "Beginner-friendly lessons",
    "Step-by-step DJ workflow",
    "Practice routines for muscle memory",
    "Track selection and music discovery",
    "Live coaching style structure",
    "Performance-ready techniques",
  ];

  const plans = [
    {
      name: "Program A: Basic",
      price: "₱10,000",
      tag: "Fundamentals of Mixing",
      items: ["Gear & Setup Mastery", "Beatmatching Essentials", "Phrasing & Timing", "Basic EQ Blending", "8-Week Roadmap"],
      color: "border-white/10"
    },
    {
      name: "Program B: Advanced",
      price: "₱15,000",
      tag: "Professional Performance",
      items: ["Advanced Mixing Styles", "Quick Cuts & Drop Swaps", "Live Set Building", "Crowd Energy Mastery", "Performance Branding"],
      color: "border-yellow-400/50"
    },
  ];

  const testimonials = [
    {
      name: "Mark Rivera",
      role: "Club DJ Resident",
      text: "Program B changed everything. I went from bedroom DJing to a weekend residency in just 3 months. The phrasing techniques are a game changer.",
      video: "https://www.youtube.com/embed/dQw4w9WgXcQ" // Placeholder
    },
    {
      name: "Sarah Chen",
      role: "Mobile DJ",
      text: "The 1-on-1 Zoom call was what sold me. DJ Ang Heneral actually listened to my struggles and pointed me to the right program. Highly recommend!",
      video: "https://www.youtube.com/embed/dQw4w9WgXcQ" // Placeholder
    },
    {
      name: "Kevin Santos",
      role: "Aspiring Producer",
      text: "I thought I knew how to mix, but Program A showed me the fundamentals I was missing. My sets sound 10x cleaner now.",
      video: "https://www.youtube.com/embed/dQw4w9WgXcQ" // Placeholder
    }
  ];

  return (
    <div className="min-h-screen bg-black text-white selection:bg-yellow-400 selection:text-black font-sans">
      {/* Decorative Grid Background */}
      <div className="fixed inset-0 z-0 opacity-20 pointer-events-none" 
           style={{ backgroundImage: 'radial-gradient(#ffffff22 1px, transparent 1px)', backgroundSize: '40px 40px' }} />

      <header className="sticky top-0 z-40 border-b border-white/10 bg-black/80 backdrop-blur">
        <div className="bg-red-600 py-2 text-center text-[10px] font-black uppercase tracking-[0.3em] text-white">
          Limited Slots: Only 5 Strategy Calls left for this week
        </div>
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex items-center gap-4"
          >
            <div>
              <div className="text-xl font-black tracking-[0.25em] flex items-center gap-2">
                <span className="text-yellow-400">DJ</span> ACADEMY
              </div>
              <div className="text-[10px] uppercase tracking-widest text-white/40">Level Up Your Mix</div>
            </div>
            <div className="hidden sm:flex items-center gap-2 px-3 py-1 rounded-full bg-red-500/10 border border-red-500/20">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-red-500"></span>
              </span>
              <span className="text-[10px] font-bold text-red-500 tracking-tighter uppercase">Live Now</span>
            </div>
          </motion.div>
          <nav className="hidden gap-8 text-[11px] font-bold uppercase tracking-widest text-white/50 md:flex items-center">
            <a href="#about" className="transition hover:text-yellow-400">About</a>
            <a href="#modules" className="transition hover:text-yellow-400">Modules</a>
            <a href="#mentor" className="transition hover:text-yellow-400">Mentor</a>
            <a href="#testimonials" className="transition hover:text-yellow-400">Testimonials</a>
            <a href="#plans" className="transition hover:text-yellow-400">Programs</a>
            <a href="#join" className="px-4 py-2 bg-yellow-400 text-black rounded hover:bg-yellow-300 transition">Book Call</a>
            <button className="text-white/30 hover:text-white transition border-l border-white/10 pl-8">Student Login</button>
          </nav>
        </div>
      </header>

      <section className="relative pt-20 pb-32 overflow-hidden">
        {/* Decorative Soundwave elements */}
        <div className="absolute top-1/2 -right-20 -translate-y-1/2 opacity-10 pointer-events-none">
          <div className="flex items-end gap-1 h-64">
            {[...Array(20)].map((_, i) => (
              <motion.div 
                key={i}
                animate={{ height: [40, 120, 80, 200, 60, 150][i % 6] }}
                transition={{ repeat: Infinity, duration: 1 + (i * 0.1), repeatType: "reverse" }}
                className="w-2 bg-yellow-400 rounded-full"
              />
            ))}
          </div>
        </div>

        <div className="mx-auto max-w-7xl px-6 relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl"
          >
            <div className="mb-6 inline-flex items-center gap-3 rounded-md border border-yellow-400/30 bg-yellow-400/5 px-4 py-1.5 text-[10px] font-bold uppercase tracking-[0.4em] text-yellow-400">
              <span className="w-2 h-2 rounded-full bg-yellow-400 animate-pulse" />
              Professional DJ Training
            </div>
            <h1 className="text-6xl font-black leading-[0.9] md:text-8xl uppercase italic">
              Don't just play <br />
              <span className="text-yellow-400">The Music.</span> <br />
              Control it.
            </h1>
            <p className="mt-8 max-w-xl text-lg leading-relaxed text-white/60">
              Stop guessing. Get a personalized 1-on-1 roadmap directly from DJ Ang Heneral. Master the decks with a battle-tested system.
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <a
                href="#join"
                className="group relative overflow-hidden rounded-sm bg-yellow-400 px-8 py-4 text-sm font-black uppercase tracking-widest text-black transition-all hover:pr-12"
              >
                <span className="relative z-10">Book Free Zoom Call</span>
                <span className="absolute right-4 top-1/2 -translate-y-1/2 opacity-0 transition-all group-hover:opacity-100">→</span>
              </a>
              <a
                href="#modules"
                className="rounded-sm border-2 border-white px-8 py-4 text-sm font-black uppercase tracking-widest text-white transition hover:bg-white hover:text-black"
              >
                View Programs
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      <section id="about" className="border-y border-white/10 bg-neutral-950">
        <div className="mx-auto grid max-w-7xl gap-16 px-6 py-24 md:grid-cols-2 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="text-xs font-bold uppercase tracking-[0.4em] text-red-500 mb-4">The Philosophy</div>
            <h2 className="text-4xl font-black uppercase italic leading-none md:text-6xl">
              Structure <br />
              <span className="text-white/30">Over</span> <br />
              Guesswork.
            </h2>
            <p className="mt-8 text-lg text-white/60 leading-relaxed">
              We strip away the fluff. No random tutorials. Just a high-intensity workflow designed to build muscle memory and creative instinct.
            </p>
            <div className="mt-12 grid grid-cols-2 gap-8">
              <div>
                <div className="text-3xl font-black text-yellow-400">01</div>
                <div className="mt-2 text-xs font-bold uppercase tracking-widest text-white/40">Ear Training</div>
              </div>
              <div>
                <div className="text-3xl font-black text-yellow-400">02</div>
                <div className="mt-2 text-xs font-bold uppercase tracking-widest text-white/40">Gear Mastery</div>
              </div>
            </div>
          </motion.div>
          
          <div className="grid gap-4">
            {features.map((item, idx) => (
              <motion.div 
                key={item}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="flex items-center gap-4 p-4 border border-white/5 bg-white/[0.02] hover:border-yellow-400/30 transition-colors group"
              >
                <div className="w-1 h-8 bg-yellow-400 group-hover:h-full transition-all" />
                <span className="text-sm font-bold uppercase tracking-wider text-white/80">{item}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section id="why" className="mx-auto max-w-7xl px-6 py-24 border-t border-white/10">
        <div className="grid gap-12 md:grid-cols-3">
          <div className="space-y-4">
            <div className="w-12 h-12 bg-yellow-400/10 border border-yellow-400/20 flex items-center justify-center text-yellow-400 font-black italic">01</div>
            <h3 className="text-xl font-black uppercase italic">Elite Authority</h3>
            <p className="text-sm text-white/50 leading-relaxed">Learn from "The Commander" himself. No generic tutorials—only battle-tested techniques used in real clubs.</p>
          </div>
          <div className="space-y-4">
            <div className="w-12 h-12 bg-red-600/10 border border-red-600/20 flex items-center justify-center text-red-600 font-black italic">02</div>
            <h3 className="text-xl font-black uppercase italic">Zero Risk</h3>
            <p className="text-sm text-white/50 leading-relaxed">Your journey starts with a free, no-obligation Zoom call. We ensure the program fits your goals before you invest a single peso.</p>
          </div>
          <div className="space-y-4">
            <div className="w-12 h-12 bg-white/10 border border-white/20 flex items-center justify-center text-white font-black italic">03</div>
            <h3 className="text-xl font-black uppercase italic">Rapid Results</h3>
            <p className="text-sm text-white/50 leading-relaxed">Our psychology-based curriculum builds muscle memory 3x faster than traditional methods. Be stage-ready in 8 weeks.</p>
          </div>
        </div>
      </section>

      <section id="modules" className="mx-auto max-w-7xl px-6 py-24">
        <div className="mb-16">
          <div className="text-xs font-bold uppercase tracking-[0.4em] text-yellow-400 mb-4">Curriculum</div>
          <h2 className="text-5xl font-black uppercase italic">The Path to Pro</h2>
        </div>

        <div className="grid gap-1 md:grid-cols-2 lg:grid-cols-4">
          {modules.map((module, index) => (
            <motion.div 
              key={module.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group relative aspect-square border border-white/10 p-8 flex flex-col justify-between hover:bg-yellow-400 transition-all duration-500"
            >
              <div className="text-4xl font-black text-white/10 group-hover:text-black/20 transition-colors">0{index + 1}</div>
              <div>
                <h3 className="text-xl font-black uppercase group-hover:text-black transition-colors">{module.title}</h3>
                <p className="mt-4 text-xs leading-relaxed text-white/50 group-hover:text-black/70 transition-colors">{module.desc}</p>
              </div>
              <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity">
                <svg className="w-6 h-6 text-black" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="bg-neutral-950 py-16 border-y border-white/5">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-black text-yellow-400 tracking-tighter">500+</div>
              <div className="text-[10px] font-bold uppercase tracking-widest text-white/30 mt-2">Students Trained</div>
            </div>
            <div>
              <div className="text-4xl font-black text-yellow-400 tracking-tighter">98%</div>
              <div className="text-[10px] font-bold uppercase tracking-widest text-white/30 mt-2">Success Rate</div>
            </div>
            <div>
              <div className="text-4xl font-black text-yellow-400 tracking-tighter">15+</div>
              <div className="text-[10px] font-bold uppercase tracking-widest text-white/30 mt-2">Countries Reached</div>
            </div>
            <div>
              <div className="text-4xl font-black text-yellow-400 tracking-tighter">24/7</div>
              <div className="text-[10px] font-bold uppercase tracking-widest text-white/30 mt-2">Community Support</div>
            </div>
          </div>
        </div>
      </section>

      <section id="mentor" className="border-t border-white/10 bg-neutral-950">
        <div className="mx-auto max-w-7xl px-6 py-24">
          <div className="grid gap-16 md:grid-cols-[0.8fr_1.2fr] items-center">
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="relative aspect-[3/4] overflow-hidden rounded-sm border-2 border-yellow-400/30 group"
            >
              <img 
                src="https://picsum.photos/seed/dj-heneral/800/1200" 
                alt="DJ Ang Heneral" 
                className="h-full w-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-60" />
              <div className="absolute bottom-6 left-6">
                <div className="text-xs font-black uppercase tracking-widest text-yellow-400">The Commander</div>
              </div>
            </motion.div>

            <div>
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <div className="text-xs font-bold uppercase tracking-[0.4em] text-red-500 mb-4">Meet Your Mentor</div>
                <h2 className="text-5xl font-black uppercase italic leading-none md:text-7xl">
                  {mentor.name}
                </h2>
                <div className="mt-4 text-sm font-bold uppercase tracking-widest text-white/40">{mentor.title}</div>
                
                <p className="mt-8 text-lg text-white/60 leading-relaxed">
                  {mentor.bio}
                </p>

                <div className="mt-10 grid gap-4 sm:grid-cols-2">
                  {mentor.credentials.map((cred, i) => (
                    <div key={i} className="flex items-center gap-3 text-sm font-bold uppercase tracking-wider text-white/80">
                      <div className="w-1.5 h-1.5 bg-red-500" />
                      {cred}
                    </div>
                  ))}
                </div>

                <div className="mt-12 flex gap-6">
                  <a 
                    href={mentor.socials.tiktok} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-xs font-black uppercase tracking-widest text-white hover:text-yellow-400 transition"
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.03 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.9-.32-1.98-.23-2.81.31-.75.42-1.24 1.25-1.33 2.1-.1.7.1 1.41.47 2.01.41.66 1.19 1.14 1.97 1.3 1.05.27 2.2.07 3.11-.52.99-.6 1.47-1.74 1.54-2.86.01-3.89.01-7.78.01-11.67z"/>
                    </svg>
                    TikTok
                  </a>
                  <a 
                    href={mentor.socials.instagram} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-xs font-black uppercase tracking-widest text-white hover:text-yellow-400 transition"
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 1.366.062 2.633.332 3.608 1.308.975.975 1.245 2.242 1.308 3.608.058 1.266.07 1.646.07 4.85s-.012 3.584-.07 4.85c-.062 1.366-.332 2.633-1.308 3.608-.975.975-2.242 1.245-3.608 1.308-1.266.058-1.646.07-4.85.07s-3.584-.012-4.85-.07c-1.366-.062-2.633-.332-3.608-1.308-.975-.975-1.245-2.242-1.308-3.608-.058-1.266-.07-1.646-.07-4.85s.012-3.584.07-4.85c.062-1.366.332-2.633 1.308-3.608.975-.975 2.242-1.245 3.608-1.308 1.266-.058 1.646-.07 4.85-.07zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.272 2.69.072 7.053.014 8.333 0 8.741 0 12s.014 3.667.072 4.947c.2 4.353 2.615 6.768 6.981 6.968 1.28.058 1.688.072 4.947.072s3.667-.014 4.947-.072c4.351-.2 6.765-2.614 6.965-6.968.058-1.28.072-1.688.072-4.947s-.014-3.667-.072-4.947c-.2-4.353-2.615-6.768-6.981-6.968C15.667.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
                    </svg>
                    Instagram
                  </a>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      <section id="testimonials" className="mx-auto max-w-7xl px-6 py-24 border-t border-white/10">
        <div className="mb-16">
          <div className="text-xs font-bold uppercase tracking-[0.4em] text-yellow-400 mb-4">Success Stories</div>
          <h2 className="text-5xl font-black uppercase italic">From Bedroom to Stage</h2>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          {testimonials.map((t, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-neutral-900 border border-white/5 p-6 rounded-sm flex flex-col gap-6"
            >
              <div className="aspect-video bg-black rounded-sm overflow-hidden border border-white/10">
                <iframe 
                  className="w-full h-full"
                  src={t.video}
                  title={`Testimonial from ${t.name}`}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
              <div className="flex-grow">
                <div className="flex gap-1 mb-3">
                  {[...Array(5)].map((_, star) => (
                    <svg key={star} className="w-3 h-3 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="text-sm text-white/70 italic leading-relaxed">"{t.text}"</p>
              </div>
              <div className="pt-6 border-t border-white/5 flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-yellow-400/20 flex items-center justify-center font-black text-yellow-400 text-xs">
                  {t.name.split(' ').map(n => n[0]).join('')}
                </div>
                <div>
                  <div className="text-xs font-black uppercase tracking-widest text-white">{t.name}</div>
                  <div className="text-[10px] font-bold uppercase tracking-widest text-white/30">{t.role}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="bg-yellow-400 py-12 overflow-hidden">
        <div className="flex whitespace-nowrap animate-marquee">
          {[...Array(10)].map((_, i) => (
            <div key={i} className="flex items-center gap-8 px-4">
              <span className="text-4xl font-black text-black uppercase italic tracking-tighter">BEATMATCHING</span>
              <span className="text-4xl font-black text-black/20 uppercase italic tracking-tighter">PHRASING</span>
              <span className="text-4xl font-black text-black uppercase italic tracking-tighter">MIXING</span>
              <span className="text-4xl font-black text-black/20 uppercase italic tracking-tighter">PERFORMANCE</span>
            </div>
          ))}
        </div>
      </section>

      <section id="plans" className="mx-auto max-w-7xl px-6 py-24">
        <div className="text-center mb-16">
          <div className="text-xs font-bold uppercase tracking-[0.4em] text-red-500 mb-4">Pricing</div>
          <h2 className="text-5xl font-black uppercase italic">Pick Your Gear</h2>
        </div>

        <div className="grid gap-8 lg:grid-cols-2 max-w-4xl mx-auto">
          {plans.map((plan, idx) => (
            <motion.div 
              key={plan.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className={`relative border-2 ${plan.color} p-10 flex flex-col bg-white/[0.02] hover:bg-white/[0.04] transition-all`}
            >
              {idx === 1 && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-yellow-400 text-black text-[10px] font-black uppercase px-4 py-1 tracking-widest">
                  Most Advanced
                </div>
              )}
              <h3 className="text-2xl font-black uppercase italic">{plan.name}</h3>
              <div className="mt-2 text-xs font-bold text-yellow-400 uppercase tracking-widest">{plan.tag}</div>
              <div className="mt-6 flex items-baseline gap-2">
                <span className="text-5xl font-black tracking-tighter">{plan.price}</span>
                <span className="text-xs font-bold text-white/40 uppercase tracking-widest">/ Enrollment</span>
              </div>
              <div className="mt-10 space-y-4 flex-grow">
                {plan.items.map((item) => (
                  <div key={item} className="flex items-center gap-3 text-sm font-bold text-white/60">
                    <div className="w-1.5 h-1.5 bg-yellow-400" />
                    {item}
                  </div>
                ))}
              </div>
              <a href="#join" className={`mt-12 w-full py-4 text-center text-xs font-black uppercase tracking-[0.2em] transition-all active:scale-95 ${idx === 1 ? 'bg-yellow-400 text-black hover:bg-yellow-300' : 'border border-white text-white hover:bg-white hover:text-black'}`}>
                Discuss This Program
              </a>
            </motion.div>
          ))}
        </div>
      </section>

      <section id="join" className="bg-white text-black py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid gap-16 md:grid-cols-[1fr_0.8fr] items-center">
            <div>
              <div className="text-xs font-bold uppercase tracking-[0.4em] text-red-600 mb-4">Join the Ranks</div>
              <h2 className="text-6xl font-black uppercase italic leading-[0.9]">
                Book Your <br />
                <span className="text-red-600">Strategy</span> <br />
                Call.
              </h2>
              <p className="mt-8 text-lg text-black/60 leading-relaxed max-w-md">
                Stop wasting time on YouTube. Book your 1-on-1 Zoom Strategy Session to audit your current skills and determine if Program A or B is your fastest path to the stage.
              </p>
            </div>

            <motion.form 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="p-8 border-4 border-black bg-black/5"
            >
              <div className="grid gap-6">
                <div className="space-y-1">
                  <label className="text-[10px] font-black uppercase tracking-widest text-black/40">Full Name</label>
                  <input
                    type="text"
                    className="w-full border-b-2 border-black bg-transparent py-2 outline-none focus:border-red-600 transition-colors"
                  />
                </div>
                <div className="space-y-1">
                  <label className="text-[10px] font-black uppercase tracking-widest text-black/40">Email Address</label>
                  <input
                    type="email"
                    className="w-full border-b-2 border-black bg-transparent py-2 outline-none focus:border-red-600 transition-colors"
                  />
                </div>
                <div className="space-y-1">
                  <label className="text-[10px] font-black uppercase tracking-widest text-black/40">Interest</label>
                  <select className="w-full border-b-2 border-black bg-transparent py-2 outline-none focus:border-red-600 transition-colors appearance-none">
                    <option>Program A: Basic (₱10,000)</option>
                    <option>Program B: Advanced (₱15,000)</option>
                    <option>Not sure yet - Let's discuss</option>
                  </select>
                </div>
                <button
                  type="button"
                  className="mt-4 bg-black text-white py-5 text-xs font-black uppercase tracking-[0.3em] hover:bg-red-600 transition-colors active:scale-95"
                >
                  Schedule Zoom Call
                </button>
              </div>
            </motion.form>
          </div>
        </div>
      </section>

      <footer className="bg-black border-t border-white/10 py-12 px-6">
        <div className="mx-auto max-w-7xl flex flex-col md:flex-row justify-between items-center gap-8">
          <div>
            <div className="text-xl font-black tracking-[0.25em]"><span className="text-yellow-400">DJ</span> ACADEMY</div>
            <p className="mt-2 text-[10px] text-white/30 uppercase tracking-widest">© 2026. All rights reserved. Built for the stage.</p>
          </div>
          <div className="flex gap-8 text-[10px] font-black uppercase tracking-widest text-white/40">
            <a href={mentor.socials.instagram} target="_blank" rel="noopener noreferrer" className="hover:text-yellow-400 transition">Instagram</a>
            <a href={mentor.socials.tiktok} target="_blank" rel="noopener noreferrer" className="hover:text-yellow-400 transition">TikTok</a>
            <a href="#" className="hover:text-yellow-400 transition">YouTube</a>
          </div>
        </div>
      </footer>

      {/* VU Meter Decoration (Fixed Bottom Right) */}
      <div className="fixed bottom-6 right-6 z-50 flex gap-1 items-end h-12 opacity-40 pointer-events-none">
        {[...Array(8)].map((_, i) => (
          <motion.div 
            key={i}
            animate={{ height: [10, 40, 20, 48, 15, 30][i % 6] }}
            transition={{ repeat: Infinity, duration: 0.5 + (i * 0.1), repeatType: "reverse" }}
            className={`w-1.5 rounded-t-sm ${i > 5 ? 'bg-red-500' : 'bg-yellow-400'}`}
          />
        ))}
      </div>
    </div>
  );
}
