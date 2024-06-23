import type { Defined } from '@xenopomp/advanced-types';
import type { Config } from 'tailwindcss';

type Theme = Defined<Defined<Config['theme']>['extend']>;

/**
 * This theme is **default**.
 */
export const lightTheme = {
  colors: {
    primary: '#F7F7F8',
    foreground: '#FFFFFF',
    'nav-highlight': '#22C55E',
    'project-preview-primary': '#724AE4',
    highlight: '#2678C2',
    'highlight-font': '#FFFFFF',
    'social-media-bg': '#E1E1E1',
    'social-media-icon': '#5E5E5E',
    'social-media-icon-inactive': '#7B7979',
    'font-primary': '#000000',
    'font-secondary': '#757575',
    'font-third-rate': '#585555',
    'btn-primary': '#000000',
    'btn-secondary': '#FFFFFF',
    'footer-primary': '#000000',
    'footer-secondary': '#FFFFFF',
    'tooltip-bg': '#000000',
    'tooltip-font': '#FFFFFF',
    'og-tag-next-primary': '#000000',
    'og-tag-next-secondary': '#FFFFFF',
  },
} satisfies Theme;
