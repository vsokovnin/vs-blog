import { getPermalink, getBlogPermalink, getAsset } from './utils/permalinks';

export const headerData = {
  links: [
    {
      text: 'Главная',
      href: 'https://sokovnin.me',
    },
    {
      text: 'Блог',
      href: getBlogPermalink(),
    },
  ],
  actions: [{ text: 'Связаться', href: 'https://t.me/vsokovnin', target: '_blank' }],
};

export const footerData = {
  links: [],
  secondaryLinks: [],
  socialLinks: [
    { ariaLabel: 'Telegram', icon: 'tabler:brand-telegram', href: 'https://t.me/vsokovnin' },
    { ariaLabel: 'RSS', icon: 'tabler:rss', href: getAsset('/rss.xml') },
  ],
  footNote: `
    © ${new Date().getFullYear()} Виктор Соковнин · Все права защищены.
  `,
};
