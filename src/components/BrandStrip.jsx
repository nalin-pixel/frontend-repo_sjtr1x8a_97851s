function BrandStrip() {
  return (
    <section className="relative bg-black border-y border-white/10">
      <div className="mx-auto max-w-6xl px-6 py-10 grid gap-8 md:grid-cols-3">
        <div>
          <h3 className="text-white/90 font-semibold uppercase tracking-widest text-xs">Стиль</h3>
          <p className="mt-2 text-white/70">Минимализм, строгая типографика и динамичные акценты красного.</p>
        </div>
        <div>
          <h3 className="text-white/90 font-semibold uppercase tracking-widest text-xs">Звук</h3>
          <p className="mt-2 text-white/70">Чистый, плотный, с пульсирующим грувом — от записи до мастеринга.</p>
        </div>
        <div>
          <h3 className="text-white/90 font-semibold uppercase tracking-widest text-xs">Айдентика</h3>
          <p className="mt-2 text-white/70">Корпоративная палитра красно‑белая, с акцентами на энергичных переходах.</p>
        </div>
      </div>
    </section>
  );
}

export default BrandStrip;
