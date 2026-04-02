import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  const teamMembers = [
    { id: 1, name: "Valen", role: "Lead Developer", path: "/valen", image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=600" },
    { id: 2, name: "Dhoni", role: "Visual Designer", path: "/dhoni", image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600" },
    { id: 3, name: "Zebe", role: "System Analyst", path: "/zebe", image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=600" },
  ];

  return (
    <div className="min-h-screen bg-[#050505] text-white selection:bg-blue-500 overflow-hidden font-sans">
      
      {/* 1. Background Grain & Floating Text */}
      <div className="fixed inset-0 opacity-[0.03] pointer-events-none z-50 bg-[url('https://grainy-gradients.vercel.app/noise.svg')]"></div>
      <div className="absolute top-20 -left-10 text-[15rem] font-black text-white/[1] whitespace-nowrap select-none italic">
        KELOMPOK ALHAMDULILLAH
      </div>

      {/* 2. Navigation */}
      <nav className="flex justify-between items-center px-10 py-8 relative z-10 border-b border-white/5 backdrop-blur-sm">
        <div className="text-xl font-black italic tracking-tighter">UNIVERSITAS BRAWIJAYA</div>
        <div className="hidden md:flex gap-10 text-xs font-bold uppercase tracking-[0.2em] opacity-50">
          <span>Development</span>
          <span>Design</span>
          <span>2026 Edition</span>
        </div>
        <button className="text-xs font-bold border border-white/20 px-6 py-2 rounded-full hover:bg-white hover:text-black transition-all">
          CONTACT US
        </button>
      </nav>

      <main className="relative z-10 max-w-[1400px] mx-auto px-6 py-24">
        {/* 3. Hero Section - More "Messy" & Professional */}
        <div className="mb-32 relative">
          <span className="text-blue-500 font-mono text-sm mb-4 block tracking-tighter">/ WHO WE ARE</span>
          <h1 className="text-7xl md:text-[10rem] font-bold leading-[0.8] tracking-tighter uppercase italic">
            Creative <br />
            <span className="ml-20 md:ml-40 text-transparent stroke-text">Synergy</span>
          </h1>
          <p className="mt-10 max-w-md text-gray-400 leading-relaxed text-sm ml-auto border-l border-blue-500 pl-6">
            Kami bukan sekadar kelompok mahasiswa. Kami adalah kolektif kreatif yang berfokus pada estetika digital dan fungsionalitas kode yang presisi.
          </p>
        </div>

        {/* 4. Asymmetric Profile Section */}
        <div className="flex flex-col md:flex-row gap-12 items-start justify-center">
          {teamMembers.map((member, index) => (
            <Link 
              key={member.id} 
              to={member.path}
              // Membuat posisi kotak tidak sejajar sempurna (asimetris)
              className={`group relative w-full md:w-1/3 ${index === 1 ? 'md:mt-24' : ''} ${index === 2 ? 'md:mt-12' : ''}`}
            >
              <div className="relative overflow-hidden bg-[#111] aspect-[3/4]">
                {/* Number Overlay */}
                <span className="absolute top-4 left-4 z-20 font-mono text-4xl opacity-20 group-hover:opacity-100 transition-opacity">
                  0{index + 1}
                </span>

                {/* Main Image with Glitch/Scale Effect */}
                <img 
                  src={member.image} 
                  alt={member.name}
                  className="w-full h-full object-cover opacity-60 group-hover:opacity-100 group-hover:scale-110 transition-all duration-700 ease-out grayscale hover:grayscale-0"
                />

                {/* Hover Info Overlay */}
                <div className="absolute inset-x-0 bottom-0 p-8 bg-gradient-to-t from-black to-transparent translate-y-full group-hover:translate-y-0 transition-transform duration-500">
                  <div className="h-[1px] w-full bg-blue-500 mb-4 scale-x-0 group-hover:scale-x-100 transition-transform duration-700 origin-left"></div>
                  <p className="text-xs font-mono text-blue-400 mb-2">{member.role}</p>
                  <h2 className="text-3xl font-bold italic uppercase">{member.name}</h2>
                </div>
              </div>

              {/* Outside Text (Permanent) */}
              <div className="mt-6 flex justify-between items-end">
                <div>
                  <h3 className="text-lg font-bold group-hover:text-blue-500 transition-colors uppercase italic">{member.name}</h3>
                  <p className="text-[10px] text-gray-500 tracking-widest uppercase">{member.role}</p>
                </div>
                <div className="w-8 h-8 rounded-full border border-white/10 flex items-center justify-center group-hover:bg-white group-hover:text-black transition-all">
                  →
                </div>
              </div>
            </Link>
          ))}
        </div>
      </main>

      {/* CSS For Outline Text */}
      <style dangerouslySetInnerHTML={{ __html: `
        .stroke-text {
          -webkit-text-stroke: 1px rgba(255,255,255,0.3);
        }
        .group:hover .stroke-text {
          -webkit-text-stroke: 1px #3b82f6;
        }
      `}} />
    </div>
  );
};

export default Home;