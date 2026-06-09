import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export default function UserAttendance() {
  // Current Month State
  const [currentMonth, setCurrentMonth] = useState("June 2026");

  // Mock Data: Current Month Logs
  const currentMonthLogs = [
    { date: "09 Jun, Tue", in: "09:25 AM", out: "06:30 PM", workHours: "9h 05m", status: "Present", color: "text-green-600 bg-green-50 border-green-200" },
    { date: "08 Jun, Mon", in: "09:40 AM", out: "06:35 PM", workHours: "8h 55m", status: "Late Mark", color: "text-orange-600 bg-orange-50 border-orange-200" },
    { date: "07 Jun, Sun", in: "--:--", out: "--:--", workHours: "0h", status: "Weekly Off", color: "text-gray-500 bg-gray-50 border-gray-200" },
    { date: "06 Jun, Sat", in: "--:--", out: "--:--", workHours: "0h", status: "Weekly Off", color: "text-gray-500 bg-gray-50 border-gray-200" },
    { date: "05 Jun, Fri", in: "09:30 AM", out: "02:00 PM", workHours: "4h 30m", status: "Half Day", color: "text-[#D4AF37] bg-[#FFF9E6] border-[#D4AF37]/30" },
    { date: "04 Jun, Thu", in: "--:--", out: "--:--", workHours: "0h", status: "Absent", color: "text-red-600 bg-red-50 border-red-200" },
  ];

  // Mock Data: Historical Attendance
  const historyData = [
    { month: "May 2026", present: 21, absent: 1, halfDay: 1, off: 8, avg: "95%" },
    { month: "April 2026", present: 20, absent: 0, halfDay: 2, off: 8, avg: "96%" },
    { month: "March 2026", present: 22, absent: 0, halfDay: 0, off: 9, avg: "100%" },
    { month: "February 2026", present: 18, absent: 2, halfDay: 0, off: 8, avg: "88%" },
  ];

  return (
    <div className="flex min-h-screen bg-[#F8FAFC] font-sans text-[#475569] selection:bg-[#D4AF37] selection:text-white pb-10">
      
      {/* ================= SIDEBAR NAV ================= */}
      <aside className="fixed left-0 top-0 h-full w-[220px] md:w-55 bg-gradient-to-b from-[#F4F7FF] via-white to-[#FFF5D1] border-r border-[#D4AF37]/20 shadow-[4px_0_24px_rgba(212,175,55,0.08)] flex flex-col z-50">
        <div className="p-2 mb-2 flex items-center gap-1">
          <div className="w-10 h-10 md:w-10 md:h-10 rounded-full flex items-center justify-center overflow-hidden bg-transparent shrink-0">
            <img src="logo.png" alt="Company Logo" className="w-full h-full object-contain drop-shadow-md" /> 
          </div>
          <span className="text-lg font-black tracking-tight text-[#D4AF37]">Techhansa</span>
          <span className="text-lg font-black tracking-tight text-[#2563EB]">HRMS</span>
        </div>

        <div className="px-5 mb-6">
          <div className="flex items-center gap-3 p-2.5 bg-white/60 backdrop-blur-sm rounded-xl border border-[#D4AF37]/20 shadow-[0_4px_10px_rgba(37,99,235,0.05)]">
            <img alt="Arpit Pandey" className="w-9 h-9 rounded-lg object-cover shadow-sm border border-white" src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?fit=crop&w=150&q=80" />
            <div>
              <p className="font-bold text-[#2563EB] text-[13px]">Arpit Pandey</p>
              <p className="text-[10px] font-bold text-[#64748B]">Software Developer</p>
            </div>
          </div>
        </div>

        <div className="flex-1 px-2 -mt-2 overflow-y-hidden scrollbar-hidden">
          <Link to="/user-dashboard" className="flex items-center gap-3 px-4 py-2.5 mt-1 rounded-lg text-[#64748B] hover:bg-[#E0F2FE]/50 hover:text-[#2563EB] border border-transparent transition-all duration-200 group">
            <span className="material-symbols-outlined text-[18px] group-hover:text-[#D4AF37] transition-colors">dashboard</span>
            <span className="font-bold text-[13px]">Dashboard</span>
          </Link>
          
          <Link to="/user-profile" className="flex items-center gap-3 px-4 py-2.5 mt-1 rounded-lg text-[#64748B] hover:bg-[#E0F2FE]/50 hover:text-[#2563EB] border border-transparent transition-all duration-200 group">
            <span className="material-symbols-outlined text-[18px] group-hover:text-[#D4AF37] transition-colors">person</span>
            <span className="font-bold text-[13px]">Profile</span>
          </Link>

          {/* ATTENDANCE IS NOW ACTIVE  */}
          <a href="#" className="flex items-center gap-3 bg-gradient-to-r from-[#D4AF37] to-[#FDE047] text-[#2563EB] px-4 py-2.5 rounded-lg shadow-[0_4px_10px_rgba(212,175,55,0.3)] transition-all my-1">
            <span className="material-symbols-outlined text-[18px] text-[#2563EB]">calendar_today</span>
            <span className="font-black text-[13px]">Attendance</span>
          </a>
          
          {[
            { icon: 'payments', label: 'Salary', path: '#' },
            { icon: 'monitoring', label: 'Appraisal', path: '#' },
            { icon: 'mark_as_unread', label: 'Requests', path: '#' },
            { icon: 'trending_up', label: 'Growth', path: '#' },
            { icon: 'mail', label: 'Newsletter', path: '#' }
          ].map((item, index) => (
            <Link key={index} to={item.path} className="flex items-center gap-3 px-4 py-2.5 mt-1 rounded-lg text-[#64748B] hover:bg-[#E0F2FE]/50 hover:text-[#2563EB] border border-transparent transition-all duration-200 group">
              <span className="material-symbols-outlined text-[18px] group-hover:text-[#D4AF37] transition-colors">{item.icon}</span>
              <span className="font-bold text-[13px]">{item.label}</span>
            </Link>
          ))}
        </div>

        <div className="p-1 border-t border-[#D4AF37]/20 space-y-1 bg-white/30 backdrop-blur-sm">
          <a href="#" className="flex items-center gap-3 px-4 py-2.5 rounded-lg text-[#64748B] hover:bg-[#E0F2FE]/50 hover:text-[#2563EB] border border-transparent transition-all group">
            <span className="material-symbols-outlined text-[18px] group-hover:text-[#D4AF37]">settings</span>
            <span className="font-bold text-[13px]">Settings</span>
          </a>
          <a href="#" className="flex items-center gap-3 px-4 py-2.5 rounded-lg text-[#64748B] hover:bg-red-50 hover:text-red-500 border border-transparent transition-all">
            <span className="material-symbols-outlined text-[18px]">logout</span>
            <span className="font-bold text-[13px]">Sign Out</span>
          </a>
        </div>
      </aside>

      {/* ================= MAIN CONTENT CANVAS ================= */}
      <main className="ml-[220px] md:ml-55 flex-1 p-6 xl:p-10 max-w-[1500px] mx-auto">
        
        {/* Header */}
        <header className="flex justify-between items-center mb-6 ">
          <div>
            <div className="flex items-center gap-1 text-[11px] font-bold text-[#64748B] mb-0 uppercase tracking-widest">
              <span>Dashboard</span>
              <span className="material-symbols-outlined text-[14px]">chevron_right</span>
              <span className="text-[#D4AF37]">Attendance</span>
            </div>
            <h1 className="text-2xl font-black text-[#2563EB] tracking-tight">Attendance Hub</h1>
          </div>
          <div className="flex gap-3">
            <button className="relative p-2.5 rounded-full bg-white border border-[#2563EB]/10 hover:border-[#D4AF37] text-[#2563EB] hover:text-[#D4AF37] transition-all shadow-[0_4px_15px_rgba(37,99,235,0.08)]">
              <span className="material-symbols-outlined text-[20px]">notifications</span>
            </button>
          </div>
        </header>

        <div className="flex flex-col gap-8">

          {/* 1. CURRENT MONTH OVERVIEW & LEAVE BALANCES */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            
            {/* Monthly Summary */}
            <div className="lg:col-span-8 bg-gradient-to-br from-[#E0F2FE] via-[#F8FAFC] to-white rounded-3xl p-8 shadow-[0_8px_30px_rgba(37,99,235,0.06)] border border-[#2563EB]/10 relative overflow-hidden">
              <div className="absolute top-[-50%] right-[-10%] w-64 h-64 bg-[#FFF5D1] blur-[60px] rounded-full pointer-events-none opacity-60"></div>
              
              <div className="flex justify-between items-center mb-8 relative z-10">
                <h3 className="text-xl font-black text-[#2563EB]">Current Month: <span className="text-[#D4AF37]">{currentMonth}</span></h3>
                <button className="flex items-center gap-1.5 px-4 py-2 bg-white rounded-xl border border-[#2563EB]/10 text-xs font-bold text-[#2563EB] hover:border-[#D4AF37] transition-all shadow-sm">
                  <span className="material-symbols-outlined text-[16px]">calendar_month</span> Select Month
                </button>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 relative z-10">
                <div className="bg-white p-5 rounded-2xl border border-[#2563EB]/10 shadow-[0_4px_15px_rgba(37,99,235,0.04)] text-center hover:-translate-y-1 transition-transform">
                  <span className="material-symbols-outlined text-green-500 mb-1 text-[28px]">task_alt</span>
                  <p className="text-[10px] font-bold text-[#64748B] uppercase tracking-widest">Present</p>
                  <p className="text-2xl font-black text-[#2563EB]">05</p>
                </div>
                <div className="bg-white p-5 rounded-2xl border border-[#2563EB]/10 shadow-[0_4px_15px_rgba(37,99,235,0.04)] text-center hover:-translate-y-1 transition-transform">
                  <span className="material-symbols-outlined text-red-500 mb-1 text-[28px]">cancel</span>
                  <p className="text-[10px] font-bold text-[#64748B] uppercase tracking-widest">Absent</p>
                  <p className="text-2xl font-black text-[#2563EB]">01</p>
                </div>
                <div className="bg-white p-5 rounded-2xl border border-[#2563EB]/10 shadow-[0_4px_15px_rgba(37,99,235,0.04)] text-center hover:-translate-y-1 transition-transform">
                  <span className="material-symbols-outlined text-[#D4AF37] mb-1 text-[28px]">timelapse</span>
                  <p className="text-[10px] font-bold text-[#64748B] uppercase tracking-widest">Half Day</p>
                  <p className="text-2xl font-black text-[#2563EB]">01</p>
                </div>
                <div className="bg-white p-5 rounded-2xl border border-[#2563EB]/10 shadow-[0_4px_15px_rgba(37,99,235,0.04)] text-center hover:-translate-y-1 transition-transform">
                  <span className="material-symbols-outlined text-blue-400 mb-1 text-[28px]">event_busy</span>
                  <p className="text-[10px] font-bold text-[#64748B] uppercase tracking-widest">Leaves Taken</p>
                  <p className="text-2xl font-black text-[#2563EB]">00</p>
                </div>
              </div>
            </div>

            {/* Leave Balances Widget */}
            <div className="lg:col-span-4 bg-white rounded-3xl p-8 shadow-sm border border-[#2563EB]/10">
              <h3 className="text-lg font-black text-[#2563EB] mb-6 border-b border-[#2563EB]/5 pb-4">Leave Balances</h3>
              <div className="space-y-4">
                <div className="flex justify-between items-center p-3 bg-[#F4F7FF] rounded-xl border border-transparent hover:border-[#D4AF37]/30 transition-colors">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg bg-[#E0F2FE] text-[#2563EB] flex items-center justify-center"><span className="material-symbols-outlined text-[18px]">medical_services</span></div>
                    <span className="text-xs font-bold text-[#64748B] uppercase tracking-widest">Sick Leave</span>
                  </div>
                  <span className="text-lg font-black text-[#2563EB]">05 <span className="text-[10px] text-[#64748B] font-medium">/ 06</span></span>
                </div>
                <div className="flex justify-between items-center p-3 bg-[#FFF9E6] rounded-xl border border-transparent hover:border-[#D4AF37]/30 transition-colors">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg bg-[#FDE047]/20 text-[#D4AF37] flex items-center justify-center"><span className="material-symbols-outlined text-[18px]">beach_access</span></div>
                    <span className="text-xs font-bold text-[#64748B] uppercase tracking-widest">Casual Leave</span>
                  </div>
                  <span className="text-lg font-black text-[#2563EB]">04 <span className="text-[10px] text-[#64748B] font-medium">/ 06</span></span>
                </div>
                <div className="flex justify-between items-center p-3 bg-[#F1F5F9] rounded-xl border border-transparent hover:border-[#D4AF37]/30 transition-colors">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg bg-gray-200 text-gray-600 flex items-center justify-center"><span className="material-symbols-outlined text-[18px]">card_travel</span></div>
                    <span className="text-xs font-bold text-[#64748B] uppercase tracking-widest">Earned Leave</span>
                  </div>
                  <span className="text-lg font-black text-[#2563EB]">12 <span className="text-[10px] text-[#64748B] font-medium">/ 18</span></span>
                </div>
              </div>
            </div>
          </div>

          {/* 2. DAILY TIMESHEET (Current Month) */}
          <div className="bg-white rounded-3xl p-8 shadow-sm border border-[#2563EB]/10 overflow-hidden">
            <div className="flex justify-between items-center mb-6 border-b border-[#2563EB]/5 pb-5">
              <h3 className="text-xl font-black text-[#2563EB]">Daily Logs <span className="text-sm font-bold text-[#64748B] ml-2">({currentMonth})</span></h3>
              <button className="flex items-center gap-1.5 px-4 py-2 bg-[#F4F7FF] text-[#2563EB] rounded-lg font-bold text-xs hover:bg-[#2563EB] hover:text-white transition-all shadow-sm">
                <span className="material-symbols-outlined text-[16px]">download</span> Export CSV
              </button>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-[#F8FAFC]">
                    <th className="py-4 px-6 text-[10px] font-bold text-[#64748B] uppercase tracking-widest rounded-l-xl">Date</th>
                    <th className="py-4 px-6 text-[10px] font-bold text-[#64748B] uppercase tracking-widest">Punch In</th>
                    <th className="py-4 px-6 text-[10px] font-bold text-[#64748B] uppercase tracking-widest">Punch Out</th>
                    <th className="py-4 px-6 text-[10px] font-bold text-[#64748B] uppercase tracking-widest">Work Hours</th>
                    <th className="py-4 px-6 text-[10px] font-bold text-[#64748B] uppercase tracking-widest rounded-r-xl">Status</th>
                  </tr>
                </thead>
                <tbody>
                  {currentMonthLogs.map((log, index) => (
                    <tr key={index} className="border-b border-[#2563EB]/5 hover:bg-[#F4F7FF]/50 transition-colors">
                      <td className="py-4 px-6 text-sm font-black text-[#2563EB] whitespace-nowrap">{log.date}</td>
                      <td className="py-4 px-6 text-xs font-bold text-[#475569] whitespace-nowrap">{log.in}</td>
                      <td className="py-4 px-6 text-xs font-bold text-[#475569] whitespace-nowrap">{log.out}</td>
                      <td className="py-4 px-6 text-xs font-bold text-[#475569] whitespace-nowrap">{log.workHours}</td>
                      <td className="py-4 px-6 whitespace-nowrap">
                        <span className={`px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest border shadow-sm ${log.color}`}>
                          {log.status}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* 3. HISTORICAL ATTENDANCE (Month-wise) */}
          <div className="bg-white rounded-3xl p-8 shadow-sm border border-[#2563EB]/10">
            <div className="flex items-center gap-3 mb-8 border-b border-[#2563EB]/5 pb-5">
              <div className="w-12 h-12 bg-[#FFF9E6] text-[#D4AF37] rounded-2xl flex items-center justify-center shadow-sm">
                <span className="material-symbols-outlined text-[22px]">history</span>
              </div>
              <div>
                <h3 className="text-xl font-black text-[#2563EB]">Attendance History</h3>
                <p className="text-[11px] font-bold text-[#64748B]">Month-wise summary of your past records</p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {historyData.map((data, index) => (
                <div key={index} className="bg-white border border-[#2563EB]/10 rounded-2xl p-5 shadow-[0_4px_15px_rgba(37,99,235,0.04)] hover:shadow-[0_8px_20px_rgba(37,99,235,0.08)] hover:-translate-y-1 transition-all">
                  <div className="flex justify-between items-center mb-4 border-b border-[#2563EB]/5 pb-3">
                    <h4 className="text-sm font-black text-[#2563EB]">{data.month}</h4>
                    <span className="text-[10px] font-bold bg-[#E0F2FE] text-[#2563EB] px-2 py-1 rounded-md">{data.avg}</span>
                  </div>
                  <div className="space-y-2">
                    <div className="flex justify-between items-center text-xs">
                      <span className="font-bold text-[#64748B]">Present</span>
                      <span className="font-black text-green-600">{data.present}</span>
                    </div>
                    <div className="flex justify-between items-center text-xs">
                      <span className="font-bold text-[#64748B]">Absent</span>
                      <span className="font-black text-red-500">{data.absent}</span>
                    </div>
                    <div className="flex justify-between items-center text-xs">
                      <span className="font-bold text-[#64748B]">Half Day</span>
                      <span className="font-black text-[#D4AF37]">{data.halfDay}</span>
                    </div>
                    <div className="flex justify-between items-center text-xs">
                      <span className="font-bold text-[#64748B]">WeekOffs/Holidays</span>
                      <span className="font-black text-[#475569]">{data.off}</span>
                    </div>
                  </div>
                  <button className="w-full mt-5 py-2 border border-[#2563EB]/20 rounded-lg text-[10px] font-bold text-[#2563EB] uppercase tracking-widest hover:bg-[#2563EB] hover:text-white transition-colors">
                    View Detail
                  </button>
                </div>
              ))}
            </div>
          </div>

        </div>
      </main>
    </div>
  );
}