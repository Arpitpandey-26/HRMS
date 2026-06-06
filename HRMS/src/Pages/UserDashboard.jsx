import React, { useState, useEffect } from 'react';

export default function UserDashboard() {
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    setTimeout(() => setMounted(true), 100);
  }, []);

  return (
    <div className="flex min-h-screen bg-[#F4F7FF] font-sans text-[#0F204A] selection:bg-[#D4AF37] selection:text-white">
      
     {/* ================= SIDEBAR NAV (Slimmer: w-60) ================= */}
      <aside className="fixed left-0 top-0 h-full w-60 bg-gradient-to-b from-[#F4F7FF] via-white to-[#FFF5D1] border-r border-[#D4AF37]/20 shadow-[4px_0_24px_rgba(212,175,55,0.08)] flex flex-col z-40">
        
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
          <div className="flex items-center gap-3 p-2.5 bg-white/60 backdrop-blur-sm rounded-xl border border-[#D4AF37]/20 shadow-sm">
            <img 
              alt="Arpit Pandey" 
              className="w-9 h-9 rounded-lg object-cover shadow-sm border border-white" 
              src="" 
            />
            <div>
              <p className="font-bold text-[#0F204A] text-[13px]">Arpit Pandey</p>
              <p className="text-[10px] font-bold text-[#0F204A]/60">Software Developer</p>
            </div>
          </div>
        </div>

        {/* Navigation Links */}
        <div className="flex-1 px-4 -gap-1 overflow-hidden">
          <a href="#" className="flex items-center gap-3 bg-gradient-to-r from-[#D4AF37] to-[#FDE047] text-[#0F204A] px-4 py-2.5 rounded-lg shadow-[0_4px_10px_rgba(212,175,55,0.3)] transition-all">
            <span className="material-symbols-outlined text-[18px] text-[#0F204A]">dashboard</span>
            <span className="font-black text-[13px]">Dashboard</span>
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
            <a key={index} href="#" className="flex items-center gap-3 px-4 py-2.5 mt-1 rounded-lg text-[#0F204A]/70 hover:bg-white/70 hover:text-[#0F204A] hover:shadow-sm border border-transparent hover:border-[#D4AF37]/20 transition-all duration-200 group">
              <span className="material-symbols-outlined text-[18px] group-hover:text-[#D4AF37] transition-colors">{item.icon}</span>
              <span className="font-bold text-[13px]">{item.label}</span>
            </a>
          ))}
        </div>

        {/* Bottom Actions */}
        <div className="p-4 border-t border-[#D4AF37]/20 space-y-1 bg-white/30 backdrop-blur-sm">
          <a href="#" className="flex items-center gap-3 px-4 py-2.5 rounded-lg text-[#0F204A]/70 hover:bg-white/70 hover:text-[#0F204A] hover:shadow-sm border border-transparent hover:border-[#D4AF37]/20 transition-all group">
            <span className="material-symbols-outlined text-[18px] group-hover:text-[#D4AF37]">settings</span>
            <span className="font-bold text-[13px]">Settings</span>
          </a>
          <a href="#" className="flex items-center gap-3 px-4 py-2.5 rounded-lg text-[#0F204A]/70 hover:bg-red-50 hover:text-red-600 hover:shadow-sm border border-transparent hover:border-red-100 transition-all">
            <span className="material-symbols-outlined text-[18px]">logout</span>
            <span className="font-bold text-[13px]">Sign Out</span>
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
            
            {/* Exact Image-like Slanted Solid Gradient Background  */}
            <div className="absolute top-0 right-0 w-1/3 h-full bg-[#FFF5D1]/50 skew-x-12 translate-x-10 pointer-events-none"></div>
            
            {/* Reduced Image Size */}
            <img 
              alt="Arpit Pandey" 
              className="w-20 h-20 rounded-xl object-cover shadow-md border-2 border-white relative z-10" 
              src="" 
            />
            
            <div className="flex-grow text-center md:text-left z-10">
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-3 mb-1.5 w-full pr-0 md:pr-[25%] lg:pr-[30%]">
                <h2 className="text-3xl font-black text-[#0F204A] tracking-tight">Arpit Pandey</h2>
                {/* Active badge position adjusted like the image */}
                <span className="px-3 py-0.5 bg-green-100 text-green-700 rounded-full text-[10px] font-bold self-start md:self-center">Active</span>
              </div>
              <p className="text-sm font-black text-[#0F204A]/70">Software Developer • ID: SE-1234</p>
              
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
                <p className="text-[10px] font-bold text-[#0F204A]/60 mb-0.5">Join Date</p>
                <p className="text-sm font-black text-[#0F204A]">May 25, 2026</p>
              </div>
              <button className="bg-[#0F204A] text-white hover:bg-[#D4AF37] hover:text-[#0F204A] px-6 py-2.5 rounded-lg font-bold text-xs shadow-md transition-all active:scale-95">
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


         {/* Section 3: Daily Attendance Log */}
        <section className="mb-6 bg-white rounded-2xl p-6 shadow-sm border border-[#0F204A]/5">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-5 gap-4">
            <h3 className="text-base font-black text-[#0F204A]">Daily Attendance Log</h3>
            <div className="flex gap-2">
              <button className="flex items-center gap-1.5 bg-[#0F204A] text-white px-4 py-2 rounded-lg font-bold text-xs shadow-md hover:bg-[#D4AF37] hover:text-[#0F204A] transition-all">
                <span className="material-symbols-outlined text-[16px]">login</span> Punch In
              </button>
              <button className="flex items-center gap-1.5 bg-white border border-[#0F204A]/10 text-[#0F204A] px-4 py-2 rounded-lg font-bold text-xs hover:bg-[#F4F7FF] transition-all">
                <span className="material-symbols-outlined text-[16px]">logout</span> Punch Out
              </button>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { d: 'Today, June 06', in: '09:30 AM', out: '06:30 PM' },
              { d: 'Yesterday, june 05', in: '09:35 AM', out: '06:35 PM' },
              { d: 'June 04, 2026', in: '09:25 AM', out: '06:30 PM' },
              { d: 'June 03, 2026', in: '09:30 AM', out: '06:40 PM' }
            ].map((log, idx) => (
              <div key={idx} className="p-3.5 bg-[#F4F7FF] rounded-xl border border-[#0F204A]/5 hover:border-[#D4AF37]/50 transition-colors">
                <p className="text-[11px] font-bold text-[#0F204A]/50 mb-2">{log.d}</p>
                <div className="flex flex-col gap-1.5">
                  <div className="flex items-center gap-2">
                    <span className="material-symbols-outlined text-[#D4AF37] text-[14px]">login</span>
                    <span className="text-xs font-bold text-[#0F204A]">{log.in}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="material-symbols-outlined text-[#0F204A]/40 text-[14px]">logout</span>
                    <span className="text-xs font-bold text-[#0F204A]/70">{log.out}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Section 4 & 5: Salary and Appraisal */}
        <section className="mb-6 grid grid-cols-1 xl:grid-cols-2 gap-6">
          
          {/* Salary Components */}
          <div className="bg-white rounded-2xl p-6 shadow-sm border border-[#0F204A]/5 flex flex-col">
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-base font-black text-[#0F204A]">Salary Components</h3>
              <span className="px-2.5 py-1 bg-[#F4F7FF] text-[#0F204A] border border-[#0F204A]/10 rounded-md text-[10px] font-bold tracking-wide">Current CTC: ₹1,24,000</span>
            </div>
            
            <div className="space-y-3 flex-1">
              <div className="flex justify-between items-center p-4 bg-[#F8FAFC] rounded-xl border border-gray-100">
                <div>
                  <p className="text-[10px] font-bold text-[#0F204A]/50 uppercase tracking-widest mb-1">Basic Salary</p>
                  <p className="text-base font-black text-[#0F204A]">₹30,345.00</p>
                </div>
                <div className="text-right">
                  <p className="text-[10px] font-bold text-[#0F204A]/50 uppercase tracking-widest mb-1">HRA</p>
                  <p className="text-base font-black text-[#0F204A]">₹40,000.00</p>
                </div>
              </div>
              
              <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center p-5 bg-gradient-to-r from-[#0F204A] to-[#1E3A8A] rounded-xl shadow-md">
                <div className="mb-3 sm:mb-0">
                  <p className="text-[10px] font-bold text-[#D4AF37] uppercase tracking-widest mb-1">Monthly Net Salary</p>
                  <p className="text-2xl font-black text-white">₹32,245.00</p>
                </div>
                <button className="flex items-center gap-1.5 bg-[#D4AF37] text-[#0F204A] px-4 py-2 rounded-lg font-bold text-xs shadow-sm hover:bg-white transition-all w-full sm:w-auto justify-center">
                  <span className="material-symbols-outlined text-[16px]">download</span> Payslip
                </button>
              </div>
            </div>
            <p className="mt-3 text-[10px] font-bold text-[#0F204A]/40 uppercase tracking-widest">Next Revision: July 2025</p>
          </div>

          {/* Performance Rating */}
          <div className="bg-white rounded-2xl p-6 shadow-sm border border-[#0F204A]/5 flex flex-col">
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-base font-black text-[#0F204A]">Performance Rating</h3>
              <a href="#" className="text-xs font-bold text-[#D4AF37] hover:text-[#0F204A] transition-colors flex items-center gap-1">
                View Details <span className="material-symbols-outlined text-[14px]">arrow_forward</span>
              </a>
            </div>
            
            <div className="flex flex-col sm:flex-row items-center gap-6 flex-1">
              {/* Reduced Radial Chart */}
              <div className="flex flex-col items-center justify-center p-5 bg-[#F4F7FF] rounded-2xl shrink-0">
                <div className="relative flex items-center justify-center w-24 h-24">
                  <svg className="w-full h-full transform -rotate-90">
                    <circle className="text-gray-200" cx="48" cy="48" fill="transparent" r="40" strokeWidth="6" stroke="currentColor"></circle>
                    <circle className="text-[#0F204A] transition-all duration-1500 ease-out" cx="48" cy="48" fill="transparent" r="40" strokeWidth="6" stroke="currentColor" strokeDasharray="251.2" strokeDashoffset={mounted ? "25.12" : "251.2"} strokeLinecap="round"></circle>
                  </svg>
                  <div className="absolute text-center">
                    <p className="text-2xl font-black text-[#0F204A] leading-none mb-0.5">4.5</p>
                    <p className="text-[9px] font-bold text-[#D4AF37] uppercase tracking-widest">Overall</p>
                  </div>
                </div>
               
              </div>

              {/* Skill Bars */}
              <div className="flex-1 w-full space-y-4">
                {[
                  { name: 'Technical Skill', val: 92, col: 'bg-[#0F204A]' },
                  { name: 'Leadership', val: 88, col: 'bg-[#D4AF37]' },
                  { name: 'Soft Skills', val: 95, col: 'bg-[#38BDF8]' }
                ].map((skill, i) => (
                  <div key={i} className="group">
                    <div className="flex justify-between items-center mb-1">
                      <span className="text-xs font-bold text-[#0F204A]">{skill.name}</span>
                      <span className="text-[11px] font-black text-[#0F204A]/60">{skill.val}%</span>
                    </div>
                    <div className="w-full h-1.5 bg-gray-100 rounded-full overflow-hidden">
                      <div className={`h-full ${skill.col} transition-all duration-1000 ease-out`} style={{ width: mounted ? `${skill.val}%` : '0%' }}></div>
                    </div>
                  </div>
                ))}
                
                
              </div>
            </div>
          </div>
        </section>

        {/* Section 6: Request Management */}
        <section className="mb-6">
          {/* Main Wrapper Div (Heading ab iske andar hai) */}
          <div className="bg-white rounded-2xl p-6 shadow-sm border border-[#0F204A]/5">
            
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-base font-black text-[#0F204A]">Request Management</h3>
              <button className="text-[11px] font-bold text-[#D4AF37] hover:text-[#0F204A] transition-colors flex items-center gap-1">
                View History <span className="material-symbols-outlined text-[14px]">arrow_forward</span>
              </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
              
              {/* Option 1: Leave Request */}
              <div className="group relative bg-gradient-to-br from-[#F4F7FF] to-white p-5 rounded-2xl border border-[#0F204A]/10 hover:border-[#0F204A]/30 hover:shadow-[0_8px_20px_rgba(15,32,74,0.06)] transition-all duration-300 hover:-translate-y-1">
                <div className="flex justify-between items-start mb-4">
                  <div className="w-10 h-10 bg-white text-[#0F204A] rounded-xl shadow-sm flex items-center justify-center border border-[#0F204A]/5 group-hover:scale-110 transition-transform duration-300">
                    <span className="material-symbols-outlined text-[20px]">event_busy</span>
                  </div>
                  <span className="px-2.5 py-1 bg-yellow-100 text-yellow-700 rounded-md text-[9px] font-bold tracking-widest uppercase shadow-sm">1 Pending</span>
                </div>
                <h4 className="text-sm font-black text-[#0F204A] mb-1.5">Leave Request</h4>
                <p className="text-xs font-semibold text-[#0F204A]/60 mb-5">Request full-day PTOs, casual, or sick leaves securely.</p>
                
                {/* Animated Button */}
                <button className="w-full py-2.5 bg-white border border-[#0F204A]/20 text-[#0F204A] rounded-xl font-bold text-xs group-hover:bg-[#0F204A] group-hover:text-white group-hover:border-[#0F204A] transition-all duration-300 flex justify-center items-center gap-1.5 overflow-hidden">
                  Apply Leave 
                  <span className="material-symbols-outlined text-[14px] opacity-0 -ml-4 group-hover:opacity-100 group-hover:ml-0 transition-all duration-300">add</span>
                </button>
              </div>

              {/* Option 2: Half-Day Request */}
              <div className="group relative bg-gradient-to-br from-[#FFF9E6] to-white p-5 rounded-2xl border border-[#D4AF37]/20 hover:border-[#D4AF37]/50 hover:shadow-[0_8px_20px_rgba(212,175,55,0.1)] transition-all duration-300 hover:-translate-y-1">
                <div className="flex justify-between items-start mb-4">
                  <div className="w-10 h-10 bg-white text-[#D4AF37] rounded-xl shadow-sm flex items-center justify-center border border-[#D4AF37]/10 group-hover:scale-110 transition-transform duration-300">
                    <span className="material-symbols-outlined text-[20px]">timelapse</span>
                  </div>
                  <span className="px-2.5 py-1 bg-green-100 text-green-700 rounded-md text-[9px] font-bold tracking-widest uppercase shadow-sm">Approved</span>
                </div>
                <h4 className="text-sm font-black text-[#0F204A] mb-1.5">Half-Day Request</h4>
                <p className="text-xs font-semibold text-[#0F204A]/60 mb-5">Apply for first or second half leaves for urgent short tasks.</p>
                
                {/* Animated Button */}
                <button className="w-full py-2.5 bg-white border border-[#D4AF37]/40 text-[#D4AF37] rounded-xl font-bold text-xs group-hover:bg-[#D4AF37] group-hover:text-white group-hover:border-[#D4AF37] transition-all duration-300 flex justify-center items-center gap-1.5 overflow-hidden">
                  Request Half-Day 
                  <span className="material-symbols-outlined text-[14px] opacity-0 -ml-4 group-hover:opacity-100 group-hover:ml-0 transition-all duration-300">add</span>
                </button>
              </div>

              {/* Option 3: Expense Claim (Reimbursement) */}
              <div className="group relative bg-gradient-to-br from-[#F0F9FF] to-white p-5 rounded-2xl border border-[#38BDF8]/20 hover:border-[#38BDF8]/50 hover:shadow-[0_8px_20px_rgba(56,189,248,0.1)] transition-all duration-300 hover:-translate-y-1">
                <div className="flex justify-between items-start mb-4">
                  <div className="w-10 h-10 bg-white text-[#38BDF8] rounded-xl shadow-sm flex items-center justify-center border border-[#38BDF8]/10 group-hover:scale-110 transition-transform duration-300">
                    <span className="material-symbols-outlined text-[20px]">receipt_long</span>
                  </div>
                  <span className="px-2.5 py-1 bg-gray-100 text-gray-500 rounded-md text-[9px] font-bold tracking-widest uppercase shadow-sm">0 Drafts</span>
                </div>
                <h4 className="text-sm font-black text-[#0F204A] mb-1.5">Expense Claim</h4>
                <p className="text-xs font-semibold text-[#0F204A]/60 mb-5">Submit bills for travel, meals, or internet reimbursements.</p>
                
                {/* Animated Button */}
                <button className="w-full py-2.5 bg-white border border-[#38BDF8]/40 text-[#38BDF8] rounded-xl font-bold text-xs group-hover:bg-[#38BDF8] group-hover:text-white group-hover:border-[#38BDF8] transition-all duration-300 flex justify-center items-center gap-1.5 overflow-hidden">
                  File Expense 
                  <span className="material-symbols-outlined text-[14px] opacity-0 -ml-4 group-hover:opacity-100 group-hover:ml-0 transition-all duration-300">add</span>
                </button>
              </div>

            </div>
          </div>
        </section>

        {/* Section 7: Career Growth Roadmap */}
        <section className="mb-6">
          <div className="bg-white rounded-2xl p-6 shadow-sm border border-[#0F204A]/5">
            <h3 className="text-base font-black text-[#0F204A] mb-6">Career Growth Roadmap</h3>
            
            <div className="relative">
              <div className="absolute left-3 top-2 bottom-2 w-0.5 bg-gray-100 rounded-full"></div>
              
              <div className="space-y-6">
                <div className="relative pl-10 flex flex-col md:flex-row md:items-center gap-4">
                  <div className="absolute left-[9px] top-1.5 w-2.5 h-2.5 bg-green-500 rounded-full ring-[3px] ring-green-100 z-10"></div>
                  <div className="flex-grow">
                    <h4 className="text-sm font-black text-[#0F204A]">Junior Developer</h4>
                    <p className="text-[11px] font-bold text-[#0F204A]/50 mt-0.5">Completed April 2026 • Duration: 1 Year</p>
                  </div>
                  <span className="material-symbols-outlined text-green-500 text-2xl">check_circle</span>
                </div>

                <div className="relative pl-10 flex flex-col md:flex-row md:items-center gap-4">
                  <div className="absolute left-[9px] top-1.5 w-2.5 h-2.5 bg-[#0F204A] rounded-full ring-[3px] ring-[#F4F7FF] z-10"></div>
                  <div className="flex-grow">
                    <h4 className="text-base font-black text-[#D4AF37]">Software Developer</h4>
                    <p className="text-xs font-bold text-[#0F204A]/60 mt-0.5">Current Position • Since May 2026</p>
                    <div className="mt-2 flex gap-1.5">
                     
                    </div>
                  </div>
                  <div className="px-4 py-1.5 bg-[#0F204A] text-white rounded-lg font-bold text-xs shadow-md">Current</div>
                </div>

                <div className="relative pl-10 flex flex-col md:flex-row md:items-center gap-4 opacity-50">
                  <div className="absolute left-[9px] top-1.5 w-2.5 h-2.5 bg-gray-300 rounded-full ring-[3px] ring-white z-10 border border-gray-400"></div>
                  <div className="flex-grow">
                    <h4 className="text-sm font-bold text-[#0F204A]">Senior Software Developer</h4>
                    <p className="text-[11px] font-semibold text-[#0F204A]/60 mt-0.5">Projected Target: Q4 2028</p>
                  </div>
                  <span className="material-symbols-outlined text-gray-400 text-2xl">lock</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Footer Minimal */}
        <footer className="pt-6 pb-2 flex flex-col md:flex-row justify-between items-center border-t border-[#0F204A]/5 mt-8 gap-3">
          <p className="text-[11px] font-bold text-[#0F204A]/50">© 2026 TechHansa HRMS. All rights reserved.</p>
          <div className="flex gap-5">
            <a className="text-[11px] font-bold text-[#0F204A]/50 hover:text-[#D4AF37] transition-all" href="#">Privacy</a>
            <a className="text-[11px] font-bold text-[#0F204A]/50 hover:text-[#D4AF37] transition-all" href="#">Terms</a>
            <a className="text-[11px] font-bold text-[#0F204A]/50 hover:text-[#D4AF37] transition-all" href="#">Support</a>
          </div>
        </footer>

       

      </main>
    </div>
  );
}