import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

export default function LandingPage() {
  const [isScrolled, setIsScrolled] = useState(false);

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

  return (
    <div className="bg-surface text-on-background antialiased overflow-x-hidden min-h-screen font-sans">
      
      {/* Fixed Header */}
      <header className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'py-2' : 'py-4'}`}>
        <div className="max-w-7xl mx-auto px-6">
          <div className={`glass-card rounded-xl px-8 py-3 flex items-center justify-between border-opacity-30 transition-all duration-300 ${
            isScrolled ? 'bg-white/90 text-on-background shadow-lg backdrop-blur-xl border-white/50' : 'bg-white/10 text-white backdrop-blur-md'
          }`}>
            
            {/* --- LOGO SECTION --- */}
            <div className="flex items-center gap-3">
              <div className={`w-10 h-10 rounded-lg border-2 border-dashed flex items-center justify-center overflow-hidden transition-colors ${isScrolled ? 'border-primary/40 bg-primary/5' : 'border-secondary/60 bg-white/10'}`}>
                {/* <img src="/assets/your-logo.png" alt="Company Logo" className="w-full h-full object-contain" /> */}
                <span className={`text-[12px] font-black tracking-wider ${isScrolled ? 'text-primary' : 'text-secondary'}`}>
                  LOGO
                </span>
              </div>
              <span className={`text-xl font-extrabold tracking-tight transition-colors duration-300 ${isScrolled ? 'text-primary' : 'text-white'}`}>
                TechHansa
              </span>
            </div>
            
            <nav className="hidden md:flex items-center gap-8"></nav>
            
            <div className="flex items-center gap-4">
              <Link to="/login" className="px-6 py-2.5 bg-secondary text-primary font-bold text-sm rounded-lg hover:bg-white hover:text-secondary hover:shadow-[0_0_15px_rgba(212,175,55,0.4)] transition-all duration-300 cursor-pointer">
                LogIn
              </Link>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative h-screen w-full flex flex-col items-center justify-center overflow-hidden bg-[#0F204A]">
        
        {/* Dynamic Mesh Background Gradients */}
        <div className="absolute inset-0 opacity-60">
           <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_top_left,_var(--tw-gradient-stops))] from-[#1E3A8A]/40 via-transparent to-transparent"></div>
           <div className="absolute bottom-0 right-0 w-full h-full bg-[radial-gradient(ellipse_at_bottom_right,_var(--tw-gradient-stops))] from-[#D4AF37]/10 via-transparent to-transparent"></div>
        </div>

        {/* Enhanced Decorative Floating Glass Shapes */}
        <div className="absolute top-1/4 -left-10 w-72 h-72 bg-gradient-to-tr from-[#D4AF37]/20 to-transparent rounded-full floating blur-2xl" style={{ animationDelay: '1s' }}></div>
        
        <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-gradient-to-bl from-[#1E3A8A]/50 to-[#D4AF37]/10 rounded-full floating blur-3xl" style={{ animationDelay: '2s' }}></div>
        
        <div className="absolute top-1/2 right-1/4 w-32 h-32 glass-card border border-[#D4AF37]/30 bg-white/5 rounded-full floating blur-sm shadow-[0_0_30px_rgba(212,175,55,0.15)]" style={{ animationDelay: '4s' }}></div>

        <div className="absolute bottom-1/3 left-1/4 w-16 h-16 glass-card border border-white/20 bg-white/10 rounded-full floating blur-[2px]" style={{ animationDelay: '1.5s' }}></div>
        
        {/* Main Content */}
        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center mt-10">
          
          {/* Golden Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#D4AF37]/10 border border-[#D4AF37]/40 text-[#D4AF37] text-xs font-bold uppercase tracking-widest mb-8 backdrop-blur-md shadow-[0_0_15px_rgba(212,175,55,0.2)]">
            <span className="w-2 h-2 rounded-full bg-[#D4AF37] animate-pulse"></span>
            Next-Gen Talent Platform
          </div>
          
          <h1 className="text-white text-5xl md:text-6xl font-black leading-tight tracking-[-0.03em] mb-6 drop-shadow-lg">
            Modernizing Human <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#D4AF37] to-[#FDE047] drop-shadow-[0_2px_2px_rgba(0,0,0,0.8)]">
              Capital Management
            </span>
          </h1>
          
          <p className="text-white/80 text-lg md:text-base font-normal leading-relaxed mb-12 max-w-2xl mx-auto">
            The all-in-one ecosystem for the next generation of workforce excellence. Optimize productivity, nurture talent, and lead with intelligence.
          </p>
          
          {/* Enhanced Golden Hover Button */}
          <Link to="/login" className="group relative flex min-w-[220px] h-14 w-fit mx-auto items-center justify-center overflow-hidden rounded-xl bg-white/10 text-white text-lg font-bold border border-white/20 hover:border-[#D4AF37] hover:bg-[#D4AF37] hover:text-[#0F204A] hover:shadow-[0_0_30px_rgba(212,175,55,0.6)] backdrop-blur-md transition-all duration-300 cursor-pointer">
            <span className="relative z-10 flex items-center gap-2">
              Login to Portal
              <span className="material-symbols-outlined transition-transform duration-300 group-hover:translate-x-1">
                arrow_forward
              </span>
            </span>
          </Link>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/50 animate-bounce">
          <span className="material-symbols-outlined text-[#D4AF37]/70">expand_more</span>
        </div>
      </section>

      {/* Dashboard Preview Section */}
      <section className="relative bg-surface py-20 z-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
             <h2 className="text-3xl md:text-5xl font-bold text-[#D4AF37] mb-4">Features for HRMS</h2>
             <p className="text-on-surface-variant max-w-2xl mx-auto">Everything you need to manage your workforce seamlessly from a single dashboard.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Feature Card 1 */}
            <div className="glass-card bg-white p-8 rounded-2xl border border-outline-variant/30 hover:-translate-y-2 hover:border-[#D4AF37]/50 hover:shadow-2xl transition-all duration-300 group">
              <div className="w-14 h-14 rounded-xl bg-[#0F204A]/5 flex items-center justify-center text-[#0F204A] mb-6 border border-[#0F204A]/10 group-hover:bg-[#D4AF37]/10 group-hover:text-[#D4AF37] group-hover:border-[#D4AF37]/30 transition-colors">
                <span className="material-symbols-outlined text-3xl">dashboard</span>
              </div>
              <h3 className="text-xl font-bold text-on-background mb-3 group-hover:text-[#0F204A] transition-colors">Unified Workforce Visibility</h3>
              <p className="text-on-surface-variant text-sm leading-relaxed">
                Real-time performance tracking and attendance trends. Get a comprehensive view of your entire organization at a glance.
              </p>
            </div>

            {/* Feature Card 2 */}
            <div className="glass-card bg-white p-8 rounded-2xl border border-outline-variant/30 hover:-translate-y-2 hover:border-[#D4AF37]/50 hover:shadow-2xl transition-all duration-300 group">
              <div className="w-14 h-14 rounded-xl bg-[#0F204A]/5 flex items-center justify-center text-[#0F204A] mb-6 border border-[#0F204A]/10 group-hover:bg-[#D4AF37]/10 group-hover:text-[#D4AF37] group-hover:border-[#D4AF37]/30 transition-colors">
                <span className="material-symbols-outlined text-3xl">security</span>
              </div>
              <h3 className="text-xl font-bold text-on-background mb-3 group-hover:text-[#0F204A] transition-colors">Enterprise-Grade Security</h3>
              <p className="text-on-surface-variant text-sm leading-relaxed">
                Advanced encryption, and automated compliance. Safeguard your company data with industry-leading protocols.
              </p>
            </div>

            {/* Feature Card 3 */}
            <div className="glass-card bg-white p-8 rounded-2xl border border-outline-variant/30 hover:-translate-y-2 hover:border-[#D4AF37]/50 hover:shadow-2xl transition-all duration-300 group">
              <div className="w-14 h-14 rounded-xl bg-[#0F204A]/5 flex items-center justify-center text-[#0F204A] mb-6 border border-[#0F204A]/10 group-hover:bg-[#D4AF37]/10 group-hover:text-[#D4AF37] group-hover:border-[#D4AF37]/30 transition-colors">
                <span className="material-symbols-outlined text-3xl">hub</span>
              </div>
              <h3 className="text-xl font-bold text-on-background mb-3 group-hover:text-[#0F204A] transition-colors">Strategic Workforce Planning</h3>
              <p className="text-on-surface-variant text-sm leading-relaxed">
                Empower your leadership with real-time data to optimize team structures, predict future hiring needs, and align talent with organizational goals.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Dark/Grey Footer with Golden Hovers */}
      <footer className="bg-[#0B1121] text-white pt-20 pb-10 border-t-4 border-[#D4AF37]">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-10 mb-16">
          <div className="col-span-2">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-lg border-2 border-dashed border-[#D4AF37]/60 bg-white/5 flex items-center justify-center overflow-hidden">
                <span className="text-[10px] font-extrabold text-[#D4AF37] tracking-wider">LOGO</span>
              </div>
              <span className="text-2xl font-bold tracking-tight text-white">TechHansa <span className="text-[#D4AF37]">HRMS</span></span>
            </div>
            <p className="text-white/60 max-w-xs text-sm leading-relaxed">
              Pioneering the next era of HCM. We provide the tools leaders need to empower their teams and scale their impact globally.
            </p>
          </div>
          
          <div>
            <h4 className="font-bold mb-6 text-sm text-white/90">Support</h4>
            <ul className="space-y-4 text-white/50 text-sm">
              <li><a className="hover:text-[#D4AF37] transition-colors duration-300" href="#">Help Center</a></li>
              <li><a className="hover:text-[#D4AF37] transition-colors duration-300" href="#">Contact</a></li>
              <li><a className="hover:text-[#D4AF37] transition-colors duration-300" href="#">Documentation</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-bold mb-6 text-sm text-white/90">Legal</h4>
            <ul className="space-y-4 text-white/50 text-sm">
              <li><a className="hover:text-[#D4AF37] transition-colors duration-300" href="#">Privacy Policy</a></li>
              <li><a className="hover:text-[#D4AF37] transition-colors duration-300" href="#">Terms of Service</a></li>
              <li><a className="hover:text-[#D4AF37] transition-colors duration-300" href="#">Security</a></li>
            </ul>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-6 border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-6 text-white/40 text-xs">
          <p>© 2026 TechHansa HRMS. All rights reserved.</p>
          <div className="flex gap-8">
            <a className="hover:text-[#D4AF37] transition-colors duration-300" href="#">LinkedIn</a>
            <a className="hover:text-[#D4AF37] transition-colors duration-300" href="#">Twitter</a>
            <a className="hover:text-[#D4AF37] transition-colors duration-300" href="#">GitHub</a>
          </div>
        </div>
      </footer>

    </div>
  );
}