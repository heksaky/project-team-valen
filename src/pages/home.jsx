import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  const members = [
    { 
      name: "Valen", 
      path: "/profile1", 
      role: "Lead Developer", 
      img: "fotovalen.jpg",
      desc: "NIM : 253140707111093."
    },
    { 
      name: "Dhoni", 
      path: "/profile2", 
      role: "UI/UX Designer", 
      img: "foto.jpg",
      desc: "NIM : 253140707111116."
    },
    { 
      name: "Zebe", 
      path: "/profile3", 
      role: "System Analyst", 
      img: "zevefto.jpg",
      desc: "NIM : 253140707111094."
    }
  ];

  return (
    <div className="min-h-screen bg-[#0f1115] text-white selection:bg-cyan-500 p-6 md:p-12 overflow-hidden relative" 
         style={{ fontFamily: "'Poppins', sans-serif" }}>
      
      {/* Import Poppins Langsung via CSS In JS agar praktis */}
      <style>
        {`@import url('https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,300;0,400;0,700;0,900;1,900&display=swap');`}
      </style>

      {/* Dekorasi Background Abstract */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] right-[-10%] w-[500px] h-[500px] bg-cyan-900/20 rounded-full blur-[120px]"></div>
        <div className="absolute bottom-[-10%] left-[-10%] w-[600px] h-[600px] bg-blue-900/10 rounded-full blur-[150px]"></div>
      </div>

      <div className="relative z-10 max-w-6xl mx-auto">
        {/* Header Section */}
        <header className="mb-20">
          <div className="inline-block px-4 py-1 mb-6 text-[10px] font-bold tracking-[0.3em] uppercase border border-cyan-500/30 text-cyan-400 rounded-full bg-cyan-500/5">
            Creative Team Profile 2026
          </div>
          
          <h1 className="text-6xl md:text-8xl font-[900] tracking-tighter italic uppercase leading-[0.9]">
            Kelompok <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-500 to-indigo-500">
              Alhamdulillah
            </span>
          </h1>
          
          <p className="mt-8 text-gray-400 max-w-xl leading-relaxed text-lg font-light border-l-2 border-cyan-500/50 pl-6">
            Kami adalah kolaborasi mahasiswa Teknologi Informasi Vokasi UB yang berdedikasi menciptakan pengalaman digital yang luar biasa.
          </p>
        </header>

        {/* Bento Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {members.map((member, index) => (
            <Link 
              key={index} 
              to={member.path}
              className="group relative block overflow-hidden rounded-[2.5rem] bg-[#16181d] border border-white/5 transition-all duration-500 hover:border-cyan-500/40 hover:shadow-[0_20px_50px_rgba(6,182,212,0.15)]"
            >
              {/* Image Container */}
              <div className="relative aspect-[4/5] overflow-hidden">
                <img 
                  src={member.img} 
                  alt={member.name}
                  className="w-full h-full object-cover grayscale-[0.5] group-hover:grayscale-0 transition-all duration-700 group-hover:scale-110 group-hover:rotate-2"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#16181d] via-[#16181d]/20 to-transparent"></div>
                
                {/* Floating Role Badge */}
                <div className="absolute top-6 right-6 bg-black/60 backdrop-blur-xl px-4 py-1.5 rounded-full text-[9px] font-bold uppercase tracking-widest border border-white/10 text-cyan-400">
                  {member.role}
                </div>

                {/* Index Number */}
                <span className="absolute bottom-4 left-8 text-6xl font-black opacity-10 group-hover:opacity-30 transition-opacity italic">
                  0{index + 1}
                </span>
              </div>

              {/* Content Area */}
              <div className="p-10 relative">
                <div className="flex justify-between items-center mb-3">
                  <h2 className="text-3xl font-[900] italic group-hover:text-cyan-400 transition-colors uppercase tracking-tighter">
                    {member.name}
                  </h2>
                  <div className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center group-hover:bg-white group-hover:text-black transition-all duration-500 -rotate-45 group-hover:rotate-0">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </div>
                </div>
                <p className="text-sm text-gray-500 leading-relaxed font-medium">
                  {member.desc}
                </p>
              </div>

              {/* Bottom Interactive Glow Line */}
              <div className="absolute bottom-0 left-0 w-0 h-1.5 bg-gradient-to-r from-cyan-500 via-blue-600 to-indigo-600 transition-all duration-700 group-hover:w-full"></div>
            </Link>
          ))}
        </div>

        {/* Professional Footer */}
        <footer className="mt-40 pt-10 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-8 text-gray-500 text-[10px] font-bold tracking-[0.4em] uppercase pb-10">
          <p>© 2026 Team Alhamdulillah • Information Technology</p>
          <div className="flex gap-10">
            <a href="https://github.com" className="hover:text-cyan-400 transition-colors">GitHub</a>
            <a href="https://instagram.com" className="hover:text-cyan-400 transition-colors">Instagram</a>
            <a href="#" className="hover:text-cyan-400 transition-colors">Vokasi UB</a>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default Home;