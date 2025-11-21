import { Play } from 'lucide-react';

const tracks = [
  { title: 'Pulse Line', artist: 'RED TONE', length: '3:28' },
  { title: 'Minimal Heat', artist: 'WHITE NOISE', length: '2:54' },
  { title: 'Signal', artist: 'KROSS', length: '4:02' },
];

function Showcase() {
  return (
    <section id="showcase" className="bg-black">
      <div className="mx-auto max-w-6xl px-6 py-16">
        <div className="flex items-end justify-between">
          <h2 className="text-3xl md:text-4xl font-bold text-white">Последние релизы</h2>
          <a href="#" className="text-red-400 hover:text-red-300">Смотреть все</a>
        </div>

        <div className="mt-8 grid gap-4">
          {tracks.map((t, i) => (
            <div key={i} className="group flex items-center justify-between rounded-xl border border-white/10 bg-white/5 p-4 hover:bg-white/10 transition">
              <div className="flex items-center gap-4">
                <button className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-red-600 text-white shadow-lg shadow-red-600/30 group-hover:scale-105 transition">
                  <Play size={18} />
                </button>
                <div>
                  <div className="text-white font-semibold">{t.title}</div>
                  <div className="text-white/60 text-sm">{t.artist}</div>
                </div>
              </div>
              <div className="text-white/50 text-sm">{t.length}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Showcase;
