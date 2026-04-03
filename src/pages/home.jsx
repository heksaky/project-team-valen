import React from "react";
import { Link } from "react-router-dom";

function App() {
  return (
    <div className="min-h-screen bg-slate-950 flex items-center justify-center p-4 selection:bg-blue-500/30 relative overflow-hidden font-sans">
      {/* Efek Latar Belakang Dekoratif (Disesuaikan untuk Mode Gelap) */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute -top-[10%] -left-[10%] w-96 h-96 bg-blue-600 rounded-full mix-blend-screen filter blur-[100px] opacity-10"></div>
        <div className="absolute top-[20%] -right-[10%] w-96 h-96 bg-indigo-600 rounded-full mix-blend-screen filter blur-[100px] opacity-10"></div>
        <div className="absolute -bottom-[10%] left-[20%] w-96 h-96 bg-emerald-600 rounded-full mix-blend-screen filter blur-[100px] opacity-[0.05]"></div>
      </div>

      <div className="bg-slate-900/90 backdrop-blur-xl rounded-3xl shadow-2xl shadow-black/80 border border-slate-800 p-8 sm:p-10 w-full max-w-md text-center z-10">
        
        {/* Bagian Header Dashboard */}
        <div className="mb-10">
          <div className="w-16 h-16 bg-gradient-to-tr from-blue-600 to-indigo-600 rounded-2xl flex items-center justify-center mx-auto mb-5 shadow-lg shadow-blue-900/50 transform rotate-3 hover:rotate-6 transition-transform">
            <svg className="w-8 h-8 text-white transform -rotate-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
          </div>
          <h1 className="text-3xl font-extrabold text-slate-50 tracking-tight">
            Dashboard Tim
          </h1>
          <p className="text-sm text-slate-400 mt-2 font-medium">
            Pilih profil anggota tim ROMUSA
          </p>
        </div>

        {/* Daftar Tautan Profil */}
        <div className="space-y-4">
          
          <Link
            to="/fariz"
            className="group flex items-center justify-between p-4 bg-slate-900 rounded-2xl border border-slate-800 hover:border-blue-500 hover:shadow-lg hover:shadow-blue-500/20 transition-all duration-300 transform hover:-translate-y-1"
          >
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-blue-500/10 text-blue-400 rounded-xl flex items-center justify-center font-bold text-lg group-hover:bg-blue-600 group-hover:text-white transition-colors duration-300">
                F
              </div>
              <div className="text-left">
                <span className="block font-bold text-slate-200 group-hover:text-blue-400 transition-colors">Farizqahasan</span>
                <span className="text-xs text-slate-500 font-medium">Anggota Tim</span>
              </div>
            </div>
            <div className="w-8 h-8 rounded-full bg-slate-800/50 flex items-center justify-center group-hover:bg-blue-500/20 transition-colors">
              <svg className="w-4 h-4 text-slate-500 group-hover:text-blue-400 transform group-hover:translate-x-1 transition-all" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
              </svg>
            </div>
          </Link>

          <Link
            to="/fahmi"
            className="group flex items-center justify-between p-4 bg-slate-900 rounded-2xl border border-slate-800 hover:border-emerald-500 hover:shadow-lg hover:shadow-emerald-500/20 transition-all duration-300 transform hover:-translate-y-1"
          >
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-emerald-500/10 text-emerald-400 rounded-xl flex items-center justify-center font-bold text-lg group-hover:bg-emerald-600 group-hover:text-white transition-colors duration-300">
                F
              </div>
              <div className="text-left">
                <span className="block font-bold text-slate-200 group-hover:text-emerald-400 transition-colors">Fahmi Ramadhan</span>
                <span className="text-xs text-slate-500 font-medium">Anggota Tim</span>
              </div>
            </div>
            <div className="w-8 h-8 rounded-full bg-slate-800/50 flex items-center justify-center group-hover:bg-emerald-500/20 transition-colors">
              <svg className="w-4 h-4 text-slate-500 group-hover:text-emerald-400 transform group-hover:translate-x-1 transition-all" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
              </svg>
            </div>
          </Link>

          <Link
            to="/bagas"
            className="group flex items-center justify-between p-4 bg-slate-900 rounded-2xl border border-slate-800 hover:border-purple-500 hover:shadow-lg hover:shadow-purple-500/20 transition-all duration-300 transform hover:-translate-y-1"
          >
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-purple-500/10 text-purple-400 rounded-xl flex items-center justify-center font-bold text-lg group-hover:bg-purple-600 group-hover:text-white transition-colors duration-300">
                B
              </div>
              <div className="text-left">
                <span className="block font-bold text-slate-200 group-hover:text-purple-400 transition-colors">Bagas Ade</span>
                <span className="text-xs text-slate-500 font-medium">Anggota Tim</span>
              </div>
            </div>
            <div className="w-8 h-8 rounded-full bg-slate-800/50 flex items-center justify-center group-hover:bg-purple-500/20 transition-colors">
              <svg className="w-4 h-4 text-slate-500 group-hover:text-purple-400 transform group-hover:translate-x-1 transition-all" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
              </svg>
            </div>
          </Link>

        </div>

        {/* Footer Card */}
        <div className="mt-10 pt-6 border-t border-slate-800 flex items-center justify-center gap-2">
          <span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse"></span>
          <p className="text-[11px] text-slate-500 font-extrabold tracking-widest uppercase">
            Kelompok ROMUSA
          </p>
        </div>

      </div>
    </div>
  );
}

export default App;