# Brew & Bloom — адаптивный лендинг кофейни

Учебный проект на React + TypeScript + Tailwind CSS 4 + Vite.

## Запуск

```bash
npm install
npm run dev
```

Проверка сборки: `npm run build`. Проверка ESLint: `npm run lint`.

## Компоненты
- `Header.tsx`: мобильное бургер-меню (`useState`), горизонтальная навигация от `md`.
- `Hero.tsx`: вертикальная компоновка на телефоне, две колонки от `lg`.
- `Features.tsx`: 6 карточек, сетка 1 / 2 / 3 колонки.
- `Pricing.tsx`: 3 тарифа, выделенный центральный.
- `Footer.tsx`: 1 / 2 / 4 колонки.
- `Button.tsx`: типизированные `variant` (`primary`, `secondary`) и `size` (`sm`, `md`, `lg`).
- `utils/cn.ts`: утилита объединения классов.

## Адаптивность
Проверить в DevTools ширины 375, 768, 1024 и 1440 px.

Фотография загружается с Unsplash и требует доступа к интернету. Цены и бренд демонстрационные.
