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
    <>
      {/* No Scroll Main Container */}
      <main className="flex h-[100dvh] w-full overflow-hidden bg-[#F8FAFC] font-sans antialiased text-[#0F204A] selection:bg-[#D4AF37] selection:text-white">
        
        {/* ================= LEFT SIDE: Picture (Tilted) & Modern Text ================= */}
      
        <section 
          className="hidden lg:flex lg:w-[60%] relative flex-col items-center justify-center overflow-hidden z-20"
          style={{ clipPath: 'polygon(0 0, 100% 0, 85% 100%, 0% 100%)' }}
        >
          
          {/* Background Image */}
          <img 
            src="login portal.png" 
            alt="TechHansa Background" 
            className="absolute inset-0 w-full h-full object-cover z-0"
          />

          {/* Dark Cinematic Overlay */}
          <div className="absolute inset-0 bg-[#0F204A]/60 z-0 mix-blend-multiply"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-white/30 via-transparent to-white/20 z-0"></div>

          {/* Logo at Top Left */}
          <div className="absolute top-10 left-10 z-10 flex items-center gap-3">
            <div className="w-14 h-14 md:w-16 md:h-16 rounded-full flex items-center justify-center overflow-hidden bg-transparent shrink-0">
                <img src="logo.png" alt="Company Logo" className="w-full h-full object-contain drop-shadow-md" /> 
              </div>
            <span className="text-2xl md:text-3xl font-bold tracking-tight text-[#D4AF37] drop-shadow-sm">Techhansa</span>
          </div>

          
          <div className="relative z-10 text-center px-10 pr-24 transform -translate-y-10">
            <h1 className="text-5xl xl:text-6xl font-black text-white leading-tight drop-shadow-2xl uppercase tracking-tighter">
              Welcome to <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#D4AF37] to-[#FDE047]">
                TechHansa
              </span> <br />
              Login Portal
            </h1>
             {/*   Dotted & Lined Custom Underline */}
             <div className="flex items-center justify-center gap-1.5 mb-6 mt-4">
               <div className="w-1.5 h-1.5 rounded-full bg-[#D4AF37]"></div>
               <div className="w-1.5 h-1.5 rounded-full bg-[#D4AF37]"></div>
               <div className="w-1.5 h-1.5 rounded-full bg-[#D4AF37]"></div>
                <div className="w-1.5 h-1.5 rounded-full bg-[#D4AF37]"></div>
               <div className="w-26 h-1.5 rounded-full bg-[#D4AF37]"></div>
             </div>
          </div>

        </section>

       
        <section className="w-full lg:w-[40%] flex flex-col justify-center items-center relative px-6 sm:px-12 bg-gray-50 lg:-ml-[5%] lg:pl-[5%] z-10">
          
          {/* Subtle Background Pattern/Glow on Right Side */}
          <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-blue-100/40 rounded-full blur-[80px] pointer-events-none"></div>

          {/* 📦 THE LOGIN BOX */}
          
            {/* Mobile Logo (Hides on Desktop) */}
            <div className="lg:hidden flex items-center justify-center gap-3 mb-8">
              <div className="w-10 h-10 rounded-lg bg-[#0F204A] flex items-center justify-center shadow-md">
                <span className="text-[12px] font-black text-[#D4AF37]">TH</span>
              </div>
            </div>

           {/* Form Header */}
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-[#0F204A] mb-2">Sign In</h2>
              <p className="text-[#0F204A]/60 text-sm font-medium">Access your enterprise dashboard</p>
            </div>

            <form onSubmit={handleLogin} className="space-y-5">
              
              {/* Username Input */}
              <div className="space-y-1.5 group">
                
                <label className="text-[11px] font-bold text-[#0F204A] uppercase tracking-widest ml-1" htmlFor="username">Employee ID / Username</label>
                <div className="relative">
                  <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-[#0F204A]/50 group-focus-within:text-[#0F204A] transition-colors">person</span>
                  <input 
                    className="w-full pl-11 pr-4 py-3.5 bg-gray-50 border border-gray-200 rounded-xl focus:bg-white focus:border-[#0F204A] focus:ring-4 focus:ring-[#0F204A]/5 outline-none transition-all text-[#0F204A] font-medium text-sm placeholder-gray-400" 
                    id="username" 
                    placeholder="e.g. EMP12345" 
                    type="text"
                    required
                  />
                </div>
              </div>

              {/* Password Input */}
              <div className="space-y-1.5 group">
                {/* UPDATE: text-gray-400 ko text-[#0F204A] kiya */}
                <label className="text-[11px] font-bold text-[#0F204A] uppercase tracking-widest ml-1" htmlFor="password">Password</label>
                <div className="relative">
                  <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-[#0F204A]/50 group-focus-within:text-[#0F204A] transition-colors">lock</span>
                  <input 
                    className="w-full pl-11 pr-4 py-3.5 bg-gray-50 border border-gray-200 rounded-xl focus:bg-white focus:border-[#0F204A] focus:ring-4 focus:ring-[#0F204A]/5 outline-none transition-all text-[#0F204A] font-medium text-sm placeholder-gray-400" 
                    id="password" 
                    placeholder="••••••••" 
                    type="password"
                    required
                  />
                </div>
              </div>

              {/* Options */}
              <div className="flex items-center justify-between pt-1 pb-2">
                <label className="flex items-center gap-2 cursor-pointer group">
                  <input className="w-4 h-4 rounded border-gray-300 text-[#0F204A] focus:ring-[#0F204A] transition-all cursor-pointer" type="checkbox" />
                  {/* UPDATE: text-gray-500 ko text-[#0F204A] kiya aur font-bold laga diya */}
                  <span className="text-xs font-bold text-[#0F204A] transition-colors">Remember me</span>
                </label>
                <a className="text-xs font-bold text-[#0F204A] hover:text-[#D4AF37] transition-colors" href="#">Forgot Password?</a>
              </div>

              {/* Action Buttons */}
              <div className="space-y-3">
                <button 
                  disabled={isLoading}
                  className="flex items-center justify-center w-full py-3.5 px-6 bg-[#0F204A] text-white font-bold text-sm rounded-xl shadow-[0_8px_15px_rgba(15,32,74,0.2)] hover:bg-[#1E3A8A] hover:shadow-[0_10px_20px_rgba(15,32,74,0.3)] hover:-translate-y-0.5 active:scale-[0.98] transition-all duration-300 disabled:opacity-80 disabled:cursor-not-allowed disabled:transform-none" 
                  type="submit"
                >
                  {isLoading ? (
                    <span className="flex items-center gap-2">
                      <span className="material-symbols-outlined animate-spin text-sm">sync</span> 
                      Authenticating...
                    </span>
                  ) : (
                    "Sign In"
                  )}
                </button>

                <Link to="/login" className="flex items-center justify-center w-full py-3.5 px-6 bg-white text-[#0F204A] font-bold text-sm rounded-xl border-2 border-gray-100 hover:bg-gray-50 hover:border-gray-200 transition-all duration-200">
                  Cancel
                </Link>
              </div>
            </form>
          

          {/* Global Footer Fixed at Bottom Right */}
          <footer className="absolute bottom-8 flex gap-6 text-[11px] font-bold text-gray-400">
            <a className="hover:text-[#0F204A] transition-colors" href="#">Privacy Policy</a>
            <a className="hover:text-[#0F204A] transition-colors" href="#">Terms of Service</a>
          </footer>

        </section>
      </main>
    </>
  );
}