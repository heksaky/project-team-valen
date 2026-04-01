import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-tr from-slate-50 to-blue-100 p-6">
      <h1 className="text-4xl md:text-5xl font-extrabold text-slate-800 mb-4 text-center">
        Our Creative Team
      </h1>
      <p className="text-gray-600 mb-10 text-lg text-center max-w-lg">
        Selamat datang di proyek kolaborasi kami. Silakan pilih anggota tim di bawah ini untuk melihat detail profil.
      </p>
      
      <div className="flex flex-wrap justify-center gap-6">
        {[1, 2, 3].map((num) => (
          <Link
            key={num}
            to={`/profile${num}`}
            className="group relative px-8 py-4 bg-white text-blue-600 font-bold rounded-xl shadow-md hover:shadow-2xl hover:bg-blue-600 hover:text-white transition-all duration-300 transform hover:-translate-y-1"
          >
            Lihat Profil {num}
            <span className="block text-xs font-normal opacity-70 group-hover:text-blue-100">Member 0{num}</span>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Home;