# CLAUDE.md — vs-blog (sokovnin.me)

## Обзор проекта

Блог Виктора Соковнина — SEO/GEO оптимизированный контент о стратегии, росте и монетизации tech-компаний.

## Стек

- **Framework:** Astro 5.x (static site)
- **Styling:** Tailwind CSS
- **Шаблон:** AstroWind
- **Хостинг:** Amvera Cloud (Docker + nginx)

## Деплой на Amvera

### Автодеплой

Push в `main` → GitHub webhook → Amvera автоматически собирает и деплоит.

```bash
git add .
git commit -m "Описание изменений"
git push origin main
```

Сборка занимает 5-10 минут.

### Проверка статуса

- Панель Amvera: https://amvera.ru → проект `vs-blog`
- Прямой URL: https://vs-blog-vsokovnin.amvera.io/
- Продакшен: https://sokovnin.me/blog/

### Архитектура роутинга

```
sokovnin.me (Cloudflare Worker)
  ├─ /blog/* → Amvera (vs-blog-vsokovnin.amvera.io)
  └─ /* → Tilda (sokovnin.tilda.ws)
```

Cloudflare Worker убирает `/blog` из пути перед проксированием на Amvera.

### Важно

- **Не использовать внешние изображения** (pixabay, unsplash) — сеть Amvera блокирует доступ при сборке
- Локальные изображения класть в `src/assets/images/`
- Dockerfile и nginx.conf уже настроены, менять не нужно

### Если сборка упала

1. Amvera → проект → "Лог сборки"
2. Частая причина: внешние URL изображений в Astro-компонентах
3. Fallback: вернуть Cloudflare Worker на Vercel (`vs-blog-five.vercel.app`)