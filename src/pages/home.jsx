import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  const members = [
    { 
      name: "Valen", 
      path: "/profile1", // Sesuaikan dengan Route path="/profile1" di App.jsx
      role: "Lead Developer", 
      img: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=400",
      desc: "Fokus pada arsitektur kode dan performa aplikasi."
    },
    { 
      name: "Dhoni", 
      path: "/profile2", // Sesuaikan dengan Route path="/profile2" di App.jsx
      role: "UI/UX Designer", 
      img: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=400",
      desc: "Ahli dalam menciptakan visual yang memanjakan mata."
    },
    { 
      name: "Zebe", 
      path: "/profile3", // Sesuaikan dengan Route path="/profile3" di App.jsx
      role: "System Analyst", 
      img: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400",
      desc: "Menangani logika bisnis dan struktur data sistem."
    }
  ];

  return (
    <div className="min-h-screen bg-[#0f1115] text-white selection:bg-cyan-500 font-sans p-6 md:p-12">
      
      {/* Dekorasi Background Abstract */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] right-[-10%] w-[500px] h-[500px] bg-cyan-900/20 rounded-full blur-[120px]"></div>
        <div className="absolute bottom-[-10%] left-[-10%] w-[600px] h-[600px] bg-blue-900/10 rounded-full blur-[150px]"></div>
      </div>

      <div className="relative z-10 max-w-6xl mx-auto">
        {/* Header Section */}
        <header className="mb-20">
          <div className="inline-block px-3 py-1 mb-4 text-xs font-bold tracking-[0.2em] uppercase border border-cyan-500/30 text-cyan-400 rounded-full">
            Project Profile 2026
          </div>
          <h1 className="text-5xl md:text-7xl font-black tracking-tighter italic uppercase">
            Kelompok <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-600">Alhamdulillah</span>
          </h1>
          <p className="mt-6 text-gray-400 max-w-lg leading-relaxed text-lg">
            Kolaborasi kreatif mahasiswa Teknologi Informasi dalam membangun solusi digital masa depan.
          </p>
        </header>

        {/* Bento Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {members.map((member, index) => (
            <Link 
              key={index} 
              to={member.path} // PERUBAHAN DI SINI: Menggunakan member.path
              className="group relative block overflow-hidden rounded-3xl bg-[#1a1c23] border border-white/5 transition-all duration-500 hover:border-cyan-500/50 hover:shadow-[0_0_30px_rgba(6,182,212,0.15)]"
            >
              {/* Image with Zoom Effect */}
              <div className="relative aspect-[4/5] overflow-hidden">
                <img 
                  src={member.img} 
                  alt={member.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 group-hover:rotate-1"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1a1c23] via-transparent to-transparent"></div>
                
                {/* Floating Role Badge */}
                <div className="absolute top-4 right-4 bg-black/50 backdrop-blur-md px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest border border-white/10">
                  {member.role}
                </div>
              </div>

              {/* Content Area */}
              <div className="p-8">
                <div className="flex justify-between items-center mb-2">
                  <h2 className="text-3xl font-bold italic group-hover:text-cyan-400 transition-colors uppercase tracking-tight">
                    {member.name}
                  </h2>
                  <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-cyan-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </div>
                </div>
                <p className="text-sm text-gray-500 line-clamp-2 leading-relaxed">
                  {member.desc}
                </p>
              </div>

              {/* Bottom Glow Line */}
              <div className="absolute bottom-0 left-0 w-0 h-1 bg-gradient-to-r from-cyan-500 to-blue-600 transition-all duration-500 group-hover:w-full"></div>
            </Link>
          ))}
        </div>

        {/* Minimal Footer */}
        <footer className="mt-32 pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6 text-gray-600 text-xs font-medium tracking-widest uppercase">
          <p>© 2026 Kelompok Alhamdulillah • Vokasi UB</p>
          <div className="flex gap-8">
            <span className="hover:text-cyan-400 cursor-pointer transition-colors">GitHub</span>
            <span className="hover:text-cyan-400 cursor-pointer transition-colors">Instagram</span>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default Home;