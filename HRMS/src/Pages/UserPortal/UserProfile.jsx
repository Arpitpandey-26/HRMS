import React, { useState } from 'react';
import { Link } from 'react-router-dom'; // Ensure Link is imported for sidebar

export default function UserProfile() {
  // --- FUNCTIONAL STATES ---
  const [isEditing, setIsEditing] = useState(false);
  const [isSaving, setIsSaving] = useState(false);
  
  // Real Form Data State
  const [formData, setFormData] = useState({
    firstName: 'Arpit',
    lastName: 'Pandey',
    dob: '2005-02-24',
    nationality: 'Indian',
    email: 'arpit.pandey@techhansait.com',
    phone: '+91 9876543210',
    gender: 'Male',
    maritalStatus: 'Single',
    emName: 'Vinod Pandey',
    emRel: 'Father',
    emPhone: '+91 9988776655',
    currentAddress: 'D-45, Mahadev Puram, Near Lanka, Varanasi, UP, 221005'
  });

  // Handle Input Changes
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Handle Save Action (Simulates API Call)
  const handleSave = () => {
    setIsSaving(true);
    setTimeout(() => {
      setIsSaving(false);
      setIsEditing(false); // Turn off edit mode after saving
    }, 1500); // 1.5 second loading
  };

  // Dynamic input styling based on Edit Mode
  const inputStyle = isEditing 
    ? "bg-white border border-[#D4AF37]/40 text-[#0F204A] font-bold text-sm rounded-xl px-4 py-3 focus:outline-none focus:border-[#D4AF37] focus:ring-4 focus:ring-[#D4AF37]/10 transition-all shadow-[inset_0_2px_4px_rgba(0,0,0,0.02)]"
    : "bg-[#F4F7FF]/50 border border-transparent text-[#0F204A]/80 font-bold text-sm rounded-xl px-4 py-3 transition-all cursor-default pointer-events-none";

  return (
    <div className="flex min-h-screen bg-[#F8FAFC] font-sans text-[#0F204A] selection:bg-[#D4AF37] selection:text-white pb-24">
      
      {/* ================= SIDEBAR NAV ================= */}
      <aside className="fixed left-0 top-0 h-full w-[220px] md:w-60 bg-gradient-to-b from-[#F4F7FF] via-white to-[#FFF5D1] border-r border-[#D4AF37]/20 shadow-[4px_0_24px_rgba(212,175,55,0.08)] flex flex-col z-50">
        <div className="p-2 mb-2 flex items-center gap-1">
          <div className="w-10 h-10 md:w-10 md:h-10 rounded-full flex items-center justify-center overflow-hidden bg-transparent shrink-0">
            <img src="logo.png" alt="Company Logo" className="w-full h-full object-contain drop-shadow-md" /> 
          </div>
          <span className="text-lg font-black tracking-tight text-[#D4AF37]">Techhansa</span>
          <span className="text-lg font-black tracking-tight text-[#0F204A]">HRMS</span>
        </div>

        <div className="px-5 mb-6">
          <div className="flex items-center gap-3 p-2.5 bg-white/60 backdrop-blur-sm rounded-xl border border-[#D4AF37]/20 shadow-sm">
            <img alt="Arpit Pandey" className="w-9 h-9 rounded-lg object-cover shadow-sm border border-white" src="" />
            <div>
              <p className="font-bold text-[#0F204A] text-[13px]">Arpit Pandey</p>
              <p className="text-[10px] font-bold text-[#0F204A]/60">Software Developer</p>
            </div>
          </div>
        </div>

        <div className="flex-1 px-2 -gap-1 overflow-y-auto scrollbar-hide">
          <Link to="/user-dashboard" className="flex items-center gap-3 px-4 py-2.5 mt-1 rounded-lg text-[#0F204A]/70 hover:bg-white/70 hover:text-[#0F204A] hover:shadow-sm border border-transparent hover:border-[#D4AF37]/20 transition-all duration-200 group">
            <span className="material-symbols-outlined text-[18px] group-hover:text-[#D4AF37] transition-colors">dashboard</span>
            <span className="font-bold text-[13px]">Dashboard</span>
          </Link>
          
          <a href="#" className="flex items-center gap-3 bg-gradient-to-r from-[#D4AF37] to-[#FDE047] text-[#0F204A] px-4 py-2.5 rounded-lg shadow-[0_4px_10px_rgba(212,175,55,0.3)] transition-all my-1">
            <span className="material-symbols-outlined text-[18px] text-[#0F204A]">person</span>
            <span className="font-black text-[13px]">Profile</span>
          </a>
          
          {[
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

    {/* ================= MAIN CONTENT CANVAS ================= */}
      <main className="ml-[220px] md:ml-60 flex-1 p-6 xl:p-10 max-w-[1500px] mx-auto">
        
        {/* Header Breadcrumbs & Title */}
        <header className="flex justify-between items-center mb-8">
          <div>
            <div className="flex items-center gap-2 text-[11px] font-bold text-[#0F204A]/50 mb-1 uppercase tracking-widest">
              <span>Dashboard</span>
              <span className="material-symbols-outlined text-[14px]">chevron_right</span>
              <span className="text-[#D4AF37]">Profile</span>
            </div>
            <h1 className="text-3xl font-black text-[#0F204A] tracking-tight">Employee Profile</h1>
          </div>
          <div className="flex gap-3">
            <button className="relative p-2.5 rounded-full bg-white border border-[#0F204A]/10 hover:border-[#D4AF37] text-[#0F204A] hover:text-[#D4AF37] transition-all shadow-sm">
              <span className="material-symbols-outlined text-[20px]">notifications</span>
            </button>
          </div>
        </header>

        {/* Main Layout Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* ================= LEFT COLUMN ================= */}
          <div className="lg:col-span-8 flex flex-col gap-8">
            
            {/* 1. Hero Profile Banner */}
            <div className="bg-gradient-to-r from-[#E0F2FE] via-[#F8FAFC] to-white rounded-2xl p-8 flex flex-col md:flex-row items-center gap-8 relative overflow-hidden shadow-[0_8px_30px_rgba(15,32,74,0.05)] border border-[#0F204A]/5">
              
              <div className="absolute top-0 right-0 w-[45%] md:w-[35%] h-[120%] bg-gradient-to-l from-[#FFF9E6] to-[#FFF5D1] skew-x-12 translate-x-10 pointer-events-none border-l border-[#D4AF37]/20 shadow-[-15px_0_30px_rgba(212,175,55,0.1)]"></div>
              
              <div className="relative group/img z-10 cursor-pointer shrink-0">
                <img alt="Arpit Pandey" className="w-28 h-28 rounded-2xl object-cover shadow-lg border-4 border-white transition-all duration-300 group-hover/img:scale-105" src="" />
                <div className="absolute inset-0 bg-[#0F204A]/40 rounded-2xl opacity-0 group-hover/img:opacity-100 transition-opacity flex items-center justify-center border-4 border-transparent backdrop-blur-sm">
                  <span className="material-symbols-outlined text-white text-[32px]">photo_camera</span>
                </div>
              </div>
              
              <div className="flex-grow text-center md:text-left z-10">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-3 mb-2 w-full pr-0 md:pr-[25%] lg:pr-[30%]">
                  <h2 className="text-3xl font-black text-[#0F204A] tracking-tight">{formData.firstName} {formData.lastName}</h2>
                 
                </div>
                <p className="text-sm font-black text-[#0F204A]/70 flex items-center justify-center md:justify-start gap-2">
                  Software Developer <span className="w-1.5 h-1.5 bg-[#D4AF37] rounded-full"></span> ID: SE-1234
                </p>
                
                <div className="mt-5 flex flex-wrap justify-center md:justify-start gap-8">
                  <div className="flex flex-col group/item cursor-default">
                    <span className="text-[10px] font-bold text-[#0F204A]/50 uppercase tracking-widest mb-1">Department</span>
                    <span className="text-sm font-black text-[#0F204A] group-hover/item:text-[#D4AF37] transition-colors">Engineering</span>
                  </div>
                  <div className="flex flex-col group/item cursor-default">
                    <span className="text-[10px] font-bold text-[#0F204A]/50 uppercase tracking-widest mb-1">Location</span>
                    <span className="text-sm font-black text-[#0F204A] flex items-center gap-1 group-hover/item:text-[#D4AF37] transition-colors"><span className="material-symbols-outlined text-[16px] text-[#D4AF37]">location_on</span> Varanasi</span>
                  </div>
                </div>
              </div>
              
              <div className="flex flex-col items-center md:items-end gap-3 z-10 mt-6 md:mt-0 p-5 border-l border-[#0F204A]/10 ml-0 md:ml-4 bg-white/60 backdrop-blur-md rounded-2xl shadow-sm">
                <div className="text-center md:text-right">
                  <p className="text-[10px] font-bold text-[#0F204A]/50 mb-1 uppercase tracking-widest">Join Date</p>
                  <p className="text-base font-black text-[#0F204A]">May 25, 2026</p>
                </div>
                <button 
                  onClick={() => setIsEditing(!isEditing)}
                  className={`flex items-center gap-2 px-6 py-2.5 rounded-xl font-bold text-xs shadow-md transition-all active:scale-95 ${
                    isEditing ? 'bg-[#D4AF37] text-[#0F204A]' : 'bg-[#0F204A] text-white hover:bg-[#D4AF37] hover:text-[#0F204A]'
                  }`}
                >
                  <span className="material-symbols-outlined text-[18px]">{isEditing ? 'close' : 'edit'}</span>
                  {isEditing ? 'Cancel Edit' : 'Edit Profile'}
                </button>
              </div>
            </div>

            {/* 2. Personal Information Form */}
            <div className={`bg-white rounded-3xl p-8 shadow-sm border transition-colors duration-300 ${isEditing ? 'border-[#D4AF37]/40 ring-4 ring-[#D4AF37]/5' : 'border-[#0F204A]/5'}`}>
              <div className="flex justify-between items-center mb-8 border-b border-[#0F204A]/5 pb-5">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-[#F4F7FF] text-[#0F204A] rounded-2xl flex items-center justify-center shadow-sm">
                    <span className="material-symbols-outlined text-[22px]">badge</span>
                  </div>
                  <h3 className="text-xl font-black text-[#0F204A]">Personal Information</h3>
                </div>
                {isEditing && <span className="text-[10px] font-bold text-[#D4AF37] bg-[#FFF9E6] px-4 py-1.5 rounded-full animate-pulse shadow-sm">EDIT MODE ON</span>}
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {[
                  { label: "First Name", name: "firstName", type: "text" },
                  { label: "Last Name", name: "lastName", type: "text" },
                  { label: "Date of Birth", name: "dob", type: "date" },
                  { label: "Nationality", name: "nationality", type: "text" },
                  { label: "Official Email", name: "email", type: "email" },
                  { label: "Mobile Number", name: "phone", type: "tel" },
                ].map((field, idx) => (
                  <div key={idx} className="flex flex-col group">
                    <label className={`text-[11px] font-bold uppercase tracking-widest mb-2 ml-1 transition-colors ${isEditing ? 'text-[#D4AF37] group-focus-within:text-[#0F204A]' : 'text-[#0F204A]/60'}`}>
                      {field.label}
                    </label>
                    <input 
                      type={field.type} 
                      name={field.name}
                      value={formData[field.name]} 
                      onChange={handleChange}
                      readOnly={!isEditing}
                      className={inputStyle}
                    />
                  </div>
                ))}

                <div className="flex flex-col group">
                  <label className={`text-[11px] font-bold uppercase tracking-widest mb-2 ml-1 transition-colors ${isEditing ? 'text-[#D4AF37]' : 'text-[#0F204A]/60'}`}>Gender</label>
                  <select name="gender" value={formData.gender} onChange={handleChange} disabled={!isEditing} className={`${inputStyle} appearance-none`}>
                    <option>Male</option>
                    <option>Female</option>
                    <option>Other</option>
                  </select>
                </div>
                <div className="flex flex-col group">
                  <label className={`text-[11px] font-bold uppercase tracking-widest mb-2 ml-1 transition-colors ${isEditing ? 'text-[#D4AF37]' : 'text-[#0F204A]/60'}`}>Marital Status</label>
                  <select name="maritalStatus" value={formData.maritalStatus} onChange={handleChange} disabled={!isEditing} className={`${inputStyle} appearance-none`}>
                    <option>Single</option>
                    <option>Married</option>
                  </select>
                </div>
              </div>
            </div>

            </div>
        </div>
      </main>
    </div>
  );
}
          
  