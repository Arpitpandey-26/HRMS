import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

export default function LoginPage() {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [isScrolled, setIsScrolled] = useState(false);

  // Scroll behavior check karne ke liye (Landing page ke jaise)
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Floating elements ke liye Parallax effect
  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePos({
        x: (window.innerWidth - e.pageX * 2) / 100,
        y: (window.innerHeight - e.pageY * 2) / 100,
      });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  // Cards ke hover effects
  const handleCardMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    e.currentTarget.style.setProperty('--mouse-x', `${x}px`);
    e.currentTarget.style.setProperty('--mouse-y', `${y}px`);
  };

  return (
    <div className="bg-mesh-login min-h-screen text-on-surface selection:bg-primary-container selection:text-on-primary-container font-sans antialiased overflow-x-hidden">
      
      {/* Fixed Header (Exactly like Landing Page) */}
      <header className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'py-2' : 'py-4'}`}>
        <div className="max-w-7xl mx-auto px-6">
          <div className={`glass-card rounded-xl px-8 py-3 flex items-center justify-between border-opacity-30 transition-all duration-300 ${
            isScrolled ? 'bg-white/80 text-on-background shadow-sm' : 'bg-white/30 text-on-background'
          }`}>
            
            {/* --- LOGO & BRANDING SECTION --- */}
            <div className="flex items-center gap-3">
              {/* LOGO PLACEHOLDER BOX */}
              <div className="w-10 h-10 rounded-lg border-2 border-dashed border-primary/40 bg-primary/10 flex items-center justify-center overflow-hidden">
                {/* 👉 JAB LOGO READY HO: Niche wali line ko uncomment karein */}
                {/* <img src="/assets/your-logo.png" alt="Company Logo" className="w-full h-full object-contain" /> */}
                <span className="text-[9px] font-bold text-primary/70 tracking-wider">LOGO</span>
              </div>
              <span className="text-xl font-bold tracking-tight text-primary">
                HRMS
              </span>
            </div>
            {/* -------------------------------- */}
            
            <nav className="hidden md:flex items-center gap-8">
              <a className="text-on-surface-variant font-medium text-sm hover:text-primary transition-colors" href="#">About</a>
              <a className="text-on-surface-variant font-medium text-sm hover:text-primary transition-colors" href="#">Features</a>
              <a className="text-on-surface-variant font-medium text-sm hover:text-primary transition-colors" href="#">Contact</a>
            </nav>
            
            <div className="flex items-center gap-4">
              {/* Wapas home jane ke liye link */}
              <Link to="/" className="bg-primary text-white px-6 py-2 rounded-lg font-bold text-sm hover:bg-primary-container transition-all shadow-xs cursor-pointer">
                Home
              </Link>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content (Spaced down to clear the fixed header) */}
      <main className="relative overflow-hidden pt-32 pb-24">
        {/* Floating Decorative UI Elements */}
        <div 
          className="absolute top-32 left-10 w-48 h-32 glass-card-login rounded-xl p-4 opacity-40 select-none hidden lg:block transition-transform duration-75"
          style={{ transform: `translate(${mousePos.x}px, ${mousePos.y}px)` }}
        >
          <div className="flex flex-col gap-2">
            <div className="h-2 w-12 bg-primary/20 rounded"></div>
            <div className="h-4 w-full bg-primary/10 rounded"></div>
            <div className="flex gap-2 mt-2">
              <div className="h-12 w-full bg-secondary-container/30 rounded"></div>
              <div className="h-12 w-full bg-primary-container/30 rounded"></div>
            </div>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          
          {/* Header Section */}
          <section className="text-center mb-16">
            <h1 className="text-5xl font-bold text-primary mb-4 tracking-tight leading-tight">
              Welcome to HRMS Portal
            </h1>
            <p className="text-lg text-on-surface-variant max-w-2xl mx-auto">
              Experience the next generation of human capital management. Streamlined workflows, predictive analytics, and enterprise-grade security tailored for your workforce.
            </p>
          </section>

          {/* Content Grid: Portal Cards */}
          <div className="grid gap-8 mx-auto lg:grid-cols-3 md:grid-cols-2 max-w-6xl">
            
            {/* Employee Login Card */}
            <div className="glass-card-login rounded-2xl p-8 flex flex-col items-center text-center relative overflow-hidden" onMouseMove={handleCardMouseMove}>
              <div className="mb-8 h-48 w-full flex items-center justify-center overflow-hidden rounded-xl bg-surface-variant">
                <img alt="Employee Productivity" className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuA2TXenEXX4jgf8k1ChytnFZpVbpakZOnIOzv7DBHmV9iujPd2B_1c9LZIJag4BCrI4Y0o3dEsvadIrE1QL7eFWo52PGCacKoZq8-C9KjSGvULu0WSLPyNu7aSdxtxxIqnqMLhn7nPQ11OxhpkCYmvpNxVzDNfXINfAVByEo2D4o8n2VEwZl1uHIydK-anq4RcMiN_33mCQQP5lEugWwNfNgFnAtsMRMsGAwJDV7-_1tg3OFHoonzVQ6efOzxFlBRXsoVfKhxtBmA" />
              </div>
              <h2 className="text-2xl font-bold text-on-surface mb-6">User Login</h2>
              <ul className="flex flex-col gap-3 mb-8 text-left w-full flex-grow">
                <li className="flex items-center gap-3 text-on-surface-variant text-sm">
                  <span className="material-symbols-outlined text-primary text-xl">check_circle</span>
                  Track daily attendance and time-off
                </li>
                <li className="flex items-center gap-3 text-on-surface-variant text-sm">
                  <span className="material-symbols-outlined text-primary text-xl">check_circle</span>
                  View and download salary slips
                </li>
                <li className="flex items-center gap-3 text-on-surface-variant text-sm">
                  <span className="material-symbols-outlined text-primary text-xl">check_circle</span>
                  Manage career growth and performance
                </li>
              </ul>
              <button className="w-full bg-primary text-white py-3 px-6 rounded-xl font-bold hover:bg-primary/90 transition-all shadow-md hover:shadow-primary/20">
                User Login
              </button>
            </div>

            {/* Admin Login Card */}
            <div className="glass-card-login rounded-2xl p-8 flex flex-col items-center text-center relative overflow-hidden" onMouseMove={handleCardMouseMove}>
              <div className="mb-8 h-48 w-full flex items-center justify-center overflow-hidden rounded-xl bg-surface-variant">
                <img alt="Administrative Management" className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBe1hwCWPNi9xSQMSBy8HxOqnOZKB_LbksAtdMspxy5DxtqNkTIkGVv_nesaEhfGU03qI51st4KYKfPy2Eb5PsKDrCvo_g_d4yyKlc_u7hpMA-4TTwg5nCAAMCr_cz_HzN99Z_z0CBskAQ2qSZR7yXiZV9gGxQ3pjOujVy53dtiyk3dpEJ3NoDehjLT284jUYbuzrV72lPFIPkivAFrJIPlxVf_Z-hvAn3gohLiDWJ1Uthri7qrcXFgAhnZePae4yJx0thgwwft-w" />
              </div>
              <h2 className="text-2xl font-bold text-on-surface mb-6">Management Login</h2>
              <ul className="flex flex-col gap-3 mb-8 text-left w-full flex-grow">
                <li className="flex items-center gap-3 text-on-surface-variant text-sm">
                  <span className="material-symbols-outlined text-secondary text-xl">verified_user</span>
                  Total employee lifecycle management
                </li>
                <li className="flex items-center gap-3 text-on-surface-variant text-sm">
                  <span className="material-symbols-outlined text-secondary text-xl">verified_user</span>
                  Automated payroll and tax processing
                </li>
                <li className="flex items-center gap-3 text-on-surface-variant text-sm">
                  <span className="material-symbols-outlined text-secondary text-xl">verified_user</span>
                  Real-time executive reports and insights
                </li>
              </ul>
              <button className="w-full bg-secondary text-white py-3 px-6 rounded-xl font-bold hover:bg-secondary/90 transition-all shadow-md hover:shadow-secondary/20">
                Management Login
              </button>
            </div>

            {/* Super Admin Command Center Card */}
            <div className="glass-card-login rounded-2xl p-8 flex flex-col items-center text-center relative overflow-hidden" onMouseMove={handleCardMouseMove}>
              <div className="mb-8 h-48 w-full flex items-center justify-center overflow-hidden rounded-xl bg-surface-variant">
                <img alt="Super Admin Command Center" className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuC_aKGBlKzJb7ilMeTRQTAziUK4PBXVJVrAo23Bhm70u9DNLZZ7bldjipH8u-nSXFdD5S0XkDjc3clCiI1FxAjYiuw08BnYyV8fC4PJdhi-GHAivsxAfXgjIvIYjHGo4yMEU4n23mxlWH8nagMyM2J6LdGogjaojChEWF5XSsGaLF2BOcr39QqLgCQTDjy4qAPKOkPf65ItTv8OjlsQJmpgdcKQgvEGXqWJWRKMYrcjFNEL8pFNm2Zco8ryLhjWNA1fFGBcDsH5_Q" />
              </div>
              <h2 className="text-2xl font-bold text-on-surface mb-6">Admin Login</h2>
              <ul className="flex flex-col gap-3 mb-8 text-left w-full flex-grow">
                <li className="flex items-center gap-3 text-on-surface-variant text-sm">
                  <span className="material-symbols-outlined text-primary text-xl">check_circle</span>
                  Global System Configuration
                </li>
                <li className="flex items-center gap-3 text-on-surface-variant text-sm">
                  <span className="material-symbols-outlined text-primary text-xl">check_circle</span>
                  Advanced Security Protocols
                </li>
                <li className="flex items-center gap-3 text-on-surface-variant text-sm">
                  <span className="material-symbols-outlined text-primary text-xl">check_circle</span>
                  Cross-Departmental Analytics
                </li>
              </ul>
              <button className="w-full bg-tertiary text-white py-3 px-6 rounded-xl font-bold hover:bg-tertiary/90 transition-all shadow-md hover:shadow-tertiary/20">
                Admin Login
              </button>
            </div>

          </div>
        </div>
      </main>

      {/* Footer Component */}
      <footer className="bg-surface-container-highest mt-12">
        <div className="w-full py-8 px-6 flex flex-col md:flex-row justify-between items-center max-w-7xl mx-auto">
          <div className="flex flex-col gap-2 mb-6 md:mb-0 items-center md:items-start">
            <span className="text-xl font-bold text-on-surface">HRMS Elite</span>
            <p className="text-sm text-on-surface-variant">© 2026 HRMS Elite Enterprise Solutions. All rights reserved.</p>
          </div>
          <div className="flex flex-wrap justify-center gap-6">
            <a className="text-on-surface-variant text-xs hover:text-primary transition-all hover:underline" href="#">Privacy Policy</a>
            <a className="text-on-surface-variant text-xs hover:text-primary transition-all hover:underline" href="#">Terms of Service</a>
            <a className="text-on-surface-variant text-xs hover:text-primary transition-all hover:underline" href="#">Security</a>
          </div>
        </div>
      </footer>
    </div>
  );
}