import Image from "next/image";

export default function Home() {
  return (
    <div className="bg-black text-white min-h-screen">

      {/* NAVBAR */}
      <nav className="flex items-center justify-between px-8 py-4 border-b border-gray-800">
        <div className="flex items-center gap-3">
          <Image
            src="/logo.png"
            alt="Slavonska Ravnica Logo"
            width={40}
            height={40}
          />
          <span className="text-lg font-semibold text-yellow-500">
            Slavonska Ravnica
          </span>
        </div>

        <div className="flex gap-6 text-sm">
          <a href="#" className="hover:text-yellow-500 transition">
            O Serveru
          </a>
          <a href="#" className="hover:text-yellow-500 transition">
            Pravila
          </a>
          <a href="#" className="hover:text-yellow-500 transition">
            Statistika
          </a>
        </div>
      </nav>

      {/* HERO */}
      <main className="flex flex-col items-center justify-center text-center px-6 py-24">

        <Image
          src="/logo.png"
          alt="Slavonska Ravnica Logo"
          width={140}
          height={140}
          className="mb-6"
        />

        <h1 className="text-6xl md:text-7xl font-bold text-yellow-500 mb-6">
          Slavonska Ravnica
        </h1>

        <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-2xl">
          Izgradi reputaciju, ne samo farmu.
          Kompetitivna ekonomija. Real-time sezonski sustav. Bez wipea.
        </p>

        <div className="flex gap-4">
          <a
            href="https://discord.gg/kJsUAsaRnh"
            target="_blank"
            rel="noopener noreferrer"
            className="yellow-500 text-black font-semibold px-6 py-3 rounded-xl hover:bg-yellow-400 transition"
          >
            Pridruži se Discordu
          </a>

          <a
            href="#"
            className="border border-yellow-500 text-yellow-500 px-6 py-3 rounded-xl hover:bg-yellow-500 hover:text-black transition"
          >
            Pravila Servera
          </a>
        </div>

      </main>

            {/* O SERVERU */}
      <section className="py-24 px-6 bg-[#0f0f0f] text-center">
        <h2 className="text-4xl font-bold text-yellow-500 mb-12">
          O Serveru
        </h2>

        <div className="grid md:grid-cols-4 gap-10 max-w-6xl mx-auto">

          <div className="p-6 border border-gray-800 rounded-xl hover:border-yellow-500 transition">
            <h3 className="text-xl font-semibold mb-4">🚜 24/7 Dedicated</h3>
            <p className="text-gray-400">
              Stabilan i stalno aktivan server bez prekida.
            </p>
          </div>

          <div className="p-6 border border-gray-800 rounded-xl hover:border-yellow-500 transition">
            <h3 className="text-xl font-semibold mb-4">👥 Max 3 po farmi</h3>
            <p className="text-gray-400">
              Zdrava konkurencija bez mega-farmi.
            </p>
          </div>

          <div className="p-6 border border-gray-800 rounded-xl hover:border-yellow-500 transition">
            <h3 className="text-xl font-semibold mb-4">⏳ Real-time sustav</h3>
            <p className="text-gray-400">
              1 mjesec = 2 dana. 1 godina = 24 dana.
            </p>
          </div>

          <div className="p-6 border border-gray-800 rounded-xl hover:border-yellow-500 transition">
            <h3 className="text-xl font-semibold mb-4">💰 Tržište rada</h3>
            <p className="text-gray-400">
              Objavi posao i automatski isplati izvršitelja.
            </p>
          </div>

        </div>
      </section>

            {/* NATJECATELJSKI MODEL */}
      <section className="py-24 px-6 bg-black text-center">
        <h2 className="text-4xl font-bold text-yellow-500 mb-12">
          Natjecateljski Model
        </h2>

        <div className="max-w-4xl mx-auto text-gray-300 space-y-6 text-lg">
          <p>
            Slavonska Ravnica je trajni svijet bez wipea.
            Svaka farma gradi svoju reputaciju dugoročno.
          </p>

          <p>
            Svaka godina traje 24 dana, a na kraju svake godine
            dodjeljuju se nagrade:
          </p>

          <ul className="space-y-2 text-yellow-500 font-semibold">
            <li>🏆 Farma godine</li>
            <li>📈 Najveći rast</li>
            <li>💰 Najveći profit</li>
            <li>⚡ Najaktivnija farma</li>
          </ul>

          <p className="text-gray-400">
            Imovina ostaje. Reputacija traje.
          </p>
        </div>
      </section>

            {/* FOOTER */}
      <footer className="bg-[#0a0a0a] border-t border-gray-800 py-8 text-center text-gray-500 text-sm">
        <p>© {new Date().getFullYear()} Slavonska Ravnica</p>
        <p className="mt-2">
          Balkan Farming Economy RP Server
        </p>
      </footer>


    </div>
  );
}
