import React, { useState, useEffect } from 'react'

export default function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Efek Navbar berubah warna saat scroll
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
    <div className={`${darkMode ? 'bg-slate-900 text-slate-100' : 'bg-slate-50 text-slate-800'} min-h-screen font-sans transition-all duration-700`}>
      
      {/* NAVBAR DENGAN EFEK BLUR DINAMIS */}
      <nav className={`fixed top-0 w-full z-50 transition-all duration-500 ${scrolled ? (darkMode ? 'bg-slate-900/90 py-2 shadow-2xl' : 'bg-blue-950/90 py-2 shadow-2xl') : 'bg-transparent py-5'} backdrop-blur-md text-white`}>
        <div className="max-w-6xl mx-auto flex justify-between items-center px-8">
          <h1 className="text-2xl font-black tracking-tighter italic text-amber-400 drop-shadow-lg">DHONI<span className="text-white">.PRO</span></h1>
          <div className="flex items-center space-x-6 text-xs font-black tracking-widest">
            {['home', 'tentang', 'keahlian', 'contact'].map((item) => (
              <button key={item} onClick={() => scrollToSection(item)} className="hover:text-amber-400 transition-all hidden md:block uppercase">{item}</button>
            ))}
            <button 
              onClick={() => setDarkMode(!darkMode)} 
              className="bg-amber-400 text-blue-900 p-2 rounded-full shadow-xl hover:rotate-12 hover:scale-110 active:scale-90 transition-all"
            >
              {darkMode ? '☀️' : '🌙'}
            </button>
          </div>
        </div>
      </nav>

      {/* HERO SECTION DENGAN ANIMASI FLOATING */}
      <header id="home" className={`relative overflow-hidden ${darkMode ? 'bg-slate-900' : 'bg-blue-900'} text-white pt-40 pb-48 text-center px-6`}>
        {/* Background Decor */}
        <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
            <div className="absolute top-10 left-10 w-64 h-64 bg-amber-400 rounded-full blur-3xl animate-pulse"></div>
            <div className="absolute bottom-10 right-10 w-96 h-96 bg-blue-400 rounded-full blur-3xl opacity-20"></div>
        </div>

        <div className="max-w-4xl mx-auto relative z-10">
          <div className="relative mb-10 flex justify-center group">
            <div className="w-48 h-48 bg-gradient-to-tr from-amber-400 to-yellow-200 rounded-full p-1.5 shadow-[0_0_50px_rgba(251,191,36,0.3)] animate-bounce-slow">
              <div className="w-full h-full bg-white rounded-full overflow-hidden border-4 border-white">
                <img src="/src/foto.jpg" alt={namaLengkap} className="w-full h-full object-cover object-top hover:scale-110 transition-transform duration-700" />
              </div>
            </div>
          </div>
          
          <h1 className="text-6xl md:text-8xl font-black text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-yellow-200 to-amber-500 mb-4 animate-fade-in">
            {namaLengkap}
          </h1>
          <p className="text-xl md:text-2xl font-light tracking-[0.5em] text-slate-300 mb-8 uppercase">
            {kelas} <span className="text-amber-400">•</span> {prodi}
          </p>
          <div className="flex justify-center gap-4">
             <button onClick={() => scrollToSection('tentang')} className="bg-amber-400 text-blue-900 px-8 py-3 rounded-full font-black hover:bg-white transition-all shadow-lg">VIEW PROFILE</button>
             <button onClick={() => scrollToSection('contact')} className="border-2 border-white px-8 py-3 rounded-full font-black hover:bg-white hover:text-blue-900 transition-all">HIRE ME</button>
          </div>
        </div>
      </header>

      {/* TENTANG SAYA - GLASS CARD */}
      <section id="tentang" className="max-w-5xl mx-auto px-6 py-20 -mt-24 relative z-20">
        <div className={`${darkMode ? 'bg-slate-800/80' : 'bg-white/80'} backdrop-blur-xl p-10 md:p-16 rounded-[3rem] shadow-2xl border border-white/20 transition-all hover:shadow-amber-400/10`}>
          <div className="grid md:grid-cols-3 gap-12 items-center">
            <div className="md:col-span-1 text-center md:text-left">
                <h2 className="text-5xl font-black text-amber-500 leading-tight">ABOUT<br/>ME.</h2>
                <div className="w-20 h-2 bg-amber-500 mt-4 rounded-full mx-auto md:mx-0"></div>
            </div>
            <div className={`md:col-span-2 ${darkMode ? 'text-slate-300' : 'text-slate-600'} text-lg leading-relaxed space-y-6`}>
              <p>
                Saya adalah mahasiswa <span className="text-amber-500 font-bold italic">{fakultas}</span> yang berfokus pada solusi teknologi inovatif. Disiplin dan dedikasi adalah kunci utama saya dalam bekerja.
              </p>
              <p>
                Dengan keahlian di bidang <span className="font-bold uppercase tracking-widest text-blue-500">Information Technology</span>, saya menggabungkan logika teknis dengan kreativitas untuk menciptakan pengalaman digital yang luar biasa.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* KEAHLIAN DENGAN PROGRESS BAR */}
      <section id="keahlian" className="max-w-5xl mx-auto px-6 py-24">
        <h2 className={`text-center text-5xl font-black mb-16 ${darkMode ? 'text-white' : 'text-blue-950'}`}>MY <span className="text-amber-500">SKILLS</span></h2>
        <div className="grid md:grid-cols-2 gap-8">
          {keahlian.map((skill, index) => (
            <div key={index} className={`${darkMode ? 'bg-slate-800' : 'bg-white'} p-6 rounded-2xl shadow-xl border border-transparent hover:border-amber-400 transition-all group`}>
              <div className="flex justify-between mb-2">
                <span className="font-black uppercase tracking-wider">{skill.name}</span>
                <span className="text-amber-500 font-bold">{skill.level}</span>
              </div>
              <div className="w-full bg-slate-200 rounded-full h-3 overflow-hidden">
                <div className="bg-gradient-to-r from-blue-600 to-amber-400 h-full group-hover:scale-x-105 transition-transform origin-left" style={{ width: skill.level }}></div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* FOOTER MODERN */}
      <footer id="contact" className={`${darkMode ? 'bg-slate-950' : 'bg-blue-950'} text-white pt-32 pb-12 px-8 relative`}>
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-7xl font-black text-amber-400 mb-6 opacity-20">GET IN TOUCH</h2>
            <h3 className="text-4xl font-black -mt-16 relative z-10">MARI BERKARYA BERSAMA!</h3>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            {socialMedia.map((socmed, index) => (
              <a key={index} href={socmed.link} target="_blank" rel="noopener noreferrer" 
                 className={`flex items-center justify-between p-6 rounded-2xl border border-white/10 ${socmed.color} transition-all duration-300 group shadow-lg`}>
                <span className="text-3xl group-hover:scale-125 transition-transform">{socmed.icon}</span>
                <span className="font-black text-xs uppercase tracking-widest">{socmed.name}</span>
              </a>
            ))}
          </div>
          
          <div className="mt-32 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center text-[10px] font-bold text-slate-500 tracking-[0.4em]">
            <span>© 2026 {namaLengkap.toUpperCase()}</span>
            <span className="mt-4 md:mt-0 italic">UB VOCATIONAL TECHNOLOGY</span>
          </div>
        </div>
      </footer>

      {/* CSS KHUSUS UNTUK ANIMASI (Tambahkan di index.css kamu jika perlu, tapi Tailwind sudah handle sebagian besar) */}
      <style jsx>{`
        @keyframes bounce-slow {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-20px); }
        }
        .animate-bounce-slow {
          animation: bounce-slow 4s ease-in-out infinite;
        }
      `}</style>

    </div>
  )
}