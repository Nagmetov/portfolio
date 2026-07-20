# Шукур Нагметов — Portfolio

[![CI](https://github.com/Nagmetov/portfolio/actions/workflows/ci.yml/badge.svg)](https://github.com/Nagmetov/portfolio/actions/workflows/ci.yml)

Личный сайт-портфолио full-stack разработчика. Next.js (App Router) + TypeScript + Tailwind CSS v4, тёмная тема, переключение RU/EN на клиенте.

## Стек

- **Next.js 16** (App Router, Turbopack)
- **TypeScript**
- **Tailwind CSS v4**
- **Playwright** — end-to-end тесты

## Разработка

```bash
npm install
npm run dev
```

Откройте [http://localhost:3000](http://localhost:3000).

## Тесты

```bash
npm test        # прогон Playwright-тестов (поднимает prod-сборку сам)
npm run test:ui # интерактивный режим
```

Тесты покрывают: загрузку без ошибок консоли, наличие секций, якорную навигацию, переключение языка и его сохранение, доступность `robots.txt`/`sitemap.xml`/иконки.

## CI

`.github/workflows/ci.yml` при каждом пуше и pull request в `main` прогоняет линтер, проверку типов и Playwright-тесты.

## Структура

```
src/
  app/            # страницы, метаданные, robots.ts, sitemap.ts, icon.tsx
  components/     # секции сайта (Hero, About, Achievements, Projects, Contact...)
  lib/
    i18n/         # переводы и контекст переключения языка
    data.ts       # контакты и навыки
    site.ts       # общие константы (домен, email, GitHub)
tests/            # Playwright-тесты
```

## Сборка

```bash
npm run build
npm start
```
