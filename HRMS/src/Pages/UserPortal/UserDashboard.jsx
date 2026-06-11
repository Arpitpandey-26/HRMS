import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';

//  Logo colours: Gold #C9A84C · Sky #A8D5EA · Signal Blue #1E90D6

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

  /* ── Animations ─────────────────────────────────────────── */
  @keyframes fadeUp {
    from { opacity:0; transform:translateY(16px); }
    to   { opacity:1; transform:translateY(0); }
  }
  @keyframes pulseGold {
    0%,100% { box-shadow: 0 0 0 0   rgba(201,168,76,0.55); }
    60%      { box-shadow: 0 0 0 12px rgba(201,168,76,0); }
  }
  @keyframes pulseMint {
    0%,100% { box-shadow: 0 0 0 0   rgba(61,191,133,0.50); }
    60%      { box-shadow: 0 0 0 12px rgba(61,191,133,0); }
  }
  @keyframes shimmer {
    0%   { background-position:-500px 0; }
    100% { background-position:500px 0; }
  }
  @keyframes dotBeat {
    0%,100% { transform:scale(1); }
    50%      { transform:scale(1.45); }
  }
  @keyframes spin {
    to { transform:rotate(360deg); }
  }
  @keyframes slideAccent {
    from { transform:scaleY(0); }
    to   { transform:scaleY(1); }
  }

  /* ── Typography base ─────────────────────────────────────── */
  body { font-family:'Inter','Segoe UI',sans-serif; }

  /* ── Sidebar link ────────────────────────────────────────── */
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

  /* ── Hover-lift card ─────────────────────────────────────── */
  .hcard { transition:transform 0.25s ease, box-shadow 0.25s ease; cursor:default; }
  .hcard:hover { transform:translateY(-3px); }

  /* ── Section heading gradient text ──────────────────────── */
  .sh {
    font-size:16px; font-weight:900; letter-spacing:-0.3px; margin:0;
    background:linear-gradient(90deg,var(--blue),var(--gold));
    -webkit-background-clip:text; -webkit-text-fill-color:transparent;
    background-clip:text;
  }

  /* ── Punch button ────────────────────────────────────────── */
  .pbtn {
    width:100%; padding:15px 20px; border-radius:16px; border:none;
    cursor:pointer; font-weight:900; font-size:17px; letter-spacing:1.5px;
    display:flex; align-items:center; justify-content:center; gap:10px;
    color:#fff; transition:transform 0.28s ease, box-shadow 0.28s ease;
    position:relative; overflow:hidden;
  }
  .pbtn::after {
    content:''; position:absolute; inset:0;
    background:linear-gradient(90deg,transparent,rgba(255,255,255,0.28),transparent);
    transform:translateX(-120%); transition:transform 0.55s ease;
  }
  .pbtn:hover::after { transform:translateX(120%); }
  .pbtn:hover { transform:scale(1.025) translateY(-2px); }
  .pbtn:active { transform:scale(0.97); }

  /* ── Skill bar shimmer ───────────────────────────────────── */
  .sbar {
    height:100%; border-radius:10px;
    transition:width 1.35s cubic-bezier(0.4,0,0.2,1);
    background-size:500px 100%;
    position:relative; overflow:hidden;
  }
  .sbar::after {
    content:''; position:absolute; inset:0;
    background:linear-gradient(90deg,transparent 0%,rgba(255,255,255,0.38) 50%,transparent 100%);
    background-size:500px 100%;
    animation:shimmer 2.8s ease infinite;
  }

  /* ── Request card ────────────────────────────────────────── */
  .rcard {
    border-radius:16px; padding:20px;
    transition:transform 0.25s, box-shadow 0.25s, border-color 0.25s;
    cursor:default;
  }
  .rcard:hover { transform:translateY(-5px); }
  .ricon {
    width:42px; height:42px; border-radius:12px;
    display:flex; align-items:center; justify-content:center;
    transition:transform 0.3s ease;
  }
  .rcard:hover .ricon { transform:scale(1.15) rotate(-6deg); }
  .rbtn {
    width:100%; padding:10px 14px; border-radius:10px; cursor:pointer;
    font-weight:800; font-size:12px; border:1.5px solid;
    display:flex; align-items:center; justify-content:center; gap:5px;
    transition:all 0.25s ease; position:relative; overflow:hidden;
  }
  .rbtn::after {
    content:''; position:absolute; inset:0;
    background:rgba(255,255,255,0.18);
    transform:scaleX(0); transform-origin:left;
    transition:transform 0.3s ease;
  }
  .rbtn:hover::after { transform:scaleX(1); }

  /* ── Timeline dot pulse ──────────────────────────────────── */
  .tl-live { animation:dotBeat 2s ease-in-out infinite; }

  /* ── Salary banner shimmer ───────────────────────────────── */
  .sal-banner { position:relative; overflow:hidden; }
  .sal-banner::before {
    content:''; position:absolute; top:0; left:-80%; width:60%; height:100%;
    background:linear-gradient(90deg,transparent,rgba(255,255,255,0.32),transparent);
    animation:shimmer 3.2s ease infinite;
  }

  /* ── View / arrow link ───────────────────────────────────── */
  .vlink {
    font-size:12px; font-weight:800; color:var(--gold);
    text-decoration:none; display:flex; align-items:center; gap:4px;
    transition:gap 0.22s, color 0.22s;
  }
  .vlink:hover { color:var(--blue); gap:8px; }

  /* ── Download button ─────────────────────────────────────── */
  .dlbtn {
    display:flex; align-items:center; gap:8px;
    background:linear-gradient(90deg,var(--blue),var(--blue-lt));
    color:#fff; padding:12px 22px; border-radius:12px;
    font-weight:800; font-size:13px; border:none; cursor:pointer;
    box-shadow:0 5px 18px rgba(30,144,214,0.30);
    transition:all 0.25s;
  }
  .dlbtn:hover {
    transform:translateY(-2px);
    box-shadow:0 8px 24px rgba(30,144,214,0.40);
    background:linear-gradient(90deg,var(--gold),var(--gold-lt));
  }

  /* ── Log card hover ──────────────────────────────────────── */
  .lc { transition:border-color 0.22s, box-shadow 0.22s, transform 0.22s; }
  .lc:hover { border-color:var(--sky) !important; box-shadow:0 4px 14px rgba(30,144,214,0.12); transform:translateY(-2px); }

  /* ── Notif button ────────────────────────────────────────── */
  .nbtn { transition:all 0.22s; }
  .nbtn:hover { background:var(--lagoon) !important; border-color:var(--blue) !important; transform:rotate(12deg) scale(1.10); }

  /* ── Chart bar ───────────────────────────────────────────── */
  .cb { position:relative; }
  .cb:hover .cbtip { opacity:1 !important; }
  .cbtip {
    position:absolute; bottom:calc(100% + 8px); left:50%; transform:translateX(-50%);
    background:var(--blue); color:#fff;
    font-size:9px; font-weight:700; padding:5px 9px;
    border-radius:7px; white-space:nowrap; opacity:0;
    pointer-events:none; transition:opacity 0.2s;
    box-shadow:0 3px 10px rgba(30,144,214,0.28);
  }
