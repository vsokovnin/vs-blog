declare global {
  interface Window {
    ym?: (id: number, method: string, ...args: unknown[]) => void;
  }
}

const METRIKA_ID = 100953993;

export function trackEvent(goal: string, params?: Record<string, unknown>) {
  if (typeof window !== 'undefined' && window.ym) {
    window.ym(METRIKA_ID, 'reachGoal', goal, params);
  }
}

// Примеры использования:
// trackEvent('post_view', { post_slug: 'product-strategy-101' });
// trackEvent('category_filter', { category: 'strategy' });
// trackEvent('external_link', { url: 'https://example.com' });
// trackEvent('post_read_75', { post_slug: 'product-strategy-101' });
