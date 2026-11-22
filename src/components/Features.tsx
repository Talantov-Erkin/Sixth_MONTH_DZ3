const features = [
  {
    icon: "🌱",
    title: "Свежая обжарка",
    text: "Отбираем лучшие зёрна и раскрываем их вкус в каждой чашке.",
  },
  {
    icon: "🤎",
    title: "С любовью",
    text: "Наши бариста заботятся о каждой детали твоего напитка.",
  },
  {
    icon: "🥐",
    title: "Свежая выпечка",
    text: "Круассаны и десерты, которые идеально дополняют кофе.",
  },
  {
    icon: "🛋️",
    title: "Уютная атмосфера",
    text: "Место для встреч, работы и маленьких пауз в большом дне.",
  },
  {
    icon: "⚡",
    title: "Быстро и удобно",
    text: "Забери любимый напиток с собой без долгого ожидания.",
  },
  {
    icon: "🎁",
    title: "Приятные бонусы",
    text: "Абонементы и особые предложения для постоянных гостей.",
  },
];
export default function Features() {
  return (
    <section id="features" className="bg-white py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-xs font-extrabold uppercase tracking-[.2em] text-amber-700">
            Почему мы?
          </span>
          <h2 className="mt-3 text-4xl font-black tracking-tight text-stone-900 sm:text-5xl">
            Больше, чем просто кофе
          </h2>
          <p className="mt-5 leading-7 text-stone-600">
            Мы создали пространство, где каждый глоток становится маленьким
            удовольствием.
          </p>
        </div>
        <div className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((f) => (
            <article
              key={f.title}
              className="group rounded-3xl border border-stone-100 bg-[#faf7f2] p-8 transition duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-stone-900/5"
            >
              <div className="grid size-16 place-items-center rounded-2xl bg-amber-100 text-3xl">
                {f.icon}
              </div>
              <h3 className="mt-6 text-xl font-extrabold text-stone-900">
                {f.title}
              </h3>
              <p className="mt-3 leading-7 text-stone-600">{f.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
