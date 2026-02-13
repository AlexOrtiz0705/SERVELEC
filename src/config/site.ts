// Site configuration
export const SITE = {
  title: 'AstroFlow',
  description: 'Leading provider of optimized logistics and manufacturing solutions with state-of-the-art facilities and industry expertise.',
  url: 'https://yourdomain.com',
  author: 'AstroFlow',
} as const;

export const NAVIGATION = [
  { name: 'Inicio', href: '/' },
  { name: 'Capacidades', href: '/capabilities' },
  { name: 'Casos de Uso', href: '/use-cases' },
  { name: 'Instalaciones', href: '/facilities' },
  { name: 'Solicitar Cotizacion', href: '/rfq' },
  { name: 'Documentacion', href: '/documentation' },
] as const;

export const SOCIAL_LINKS = {
  linkedin: 'https://linkedin.com/company/yourcompany',
  twitter: 'https://twitter.com/yourcompany',
  facebook: 'https://facebook.com/yourcompany',
} as const;

