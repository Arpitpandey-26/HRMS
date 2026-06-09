import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

export default function UserProfile() {
  // --- FUNCTIONAL STATES ---
  const [isEditing, setIsEditing] = useState(false);
  const [isSaving, setIsSaving] = useState(false);
  
  // Real Form Data State
  const initialData = {
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
    currentAddress: 'D-45, Mahadev Puram, Near Lanka, Varanasi, UP, 221005',
    permanentAddress: 'D-45, Mahadev Puram, Near Lanka, Varanasi, UP, 221005'
  };

  const [formData, setFormData] = useState(initialData);
  const [originalData, setOriginalData] = useState(initialData); // To revert on cancel
  const [sameAsCurrent, setSameAsCurrent] = useState(true);
  
  // Password Modal State
  const [isPasswordModalOpen, setIsPasswordModalOpen] = useState(false);

  // Sync permanent address if 'Same as current' is checked
  useEffect(() => {
    if (sameAsCurrent) {
      setFormData(prev => ({ ...prev, permanentAddress: prev.currentAddress }));
    }
  }, [formData.currentAddress, sameAsCurrent]);

  // Handle Input Changes
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Handle Save Action
  const handleSave = () => {
    setIsSaving(true);
    setTimeout(() => {
      setOriginalData(formData); // Commit changes
      setIsSaving(false);
      setIsEditing(false);
    }, 1500); 
  };

  // Handle Cancel Action
  const handleCancel = () => {
    setFormData(originalData); // Revert to original
    setIsEditing(false);
  };

  // Handle File Upload Simulate
  const handleFileUpload = (e) => {
    if (e.target.files && e.target.files[0]) {
      alert(`File "${e.target.files[0].name}" selected successfully!`);
    }
  };

  // Dynamic input styling (Removed all black shadows/text)
  const inputStyle = isEditing 
    ? "bg-white border border-[#D4AF37]/40 text-[#2563EB] font-bold text-sm rounded-xl px-4 py-3 focus:outline-none focus:border-[#D4AF37] focus:ring-4 focus:ring-[#D4AF37]/10 transition-all shadow-[inset_0_2px_4px_rgba(37,99,235,0.05)]"
    : "bg-[#F4F7FF]/50 border border-transparent text-[#64748B] font-bold text-sm rounded-xl px-4 py-3 transition-all cursor-default pointer-events-none";

  return (
    <div className="flex min-h-screen bg-[#F8FAFC] font-sans text-[#475569] selection:bg-[#D4AF37] selection:text-white pb-24 relative">
      
      {/* Hidden File Input for Documents */}
      <input type="file" id="file-upload" className="hidden" onChange={handleFileUpload} />

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
            <img alt="Arpit Pandey" className="w-9 h-9 rounded-lg object-cover shadow-sm border border-white" src="" />
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
          
          <a href="#" className="flex items-center gap-3 bg-gradient-to-r from-[#D4AF37] to-[#FDE047] text-[#2563EB] px-4 py-2.5 rounded-lg shadow-[0_4px_10px_rgba(212,175,55,0.3)] transition-all my-1">
            <span className="material-symbols-outlined text-[18px] text-[#2563EB]">person</span>
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
            <a key={index} href="#" className="flex items-center gap-3 px-4 py-2.5 mt-1 rounded-lg text-[#64748B] hover:bg-[#E0F2FE]/50 hover:text-[#2563EB] border border-transparent transition-all duration-200 group">
              <span className="material-symbols-outlined text-[18px] group-hover:text-[#D4AF37] transition-colors">{item.icon}</span>
              <span className="font-bold text-[13px]">{item.label}</span>
            </a>
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
        
        {/* Header Breadcrumbs & Title */}
        <header className="flex justify-between items-center mb-6 ">
          <div>
            <div className="flex items-center gap-1 text-[11px] font-bold text-[#64748B] mb-0 uppercase tracking-widest">
              <span>Dashboard</span>
              <span className="material-symbols-outlined text-[14px]">chevron_right</span>
              <span className="text-[#D4AF37]">Profile</span>
            </div>
            <h1 className="text-2xl font-black text-[#2563EB] tracking-tight">Employee Profile</h1>
          </div>
          <div className="flex gap-3">
            <button className="relative p-2.5 rounded-full bg-white border border-[#2563EB]/10 hover:border-[#D4AF37] text-[#2563EB] hover:text-[#D4AF37] transition-all shadow-[0_4px_15px_rgba(37,99,235,0.08)]">
              <span className="material-symbols-outlined text-[20px]">notifications</span>
              <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-red-400 rounded-full border-2 border-white"></span>
            </button>
          </div>
        </header>

        {/* MAIN LAYOUT - Full Width Column Stack (No Right Sidebar)  */}
        <div className="flex flex-col gap-8">
          
          {/* 1. Hero Profile Banner */}
           <div className="bg-gradient-to-r from-[#E0F2FE] via-[#F8FAFC] to-white rounded-2xl p-2 flex flex-col md:flex-row items-center gap-6 relative overflow-hidden shadow-[0_8px_30px_rgba(37,99,235,0.08)] border border-[#2563EB]/10">
            
            {/* Background shape */}
            <div className="absolute top-0 right-0 w-[45%] md:w-[30%] h-[120%] bg-gradient-to-l from-[#FFF9E6] to-[#FFF5D1] skew-x-12 translate-x-10 pointer-events-none border-l border-[#D4AF37]/30 shadow-[-15px_0_30px_rgba(250,204,21,0.15)]"></div>
            
            <div className="relative group/img z-10 cursor-pointer shrink-0">
              <img alt="Arpit Pandey" className="w-28 h-28 rounded-2xl object-cover shadow-[0_4px_15px_rgba(37,99,235,0.1)] border-4 border-white transition-all duration-300 group-hover/img:scale-105" src="" />
              <div className="absolute inset-0 bg-[#2563EB]/40 rounded-2xl opacity-0 group-hover/img:opacity-100 transition-opacity flex items-center justify-center border-4 border-transparent backdrop-blur-sm">
                <span className="material-symbols-outlined text-white text-[32px]" onClick={() => document.getElementById('file-upload').click()}>photo_camera</span>
              </div>
            </div>
            
            <div className="flex-grow text-center md:text-left z-10">
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-3 mb-2 w-full pr-0 lg:pr-10">
                <h2 className="text-3xl font-black text-[#2563EB] tracking-tight">{formData.firstName} {formData.lastName}</h2>
              </div>
              <p className="text-sm font-black text-[#64748B] flex items-center justify-center md:justify-start gap-2">
                Software Developer <span className="w-1.5 h-1.5 bg-[#D4AF37] rounded-full"></span> ID: SE-1234
              </p>
              
              <div className="mt-5 flex flex-wrap justify-center md:justify-start gap-8">
                <div className="flex flex-col group/item cursor-default">
                  <span className="text-[10px] font-bold text-[#64748B] uppercase tracking-widest mb-1">Department</span>
                  <span className="text-sm font-black text-[#2563EB] group-hover/item:text-[#D4AF37] transition-colors">Engineering</span>
                </div>
                <div className="flex flex-col group/item cursor-default">
                  <span className="text-[10px] font-bold text-[#64748B] uppercase tracking-widest mb-1">Location</span>
                  <span className="text-sm font-black text-[#2563EB] flex items-center gap-1 group-hover/item:text-[#D4AF37] transition-colors"><span className="material-symbols-outlined text-[16px] text-[#D4AF37]">location_on</span> Varanasi</span>
                </div>
              </div>
            </div>
            
            <div className="flex flex-col items-center md:items-end gap-2.5 z-10 mt-4 md:mt-0">
              <div className="text-center md:text-right">
                <p className="text-[10px] font-bold text-[#64748B] mb-1 uppercase tracking-widest">Join Date</p>
                <p className="text-base font-black text-[#2563EB]">May 25, 2026</p>
              </div>
              <button 
                onClick={() => isEditing ? handleCancel() : setIsEditing(true)}
                className={`flex items-center gap-2 px-6 py-2.5 rounded-xl font-bold text-xs shadow-[0_4px_12px_rgba(37,99,235,0.2)] transition-all active:scale-95 ${
                  isEditing ? 'bg-[#D4AF37] text-[#2563EB]' : 'bg-[#2563EB] text-white hover:bg-[#D4AF37] hover:text-[#2563EB]'
                }`}
              >
                <span className="material-symbols-outlined text-[18px]">{isEditing ? 'close' : 'edit'}</span>
                {isEditing ? 'Cancel Edit' : 'Edit Profile'}
              </button>
            </div>
          </div>

          {/* 2. Personal Information Form */}
          <div className={`bg-white rounded-3xl p-3 shadow-sm border transition-colors duration-300 ${isEditing ? 'border-[#D4AF37]/40 ring-4 ring-[#D4AF37]/5' : 'border-[#2563EB]/10'}`}>
            <div className="flex justify-between items-center mb-4 border-b border-[#2563EB]/10 pb-3">
              <div className="flex items-center gap-3">
                
                <h3 className="text-xl font-black text-[#2563EB]">Personal Information</h3>
              </div>
              {isEditing && <span className="text-[10px] font-bold text-[#D4AF37] bg-[#FFF9E6] px-4 py-1.5 rounded-full animate-pulse shadow-sm">EDIT MODE ON</span>}
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-6">
              {[
                { label: "First Name", name: "firstName", type: "text" },
                { label: "Last Name", name: "lastName", type: "text" },
                { label: "Date of Birth", name: "dob", type: "date" },
                { label: "Nationality", name: "nationality", type: "text" },
                { label: "Official Email", name: "email", type: "email" },
                { label: "Mobile Number", name: "phone", type: "tel" },
              ].map((field, idx) => (
                <div key={idx} className="flex flex-col group">
                  <label className={`text-[11px] font-bold uppercase tracking-widest mb-2 ml-1 transition-colors ${isEditing ? 'text-[#D4AF37] group-focus-within:text-[#2563EB]' : 'text-[#64748B]'}`}>
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
                <label className={`text-[11px] font-bold uppercase tracking-widest mb-2 ml-1 transition-colors ${isEditing ? 'text-[#D4AF37]' : 'text-[#64748B]'}`}>Gender</label>
                <select name="gender" value={formData.gender} onChange={handleChange} disabled={!isEditing} className={`${inputStyle} appearance-none`}>
                  <option>Male</option>
                  <option>Female</option>
                  <option>Other</option>
                </select>
              </div>
              <div className="flex flex-col group">
                <label className={`text-[11px] font-bold uppercase tracking-widest mb-2 ml-1 transition-colors ${isEditing ? 'text-[#D4AF37]' : 'text-[#64748B]'}`}>Marital Status</label>
                <select name="maritalStatus" value={formData.maritalStatus} onChange={handleChange} disabled={!isEditing} className={`${inputStyle} appearance-none`}>
                  <option>Single</option>
                  <option>Married</option>
                </select>
              </div>
            </div>
          </div>

          {/* 3. Employment Information */}
          <div className="bg-white rounded-3xl p-5 shadow-sm border border-[#2563EB]/10">
            <div className="flex items-center gap-3 mb-8 border-b border-[#2563EB]/10 pb-5">
              
              <h3 className="text-xl font-black text-[#2563EB]">Employment Info</h3>
            </div>

            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { label: "Joined On", val: "25 May, 2026" },
                { label: "Probation", val: "Completed" },
                { label: "Shift", val: "General (9-6)" },
                { label: "Work Mode", val: "On-site" }
              ].map((stat, i) => (
                <div key={i} className="bg-gradient-to-br from-[#F4F7FF] to-white p-5 rounded-2xl border border-[#2563EB]/5 shadow-sm text-center hover:-translate-y-1 transition-transform cursor-default">
                  <p className="text-[10px] font-bold text-[#64748B] uppercase tracking-widest mb-2">{stat.label}</p>
                  <p className="text-base font-black text-[#2563EB]">{stat.val}</p>
                </div>
              ))}
            </div>
          </div>

          {/* 4. Address Section */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className={`bg-white rounded-3xl p-6 shadow-sm border transition-colors duration-300 ${isEditing ? 'border-[#D4AF37]/40 ring-4 ring-[#D4AF37]/5' : 'border-[#2563EB]/10'}`}>
              <h3 className="text-sm font-black text-[#2563EB] mb-5">Current Address</h3>
              <textarea 
                name="currentAddress"
                value={formData.currentAddress}
                onChange={handleChange}
                readOnly={!isEditing}
                className={`${inputStyle} w-full min-h-[120px] resize-none`}
              />
            </div>
            <div className={`bg-white rounded-3xl p-6 shadow-sm border ${!sameAsCurrent && isEditing ? 'border-[#D4AF37]/40 ring-4 ring-[#D4AF37]/5' : 'border-[#2563EB]/10'} relative ${sameAsCurrent ? 'opacity-80' : ''}`}>
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-sm font-black text-[#2563EB]">Permanent Address</h3>
                <label className={`flex items-center gap-2 ${isEditing ? 'cursor-pointer' : 'cursor-not-allowed'}`}>
                  <input 
                    type="checkbox" 
                    checked={sameAsCurrent} 
                    onChange={(e) => setSameAsCurrent(e.target.checked)}
                    disabled={!isEditing} 
                    className="w-4 h-4 accent-[#2563EB] disabled:opacity-50" 
                  />
                  <span className="text-[11px] font-bold text-[#64748B] uppercase tracking-wider">Same as current</span>
                </label>
              </div>
              <textarea 
                name="permanentAddress"
                disabled={sameAsCurrent || !isEditing}
                value={formData.permanentAddress}
                onChange={handleChange}
                className={`${sameAsCurrent || !isEditing ? "w-full bg-[#F1F5F9] border border-[#E2E8F0] text-[#64748B] font-bold text-sm rounded-xl px-5 py-4 min-h-[120px] resize-none cursor-not-allowed" : inputStyle} w-full min-h-[120px] resize-none`}
              />
            </div>
          </div>

          {/* 5. Documents & Verification */}
          <div className="bg-white rounded-3xl p-5 shadow-sm border border-[#2563EB]/10">
            <div className="flex justify-between items-center mb-8 border-b border-[#2563EB]/10 pb-5">
              <div className="flex items-center gap-3">
                
                <h3 className="text-xl font-black text-[#2563EB]">Documents & Verification</h3>
              </div>
              {isEditing && (
                <button onClick={() => document.getElementById('file-upload').click()} className="text-xs font-bold bg-[#FFF9E6] text-[#D4AF37] px-4 py-2 rounded-xl hover:bg-[#D4AF37] hover:text-white flex items-center gap-1.5 transition-all shadow-sm">
                  <span className="material-symbols-outlined text-[18px]">upload</span> Upload Doc
                </button>
              )}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                { name: "Aadhaar Card", icon: "picture_as_pdf", color: "text-red-500", bg: "bg-red-50" },
                { name: "PAN Card", icon: "description", color: "text-[#2563EB]", bg: "bg-[#F4F7FF]" },
                { name: "Experience Letter", icon: "contract", color: "text-[#D4AF37]", bg: "bg-[#FFF9E6]" }
              ].map((doc, idx) => (
                <div key={idx} className="p-5 rounded-2xl border border-[#2563EB]/10 hover:border-[#D4AF37]/50 hover:shadow-[0_4px_15px_rgba(37,99,235,0.06)] transition-all flex flex-col gap-4 group bg-white">
                  <div className="flex justify-between items-start">
                    <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${doc.bg} ${doc.color} group-hover:scale-110 transition-transform`}>
                      <span className="material-symbols-outlined text-[20px]">{doc.icon}</span>
                    </div>
                    <span className="px-2.5 py-1 bg-green-100 text-green-700 text-[10px] font-bold rounded-full uppercase tracking-widest border border-green-200 shadow-sm">Verified</span>
                  </div>
                  <p className="font-black text-base text-[#2563EB]">{doc.name}</p>
                  <div className={`flex gap-3 mt-2 transition-opacity ${isEditing ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'}`}>
                    <button onClick={() => window.open('#', '_blank')} className="flex-1 py-2.5 text-[11px] font-bold bg-[#F4F7FF] text-[#2563EB] rounded-lg hover:bg-[#2563EB] hover:text-white transition-colors uppercase tracking-widest">View</button>
                    {isEditing && <button onClick={() => document.getElementById('file-upload').click()} className="flex-1 py-2.5 text-[11px] font-bold border border-[#2563EB]/20 text-[#64748B] rounded-lg hover:border-[#D4AF37] hover:text-[#D4AF37] transition-colors uppercase tracking-widest">Replace</button>}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* 6. Emergency Contact */}
          <div className={`bg-white rounded-3xl p-5 shadow-sm border transition-colors duration-300 ${isEditing ? 'border-[#D4AF37]/40 ring-4 ring-[#D4AF37]/5' : 'border-[#2563EB]/10'}`}>
            <div className="flex items-center gap-3 mb-8 border-b border-[#2563EB]/10 pb-5">
              
              <h3 className="text-xl font-black text-[#2563EB]">Emergency Contact</h3>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-x-8 gap-y-6">
              <div className="flex flex-col group">
                <label className={`text-[11px] font-bold uppercase tracking-widest mb-2 ml-1 transition-colors ${isEditing ? 'text-[#D4AF37]' : 'text-[#64748B]'}`}>Full Name</label>
                <input type="text" name="emName" value={formData.emName} onChange={handleChange} readOnly={!isEditing} className={inputStyle} />
              </div>
              <div className="flex flex-col group">
                <label className={`text-[11px] font-bold uppercase tracking-widest mb-2 ml-1 transition-colors ${isEditing ? 'text-[#D4AF37]' : 'text-[#64748B]'}`}>Relationship</label>
                <input type="text" name="emRel" value={formData.emRel} onChange={handleChange} readOnly={!isEditing} className={inputStyle} />
              </div>
              <div className="flex flex-col group">
                <label className={`text-[11px] font-bold uppercase tracking-widest mb-2 ml-1 transition-colors ${isEditing ? 'text-[#D4AF37]' : 'text-[#64748B]'}`}>Contact Number</label>
                <input type="tel" name="emPhone" value={formData.emPhone} onChange={handleChange} readOnly={!isEditing} className={inputStyle} />
              </div>
            </div>
          </div>

          {/* 7. Account Security (Change Password Option Added Exactly Here) */}
          <div className="bg-white rounded-3xl p-5 shadow-sm border border-[#2563EB]/10 mb-8">
            <div className="flex justify-between items-center border-b border-[#2563EB]/10 pb-5">
              <div className="flex items-center gap-3">
                
                <div>
                  <h3 className="text-xl font-black text-[#2563EB]">Account Security</h3>
                  <p className="text-[11px] font-bold text-[#64748B] mt-1">Manage your password and authentication.</p>
                </div>
              </div>
              <button 
                onClick={() => setIsPasswordModalOpen(true)}
                className="bg-white border border-[#2563EB]/20 text-[#2563EB] hover:bg-[#2563EB] hover:text-white px-5 py-2.5 rounded-xl font-bold text-xs shadow-sm transition-all"
              >
                Change Password
              </button>
            </div>
          </div>

        </div>
      </main>

       {/* ================= FIXED BOTTOM ACTION BAR ================= */}
      <footer className={`fixed -bottom-6 right-0 left-[150px] md:left-55 bg-white/90 backdrop-blur-xl border-t px-6 xl:px-10 py-5 flex items-center justify-between z-40 shadow-[0_-10px_30px_rgba(37,99,235,0.06)] transition-all duration-300 ${isEditing ? 'border-[#D4AF37]/30 bg-[#FFF9E6]/90' : 'border-[#2563EB]/15'}`}>
        <div className="hidden sm:flex items-center mb-3 gap-2.5 text-[#64748B] font-bold text-[11px] uppercase tracking-widest">
          {isSaving ? (
            <><span className="material-symbols-outlined text-[16px] animate-spin text-[#D4AF37]">sync</span> Saving changes...</>
          ) : (
            <><span className="w-2 h-2 bg-green-500 rounded-full animate-pulse shadow-[0_0_8px_rgba(34,197,94,0.6)]"></span> Form synced automatically</>
          )}
        </div>
        
        <div className="flex w-full sm:w-auto items-center gap-4">
          <button 
            disabled={!isEditing || isSaving}
            onClick={handleCancel}
            className="flex-1 sm:flex-none mb-3 px-6 py-2 bg-white border border-[#CBD5E1] text-[#64748B] font-bold text-sm rounded-xl hover:bg-[#F1F5F9] transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
          >
            Cancel
          </button>
          
          <button 
            disabled={!isEditing || isSaving}
            onClick={handleSave}
            className={`flex-1 sm:flex-none mb-3 px-8 py-2 text-white font-bold text-sm rounded-xl shadow-[0_4px_12px_rgba(37,99,235,0.2)] transition-all active:scale-95 disabled:opacity-70 disabled:cursor-not-allowed disabled:transform-none flex items-center justify-center gap-2 ${
              isEditing ? 'bg-[#D4AF37] shadow-[0_4px_12px_rgba(212,175,55,0.3)] hover:bg-[#b8952b]' : 'bg-[#2563EB]'
            }`}
          >
            {isSaving ? (
              <><span className="material-symbols-outlined text-[16px] animate-spin">progress_activity</span> Updating...</>
            ) : (
              'Save Changes'
            )}
          </button>
        </div>
      </footer>

      {/* ================= PASSWORD CHANGE MODAL ================= */}
      {isPasswordModalOpen && (
        <div className="fixed inset-0 bg-[#E0F2FE]/80 backdrop-blur-sm z-[100] flex items-center justify-center p-4">
          <div className="bg-white rounded-3xl p-8 max-w-md w-full shadow-[0_10px_40px_rgba(37,99,235,0.15)] border border-[#2563EB]/10">
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-xl font-black text-[#2563EB]">Update Password</h3>
              <button onClick={() => setIsPasswordModalOpen(false)} className="text-[#64748B] hover:text-red-500 transition-colors">
                <span className="material-symbols-outlined">close</span>
              </button>
            </div>
            
            <div className="space-y-4 mb-8">
              <div className="flex flex-col group">
                <label className="text-[11px] font-bold uppercase tracking-widest mb-2 ml-1 text-[#64748B] group-focus-within:text-[#2563EB] transition-colors">Current Password</label>
                <input type="password" placeholder="••••••••" className="bg-[#F4F7FF] border border-transparent text-[#2563EB] font-bold text-sm rounded-xl px-4 py-3 focus:outline-none focus:border-[#2563EB] focus:ring-4 focus:ring-[#2563EB]/10 transition-all" />
              </div>
              <div className="flex flex-col group">
                <label className="text-[11px] font-bold uppercase tracking-widest mb-2 ml-1 text-[#64748B] group-focus-within:text-[#D4AF37] transition-colors">New Password</label>
                <input type="password" placeholder="••••••••" className="bg-[#F4F7FF] border border-transparent text-[#2563EB] font-bold text-sm rounded-xl px-4 py-3 focus:outline-none focus:border-[#D4AF37] focus:ring-4 focus:ring-[#D4AF37]/10 transition-all" />
              </div>
              <div className="flex flex-col group">
                <label className="text-[11px] font-bold uppercase tracking-widest mb-2 ml-1 text-[#64748B] group-focus-within:text-[#D4AF37] transition-colors">Confirm New Password</label>
                <input type="password" placeholder="••••••••" className="bg-[#F4F7FF] border border-transparent text-[#2563EB] font-bold text-sm rounded-xl px-4 py-3 focus:outline-none focus:border-[#D4AF37] focus:ring-4 focus:ring-[#D4AF37]/10 transition-all" />
              </div>
            </div>

            <button 
              onClick={() => {
                alert("Password updated successfully!");
                setIsPasswordModalOpen(false);
              }}
              className="w-full bg-[#2563EB] hover:bg-[#D4AF37] hover:text-[#2563EB] text-white py-3.5 rounded-xl font-bold text-sm shadow-[0_4px_12px_rgba(37,99,235,0.2)] transition-all active:scale-95"
            >
              Confirm Update
            </button>
          </div>
        </div>
      )}

    </div>
  );
}