import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export default function PortalLogin() {
  const [isLoading, setIsLoading] = useState(false);

  // Form submission mock
  const handleLogin = (e) => {
    e.preventDefault();
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      alert('This is a UI demo. Authentication backend is not connected yet.');
    }, 1500);
  };

  return (
    // h-[100dvh] aur overflow-hidden se page fix rahega, scroll nahi hoga
    <main className="flex h-[100dvh] w-full overflow-hidden bg-[#F8FAFC] font-sans antialiased text-[#0F204A]">
      
      {/* ================= LEFT SIDE: Branding, Video & Features ================= */}
      <section className="hidden lg:flex lg:w-1/2 flex-col justify-center items-center relative overflow-hidden bg-gradient-to-br from-[#EBF1FF] to-[#F8FAFC] border-r border-[#0F204A]/5">
        
        {/* Subtle Decorative Glows */}
        <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-blue-400/5 rounded-full blur-[100px] pointer-events-none"></div>
        <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-[#D4AF37]/5 rounded-full blur-[80px] pointer-events-none"></div>
        
        <div className="relative z-10 w-full max-w-lg px-8">
          
          {/* Header Title */}
         <div className="mb-6">
            {/* Flex container to align Logo and Text side-by-side */}
            <div className="flex items-center gap-4 mb-2">
              
              {/* Logo Box */}
              <div className="w-12 h-12 shrink-0 rounded-xl border-2 border-dashed border-[#D4AF37] bg-[#D4AF37]/10 flex items-center justify-center overflow-hidden shadow-sm">
                {/* have to uncomment after the logo */}
                {/* <img src="/assets/logo.png" alt="Logo" className="w-full h-full object-contain" /> */}
                
                {/* placeholder */}
                <span className="text-[14px] font-black tracking-wider text-[#0F204A]">Logo</span>
              </div>

              {/* Title Text */}
              <h1 className="text-4xl font-black text-[#0F204A] tracking-tight">
                TechHansa <span className="text-[#D4AF37]">HRMS</span>
              </h1>
            </div>

            <p className="text-[#0F204A]/70 font-medium text-lg">
              Enterprise-grade human resource management simplified.
            </p>
          </div>

          {/* 🎬 VIDEO PLACEHOLDER (Monitor Style) */}
          <div className="relative w-full aspect-[16/10] rounded-xl overflow-hidden shadow-[0_20px_40px_rgba(15,32,74,0.15)] border-[6px] border-white bg-[#050A15] mb-10">
            <video 
              autoPlay 
              loop 
              muted 
              playsInline 
              className="absolute inset-0 w-full h-full object-cover opacity-90"
            >
              {/* JAB VIDEO AAYE: Yaha video ka path update kar dena */}
              <source src="/login portal.mp4" type="video/mp4" />
            </video>
          </div>

          {/* Features List (Exactly like the image) */}
          <div className="space-y-6">
            <div className="flex items-center gap-4">
              <div className="w-8 h-8 flex-shrink-0 flex items-center justify-center rounded-full bg-[#0F204A] text-[#D4AF37] shadow-md">
                <span className="material-symbols-outlined text-sm font-bold">check</span>
              </div>
              <div>
                <h4 className="text-base font-bold text-[#0F204A]">Attendance</h4>
                <p className="text-sm text-[#0F204A]/60 font-medium">Automated tracking and leave management.</p>
              </div>
            </div>
            
            <div className="flex items-center gap-4">
              <div className="w-8 h-8 flex-shrink-0 flex items-center justify-center rounded-full bg-[#0F204A] text-[#D4AF37] shadow-md">
                <span className="material-symbols-outlined text-sm font-bold">check</span>
              </div>
              <div>
                <h4 className="text-base font-bold text-[#0F204A]">Payroll</h4>
                <p className="text-sm text-[#0F204A]/60 font-medium">Compliant, accurate, and on-time processing.</p>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <div className="w-8 h-8 flex-shrink-0 flex items-center justify-center rounded-full bg-[#0F204A] text-[#D4AF37] shadow-md">
                <span className="material-symbols-outlined text-sm font-bold">check</span>
              </div>
              <div>
                <h4 className="text-base font-bold text-[#0F204A]">Analytics</h4>
                <p className="text-sm text-[#0F204A]/60 font-medium">Data-driven insights for executive decisions.</p>
              </div>
            </div>
          </div>
          
        </div>
      </section>

      {/* ================= RIGHT SIDE: Login Form in a Distinct Card ================= */}
      <section className="w-full lg:w-1/2 flex flex-col justify-center items-center p-6 relative">
        
        {/* THE LOGIN BOX / CARD */}
        <div className="w-full max-w-[420px] bg-white rounded-3xl shadow-[0_20px_60px_-15px_rgba(15,32,74,0.15)] border border-gray-100 p-8 sm:p-10">
          
          {/* Mobile Logo (Hides on Desktop) */}
          <div className="lg:hidden flex items-center justify-center gap-3 mb-8">
            <div className="w-8 h-8 rounded-md bg-[#D4AF37]/10 border border-[#D4AF37] flex items-center justify-center">
              <span className="text-[10px] font-black text-[#0F204A]">TH</span>
            </div>
            <span className="text-xl font-black text-[#0F204A]">TechHansa</span>
          </div>

          <div className="text-center mb-8">
            <h2 className="text-3xl font-black text-[#0F204A] mb-2">Welcome Back</h2>
            <p className="text-[#0F204A]/50 text-sm font-medium">Sign in to continue to TechHansa HRMS</p>
          </div>

          <form onSubmit={handleLogin} className="space-y-5">
            {/* Username Input */}
            <div className="space-y-1.5 group">
              <label className="text-xs font-bold text-[#0F204A]/70 ml-1" htmlFor="username">Employee ID / Username</label>
              <div className="relative">
                <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-[#0F204A]/40 group-focus-within:text-[#D4AF37] transition-colors">person</span>
                <input 
                  className="w-full pl-12 pr-4 py-3.5 rounded-xl border border-gray-200 bg-gray-50 focus:bg-white focus:ring-2 focus:ring-[#D4AF37]/30 focus:border-[#D4AF37] outline-none transition-all text-[#0F204A] font-medium text-sm" 
                  id="username" 
                  placeholder="e.g. EMP12345" 
                  type="text"
                  required
                />
              </div>
            </div>

            {/* Password Input */}
            <div className="space-y-1.5 group">
              <label className="text-xs font-bold text-[#0F204A]/70 ml-1" htmlFor="password">Password</label>
              <div className="relative">
                <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-[#0F204A]/40 group-focus-within:text-[#D4AF37] transition-colors">lock</span>
                <input 
                  className="w-full pl-12 pr-4 py-3.5 rounded-xl border border-gray-200 bg-gray-50 focus:bg-white focus:ring-2 focus:ring-[#D4AF37]/30 focus:border-[#D4AF37] outline-none transition-all text-[#0F204A] font-medium text-sm" 
                  id="password" 
                  placeholder="••••••••" 
                  type="password"
                  required
                />
              </div>
            </div>

            {/* Remember Me & Forgot Password */}
            <div className="flex items-center justify-between pt-1">
              <label className="flex items-center gap-2 cursor-pointer group">
                <input className="w-4 h-4 rounded border-gray-300 text-[#0F204A] focus:ring-[#D4AF37] transition-all" type="checkbox" />
                <span className="text-xs font-semibold text-[#0F204A]/60 group-hover:text-[#0F204A] transition-colors">Remember Me</span>
              </label>
              <a className="text-xs font-bold text-[#0F204A] hover:text-[#D4AF37] transition-colors" href="#">Forgot Password?</a>
            </div>

            {/* Action Buttons */}
            <div className="pt-4 space-y-3">
              <button 
                disabled={isLoading}
                className="flex items-center justify-center w-full py-3.5 px-6 bg-[#0F204A] text-white font-bold text-sm rounded-xl hover:bg-[#D4AF37] hover:text-[#0F204A] hover:shadow-[0_8px_20px_rgba(212,175,55,0.3)] active:scale-[0.98] transition-all duration-300 disabled:opacity-80" 
                type="submit"
              >
                {isLoading ? (
                  <span className="flex items-center gap-2">
                    <span className="material-symbols-outlined animate-spin text-sm">sync</span> 
                    Authenticating...
                  </span>
                ) : (
                  "Login"
                )}
              </button>

              <Link to="/login" className="flex items-center justify-center w-full py-3.5 px-6 bg-gray-50 text-[#0F204A] font-bold text-sm rounded-xl border border-gray-200 hover:bg-gray-100 hover:border-gray-300 transition-all duration-200">
                Back to Home
              </Link>
            </div>
          </form>
          
        </div>

      </section>
    </main>
  );
}