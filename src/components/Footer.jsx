function Footer() {
  return (
    <footer className="bg-black border-t border-white/10">
      <div className="mx-auto max-w-6xl px-6 py-10 flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="text-white/70 text-sm">© 2025 RED/WHITE LABEL. Все права защищены.</div>
        <div className="flex items-center gap-6 text-white/60 text-sm">
          <a href="#services" className="hover:text-white">Услуги</a>
          <a href="#showcase" className="hover:text-white">Релизы</a>
          <a href="#" className="hover:text-white">Контакты</a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
