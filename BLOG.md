# Блог sokovnin.me — Центр управления

> Единая точка входа для работы со всеми материалами блога.

### Как использовать этот файл

**Что это:** Центральный хаб для всех операций с блогом — написание, публикация, поиск материалов.

**Когда открывать:**
- Начинаешь работу над статьёй → смотри "Быстрый старт"
- Забыл где лежит материал → смотри "Где лежат материалы"
- Хочешь узнать статус серии → смотри "Статус материалов"
- Работаешь с Claude → используй команды из раздела "Команды для Claude"

**Ключевые разделы:**
| Раздел | Для чего |
|--------|----------|
| Быстрый старт | Выбрать задачу и перейти к нужному стандарту |
| Workflow | Визуальная схема процесса от идеи до production |
| Где лежат материалы | Все ссылки на папки с черновиками и готовыми статьями |
| Статус материалов | Что опубликовано, что в работе |
| Команды для Claude | Готовые промпты для типичных задач |

---

## Быстрый старт: Что делаешь?

| Задача | Команда для Claude | Документ |
|--------|-------------------|----------|
| **Пишу статью** | "пишу статью про X" | → [BLOG_WRITING_RULES.md](../../content/projects/sokovnin-me/BLOG_WRITING_RULES.md) |
| **Пишу серию** | "планирую серию X" | → [SERIES_HOWTO.md](../../content/projects/sokovnin-me/Marketing/Blog/Series/Methodology/SERIES_HOWTO.md) |
| **Публикую в блог** | "публикую статью X" | → [PUBLISHING_STANDARD.md](./docs/PUBLISHING_STANDARD.md) |
| **Ищу материал** | — | См. раздел "Где лежат материалы" ниже |

---

## Workflow: от идеи до production

```
┌─────────────────────────────────────────────────────────────────┐
│                         НАПИСАНИЕ                                │
├─────────────────────────────────────────────────────────────────┤
│                                                                  │
│   Единичная статья              Серия статей                    │
│   ─────────────────             ────────────────                │
│   BLOG_WRITING_RULES.md    →    SERIES_HOWTO.md                 │
│         │                             │                          │
│         ▼                             ▼                          │
│   content/.../Blog/Articles/    content/.../Blog/Series/[name]/ │
│                                                                  │
│   Статус: ❌ → написание                                         │
│                                                                  │
└─────────────────────────────────────────────────────────────────┘
                              │
                              ▼
┌─────────────────────────────────────────────────────────────────┐
│                        ПУБЛИКАЦИЯ                                │
├─────────────────────────────────────────────────────────────────┤
│                                                                  │
│   docs/PUBLISHING_STANDARD.md                                   │
│         │                                                        │
│         ▼                                                        │
│   Шаг 1. Создать .mdx      → src/data/post/{slug}.mdx           │
│   Шаг 2. Проверить local   → npm run dev                        │
│   Шаг 3. Собрать           → npm run build                      │
│                                                                  │
│   Статус: ❌ → 🔧 (готово к деплою)                               │
│                                                                  │
└─────────────────────────────────────────────────────────────────┘
                              │
                              ▼
┌─────────────────────────────────────────────────────────────────┐
│                          ДЕПЛОЙ                                  │
├─────────────────────────────────────────────────────────────────┤
│                                                                  │
│   Шаг 4. Задеплоить        → git add → commit → push            │
│   Шаг 5. Проверить prod    → sokovnin.me/blog/{slug}            │
│   Шаг 6. Обновить статус   → BLOG.md: 🔧 → ✅                     │
│                                                                  │
│   Статус: 🔧 → ✅ (на production)                                 │
│                                                                  │
└─────────────────────────────────────────────────────────────────┘
```

---

## Статусы материалов

| Статус | Значение |
|--------|----------|
| ❌ | Не опубликовано (только исходник или черновик) |
| 🔧 | Готово к деплою (.mdx создан, проверен на dev, не на prod) |
| ✅ | На production (sokovnin.me/blog/{slug}) |

