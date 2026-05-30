import React, { useState, useEffect } from 'react';

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
    <div className="bg-surface text-on-background antialiased overflow-x-hidden min-h-screen">
      
      {/* Fixed Header */}
<header className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'py-2' : 'py-4'}`}>
  <div className="max-w-7xl mx-auto px-6">
    <div className={`glass-card rounded-xl px-8 py-3 flex items-center justify-between border-opacity-30 transition-all duration-300 ${
      isScrolled ? 'bg-white/80 text-on-background' : 'bg-white/10 text-white'
    }`}>
      
      {/* --- LOGO & BRANDING SECTION --- */}
      <div className="flex items-center gap-3">
        
        {/* LOGO PLACEHOLDER BOX */}
        <div className="w-10 h-10 rounded-lg border-2 border-dashed border-white/40 bg-white/10 flex items-center justify-center overflow-hidden">
          
          {/* uncomment after logo will ready */}
          {/* <img src="/assets/your-logo.png" alt="Company Logo" className="w-full h-full object-contain" /> */}
          
          {/* Dummy text */}
          <span className="text-[9px] font-bold text-white/60 tracking-wider">LOGO</span>
        </div>

        <span className={`text-xl font-bold tracking-tight transition-colors duration-300 ${isScrolled ? 'text-on-background' : 'text-white'}`}>
          HRMS
        </span>
      </div>
      {/* -------------------------------- */}
      
      <nav className="hidden md:flex items-center gap-8">
        {/* Optional Navigation Links go here */}
      </nav>
      
      <div className="flex items-center gap-4">
        <button className="px-6 py-2 bg-white text-primary font-bold text-sm rounded-lg hover:bg-surface-container-low transition-all shadow-xs cursor-pointer">
          LogIn
        </button>
      </div>
    </div>
  </div>
</header>

      {/* Hero Section */}
<section className="relative h-screen w-full flex flex-col items-center justify-center overflow-hidden mesh-bg">
  {/* Decorative Floating Shapes */}
  <div className="absolute top-1/4 -left-20 w-64 h-64 glass-card rounded-full floating blur-md" style={{ animationDelay: '0s' }}></div>
  <div className="absolute bottom-1/4 -right-20 w-96 h-96 glass-card rounded-full floating blur-xl" style={{ animationDelay: '2s' }}></div>
  <div className="absolute top-1/2 right-1/4 w-32 h-32 glass-card rounded-full floating blur-sm" style={{ animationDelay: '4s' }}></div>
  
  {/* Content */}
  <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
    <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 border border-white/20 text-white/90 text-xs font-semibold uppercase tracking-widest mb-8 backdrop-blur-md">
      <span className="w-2 h-2 rounded-full bg-secondary-container animate-pulse"></span>
      Next-Gen Talent Platform
    </div>
    
    <h1 className="text-white text-5xl md:text-7xl font-black leading-tight tracking-[-0.03em] mb-6">
      Modernizing Human <br />
      <span className="text-transparent bg-clip-text bg-gradient-to-r from-secondary-container to-white">
        Capital Management
      </span>
    </h1>
    
    <p className="text-white/70 text-lg md:text-xl font-normal leading-relaxed mb-12 max-w-2xl mx-auto">
      The all-in-one ecosystem for the next generation of workforce excellence. Optimize productivity, nurture talent, and lead with intelligence.
    </p>
    
    <div className="flex flex-col sm:flex-row items-center justify-center gap-2">
      <button className="group relative flex min-w-[220px] h-10 items-center justify-center overflow-hidden rounded-xl premium-gradient text-white text-lg font-bold glow-effect transition-all duration-300 cursor-pointer">
        <span className="relative z-10 flex items-center gap-2">
          Login to Portal
          <span className="material-symbols-outlined transition-transform group-hover:translate-x-1">
            arrow_forward
          </span>
        </span>
      </button>
    </div>
  </div>

  {/* Scroll Indicator */}
  <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/50 animate-bounce">
    <span className="material-symbols-outlined">expand_more</span>
  </div>
</section>

      {/* Dashboard Preview Section */}
      <section className="relative bg-surface py-24 -mt-20 z-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="relative w-full rounded-xl overflow-hidden border border-outline-variant/30 shadow-2xl">
            <div className="absolute inset-0 dashboard-preview-gradient pointer-events-none"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-24">
            {/* Feature Card 1 */}
            <div className="glass-card bg-white p-8 rounded-xl border border-outline-variant/20 hover:-translate-y-2 transition-transform duration-300">
              <div className="w-14 h-14 rounded-xl bg-primary-container/10 flex items-center justify-center text-primary mb-6">
                <span className="material-symbols-outlined text-3xl">dashboard</span>
              </div>
              <h3 className="text-xl font-bold text-on-background mb-3">Unified Workforce Visibility</h3>
              <p className="text-on-surface-variant text-sm leading-relaxed">
                Real-time performance tracking and attendance trends. Get a comprehensive view of your entire organization at a glance.
              </p>
            </div>

            {/* Feature Card 2 */}
            <div className="glass-card bg-white p-8 rounded-xl border border-outline-variant/20 hover:-translate-y-2 transition-transform duration-300">
              <div className="w-14 h-14 rounded-xl bg-secondary-container/10 flex items-center justify-center text-secondary mb-6">
                <span className="material-symbols-outlined text-3xl">security</span>
              </div>
              <h3 className="text-xl font-bold text-on-background mb-3">Enterprise-Grade Security</h3>
              <p className="text-on-surface-variant text-sm leading-relaxed">
                Advanced encryption, and automated compliance. Safeguard your company data with industry-leading protocols.
              </p>
            </div>

            {/* Feature Card 3 */}
            <div className="glass-card bg-white p-8 rounded-xl border border-outline-variant/20 hover:-translate-y-2 transition-transform duration-300">
              <div className="w-14 h-14 rounded-xl bg-tertiary-container/10 flex items-center justify-center text-tertiary mb-6">
                <span className="material-symbols-outlined text-3xl">hub</span>
              </div>
              <h3 className="text-xl font-bold text-on-background mb-3">Strategic Workforce Planning</h3>
              <p className="text-on-surface-variant text-sm leading-relaxed">
                Empower your leadership with real-time data to optimize team structures, predict future hiring needs, and align talent with organizational goals.
              </p>
            </div>
          </div>
        </div>
      </section>

     {/* Footer */}
      <footer className="bg-on-background text-white pt-20 pb-10">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-10 mb-20">
          <div className="col-span-2">
            
            {/* --- LOGO SECTION (FOOTER) --- */}
            <div className="flex items-center gap-3 mb-6">
              
              {/* LOGO PLACEHOLDER BOX */}
              <div className="w-10 h-10 rounded-lg border-2 border-dashed border-white/40 bg-white/10 flex items-center justify-center overflow-hidden">
                {/* have to uncomment after the logo is ready */}
                {/* <img src="/assets/your-logo.png" alt="Company Logo" className="w-full h-full object-contain" /> */}
                <span className="text-[9px] font-bold text-white/60 tracking-wider">LOGO</span>
              </div>
              
              <span className="text-2xl font-bold tracking-tight">HRMS</span>
            </div>
            {/* -------------------------------------- */}

            <p className="text-white/50 max-w-xs text-sm leading-relaxed">
              Pioneering the next era of HCM. We provide the tools leaders need to empower their teams and scale their impact globally.
            </p>
          </div>
          
          <div></div>

          <div>
            <h4 className="font-bold mb-6 text-sm">Support</h4>
            {/* Note: changed 'class' to 'className' here */}
            <ul className="space-y-4 text-white/60 text-sm">
              <li><a className="hover:text-primary-container transition-colors" href="#">Help Center</a></li>
              <li><a className="hover:text-primary-container transition-colors" href="#">Contact</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-bold mb-6 text-sm">Legal</h4>
            <ul className="space-y-4 text-white/60 text-sm">
              <li><a className="hover:text-primary-container transition-colors" href="#">Privacy</a></li>
              <li><a className="hover:text-primary-container transition-colors" href="#">Terms</a></li>
              <li><a className="hover:text-primary-container transition-colors" href="#">Security</a></li>
            </ul>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-6 border-t border-white/10 pt-10 flex flex-col md:flex-row justify-between items-center gap-6 text-white/40 text-xs">
          <p>© 2026 HRMS Systems. All rights reserved.</p>
          <div className="flex gap-8">
            <a className="hover:text-white transition-colors" href="#">LinkedIn</a>
            <a className="hover:text-white transition-colors" href="#">Twitter</a>
          </div>
        </div>
      </footer>

    </div>
  );
}