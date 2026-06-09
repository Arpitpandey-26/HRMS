import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

export default function UserDashboard() {
  const [mounted, setMounted] = useState(false);

  // REAL-TIME & ATTENDANCE STATES 
  const [time, setTime] = useState(new Date());
  const [isPunchedIn, setIsPunchedIn] = useState(false);
  const [todayLog, setTodayLog] = useState({ in: '--:-- --', out: '--:-- --' });

  useEffect(() => {
    setTimeout(() => setMounted(true), 100);

    // Live Clock (Forced to IST - Indian Standard Time Zone)
    const timer = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  // Format Time & Date specifically for India Standard Time
  const formattedTime = time.toLocaleTimeString('en-US', { timeZone: 'Asia/Kolkata', hour: '2-digit', minute: '2-digit', hour12: true });
  const [timeVal, amPm] = formattedTime.split(' ');
  const formattedDate = time.toLocaleDateString('en-US', { timeZone: 'Asia/Kolkata', weekday: 'long', month: 'long', day: '2-digit', year: 'numeric' });

  // Handle Punch In / Punch Out Toggle Functionality
  const handlePunch = () => {
    if (!isPunchedIn) {
      setIsPunchedIn(true);
      setTodayLog(prev => ({ ...prev, in: formattedTime })); // Save exact Punch In time
    } else {
      setIsPunchedIn(false);
      setTodayLog(prev => ({ ...prev, out: formattedTime })); // Save exact Punch Out time
    }
  };
  // 

  return (
    <div className="flex min-h-screen bg-[#F4F7FF] font-sans text-[#0F204A] selection:bg-[#D4AF37] selection:text-white">
      
     {/* SIDEBAR NAV (Slimmer: w-50) */}
      <aside className="fixed left-0 top-0 h-full w-55 bg-gradient-to-b from-[#F4F7FF] via-white to-[#FFF5D1] border-r border-[#D4AF37]/20 shadow-[4px_0_24px_rgba(212,175,55,0.08)] flex flex-col z-40">
        
        {/* Logo Section */}
        <div className="p-2 mb-2 flex items-center gap-1">
          <div className="w-10 h-10 md:w-10 md:h-10 rounded-full flex items-center justify-center overflow-hidden bg-transparent shrink-0">
          <img src="logo.png" alt="Company Logo" className="w-full h-full object-contain drop-shadow-md" /> 
          </div>
          <span className="text-lg font-black tracking-tight text-[#D4AF37]">
            Techhansa
          </span>
           <span className="text-lg font-black tracking-tight text-[#1E3A8A]">
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
        <div className="flex-1 px-2 -gap-1 overflow-hidden">
          
          {/* Active Dashboard Link */}
          <Link to="/user-dashboard" className="flex items-center gap-3 bg-gradient-to-r from-[#D4AF37] to-[#FDE047] text-[#0F204A] px-4 py-2.5 rounded-lg shadow-[0_4px_10px_rgba(212,175,55,0.3)] transition-all">
            <span className="material-symbols-outlined text-[18px] text-[#0F204A]">dashboard</span>
            <span className="font-black text-[13px]">Dashboard</span>
          </Link>
          
          {/* Inactive Links mapped dynamically */}
          {[
            //  Yaha 'path' add kiya gaya hai Profile ke liye
            { icon: 'person', label: 'Profile', path: '/user-profile' }, 
            { icon: 'calendar_today', label: 'Attendance', path: '/user-attendance' },
            { icon: 'payments', label: 'Salary', path: '#' },
            { icon: 'monitoring', label: 'Appraisal', path: '#' },
            { icon: 'mark_as_unread', label: 'Requests', path: '#' },
            { icon: 'trending_up', label: 'Growth', path: '#' },
            { icon: 'mail', label: 'Newsletter', path: '#' }
          ].map((item, index) => (
            //  <a> tag ko <Link> se replace kiya aur href="#" ko to={item.path} kiya
            <Link 
              key={index} 
              to={item.path} 
              className="flex items-center gap-3 px-4 py-2.5 mt-1 rounded-lg text-[#0F204A]/70 hover:bg-white/70 hover:text-[#0F204A] hover:shadow-sm border border-transparent hover:border-[#D4AF37]/20 transition-all duration-200 group"
            >
              <span className="material-symbols-outlined text-[18px] group-hover:text-[#D4AF37] transition-colors">{item.icon}</span>
              <span className="font-bold text-[13px]">{item.label}</span>
            </Link>
          ))}
        </div>

        {/* Bottom Actions */}
        <div className="p-1 border-t border-[#D4AF37]/20 space-y-1 bg-white/30 backdrop-blur-sm">
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

      {/* MAIN CONTENT CANVAS  */}
      <main className="ml-55 flex-1 p-6 xl:p-8 max-w-[1440px] mx-auto">
        
       {/* Header */}
        <header className="flex justify-between items-center mb-6">
          <div>
            {/*  Vibrant Royal Blue for Headings (No black tint)  */}
            <h1 className="text-2xl font-black text-[#2563EB]/85 tracking-tight">Employee Dashboard</h1>
            {/*  Soft Slate for subtext  */}
            <p className="text-[#64748B] font-medium text-xs mt-1">Welcome back, Arpit. Here's your performance summary.</p>
          </div>
          <div className="flex gap-3">
            {/* Blue tinted border and soft shadow  */}
            <button className="relative p-2 rounded-full bg-white border border-[#2563EB]/15 hover:border-[#D4AF37] text-[#2563EB]/85 hover:text-[#D4AF37] transition-all shadow-[0_4px_15px_rgba(37,99,235,0.08)]">
              <span className="material-symbols-outlined text-[20px]">notifications</span>
              <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-red-400 rounded-full border border-white"></span>
            </button>
          </div>
        </header>

    {/* Section 1: Profile Banner */}
        <section className="mb-6">
          {/*  Container with blue-tinted shadow instead of black/grey  */}
          <div className="bg-gradient-to-r from-[#E0F2FE] via-[#F8FAFC] to-white rounded-2xl p-2 flex flex-col md:flex-row items-center gap-6 relative overflow-hidden shadow-[0_8px_30px_rgba(37,99,235,0.08)] border border-[#2563EB]/10">
            
            {/*  Gold gradient with pure gold shadow (no black drop-shadow)  */}
            <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-[#FFF9E6] to-[#FFF5D1] skew-x-12 translate-x-10 pointer-events-none border-l border-[#D4AF37]/30 shadow-[-15px_0_30px_rgba(250,204,21,0.15)]"></div>
            
            {/* Reduced Image Size */}
            <img 
              alt="Arpit Pandey" 
              className="w-20 h-20 rounded-xl object-cover shadow-[0_4px_15px_rgba(37,99,235,0.1)] border-2 border-white relative z-10" 
              src="" 
            />
            
            <div className="flex-grow text-center md:text-left z-10">
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-3 mb-1.5 w-full pr-0 md:pr-[25%] lg:pr-[30%]">
                <h2 className="text-3xl font-black text-[#2563EB]/85 tracking-tight">Arpit Pandey</h2>
               
              </div>
              <p className="text-sm font-black text-[#475569]">Software Developer • ID: SE-1234</p>
              
              <div className="mt-3 flex flex-wrap justify-center md:justify-start gap-4">
                <span className="flex items-center gap-1 text-xs font-semibold text-[#64748B]">
                  <span className="material-symbols-outlined text-[16px] text-[#D4AF37]">location_on</span>Varanasi
                </span>
                <span className="flex items-center gap-1 text-xs font-semibold text-[#64748B]">
                  <span className="material-symbols-outlined text-[16px] text-[#D4AF37]">mail</span>arpit.pandey@techhansait.com
                </span>
              </div>
            </div>
            
            <div className="flex flex-col items-center md:items-end gap-2.5 z-10 mt-4 md:mt-0">
              <div className="text-center md:text-right">
                <p className="text-[10px] font-bold text-[#64748B] mb-0.5 uppercase tracking-widest">Join Date</p>
                <p className="text-sm font-black text-[#2563EB]/85">May 25, 2026</p>
              </div>
              
            </div>
          </div>
        </section>
      {/* COMBINED ATTENDANCE HUB (AURA GLOW + ROYAL BLUE CHART)  */}
        <section className="mb-6">
          {/* Main Outer Container */}
          <div className="bg-white rounded-3xl p-1.5 shadow-[0_8px_30px_rgba(15,32,74,0.03)] border border-[#0F204A]/5 flex flex-col lg:flex-row gap-2.5">
            
            {/*  LEFT: The "Star" Punch In/Out Widget (Glow Gradient Card)  */}
            <div className="lg:w-[35%] rounded-2xl p-2 md:p-4 relative overflow-hidden flex flex-col shadow-[inner_0_2px_12px_rgba(255,255,255,0.8)] border border-[#D4AF37]/20 group bg-gradient-to-b from-[#FFF5D1] via-white to-[#E0F2FE]">
              
              {/* Dynamic Glow Background */}
              <div className={`absolute top-[-20%] right-[-20%] w-50 h-50 blur-[80px] rounded-full transition-colors duration-700 pointer-events-none ${
                isPunchedIn ? 'bg-green-400/30 group-hover:bg-green-400/40' : 'bg-[#D4AF37]/30 group-hover:bg-[#D4AF37]/40'
              }`}></div>
              
              {/* Header & Status */}
              <div className="relative z-10 flex justify-between items-start mb-6">
                <div>
                  <h3 className="text-[#0F204A]/60 text-[10px] font-black tracking-widest uppercase mb-1.5">Current Status</h3>
                  
                  {/* Dynamic Attendance Status Badge */}
                  <div className={`flex items-center gap-2 w-fit px-3 py-1.5 rounded-full border backdrop-blur-md transition-all duration-300 ${
                    isPunchedIn ? 'bg-green-50 border-green-200 shadow-sm' : 'bg-white/70 border-[#0F204A]/10 shadow-sm'
                  }`}>
                    <span className={`w-2 h-2 rounded-full animate-pulse ${
                      isPunchedIn ? 'bg-green-500 shadow-[0_0_8px_rgba(34,197,94,0.6)]' : 'bg-red-500 shadow-[0_0_8px_rgba(239,68,68,0.6)]'
                    }`}></span>
                    <span className={`text-xs font-bold tracking-wide ${isPunchedIn ? 'text-green-700' : 'text-[#1E3A8A]'}`}>
                      {isPunchedIn ? 'Active (Punched In)' : 'Not Punched In'}
                    </span>
                  </div>
                </div>
                <div className="w-10 h-10 rounded-full bg-white border border-[#0F204A]/5 flex items-center justify-center shadow-sm">
                  <span className="material-symbols-outlined text-[#0F204A]/60 text-[20px]">schedule</span>
                </div>
              </div>

              {/* Dynamic Live Time */}
              <div className="relative z-10 my-4 text-center">
                <h2 className="text-5xl md:text-6xl font-black text-[#2563EB]/85 tracking-tight drop-shadow-sm mb-1">
                  {timeVal} <span className="text-2xl text-[#0F204A]/50">{amPm}</span>
                </h2>
                <p className="text-sm font-bold text-[#0F204A]/60">{formattedDate}</p>
              </div>

              {/* DYNAMIC PUNCH BUTTON  */}
              <div className="relative z-10 mt-6 mb-8 w-full">
                <button 
                  onClick={handlePunch}
                  className={`w-full relative group/btn overflow-hidden rounded-2xl p-[2px] transition-all duration-300 transform hover:-translate-y-1 ${
                    isPunchedIn 
                      ? 'bg-gradient-to-r from-red-500 via-rose-400 to-red-500 shadow-[0_4px_15px_rgba(239,68,68,0.2)] hover:shadow-[0_8px_25px_rgba(239,68,68,0.4)]' 
                      : 'bg-gradient-to-r from-[#D4AF37] via-[#FDE047] to-[#D4AF37] shadow-[0_4px_15px_rgba(212,175,55,0.2)] hover:shadow-[0_8px_25px_rgba(212,175,55,0.4)]'
                  }`}
                >
                  <div className="relative bg-white group-hover/btn:bg-transparent transition-colors duration-500 py-4 px-6 rounded-[14px] flex items-center justify-center gap-3">
                    <span className={`material-symbols-outlined text-[28px] transition-colors duration-500 ${
                      isPunchedIn ? 'text-red-500 group-hover/btn:text-white' : 'text-[#D4AF37] group-hover/btn:text-[#0F204A]'
                    }`}>
                      {isPunchedIn ? 'logout' : 'fingerprint'}
                    </span>
                    <span className={`text-xl font-black tracking-wider transition-colors duration-500 ${
                      isPunchedIn ? 'text-red-500 group-hover/btn:text-white' : 'text-[#D4AF37] group-hover/btn:text-[#0F204A]'
                    }`}>
                      {isPunchedIn ? 'PUNCH OUT' : 'PUNCH IN'}
                    </span>
                  </div>
                </button>
              </div>

              {/* Quick Stats */}
              <div className="relative z-10 grid grid-cols-3 gap-3 mt-auto pt-5 border-t border-[#0F204A]/10">
                <div className="text-center">
                  <p className="text-[9px] font-bold text-[#0F204A]/50 uppercase tracking-widest mb-1">Present</p>
                  <p className="text-xl font-black text-[#0F204A]">21</p>
                </div>
                <div className="text-center border-l border-r border-[#0F204A]/10">
                  <p className="text-[9px] font-bold text-[#0F204A]/50 uppercase tracking-widest mb-1">Absent</p>
                  <p className="text-xl font-black text-red-500">01</p>
                </div>
                <div className="text-center">
                  <p className="text-[9px] font-bold text-[#0F204A]/50 uppercase tracking-widest mb-1">Half Day</p>
                  <p className="text-xl font-black text-[#D4AF37]">02</p>
                </div>
              </div>
            </div>

            {/* RIGHT: Analytics & Recent Logs */}
            <div className="lg:w-[65%] bg-[#F8FAFC] rounded-2xl p-6 border border-[#0F204A]/5 flex flex-col">
              
              {/* Header */}
              <div className="flex justify-between items-center mb-6">
                <div>
                  <h3 className="text-lg font-black text-[#2563EB]/85 text-shadow-lg">Attendance Analytics</h3>
                  <p className="text-xs font-semibold text-[#0F204A]/50 mt-0.5">Your monthly trends & recent logs</p>
                </div>
                <div className="flex items-center gap-3">
                  <div className="bg-white px-3 py-1.5 rounded-lg border border-[#0F204A]/5 shadow-sm text-center">
                    <p className="text-[9px] font-bold text-[#0F204A]/50 uppercase tracking-wider mb-0.5">Average</p>
                    <p className="text-sm font-black text-green-500 leading-none">94.8%</p>
                  </div>
                </div>
              </div>

              {/* Middle Area: Chart */}
              <div className="flex-grow flex flex-col justify-end mb-6">
                {/* Legends - UPDATED COLOR */}
                <div className="flex gap-3 mb-4 self-end bg-white p-1.5 px-3 rounded-full shadow-sm border border-[#0F204A]/5">
                  <div className="flex items-center gap-1"><span className="w-2.5 h-2.5 rounded-full bg-[#2563EB]/85"></span><span className="text-[10px] font-bold text-[#0F204A]/60">Present</span></div>
                  <div className="flex items-center gap-1"><span className="w-2.5 h-2.5 rounded-full bg-red-500"></span><span className="text-[10px] font-bold text-[#0F204A]/60">Absent</span></div>
                  <div className="flex items-center gap-1"><span className="w-2.5 h-2.5 rounded-full bg-[#D4AF37]"></span><span className="text-[10px] font-bold text-[#0F204A]/60">Half Day</span></div>
                </div>

                {/* Chart Plot Area */}
                <div className="relative flex-grow flex items-end gap-6 md:gap-10 h-32 border-l-2 border-b-2 border-[#0F204A]/10 pl-4 pb-px overflow-hidden">
                  <div className="absolute inset-0 flex flex-col justify-between pointer-events-none">
                    {[100, 50, 0].map((val, i) => (
                      <div key={i} className="flex items-center w-full">
                        <span className="absolute -left-7 text-[9px] font-bold text-[#0F204A]/40 w-5 text-right">{val}</span>
                        <div className="border-t border-dashed border-[#0F204A]/10 w-full ml-1"></div>
                      </div>
                    ))}
                  </div>

                  {/* Bars - UPDATED COLOR */}
                  {[
                    { p: 85, h: 5, a: 0 },
                    { p: 90, h: 0, a: 0 },
                    { p: 70, h: 10, a: 10 },
                    { p: 80, h: 10, a: 0 },
                  ].map((col, idx) => (
                    <div key={idx} className="flex-1 flex flex-col justify-end items-center gap-px relative h-full z-10 group/bar">
                      
                      {/* Royal Blue for Primary Bar */}
                      <div className={`w-full max-w-[28px] bg-[#2563EB]/85 rounded-t-md transition-all duration-1000 group-hover/bar:brightness-110 ${mounted ? '' : '!h-0'}`} style={{ height: mounted ? `${col.p}%` : '0%' }}></div>
                      
                      {col.a > 0 && <div className={`w-full max-w-[28px] bg-red-500 transition-all duration-1000 delay-100 ${mounted ? '' : '!h-0'}`} style={{ height: mounted ? `${col.a}%` : '0%' }}></div>}
                      {col.h > 0 && <div className={`w-full max-w-[28px] bg-[#D4AF37] transition-all duration-1000 delay-200 ${mounted ? '' : '!h-0'}`} style={{ height: mounted ? `${col.h}%` : '0%' }}></div>}
                      
                      {/* Tooltip on hover */}
                      <div className="absolute bottom-full mb-2 bg-[#0F204A] text-white text-[9px] font-bold px-2 py-1 rounded opacity-0 group-hover/bar:opacity-100 transition-opacity whitespace-nowrap pointer-events-none shadow-lg z-20">
                        Pr: {col.p}% | Ab: {col.a}% | HD: {col.h}%
                      </div>
                    </div>
                  ))}
                </div>
                {/* X-Axis */}
                <div className="flex justify-between mt-2 px-4 ml-4">
                  {['Wk 1', 'Wk 2', 'Wk 3', 'Wk 4'].map(w => <span key={w} className="text-[10px] font-bold text-[#0F204A]/50">{w}</span>)}
                </div>
              </div>

              {/* Bottom Area: Recent Logs Grid */}
              <div className="pt-5 border-t border-[#0F204A]/5">
                <h4 className="text-[11px] font-black text-[#1E3A8A] uppercase tracking-widest mb-3">Recent Logs</h4>
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-3">
                  {[
                    { d: 'Today', in: todayLog.in, out: todayLog.out, active: true },
                    { d: 'Jun 05', in: '09:35 AM', out: '06:35 PM' },
                    { d: 'Jun 04', in: '09:25 AM', out: '06:30 PM' },
                    { d: 'Jun 03', in: '09:30 AM', out: '06:40 PM' }
                  ].map((log, idx) => (
                    <div key={idx} className={`p-3 rounded-xl border transition-colors ${log.active ? 'bg-white border-[#D4AF37]/40 shadow-sm' : 'bg-white/50 border-[#0F204A]/5 hover:border-[#0F204A]/20'}`}>
                      <p className={`text-[10px] font-bold mb-2 ${log.active ? 'text-[#D4AF37]' : 'text-[#0F204A]/50'}`}>{log.d}</p>
                      <div className="flex flex-col gap-1">
                        <div className="flex items-center justify-between">
                          <span className="text-[10px] font-semibold text-[#0F204A]/50">In</span>
                          <span className="text-[11px] font-bold text-[#0F204A]">{log.in}</span>
                        </div>
                        <div className="flex items-center justify-between">
                          <span className="text-[10px] font-semibold text-[#0F204A]/50">Out</span>
                          <span className="text-[11px] font-bold text-[#0F204A]/70">{log.out}</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* Section 4 & 5: Salary and Appraisal */}
        <section className="mb-6 grid grid-cols-1 xl:grid-cols-2 gap-6">
          
   
          {/* Performance Rating */}
          <div className="bg-white rounded-2xl p-6 shadow-sm border border-[#0F204A]/5 flex flex-col">
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-lg font-black text-[#2563EB]/85 text-shadow-lg">Performance Rating</h3>
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
                  { name: 'Punctuality', val: 88, col: 'bg-[#D4AF37]' },
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
              <h3 className="text-lg font-black text-[#2563EB]/85 text-shadow-lg">Request Management</h3>
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
          <div className="bg-white rounded-2xl p-6 mb-6 shadow-sm border border-[#0F204A]/5">
            <h3 className="text-lg font-black text-[#2563EB]/85 text-shadow-lg mb-6">Career Growth Roadmap</h3>
            
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
                    <h4 className="text-base font-black text-[#1E3A8A]">Software Developer</h4>
                    <p className="text-xs font-bold text-[#0F204A]/60 mt-0.5">Current Position • Since May 2026</p>
                    <div className="mt-2 flex gap-1.5">
                     
                    </div>
                  </div>
                  <div className="px-4 py-1.5 bg-[#2563EB]/85 text-white rounded-lg font-bold text-xs shadow-md">Current</div>
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

             

    {/* Salary Components - Updated & Interactive */}
        <section className="mb-6">
          <div className="bg-white rounded-2xl p-6 shadow-sm border border-[#0F204A]/5 flex flex-col">
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-lg font-black text-[#2563EB]/85 text-shadow-lg">
                Salary Overview
              </h3>

              <span className="px-2.5 py-1 bg-[#F4F7FF] text-[#0F204A] border border-[#0F204A]/10 rounded-md text-[10px] font-bold tracking-wide">
                June 2026
              </span>
            </div>

            {/*  Net Salary (Light Premium Gradient)  */}
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center p-6 bg-gradient-to-br from-[#FFF9E6] via-[#F4F7FF] to-[#E0F2FE] border border-[#D4AF37]/20 rounded-xl shadow-sm mb-6">
              <div>
                <p className="text-[10px] font-bold text-[#0F204A]/60 uppercase tracking-widest mb-1">
                  Monthly Net Payable
                </p>

                {/* 36000 - 1800 - 200 = 34000 */}
                <p className="text-3xl font-black text-[#0F204A]">
                  ₹ 34,000.00
                </p>
              </div>

              {/* Button changed to Dark Blue for contrast against light background */}
              <button className="flex items-center gap-1.5 bg-[#2563EB]/85 text-white px-5 py-2.5 rounded-lg font-bold text-xs shadow-md hover:bg-[#D4AF37] hover:text-[#0F204A] transition-all w-full sm:w-auto justify-center mt-4 sm:mt-0">
                <span className="material-symbols-outlined text-[16px]">
                  download
                </span>
                Download Payslip
              </button>
            </div>

            {/* Earnings */}
            <div className="mb-4">
              <p className="text-xs font-black text-green-600 uppercase tracking-wider mb-3">
                Earnings
              </p>

              <div className="space-y-4">
                <div className="flex justify-between items-center text-sm font-bold">
                  <span className="text-[#0F204A]/60">Basic Salary</span>
                  <span className="text-[#0F204A]">₹ 22,500.00</span>
                </div>

                <div className="flex justify-between items-center text-sm font-bold">
                  <span className="text-[#0F204A]/60">House Rent Allowance (HRA)</span>
                  <span className="text-[#0F204A]">₹ 9,000.00</span>
                </div>

                <div className="flex justify-between items-center text-sm font-bold">
                  <span className="text-[#0F204A]/60">Special Allowance</span>
                  <span className="text-[#0F204A]">₹ 4,500.00</span>
                </div>

                <div className="flex justify-between items-center text-sm font-black text-green-600 pt-2 border-t border-green-100">
                  <span>Gross Earnings</span>
                  <span>₹ 36,000.00</span>
                </div>
              </div>
            </div>

            {/* Deductions */}
            <div>
              <p className="text-xs font-black text-red-500 uppercase tracking-wider mb-3">
                Deductions
              </p>

              <div className="space-y-4">
                <div className="flex justify-between items-center text-sm font-bold text-red-500">
                  <span>Provident Fund (12%)</span>
                  <span>- ₹ 1,800.00</span>
                </div>

                <div className="flex justify-between items-center text-sm font-bold text-red-500">
                  <span>Professional Tax</span>
                  <span>- ₹ 200.00</span>
                </div>

                <div className="flex justify-between items-center text-sm font-black text-red-500 pt-2 border-t border-red-100">
                  <span>Total Deductions</span>
                  <span>- ₹ 2,000.00</span>
                </div>
              </div>
            </div>

            {/* Net Pay */}
            <div className="mt-5 p-4 bg-[#F4F7FF] rounded-xl border border-[#0F204A]/5">
              <div className="flex justify-between items-center">
                <span className="text-sm font-black text-[#0F204A]">
                  Net Salary Credited
                </span>

                <span className="text-xl font-black text-green-600">
                  ₹ 34,000.00
                </span>
              </div>
            </div>

            {/* Footer */}
            <div className="mt-6 pt-4 border-t border-[#0F204A]/5 flex justify-between items-center">
              <p className="text-[10px] font-bold text-[#0F204A]/40 uppercase tracking-widest">
                Next Revision: July 2026
              </p>

              <a
                href="#"
                className="text-[11px] font-black text-[#D4AF37] hover:text-[#0F204A] transition-colors flex items-center gap-1"
              >
                View History
                <span className="material-symbols-outlined text-[14px]">
                  arrow_forward
                </span>
              </a>
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