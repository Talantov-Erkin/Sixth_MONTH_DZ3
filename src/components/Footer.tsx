const columns = [
  {
    title: "Навигация",
    links: [
      ["Главная", "#home"],
      ["Преимущества", "#features"],
      ["Абонементы", "#pricing"],
    ],
  },
  {
    title: "Наш кофе",
    links: [
      ["Обжарка", "#features"],
      ["Десерты", "#features"],
      ["Бонусы", "#features"],
    ],
  },
  {
    title: "Помощь",
    links: [
      ["Выбрать тариф", "#pricing"],
      ["Как это работает", "#features"],
      ["Связаться", "#contact"],
    ],
  },
];
export default function Footer() {
  return (
    <footer id="contact" className="bg-[#231a15] py-16 text-stone-200">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <a href="#home" className="text-2xl font-black text-white">
              ☕ brew<span className="text-amber-400">&</span>bloom.
            </a>
            <p className="mt-5 max-w-xs text-sm leading-7 text-stone-400">
              Тёплые встречи, свежий кофе и немного счастья каждый день.
            </p>
            <p className="mt-4 text-sm text-amber-300">Бишкек, Кыргызстан</p>
          </div>
          {columns.map((col) => (
            <div key={col.title}>
              <h3 className="mb-5 font-bold text-white">{col.title}</h3>
              <ul className="space-y-3">
                {col.links.map(([label, href]) => (
                  <li key={label}>
                    <a
                      className="text-sm text-stone-400 transition hover:text-amber-300"
                      href={href}
                    >
                      {label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="mt-14 flex flex-col justify-between gap-3 border-t border-white/10 pt-7 text-xs text-stone-500 sm:flex-row">
          <span>
            © {new Date().getFullYear()} Brew & Bloom. Учебный проект.
          </span>
          <span>Сделано с ☕ и любовью</span>
        </div>
      </div>
    </footer>
  );
}
