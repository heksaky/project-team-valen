import React, { useState, useEffect } from 'react'
import fotoDhoni from '../assets/foto.jpg';

export default function Dhoni() {
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
    { name: "Business Planning", level: "90%", icon: "☁️" },
    { name: "System Analysis", level: "85%", icon: "💻" },
    { name: "UI/UX Design", level: "80%", icon: "🎨" },
    { name: "Project Documentation", level: "95%", icon: "🔒" },
    { name: "Office Admin", level: "90%", icon: "📁" }
  ];

  const socialMedia = [
    { name: "GitHub", icon: "🌐", link: "https://github.com/Dhoneew", color: "hover:shadow-slate-500" },
    { name: "LinkedIn", icon: "💼", link: "https://www.linkedin.com/in/Dhoni-Abdul-Rouf", color: "hover:shadow-blue-500" },
    { name: "Instagram", icon: "📸", link: "https://www.instagram.com/dhoni.abrf", color: "hover:shadow-pink-500" },
    { name: "Email", icon: "✉️", link: "mailto:dhonixone@gmail.com", color: "hover:shadow-red-500" },
  ];

  return (
    <div className={`${darkMode ? 'bg-[#0f172a] text-slate-100' : 'bg-slate-50 text-slate-900'} min-h-screen font-sans transition-all duration-1000 overflow-x-hidden selection:bg-amber-400 selection:text-blue-900`}>
      
      {/* BACKGROUND MESH GRADIENT */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
        <div className={`absolute -top-[10%] -left-[10%] w-[50%] h-[50%] rounded-full blur-[120px] opacity-30 animate-pulse ${darkMode ? 'bg-blue-600' : 'bg-blue-300'}`}></div>
        <div className={`absolute top-[40%] -right-[10%] w-[40%] h-[40%] rounded-full blur-[120px] opacity-20 animate-float ${darkMode ? 'bg-amber-500' : 'bg-amber-200'}`}></div>
        <div className={`absolute -bottom-[10%] left-[20%] w-[30%] h-[30%] rounded-full blur-[120px] opacity-20 ${darkMode ? 'bg-purple-600' : 'bg-purple-200'}`}></div>
      </div>

      {/* NAVBAR */}
      <nav className={`fixed top-0 w-full z-50 transition-all duration-500 ${scrolled ? 'py-3' : 'py-6'}`}>
        <div className="max-w-6xl mx-auto px-6">
          <div className={`flex justify-between items-center px-8 py-3 rounded-full border border-white/20 backdrop-blur-xl shadow-2xl transition-all ${darkMode ? 'bg-slate-900/40' : 'bg-white/40'}`}>
            <h1 className="text-2xl font-black tracking-[0.2em] italic text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-amber-600 drop-shadow-sm">
              I'am<span className={darkMode ? 'text-white' : 'text-blue-950'}>Dhoni</span>
            </h1>
            <div className="flex items-center space-x-8 text-[10px] font-black tracking-widest uppercase">
              {['home', 'tentang', 'keahlian', 'contact'].map((item) => (
                <button key={item} onClick={() => scrollToSection(item)} className="hover:text-amber-500 transition-all hidden md:block hover:scale-110">{item}</button>
              ))}
              <button 
                onClick={() => setDarkMode(!darkMode)} 
                className="p-2 rounded-full border border-white/20 hover:bg-amber-400 transition-all duration-500 shadow-inner"
              >
                {darkMode ? '🔆' : '🌙'}
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* HERO SECTION */}
      <header id="home" className="relative min-h-screen flex items-center justify-center pt-20 px-6">
        <div className="max-w-5xl mx-auto text-center relative z-10">
          <div className="relative mb-12 inline-block group">
            <div className="absolute -inset-4 bg-gradient-to-tr from-amber-500 to-blue-500 rounded-full opacity-30 blur-md animate-spin-slow group-hover:opacity-100 transition duration-1000"></div>
            <div className="w-56 h-56 relative bg-white/10 backdrop-blur-md rounded-full p-2 border border-white/30 shadow-2xl overflow-hidden animate-morph">
              <img src={fotoDhoni} alt={namaLengkap} className="w-full h-full object-cover rounded-full grayscale hover:grayscale-0 transition-all duration-700" />
            </div>
            <div className="absolute top-0 -right-4 bg-amber-400 text-blue-900 px-4 py-1 rounded-full text-[10px] font-black tracking-widest shadow-xl animate-float uppercase border border-white/50">
              Active Now
            </div>
          </div>
          
          <h1 className="text-6xl md:text-9xl font-black mb-6 tracking-tighter leading-none animate-reveal">
            <span className={`block transition-colors ${darkMode ? 'text-white' : 'text-blue-950'}`}>DHONI ABDUL</span>
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-yellow-200 to-amber-600 drop-shadow-2xl">RO'UF</span>
          </h1>
          
          <div className="flex flex-wrap justify-center gap-4 mt-10">
            <div className="px-6 py-2 rounded-full border border-white/20 backdrop-blur-md bg-white/5 font-bold tracking-widest text-[10px] uppercase">
              {kelas} • {prodi}
            </div>
            <div className="px-6 py-2 rounded-full border border-white/20 backdrop-blur-md bg-white/5 font-bold tracking-widest text-[10px] uppercase">
              {fakultas}
            </div>
          </div>
        </div>
      </header>

      {/* ABOUT SECTION */}
      <section id="tentang" className="max-w-6xl mx-auto px-6 py-32">
        <div className={`relative p-1 md:p-1 rounded-[4rem] overflow-hidden transition-all duration-700 ${darkMode ? 'bg-white/5 shadow-white/5' : 'bg-black/5 shadow-black/5'} shadow-2xl`}>
          <div className={`backdrop-blur-3xl p-10 md:p-20 rounded-[3.8rem] border border-white/20 flex flex-col md:flex-row gap-16 items-center`}>
            <div className="md:w-1/3 text-center md:text-left relative">
              <span className="text-amber-500 font-black tracking-[0.5em] text-xs uppercase mb-4 block">Manifesto</span>
              <h2 className="text-6xl font-black italic tracking-tighter leading-none">THE<br/>STORY.</h2>
              <div className="w-full h-[1px] bg-gradient-to-r from-amber-500 to-transparent mt-8"></div>
            </div>
            <div className="md:w-2/3 space-y-8 text-lg font-medium leading-relaxed text-justify opacity-90">
              <p>
                Halo, perkenalkan saya <span className="text-amber-500 font-bold">{namaLengkap}</span>. Saya adalah individu yang disiplin, bertanggung jawab, dan memiliki kemampuan komunikasi yang baik. Saya terbiasa bekerja dalam tim maupun secara mandiri, serta mampu beradaptasi dengan lingkungan kerja yang dinamis dan penuh tantangan. Dengan latar belakang pendidikan di bidang IT di <span className="italic font-semibold">{fakultas}</span>, saya memiliki semangat belajar yang sangat tinggi untuk terus mengeksplorasi batas-batas teknologi modern.
              </p>
              <p>
                Saya memiliki keterampilan dalam menyusun dokumen profesional serta berkomunikasi dengan klien secara efektif. Pengalaman saya dalam organisasi dan kepanitiaan telah melatih kemampuan kepemimpinan, manajemen waktu, dan kerja sama tim yang solid. Selain itu, pengalaman di bidang pelayanan membuat saya terbiasa menghadapi pelanggan dengan sikap ramah dan memberikan solusi maksimal. Saya siap memberikan kontribusi terbaik, berpikir kreatif, dan terus mengembangkan diri di dunia yang serba digital ini.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* KEAHLIAN */}
      <section id="keahlian" className="max-w-6xl mx-auto px-6 py-32">
        <div className="text-center mb-20">
          <h2 className="text-xs font-black tracking-[1em] uppercase mb-4 opacity-50">Competencies</h2>
          <h3 className="text-5xl font-black italic tracking-tighter uppercase">Power Station.</h3>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
          {keahlian.map((skill, index) => (
            <div key={index} className={`group relative p-8 rounded-[3rem] border border-white/20 transition-all duration-500 backdrop-blur-md hover:-translate-y-4 ${darkMode ? 'bg-white/5 hover:bg-white/10' : 'bg-black/5 hover:bg-black/10'}`}>
              <div className="text-4xl mb-6 group-hover:scale-125 transition-transform duration-500">{skill.icon}</div>
              <h4 className="font-black text-[10px] tracking-widest uppercase mb-4">{skill.name}</h4>
              <div className="w-full h-1 bg-white/10 rounded-full overflow-hidden">
                <div className="h-full bg-amber-500 rounded-full animate-progress" style={{ width: skill.level }}></div>
              </div>
              <span className="text-[10px] font-bold mt-2 block opacity-50">{skill.level}</span>
            </div>
          ))}
        </div>
      </section>

      {/* FOOTER */}
      <footer id="contact" className={`relative pt-40 pb-20 px-8 transition-colors ${darkMode ? 'bg-black/40' : 'bg-slate-200/40'} backdrop-blur-3xl`}>
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-[15vw] font-black tracking-tighter opacity-5 leading-none absolute top-10 left-0 w-full select-none pointer-events-none">CONTACT.</h2>
          <h3 className="text-5xl font-black tracking-tighter relative z-10 mb-20 italic">LET'S VIBE TOGETHER.</h3>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 relative z-10">
            {socialMedia.map((socmed, index) => (
              <a key={index} href={socmed.link} target="_blank" rel="noopener noreferrer" 
                 className={`group p-8 rounded-[2.5rem] border border-white/10 backdrop-blur-xl transition-all duration-500 hover:scale-105 shadow-2xl ${darkMode ? 'bg-white/5' : 'bg-black/5'} ${socmed.color}`}>
                <div className="text-5xl mb-4 group-hover:rotate-12 transition-transform">{socmed.icon}</div>
                <span className="text-[10px] font-black tracking-widest uppercase block">{socmed.name}</span>
              </a>
            ))}
          </div>
          
          <div className="mt-40 pt-10 border-t border-white/10 flex flex-col md:flex-row justify-between items-center text-[10px] font-black tracking-[0.5em] opacity-30">
            <span>©️ 2026 {namaLengkap.toUpperCase()}</span>
            <span className="mt-4 md:mt-0 italic">UB VOKASI IT DEPT.</span>
          </div>
        </div>
      </footer>

      {/* STYLES */}
      <style jsx="true">{`
        @keyframes float {
          0%, 100% { transform: translateY(0) rotate(0deg); }
          50% { transform: translateY(-40px) rotate(5deg); }
        }
        @keyframes morph {
          0%, 100% { border-radius: 60% 40% 30% 70% / 60% 30% 70% 40%; }
          50% { border-radius: 30% 60% 70% 40% / 50% 60% 30% 60%; }
        }
        @keyframes reveal {
          from { opacity: 0; transform: translateY(50px); filter: blur(10px); }
          to { opacity: 1; transform: translateY(0); filter: blur(0); }
        }
        @keyframes progress {
          from { width: 0; }
        }
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        .animate-float { animation: float 8s ease-in-out infinite; }
        .animate-morph { animation: morph 12s ease-in-out infinite; }
        .animate-reveal { animation: reveal 1.5s cubic-bezier(0.16, 1, 0.3, 1) forwards; }
        .animate-progress { animation: progress 2s cubic-bezier(0.16, 1, 0.3, 1) forwards; }
        .animate-spin-slow { animation: spin-slow 15s linear infinite; }
      `}</style>

    </div>
  )
}