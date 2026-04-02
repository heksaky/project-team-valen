import React from 'react'

export default function App() {
  // Fungsi untuk scroll otomatis ke section tertentu
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Data diri Dhoni
  const namaLengkap = "Dhoni Abdul Ro’uf";
  const kelas = "T2G";
  const prodi = "Teknologi Informasi";
  const fakultas = "Fakultas Vokasi Universitas Brawijaya";
  const domisili = "Kabupaten Malang";

  // Data Keahlian (Contoh, silakan sesuaikan dengan keahlian aslimu)
  const keahlian = [
    "Administrasi Perkantoran", "Microsoft Office (Word, Excel, PPT)", "Penyusunan Dokumen", 
    "Komunikasi Profesional", "Kerja Sama Tim", "Manajemen Waktu", 
    "Sikap Pelayanan (F&B)", "Adaptasi Lingkungan", "Kepemimpinan (Organisasi)"
  ];

  // Data Media Sosial (GANTI BAGIAN DI DALAM [ ] DENGAN LINK ASLI KAMU)
  const socialMedia = [
    { name: "GitHub", icon: "🔗", link: "https://github.com/Dhoneew" },
    { name: "LinkedIn", icon: "👔", link: "https://www.linkedin.com/in/Dhoni Abdul Ro'uf" },
    { name: "Instagram", icon: "📸", link: "https://www.instagram.com/dhoni.abrf" },
    { name: "Email", icon: "✉️", link: "mailto:dhonixone@gmail.com" }, // Email langsung buka aplikasi email
  ];

  return (
    <div className="min-h-screen bg-slate-100 font-sans text-slate-800">
      
      {/* 1. NAVBAR (MENU) - Pojok Kanan */}
      <nav className="bg-blue-950 text-white p-4 sticky top-0 z-50 shadow-md">
        <div className="max-w-6xl mx-auto flex justify-between items-center px-4">
          <h1 className="text-xl font-bold text-amber-400">Dhoni's Profil</h1>
          <div className="flex space-x-6 text-sm">
            <button onClick={() => scrollToSection('home')} className="hover:text-amber-300 transition-colors">Home</button>
            <button onClick={() => scrollToSection('tentang')} className="hover:text-amber-300 transition-colors">Tentang</button>
            <button onClick={() => scrollToSection('keahlian')} className="hover:text-amber-300 transition-colors">Keahlian</button>
            <button onClick={() => scrollToSection('contact')} className="hover:text-amber-300 transition-colors">Contact</button>
          </div>
        </div>
      </nav>

      {/* 2. HOME SECTION (Warna Header UB) */}
      <header id="home" className="bg-blue-900 text-white pt-16 pb-24 text-center px-6">
        <div className="max-w-3xl mx-auto">
          {/* FOTO PROFIL (Simbol Vokasi UB) */}
          <div className="relative mb-6 flex justify-center">
            <div className="w-40 h-40 bg-white rounded-full border-4 border-amber-400 flex items-center justify-center text-8xl shadow-xl overflow-hidden">
               <img 
  src="/src/foto.jpg" 
  alt="Dhoni Abdul Ro’uf" 
  className="w-full h-full object-cover object-top" 
/>
            </div>
          </div>
          <h1 className="text-4xl md:text-5xl font-black text-amber-400 tracking-tight">{namaLengkap}</h1>
          <p className="mt-4 text-xl font-semibold">{kelas} — {prodi}</p>
          <p className="text-slate-300 mt-1">{fakultas}</p>
          <p className="text-slate-200 mt-2">📍 {domisili}</p>
        </div>
      </header>

      {/* 3. TENTANG DIRI SECTION (Min 100 Kata) */}
      <section id="tentang" className="max-w-4xl mx-auto px-6 py-16 -mt-16 relative z-10">
        <div className="bg-white p-10 rounded-3xl shadow-2xl border border-slate-100">
          <h2 className="text-3xl font-bold text-blue-950 mb-6 border-b-4 border-amber-400 inline-block">
            Tentang Diri
          </h2>
          <div className="text-slate-600 leading-relaxed text-justify space-y-4">
            <p>
              Halo, perkenalkan saya {namaLengkap}. Saya adalah individu yang disiplin, bertanggung jawab, dan memiliki kemampuan komunikasi yang baik. Saya terbiasa bekerja dalam tim maupun secara mandiri, serta mampu beradaptasi dengan lingkungan kerja yang dinamis dan penuh tantangan. Dengan latar belakang pendidikan di bidang MIPA serta keterampilan Administrasi Perkantoran, saya memiliki kemampuan dalam mengoperasikan Microsoft Office, menyusun dokumen, serta berkomunikasi secara profesional dengan klien.
            </p>
            <p>
              Saya juga memiliki pengalaman dalam organisasi dan kegiatan kepanitiaan, yang melatih kemampuan kepemimpinan, manajemen waktu, dan kerja sama tim. Selain itu, pengalaman bekerja di bidang Food & Beverage (F&B) membuat saya terbiasa menghadapi pelanggan dengan sikap ramah dan memberikan pelayanan maksimal. Saya memiliki semangat belajar yang tinggi, kreatif dalam berpikir, serta siap untuk terus mengembangkan diri dan memberikan kontribusi terbaik di bidang yang saya tekuni.
            </p>
          </div>
        </div>
      </section>

      {/* 4. KEAHLIAN SECTION (Skill Tags) */}
      <section id="keahlian" className="max-w-4xl mx-auto px-6 py-16">
        <div className="bg-white p-10 rounded-3xl shadow-xl border border-slate-100">
          <h2 className="text-3xl font-bold text-blue-950 mb-8 border-b-4 border-amber-400 inline-block">
            Keahlian & Kemampuan
          </h2>
          <div className="flex flex-wrap gap-4 justify-center">
            {keahlian.map((skill, index) => (
              <span key={index} className="bg-amber-100 text-blue-950 px-5 py-2 rounded-full text-xs font-bold uppercase border border-amber-300 shadow-sm hover:scale-110 transition-transform cursor-default">
                {skill}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* 5. CONTACT SECTION (Tombol Media Sosial) */}
      <footer id="contact" className="bg-blue-950 text-white py-16 px-6 mt-16">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-black text-amber-400 mb-6 flex items-center justify-center gap-3">
             Hubungi Saya
          </h2>
          <p className="text-slate-300 max-w-xl mx-auto mb-10 leading-relaxed">
            Silakan hubungi saya melalui platform media sosial berikut untuk kolaborasi, diskusi, atau pertanyaan profesional lainnya. Saya sangat senang untuk terhubung!
          </p>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 px-10">
            {socialMedia.map((socmed, index) => (
              <a key={index} href={socmed.link} target="_blank" rel="noopener noreferrer" 
                 className="bg-white/10 hover:bg-amber-400 hover:text-blue-950 transition-all rounded-xl p-5 border border-white/20 shadow-md group">
                <div className="text-5xl mb-3 group-hover:scale-125 transition-transform">{socmed.icon}</div>
                <div className="text-xs font-bold uppercase tracking-widest">{socmed.name}</div>
              </a>
            ))}
          </div>
          
          <div className="mt-16 text-slate-500 text-[10px] uppercase tracking-wider">
            © 2026 {namaLengkap} — Tugas Profil ReactJS + Tailwind
          </div>
        </div>
      </footer>

    </div>
  )
}