import { Link } from 'react-router-dom';

const Profile3 = () => {
  const data = {
    nama: "Nama Lengkap Anggota 1",
    kelas: "TI-2A",
    prodi: "Teknik Informatika",
    domisili: "Malang",
    foto: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=200&h=200&fit=crop",
    deskripsi: "Saya adalah seorang mahasiswa yang sangat antusias dalam dunia pengembangan perangkat lunak, khususnya pada teknologi frontend seperti React. Ketertarikan saya dimulai saat mencoba membangun antarmuka web yang interaktif dan responsif menggunakan Tailwind CSS. Selain fokus pada akademik, saya juga sering mengeksplorasi berbagai framework JavaScript untuk meningkatkan efisiensi coding. Saya percaya bahwa kolaborasi tim adalah kunci utama dalam keberhasilan sebuah proyek digital. Di luar jam kuliah, saya aktif mengikuti komunitas open-source dan mengerjakan beberapa proyek sampingan untuk mengasah logika pemrograman serta pemahaman saya mengenai arsitektur sistem web yang modern dan skalabel bagi pengguna luas."
  };

  return (
    <div className="min-h-screen bg-slate-100 p-6 md:p-12">
      <Link to="/" className="inline-block mb-6 text-blue-600 hover:text-blue-800 font-medium">
        ← Kembali ke Beranda
      </Link>
      
      <div className="max-w-4xl mx-auto bg-white rounded-3xl shadow-xl overflow-hidden flex flex-col md:flex-row">
        <div className="md:w-1/3 bg-blue-600 p-10 flex flex-col items-center justify-center text-white">
          <img src={data.foto} alt="Profile" className="w-40 h-40 rounded-full border-4 border-white shadow-lg mb-6 object-cover" />
          <h2 className="text-2xl font-bold text-center leading-tight">{data.nama}</h2>
          <span className="mt-2 bg-blue-500 px-3 py-1 rounded-full text-sm">{data.prodi}</span>
        </div>

        <div className="md:w-2/3 p-10">
          <div className="grid grid-cols-2 gap-6 mb-8">
            <div className="p-4 bg-slate-50 rounded-xl">
              <p className="text-xs font-bold text-slate-400 uppercase tracking-widest">Kelas</p>
              <p className="text-lg font-semibold text-slate-700">{data.kelas}</p>
            </div>
            <div className="p-4 bg-slate-50 rounded-xl">
              <p className="text-xs font-bold text-slate-400 uppercase tracking-widest">Domisili</p>
              <p className="text-lg font-semibold text-slate-700">{data.domisili}</p>
            </div>
          </div>
          
          <div>
            <h3 className="text-xl font-bold text-slate-800 mb-3">Tentang Diri</h3>
            <p className="text-slate-600 leading-relaxed text-justify">
              {data.deskripsi}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile3;