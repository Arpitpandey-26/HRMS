import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

export default function LoginPage() {
  const [isScrolled, setIsScrolled] = useState(false);

  // Scroll behavior for Header
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 30) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="bg-[#F8FAFC] min-h-screen font-sans text-[#0F204A] antialiased relative selection:bg-[#D4AF37] selection:text-white overflow-hidden">
      
      {/* Vibrant Background Mesh  */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        {/* Top Right Golden Glow */}
        <div className="absolute top-[-10%] right-[-5%] w-[600px] h-[600px] bg-[#D4AF37]/20 rounded-full blur-[120px] animate-pulse"></div>
        {/* Bottom Left Sky Blue Glow */}
        <div className="absolute bottom-[-10%] left-[-10%] w-[500px] h-[500px] bg-[#38BDF8]/20 rounded-full blur-[120px]"></div>
        {/* Center Soft Copper/Orange Glow */}
        <div className="absolute top-[30%] left-[30%] w-[400px] h-[400px] bg-[#B87333]/10 rounded-full blur-[100px]"></div>
      </div>

      {/* Fixed Header */}
      <header className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'py-2' : 'py-4'}`}>
        <div className="max-w-7xl mx-auto px-6">
          <div className={`rounded-2xl px-8 py-3 flex items-center justify-between transition-all duration-300 border ${
            isScrolled 
              ? 'bg-white/95 text-on-background shadow-xl backdrop-blur-xl border-white/60' 
              : 'bg-white/40 text-white backdrop-blur-xl border-white/50 shadow-[0_8px_32px_rgba(0,0,0,0.15)]'
          }`}>
            
            {/* Logo Section */}
            <div className="flex items-center gap-3">
              <div className="w-14 h-14 md:w-16 md:h-16 rounded-full flex items-center justify-center overflow-hidden bg-transparent shrink-0">
                <img src="logo.png" alt="Company Logo" className="w-full h-full object-contain drop-shadow-md" /> 
              </div>
              <span className="text-2xl md:text-3xl font-extrabold tracking-tight">
                <span className="text-[#D4AF37] drop-shadow-sm">Techhansa</span>{' '}
                <span className={`font-black transition-colors duration-300 ${
                  isScrolled ? 'text-[#0F204A]' : 'text-[#0F204A]' 
                }`}>
                  HRMS
                </span>
              </span>
            </div>
            
            <nav className="hidden md:flex items-center gap-8">
              <a className="text-[#0F204A]/70 font-semibold text-sm hover:text-[#D4AF37] transition-colors" href="#">About</a>
              <a className="text-[#0F204A]/70 font-semibold text-sm hover:text-[#D4AF37] transition-colors" href="#">Features</a>
              <a className="text-[#0F204A]/70 font-semibold text-sm hover:text-[#D4AF37] transition-colors" href="#">Support</a>
            </nav>
            
            <div className="flex items-center gap-4">
              <Link to="/" className="px-5 py-2 bg-white text-[#0F204A] font-bold text-xs rounded-lg border border-[#0F204A]/10 hover:bg-[#D4AF37] hover:border-[#D4AF37] hover:text-white hover:shadow-[0_4px_15px_rgba(212,175,55,0.3)] transition-all duration-300">
                Back to Home
              </Link>
            </div>
          </div>
        </div>
      </header>

      {/* Main Container */}
      <main className="relative z-10 pt-32 pb-16 px-6 max-w-7xl mx-auto flex flex-col items-center justify-center min-h-[calc(100vh-80px)]">
        
        {/* Hero Section */}
        <section className="text-center mb-10 max-w-2xl mx-auto">
          

       
          <h1 className="text-4xl md:text-4xl font-black text-[#0F204A] tracking-tight mb-3">
            Welcome to the <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#D4AF37] via-[#B87333] to-[#D4AF37] drop-shadow-sm">
              Techhansa Portal
            </span>
          </h1>
          <p className="text-sm md:text-medium text-[#0F204A]/60 font-bold">
            Please select your dedicated department module below to log in securely.
          </p>
        </section>

       {/* Login cards */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 w-full max-w-3xl">
          
          {/* 1. Employee Login Card */}
         
          <div className="group relative flex flex-col rounded-[2rem] bg-white/70 backdrop-blur-2xl border border-white/80 p-2 shadow-[0_8px_30px_rgba(15,32,74,0.08)] hover:shadow-[0_20px_40px_rgba(212,175,55,0.15)] transition-all duration-500 hover:-translate-y-2">
            
            <div className="relative h-48 w-full rounded-t-[1.5rem] rounded-b-xl overflow-hidden">
              <img alt="Employee Portal" className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700" src="https://lh3.googleusercontent.com/aida-public/AB6AXuA2TXenEXX4jgf8k1ChytnFZpVbpakZOnIOzv7DBHmV9iujPd2B_1c9LZIJag4BCrI4Y0o3dEsvadIrE1QL7eFWo52PGCacKoZq8-C9KjSGvULu0WSLPyNu7aSdxtxxIqnqMLhn7nPQ11OxhpkCYmvpNxVzDNfXINfAVByEo2D4o8n2VEwZl1uHIydK-anq4RcMiN_33mCQQP5lEugWwNfNgFnAtsMRMsGAwJDV7-_1tg3OFHoonzVQ6efOzxFlBRXsoVfKhxtBmA" />
              <div className="absolute inset-0 bg-gradient-to-t from-white via-white/30 to-transparent opacity-70 group-hover:opacity-60 transition-opacity duration-500"></div>
              
              <div className="absolute bottom-4 left-4 right-4 flex items-center gap-3">
                <div className="w-10 h-10 shrink-0 rounded-full bg-white shadow-sm flex items-center justify-center border border-[#D4AF37]/30 group-hover:bg-[#D4AF37] group-hover:border-[#D4AF37] transition-all duration-300">
                  <span className="material-symbols-outlined text-[#D4AF37] text-lg group-hover:text-white transition-colors">badge</span>
                </div>
                <h2 className="text-xl font-black text-[#0F204A] tracking-wide group-hover:text-[#D4AF37] transition-colors duration-300">
                  User Portal
                </h2>
              </div>
            </div>

            <div className="px-5 pt-6 pb-3 flex flex-col flex-grow">
              <ul className="flex flex-col gap-3 text-sm font-medium text-[#0F204A]/70 mb-6 flex-grow">
                <li className="flex items-start gap-3">
                  <span className="material-symbols-outlined text-[#D4AF37] text-lg shrink-0">verified</span>
                  <span>Daily attendance & time-off tracker</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="material-symbols-outlined text-[#D4AF37] text-lg shrink-0">verified</span>
                  <span>Download monthly salary slips</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="material-symbols-outlined text-[#D4AF37] text-lg shrink-0">verified</span>
                  <span>Growth curves & KPI charts</span>
                </li>
              </ul>
              
              <Link to="/portal-login" className="w-full bg-[#F4F7FF] border border-[#E6EEFF] text-[#0F204A] py-3 px-4 rounded-xl font-bold text-sm hover:bg-[#D4AF37] hover:border-[#D4AF37] hover:text-white hover:shadow-[0_5px_15px_rgba(212,175,55,0.3)] transition-all duration-300 flex items-center justify-center gap-2 group-hover:translate-y-0">
                User Login
                <span className="material-symbols-outlined text-sm">arrow_forward</span>
              </Link>
            </div>
          </div>

          {/* 2. Management Login Card */}
          <div className="group relative flex flex-col rounded-[2rem] bg-white/70 backdrop-blur-2xl border border-white/80 p-2 shadow-[0_8px_30px_rgba(15,32,74,0.08)] hover:shadow-[0_20px_40px_rgba(212,175,55,0.15)] transition-all duration-500 hover:-translate-y-2">
            
            <div className="relative h-48 w-full rounded-t-[1.5rem] rounded-b-xl overflow-hidden">
              <img alt="Management Dashboard" className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBe1hwCWPNi9xSQMSBy8HxOqnOZKB_LbksAtdMspxy5DxtqNkTIkGVv_nesaEhfGU03qI51st4KYKfPy2Eb5PsKDrCvo_g_d4yyKlc_u7hpMA-4TTwg5nCAAMCr_cz_HzN99Z_z0CBskAQ2qSZR7yXiZV9gGxQ3pjOujVy53dtiyk3dpEJ3NoDehjLT284jUYbuzrV72lPFIPkivAFrJIPlxVf_Z-hvAn3gohLiDWJ1Uthri7qrcXFgAhnZePae4yJx0thgwwft-w" />
              <div className="absolute inset-0 bg-gradient-to-t from-white via-white/30 to-transparent opacity-70 group-hover:opacity-60 transition-opacity duration-500"></div>
              
              <div className="absolute bottom-4 left-4 right-4 flex items-center gap-3">
                <div className="w-10 h-10 shrink-0 rounded-full bg-white shadow-sm flex items-center justify-center border border-[#D4AF37]/30 group-hover:bg-[#D4AF37] group-hover:border-[#D4AF37] transition-all duration-300">
                  <span className="material-symbols-outlined text-[#D4AF37] text-lg group-hover:text-white transition-colors">insights</span>
                </div>
                <h2 className="text-xl font-black text-[#0F204A] tracking-wide group-hover:text-[#D4AF37] transition-colors duration-300">
                  Management Portal
                </h2>
              </div>
            </div>

            <div className="px-5 pt-6 pb-3 flex flex-col flex-grow">
              <ul className="flex flex-col gap-3 text-sm font-medium text-[#0F204A]/70 mb-6 flex-grow">
                <li className="flex items-start gap-3">
                  <span className="material-symbols-outlined text-[#D4AF37] text-lg shrink-0">verified</span>
                  <span>Lifecycle & team analytics panel</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="material-symbols-outlined text-[#D4AF37] text-lg shrink-0">verified</span>
                  <span>Automated payroll processing</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="material-symbols-outlined text-[#D4AF37] text-lg shrink-0">verified</span>
                  <span>Real-time executive reporting</span>
                </li>
              </ul>
              
              <Link to="/portal-login" className="w-full bg-[#F4F7FF] border border-[#E6EEFF] text-[#0F204A] py-3 px-4 rounded-xl font-bold text-sm hover:bg-[#D4AF37] hover:border-[#D4AF37] hover:text-white hover:shadow-[0_5px_15px_rgba(212,175,55,0.3)] transition-all duration-300 flex items-center justify-center gap-2">
                Management Login
                <span className="material-symbols-outlined text-sm">arrow_forward</span>
              </Link>
            </div>
          </div>

          {/* 3. System Admin Card */}
          <div className="group relative flex flex-col rounded-[2rem] bg-white/70 backdrop-blur-2xl border border-white/80 p-2 shadow-[0_8px_30px_rgba(15,32,74,0.08)] hover:shadow-[0_20px_40px_rgba(212,175,55,0.15)] transition-all duration-500 hover:-translate-y-2">
            
            <div className="relative h-48 w-full rounded-t-[1.5rem] rounded-b-xl overflow-hidden">
              <img alt="System Admin" className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700" src="https://lh3.googleusercontent.com/aida-public/AB6AXuC_aKGBlKzJb7ilMeTRQTAziUK4PBXVJVrAo23Bhm70u9DNLZZ7bldjipH8u-nSXFdD5S0XkDjc3clCiI1FxAjYiuw08BnYyV8fC4PJdhi-GHAivsxAfXgjIvIYjHGo4yMEU4n23mxlWH8nagMyM2J6LdGogjaojChEWF5XSsGaLF2BOcr39QqLgCQTDjy4qAPKOkPf65ItTv8OjlsQJmpgdcKQgvEGXqWJWRKMYrcjFNEL8pFNm2Zco8ryLhjWNA1fFGBcDsH5_Q" />
              <div className="absolute inset-0 bg-gradient-to-t from-white via-white/0 to-transparent opacity-70 group-hover:opacity-60 transition-opacity duration-500"></div>
              
              <div className="absolute bottom-4 left-4 right-4 flex items-center gap-3">
                <div className="w-10 h-10 shrink-0 rounded-full bg-white shadow-sm flex items-center justify-center border border-[#D4AF37]/30 group-hover:bg-[#D4AF37] group-hover:border-[#D4AF37] transition-all duration-300">
                  <span className="material-symbols-outlined text-[#D4AF37] text-lg group-hover:text-white transition-colors">admin_panel_settings</span>
                </div>
                <h2 className="text-xl font-black text-[#0F204A] tracking-wide group-hover:text-[#D4AF37] transition-colors duration-300">
                  Admin Portal
                </h2>
              </div>
            </div>

            <div className="px-5 pt-6 pb-3 flex flex-col flex-grow">
              <ul className="flex flex-col gap-3 text-sm font-medium text-[#0F204A]/70 mb-6 flex-grow">
                <li className="flex items-start gap-3">
                  <span className="material-symbols-outlined text-[#D4AF37] text-lg shrink-0">verified</span>
                  <span>Global system configuration panel</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="material-symbols-outlined text-[#D4AF37] text-lg shrink-0">verified</span>
                  <span>Advanced security & audit trails</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="material-symbols-outlined text-[#D4AF37] text-lg shrink-0">verified</span>
                  <span>Cross-departmental data routing</span>
                </li>
              </ul>
              
              <Link to="/portal-login" className="w-full bg-[#F4F7FF] border border-[#E6EEFF] text-[#0F204A] py-3 px-4 rounded-xl font-bold text-sm hover:bg-[#D4AF37] hover:border-[#D4AF37] hover:text-white hover:shadow-[0_5px_15px_rgba(212,175,55,0.3)] transition-all duration-300 flex items-center justify-center gap-2">
                Admin Login
                <span className="material-symbols-outlined text-sm">arrow_forward</span>
              </Link>
            </div>
          </div>

        </div>
      </main>

      {/*Footer*/}
      <footer className="relative pt-12 pb-6 border-t-[6px] border-[#D4AF37] overflow-hidden z-10">
        
        {/* 1. Base Background */}
        <div className="absolute inset-0 bg-[#F8FAFC] z-0"></div>

        {/* 2. Vibrant Floating Colored Orbs */}
        <div className="absolute inset-0 overflow-hidden z-0 pointer-events-none">
           {/* Top Left - Deep Golden Glow */}
           <div className="absolute -top-[40%] -left-[5%] w-[50%] h-[140%] bg-[#D4AF37]/60 rounded-full blur-[100px] animate-pulse"></div>
           
           {/* Bottom Right - Bright Sky Blue Glow */}
           <div className="absolute -bottom-[40%] -right-[5%] w-[50%] h-[140%] bg-[#38BDF8]/50 rounded-full blur-[100px]"></div>
           
           {/* Center - Brown/Copper Glow */}
           <div className="absolute top-[10%] left-[30%] w-[40%] h-[100%] bg-[#B87333]/45 rounded-full blur-[100px]"></div>
        </div>

        {/* 3. Frosted Glass Overlay */}
        <div className="absolute inset-0 bg-white/15 backdrop-blur-[50px] z-0 border-t border-white/30"></div>

        {/* FOOTER CONTENT  */}
        <div className="relative z-10 max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          
          {/* Logo & About */}
          <div className="md:col-span-2 pr-0 md:pr-10">
            <div className="flex items-center gap-3 mb-5">
               {/* Logo */}
              <div className="w-14 h-14 md:w-16 md:h-16 rounded-full flex items-center justify-center overflow-hidden bg-transparent shrink-0">
                <img src="logo.png" alt="Company Logo" className="w-full h-full object-contain drop-shadow-md" /> 
              </div>
              <span className="text-2xl font-black tracking-tight text-[#0F204A] drop-shadow-sm">
                TechHansa <span className="text-[#D4AF37] font-normal">HRMS</span>
              </span>
            </div>
            <p className="text-[#0F204A]/90 text-sm leading-relaxed font-bold">
              Pioneering the next era of HCM. We provide the tools leaders need to empower their teams and scale their impact globally.
            </p>
          </div>
       
          <div>
            <h4 className="font-black mb-5 text-sm text-[#0F204A] uppercase tracking-widest drop-shadow-sm">Support</h4>
            <ul className="space-y-3 text-[#0F204A]/90 text-sm font-bold">
              <li><a className="hover:text-[#D4AF37] hover:translate-x-1 transition-all duration-300 flex items-center gap-2" href="#"><span className="material-symbols-outlined text-xs">chevron_right</span> Help Center</a></li>
              <li><a className="hover:text-[#D4AF37] hover:translate-x-1 transition-all duration-300 flex items-center gap-2" href="#"><span className="material-symbols-outlined text-xs">chevron_right</span> Contact</a></li>
              <li><a className="hover:text-[#D4AF37] hover:translate-x-1 transition-all duration-300 flex items-center gap-2" href="#"><span className="material-symbols-outlined text-xs">chevron_right</span> Documentation</a></li>
            </ul>
          </div>
          
      
          <div>
            <h4 className="font-black mb-5 text-sm text-[#0F204A] uppercase tracking-widest drop-shadow-sm">Legal</h4>
            <ul className="space-y-3 text-[#0F204A]/90 text-sm font-bold">
              <li><a className="hover:text-[#D4AF37] hover:translate-x-1 transition-all duration-300 flex items-center gap-2" href="#"><span className="material-symbols-outlined text-xs">chevron_right</span> Privacy Policy</a></li>
              <li><a className="hover:text-[#D4AF37] hover:translate-x-1 transition-all duration-300 flex items-center gap-2" href="#"><span className="material-symbols-outlined text-xs">chevron_right</span> Terms of Service</a></li>
              <li><a className="hover:text-[#D4AF37] hover:translate-x-1 transition-all duration-300 flex items-center gap-2" href="#"><span className="material-symbols-outlined text-xs">chevron_right</span> Security</a></li>
            </ul>
          </div>

        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 border-t border-[#0F204A]/10 pt-6 flex flex-col md:flex-row justify-between items-center gap-4 text-[#0F204A]/80 text-xs font-black">
          <p>© 2026 TechHansa HRMS. All rights reserved.</p>
         
        </div>
      </footer>

    </div>
  );
}