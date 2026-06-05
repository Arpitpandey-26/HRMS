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
      <header className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'py-1.5' : 'py-3'}`}>
        <div className="max-w-7xl mx-auto px-6">
          
          
          <div className={`rounded-2xl px-6 md:px-8 py-2 flex items-center justify-between transition-all duration-300 border ${
            isScrolled 
              ? 'bg-white/95 text-on-background shadow-xl backdrop-blur-xl border-white/60' 
              : 'bg-white/40 text-white backdrop-blur-xl border-white/50 shadow-[0_8px_32px_rgba(0,0,0,0.15)]'
          }`}>
            
            {/* LOGO SECTION  */}
            <div className="flex items-center gap-3">
              
              {/* UPDATE: Logo size  */}
              <div className="w-12 h-12 md:w-14 md:h-14 rounded-full flex items-center justify-center overflow-hidden bg-transparent shrink-0">
                <img src="logo.png" alt="Company Logo" className="w-full h-full object-contain drop-shadow-md" /> 
              </div>
              
              
              <span className="text-xl md:text-2xl font-extrabold tracking-tight">
                <span className="text-[#D4AF37] drop-shadow-sm">Techhansa</span>{' '}
                <span className={`font-black transition-colors duration-300 ${
                  isScrolled ? 'text-[#0F204A]' : 'text-[#0F204A]' 
                }`}>
                  HRMS
                </span>
              </span>
              
            </div>
            
            <nav className="hidden md:flex items-center gap-8"></nav>
            
            <div className="flex items-center gap-4">
              {/* Button padding slim  (py-2) */}
              <Link to="/login" className="px-5 py-2 bg-[#D4AF37] text-[#0F204A] font-bold text-sm rounded-lg hover:bg-white hover:text-[#0F204A] hover:shadow-[0_0_15px_rgba(212,175,55,0.4)] transition-all duration-300 cursor-pointer">
                LogIn
              </Link>
            </div>
          </div>
        </div>
      </header>
      {/* Hero Section */}
      
      <section className="relative h-[75vh] min-h-[500px] w-full flex flex-col items-center justify-center overflow-hidden bg-[#0F204A]">
        
        {/* Mobile Responsive Video Tag */}
        <video 
          autoPlay 
          loop 
          muted 
          playsInline 
          webkit-playsinline="true" /* for IOS */
          className="absolute inset-0 w-full h-full object-cover z-0 opacity-50 pointer-events-none" 
        >
          <source src="/Hero-sec-banner.mp4" type="video/mp4" />
        </video>

        {/* Mesh Background Gradients */}
        <div className="absolute inset-0 opacity-95 z-0 pointer-events-none">
           <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_top_left,_var(--tw-gradient-stops))] from-[#1E3A8A]/50 via-transparent to-transparent"></div>
           <div className="absolute bottom-0 right-0 w-full h-full bg-[radial-gradient(ellipse_at_bottom_right,_var(--tw-gradient-stops))] from-[#D4AF37]/20 via-transparent to-transparent"></div>
        </div>

        {/* Floating Glass Shapes */}
        <div className="absolute top-1/4 -left-10 w-72 h-72 bg-gradient-to-tr from-[#D4AF37]/20 to-transparent rounded-full floating blur-2xl z-0" style={{ animationDelay: '1s' }}></div>
        <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-gradient-to-bl from-[#1E3A8A]/50 to-[#D4AF37]/10 rounded-full floating blur-3xl z-0" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-1/2 right-1/4 w-32 h-32 glass-card border border-[#D4AF37]/30 bg-white/5 rounded-full floating blur-sm shadow-[0_0_30px_rgba(212,175,55,0.15)] z-0" style={{ animationDelay: '4s' }}></div>
        <div className="absolute bottom-1/3 left-1/4 w-16 h-16 glass-card border border-white/20 bg-white/10 rounded-full floating blur-[2px] z-0" style={{ animationDelay: '1.5s' }}></div>
        
        {/* Main Content */}
        {/* decreased the margin */}
        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center mt-16 md:mt-24">
          
          {/* Golden Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#D4AF37]/20 border border-[#D4AF37]/40 text-[#D4AF37] text-xs font-bold uppercase tracking-widest mb-6 backdrop-blur-md shadow-[0_0_15px_rgba(212,175,55,0.2)]">
            <span className="w-2 h-2 rounded-full bg-[#D4AF37] animate-pulse"></span>
            Digital Transformation Company
          </div>
          
          <h1 className="text-white text-5xl md:text-5xl font-black leading-tight tracking-[-0.03em] mb-6 drop-shadow-lg">
            Modernizing Human <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#D4AF37] to-[#FDE047] drop-shadow-[0_2px_2px_rgba(0,0,0,0.8)]">
              Capital Management
            </span>
          </h1>
          
          <p className="text-white/90 text-lg md:text-xlg font-medium leading-relaxed mb-6 max-w-2xl mx-auto drop-shadow-md">
            The all-in-one ecosystem for the next generation of workforce excellence. Optimize productivity, nurture talent, and lead with intelligence.
          </p>
          
          {/* Golden Hover Button */}
          
          <Link to="/login" className="group relative flex min-w-[200px] h-14 w-fit mx-auto items-center justify-center overflow-hidden rounded-xl bg-white/30 text-white text-lg font-bold border border-white/30 hover:border-[#D4AF37] hover:bg-[#D4AF37] hover:text-[#0F204A] hover:shadow-[0_0_30px_rgba(212,175,55,0.6)] backdrop-blur-md transition-all duration-300 cursor-pointer">
            <span className="relative z-10 flex items-center gap-2">
              Login to Portal
              <span className="material-symbols-outlined transition-transform duration-300 group-hover:translate-x-1">
                arrow_forward
              </span>
            </span>
          </Link>
        </div>

      </section>

      {/* Dashboard Preview Section */}
      <section className="relative bg-surface py-10 z-10">
        <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-10">
             <h2 className="text-3xl md:text-5xl font-bold text-[#D4AF37] mb-4">
               Features for <span className="text-[#0F204A]">HRMS</span> 
             </h2>
             
             {/*   Dotted & Lined Custom Underline */}
             <div className="flex items-center justify-center gap-1.5 mb-6">
               <div className="w-1.5 h-1.5 rounded-full bg-[#D4AF37]"></div>
               <div className="w-1.5 h-1.5 rounded-full bg-[#D4AF37]"></div>
               <div className="w-1.5 h-1.5 rounded-full bg-[#D4AF37]"></div>
               <div className="w-20 h-1.5 rounded-full bg-[#D4AF37]"></div>
             </div>
             
             <p className="text-on-surface-variant max-w-2xl mx-auto font-medium">
               Everything you need to manage your workforce seamlessly from a single dashboard.
             </p>
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

        {/*  FOOTER CONTENT  */}
        <div className="relative z-10 max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          
          {/* Logo & About */}
          <div className="md:col-span-2 pr-0 md:pr-10">
            <div className="flex items-center gap-3 mb-5">
               {/* Logo */}
              <div className="w-14 h-14 md:w-16 md:h-16 rounded-full flex items-center justify-center overflow-hidden bg-transparent shrink-0">
                <img src="logo.png" alt="Company Logo" className="w-full h-full object-contain drop-shadow-md" /> 
              </div>
              <span className="text-2xl font-black tracking-tight text-[#0F204A] drop-shadow-sm">
                Techhansa <span className="text-[#D4AF37] font-normal">HRMS</span>
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