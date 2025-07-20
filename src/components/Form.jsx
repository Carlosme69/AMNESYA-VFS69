import React from "react";

export default function Form() {
  return (
    <section className="grid grid-cols-1 md:grid-cols-2 gap-6 p-6 mt-10 bg-white text-black max-w-4xl mx-auto rounded-xl shadow-lg">
      <div>
        <h2 className="text-lg font-semibold mb-2">Detalhes do Agendamento</h2>
        <select className="w-full mb-4 p-2 border rounded">
          <option>Escolha um país</option>
        </select>
        <select className="w-full mb-4 p-2 border rounded">
          <option>Selecione um tipo</option>
        </select>
      </div>
      <div>
        <h2 className="text-lg font-semibold mb-2">Dados Pessoais</h2>
        <input type="text" placeholder="Nome Completo" className="w-full mb-4 p-2 border rounded" />
      </div>
      <div>
        <h2 className="text-lg font-semibold mb-2">Documentos</h2>
        <div className="border-2 border-dashed p-6 text-center rounded">
          Arraste e solte arquivos aqui, ou <span className="text-blue-600 cursor-pointer">clique para fazer upload</span>
        </div>
      </div>
    </section>
  );
}
