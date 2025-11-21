import Spline from '@splinetool/react-spline';

function Hero() {
  return (
    <section className="relative min-h-[80vh] w-full overflow-hidden">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/KjKmX-97fe4kJxxg/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      {/* Overlay gradient for readability */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/60 via-black/50 to-black/80" />

      <div className="relative z-10 container mx-auto px-6 py-24 flex min-h-[80vh] items-center">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 rounded-full border border-red-500/30 bg-white/5 px-4 py-2 backdrop-blur">
            <span className="h-2 w-2 animate-pulse rounded-full bg-red-500" />
            <span className="text-xs uppercase tracking-widest text-red-200/90">Music Label • Recording Studio</span>
          </div>

          <h1 className="mt-6 text-5xl md:text-7xl font-extrabold tracking-tight text-white">
            Красно‑белый звук. Минимализм. Пульс.
          </h1>
          <p className="mt-5 text-lg md:text-xl text-white/80 max-w-2xl">
            Современный лейбл и студия звукозаписи с акцентом на чистый саунд, чёткую визуальную айдентику и динамику.
          </p>

          <div className="mt-10 flex flex-col sm:flex-row gap-4">
            <a href="#services" className="inline-flex items-center justify-center rounded-xl bg-red-600 text-white px-6 py-3 font-semibold shadow-lg shadow-red-600/30 hover:bg-red-500 transition">
              Записаться в студию
            </a>
            <a href="#showcase" className="inline-flex items-center justify-center rounded-xl border border-white/20 bg-white/10 text-white px-6 py-3 font-semibold hover:bg-white/20 transition">
              Послушать релизы
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
