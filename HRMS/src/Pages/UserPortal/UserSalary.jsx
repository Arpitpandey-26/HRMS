import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';

// ── Shared Theme Colors (From Dashboard) ──
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

  /* ── Card & Button Utilities ── */
  .hcard { transition:transform 0.25s ease, box-shadow 0.25s ease; cursor:default; }
  .hcard:hover { transform:translateY(-3px); box-shadow: 0 8px 25px rgba(30,144,214,0.08); }
  
  .sh {
    font-size:16px; font-weight:900; letter-spacing:-0.3px; margin:0;
    background:linear-gradient(90deg,var(--blue),var(--gold));
    -webkit-background-clip:text; -webkit-text-fill-color:transparent;
    background-clip:text;
  }

  .dlbtn {
    display:flex; align-items:center; gap:8px;
    background:linear-gradient(90deg,var(--blue),var(--blue-lt));
    color:#fff; padding:10px 18px; border-radius:10px;
    font-weight:700; font-size:12px; border:none; cursor:pointer;
    box-shadow:0 4px 12px rgba(30,144,214,0.25);
    transition:all 0.25s;
  }
  .dlbtn:hover {
    transform:translateY(-2px);
    box-shadow:0 6px 18px rgba(30,144,214,0.35);
    background:linear-gradient(90deg,var(--gold),var(--gold-lt));
  }
  
  /* ── Table & List Rows ── */
  .row-item {
    display: flex; justify-content: space-between; align-items: center;
    padding: 12px 14px; border-bottom: 1px dashed var(--border);
    font-size: 13px; font-weight: 600;
  }
  .row-item:last-child { border-bottom: none; }
  .row-item:hover { background-color: var(--lagoon); border-radius: 8px; border-bottom-color: transparent; }

  /* ── Pulse Animations for Modal ── */
  @keyframes fadeUp {
    from { opacity:0; transform:translateY(16px); }
    to   { opacity:1; transform:translateY(0); }
  }
  @keyframes pulseMint {
    0%,100% { box-shadow: 0 0 0 0 rgba(61,191,133,0.50); }
    60%      { box-shadow: 0 0 0 12px rgba(61,191,133,0); }
  }
  @keyframes pulseGold {
    0%,100% { box-shadow: 0 0 0 0 rgba(201,168,76,0.55); }
    60%      { box-shadow: 0 0 0 12px rgba(201,168,76,0); }
  }
