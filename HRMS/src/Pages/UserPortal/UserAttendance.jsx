import React, { useState, useMemo, useEffect } from 'react';
import { Link } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';

// ── Shared Theme Colors & Animations (From Dashboard) ──
const STYLES = `
  @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&display=swap');
  *, *::before, *::after { box-sizing: border-box; }

  :root {
    --gold:     #C9A84C;
    --gold-lt:  #E8C96A;
    --blue:     #1E90D6;
    --blue-lt:  #41ADEE;
    --sky:      #A8D5EA;
    --mint:     #3DBF85;
    --rose:     #F06060;
    --page:     #F0F5FF;
    --card:     #FFFFFF;
    --sub:      #7A8EAA;
    --border:   #D4E8FF;
    --mist:     #FDF6E3;
    --lagoon:   #EAF4FF;
  }

  body { font-family:'Inter','Segoe UI',sans-serif; background: var(--page); }

  /* ── Animations ── */
  @keyframes fadeUp {
    from { opacity:0; transform:translateY(16px); }
    to   { opacity:1; transform:translateY(0); }
  }
  @keyframes pulseGold {
    0%,100% { box-shadow: 0 0 0 0   rgba(201,168,76,0.55); }
    60%      { box-shadow: 0 0 0 12px rgba(201,168,76,0); }
  }

  /* ── Utility Classes ── */
  .sa { animation: fadeUp 0.48s ease both; }
  .sa:nth-child(1){ animation-delay:0.04s }
  .sa:nth-child(2){ animation-delay:0.10s }
  .sa:nth-child(3){ animation-delay:0.16s }

  .hcard { transition:transform 0.25s ease, box-shadow 0.25s ease; cursor:default; }
  .hcard:hover { transform:translateY(-3px); box-shadow: 0 8px 25px rgba(30,144,214,0.08); }

  .sh {
    font-size:16px; font-weight:900; letter-spacing:-0.3px; margin:0;
    background:linear-gradient(90deg,var(--blue),var(--gold));
    -webkit-background-clip:text; -webkit-text-fill-color:transparent;
    background-clip:text;
  }

  /* ── Sidebar link ── */
  .nav-l {
    display:flex; align-items:center; gap:10px;
    color:var(--sub); padding:10px 14px; border-radius:10px;
    text-decoration:none; font-weight:700; font-size:13px;
    margin-bottom:3px; transition:all 0.22s ease;
    border:1px solid transparent; position:relative; overflow:hidden;
  }
  .nav-l::before {
    content:''; position:absolute; left:0; top:10%; bottom:10%;
    width:3px; background:var(--blue); border-radius:0 3px 3px 0;
    transform:scaleY(0); transition:transform 0.22s ease;
  }
  .nav-l:hover {
    background:rgba(255,255,255,0.92); color:var(--blue);
    border-color:var(--border); transform:translateX(3px);
  }
  .nav-l:hover::before { transform:scaleY(1); }
  .nav-l:hover .ni { color:var(--gold); }
  .ni { font-size:18px; transition:color 0.22s; }

  /* ── Buttons ── */
  .dlbtn {
    display:flex; align-items:center; gap:8px;
    background:linear-gradient(90deg,var(--blue),var(--blue-lt));
    color:#fff; padding:8px 14px; border-radius:10px;
    font-weight:700; font-size:12px; border:none; cursor:pointer;
    box-shadow:0 4px 12px rgba(30,144,214,0.25);
    transition:all 0.25s;
  }
  .dlbtn:hover {
    transform:translateY(-2px);
    box-shadow:0 6px 18px rgba(30,144,214,0.35);
    background:linear-gradient(90deg,var(--gold),var(--gold-lt));
  }

  .nbtn { transition:all 0.22s; }
  .nbtn:hover { background:var(--lagoon) !important; border-color:var(--blue) !important; transform:rotate(12deg) scale(1.10); }
`;

