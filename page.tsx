import Link from 'next/link';

export default function Home() {
  return (
    <main className="bg-gray-900 min-h-screen text-white">
      <section className="container mx-auto py-20 text-center">
        <h1 className="text-4xl font-bold mb-6 bg-gradient-to-r from-blue-500 to-blue-700 bg-clip-text text-transparent">
          AMNESYA VFS 69
        </h1>
        <p className="text-xl mb-8">Agendamento automático de vistos e passaportes</p>
        <Link 
          href="/agendamento" 
          className="bg-blue-600 hover:bg-blue-700 px-8 py-3 rounded-lg font-medium"
        >
          Agendar Agora
        </Link>
      </section>
    </main>
  );
}
