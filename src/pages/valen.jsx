import React from 'react';
import { Link } from 'react-router-dom';

const Profile = () => {
  const data = {
    nama: "Valentino Rifqi Heksaky",
    role: "Creative IT Enthusiast",
    domisili: "Malang, Indonesia (Originated from Lumajang)",
    foto: "fotovalen.jpg", // Pastikan file ini ada di folder public atau assets
    deskripsi: "Lahir di Lumajang pada 10 Juni 2006, saya adalah individu yang mendedikasikan diri pada perpaduan antara teknologi informasi dan ekspresi visual. Sebagai mahasiswa Vokasi Universitas Brawijaya, saya mengintegrasikan keahlian desain, videografi, dan pengembangan web untuk menciptakan solusi digital yang tidak hanya fungsional, tetapi juga memiliki nilai artistik yang kuat.",
    achievements: [
      { year: "2024", title: "Juara 2 FLS2N Cabang Komik Digital" },
      { year: "2024", title: "Juara 1 Lomba Infografis Nasional NutriBe (UNAIR)" },
      { year: "2024", title: "Finalis TopCop Universitas Gadjah Mada" }
    ],
    skills: ["Adobe Premiere Pro", "Adobe After Effect", "ReactJS", "Tailwind CSS", "Figma", "Digital Illustration"],
    interests: ["Filmmaking", "Culinary Exploration", "Visual Storytelling", "PDD Specialist"],
    socials: [
      { name: "Portofolio", url: "https://tr.ee/iI9v_8S_id" },
      { name: "Instagram", url: "https://www.instagram.com/valtinoo?igsh=MWN1N2pmbXB2NmIzZA==" },
      { name: "LinkedIn", url: "https://www.linkedin.com/in/valentino-heksaky-64a744377" }
    ]
  };

  return (
    <div className="min-h-screen bg-[#050505] text-white font-sans selection:bg-blue-500 overflow-x-hidden">
      
      {/* Background Decorative Elements */}
      <div className="fixed top-0 left-0 w-full h-full pointer-events-none opacity-[0.03] bg-[url('https://grainy-gradients.vercel.app/noise.svg')] z-50"></div>
      <div className="absolute top-[-10%] right-[-10%] w-[500px] h-[500px] bg-blue-900/20 rounded-full blur-[120px]"></div>

      <div className="relative z-10 max-w-6xl mx-auto px-6 py-12">
        
        {/* Back Button */}
        <Link to="/" className="group inline-flex items-center gap-3 mb-12 text-sm font-bold tracking-widest text-white/50 hover:text-blue-500 transition-all">
          <span className="group-hover:-translate-x-2 transition-transform">←</span> BACK TO CREATIVE SYNERGY
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
          
          {/* LEFT COLUMN: Profile Visual & Achievements */}
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

              {/* Socials */}
              <div className="mt-8 flex gap-4">
                {data.socials.map((soc, i) => (
                  <a key={i} href={soc.url} target="_blank" rel="noreferrer" className="flex-1 py-3 text-center text-[9px] font-bold tracking-widest border border-white/10 rounded-lg hover:bg-white hover:text-black transition-all uppercase">
                    {soc.name}
                  </a>
                ))}
              </div>

              {/* Achievements Sidebar */}
              <div className="mt-12 p-6 border border-white/5 bg-white/[0.02] rounded-2xl">
                <h4 className="text-[10px] font-bold text-blue-500 uppercase tracking-widest mb-6 italic">Selected Achievements</h4>
                <div className="space-y-6">
                  {data.achievements.map((ach, i) => (
                    <div key={i} className="group cursor-default">
                      <p className="text-[10px] text-white/30 mb-1">{ach.year}</p>
                      <p className="text-sm font-bold group-hover:text-blue-400 transition-colors leading-snug">{ach.title}</p>
                    </div>
                  ))}
                </div>
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
              <p className="text-xl text-gray-400 font-medium italic">Information Technology-Vokasi UB</p>
            </header>

            <section className="space-y-16">
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
              <div className="grid grid-cols-2 gap-6">
                <div className="p-6 border border-white/5 bg-[#111]/50 rounded-xl backdrop-blur-sm">
                  <p className="text-[10px] font-bold text-blue-500 uppercase tracking-widest mb-2 italic">Date of Birth</p>
                  <p className="text-lg font-bold">10 June 2006</p>
                </div>
                <div className="p-6 border border-white/5 bg-[#111]/50 rounded-xl backdrop-blur-sm">
                  <p className="text-[10px] font-bold text-blue-500 uppercase tracking-widest mb-2 italic">Based In</p>
                  <p className="text-lg font-bold">Malang, ID</p>
                </div>
              </div>

              {/* Capabilities & Interests */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                <div>
                  <h3 className="text-[10px] font-bold tracking-[0.4em] text-white/30 uppercase mb-6 flex items-center gap-4">
                    Expertise
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {data.skills.map((skill, index) => (
                      <span key={index} className="px-4 py-1.5 rounded-lg border border-white/10 text-[10px] font-bold text-white/60 hover:border-blue-500 hover:text-blue-400 transition-all cursor-default">
                        {skill.toUpperCase()}
                      </span>
                    ))}
                  </div>
                </div>
                <div>
                  <h3 className="text-[10px] font-bold tracking-[0.4em] text-white/30 uppercase mb-6 flex items-center gap-4">
                    Side Interests
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {data.interests.map((int, index) => (
                      <span key={index} className="px-4 py-1.5 rounded-lg bg-blue-500/5 border border-blue-500/20 text-[10px] font-bold text-blue-300 italic">
                        {int.toUpperCase()}
                      </span>
                    ))}
                  </div>
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