export default function UserAttendance() {
  const [mounted, setMounted] = useState(false);
  const [selectedMonth, setSelectedMonth] = useState(5); // 5 = June
  const [selectedYear, setSelectedYear] = useState(2026);
  const [selectedDate, setSelectedDate] = useState(null); 
  const [searchQuery, setSearchQuery] = useState("");
  const [showAllHistory, setShowAllHistory] = useState(false);

  useEffect(() => {
    // 🔥 Initialize AOS 🔥
    AOS.init({
      duration: 800,
      once: true,
      easing: 'ease-out-cubic',
      offset: 50,
    });

    setTimeout(() => setMounted(true), 100);
  }, []);

  const monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
  const currentMonthName = `${monthNames[selectedMonth]} ${selectedYear}`;

  // Calendar Calculation Logic
  const daysInMonth = new Date(selectedYear, selectedMonth + 1, 0).getDate();
  const startDayOffset = new Date(selectedYear, selectedMonth, 1).getDay(); // 0(Sun) to 6(Sat)
  const daysArray = Array.from({ length: daysInMonth }, (_, i) => i + 1);

  // Mock Data: Current Month Logs (Updated Colors to match STYLES variables)
  const [allLogs] = useState([
    { date: "10 Jun, Wed", in: "09:20 AM", out: "06:40 PM", workHours: "9h 20m", status: "Present", type: "present", c: "var(--mint)", bg: "#E8FBF4" },
    { date: "09 Jun, Tue", in: "09:25 AM", out: "06:30 PM", workHours: "9h 05m", status: "Present", type: "present", c: "var(--mint)", bg: "#E8FBF4" },
    { date: "08 Jun, Mon", in: "09:40 AM", out: "06:35 PM", workHours: "8h 55m", status: "Late Mark", type: "present", c: "var(--rose)", bg: "#FFF0F0" },
    { date: "07 Jun, Sun", in: "--:--", out: "--:--", workHours: "0h", status: "Weekly Off", type: "off", c: "var(--sub)", bg: "var(--page)" },
    { date: "06 Jun, Sat", in: "--:--", out: "--:--", workHours: "0h", status: "Weekly Off", type: "off", c: "var(--sub)", bg: "var(--page)" },
    { date: "05 Jun, Fri", in: "09:30 AM", out: "02:00 PM", workHours: "4h 30m", status: "Half Day", type: "half", c: "var(--gold)", bg: "var(--mist)" },
    { date: "04 Jun, Thu", in: "--:--", out: "--:--", workHours: "0h", status: "Absent", type: "absent", c: "var(--rose)", bg: "#FFF0F0" },
  ]);

  // Mock Data: Historical Attendance
  const historyData = [
    { month: "May 2026", present: 21, absent: 1, halfDay: 1, off: 8, avg: "95%" },
    { month: "April 2026", present: 20, absent: 0, halfDay: 2, off: 8, avg: "96%" },
    { month: "March 2026", present: 22, absent: 0, halfDay: 0, off: 9, avg: "100%" },
    { month: "February 2026", present: 18, absent: 2, halfDay: 0, off: 8, avg: "88%" },
    { month: "January 2026", present: 21, absent: 0, halfDay: 1, off: 9, avg: "97%" },
    { month: "December 2025", present: 19, absent: 1, halfDay: 2, off: 9, avg: "91%" },
    { month: "November 2025", present: 20, absent: 0, halfDay: 0, off: 10, avg: "100%" },
    { month: "October 2025", present: 17, absent: 3, halfDay: 0, off: 11, avg: "82%" },
  ];

  const visibleHistory = showAllHistory ? historyData : historyData.slice(0, 4);

  // Filtering Logic for Table
  const filteredLogs = useMemo(() => {
    const monthShort = monthNames[selectedMonth].substring(0, 3);
    const monthLogs = allLogs.filter(log => log.date.includes(monthShort));

    return monthLogs.filter(log => {
      const matchesSearch = log.status.toLowerCase().includes(searchQuery.toLowerCase()) || 
                            log.date.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesDate = selectedDate ? log.date.startsWith(selectedDate.toString().padStart(2, '0')) : true;
      return matchesSearch && matchesDate;
    });
  }, [searchQuery, selectedDate, allLogs, selectedMonth]);

  const getDayStatusColor = (day) => {
    const formattedDay = day.toString().padStart(2, '0');
    const log = allLogs.find(l => l.date.startsWith(formattedDay) && l.date.includes(monthNames[selectedMonth].substring(0, 3)));
    if (!log) return null;
    if (log.type === 'present') return 'var(--mint)';
    if (log.type === 'absent') return 'var(--rose)';
    if (log.type === 'half') return 'var(--gold)';
    return 'var(--border)';
  };

  return (
    <>
      <style>{STYLES}</style>
      <div className="flex min-h-screen font-sans selection:bg-[var(--gold)] selection:text-white pb-10" style={{ background: 'var(--page)', color: 'var(--sub)' }}>
        
        {/* ================= SIDEBAR NAV ================= */}
        <aside className="fixed left-0 top-0 h-full w-[220px] md:w-55 flex flex-col z-50" style={{
          background:'linear-gradient(180deg,#FAFCFF 0%,#EAF4FF 55%,#FDF9EF 100%)',
          borderRight:'1.5px solid var(--border)',
          boxShadow:'4px 0 26px rgba(30,144,214,0.08)'
        }}>
          <div className="p-2 mb-2 flex items-center gap-1" style={{ borderBottom:'1px solid var(--border)' }}>
            <div className="w-10 h-10 md:w-10 md:h-10 rounded-full flex items-center justify-center overflow-hidden bg-transparent shrink-0" style={{ border:'2px solid transparent', boxShadow:'0 3px 10px rgba(201,168,76,0.20)' }}>
              <img src="logo.png" alt="Company Logo" className="w-full h-full object-contain drop-shadow-md" /> 
            </div>
            <span className="text-base font-black tracking-tight text-[var(--gold)]">Techhansa</span>
            <span className="text-base font-black tracking-tight text-[var(--blue)]">HRMS</span>
          </div>

          <div className="px-5 mb-6 mt-3">
            <div className="flex items-center gap-3 p-2.5 rounded-xl backdrop-blur-sm" style={{ background:'rgba(255,255,255,0.88)', border:'1px solid var(--border)', boxShadow:'0 3px 9px rgba(30,144,214,0.08)' }}>
              <div style={{ width:'38px', height:'38px', borderRadius:'10px', background:'linear-gradient(135deg,var(--sky),var(--gold))', flexShrink:0, display:'flex', alignItems:'center', justifyContent:'center', boxShadow:'0 3px 9px rgba(201,168,76,0.28)' }}>
                <span style={{ fontSize:'14px', fontWeight:900, color:'#fff' }}>AP</span>
              </div>
              <div>
                <p className="font-bold text-[var(--blue)] text-[12px] mb-0">Arpit Pandey</p>
                <p className="text-[10px] font-medium text-[var(--sub)] m-0">Software Developer</p>
              </div>
            </div>
          </div>

          <div className="flex-1 px-2 -mt-2 overflow-y-auto scrollbar-hidden">
            <Link to="/user-dashboard" className="nav-l">
              <span className="material-symbols-outlined ni">dashboard</span> Dashboard
            </Link>
            
            <Link to="/user-profile" className="nav-l">
              <span className="material-symbols-outlined ni">person</span> Profile
            </Link>

            {/* Active Link */}
            <a href="#" style={{
              display:'flex', alignItems:'center', gap:'10px',
              background:'linear-gradient(90deg,var(--blue),var(--blue-lt))',
              color:'#fff', padding:'11px 14px', borderRadius:'10px',
              textDecoration:'none', fontWeight:700, fontSize:'13px',
              boxShadow:'0 5px 18px rgba(30,144,214,0.30)', marginBottom:'3px', marginTop:'3px'
            }}>
              <span className="material-symbols-outlined ni" style={{ color:'#fff' }}>calendar_today</span>
              Attendance
            </a>
            
            {[
              { icon: 'payments', label: 'Salary', path: '/user-salary' },
              { icon: 'monitoring', label: 'Appraisal', path: '#' },
              { icon: 'mark_as_unread', label: 'Requests', path: '#' },
              { icon: 'trending_up', label: 'Growth', path: '#' },
              { icon: 'mail', label: 'Newsletter', path: '#' }
            ].map((item, index) => (
              <Link key={index} to={item.path} className="nav-l">
                <span className="material-symbols-outlined ni">{item.icon}</span>
                {item.label}
              </Link>
            ))}
          </div>

          <div className="p-1 space-y-1" style={{ borderTop:'1px solid var(--border)' }}>
            <a href="#" className="nav-l">
              <span className="material-symbols-outlined ni">settings</span> Settings
            </a>
            <a href="#" className="nav-l" style={{ color:'var(--rose)' }}
              onMouseEnter={e => { e.currentTarget.style.background='#FFF0F0'; e.currentTarget.style.borderColor='rgba(240,96,96,0.25)'; }}
              onMouseLeave={e => { e.currentTarget.style.background='transparent'; e.currentTarget.style.borderColor='transparent'; }}>
              <span className="material-symbols-outlined ni" style={{ color:'var(--rose)' }}>logout</span> Sign Out
            </a>
          </div>
        </aside>

        {/* ================= MAIN CONTENT CANVAS ================= */}
        <main className="ml-[220px] md:ml-55 flex-1 p-6 xl:p-10 max-w-[1500px] mx-auto">
          
          {/* Header 🔥 AOS Applied 🔥 */}
          <header data-aos="fade-down" className="flex justify-between items-center mb-6">
            <div>
              <div className="flex items-center gap-1 text-[11px] font-bold text-[var(--sub)] mb-0 uppercase tracking-widest">
                <span>Dashboard</span>
                <span className="material-symbols-outlined text-[14px]">chevron_right</span>
                <span className="text-[var(--gold)]">Attendance</span>
              </div>
              <h1 className="sh text-xl tracking-tight mt-1">Attendance Hub</h1>
            </div>
            <div className="flex gap-3">
              <button className="nbtn relative p-2.5 rounded-full flex items-center justify-center" style={{ background:'var(--card)', border:'1.5px solid var(--border)', color:'var(--blue)', boxShadow:'0 3px 14px rgba(30,144,214,0.10)' }}>
                <span className="material-symbols-outlined text-[20px]">notifications</span>
              </button>
            </div>
          </header>

          <div className="flex flex-col gap-8">

            {/* 1. CURRENT MONTH OVERVIEW & CALENDAR 🔥 AOS Applied 🔥 */}
            <div data-aos="fade-up" className="grid grid-cols-1 lg:grid-cols-12 gap-2">
              
              {/* Monthly Summary */}
              <div className="hcard lg:col-span-8 rounded-3xl p-6 relative overflow-hidden flex flex-col justify-between" style={{ background:'linear-gradient(110deg, var(--mist) 0%, #FAFCFF 50%, var(--lagoon) 100%)', border:'1px solid var(--border)', boxShadow:'0 4px 14px rgba(30,144,214,0.04)' }}>
                
                <div className="flex justify-between items-center mb-8 relative z-10">
                  <h3 className="text-sm font-bold text-[var(--blue)]">Overview: <span className="text-[var(--gold)]">{currentMonthName}</span></h3>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 relative z-10">
                  <div className="p-5 rounded-2xl text-center transition-transform hover:-translate-y-1" style={{ background:'var(--card)', border:'1px solid var(--border)', boxShadow:'0 4px 15px rgba(30,144,214,0.04)' }}>
                    <span className="material-symbols-outlined mb-1 text-[28px]" style={{ color:'var(--mint)' }}>task_alt</span>
                    <p className="text-[10px] font-semibold text-[var(--sub)] uppercase tracking-widest">Present</p>
                    <p className="text-xl font-bold text-[var(--blue)] m-0">05</p>
                  </div>
                  <div className="p-5 rounded-2xl text-center transition-transform hover:-translate-y-1" style={{ background:'var(--card)', border:'1px solid var(--border)', boxShadow:'0 4px 15px rgba(30,144,214,0.04)' }}>
                    <span className="material-symbols-outlined mb-1 text-[28px]" style={{ color:'var(--rose)' }}>cancel</span>
                    <p className="text-[10px] font-semibold text-[var(--sub)] uppercase tracking-widest">Absent</p>
                    <p className="text-xl font-bold text-[var(--blue)] m-0">01</p>
                  </div>
                  <div className="p-5 rounded-2xl text-center transition-transform hover:-translate-y-1" style={{ background:'var(--card)', border:'1px solid var(--border)', boxShadow:'0 4px 15px rgba(30,144,214,0.04)' }}>
                    <span className="material-symbols-outlined mb-1 text-[28px]" style={{ color:'var(--gold)' }}>timelapse</span>
                    <p className="text-[10px] font-semibold text-[var(--sub)] uppercase tracking-widest">Half Day</p>
                    <p className="text-xl font-bold text-[var(--blue)] m-0">01</p>
                  </div>
                  <div className="p-5 rounded-2xl text-center transition-transform hover:-translate-y-1" style={{ background:'var(--card)', border:'1px solid var(--border)', boxShadow:'0 4px 15px rgba(30,144,214,0.04)' }}>
                    <span className="material-symbols-outlined mb-1 text-[28px]" style={{ color:'var(--sub)' }}>event_busy</span>
                    <p className="text-[10px] font-semibold text-[var(--sub)] uppercase tracking-widest">Leaves Taken</p>
                    <p className="text-xl font-bold text-[var(--blue)] m-0">00</p>
                  </div>
                </div>
              </div>

              {/* INTERACTIVE CALENDAR WIDGET WITH DROPDOWNS  */}
              <div className="hcard lg:col-span-4 rounded-3xl p-6 flex flex-col" style={{ background:'var(--card)', border:'1px solid var(--border)', boxShadow:'0 4px 14px rgba(30,144,214,0.04)' }}>
                <div className="flex justify-between items-center mb-4 pb-3" style={{ borderBottom:'1.5px solid var(--lagoon)' }}>
                  <div className="flex gap-1 -ml-4 items-center">
                    <span className="material-symbols-outlined text-[18px] text-[var(--blue)]">calendar_month</span>
                    {/* Select Month */}
                    <select 
                      value={selectedMonth} 
                      onChange={(e) => { setSelectedMonth(parseInt(e.target.value)); setSelectedDate(null); }}
                      className="text-[11px] font-bold px-0 py-1 rounded-md outline-none cursor-pointer"
                      style={{ background:'var(--lagoon)', color:'var(--blue)', border:'1px solid var(--border)' }}
                    >
                      {monthNames.map((m, i) => <option key={m} value={i}>{m}</option>)}
                    </select>
                    {/* Select Year */}
                    <select 
                      value={selectedYear} 
                      onChange={(e) => { setSelectedYear(parseInt(e.target.value)); setSelectedDate(null); }}
                      className="text-[11px] font-bold px-2 py-1 rounded-md outline-none cursor-pointer"
                      style={{ background:'var(--lagoon)', color:'var(--blue)', border:'1px solid var(--border)' }}
                    >
                      {[2024, 2025, 2026, 2027].map(y => <option key={y} value={y}>{y}</option>)}
                    </select>
                  </div>
                  {selectedDate && (
                    <button onClick={() => setSelectedDate(null)} className="text-[9px] font-semibold px-2 py-1 rounded-md transition-colors" style={{ background:'var(--mist)', color:'var(--gold)', border:'1px solid rgba(201,168,76,0.3)' }}>Show All</button>
                  )}
                </div>
                
                <div className="grid grid-cols-7 gap-1 text-center mb-2">
                  {['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'].map(day => (
                    <span key={day} className="text-[10px] font-bold text-[var(--sub)]">{day}</span>
                  ))}
                </div>
                
                <div className="grid grid-cols-7 gap-1">
                  {/* Empty slots for start of month */}
                  {Array.from({ length: startDayOffset }).map((_, i) => (
                    <div key={`empty-${i}`} className="h-8"></div>
                  ))}
                  
                  {/* Calendar Days */}
                  {daysArray.map(day => {
                    const statusColor = getDayStatusColor(day);
                    const isSelected = selectedDate === day;
                    return (
                      <div 
                        key={day} 
                        onClick={() => setSelectedDate(day)}
                        className="h-8 flex flex-col items-center justify-center rounded-lg cursor-pointer transition-all"
                        style={{
                          background: isSelected ? 'var(--blue)' : 'transparent',
                          color: isSelected ? '#fff' : 'var(--blue)'
                        }}
                        onMouseEnter={e => { if(!isSelected) e.currentTarget.style.background = 'var(--lagoon)' }}
                        onMouseLeave={e => { if(!isSelected) e.currentTarget.style.background = 'transparent' }}
                      >
                        <span className="text-[11px] font-semibold leading-none">{day}</span>
                        {/* Status Dot indicator */}
                        <span className="w-1 h-1 rounded-full mt-0.5" style={{ background: statusColor || 'transparent', boxShadow: isSelected && statusColor ? '0 0 0 1px #fff' : 'none' }}></span>
                      </div>
                    )
                  })}
                </div>
                
                {/* Legends */}
                <div className="flex justify-between mt-auto pt-4" style={{ borderTop:'1px solid var(--lagoon)' }}>
                  <div className="flex items-center gap-1"><span className="w-1.5 h-1.5 rounded-full" style={{ background:'var(--mint)' }}></span><span className="text-[9px] font-medium text-[var(--sub)]">Present</span></div>
                  <div className="flex items-center gap-1"><span className="w-1.5 h-1.5 rounded-full" style={{ background:'var(--rose)' }}></span><span className="text-[9px] font-medium text-[var(--sub)]">Absent</span></div>
                  <div className="flex items-center gap-1"><span className="w-1.5 h-1.5 rounded-full" style={{ background:'var(--gold)' }}></span><span className="text-[9px] font-medium text-[var(--sub)]">Half Day</span></div>
                </div>
              </div>
            </div>

            {/* 2. DAILY TIMESHEET (Current Month) 🔥 AOS Applied 🔥 */}
            <div data-aos="fade-up" data-aos-delay="100" className="hcard rounded-3xl p-8 overflow-hidden" style={{ background:'var(--card)', border:'1px solid var(--border)', boxShadow:'0 4px 14px rgba(30,144,214,0.04)' }}>
              <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6 pb-5 gap-4" style={{ borderBottom:'1px solid var(--lagoon)' }}>
                <h3 className="sh text-sm">
                  Daily Logs 
                  <span className="text-xs font-semibold text-[var(--sub)] ml-2" style={{ background:'none', WebkitTextFillColor:'initial' }}>
                    {selectedDate ? `(Filtered: ${selectedDate} ${currentMonthName.split(' ')[0]})` : `(${currentMonthName})`}
                  </span>
                </h3>
                
                <div className="flex items-center gap-3 w-full md:w-auto">
                  <div className="relative flex-grow md:w-48">
                    <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-[16px] text-[var(--sub)]">search</span>
                    <input 
                      type="text" 
                      placeholder="Search status, date..." 
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      className="w-full text-xs font-bold rounded-lg pl-9 pr-4 py-2 focus:outline-none focus:ring-2 focus:ring-[var(--blue-lt)] border border-transparent"
                      style={{ background:'var(--page)', color:'var(--blue)', border:'1px solid var(--border)' }}
                    />
                  </div>
                  <button className="dlbtn">
                    <span className="material-symbols-outlined" style={{ fontSize:'14px' }}>download</span> <span className="hidden sm:block">Export</span>
                  </button>
                </div>
              </div>

              <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse">
                  <thead>
                    <tr style={{ background:'var(--lagoon)' }}>
                      <th className="py-4 px-6 text-[10px] font-bold uppercase tracking-widest rounded-l-xl" style={{ color:'var(--sub)' }}>Date</th>
                      <th className="py-4 px-6 text-[10px] font-bold uppercase tracking-widest" style={{ color:'var(--sub)' }}>Punch In</th>
                      <th className="py-4 px-6 text-[10px] font-bold uppercase tracking-widest" style={{ color:'var(--sub)' }}>Punch Out</th>
                      <th className="py-4 px-6 text-[10px] font-bold uppercase tracking-widest" style={{ color:'var(--sub)' }}>Work Hours</th>
                      <th className="py-4 px-6 text-[10px] font-bold uppercase tracking-widest rounded-r-xl" style={{ color:'var(--sub)' }}>Status</th>
                    </tr>
                  </thead>
                  <tbody>
                    {filteredLogs.length > 0 ? (
                      filteredLogs.map((log, index) => (
                        <tr key={index} className="transition-colors border-b" style={{ borderColor:'var(--border)' }} onMouseEnter={e => e.currentTarget.style.background='var(--lagoon)'} onMouseLeave={e => e.currentTarget.style.background='transparent'}>
                          <td className="py-4 px-6 text-sm font-bold whitespace-nowrap" style={{ color:'var(--blue)' }}>{log.date}</td>
                          <td className="py-4 px-6 text-xs font-medium whitespace-nowrap" style={{ color:'var(--sub)' }}>{log.in}</td>
                          <td className="py-4 px-6 text-xs font-medium whitespace-nowrap" style={{ color:'var(--sub)' }}>{log.out}</td>
                          <td className="py-4 px-6 text-xs font-medium whitespace-nowrap" style={{ color:'var(--sub)' }}>{log.workHours}</td>
                          <td className="py-4 px-6 whitespace-nowrap">
                            <span className="px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest" style={{ background:log.bg, color:log.c, border:`1px solid ${log.c}40` }}>
                              {log.status}
                            </span>
                          </td>
                        </tr>
                      ))
                    ) : (
                      <tr>
                        <td colSpan="5" className="py-8 text-center text-sm font-semibold" style={{ color:'var(--sub)' }}>No logs found for selected filter or month.</td>
                      </tr>
                    )}
                  </tbody>
                </table>
              </div>
            </div>

            {/* 3. HISTORICAL ATTENDANCE (Month-wise) 🔥 AOS Applied 🔥 */}
            <div data-aos="fade-up" data-aos-delay="200" className="hcard rounded-3xl p-8" style={{ background:'var(--card)', border:'1px solid var(--border)', boxShadow:'0 4px 14px rgba(30,144,214,0.04)' }}>
              <div className="flex justify-between items-center mb-8 pb-5" style={{ borderBottom:'1.5px solid var(--lagoon)' }}>
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-2xl flex items-center justify-center" style={{ background:'var(--mist)', border:'1px solid rgba(201,168,76,0.2)' }}>
                    <span className="material-symbols-outlined text-[22px]" style={{ color:'var(--gold)' }}>history</span>
                  </div>
                  <div>
                    <h3 className="sh text-sm">Attendance History</h3>
                    <p className="text-[11px] font-medium m-0" style={{ color:'var(--sub)' }}>Month-wise summary of your past records</p>
                  </div>
                </div>
                {/* View All / Show Less Button  */}
                <button 
                  onClick={() => setShowAllHistory(!showAllHistory)}
                  className="flex items-center gap-1.5 px-4 py-2 rounded-xl font-bold text-xs transition-all"
                  style={{ background:'transparent', border:'none', color:'var(--blue)', cursor:'pointer' }}
                  onMouseEnter={e => e.currentTarget.style.color='var(--gold)'} onMouseLeave={e => e.currentTarget.style.color='var(--blue)'}
                >
                  {showAllHistory ? 'Show Less' : 'View All'}
                  <span className="material-symbols-outlined text-[16px]">{showAllHistory ? 'expand_less' : 'expand_more'}</span>
                </button>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {visibleHistory.map((data, index) => (
                  <div key={index} className="rounded-2xl p-5 transition-all" style={{ background:'var(--card)', border:'1px solid var(--border)' }} onMouseEnter={e => e.currentTarget.style.borderColor='var(--blue-lt)'} onMouseLeave={e => e.currentTarget.style.borderColor='var(--border)'}>
                    <div className="flex justify-between items-center mb-4 pb-3" style={{ borderBottom:'1px dashed var(--border)' }}>
                      <h4 className="text-sm font-bold m-0" style={{ color:'var(--blue)' }}>{data.month}</h4>
                      <span className="text-[10px] font-bold px-2 py-1 rounded-md" style={{ background:'var(--lagoon)', color:'var(--blue)' }}>{data.avg}</span>
                    </div>
                    <div className="space-y-2 mb-4">
                      <div className="flex justify-between items-center text-xs">
                        <span className="font-semibold" style={{ color:'var(--sub)' }}>Present</span>
                        <span className="font-bold" style={{ color:'var(--mint)' }}>{data.present}</span>
                      </div>
                      <div className="flex justify-between items-center text-xs">
                        <span className="font-semibold" style={{ color:'var(--sub)' }}>Absent</span>
                        <span className="font-bold" style={{ color:'var(--rose)' }}>{data.absent}</span>
                      </div>
                      <div className="flex justify-between items-center text-xs">
                        <span className="font-semibold" style={{ color:'var(--sub)' }}>Half Day</span>
                        <span className="font-bold" style={{ color:'var(--gold)' }}>{data.halfDay}</span>
                      </div>
                      <div className="flex justify-between items-center text-xs">
                        <span className="font-semibold" style={{ color:'var(--sub)' }}>Offs/Holidays</span>
                        <span className="font-bold" style={{ color:'var(--sub)' }}>{data.off}</span>
                      </div>
                    </div>
                    <button className="w-full py-2 rounded-lg text-[10px] font-bold uppercase tracking-widest transition-colors cursor-pointer" style={{ border:'1px solid var(--border)', background:'var(--page)', color:'var(--blue)' }} onMouseEnter={e => { e.currentTarget.style.background='var(--blue)'; e.currentTarget.style.color='#fff'; }} onMouseLeave={e => { e.currentTarget.style.background='var(--page)'; e.currentTarget.style.color='var(--blue)'; }}>
                      Download Slip
                    </button>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </main>
      </div>
    </>
  );
}