`;

export default function UserDashboard() {
  // 🔥 Separate states for scroll-triggered animations 🔥
  const [statsVisible, setStatsVisible] = useState(false);
  const [perfVisible, setPerfVisible] = useState(false);

  // REAL-TIME & ATTENDANCE STATES 
  const [time, setTime] = useState(new Date());
  const [isPunchedIn, setIsPunchedIn] = useState(false);
  const [todayLog, setTodayLog] = useState({ in: '--:-- --', out: '--:-- --' });

  useEffect(() => {
    // Initialize AOS
    AOS.init({
      duration: 800,
      once: true,
      easing: 'ease-out-cubic',
      offset: 120,
    });

    const c = setInterval(() => setTime(new Date()), 1000);

    // 🔥 Intersection Observers to trigger charts ONLY when scrolled into view 🔥
    const obsOptions = { threshold: 0.3 };
    
    const obsStats = new IntersectionObserver(([e]) => {
      if(e.isIntersecting) { setStatsVisible(true); obsStats.disconnect(); }
    }, obsOptions);
    
    const obsPerf = new IntersectionObserver(([e]) => {
      if(e.isIntersecting) { setPerfVisible(true); obsPerf.disconnect(); }
    }, obsOptions);

    const statsEl = document.getElementById('stats-section');
    const perfEl = document.getElementById('perf-section');

    if(statsEl) obsStats.observe(statsEl);
    if(perfEl) obsPerf.observe(perfEl);

    return () => { 
      clearInterval(c); 
      obsStats.disconnect(); 
      obsPerf.disconnect(); 
    };
  }, []);

  const formattedTime = time.toLocaleTimeString('en-US', {
    timeZone: 'Asia/Kolkata', hour: '2-digit', minute: '2-digit', hour12: true,
  });
  const [timeVal, amPm] = formattedTime.split(' ');
  const formattedDate = time.toLocaleDateString('en-US', {
    timeZone: 'Asia/Kolkata', weekday: 'long', month: 'long', day: '2-digit', year: 'numeric',
  });

  const handlePunch = () => {
    if (!isPunchedIn) {
      setIsPunchedIn(true);
      setTodayLog(p => ({ ...p, in: formattedTime }));
    } else {
      setIsPunchedIn(false);
      setTodayLog(p => ({ ...p, out: formattedTime }));
    }
  };

  const bars = [
    { p:85, h:5,  a:0  },
    { p:90, h:0,  a:0  },
    { p:70, h:10, a:10 },
    { p:80, h:10, a:0  },
  ];

  /* ── helpers ── */
  const Row = ({ l, v, lc='var(--sub)', vc='var(--blue)', border='var(--lagoon)' }) => (
    <div style={{ display:'flex', justifyContent:'space-between', padding:'10px 0', borderBottom:`1px solid ${border}` }}>
      <span style={{ fontSize:'13px', fontWeight:600, color:lc }}>{l}</span>
      <span style={{ fontSize:'13px', fontWeight:700, color:vc }}>{v}</span>
    </div>
  );

  return (
    <>
      <style>{STYLES}</style>
      <div style={{ fontFamily:"'Inter','Segoe UI',sans-serif", background:'var(--page)', minHeight:'100vh' }}>

        {/* ══════════════════════════════════════════ SIDEBAR */}
        <aside style={{
          position:'fixed', left:0, top:0, height:'100%', width:'218px',
          background:'linear-gradient(180deg,#FAFCFF 0%,#EAF4FF 55%,#FDF9EF 100%)',
          borderRight:'1.5px solid var(--border)',
          boxShadow:'4px 0 26px rgba(30,144,214,0.08)',
          display:'flex', flexDirection:'column', zIndex:40,
        }}>
          {/* Logo */}
          <div style={{ padding:'16px 18px 14px', display:'flex', alignItems:'center', gap:'5px', borderBottom:'1px solid var(--border)' }}>
            <div style={{ width:'55px', height:'53px', borderRadius:'50%', overflow:'hidden', flexShrink:0, border:'2px solid transparent', boxShadow:'0 3px 10px rgba(201,168,76,0.20)' }}>
              <img src="logo.png" alt="TechHansa" style={{ width:'100%', height:'100%', objectFit:'contain' }} />
            </div>
            <div>
              <span style={{ fontWeight:900, fontSize:'15px', color:'var(--gold)', letterSpacing:'-0.3px' }}>Techhansa</span>
              <span style={{ fontWeight:900, fontSize:'15px', color:'var(--blue)', letterSpacing:'-0.3px' }}>HRMS</span>
            </div>
          </div>

          {/* Mini profile */}
          <div style={{ padding:'14px 12px 10px' }}>
            <div style={{ display:'flex', alignItems:'center', gap:'10px', background:'rgba(255,255,255,0.88)', border:'1px solid var(--border)', borderRadius:'13px', padding:'10px 12px', backdropFilter:'blur(4px)' }}>
              <div style={{ width:'38px', height:'38px', borderRadius:'10px', background:'linear-gradient(135deg,var(--sky),var(--gold))', flexShrink:0, display:'flex', alignItems:'center', justifyContent:'center', boxShadow:'0 3px 9px rgba(201,168,76,0.28)' }}>
                <span style={{ fontSize:'14px', fontWeight:900, color:'#fff' }}>AP</span>
              </div>
              <div>
                <p style={{ fontWeight:800, fontSize:'12.5px', color:'var(--blue)', margin:0 }}>Arpit Pandey</p>
                <p style={{ fontSize:'10px', color:'var(--sub)', margin:0, fontWeight:600 }}>Software Developer</p>
              </div>
            </div>
          </div>

          {/* Nav */}
          <nav style={{ flex:1, padding:'4px 10px', overflowY:'auto' }}>
            <Link to="/user-dashboard" style={{
              display:'flex', alignItems:'center', gap:'10px',
              background:'linear-gradient(90deg,var(--blue),var(--blue-lt))',
              color:'#fff', padding:'11px 16px', borderRadius:'11px',
              textDecoration:'none', fontWeight:800, fontSize:'13px',
              boxShadow:'0 5px 18px rgba(30,144,214,0.30)', marginBottom:'6px',
            }}>
              <span className="material-symbols-outlined ni" style={{ color:'#fff' }}>dashboard</span>
              Dashboard
            </Link>
            {[
              { icon:'person',         label:'Profile',    path:'/user-profile' },
              { icon:'calendar_today', label:'Attendance', path:'/user-attendance' },
              { icon:'payments',       label:'Salary',     path:'/user-salary' },
              { icon:'monitoring',     label:'Appraisal',  path:'#' },
              { icon:'mark_as_unread', label:'Requests',   path:'#' },
              { icon:'trending_up',    label:'Growth',     path:'#' },
              { icon:'mail',           label:'Newsletter', path:'#' },
            ].map((it, i) => (
              <Link key={i} to={it.path} className="nav-l">
                <span className="material-symbols-outlined ni">{it.icon}</span>
                {it.label}
              </Link>
            ))}
          </nav>

          {/* Bottom */}
          <div style={{ borderTop:'1px solid var(--border)', padding:'8px 10px' }}>
            <a href="#" className="nav-l"><span className="material-symbols-outlined ni">settings</span>Settings</a>
            <a href="#" className="nav-l" style={{ color:'var(--rose)' }}
              onMouseEnter={e => { e.currentTarget.style.background='#FFF0F0'; e.currentTarget.style.borderColor='rgba(240,96,96,0.25)'; }}
              onMouseLeave={e => { e.currentTarget.style.background='transparent'; e.currentTarget.style.borderColor='transparent'; }}>
              <span className="material-symbols-outlined" style={{ fontSize:'18px' }}>logout</span>Sign Out
            </a>
          </div>
        </aside>

        {/* ══════════════════════════════════════════ MAIN */}
        <main style={{ marginLeft:'218px', padding:'28px 32px 44px', maxWidth:'1440px' }}>

          {/* Header */}
          <header data-aos="fade-down" style={{ display:'flex', justifyContent:'space-between', alignItems:'center', marginBottom:'26px' }}>
            <div>
              <h1 style={{ fontSize:'23px', fontWeight:900, letterSpacing:'-0.5px', margin:0, background:'linear-gradient(90deg,var(--blue) 30%,var(--gold))', WebkitBackgroundClip:'text', WebkitTextFillColor:'transparent', backgroundClip:'text' }}>
                Employee Dashboard
              </h1>
              <p style={{ fontSize:'12.5px', color:'var(--sub)', marginTop:'4px', fontWeight:600 }}>
                Welcome back, Arpit. Here's your performance summary.
              </p>
            </div>
            <button className="nbtn" style={{ position:'relative', padding:'10px', borderRadius:'50%', background:'var(--card)', border:'1.5px solid var(--border)', color:'var(--blue)', cursor:'pointer', outline:'none', boxShadow:'0 3px 14px rgba(30,144,214,0.10)' }}>
              <span className="material-symbols-outlined" style={{ fontSize:'20px', display:'block' }}>notifications</span>
              <span style={{ position:'absolute', top:'8px', right:'8px', width:'8px', height:'8px', background:'var(--rose)', borderRadius:'50%', border:'2px solid var(--card)' }}></span>
            </button>
          </header>

          {/* ── S1 Profile Banner ── */}
          <section data-aos="fade-up" className="hcard" style={{ marginBottom:'16px' }}>
            <div style={{ background:'linear-gradient(110deg,var(--lagoon) 0%,#FAFCFF 45%,var(--mist) 100%)', borderRadius:'20px', padding:'14px 16px', display:'flex', alignItems:'center', gap:'22px', border:'1.5px solid var(--border)', boxShadow:'0 4px 24px rgba(30,144,214,0.08)', position:'relative', overflow:'hidden' }}>
              {/* Gold wedge decoration */}
              <div className="absolute top-0 right-0 w-[45%] md:w-[30%] h-[120%] bg-gradient-to-l from-[#FFF9E6] to-[#FFF5D1] skew-x-12 translate-x-10 pointer-events-none border-l border-[#D4AF37]/30 shadow-[-15px_0_30px_rgba(250,204,21,0.15)]"></div>
              <div style={{ position:'absolute', top:'14px', right:'22px', display:'flex', gap:'6px', opacity:0.30 }}>
                {[0,1,2].map(i => <div key={i} style={{ width:'6px', height:'6px', borderRadius:'50%', background:'var(--gold)' }}></div>)}
              </div>

              {/* Avatar */}
              <div style={{ width:'80px', height:'80px', borderRadius:'18px', background:'linear', display:'flex', alignItems:'center', justifyContent:'center', border:'3px solid #fff', boxShadow:'0 6px 22px rgba(30,144,214,0.22)', flexShrink:0, zIndex:1 }}>
                <span style={{ fontSize:'28px', fontWeight:900, color:'#cdbc20' }}></span>
              </div>

              <div style={{ flex:1, zIndex:1 }}>
                <h3 style={{ fontSize:'27px', fontWeight:800, letterSpacing:'-0.5px', color:'var(--blue)', margin:'0 0 5px' }}>Arpit Pandey</h3>
                <p style={{ fontSize:'13px', fontWeight:700, color:'var(--sub)', margin:'0 0 12px' }}>
                  Software Developer • <span style={{ color:'var(--gold)', fontWeight:800 }}>ID: SE-1234</span>
                </p>
                <div style={{ display:'flex', gap:'22px', flexWrap:'wrap' }}>
                  {[{icon:'location_on',text:'Varanasi'},{icon:'mail',text:'arpit.pandey@techhansait.com'}].map(({icon,text})=>(
                    <span key={icon} style={{ display:'flex', alignItems:'center', gap:'5px', fontSize:'12px', fontWeight:600, color:'var(--sub)' }}>
                      <span className="material-symbols-outlined" style={{ fontSize:'15px', color:'var(--gold)' }}>{icon}</span>{text}
                    </span>
                  ))}
                </div>
              </div>

              <div style={{ textAlign:'right', zIndex:1 }}>
                <p style={{ fontSize:'9px', fontWeight:800, color:'var(--sub)', textTransform:'uppercase', letterSpacing:'1.2px', margin:'0 0 5px' }}>Join Date</p>
                <p style={{ fontSize:'16px', fontWeight:900, color:'var(--blue)', margin:0 }}>May 25, 2026</p>
              </div>
            </div>
          </section>

          {/* ── S2 Attendance Hub ── */}
          {/* 🔥 Added ID to trigger chart animation when scrolled 🔥 */}
          <section id="stats-section" data-aos="fade-up" data-aos-delay="100" style={{ marginBottom:'22px' }}>
            <div style={{ background:'var(--card)', borderRadius:'22px', padding:'6px', border:'1.5px solid var(--border)', boxShadow:'0 4px 22px rgba(30,144,214,0.06)', display:'flex', gap:'6px', flexWrap:'wrap' }}>

              {/* LEFT: Punch Widget */}
              <div style={{ flex:'0 0 calc(36% - 3px)', minWidth:'250px', background:'linear-gradient(160deg,var(--mist) 0%,#FAFCFF 50%,var(--lagoon) 100%)', borderRadius:'17px', padding:'22px 24px', border:'1px solid rgba(201,168,76,0.22)', display:'flex', flexDirection:'column', position:'relative', overflow:'hidden' }}>
                <div style={{ position:'absolute', top:'-40px', right:'-40px', width:'200px', height:'200px', borderRadius:'50%', background:isPunchedIn?'rgba(61,191,133,0.18)':'rgba(201,168,76,0.22)', filter:'blur(65px)', pointerEvents:'none', transition:'background 0.9s' }}></div>

                {/* Status */}
                <div style={{ display:'flex', justifyContent:'space-between', alignItems:'flex-start', marginBottom:'16px', position:'relative', zIndex:1 }}>
                  <div>
                    <p style={{ fontSize:'9px', fontWeight:800, color:'var(--sub)', textTransform:'uppercase', letterSpacing:'1.5px', margin:'0 0 8px' }}>Current Status</p>
                    <div style={{ display:'inline-flex', alignItems:'center', gap:'7px', padding:'6px 14px', borderRadius:'20px', background:isPunchedIn?'#E8FBF4':'#FFF0F0', border:`1px solid ${isPunchedIn?'rgba(61,191,133,0.35)':'rgba(240,96,96,0.25)'}`, transition:'all 0.5s' }}>
                      <span style={{ width:'8px', height:'8px', borderRadius:'50%', background:isPunchedIn?'var(--mint)':'var(--rose)', display:'inline-block', animation:'dotBeat 1.8s ease-in-out infinite', boxShadow:isPunchedIn?'0 0 6px rgba(61,191,133,0.55)':'0 0 6px rgba(240,96,96,0.55)' }}></span>
                      <span style={{ fontSize:'11px', fontWeight:800, color:isPunchedIn?'#2A9065':'var(--rose)' }}>
                        {isPunchedIn?'Active — Punched In':'Not Punched In'}
                      </span>
                    </div>
                  </div>
                  <div style={{ width:'38px', height:'38px', borderRadius:'50%', background:'var(--card)', border:'1.5px solid var(--border)', display:'flex', alignItems:'center', justifyContent:'center', boxShadow:'0 2px 8px rgba(30,144,214,0.08)' }}>
                    <span className="material-symbols-outlined" style={{ fontSize:'19px', color:'var(--sub)' }}>schedule</span>
                  </div>
                </div>

                {/* Clock */}
                <div style={{ textAlign:'center', margin:'8px 0 20px', position:'relative', zIndex:1 }}>
                  <div style={{ fontSize:'58px', fontWeight:900, color:'var(--blue)', letterSpacing:'-2px', lineHeight:1 }}>
                    {timeVal}<span style={{ fontSize:'22px', color:'var(--sub)', fontWeight:700, marginLeft:'6px' }}>{amPm}</span>
                  </div>
                  <p style={{ fontSize:'12.5px', fontWeight:600, color:'var(--sub)', marginTop:'7px' }}>{formattedDate}</p>
                </div>

                {/* Punch button */}
                <div style={{ position:'relative', zIndex:1, marginBottom:'20px',paddingTop: '50px'}}>
                  <button onClick={handlePunch} className="pbtn" style={{
                    background: isPunchedIn
                      ? 'linear-gradient(90deg,#F06060,#F88080)'
                      : 'linear-gradient(90deg,var(--gold),var(--gold-lt))',
                    boxShadow: isPunchedIn
                      ? '0 6px 22px rgba(240,96,96,0.38)'
                      : '0 6px 22px rgba(201,168,76,0.42)',
                    animation: isPunchedIn ? 'pulseMint 2s infinite' : 'pulseGold 2.5s infinite',
                  }}>
                    <span className="material-symbols-outlined" style={{ fontSize:'46px' }}>
                      {isPunchedIn?'logout':'fingerprint'}
                    </span>
                    {isPunchedIn?'PUNCH OUT':'PUNCH IN'}
                  </button>
                </div>

                {/* Quick stats */}
                <div style={{ display:'grid', gridTemplateColumns:'1fr 1fr 1fr', borderTop:'1px solid rgba(168,213,234,0.38)', paddingTop:'80px', position:'relative', zIndex:1 }}>
                  {[
                    { label:'Present',  val:'21', color:'var(--blue)' },
                    { label:'Absent',   val:'01', color:'var(--rose)' },
                    { label:'Half Day', val:'02', color:'var(--gold)' },
                  ].map((s,i) => (
                    <div key={i} style={{ textAlign:'center', borderLeft:i>0?'1px solid rgba(168,213,234,0.38)':'none' }}>
                      <p style={{ fontSize:'9px', fontWeight:800, color:'var(--sub)', textTransform:'uppercase', letterSpacing:'1px', margin:'0 0 5px' }}>{s.label}</p>
                      <p style={{ fontSize:'24px', fontWeight:900, color:s.color, margin:0, transition:'transform 0.2s', display:'inline-block', cursor:'default' }}
                        onMouseEnter={e=>e.currentTarget.style.transform='scale(1.18)'}
                        onMouseLeave={e=>e.currentTarget.style.transform='scale(1)'}
                      >{s.val}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* RIGHT: Analytics */}
              <div style={{ flex:'1 1 calc(64% - 3px)', minWidth:'300px', background:'var(--lagoon)', borderRadius:'17px', padding:'22px', border:'1px solid var(--border)', display:'flex', flexDirection:'column' }}>
                <div style={{ display:'flex', justifyContent:'space-between', alignItems:'center', marginBottom:'18px' }}>
                  <div>
                    <h3 className="sh">Attendance Analytics</h3>
                    <p style={{ fontSize:'11px', fontWeight:600, color:'var(--sub)', marginTop:'3px' }}>Monthly trends &amp; recent logs</p>
                  </div>
                  <div style={{ background:'var(--card)', padding:'8px 16px', borderRadius:'12px', border:'1px solid var(--border)', textAlign:'center', boxShadow:'0 2px 10px rgba(30,144,214,0.08)' }}>
                    <p style={{ fontSize:'9px', fontWeight:800, color:'var(--sub)', textTransform:'uppercase', letterSpacing:'0.8px', margin:'0 0 3px' }}>Average</p>
                    <p style={{ fontSize:'15px', fontWeight:900, color:'var(--mint)', margin:0 }}>94.8%</p>
                  </div>
                </div>

                <div style={{ display:'flex', gap:'14px', marginBottom:'14px', alignSelf:'flex-end', background:'var(--card)', padding:'6px 16px', borderRadius:'20px', border:'1px solid var(--border)' }}>
                  {[['var(--blue)','Present'],['var(--rose)','Absent'],['var(--gold)','Half Day']].map(([c,l])=>(
                    <div key={l} style={{ display:'flex', alignItems:'center', gap:'5px' }}>
                      <span style={{ width:'9px', height:'9px', borderRadius:'50%', background:c, display:'inline-block' }}></span>
                      <span style={{ fontSize:'10px', fontWeight:700, color:'var(--sub)' }}>{l}</span>
                    </div>
                  ))}
                </div>

                {/* Bar chart - Height now depends on statsVisible */}
                <div style={{ flex:1, display:'flex', flexDirection:'column', justifyContent:'flex-end', marginBottom:'14px' }}>
                  <div style={{ position:'relative', display:'flex', alignItems:'flex-end', gap:'20px', height:'130px', borderLeft:'2px solid rgba(30,144,214,0.15)', borderBottom:'2px solid rgba(30,144,214,0.15)', paddingLeft:'14px', paddingBottom:'2px' }}>
                    {[0,1,2].map(i=>(
                      <div key={i} style={{ position:'absolute', left:0, right:0, top:`${i*33.3}%`, borderTop:'1px dashed rgba(30,144,214,0.12)', pointerEvents:'none' }}></div>
                    ))}
                    {bars.map((col,idx)=>(
                      <div key={idx} className="cb" style={{ flex:1, display:'flex', flexDirection:'column', justifyContent:'flex-end', alignItems:'center', gap:'2px', height:'100%', zIndex:1 }}>
                        <div className="cbtip">Pr:{col.p}% Ab:{col.a}% HD:{col.h}%</div>
                        <div style={{ width:'100%', maxWidth:'30px', background:'linear-gradient(180deg,var(--blue-lt),var(--blue))', borderRadius:'5px 5px 0 0', height:statsVisible?`${col.p}%`:'0', transition:'height 1s cubic-bezier(0.4,0,0.2,1)' }}></div>
                        {col.a>0&&<div style={{ width:'100%', maxWidth:'30px', background:'var(--rose)', height:statsVisible?`${col.a}%`:'0', transition:'height 1s 0.1s ease-out' }}></div>}
                        {col.h>0&&<div style={{ width:'100%', maxWidth:'30px', background:'var(--gold)', borderRadius:'0 0 4px 4px', height:statsVisible?`${col.h}%`:'0', transition:'height 1s 0.2s ease-out' }}></div>}
                      </div>
                    ))}
                  </div>
                  <div style={{ display:'flex', justifyContent:'space-around', marginTop:'8px', paddingLeft:'14px' }}>
                    {['Wk 1','Wk 2','Wk 3','Wk 4'].map(w=>(
                      <span key={w} style={{ fontSize:'10px', fontWeight:700, color:'var(--sub)' }}>{w}</span>
                    ))}
                  </div>
                </div>

                {/* Recent logs */}
                <div style={{ borderTop:'1px solid var(--border)', paddingTop:'14px' }}>
                  <h4 style={{ fontSize:'10px', fontWeight:800, color:'var(--blue)', textTransform:'uppercase', letterSpacing:'1.2px', margin:'0 0 12px' }}>Recent Logs</h4>
                  <div style={{ display:'grid', gridTemplateColumns:'repeat(4,1fr)', gap:'8px' }}>
                    {[
                      { d:'Today',  in:todayLog.in, out:todayLog.out, active:true },
                      { d:'Jun 05', in:'09:35 AM', out:'06:35 PM' },
                      { d:'Jun 04', in:'09:25 AM', out:'06:30 PM' },
                      { d:'Jun 03', in:'09:30 AM', out:'06:40 PM' },
                    ].map((log,idx)=>(
                      <div key={idx} className="lc" style={{ padding:'10px 11px', borderRadius:'12px', background:log.active?'var(--card)':'rgba(255,255,255,0.65)', border:`1px solid ${log.active?'rgba(201,168,76,0.45)':'var(--border)'}`, boxShadow:log.active?'0 3px 12px rgba(201,168,76,0.15)':'none' }}>
                        <p style={{ fontSize:'10px', fontWeight:800, color:log.active?'var(--gold)':'var(--sub)', margin:'0 0 8px' }}>{log.d}</p>
                        {[['In',log.in],['Out',log.out]].map(([lbl,val])=>(
                          <div key={lbl} style={{ display:'flex', justifyContent:'space-between', marginBottom:'3px' }}>
                            <span style={{ fontSize:'9px', fontWeight:700, color:'var(--sub)' }}>{lbl}</span>
                            <span style={{ fontSize:'10px', fontWeight:800, color:'var(--blue)' }}>{val}</span>
                          </div>
                        ))}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* ── S3 Performance Rating ── */}
          {/* 🔥 Added ID to trigger circle animation when scrolled 🔥 */}
          <section id="perf-section" data-aos="fade-up" data-aos-delay="200" className="hcard" style={{ marginBottom:'22px' }}>
            <div style={{ background:'var(--card)', borderRadius:'20px', padding:'24px 28px', border:'1.5px solid var(--border)', boxShadow:'0 4px 22px rgba(30,144,214,0.06)' }}>
              <div style={{ display:'flex', justifyContent:'space-between', alignItems:'center', marginBottom:'22px' }}>
                <h3 className="sh">Performance Rating</h3>
                <a href="#" className="vlink">View Details <span className="material-symbols-outlined" style={{ fontSize:'14px' }}>arrow_forward</span></a>
              </div>
              <div style={{ display:'flex', alignItems:'center', gap:'36px', flexWrap:'wrap' }}>
                {/* Gauge */}
                <div style={{ background:'linear-gradient(135deg,var(--lagoon),var(--mist))', borderRadius:'20px', padding:'24px', display:'flex', alignItems:'center', justifyContent:'center', flexShrink:0, border:'1px solid var(--border)' }}>
                  <div style={{ position:'relative', width:'100px', height:'100px' }}>
                    <svg style={{ width:'100%', height:'100%', transform:'rotate(-90deg)' }}>
                      <defs>
                        <linearGradient id="gg" x1="0" y1="0" x2="0" y2="1">
                          <stop offset="0%" stopColor="var(--blue)" />
                          <stop offset="100%" stopColor="var(--gold)" />
                        </linearGradient>
                      </defs>
                      <circle cx="50" cy="50" r="40" fill="transparent" stroke="var(--border)" strokeWidth="7" />
                      <circle cx="50" cy="50" r="40" fill="transparent" stroke="url(#gg)" strokeWidth="7"
                        strokeDasharray="251.2" strokeDashoffset={perfVisible?'25.12':'251.2'}
                        strokeLinecap="round"
                        style={{ transition:'stroke-dashoffset 1.7s cubic-bezier(0.4,0,0.2,1)' }}
                      />
                    </svg>
                    <div style={{ position:'absolute', inset:0, display:'flex', flexDirection:'column', alignItems:'center', justifyContent:'center' }}>
                      <p style={{ fontSize:'26px', fontWeight:900, color:'var(--blue)', margin:0 }}>4.5</p>
                      <p style={{ fontSize:'9px', fontWeight:800, color:'var(--gold)', textTransform:'uppercase', letterSpacing:'1px', margin:0 }}>Overall</p>
                    </div>
                  </div>
                </div>

                {/* Skill bars */}
                <div style={{ flex:1, minWidth:'220px' }}>
                  {[
                    { name:'Technical Skill', val:92, from:'var(--blue)',  to:'var(--blue-lt)' },
                    { name:'Punctuality',     val:88, from:'var(--gold)',  to:'var(--gold-lt)' },
                    { name:'Soft Skills',     val:95, from:'var(--mint)',  to:'#6ED8A8' },
                  ].map((sk,i)=>(
                    <div key={i} style={{ marginBottom:i<2?'20px':0 }}>
                      <div style={{ display:'flex', justifyContent:'space-between', marginBottom:'7px' }}>
                        <span style={{ fontSize:'13px', fontWeight:700, color:'var(--blue)' }}>{sk.name}</span>
                        <span style={{ fontSize:'13px', fontWeight:900, color:'var(--gold)' }}>{sk.val}%</span>
                      </div>
                      <div style={{ height:'8px', background:'var(--lagoon)', borderRadius:'10px', overflow:'hidden', border:'1px solid var(--border)' }}>
                        <div className="sbar" style={{ background:`linear-gradient(90deg,${sk.from},${sk.to})`, width:perfVisible?`${sk.val}%`:'0' }}></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* ── S4 Request Management ── */}
          <section data-aos="fade-up" data-aos-delay="300" style={{ marginBottom:'22px' }}>
            <div style={{ background:'var(--card)', borderRadius:'20px', padding:'24px 28px', border:'1.5px solid var(--border)', boxShadow:'0 4px 22px rgba(30,144,214,0.06)' }}>
              <div style={{ display:'flex', justifyContent:'space-between', alignItems:'center', marginBottom:'22px' }}>
                <h3 className="sh">Request Management</h3>
                <button className="vlink" style={{ background:'none', border:'none', cursor:'pointer', padding:0 }}>
                  View History <span className="material-symbols-outlined" style={{ fontSize:'14px' }}>arrow_forward</span>
                </button>
              </div>
              <div style={{ display:'grid', gridTemplateColumns:'repeat(3,1fr)', gap:'18px' }}>
                <RCard bg="linear-gradient(140deg,var(--lagoon),#fff)" bdr="rgba(30,144,214,0.18)" hbdr="var(--blue)" hg="rgba(30,144,214,0.12)" iBg="var(--lagoon)" iC="var(--blue)" icon="event_busy" badge="1 Pending" bBg="#EBF6FF" bC="var(--blue)" title="Leave Request" desc="Request full-day PTOs, casual, or sick leaves securely." btn="Apply Leave" btnC="var(--blue)" btnH="var(--blue)" />
                <RCard bg="linear-gradient(140deg,var(--mist),#fff)" bdr="rgba(201,168,76,0.20)" hbdr="var(--gold)" hg="rgba(201,168,76,0.14)" iBg="var(--mist)" iC="var(--gold)" icon="timelapse" badge="Approved" bBg="#E8FBF4" bC="var(--mint)" title="Half-Day Request" desc="Apply for first or second half leaves for urgent short tasks." btn="Request Half-Day" btnC="var(--gold)" btnH="var(--gold)" />
                <RCard bg="linear-gradient(140deg,#E8FBF4,#fff)" bdr="rgba(61,191,133,0.18)" hbdr="var(--mint)" hg="rgba(61,191,133,0.12)" iBg="#E8FBF4" iC="var(--mint)" icon="receipt_long" badge="0 Drafts" bBg="#F4F5F8" bC="var(--sub)" title="Expense Claim" desc="Submit bills for travel, meals, or internet reimbursements." btn="File Expense" btnC="var(--mint)" btnH="var(--mint)" />
              </div>
            </div>
          </section>

          {/* ── S5 Career Growth ── */}
          <section data-aos="fade-up" data-aos-delay="400" className="hcard" style={{ marginBottom:'22px' }}>
            <div style={{ background:'var(--card)', borderRadius:'20px', padding:'24px 28px', border:'1.5px solid var(--border)', boxShadow:'0 4px 22px rgba(30,144,214,0.06)' }}>
              <h3 className="sh" style={{ marginBottom:'24px' }}>Career Growth Roadmap</h3>
              <div style={{ position:'relative' }}>
                <div style={{ position:'absolute', left:'13px', top:'8px', bottom:'8px', width:'2px', background:'linear-gradient(180deg,var(--mint),var(--blue) 55%,var(--border))', borderRadius:'2px' }}></div>
                <div style={{ display:'flex', flexDirection:'column', gap:'24px' }}>
                  {/* Done */}
                  <div style={{ paddingLeft:'42px', display:'flex', justifyContent:'space-between', alignItems:'center' }}>
                    <div style={{ position:'absolute', left:'7px', width:'14px', height:'14px', borderRadius:'50%', background:'var(--mint)', border:'3px solid #E8FBF4', zIndex:1, boxShadow:'0 0 0 4px rgba(61,191,133,0.16)' }}></div>
                    <div>
                      <h4 style={{ fontSize:'13px', fontWeight:800, color:'var(--blue)', margin:'0 0 3px' }}>Junior Developer</h4>
                      <p style={{ fontSize:'11px', fontWeight:600, color:'var(--sub)', margin:0 }}>Completed April 2026 • Duration: 1 Year</p>
                    </div>
                    <span className="material-symbols-outlined" style={{ fontSize:'22px', color:'var(--mint)', flexShrink:0 }}>check_circle</span>
                  </div>
                  {/* Current */}
                  <div style={{ paddingLeft:'42px', display:'flex', justifyContent:'space-between', alignItems:'center' }}>
                    <div className="tl-live" style={{ position:'absolute', left:'7px', width:'14px', height:'14px', borderRadius:'50%', background:'var(--blue)', border:'3px solid var(--lagoon)', zIndex:1, boxShadow:'0 0 0 5px rgba(30,144,214,0.18)' }}></div>
                    <div>
                      <h4 style={{ fontSize:'15px', fontWeight:900, color:'var(--blue)', margin:'0 0 3px' }}>Software Developer</h4>
                      <p style={{ fontSize:'11.5px', fontWeight:600, color:'var(--sub)', margin:0 }}>Current Position • Since May 2026</p>
                    </div>
                    <span style={{ padding:'7px 18px', background:'linear-gradient(90deg,var(--blue),var(--blue-lt))', color:'#fff', borderRadius:'10px', fontWeight:800, fontSize:'12px', boxShadow:'0 4px 14px rgba(30,144,214,0.28)', flexShrink:0 }}>Current</span>
                  </div>
                  {/* Future */}
                  <div style={{ paddingLeft:'42px', display:'flex', justifyContent:'space-between', alignItems:'center', opacity:0.42 }}>
                    <div style={{ position:'absolute', left:'7px', width:'14px', height:'14px', borderRadius:'50%', background:'var(--border)', border:'3px solid var(--page)', zIndex:1 }}></div>
                    <div>
                      <h4 style={{ fontSize:'13px', fontWeight:700, color:'var(--sub)', margin:'0 0 3px' }}>Senior Software Developer</h4>
                      <p style={{ fontSize:'11px', fontWeight:600, color:'var(--sub)', margin:0 }}>Projected Target: Q4 2028</p>
                    </div>
                    <span className="material-symbols-outlined" style={{ fontSize:'22px', color:'var(--sub)', flexShrink:0 }}>lock</span>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* ── S6 Salary Overview ── */}
          <section data-aos="fade-up" data-aos-delay="500" className="hcard" style={{ marginBottom:'22px' }}>
            <div style={{ background:'var(--card)', borderRadius:'20px', padding:'24px 28px', border:'1.5px solid var(--border)', boxShadow:'0 4px 22px rgba(30,144,214,0.06)' }}>
              <div style={{ display:'flex', justifyContent:'space-between', alignItems:'center', marginBottom:'22px' }}>
                <h3 className="sh">Salary Overview</h3>
                <span style={{ padding:'5px 14px', background:'var(--lagoon)', color:'var(--blue)', border:'1px solid var(--border)', borderRadius:'8px', fontSize:'11px', fontWeight:800 }}>June 2026</span>
              </div>

              {/* Net banner */}
              <div className="sal-banner" style={{ display:'flex', justifyContent:'space-between', alignItems:'center', padding:'22px 26px', background:'linear-gradient(110deg,var(--mist) 0%,#FAFCFF 50%,var(--lagoon) 100%)', border:'1.5px solid rgba(201,168,76,0.26)', borderRadius:'16px', marginBottom:'24px', flexWrap:'wrap', gap:'14px' }}>
                <div>
                  <p style={{ fontSize:'9px', fontWeight:800, color:'var(--sub)', textTransform:'uppercase', letterSpacing:'1.2px', margin:'0 0 6px' }}>Monthly Net Payable</p>
                  <p style={{ fontSize:'32px', fontWeight:900, color:'var(--blue)', margin:0, letterSpacing:'-1px' }}>₹ 34,000.00</p>
                </div>
                <button className="dlbtn">
                  <span className="material-symbols-outlined" style={{ fontSize:'17px' }}>download</span>Download Payslip
                </button>
              </div>

              {/* Earnings */}
              <p style={{ fontSize:'11px', fontWeight:900, color:'var(--mint)', textTransform:'uppercase', letterSpacing:'1px', margin:'0 0 14px' }}>Earnings</p>
              <Row l="Basic Salary"               v="₹ 22,500.00" />
              <Row l="House Rent Allowance (HRA)" v="₹ 9,000.00" />
              <Row l="Special Allowance"          v="₹ 4,500.00" />
              <div style={{ display:'flex', justifyContent:'space-between', padding:'12px 0 20px' }}>
                <span style={{ fontSize:'13px', fontWeight:900, color:'var(--mint)' }}>Gross Earnings</span>
                <span style={{ fontSize:'13px', fontWeight:900, color:'var(--mint)' }}>₹ 36,000.00</span>
              </div>

              {/* Deductions */}
              <p style={{ fontSize:'11px', fontWeight:900, color:'var(--rose)', textTransform:'uppercase', letterSpacing:'1px', margin:'0 0 14px' }}>Deductions</p>
              <Row l="Provident Fund (12%)" v="- ₹ 1,800.00" lc="#F08080" vc="var(--rose)" border="#FFF0F0" />
              <Row l="Professional Tax"    v="- ₹ 200.00"   lc="#F08080" vc="var(--rose)" border="#FFF0F0" />
              <div style={{ display:'flex', justifyContent:'space-between', padding:'12px 0 20px' }}>
                <span style={{ fontSize:'13px', fontWeight:900, color:'var(--rose)' }}>Total Deductions</span>
                <span style={{ fontSize:'13px', fontWeight:900, color:'var(--rose)' }}>- ₹ 2,000.00</span>
              </div>

              {/* Net pay */}
              <div style={{ padding:'18px 22px', background:'linear-gradient(90deg,var(--lagoon),var(--mist))', borderRadius:'14px', border:'1.5px solid rgba(30,144,214,0.18)', display:'flex', justifyContent:'space-between', alignItems:'center' }}>
                <span style={{ fontSize:'14px', fontWeight:900, color:'var(--blue)' }}>Net Salary Credited</span>
                <span style={{ fontSize:'24px', fontWeight:900, color:'var(--mint)' }}>₹ 34,000.00</span>
              </div>

              <div style={{ marginTop:'18px', paddingTop:'14px', borderTop:'1px solid var(--lagoon)', display:'flex', justifyContent:'space-between', alignItems:'center' }}>
                <p style={{ fontSize:'10px', fontWeight:700, color:'var(--sub)', textTransform:'uppercase', letterSpacing:'1px', margin:0 }}>Next Revision: July 2026</p>
                <a href="#" className="vlink">View History <span className="material-symbols-outlined" style={{ fontSize:'14px' }}>arrow_forward</span></a>
              </div>
            </div>
          </section>

          {/* Footer */}
          <footer style={{ paddingTop:'20px', paddingBottom:'8px', borderTop:'1px solid var(--border)', display:'flex', justifyContent:'space-between', alignItems:'center', flexWrap:'wrap', gap:'10px' }}>
            <p style={{ fontSize:'11px', fontWeight:600, color:'var(--sub)', margin:0 }}>© 2026 TechHansa HRMS. All rights reserved.</p>
            <div style={{ display:'flex', gap:'22px' }}>
              {['Privacy','Terms','Support'].map(l=>(
                <a key={l} href="#" style={{ fontSize:'11px', fontWeight:700, color:'var(--sub)', textDecoration:'none', transition:'color 0.2s' }}
                  onMouseEnter={e=>e.currentTarget.style.color='var(--gold)'}
                  onMouseLeave={e=>e.currentTarget.style.color='var(--sub)'}
                >{l}</a>
              ))}
            </div>
          </footer>
        </main>
      </div>
    </>
  );
}

/* ── Request Card ── */
function RCard({ bg,bdr,hbdr,hg,iBg,iC,icon,badge,bBg,bC,title,desc,btn,btnC,btnH }) {
  const [h,sH] = useState(false);
  return (
    <div className="rcard"
      onMouseEnter={()=>sH(true)} onMouseLeave={()=>sH(false)}
      style={{ background:bg, border:`1.5px solid ${h?hbdr:bdr}`, boxShadow:h?`0 10px 28px ${hg}`:'none', transform:h?'translateY(-5px)':'none' }}
    >
      <div style={{ display:'flex', justifyContent:'space-between', alignItems:'flex-start', marginBottom:'16px' }}>
        <div className="ricon" style={{ background:iBg, border:`1px solid ${bdr}` }}>
          <span className="material-symbols-outlined" style={{ fontSize:'20px', color:iC }}>{icon}</span>
        </div>
        <span style={{ padding:'4px 10px', background:bBg, color:bC, borderRadius:'7px', fontSize:'9px', fontWeight:800, textTransform:'uppercase', letterSpacing:'0.8px' }}>{badge}</span>
      </div>
      <h4 style={{ fontSize:'13.5px', fontWeight:900, color:'var(--blue)', margin:'0 0 7px' }}>{title}</h4>
      <p style={{ fontSize:'12px', fontWeight:600, color:'var(--sub)', margin:'0 0 18px', lineHeight:1.55 }}>{desc}</p>
      <button className="rbtn" style={{ background:h?btnH:'var(--card)', color:h?'#fff':btnC, borderColor:btnC }}>
        {btn}{h&&<span className="material-symbols-outlined" style={{ fontSize:'14px' }}>add</span>}
      </button>
    </div>
  );
}