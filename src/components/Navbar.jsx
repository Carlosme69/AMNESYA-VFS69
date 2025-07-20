import React from "react";

export default function Navbar() {
  return (
    <nav className="bg-slate-800 text-white px-6 py-4 flex justify-between items-center">
      <div className="text-xl font-bold flex items-center gap-2">
        ✈️ <span>Amnesy</span>
      </div>
      <ul className="flex gap-6">
        <li><a href="#" className="hover:text-blue-400">Home</a></li>
        <li><a href="#" className="hover:text-blue-400">Agendamento</a></li>
        <li><a href="#" className="hover:text-blue-400">Sobre Nós</a></li>
        <li><a href="#" className="hover:text-blue-400">Ajuda</a></li>
      </ul>
    </nav>
  );
}
