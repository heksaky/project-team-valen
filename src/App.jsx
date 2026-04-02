import React, { useState } from 'react'

export default function App() {
  const [darkMode, setDarkMode] = useState(false);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const namaLengkap = "Dhoni Abdul Ro’uf";
  const kelas = "T2G";
  const prodi = "Teknologi Informasi";
  const fakultas = "Fakultas Vokasi Universitas Brawijaya";
  const domisili = "Kabupaten Malang";

  const keahlian = [
    "Administrasi Perkantoran", "Microsoft Office", "Penyusunan Dokumen", 
    "Komunikasi Profesional", "Kerja Sama Tim", "Manajemen Waktu", 
    "Sikap Pelayanan (F&B)", "Adaptasi Lingkungan", "Kepemimpinan"
  ];

  const socialMedia = [
    { name: "GitHub", icon: "🌐", link: "https://github.com/Dhoneew" },
    { name: "LinkedIn", icon: "💼", link: "https://www.linkedin.com/in/Dhoni Abdul Ro'uf" },
    { name: "Instagram", icon: "📸", link: "https://www.instagram.com/dhoni.abrf" },
    { name: "Email", icon: "✉️", link: "mailto:dhonixone@gmail.com" },
  ];

  return (
    <div className={`${darkMode ? 'bg-slate-900 text-slate-100' : 'bg-slate-50 text-slate-800'} min-h-screen font-sans transition-colors duration-700`}>
      
      {/* NAVBAR */}
      <nav className={`${darkMode ? 'bg-slate-800/80' : 'bg-blue-950/90'} backdrop-blur-md text-white p-4 sticky top-0 z-50 shadow-lg`}>
        <div className="max-w-6xl mx-auto flex justify-between items-center px-4">
          <h1 className="text-xl font-black text-amber-400 tracking-tighter italic">DHONI.DEV</h1>
          <div className="flex items-center space-x-4 md:space-x-8 text-sm font-bold">
            <button onClick={() => scrollToSection('home')} className="hover:text-amber-400 transition-all hidden md:block">HOME</button>
            <button onClick={() => scrollToSection('tentang')} className="hover:text-amber-400 transition-all hidden md:block">ABOUT</button>
            <button 
              onClick={() => setDarkMode(!darkMode)} 
              className="bg-amber-400 text-blue-900 px-4 py-2 rounded-full text-xs font-black shadow-lg hover:scale-110 active:scale-95 transition-all"
            >
              {darkMode ? '☀️ LIGHT' : '🌙 DARK'}
            </button>
          </div>
        </div>
      </nav>

      {/* HEADER */}
      <header id="home" className={`${darkMode ? 'bg-gradient-to-b from-slate-800 to-slate-900' : 'bg-blue-900'} text-white pt-24 pb-32 text-center px-6 transition-all`}>
        <div className="max-w-3xl mx-auto">
          <div className="relative mb-8 flex justify-center group">
            <div className="absolute inset-0 bg-amber-400 blur-2xl opacity-20 group-hover:opacity-40 transition-opacity rounded-full"></div>
            <div className="w-44 h-44 bg-white rounded-full border-4 border-amber-400 flex items-center justify-center shadow-2xl overflow-hidden relative z-10 transform group-hover:rotate-3 transition-transform">
               <img src="/src/foto.jpg" alt={namaLengkap} className="w-full h-full object-cover object-top" />
            </div>
          </div>
          <h1 className="text-5xl md:text-6xl font-black text-amber-400 tracking-tight mb-4 drop-shadow-md">{namaLengkap}</h1>
          <div className="inline-block bg-white/10 backdrop-blur-md px-6 py-2 rounded-full border border-white/20 mb-6">
            <p className="text-lg font-bold">{kelas} — {prodi}</p>
          </div>
          <p className="text-slate-300 font-medium mb-1">{fakultas}</p>
          <p className="text-amber-200 font-bold tracking-widest text-sm uppercase">📍 {domisili}</p>
        </div>
      </header>

      {/* TENTANG DIRI */}
      <section id="tentang" className="max-w-4xl mx-auto px-6 py-16 -mt-20 relative z-10">
        <div className={`${darkMode ? 'bg-slate-800 border-slate-700' : 'bg-white border-slate-100'} p-8 md:p-12 rounded-[2.5rem] shadow-2xl border text-justify transition-all transform hover:-translate-y-2`}>
          <h2 className="text-3xl font-black text-amber-500 mb-8 flex items-center gap-3">
            <span className="w-12 h-1 bg-amber-500 rounded-full"></span>
            TENTANG SAYA
          </h2>
          <div className={`${darkMode ? 'text-slate-300' : 'text-slate-600'} leading-relaxed space-y-6 text-lg`}>
            <p>
              Halo, perkenalkan saya <span className="font-bold text-amber-500">{namaLengkap}</span>. Saya adalah individu yang disiplin, bertanggung jawab, dan memiliki kemampuan komunikasi yang baik. Saya terbiasa bekerja dalam tim maupun secara mandiri, serta mampu beradaptasi dengan lingkungan kerja yang dinamis. Dengan latar belakang pendidikan di <span className="font-semibold italic">Teknologi Informasi</span>, saya berfokus pada pengembangan diri yang berkelanjutan.
            </p>
            <p>
              Saya memiliki pengalaman dalam organisasi yang melatih kemampuan kepemimpinan dan manajemen waktu. Semangat belajar yang tinggi dan cara berpikir kreatif adalah aset utama saya dalam memberikan kontribusi terbaik di setiap bidang yang saya tekuni, termasuk dalam dunia teknologi dan pelayanan profesional.
            </p>
          </div>
        </div>
      </section>

      {/* KEAHLIAN */}
      <section id="keahlian" className="max-w-5xl mx-auto px-6 py-20 text-center">
        <h2 className={`text-4xl font-black mb-12 ${darkMode ? 'text-white' : 'text-blue-950'}`}>KEAHLIAN UTAMA</h2>
        <div className="flex flex-wrap gap-4 justify-center">
          {keahlian.map((skill, index) => (
            <div key={index} className={`${darkMode ? 'bg-slate-800 border-slate-700 text-amber-400' : 'bg-white border-slate-200 text-blue-900'} px-8 py-4 rounded-2xl font-black text-sm uppercase border shadow-lg hover:bg-amber-400 hover:text-blue-950 hover:scale-110 transition-all cursor-default`}>
              {skill}
            </div>
          ))}
        </div>
      </section>

      {/* CONTACT */}
      <footer id="contact" className={`${darkMode ? 'bg-black border-t border-slate-800' : 'bg-blue-950'} text-white py-24 px-6 mt-20 transition-all`}>
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-black text-amber-400 mb-4">LETS CONNECT!</h2>
          <p className="text-slate-400 mb-12 font-medium">Tertarik untuk berkolaborasi atau sekadar menyapa? Hubungi saya di bawah ini.</p>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 px-4">
            {socialMedia.map((socmed, index) => (
              <a key={index} href={socmed.link} target="_blank" rel="noopener noreferrer" 
                 className="bg-white/5 hover:bg-amber-400 hover:text-blue-950 transition-all rounded-3xl p-6 border border-white/10 shadow-xl group">
                <div className="text-4xl mb-4 group-hover:scale-150 group-hover:rotate-12 transition-all duration-300">{socmed.icon}</div>
                <div className="text-[10px] font-black uppercase tracking-[0.2em]">{socmed.name}</div>
              </a>
            ))}
          </div>
          
          <div className="mt-24 pt-8 border-t border-white/5 text-slate-500 text-[10px] font-bold uppercase tracking-[0.3em]">
            DESIGNED BY DHONI — 2026 UB VOCATIONAL
          </div>
        </div>
      </footer>

    </div>
  )
}