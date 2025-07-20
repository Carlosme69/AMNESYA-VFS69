import React from "react";
import Navbar from "../components/Navbar";
import Form from "../components/Form";

export default function Home() {
  return (
    <div className="bg-slate-900 min-h-screen text-white">
      <Navbar />
      <main className="text-center py-10 px-4">
        <h1 className="text-4xl font-bold mb-4">Site para Agendamento</h1>
        <p className="mb-6">Permita que seus clientes agendem serviços relacionados a viagens</p>
        <button className="bg-blue-600 px-6 py-3 rounded-md text-white font-semibold hover:bg-blue-700">Agendar Agora</button>
        <Form />
      </main>
    </div>
  );
}
