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
    <div className="bg-gradient-to-br from-[#F4F7FF] via-[#E6EEFF] to-[#FAF5E6] min-h-screen font-sans text-[#0F204A] antialiased relative selection:bg-[#D4AF37] selection:text-white">
      
      {/* Premium Ambient Background Mesh Lights */}
      <div className="absolute inset-0 opacity-70 pointer-events-none z-0">
        <div className="absolute top-0 right-1/4 w-[600px] h-[600px] bg-[radial-gradient(circle,_rgba(212,175,55,0.15)_0%,transparent_65%)]"></div>
        <div className="absolute top-1/3 left-0 w-[500px] h-[500px] bg-[radial-gradient(circle,_rgba(30,58,138,0.08)_0%,transparent_70%)]"></div>
      </div>

      {/* Fixed Header */}
      <header className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'py-2' : 'py-4'}`}>
        <div className="max-w-7xl mx-auto px-6">
          <div className={`rounded-xl px-8 py-3 flex items-center justify-between transition-all duration-500 border ${
            isScrolled 
              ? 'bg-white/90 border-[#1E3A8A]/10 shadow-[0_10px_30px_rgba(15,32,74,0.05)] backdrop-blur-xl' 
              : 'bg-white/60 border-white/40 backdrop-blur-md'
          }`}>
            
            {/* Logo Section */}
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg border-2 border-dashed border-[#D4AF37] bg-[#D4AF37]/10 flex items-center justify-center">
                <span className="text-[12px] font-black tracking-wider text-[#0F204A]">LOGO</span>
              </div>
              <span className="text-xl font-black tracking-tight text-[#0F204A]">
                TechHansa <span className="text-[#D4AF37] font-normal">HRMS</span>
              </span>
            </div>
            
            <nav className="hidden md:flex items-center gap-8">
              <a className="text-[#0F204A]/70 font-semibold text-sm hover:text-[#D4AF37] transition-colors" href="#">About</a>
              <a className="text-[#0F204A]/70 font-semibold text-sm hover:text-[#D4AF37] transition-colors" href="#">Features</a>
              <a className="text-[#0F204A]/70 font-semibold text-sm hover:text-[#D4AF37] transition-colors" href="#">Support</a>
            </nav>
            
            <div className="flex items-center gap-4">
              {/* UPDATE: Header button is now Light & Clean */}
              <Link to="/" className="px-5 py-2 bg-white text-[#0F204A] font-bold text-xs rounded-lg border border-[#0F204A]/10 hover:bg-[#D4AF37] hover:border-[#D4AF37] hover:text-white hover:shadow-[0_4px_15px_rgba(212,175,55,0.3)] transition-all duration-300">
                Back to Home
              </Link>
            </div>
          </div>
        </div>
      </header>

      {/* Main Container */}
      <main className="relative z-10 pt-28 pb-16 px-6 max-w-7xl mx-auto flex flex-col items-center justify-center min-h-[calc(100vh-80px)]">
        
        {/* Shrunk & Compact Hero Title Section */}
        <section className="text-center mb-6 max-w-2xl mx-auto">
          <h1 className="text-3xl md:text-4xl font-black text-[#0F204A] tracking-tight">
            Welcome to <span className="text-[#D4AF37]">TechHansa Portal</span>
          </h1>
          <p className="text-sm text-[#0F204A]/60 mt-2 font-medium">
            Please select your dedicated department module below to log in securely.
          </p>
        </section>

       {/* Login cards */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 w-full max-w-3xl">
          
          {/* 1. Employee Login Card */}
          <div className="group relative flex flex-col rounded-[2rem] bg-white/30 backdrop-blur-xl border border-white p-2 shadow-[0_8px_30px_rgba(15,32,74,0.04)] hover:shadow-[0_20px_40px_rgba(212,175,55,0.1)] transition-all duration-500 hover:-translate-y-2">
            
            {/* Cinematic Image Header - LIGHT THEME */}
            <div className="relative h-48 w-full rounded-t-[1.5rem] rounded-b-xl overflow-hidden">
              <img alt="Employee Portal" className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700" src="https://lh3.googleusercontent.com/aida-public/AB6AXuA2TXenEXX4jgf8k1ChytnFZpVbpakZOnIOzv7DBHmV9iujPd2B_1c9LZIJag4BCrI4Y0o3dEsvadIrE1QL7eFWo52PGCacKoZq8-C9KjSGvULu0WSLPyNu7aSdxtxxIqnqMLhn7nPQ11OxhpkCYmvpNxVzDNfXINfAVByEo2D4o8n2VEwZl1uHIydK-anq4RcMiN_33mCQQP5lEugWwNfNgFnAtsMRMsGAwJDV7-_1tg3OFHoonzVQ6efOzxFlBRXsoVfKhxtBmA" />
              
              {/* UPDATE: Light Overlay (White Fade) instead of Dark */}
              <div className="absolute inset-0 bg-gradient-to-t from-white via-white/30 to-transparent opacity-70 group-hover:opacity-60 transition-opacity duration-500"></div>
              
              {/* Floating Title & Icon Inside Image */}
              <div className="absolute bottom-4 left-4 right-4 flex items-center gap-3">
                <div className="w-10 h-10 shrink-0 rounded-full bg-white shadow-sm flex items-center justify-center border border-[#D4AF37]/30 group-hover:bg-[#D4AF37] group-hover:border-[#D4AF37] transition-all duration-300">
                  <span className="material-symbols-outlined text-[#D4AF37] text-lg group-hover:text-white transition-colors">badge</span>
                </div>
                {/* UPDATE: Text changed from White to Deep Blue for Light Theme */}
                <h2 className="text-xl font-black text-[#0F204A] tracking-wide group-hover:text-[#D4AF37] transition-colors duration-300">
                  User Portal
                </h2>
              </div>
            </div>

            {/* Card Content */}
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
              
              {/* UPDATE: Action Button is now Light & Golden */}
              <Link to="/portal-login" className="w-full bg-[#F4F7FF] border border-[#E6EEFF] text-[#0F204A] py-3 px-4 rounded-xl font-bold text-sm hover:bg-[#D4AF37] hover:border-[#D4AF37] hover:text-white hover:shadow-[0_5px_15px_rgba(212,175,55,0.3)] transition-all duration-300 flex items-center justify-center gap-2 group-hover:translate-y-0">
                User Login
                <span className="material-symbols-outlined text-sm">arrow_forward</span>
              </Link>
            </div>
          </div>

          {/* 2. Management Login Card */}
          <div className="group relative flex flex-col rounded-[2rem] bg-white/30 backdrop-blur-xl border border-white p-2 shadow-[0_8px_30px_rgba(15,32,74,0.04)] hover:shadow-[0_20px_40px_rgba(212,175,55,0.1)] transition-all duration-500 hover:-translate-y-2">
            
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
          <div className="group relative flex flex-col rounded-[2rem] bg-white/30 backdrop-blur-xl border border-white p-2 shadow-[0_8px_30px_rgba(15,32,74,0.04)] hover:shadow-[0_20px_40px_rgba(212,175,55,0.1)] transition-all duration-500 hover:-translate-y-2">
            
            <div className="relative h-48 w-full rounded-t-[1.5rem] rounded-b-xl overflow-hidden">
              <img alt="System Admin" className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700" src="https://lh3.googleusercontent.com/aida-public/AB6AXuC_aKGBlKzJb7ilMeTRQTAziUK4PBXVJVrAo23Bhm70u9DNLZZ7bldjipH8u-nSXFdD5S0XkDjc3clCiI1FxAjYiuw08BnYyV8fC4PJdhi-GHAivsxAfXgjIvIYjHGo4yMEU4n23mxlWH8nagMyM2J6LdGogjaojChEWF5XSsGaLF2BOcr39QqLgCQTDjy4qAPKOkPf65ItTv8OjlsQJmpgdcKQgvEGXqWJWRKMYrcjFNEL8pFNm2Zco8ryLhjWNA1fFGBcDsH5_Q" />
              <div className="absolute inset-0 bg-gradient-to-t from-white via-white/30 to-transparent opacity-70 group-hover:opacity-60 transition-opacity duration-500"></div>
              
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

      {/* Light & Clean Footer with Golden Hovers (No Black) */}
      <footer className="bg-[#F4F7FF] text-[#0F204A] pt-20 pb-10 border-t-4 border-[#D4AF37]">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-10 mb-16">
          <div className="col-span-2">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-lg border-2 border-dashed border-[#D4AF37] bg-[#D4AF37]/10 flex items-center justify-center overflow-hidden">
                <span className="text-[10px] font-black text-[#D4AF37] tracking-wider">LOGO</span>
              </div>
              <span className="text-2xl font-black tracking-tight text-[#0F204A]">TechHansa <span className="text-[#D4AF37] font-normal">HRMS</span></span>
            </div>
            <p className="text-[#0F204A]/70 max-w-xs text-sm leading-relaxed font-medium">
              Pioneering the next era of HCM. We provide the tools leaders need to empower their teams and scale their impact globally.
            </p>
          </div>
          
          <div>
            <h4 className="font-bold mb-6 text-sm text-[#0F204A] uppercase tracking-wider">Support</h4>
            <ul className="space-y-4 text-[#0F204A]/70 text-sm font-medium">
              <li><a className="hover:text-[#D4AF37] transition-colors duration-300" href="#">Help Center</a></li>
              <li><a className="hover:text-[#D4AF37] transition-colors duration-300" href="#">Contact</a></li>
              <li><a className="hover:text-[#D4AF37] transition-colors duration-300" href="#">Documentation</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-bold mb-6 text-sm text-[#0F204A] uppercase tracking-wider">Legal</h4>
            <ul className="space-y-4 text-[#0F204A]/70 text-sm font-medium">
              <li><a className="hover:text-[#D4AF37] transition-colors duration-300" href="#">Privacy Policy</a></li>
              <li><a className="hover:text-[#D4AF37] transition-colors duration-300" href="#">Terms of Service</a></li>
              <li><a className="hover:text-[#D4AF37] transition-colors duration-300" href="#">Security</a></li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="max-w-7xl mx-auto px-6 border-t border-[#0F204A]/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-6 text-[#0F204A]/60 text-xs font-semibold">
          <p>© 2026 TechHansa HRMS. All rights reserved.</p>
          <div className="flex gap-8">
            <a className="hover:text-[#D4AF37] transition-colors duration-300" href="#">LinkedIn</a>
            <a className="hover:text-[#D4AF37] transition-colors duration-300" href="#">Twitter</a>
           
          </div>
        </div>
      </footer>

    </div>
  );
}