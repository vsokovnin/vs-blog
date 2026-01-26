// Cloudflare Worker для роутинга sokovnin.me
// Автор: Claude Sonnet 4.5

const AMVERA_URL = 'https://vs-blog-vsokovnin.amvera.io';
const TILDA_URL = 'https://sokovnin.tilda.ws';

export default {
  async fetch(request, env, ctx) {
    const url = new URL(request.url);
    const { pathname, search } = url;

    // Роутинг для /blog/* и статичных ассетов Astro
    if (pathname.startsWith('/blog') || pathname.startsWith('/_astro')) {
      // Amvera: путь передаём как есть (блог лежит в /blog/)
      const amveraUrl = new URL(pathname + search, AMVERA_URL);

      const amveraRequest = new Request(amveraUrl, {
        method: request.method,
        headers: request.headers,
        body: request.body,
        redirect: 'manual'
      });

      const response = await fetch(amveraRequest);

      // Копируем ответ с правильными заголовками
      const newResponse = new Response(response.body, response);

      // Добавляем заголовки для кеширования
      newResponse.headers.set('Cache-Control', 'public, max-age=0, must-revalidate');

      return newResponse;
    }

    // Все остальные запросы → Tilda
    const tildaUrl = new URL(pathname + search, TILDA_URL);

    const tildaRequest = new Request(tildaUrl, {
      method: request.method,
      headers: request.headers,
      body: request.body,
      redirect: 'manual'
    });

    const response = await fetch(tildaRequest);

    return new Response(response.body, response);
  }
};
