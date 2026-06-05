import React, { useState, useEffect } from 'react';

export default function UserDashboard() {
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    setTimeout(() => setMounted(true), 100);
  }, []);

  return (
    <div className="flex min-h-screen bg-[#F4F7FF] font-sans text-[#0F204A] selection:bg-[#D4AF37] selection:text-white">
      
      {/* ================= SIDEBAR NAV (Slimmer: w-60) ================= */}
      <aside className="fixed left-0 top-0 h-full w-60 bg-white border-r border-[#0F204A]/5 shadow-[4px_0_24px_rgba(15,32,74,0.02)] flex flex-col z-40">
        
        {/* Logo Section */}
        <div className="p-2 mb-2 flex items-center gap-1">
          <div className="w-16 h-16 md:w-16 md:h-16 rounded-full flex items-center justify-center overflow-hidden bg-transparent shrink-0">
          <img src="logo.png" alt="Company Logo" className="w-full h-full object-contain drop-shadow-md" /> 
          </div>
          <span className="text-lg font-black tracking-tight text-[#D4AF37]">
            Techhansa
          </span>
           <span className="text-lg font-black tracking-tight text-[#0F204A]">
            HRMS
          </span>
         
        </div>

        {/* User Mini Profile */}
        <div className="px-5 mb-6">
          <div className="flex items-center gap-3 p-2.5 bg-[#F4F7FF] rounded-xl border border-[#0F204A]/5">
            <img 
              alt="Arpit Pandey" 
              className="w-9 h-9 rounded-lg object-cover shadow-sm" 
              src="" 
            />
            <div>
              <p className="font-bold text-[#0F204A] text-[13px]">Arpit Pandey</p>
              <p className="text-[10px] font-semibold text-[#0F204A]/50">Software Developer</p>
            </div>
          </div>
        </div>

        {/* Navigation Links */}
        <div className="flex-1 px-4 space-y-1 overflow-y-auto">
          <a href="#" className="flex items-center gap-3 bg-[#0F204A] text-white px-4 py-2.5 rounded-lg shadow-md transition-all">
            <span className="material-symbols-outlined text-[18px] text-[#D4AF37]">dashboard</span>
            <span className="font-bold text-[13px]">Dashboard</span>
          </a>
          
          {[
            { icon: 'person', label: 'Profile' },
            { icon: 'calendar_today', label: 'Attendance' },
            { icon: 'payments', label: 'Salary' },
            { icon: 'monitoring', label: 'Appraisal' },
            { icon: 'mark_as_unread', label: 'Requests' },
            { icon: 'trending_up', label: 'Growth' },
            { icon: 'mail', label: 'Newsletter' }
          ].map((item, index) => (
            <a key={index} href="#" className="flex items-center gap-3 px-4 py-2.5 rounded-lg text-[#0F204A]/60 hover:bg-[#0F204A]/5 hover:text-[#0F204A] transition-all duration-200 group">
              <span className="material-symbols-outlined text-[18px] group-hover:text-[#D4AF37] transition-colors">{item.icon}</span>
              <span className="font-semibold text-[13px]">{item.label}</span>
            </a>
          ))}
        </div>

        {/* Bottom Actions */}
        <div className="p-4 border-t border-[#0F204A]/5 space-y-1">
          <a href="#" className="flex items-center gap-3 px-4 py-2.5 rounded-lg text-[#0F204A]/60 hover:bg-[#0F204A]/5 hover:text-[#0F204A] transition-all group">
            <span className="material-symbols-outlined text-[18px] group-hover:text-[#D4AF37]">settings</span>
            <span className="font-semibold text-[13px]">Settings</span>
          </a>
          <a href="#" className="flex items-center gap-3 px-4 py-2.5 rounded-lg text-[#0F204A]/60 hover:bg-red-50 hover:text-red-600 transition-all">
            <span className="material-symbols-outlined text-[18px]">logout</span>
            <span className="font-semibold text-[13px]">Sign Out</span>
          </a>
        </div>
      </aside>

      {/* ================= MAIN CONTENT CANVAS ================= */}
      {/* Reduced left margin and paddings */}
      <main className="ml-60 flex-1 p-6 xl:p-8 max-w-[1440px] mx-auto">
        
        {/* Header */}
        <header className="flex justify-between items-center mb-6">
          <div>
            <h1 className="text-2xl font-black text-[#0F204A] tracking-tight">Employee Dashboard</h1>
            <p className="text-[#0F204A]/60 font-medium text-xs mt-1">Welcome back, Arpit. Here's your performance summary.</p>
          </div>
          <div className="flex gap-3">
            <button className="relative p-2 rounded-full bg-white border border-[#0F204A]/10 hover:border-[#D4AF37] text-[#0F204A] hover:text-[#D4AF37] transition-all shadow-sm">
              <span className="material-symbols-outlined text-[20px]">notifications</span>
              <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-red-500 rounded-full border border-white"></span>
            </button>
          </div>
        </header>

        {/* Section 1: Profile Banner */}
        <section className="mb-6">
          <div className="bg-white rounded-2xl p-6 flex flex-col md:flex-row items-center gap-6 relative overflow-hidden shadow-[0_4px_20px_rgba(15,32,74,0.03)] border border-[#0F204A]/5">
            <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-[#0F204A]/5 to-transparent skew-x-12 translate-x-10 pointer-events-none"></div>
            
            {/* Reduced Image Size */}
            <img 
              alt="Arpit Pandey" 
              className="w-20 h-20 rounded-xl object-cover shadow-md border-2 border-white relative z-10" 
              src="" 
            />
            
            <div className="flex-grow text-center md:text-left z-10">
              <div className="flex flex-col md:flex-row md:items-center gap-3 mb-1.5">
                <h2 className="text-xl font-black text-[#0F204A] tracking-tight">Arpit Pandey</h2>
                <span className="px-2.5 py-0.5 bg-green-100 text-green-700 rounded-full text-[10px] font-bold self-start md:self-center">Active</span>
              </div>
              <p className="text-xs font-bold text-[#0F204A]/60">Software Developer • ID: SE-1234</p>
              
              <div className="mt-3 flex flex-wrap justify-center md:justify-start gap-4">
                <span className="flex items-center gap-1 text-xs font-semibold text-[#0F204A]/60">
                  <span className="material-symbols-outlined text-[16px] text-[#D4AF37]">location_on</span>Varanasi
                </span>
                <span className="flex items-center gap-1 text-xs font-semibold text-[#0F204A]/60">
                  <span className="material-symbols-outlined text-[16px] text-[#D4AF37]">mail</span>arpit.pandey@techhansait.com
                </span>
              </div>
            </div>
            
            <div className="flex flex-col items-center md:items-end gap-2.5 z-10 mt-4 md:mt-0">
              <div className="text-center md:text-right">
                <p className="text-[10px] font-bold text-[#0F204A]/50 uppercase tracking-widest mb-0.5">Join Date</p>
                <p className="text-sm font-black text-[#0F204A]">May 25, 2026</p>
              </div>
              <button className="bg-[#0F204A] text-white hover:bg-[#D4AF37] hover:text-[#0F204A] px-4 py-2 rounded-lg font-bold text-xs shadow-md transition-all active:scale-95">
                Edit Profile
              </button>
            </div>
          </div>
        </section>

       {/* Section 2: Attendance Analytics (Professional Left-Right Layout) */}
        <section className="mb-6 grid grid-cols-1 lg:grid-cols-12 gap-6">
          
          {/* LEFT: Quick Stats (Vertical Stack) */}
          <div className="lg:col-span-3 flex flex-col gap-4">
            
            {/* Present Stat */}
            <div className="bg-white p-5 rounded-2xl shadow-sm border border-[#0F204A]/5 flex items-center justify-between hover:border-[#0F204A]/20 transition-all group">
              <div>
                <p className="text-[10px] font-bold text-[#0F204A]/50 uppercase tracking-widest mb-1">Present</p>
                <div className="flex items-baseline gap-2">
                  <p className="text-3xl font-black text-[#0F204A]">21</p>
                  <p className="text-[10px] font-bold text-green-500 flex items-center"><span className="material-symbols-outlined text-[12px]">arrow_drop_up</span> 2%</p>
                </div>
              </div>
              <div className="w-10 h-10 rounded-full bg-[#F4F7FF] flex items-center justify-center group-hover:bg-[#0F204A] transition-colors">
                <span className="material-symbols-outlined text-[#0F204A] group-hover:text-white text-[20px]">check_circle</span>
              </div>
            </div>

            {/* Absent Stat */}
            <div className="bg-white p-5 rounded-2xl shadow-sm border border-[#0F204A]/5 flex items-center justify-between hover:border-red-200 transition-all group">
              <div>
                <p className="text-[10px] font-bold text-[#0F204A]/50 uppercase tracking-widest mb-1">Absent</p>
                <div className="flex items-baseline gap-2">
                  <p className="text-3xl font-black text-red-500">01</p>
                  <p className="text-[10px] font-bold text-[#0F204A]/40 flex items-center">Stable</p>
                </div>
              </div>
              <div className="w-10 h-10 rounded-full bg-red-50 flex items-center justify-center group-hover:bg-red-500 transition-colors">
                <span className="material-symbols-outlined text-red-500 group-hover:text-white text-[20px]">cancel</span>
              </div>
            </div>

            {/* Half Day Stat */}
            <div className="bg-white p-5 rounded-2xl shadow-sm border border-[#0F204A]/5 flex items-center justify-between hover:border-[#D4AF37]/50 transition-all group">
              <div>
                <p className="text-[10px] font-bold text-[#0F204A]/50 uppercase tracking-widest mb-1">Half Day</p>
                <div className="flex items-baseline gap-2">
                  <p className="text-3xl font-black text-[#D4AF37]">02</p>
                  <p className="text-[10px] font-bold text-[#0F204A]/40 flex items-center">Planned</p>
                </div>
              </div>
              <div className="w-10 h-10 rounded-full bg-[#FFF9E6] flex items-center justify-center group-hover:bg-[#D4AF37] transition-colors">
                <span className="material-symbols-outlined text-[#D4AF37] group-hover:text-white text-[20px]">timelapse</span>
              </div>
            </div>
            
          </div>

          {/* RIGHT: Chart Area */}
          <div className="lg:col-span-9 bg-white rounded-2xl p-6 shadow-sm border border-[#0F204A]/5 flex flex-col h-full">
            
            {/* Chart Header */}
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-8 gap-4 border-b border-[#0F204A]/5 pb-4">
              <div>
                <h3 className="text-lg font-black text-[#0F204A]">Attendance Overview</h3>
                <p className="text-xs font-semibold text-[#0F204A]/50 mt-1">Monthly tracking and performance trends</p>
              </div>
              <div className="flex items-center gap-4">
                <div className="flex flex-col items-end">
                  <p className="text-[10px] font-bold text-[#0F204A]/50 uppercase tracking-wider mb-0.5">Average Rate</p>
                  <p className="text-lg font-black text-green-500 leading-none">94.8%</p>
                </div>
                <div className="h-8 w-px bg-[#0F204A]/10"></div>
                <select className="bg-[#F4F7FF] border border-[#0F204A]/10 rounded-lg font-bold text-xs py-2 px-3 text-[#0F204A] focus:outline-none focus:border-[#D4AF37] cursor-pointer shadow-sm">
                  <option>Last 30 Days</option>
                  <option>Last Quarter</option>
                </select>
              </div>
            </div>

            {/* Custom CSS Bar Chart */}
            <div className="flex-grow flex flex-col justify-end">
              
              {/* Legends */}
              <div className="flex gap-4 mb-4 self-end bg-gray-50 px-3 py-1.5 rounded-full border border-gray-200">
                <div className="flex items-center gap-1.5"><span className="w-2.5 h-2.5 rounded-full bg-[#0F204A]"></span><span className="text-[10px] font-bold text-[#0F204A]/60">Present</span></div>
                <div className="flex items-center gap-1.5"><span className="w-2.5 h-2.5 rounded-full bg-red-500"></span><span className="text-[10px] font-bold text-[#0F204A]/60">Absent</span></div>
                <div className="flex items-center gap-1.5"><span className="w-2.5 h-2.5 rounded-full bg-[#D4AF37]"></span><span className="text-[10px] font-bold text-[#0F204A]/60">Half Day</span></div>
              </div>

              {/* Chart Plot Area */}
              <div className="relative flex-grow flex items-end gap-6 md:gap-10 h-44 border-l-2 border-b-2 border-[#0F204A]/5 pl-4 pb-px">
                
                {/* Horizontal Grid Lines */}
                <div className="absolute inset-0 flex flex-col justify-between pointer-events-none">
                  {[100, 75, 50, 25, 0].map((val, i) => (
                    <div key={i} className="flex items-center w-full">
                      <span className="absolute -left-7 text-[9px] font-bold text-[#0F204A]/40 w-5 text-right">{val}</span>
                      <div className="border-t border-dashed border-[#0F204A]/10 w-full ml-1"></div>
                    </div>
                  ))}
                </div>

                {/* Bars */}
                {[
                  { p: 85, h: 5, a: 0 },
                  { p: 90, h: 0, a: 0 },
                  { p: 70, h: 10, a: 10 },
                  { p: 80, h: 10, a: 0 },
                ].map((col, idx) => (
                  <div key={idx} className="flex-1 flex flex-col justify-end items-center gap-px relative h-full group z-10">
                    <div className={`w-full max-w-[32px] bg-[#0F204A] rounded-t-md transition-all duration-1000 ease-out hover:opacity-80 cursor-pointer ${mounted ? '' : '!h-0'}`} style={{ height: mounted ? `${col.p}%` : '0%' }}></div>
                    {col.a > 0 && <div className={`w-full max-w-[32px] bg-red-500 transition-all duration-1000 delay-100 ease-out hover:opacity-80 cursor-pointer ${mounted ? '' : '!h-0'}`} style={{ height: mounted ? `${col.a}%` : '0%' }}></div>}
                    {col.h > 0 && <div className={`w-full max-w-[32px] bg-[#D4AF37] transition-all duration-1000 delay-200 ease-out hover:opacity-80 cursor-pointer ${mounted ? '' : '!h-0'}`} style={{ height: mounted ? `${col.h}%` : '0%' }}></div>}
                  </div>
                ))}
              </div>
              
              {/* X-Axis Labels */}
              <div className="flex justify-between mt-3 px-4 ml-4">
                {['Week 1', 'Week 2', 'Week 3', 'Week 4'].map(w => <span key={w} className="text-[10px] font-bold text-[#0F204A]/60">{w}</span>)}
              </div>

            </div>
          </div>

        </section>

       

      </main>
    </div>
  );
}