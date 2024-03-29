/** Stories */
export interface Story {
  title: Record<string, string>;
  slug: string;
  duration: string;
  country: string;
}

/* ENUMS */
export enum Platform {
  KIOSK = 'kiosk',
  WEB = 'web',
}
