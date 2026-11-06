// Same order as `t[lang].services.items` in i18n.ts (Sito Web, App, Lavagna elettronica, Soluzione su misura).
export const SERVICE_KEYS = ["web", "app", "screen", "custom"] as const;
export type ServiceKey = (typeof SERVICE_KEYS)[number];