`;

export default function UserSalary() {
  const [mounted, setMounted] = useState(false);
  const [selectedYear, setSelectedYear] = useState("2026");
  
  // Simulated Modal State for Document Downloads
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalTitle, setModalTitle] = useState("");

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

  const handleDownload = (docName) => {
    setModalTitle(`Downloading ${docName}...`);
    setIsModalOpen(true);
    setTimeout(() => setIsModalOpen(false), 2000);
  };

  // Mock History Data
  const payslipHistory = [
    { month: "May 2026", gross: "₹36,000", net: "₹34,000", status: "Paid", date: "31 May 2026", color: "var(--mint)" },
    { month: "Apr 2026", gross: "₹36,000", net: "₹34,000", status: "Paid", date: "30 Apr 2026", color: "var(--mint)" },
    { month: "Mar 2026", gross: "₹36,000", net: "₹34,000", status: "Paid", date: "31 Mar 2026", color: "var(--mint)" },
    { month: "Feb 2026", gross: "₹36,000", net: "₹33,100", status: "Paid", date: "28 Feb 2026", color: "var(--mint)" },
  ];

  return (
    <>
      <style>{STYLES}</style>
      <div style={{ fontFamily:"'Inter','Segoe UI',sans-serif", background:'var(--page)', minHeight:'100vh', display: 'flex', color: 'var(--sub)' }}>

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
            <Link to="/user-dashboard" className="nav-l">
              <span className="material-symbols-outlined ni">dashboard</span> Dashboard
            </Link>
            <Link to="/user-profile" className="nav-l">
              <span className="material-symbols-outlined ni">person</span> Profile
            </Link>
            <Link to="/user-attendance" className="nav-l">
              <span className="material-symbols-outlined ni">calendar_today</span> Attendance
            </Link>
            
            {/* Active Link */}
            <a href="#" style={{
              display:'flex', alignItems:'center', gap:'10px',
              background:'linear-gradient(90deg,var(--blue),var(--blue-lt))',
              color:'#fff', padding:'11px 16px', borderRadius:'11px',
              textDecoration:'none', fontWeight:800, fontSize:'13px',
              boxShadow:'0 5px 18px rgba(30,144,214,0.30)', marginBottom:'6px',
            }}>
              <span className="material-symbols-outlined ni" style={{ color:'#fff' }}>payments</span>
              Salary
            </a>

            {[
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

          <div style={{ borderTop:'1px solid var(--border)', padding:'8px 10px' }}>
            <a href="#" className="nav-l"><span className="material-symbols-outlined ni">settings</span>Settings</a>
            <a href="#" className="nav-l" style={{ color:'var(--rose)' }}
              onMouseEnter={e => { e.currentTarget.style.background='#FFF0F0'; e.currentTarget.style.borderColor='rgba(240,96,96,0.25)'; }}
              onMouseLeave={e => { e.currentTarget.style.background='transparent'; e.currentTarget.style.borderColor='transparent'; }}>
              <span className="material-symbols-outlined" style={{ fontSize:'18px' }}>logout</span>Sign Out
            </a>
          </div>
        </aside>

        {/* ══════════════════════════════════════════ MAIN CONTENT */}
        <main style={{ marginLeft:'218px', padding:'32px 40px', width: '100%', maxWidth:'1200px' }}>

          {/* Header  AOS Applied  */}
          <header data-aos="fade-down" style={{ display:'flex', justifyContent:'space-between', alignItems:'center', marginBottom:'24px' }}>
            <div>
              <div style={{ display:'flex', alignItems:'center', gap:'4px', fontSize:'10px', fontWeight:700, color:'var(--sub)', textTransform:'uppercase', letterSpacing:'1px', marginBottom:'4px' }}>
                <span>Dashboard</span>
                <span className="material-symbols-outlined" style={{ fontSize:'12px' }}>chevron_right</span>
                <span style={{ color:'var(--gold)' }}>Salary</span>
              </div>
              <h1 style={{ fontSize:'24px', fontWeight:900, color:'var(--blue)', margin:0, letterSpacing:'-0.5px' }}>
                Compensation & Payroll
              </h1>
            </div>
            
            {/* Quick Actions */}
            <div style={{ display:'flex', gap:'12px' }}>
              <select 
                value={selectedYear} 
                onChange={(e) => setSelectedYear(e.target.value)}
                style={{ padding:'8px 14px', borderRadius:'10px', border:'1px solid var(--border)', background:'var(--card)', color:'var(--blue)', fontSize:'12px', fontWeight:700, outline:'none', cursor:'pointer' }}
              >
                <option value="2026">Financial Year 2026-27</option>
                <option value="2025">Financial Year 2025-26</option>
              </select>
              <button className="dlbtn" onClick={() => handleDownload("Tax Statement")}>
                <span className="material-symbols-outlined" style={{ fontSize:'16px' }}>description</span> Tax Form 16
              </button>
            </div>
          </header>

          {/* ── Section 1: Overview Banner  AOS Applied  ── */}
          <section data-aos="fade-up" className="hcard" style={{ marginBottom:'24px', background:'var(--card)', borderRadius:'16px', border:'1px solid var(--border)', boxShadow:'0 4px 14px rgba(30,144,214,0.04)', display:'flex', flexDirection:'column', overflow:'hidden' }}>
            <div style={{ display:'flex', flexWrap:'wrap', padding:'24px', background:'linear-gradient(120deg, #FAFCFF, var(--lagoon))', borderBottom:'1px solid var(--border)' }}>
              
              <div style={{ flex:'1 1 30%', minWidth:'200px', borderRight:'1px solid var(--border)', paddingRight:'20px' }}>
                <p style={{ fontSize:'10px', fontWeight:700, color:'var(--sub)', textTransform:'uppercase', letterSpacing:'1px', margin:'0 0 6px' }}>Current Processing Month</p>
                <h2 style={{ fontSize:'20px', fontWeight:900, color:'var(--blue)', margin:'0 0 4px' }}>June 2026</h2>
                <div style={{ display:'flex', alignItems:'center', gap:'6px', marginTop:'8px' }}>
                  <span style={{ width:'8px', height:'8px', borderRadius:'50%', background:'var(--gold)', display:'inline-block', animation:'pulseGold 2s infinite' }}></span>
                  <span style={{ fontSize:'11px', fontWeight:700, color:'var(--gold)' }}>Processing (Exp. 1st July)</span>
                </div>
              </div>

              <div style={{ flex:'1 1 30%', minWidth:'200px', paddingLeft:'24px' }}>
                <p style={{ fontSize:'10px', fontWeight:700, color:'var(--sub)', textTransform:'uppercase', letterSpacing:'1px', margin:'0 0 6px' }}>Estimated Net Payable</p>
                <h2 style={{ fontSize:'28px', fontWeight:900, color:'var(--mint)', margin:'0 0 4px', letterSpacing:'-0.5px' }}>₹ 34,000.00</h2>
                <p style={{ fontSize:'11px', fontWeight:600, color:'var(--sub)', margin:0 }}>Gross: ₹36,000.00 | Deductions: ₹2,000.00</p>
              </div>

              <div style={{ flex:'1 1 20%', display:'flex', alignItems:'center', justifyContent:'flex-end' }}>
                 <button onClick={() => handleDownload("June 2026 Payslip")} style={{ background:'var(--card)', border:'1px solid var(--blue)', color:'var(--blue)', padding:'10px 16px', borderRadius:'10px', fontWeight:700, fontSize:'12px', cursor:'pointer', display:'flex', alignItems:'center', gap:'6px', transition:'all 0.2s' }} onMouseEnter={e => { e.currentTarget.style.background='var(--blue)'; e.currentTarget.style.color='#fff'; }} onMouseLeave={e => { e.currentTarget.style.background='var(--card)'; e.currentTarget.style.color='var(--blue)'; }}>
                   <span className="material-symbols-outlined" style={{ fontSize:'16px' }}>download</span> Download Draft
                 </button>
              </div>
            </div>
            
            {/* Quick KPI Strip */}
            <div style={{ display:'grid', gridTemplateColumns:'repeat(4, 1fr)', padding:'16px 24px', background:'var(--card)', gap:'16px' }}>
              {[
                { l: 'Annual CTC', v: '₹ 4,32,000' },
                { l: 'YTD Earnings', v: '₹ 1,08,000' },
                { l: 'YTD Tax (TDS)', v: '₹ 0.00' },
                { l: 'Leave Encashment', v: '₹ 1,200.00' }
              ].map((k, i) => (
                <div key={i} style={{ borderRight: i !== 3 ? '1px solid var(--border)' : 'none' }}>
                  <p style={{ fontSize:'10px', fontWeight:600, color:'var(--sub)', textTransform:'uppercase', margin:'0 0 4px' }}>{k.l}</p>
                  <p style={{ fontSize:'14px', fontWeight:800, color:'var(--blue)', margin:0 }}>{k.v}</p>
                </div>
              ))}
            </div>
          </section>

          {/* ── Section 2: Detailed Breakdown (2 Columns)  AOS Applied  ── */}
          <div style={{ display:'grid', gridTemplateColumns:'repeat(auto-fit, minmax(400px, 1fr))', gap:'24px', marginBottom:'24px' }}>
            
            {/* Earnings Card */}
            <section data-aos="fade-right" data-aos-delay="100" className="hcard" style={{ background:'var(--card)', borderRadius:'16px', padding:'24px', border:'1px solid var(--border)', boxShadow:'0 4px 14px rgba(30,144,214,0.04)' }}>
              <div style={{ display:'flex', justifyContent:'space-between', alignItems:'center', borderBottom:'1.5px solid var(--lagoon)', paddingBottom:'12px', marginBottom:'16px' }}>
                <h3 style={{ fontSize:'14px', fontWeight:800, color:'var(--blue)', margin:0, display:'flex', alignItems:'center', gap:'6px' }}>
                   Earnings
                </h3>
                <span style={{ fontSize:'12px', fontWeight:800, color:'var(--mint)' }}>₹ 36,000.00</span>
              </div>
              <div style={{ display:'flex', flexDirection:'column' }}>
                <div className="row-item"><span style={{ color:'var(--sub)' }}>Basic Salary</span><span style={{ color:'var(--blue)' }}>₹ 22,500.00</span></div>
                <div className="row-item"><span style={{ color:'var(--sub)' }}>House Rent Allowance (HRA)</span><span style={{ color:'var(--blue)' }}>₹ 9,000.00</span></div>
                <div className="row-item"><span style={{ color:'var(--sub)' }}>Special Allowance</span><span style={{ color:'var(--blue)' }}>₹ 4,500.00</span></div>
                <div className="row-item"><span style={{ color:'var(--sub)' }}>Conveyance Allowance</span><span style={{ color:'var(--blue)' }}>₹ 0.00</span></div>
                <div className="row-item"><span style={{ color:'var(--sub)' }}>Performance Bonus</span><span style={{ color:'var(--blue)' }}>₹ 0.00</span></div>
              </div>
            </section>

            {/* Deductions Card */}
            <section data-aos="fade-left" data-aos-delay="200" className="hcard" style={{ background:'var(--card)', borderRadius:'16px', padding:'24px', border:'1px solid var(--border)', boxShadow:'0 4px 14px rgba(30,144,214,0.04)' }}>
              <div style={{ display:'flex', justifyContent:'space-between', alignItems:'center', borderBottom:'1.5px solid var(--lagoon)', paddingBottom:'12px', marginBottom:'16px' }}>
                <h3 style={{ fontSize:'14px', fontWeight:800, color:'var(--blue)', margin:0, display:'flex', alignItems:'center', gap:'6px' }}>
                  Deductions
                </h3>
                <span style={{ fontSize:'12px', fontWeight:800, color:'var(--rose)' }}>₹ 2,000.00</span>
              </div>
              <div style={{ display:'flex', flexDirection:'column' }}>
                <div className="row-item"><span style={{ color:'var(--sub)' }}>Provident Fund (PF)</span><span style={{ color:'var(--rose)' }}>₹ 1,800.00</span></div>
                <div className="row-item"><span style={{ color:'var(--sub)' }}>Professional Tax (PT)</span><span style={{ color:'var(--rose)' }}>₹ 200.00</span></div>
                <div className="row-item"><span style={{ color:'var(--sub)' }}>Income Tax (TDS)</span><span style={{ color:'var(--rose)' }}>₹ 0.00</span></div>
                <div className="row-item"><span style={{ color:'var(--sub)' }}>Leave Deduction (LWP)</span><span style={{ color:'var(--rose)' }}>₹ 0.00</span></div>
                <div className="row-item"><span style={{ color:'var(--sub)' }}>Advance Loan Recovery</span><span style={{ color:'var(--rose)' }}>₹ 0.00</span></div>
              </div>
            </section>
          </div>

          {/* ── Section 3: Payslip History Table  AOS Applied  ── */}
          <section data-aos="fade-up" data-aos-delay="300" className="hcard" style={{ background:'var(--card)', borderRadius:'16px', border:'1px solid var(--border)', boxShadow:'0 4px 14px rgba(30,144,214,0.04)', overflow:'hidden' }}>
            <div style={{ padding:'20px 24px', borderBottom:'1px solid var(--lagoon)', display:'flex', justifyContent:'space-between', alignItems:'center' }}>
              <h3 className="sh">Payslip History</h3>
              <div style={{ display:'flex', gap:'8px' }}>
                <input type="text" placeholder="Search month..." style={{ padding:'6px 12px', borderRadius:'8px', border:'1px solid var(--border)', fontSize:'12px', outline:'none', color:'var(--blue)' }} />
              </div>
            </div>
            
            <div style={{ overflowX:'auto' }}>
              <table style={{ width:'100%', borderCollapse:'collapse', textAlign:'left' }}>
                <thead>
                  <tr style={{ background:'var(--lagoon)' }}>
                    <th style={{ padding:'12px 24px', fontSize:'10px', fontWeight:700, color:'var(--sub)', textTransform:'uppercase', letterSpacing:'1px' }}>Month</th>
                    <th style={{ padding:'12px 24px', fontSize:'10px', fontWeight:700, color:'var(--sub)', textTransform:'uppercase', letterSpacing:'1px' }}>Gross Salary</th>
                    <th style={{ padding:'12px 24px', fontSize:'10px', fontWeight:700, color:'var(--sub)', textTransform:'uppercase', letterSpacing:'1px' }}>Net Salary</th>
                    <th style={{ padding:'12px 24px', fontSize:'10px', fontWeight:700, color:'var(--sub)', textTransform:'uppercase', letterSpacing:'1px' }}>Status</th>
                    <th style={{ padding:'12px 24px', fontSize:'10px', fontWeight:700, color:'var(--sub)', textTransform:'uppercase', letterSpacing:'1px', textAlign:'right' }}>Action</th>
                  </tr>
                </thead>
                <tbody>
                  {payslipHistory.map((row, idx) => (
                    <tr key={idx} style={{ borderBottom:'1px solid var(--lagoon)', transition:'background 0.2s' }} onMouseEnter={e => e.currentTarget.style.background='#F8FAFC'} onMouseLeave={e => e.currentTarget.style.background='transparent'}>
                      <td style={{ padding:'14px 24px', fontSize:'13px', fontWeight:800, color:'var(--blue)' }}>{row.month}</td>
                      <td style={{ padding:'14px 24px', fontSize:'12px', fontWeight:600, color:'var(--sub)' }}>{row.gross}</td>
                      <td style={{ padding:'14px 24px', fontSize:'12px', fontWeight:800, color:'var(--mint)' }}>{row.net}</td>
                      <td style={{ padding:'14px 24px' }}>
                        <span style={{ background:'#E8FBF4', color:'var(--mint)', padding:'4px 10px', borderRadius:'6px', fontSize:'10px', fontWeight:800, textTransform:'uppercase' }}>{row.status}</span>
                      </td>
                      <td style={{ padding:'14px 24px', textAlign:'right' }}>
                        <button onClick={() => handleDownload(`${row.month} Payslip`)} style={{ background:'transparent', border:'none', color:'var(--blue)', cursor:'pointer', display:'inline-flex', alignItems:'center', gap:'4px', fontSize:'12px', fontWeight:700, transition:'color 0.2s' }} onMouseEnter={e => e.currentTarget.style.color='var(--gold)'} onMouseLeave={e => e.currentTarget.style.color='var(--blue)'}>
                          <span className="material-symbols-outlined" style={{ fontSize:'16px' }}>file_download</span> Download
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          {/* Footer Minimal */}
          <footer style={{ paddingTop:'24px', display:'flex', justifyContent:'space-between', alignItems:'center', borderTop:'1px solid var(--border)', marginTop:'32px' }}>
            <p style={{ fontSize:'11px', fontWeight:600, color:'var(--sub)', margin:0 }}>© 2026 TechHansa HRMS. Designed for professionals.</p>
            <div style={{ display:'flex', gap:'20px' }}>
              <a href="#" style={{ fontSize:'11px', fontWeight:700, color:'var(--sub)', textDecoration:'none' }}>Tax Guidelines</a>
              <a href="#" style={{ fontSize:'11px', fontWeight:700, color:'var(--sub)', textDecoration:'none' }}>Support</a>
            </div>
          </footer>

        </main>

        {/* Modal Overlay for Downloads */}
        {isModalOpen && (
          <div style={{ position:'fixed', inset:0, background:'rgba(240, 245, 255, 0.8)', backdropFilter:'blur(4px)', display:'flex', alignItems:'center', justifyContent:'center', zIndex:999 }}>
            <div style={{ background:'var(--card)', padding:'30px', borderRadius:'16px', border:'1px solid var(--border)', boxShadow:'0 10px 40px rgba(30,144,214,0.15)', display:'flex', flexDirection:'column', alignItems:'center', gap:'12px', animation:'fadeUp 0.3s ease' }}>
               <span className="material-symbols-outlined" style={{ fontSize:'36px', color:'var(--blue)', animation:'pulseMint 1.5s infinite' }}>hourglass_empty</span>
               <h3 style={{ fontSize:'16px', fontWeight:800, color:'var(--blue)', margin:0 }}>{modalTitle}</h3>
               <p style={{ fontSize:'12px', color:'var(--sub)', margin:0 }}>Please wait while we generate your document securely.</p>
            </div>
          </div>
        )}

      </div>
    </>
  );
}