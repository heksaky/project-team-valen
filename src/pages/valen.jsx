import React from 'react';
import { Link } from 'react-router-dom';

const Profile = () => {
  const data = {
    nama: "Valentino Rifqi Heksaky", // Sesuaikan nama kamu
    role: "Lead Frontend Developer",
    kelas: "TI-2A",
    prodi: "Teknologi Informasi",
    domisili: "Malang, Indonesia",
    foto: "fotovalen.jpg",
    deskripsi: "Saya adalah mahasiswa IT di Vokasi Universitas Brawijaya yang fokus pada ekosistem JavaScript. Memiliki spesialisasi dalam membangun antarmuka web yang berperforma tinggi menggunakan ReactJS dan Tailwind CSS. Saya percaya bahwa detail kecil dalam desain menentukan kualitas akhir sebuah produk digital.",
    skills: ["ReactJS", "Tailwind CSS", "JavaScript", "PHP", "UI/UX Design"],
    socials: [
      { name: "Github", url: "#" },
      { name: "Instagram", url: "https://www.instagram.com/valtinoo?igsh=MWN1N2pmbXB2NmIzZA==" },
      { name: "LinkedIn", url: "https://www.linkedin.com/in/valentino-heksaky-64a744377?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" }
    ]
  };

  return (
    <div className="min-h-screen bg-[#050505] text-white font-sans selection:bg-blue-500 overflow-x-hidden">
      
      {/* Background Decorative Elements */}
      <div className="fixed top-0 left-0 w-full h-full pointer-events-none opacity-[0.03] bg-[url('https://grainy-gradients.vercel.app/noise.svg')] z-50"></div>
      <div className="absolute top-[-10%] right-[-10%] w-[500px] h-[500px] bg-blue-900/20 rounded-full blur-[120px]"></div>

      <div className="relative z-10 max-w-6xl mx-auto px-6 py-12">
        
        {/* Back Button with Hover Effect */}
        <Link to="/" className="group inline-flex items-center gap-3 mb-12 text-sm font-bold tracking-widest text-white/50 hover:text-blue-500 transition-all">
          <span className="group-hover:-translate-x-2 transition-transform">←</span> BACK TO CREATIVE SYNERGY
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
          
          {/* LEFT COLUMN: Profile Visual */}
          <div className="lg:col-span-5">
            <div className="sticky top-12">
              <div className="relative group">
                <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl blur opacity-25 group-hover:opacity-50 transition duration-1000"></div>
                <div className="relative aspect-[4/5] overflow-hidden rounded-2xl border border-white/10 bg-[#111]">
                  <img 
                    src={data.foto} 
                    alt={data.nama} 
                    className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700 scale-105 group-hover:scale-100" 
                  />
                </div>
              </div>

              <div className="mt-8 flex gap-4">
                {data.socials.map((soc, i) => (
                  <a key={i} href={soc.url} className="flex-1 py-3 text-center text-[10px] font-bold tracking-widest border border-white/10 rounded-lg hover:bg-white hover:text-black transition-all">
                    {soc.name.toUpperCase()}
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* RIGHT COLUMN: Content Details */}
          <div className="lg:col-span-7">
            <header className="mb-12">
              <span className="text-blue-500 font-mono text-xs tracking-[0.3em] uppercase mb-4 block">/ Personnel Profile</span>
              <h1 className="text-6xl md:text-8xl font-black italic uppercase tracking-tighter mb-4 leading-[0.8]">
                {data.nama.split(" ")[0]} <br />
                <span className="text-transparent stroke-text">{data.nama.split(" ").slice(1).join(" ")}</span>
              </h1>
              <p className="text-xl text-gray-400 font-medium italic">{data.role}</p>
            </header>

            <section className="space-y-12">
              {/* About Section */}
              <div>
                <h3 className="text-xs font-bold tracking-[0.4em] text-white/30 uppercase mb-6 flex items-center gap-4">
                  About Me <div className="h-[1px] flex-grow bg-white/10"></div>
                </h3>
                <p className="text-gray-400 leading-relaxed text-lg text-justify font-light italic">
                  "{data.deskripsi}"
                </p>
              </div>

              {/* Personal Info Grid */}
              <div className="grid grid-cols-2 gap-8">
                <div className="p-6 border border-white/5 bg-[#111]/50 rounded-xl backdrop-blur-sm">
                  <p className="text-[10px] font-bold text-blue-500 uppercase tracking-widest mb-2">Institution</p>
                  <p className="text-lg font-bold">Vokasi Universitas Brawijaya</p>
                </div>
                <div className="p-6 border border-white/5 bg-[#111]/50 rounded-xl backdrop-blur-sm">
                  <p className="text-[10px] font-bold text-blue-500 uppercase tracking-widest mb-2">Location</p>
                  <p className="text-lg font-bold">{data.domisili}</p>
                </div>
              </div>

              {/* Skills Section */}
              <div>
                <h3 className="text-xs font-bold tracking-[0.4em] text-white/30 uppercase mb-6 flex items-center gap-4">
                  Capabilities <div className="h-[1px] flex-grow bg-white/10"></div>
                </h3>
                <div className="flex flex-wrap gap-3">
                  {data.skills.map((skill, index) => (
                    <span key={index} className="px-6 py-2 rounded-full border border-blue-500/30 text-xs font-bold text-blue-400 hover:bg-blue-500 hover:text-white transition-all cursor-default">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </section>
          </div>

        </div>
      </div>

      <style dangerouslySetInnerHTML={{ __html: `
        .stroke-text {
          -webkit-text-stroke: 1px rgba(255,255,255,0.2);
        }
        @media (min-width: 1024px) {
          .stroke-text { -webkit-text-stroke: 2px rgba(255,255,255,0.2); }
        }
      `}} />
    </div>
  );
};

export default Profile;