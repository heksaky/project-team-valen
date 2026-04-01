import { Link } from 'react-router-dom';

const Home = () => {
  const teamMembers = [
    { id: 1, label: "Frontend Developer", initial: "01" },
    { id: 2, label: "UI/UX Designer", initial: "02" },
    { id: 3, label: "System Analyst", initial: "03" },
  ];

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-[#0f172a] relative overflow-hidden p-6">
      {/* Elemen Dekorasi Background (Lingkaran Cahaya) */}
      <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-blue-600/20 rounded-full blur-[120px]"></div>
      <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-indigo-600/20 rounded-full blur-[120px]"></div>

      <div className="relative z-10 w-full max-w-5xl">
        {/* Header Section */}
        <header className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 mb-4 text-xs font-semibold tracking-widest text-blue-400 uppercase bg-blue-400/10 border border-blue-400/20 rounded-full">
            Project Collaboration
          </span>
          <h1 className="text-5xl md:text-7xl font-black text-white mb-6 tracking-tight">
            Our Creative <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-500">Team</span>
          </h1>
          <p className="text-slate-400 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
            Membangun solusi digital melalui kreativitas dan kode. Jelajahi profil anggota tim kami di bawah ini.
          </p>
        </header>
        
        {/* Card Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {teamMembers.map((member) => (
            <Link
              key={member.id}
              to={`/profile${member.id}`}
              className="group relative"
            >
              {/* Glow Effect on Hover */}
              <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl blur opacity-20 group-hover:opacity-60 transition duration-500"></div>
              
              <div className="relative flex flex-col items-start p-8 bg-slate-900/50 border border-white/10 rounded-2xl backdrop-blur-xl hover:bg-slate-800/50 transition-all duration-300">
                <span className="text-4xl font-black text-white/5 mb-4 group-hover:text-blue-500/20 transition-colors">
                  {member.initial}
                </span>
                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-blue-400 transition-colors">
                  Member {member.id}
                </h3>
                <p className="text-slate-500 text-sm mb-6">
                  {member.label}
                </p>
                
                <div className="flex items-center text-blue-400 text-sm font-bold">
                  LIHAT PROFIL 
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-2 group-hover:translate-x-2 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Footer info */}
        <footer className="mt-20 text-center text-slate-600 text-sm">
          © 2026 Team Valen. Built with React & Tailwind CSS.
        </footer>
      </div>
    </div>
  );
};

export default Home;