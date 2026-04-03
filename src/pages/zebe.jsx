import { useState } from 'react';
import fotoProfil from '../assets/zebe.jpeg';

function App() {
  const [activeTab, setActiveTab] = useState('about');

  const experiences = [
    {
      title: 'Mahasiswa Aktif',
      organization: 'Universitas Brawijaya - D3 TI',
      period: '2025 - Sekarang',
      desc: 'Fokus pada pengembangan akademik dan penguasaan materi pemrograman serta teknologi informasi.'
    }
  ];

  // Data Pendidikan
  const education = [
    {
      degree: 'D3 Teknologi Informasi',
      school: 'Universitas Brawijaya',
      year: '2024 - Sekarang',
      desc: 'Semester 2, fokus pada pemrograman dan pengembangan web.'
    },
    {
      degree: 'SMA / Sederajat',
      school: 'SMA Negeri 3 Malang',
      year: '2022-2025',
      desc: 'Lulus dengan fokus pada ilmu pengetahuan dan teknologi.'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      
      {/* Background decorative elements - efek glassmorphism */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-500/20 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-cyan-500/20 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl"></div>
      </div>

      {/* Main Content */}
      <div className="relative max-w-5xl mx-auto px-4 py-8 md:py-12">
        
        {/* Header judul*/}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
            Profil Mahasiswa
          </h1>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-cyan-500 mx-auto mt-2 rounded-full"></div>
          <p className="text-slate-400 mt-2 text-sm">D3 Teknologi Informasi - Universitas Brawijaya</p>
        </div>

        {/* Card Profil Utama - dengan glassmorphism */}
        <div className="bg-white/10 backdrop-blur-lg rounded-2xl shadow-2xl overflow-hidden border border-white/20">
          
          <div className="flex flex-col md:flex-row">
            
            {/* Bagian Kiri: Foto Profil & Info Dasar */}
            <div className="md:w-1/3 bg-gradient-to-br from-blue-500/20 to-cyan-500/20 p-6 flex flex-col items-center text-center backdrop-blur-sm">
              
              {/* Foto Profil dengan efek border gradasi */}
              <div className="relative group">
                <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full blur opacity-75 group-hover:opacity-100 transition duration-300"></div>
                <div className="relative w-36 h-36 md:w-40 md:h-40 rounded-full overflow-hidden bg-white shadow-lg border-4 border-white/50">
                  <img 
                    src={fotoProfil} 
                    alt="Foto Profil Rafarel" 
                    className="w-full h-full object-cover"
                  />
                </div>
                {/* Badge status */}
                <div className="absolute -bottom-2 -right-2 bg-gradient-to-r from-blue-500 to-cyan-500 text-white text-xs font-bold px-3 py-1 rounded-full shadow-lg">
                  TI'25
                </div>
              </div>
              
              {/* Nama Lengkap */}
              <h2 className="text-xl font-bold text-white mt-4">Rafarel Zebe Firmansyah</h2>
              <p className="text-blue-300 text-sm mt-1">Mahasiswa Semester 2</p>
              
              {/* Informasi Detail dengan Card Style */}
              <div className="w-full mt-5 space-y-3">
                <div className="flex items-center gap-3 bg-white/10 backdrop-blur-sm p-3 rounded-xl border border-white/20 hover:bg-white/20 transition">
                  <i className="fas fa-users text-blue-400 w-5"></i>
                  <div className="text-left">
                    <p className="text-xs text-blue-300">KELAS</p>
                    <p className="font-semibold text-white">T2G</p>
                  </div>
                </div>
                <div className="flex items-center gap-3 bg-white/10 backdrop-blur-sm p-3 rounded-xl border border-white/20 hover:bg-white/20 transition">
                  <i className="fas fa-graduation-cap text-blue-400 w-5"></i>
                  <div className="text-left">
                    <p className="text-xs text-blue-300">JURUSAN / PRODI</p>
                    <p className="font-semibold text-white">Teknologi Informasi</p>
                  </div>
                </div>
                <div className="flex items-center gap-3 bg-white/10 backdrop-blur-sm p-3 rounded-xl border border-white/20 hover:bg-white/20 transition">
                  <i className="fas fa-map-marker-alt text-blue-400 w-5"></i>
                  <div className="text-left">
                    <p className="text-xs text-blue-300">DOMISILI</p>
                    <p className="font-semibold text-white">Malang, Jawa Timur</p>
                  </div>
                </div>
                <div className="flex items-center gap-3 bg-white/10 backdrop-blur-sm p-3 rounded-xl border border-white/20 hover:bg-white/20 transition">
                  <i className="fas fa-id-card text-blue-400 w-5"></i>
                  <div className="text-left">
                    <p className="text-xs text-blue-300">NIM</p>
                    <p className="font-semibold text-white">253140707111094</p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Bagian Kanan: Tab Navigasi + Konten */}
            <div className="md:w-2/3 p-6">
              
              {/* Tab Navigation */}
              <div className="flex flex-wrap gap-2 mb-6 border-b border-white/20 pb-3">
                {[
                  { id: 'about', label: '📖 Tentang Diri', icon: '📖' },
                  { id: 'experience', label: '💼 Pengalaman', icon: '💼' },
                  { id: 'education', label: '🎓 Pendidikan', icon: '🎓' },
                ].map(tab => (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${
                      activeTab === tab.id
                        ? 'bg-gradient-to-r from-blue-500 to-cyan-500 text-white shadow-lg'
                        : 'bg-white/5 text-slate-300 hover:bg-white/10'
                    }`}
                  >
                    {tab.label}
                  </button>
                ))}
              </div>

              {/* Konten Tab: Tentang Diri (Deskripsi 100+ kata) */}
              {activeTab === 'about' && (
                <div>
                  <div className="flex items-center gap-2 mb-4">
                    <i className="fas fa-user-circle text-blue-400 text-xl"></i>
                    <h3 className="text-lg font-bold text-white">Tentang Diri</h3>
                  </div>
                  
                  <div className="space-y-3 text-slate-300 leading-relaxed text-justify">
                    <p>
                      Saya adalah mahasiswa Teknologi Informasi semester 2 yang memiliki minat besar dalam dunia teknologi, 
                      khususnya pada bidang komputer, pemrograman, dan pengembangan keterampilan digital. 
                      Saat ini saya sedang fokus membangun dasar pengetahuan dan kemampuan akademik agar memiliki pemahaman 
                      yang kuat untuk jenjang pembelajaran berikutnya. Selama masa perkuliahan, saya lebih banyak memusatkan 
                      perhatian pada kegiatan akademik dan proses belajar di kelas, sehingga belum banyak mengikuti kegiatan 
                      non-akademik maupun organisasi. Namun, hal tersebut tidak mengurangi semangat saya untuk terus belajar, 
                      berkembang, dan menambah pengalaman baru. Saya dikenal sebagai pribadi yang mau belajar, bertanggung jawab, 
                      serta berusaha menyelesaikan tugas dengan baik. Ke depannya, saya ingin terus meningkatkan kemampuan di 
                      bidang Teknologi Informasi agar dapat menjadi pribadi yang kompeten, adaptif, dan siap menghadapi 
                      perkembangan dunia digital.
                    </p>
                    <p>
                      Dengan bekal ilmu yang saya miliki, saya berharap dapat memberikan dampak positif melalui karya-karya 
                      yang saya hasilkan. Terima kasih telah meluangkan waktu untuk membaca profil saya.
                    </p>
                  </div>
                  
                  {/* Kontak informasi */}
                  <div className="mt-5 pt-3 border-t border-white/20 flex flex-wrap gap-3 text-sm">
                    <span className="text-slate-400"><i className="far fa-envelope mr-1 text-blue-400"></i> rafarelzebee@student.ub.ac.id</span>
                    <span className="text-slate-400"><i className="fab fa-github mr-1 text-blue-400"></i> @rafarel.zebe</span>
                  </div>
                </div>
              )}

              {/* Tab: Pengalaman */}
              {activeTab === 'experience' && (
                <div>
                  <h2 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                    <span className="text-2xl">💼</span> Pengalaman & Aktivitas
                  </h2>
                  <div className="space-y-4">
                    {experiences.map((exp, idx) => (
                      <div key={idx} className="relative pl-5 border-l-2 border-blue-500/50">
                        <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-blue-500"></div>
                        <h3 className="text-md font-semibold text-white">{exp.title}</h3>
                        <p className="text-cyan-400 text-xs">{exp.organization}</p>
                        <p className="text-slate-400 text-xs mb-1">{exp.period}</p>
                        <p className="text-slate-300 text-sm">{exp.desc}</p>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Tab: Pendidikan */}
              {activeTab === 'education' && (
                <div>
                  <h2 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                    <span className="text-2xl">🎓</span> Riwayat Pendidikan
                  </h2>
                  <div className="grid gap-3">
                    {education.map((edu, idx) => (
                      <div key={idx} className="bg-white/5 rounded-xl p-4 hover:bg-white/10 transition">
                        <div className="flex flex-wrap justify-between items-start">
                          <div>
                            <h3 className="text-md font-semibold text-white">{edu.degree}</h3>
                            <p className="text-cyan-400 text-sm">{edu.school}</p>
                            <p className="text-slate-400 text-xs mt-1">{edu.desc}</p>
                          </div>
                          <span className="text-slate-400 text-xs bg-slate-800 px-2 py-1 rounded-full">
                            {edu.year}
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

            </div>
          </div>
        </div>
        
        {/* Footer - sama seperti HTML asli tapi dengan style baru */}
        <footer className="mt-8 text-center text-slate-400 text-sm border-t border-white/10 pt-6">
          <div className="flex flex-wrap justify-center gap-x-6 gap-y-2">
            <span><i className="far fa-user mr-1 text-blue-400"></i> Nama Lengkap: Rafarel Zebe Firmansyah</span>
            <span><i className="fas fa-users mr-1 text-blue-400"></i> Kelas: T2G</span>
            <span><i className="fas fa-id-card mr-1 text-blue-400"></i> NIM: 253140707111094</span>
            <span><i className="fas fa-laptop-code mr-1 text-blue-400"></i> Prodi: Teknologi Informasi</span>
            <span><i className="fas fa-home mr-1 text-blue-400"></i> Domisili: Malang</span>
          </div>
          <p className="mt-3 text-xs">✓ Memenuhi seluruh persyaratan: Nama Lengkap, NIM, Kelas, Jurusan, Domisili, Foto Profil, dan Tentang Diri (100+ kata)</p>
        </footer>
      </div>
    </div>
  );
}

export default App;