---

## Где лежат материалы

### Исходники (черновики, в работе)

| Папка | Что внутри | Ссылка |
|-------|------------|--------|
| **Единичные статьи** | Standalone статьи | [content/.../Blog/Articles/](../../content/projects/sokovnin-me/Marketing/Blog/Articles/) |
| **Серия DTS** | Дизайн-мышление для стратегии | [content/.../Blog/Series/DTS/](../../content/projects/sokovnin-me/Marketing/Blog/Series/DTS/) |
| **Методология серий** | Правила написания серий | [content/.../Blog/Series/Methodology/](../../content/projects/sokovnin-me/Marketing/Blog/Series/Methodology/) |

### Готовые к деплою (.mdx)

| Папка | Что внутри | Ссылка |
|-------|------------|--------|
| **Astro-блог** | Готовые .mdx файлы | [src/data/post/](./src/data/post/) |

### Production

| Ссылка | Что внутри |
|--------|------------|
| [sokovnin.me/blog](https://sokovnin.me/blog) | Все опубликованные статьи |

### Правила и стандарты

| Документ | Назначение | Ссылка |
|----------|------------|--------|
| **BLOG_WRITING_RULES.md** | Правила написания статей (SEO/GEO) | [Открыть](../../content/projects/sokovnin-me/BLOG_WRITING_RULES.md) |
| **PUBLISHING_STANDARD.md** | Стандарт публикации в Astro (6 шагов) | [Открыть](./docs/PUBLISHING_STANDARD.md) |
| **SERIES_HOWTO.md** | Гайд по работе с сериями | [Открыть](../../content/projects/sokovnin-me/Marketing/Blog/Series/Methodology/SERIES_HOWTO.md) |
| **semantic-core.md** | Семантическое ядро (ключевые слова) | [Открыть](../../content/projects/sokovnin-me/semantic-core.md) |

---

## Статус материалов

### Серия DTS (Дизайн-мышление для стратегии)

| # | Статья | Исходник | MDX | Статус | Production |
|---|--------|----------|-----|--------|------------|
| 00 | Pillar | [00-pillar.md](../../content/projects/sokovnin-me/Marketing/Blog/Series/DTS/00-pillar.md) | [dts-guide.mdx](./src/data/post/dts-guide.mdx) | ✅ | [sokovnin.me/blog/dts-guide](https://sokovnin.me/blog/dts-guide) |
| 01 | Введение | [01-introduction.md](../../content/projects/sokovnin-me/Marketing/Blog/Series/DTS/01-introduction.md) | [dts-introduction.mdx](./src/data/post/dts-introduction.mdx) | ✅ | [sokovnin.me/blog/dts-introduction](https://sokovnin.me/blog/dts-introduction) |
| 02 | Обзор процесса | [02-process-overview.md](../../content/projects/sokovnin-me/Marketing/Blog/Series/DTS/02-process-overview.md) | [dts-process-overview.mdx](./src/data/post/dts-process-overview.mdx) | ✅ | [sokovnin.me/blog/dts-process-overview](https://sokovnin.me/blog/dts-process-overview) |
| 03 | Стратегический бриф | [03-strategic-brief.md](../../content/projects/sokovnin-me/Marketing/Blog/Series/DTS/03-strategic-brief.md) | [dts-strategic-brief.mdx](./src/data/post/dts-strategic-brief.mdx) | ✅ | [sokovnin.me/blog/dts-strategic-brief](https://sokovnin.me/blog/dts-strategic-brief) |
| 04 | Анализ среды | [04-environment-analysis.md](../../content/projects/sokovnin-me/Marketing/Blog/Series/DTS/04-environment-analysis.md) | [dts-environment-analysis.mdx](./src/data/post/dts-environment-analysis.mdx) | ✅ | [sokovnin.me/blog/dts-environment-analysis](https://sokovnin.me/blog/dts-environment-analysis) |
| 05 | Анализ трендов | [05-trend-analysis.md](../../content/projects/sokovnin-me/Marketing/Blog/Series/DTS/05-trend-analysis.md) | [dts-trend-analysis.mdx](./src/data/post/dts-trend-analysis.mdx) | ✅ | [sokovnin.me/blog/dts-trend-analysis](https://sokovnin.me/blog/dts-trend-analysis) |
| 06 | Стратегический фокус | [06-strategic-focus.md](../../content/projects/sokovnin-me/Marketing/Blog/Series/DTS/06-strategic-focus.md) | [dts-strategic-focus.mdx](./src/data/post/dts-strategic-focus.mdx) | ✅ | [sokovnin.me/blog/dts-strategic-focus](https://sokovnin.me/blog/dts-strategic-focus) |
| 07 | Наблюдение | [07-observation.md](../../content/projects/sokovnin-me/Marketing/Blog/Series/DTS/07-observation.md) | [dts-observation.mdx](./src/data/post/dts-observation.mdx) | ✅ | [sokovnin.me/blog/dts-observation](https://sokovnin.me/blog/dts-observation) |
| 08 | Изучение | [08-study.md](../../content/projects/sokovnin-me/Marketing/Blog/Series/DTS/08-study.md) | [dts-study.mdx](./src/data/post/dts-study.mdx) | ✅ | [sokovnin.me/blog/dts-study](https://sokovnin.me/blog/dts-study) |
| 09 | Проектирование | [09-design.md](../../content/projects/sokovnin-me/Marketing/Blog/Series/DTS/09-design.md) | [dts-design.mdx](./src/data/post/dts-design.mdx) | ✅ | [sokovnin.me/blog/dts-design](https://sokovnin.me/blog/dts-design) |
| 10 | Валидация | [10-validation.md](../../content/projects/sokovnin-me/Marketing/Blog/Series/DTS/10-validation.md) | [dts-validation.mdx](./src/data/post/dts-validation.mdx) | ✅ | [sokovnin.me/blog/dts-validation](https://sokovnin.me/blog/dts-validation) |
| 11 | Конкурентное позиционирование | [11-competition.md](../../content/projects/sokovnin-me/Marketing/Blog/Series/DTS/11-competition.md) | [dts-competition.mdx](./src/data/post/dts-competition.mdx) | ✅ | [sokovnin.me/blog/dts-competition](https://sokovnin.me/blog/dts-competition) |

### Единичные статьи

| Статья | Исходник | MDX | Статус | Production |
|--------|----------|-----|--------|------------|
| Стратегический бриф | [strategicheskiy-brief...md](../../content/projects/sokovnin-me/Marketing/Blog/Articles/strategicheskiy-brief-nachalo-razrabotki-strategii.md) | — | ❌ | — |

---

## Команды для Claude

### Написание
```
"пишу статью про [тема]"
"планирую серию про [тема]"
"продолжи статью [название]"
```

### Публикация
```
"публикую [путь к файлу]"
"проверь статью перед публикацией"
"задеплой статью [slug]"
```

### Навигация
```
"открой BLOG.md"
"покажи все статьи серии DTS"
"какие статьи не опубликованы?"
"какие статьи готовы к деплою?"
```

---

## Чеклист: Статья готова к публикации?

### Этап 1: Написание (❌ → 🔧)
- [ ] Написана по [BLOG_WRITING_RULES.md](../../content/projects/sokovnin-me/BLOG_WRITING_RULES.md)
- [ ] POST-FLIGHT тесты пройдены (16 проверок)
- [ ] .mdx создан по [PUBLISHING_STANDARD.md](./docs/PUBLISHING_STANDARD.md)
- [ ] `npm run dev` — без ошибок
- [ ] `npm run build` — успешная сборка

### Этап 2: Деплой (🔧 → ✅)
- [ ] `git add` + `git commit` + `git push`
- [ ] Страница доступна на sokovnin.me/blog/{slug}
- [ ] Статус в BLOG.md обновлён: 🔧 → ✅

---

*Последнее обновление: январь 2026*
