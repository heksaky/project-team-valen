import React, { useState, useEffect } from 'react'

export default function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

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

  const keahlian = [
    { name: "MS Office", level: "90%" },
    { name: "Admin Perkantoran", level: "85%" },
    { name: "Public Speaking", level: "80%" },
    { name: "Team Work", level: "95%" },
    { name: "React & Tailwind", level: "75%" }
  ];

  const socialMedia = [
    { name: "GitHub", icon: "🌐", link: "https://github.com/Dhoneew", color: "hover:bg-slate-800" },
    { name: "LinkedIn", icon: "💼", link: "https://www.linkedin.com/in/Dhoni-Abdul-Rouf", color: "hover:bg-blue-700" },
    { name: "Instagram", icon: "📸", link: "https://www.instagram.com/dhoni.abrf", color: "hover:bg-pink-600" },
    { name: "Email", icon: "✉️", link: "mailto:dhonixone@gmail.com", color: "hover:bg-red-500" },
  ];

  return (
    <div className={`${darkMode ? 'bg-slate-900 text-slate-100' : 'bg-slate-50 text-slate-800'} min-h-screen font-sans transition-all duration-700 overflow-x-hidden`}>
      
      {/* NAVBAR */}
      <nav className={`fixed top-0 w-full z-50 transition-all duration-500 ${scrolled ? (darkMode ? 'bg-slate-900/90 py-2 shadow-2xl' : 'bg-blue-950/90 py-2 shadow-2xl') : 'bg-transparent py-5'} backdrop-blur-md text-white`}>
        <div className="max-w-6xl mx-auto flex justify-between items-center px-8">
          <h1 className="text-2xl font-black tracking-tighter italic text-amber-400 drop-shadow-lg animate-pulse">DHONI<span className="text-white">.PRO</span></h1>
          <div className="flex items-center space-x-6 text-xs font-black tracking-widest">
            {['home', 'tentang', 'keahlian', 'contact'].map((item) => (
              <button key={item} onClick={() => scrollToSection(item)} className="hover:text-amber-400 transition-all hidden md:block uppercase tracking-tighter">{item}</button>
            ))}
            <button 
              onClick={() => setDarkMode(!darkMode)} 
              className="bg-amber-400 text-blue-900 p-2 rounded-full shadow-xl hover:rotate-[360deg] transition-all duration-700"
            >
              {darkMode ? '☀️' : '🌙'}
            </button>
          </div>
        </div>
      </nav>

      {/* HERO SECTION - KARTU KUCU ANIMASI */}
      <header id="home" className={`relative overflow-hidden ${darkMode ? 'bg-slate-900' : 'bg-blue-900'} text-white pt-40 pb-48 text-center px-6`}>
        
        {/* ELEMEN KARTUN MELAYANG (DEKORASI) */}
        <div className="absolute top-20 left-[10%] animate-floating opacity-50 text-6xl">🚀</div>
        <div className="absolute bottom-20 left-[15%] animate-bounce-slow opacity-50 text-5xl">✨</div>
        <div className="absolute top-40 right-[10%] animate-floating-delayed opacity-50 text-6xl">💻</div>
        <div className="absolute bottom-10 right-[15%] animate-bounce-slow opacity-30 text-7xl">🔥</div>

        <div className="max-w-4xl mx-auto relative z-10">
          <div className="relative mb-10 flex justify-center">
            {/* Bingkai Foto Wobble (Goyang Lucu) */}
            <div className="w-52 h-52 bg-gradient-to-tr from-amber-400 via-yellow-200 to-white rounded-[2rem] p-1.5 shadow-2xl animate-wobble">
              <div className="w-full h-full bg-white rounded-[1.8rem] overflow-hidden border-4 border-white">
                <img src="/src/foto.jpg" alt={namaLengkap} className="w-full h-full object-cover object-top hover:scale-125 transition-all duration-700" />
              </div>
            </div>
            {/* Badge Kucu */}
            <div className="absolute -bottom-4 right-[30%] bg-amber-400 text-blue-900 px-4 py-1 rounded-full font-black text-xs shadow-lg animate-bounce">
              HI THERE! 👋
            </div>
          </div>
          
          <h1 className="text-6xl md:text-8xl font-black text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-white to-amber-500 mb-4 tracking-tighter">
            {namaLengkap}
          </h1>
          <p className="text-xl md:text-2xl font-bold tracking-[0.3em] text-amber-200 mb-8 uppercase animate-fade-in">
             {kelas} <span className="text-white">•</span> {prodi}
          </p>
          <div className="flex justify-center gap-4">
             <button onClick={() => scrollToSection('tentang')} className="bg-amber-400 text-blue-900 px-8 py-3 rounded-2xl font-black hover:scale-110 active:scale-95 transition-all shadow-[0_10px_0_rgb(180,130,0)] hover:shadow-none hover:translate-y-2">SIAPA SAYA?</button>
             <button onClick={() => scrollToSection('contact')} className="bg-white text-blue-900 px-8 py-3 rounded-2xl font-black hover:scale-110 active:scale-95 transition-all shadow-[0_10px_0_rgb(200,200,200)] hover:shadow-none hover:translate-y-2">HUBUNGI</button>
          </div>
        </div>
      </header>

      {/* TENTANG SAYA - DESKRIPSI LENGKAP (110+ KATA) */}
      <section id="tentang" className="max-w-5xl mx-auto px-6 py-20 -mt-24 relative z-20">
        <div className={`${darkMode ? 'bg-slate-800/90 border-slate-700' : 'bg-white/90 border-white'} backdrop-blur-xl p-10 md:p-16 rounded-[3rem] shadow-2xl border transition-all hover:rotate-1`}>
          <div className="grid md:grid-cols-3 gap-12 items-center">
            <div className="md:col-span-1 text-center md:text-left">
                <h2 className="text-5xl font-black text-amber-500 leading-tight">CERITA<br/>SINGKAT.</h2>
                <div className="w-20 h-3 bg-blue-500 mt-4 rounded-full mx-auto md:mx-0"></div>
            </div>
            <div className={`md:col-span-2 ${darkMode ? 'text-slate-300' : 'text-slate-600'} text-lg leading-relaxed space-y-6 text-justify font-medium`}>
              <p>
                Halo, perkenalkan saya <span className="font-bold text-amber-500">{namaLengkap}</span>. Saya adalah individu yang disiplin, bertanggung jawab, dan memiliki kemampuan komunikasi yang baik. Saya terbiasa bekerja dalam tim maupun secara mandiri, serta mampu beradaptasi dengan lingkungan kerja yang dinamis dan penuh tantangan. Dengan latar belakang pendidikan di bidang IT di <span className="italic font-semibold">{fakultas}</span>, saya memiliki semangat belajar yang sangat tinggi.
              </p>
              <p>
                Saya memiliki keterampilan dalam menyusun dokumen profesional serta berkomunikasi dengan klien secara efektif. Pengalaman saya dalam organisasi dan kepanitiaan telah melatih kemampuan kepemimpinan, manajemen waktu, dan kerja sama tim yang solid. Selain itu, pengalaman di bidang pelayanan membuat saya terbiasa menghadapi pelanggan dengan sikap ramah dan memberikan solusi maksimal. Saya siap memberikan kontribusi terbaik, berpikir kreatif, dan terus mengembangkan diri di bidang teknologi informasi.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* KEAHLIAN */}
      <section id="keahlian" className="max-w-5xl mx-auto px-6 py-24">
        <h2 className={`text-center text-5xl font-black mb-16 ${darkMode ? 'text-white' : 'text-blue-950'}`}>MY <span className="text-amber-500">POWERS</span></h2>
        <div className="grid md:grid-cols-2 gap-8">
          {keahlian.map((skill, index) => (
            <div key={index} className={`${darkMode ? 'bg-slate-800' : 'bg-white'} p-6 rounded-3xl shadow-xl border-4 border-transparent hover:border-amber-400 transition-all group`}>
              <div className="flex justify-between mb-3">
                <span className="font-black uppercase tracking-wider">{skill.name}</span>
                <span className="text-amber-500 font-black">{skill.level}</span>
              </div>
              <div className="w-full bg-slate-200 rounded-full h-4 overflow-hidden">
                <div className="bg-gradient-to-r from-blue-600 to-amber-400 h-full group-hover:scale-x-110 transition-transform origin-left rounded-full" style={{ width: skill.level }}></div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* FOOTER */}
      <footer id="contact" className={`${darkMode ? 'bg-slate-950' : 'bg-blue-950'} text-white pt-32 pb-12 px-8 relative`}>
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-7xl font-black text-amber-400 mb-6 opacity-10 tracking-widest">SAY HELLO!</h2>
            <h3 className="text-4xl font-black -mt-16 relative z-10 animate-bounce">AYO NGOBROL! ☕</h3>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {socialMedia.map((socmed, index) => (
              <a key={index} href={socmed.link} target="_blank" rel="noopener noreferrer" 
                 className={`flex items-center justify-between p-6 rounded-[2rem] border-4 border-white/10 ${socmed.color} hover:translate-y-[-10px] transition-all duration-300 group shadow-2xl`}>
                <span className="text-4xl group-hover:rotate-12 transition-transform">{socmed.icon}</span>
                <span className="font-black text-sm uppercase tracking-tighter">{socmed.name}</span>
              </a>
            ))}
          </div>
          
          <div className="mt-32 pt-8 border-t border-white/5 text-center text-[10px] font-bold text-slate-500 tracking-[0.5em]">
            MADE WITH ❤️ BY {namaLengkap.toUpperCase()} — 2026
          </div>
        </div>
      </footer>

      {/* ANIMASI KUSTOM */}
      <style jsx>{`
        @keyframes floating {
          0%, 100% { transform: translateY(0) rotate(0deg); }
          50% { transform: translateY(-30px) rotate(10deg); }
        }
        @keyframes floating-delayed {
          0%, 100% { transform: translateY(0) rotate(0deg); }
          50% { transform: translateY(-25px) rotate(-10deg); }
        }
        @keyframes wobble {
          0%, 100% { border-radius: 2rem; transform: rotate(0); }
          25% { border-radius: 3rem 2rem 4rem 2rem; transform: rotate(-2deg); }
          75% { border-radius: 2rem 4rem 2rem 3rem; transform: rotate(2deg); }
        }
        .animate-floating { animation: floating 4s ease-in-out infinite; }
        .animate-floating-delayed { animation: floating-delayed 5s ease-in-out infinite; }
        .animate-wobble { animation: wobble 6s ease-in-out infinite; }
        .animate-bounce-slow { animation: bounce 3s infinite; }
      `}</style>

    </div>
  )
}