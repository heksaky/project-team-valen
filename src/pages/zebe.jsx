import { useState } from 'react';
// Jalur folder disesuaikan dengan struktur laptopmu
import fotoProfil from '../assets/zevefto.jpg';

function Zebe() {
  const [activeTab, setActiveTab] = useState('about');

  const experiences = [
    {
      title: 'Mahasiswa Aktif',
      organization: 'Universitas Brawijaya - D3 TI',
      period: '2025 - Sekarang',
      desc: 'Fokus pada pengembangan akademik dan penguasaan materi pemrograman serta teknologi informasi.'
    }
  ];

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
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 selection:bg-blue-500/30">
      
      {/* Background decorative elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-500/20 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-cyan-500/20 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl"></div>
      </div>

      <div className="relative max-w-5xl mx-auto px-4 py-8 md:py-12">
        
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
            Profil Mahasiswa
          </h1>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-cyan-500 mx-auto mt-2 rounded-full"></div>
          <p className="text-slate-400 mt-2 text-sm">D3 Teknologi Informasi - Universitas Brawijaya</p>
        </div>

        <div className="bg-white/10 backdrop-blur-lg rounded-2xl shadow-2xl overflow-hidden border border-white/20">
          <div className="flex flex-col md:flex-row">
            
            {/* Bagian Kiri */}
            <div className="md:w-1/3 bg-gradient-to-br from-blue-500/20 to-cyan-500/20 p-6 flex flex-col items-center text-center backdrop-blur-sm">
              <div className="relative group">
                <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full blur opacity-75 group-hover:opacity-100 transition duration-300"></div>
                <div className="relative w-36 h-36 md:w-40 md:h-40 rounded-full overflow-hidden bg-white shadow-lg border-4 border-white/50">
                  <img 
                    src={fotoProfil} 
                    alt="Foto Profil Rafarel" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute -bottom-2 -right-2 bg-gradient-to-r from-blue-500 to-cyan-500 text-white text-xs font-bold px-3 py-1 rounded-full shadow-lg">
                  TI'25
                </div>
              </div>
              
              <h2 className="text-xl font-bold text-white mt-4">Rafarel Zebe Firmansyah</h2>
              <p className="text-blue-300 text-sm mt-1">Mahasiswa Semester 2</p>
              
              <div className="w-full mt-5 space-y-3">
                <div className="flex items-center gap-3 bg-white/10 backdrop-blur-sm p-3 rounded-xl border border-white/20">
                  <div className="text-left">
                    <p className="text-xs text-blue-300">KELAS</p>
                    <p className="font-semibold text-white">T2G</p>
                  </div>
                </div>
                <div className="flex items-center gap-3 bg-white/10 backdrop-blur-sm p-3 rounded-xl border border-white/20">
                  <div className="text-left">
                    <p className="text-xs text-blue-300">NIM</p>
                    <p className="font-semibold text-white">253140707111094</p>
                  </div>
                </div>
              </div>

              {/* SOSIAL MEDIA ZEBE */}
              <div className="flex gap-4 mt-6">
                <a href="https://github.com/whoisluk" target="_blank" rel="noopener noreferrer" className="p-3 bg-white/10 rounded-full hover:bg-white/20 transition-all border border-white/10">
                  <span className="text-white text-xl">🌐</span>
                </a>
                <a href="https://instagram.com/rafare.zebe" target="_blank" rel="noopener noreferrer" className="p-3 bg-white/10 rounded-full hover:bg-white/20 transition-all border border-white/10">
                  <span className="text-white text-xl">📸</span>
                </a>
              </div>
            </div>
            
            {/* Bagian Kanan */}
            <div className="md:w-2/3 p-6">
              <div className="flex flex-wrap gap-2 mb-6 border-b border-white/20 pb-3">
                {['about', 'experience', 'education'].map(id => (
                  <button
                    key={id}
                    onClick={() => setActiveTab(id)}
                    className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                      activeTab === id ? 'bg-gradient-to-r from-blue-500 to-cyan-500 text-white' : 'bg-white/5 text-slate-300'
                    }`}
                  >
                    {id === 'about' ? '📖 Tentang Diri' : id === 'experience' ? '💼 Pengalaman' : '🎓 Pendidikan'}
                  </button>
                ))}
              </div>

              {activeTab === 'about' && (
                <div className="space-y-4 text-slate-300 leading-relaxed text-justify">
                  <p>
                    Saya adalah mahasiswa Teknologi Informasi semester 2 di Universitas Brawijaya yang memiliki minat besar dalam dunia teknologi, khususnya pada bidang komputer, pemrograman, dan pengembangan keterampilan digital secara mendalam. Saat ini saya sedang fokus membangun dasar pengetahuan dan kemampuan akademik agar memiliki pemahaman yang kuat untuk jenjang pembelajaran berikutnya di industri teknologi yang sangat dinamis ini. Selama masa perkuliahan, saya lebih banyak memusatkan perhatian pada kegiatan akademik dan proses belajar di kelas guna menguasai logika pemrograman dasar serta arsitektur komputer. 
                  </p>
                  <p>
                    Meskipun saat ini saya belum banyak mengikuti kegiatan non-akademik maupun organisasi formal, hal tersebut tidak mengurangi semangat saya untuk terus belajar secara mandiri, berkembang, dan menambah pengalaman baru melalui proyek-proyek kecil. Saya dikenal sebagai pribadi yang haus akan ilmu, bertanggung jawab, serta selalu berusaha menyelesaikan tugas dengan standar yang baik. Ke depannya, saya memiliki visi untuk terus meningkatkan kemampuan teknis di bidang Teknologi Informasi agar dapat menjadi pribadi yang kompeten, adaptif terhadap perubahan, dan siap menghadapi tantangan global di era digital yang serba cepat ini.
                  </p>
                  <div className="pt-4 border-t border-white/10">
                    <p className="text-xs text-slate-400">Email: rafarelzebee@student.ub.ac.id</p>
                  </div>
                </div>
              )}

              {activeTab === 'experience' && (
                <div className="space-y-4">
                  {experiences.map((exp, idx) => (
                    <div key={idx} className="relative pl-5 border-l-2 border-blue-500/50">
                      <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-blue-500"></div>
                      <h3 className="text-md font-semibold text-white">{exp.title}</h3>
                      <p className="text-slate-300 text-sm">{exp.desc}</p>
                    </div>
                  ))}
                </div>
              )}

              {activeTab === 'education' && (
                <div className="grid gap-3">
                  {education.map((edu, idx) => (
                    <div key={idx} className="bg-white/5 rounded-xl p-4">
                      <h3 className="text-md font-semibold text-white">{edu.degree}</h3>
                      <p className="text-cyan-400 text-sm">{edu.school}</p>
                      <p className="text-slate-400 text-xs mt-1">{edu.year}</p>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Zebe;