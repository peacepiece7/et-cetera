// 실제로 프로젝트를 돌리는 곳에 있는 tailwind.config.js 파일이 사용됩니다.

import typographyPlugin from '@tailwindcss/typography';
import animatePlugin from 'tailwindcss-animate';

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './src/**/*.{ts,tsx}',
    '../../packages/ui-shadcn/src/**/*.{ts,tsx}',
    '../../apps/storybook/src/**/*.{ts,tsx}',
    './**/*.stories.@(js|jsx|ts|tsx)',
  ],
  theme: {
    container: {
      center: true,
      padding: '2rem',
      screens: {
        '2xl': '1400px',
      },
    },
    screens: {
      xs: '475px',
      sm: '650px',
      md: '868px',
      lg: '1024px',
      xl: '1280px',
    },
    fontSize: {
      tiny: 'calc(var(--font-size-base) * 0.7)',
      xs: 'calc(var(--font-size-base) * 0.8)',
      sm: 'calc(var(--font-size-base) * 1.0)',
      base: 'calc(var(--font-size-base) * 1.2)',
      lg: 'calc(var(--font-size-base) * 1.25)',
      xl: 'calc(var(--font-size-base) * 1.35)',
      '2xl': 'calc(var(--font-size-base) * 1.5)',
      '3xl': 'calc(var(--font-size-base) * 1.875)',
      '4xl': 'calc(var(--font-size-base) * 2.0)',
      '5xl': 'calc(var(--font-size-base) * 2.5)',
      '6xl': 'calc(var(--font-size-base) * 3.0)',
      '7xl': 'calc(var(--font-size-base) * 3.5)',
    },
    extend: {
      colors: {
        border: 'hsl(var(--border))',
        input: 'hsl(var(--input))',
        ring: 'hsl(var(--ring))',
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        primary: {
          DEFAULT: 'hsl(var(--primary))',
          foreground: 'hsl(var(--primary-foreground))',
        },
        secondary: {
          DEFAULT: 'hsl(var(--secondary))',
          foreground: 'hsl(var(--secondary-foreground))',
        },
        destructive: {
          DEFAULT: 'hsl(var(--destructive))',
          foreground: 'hsl(var(--destructive-foreground))',
        },
        muted: {
          DEFAULT: 'hsl(var(--muted))',
          foreground: 'hsl(var(--muted-foreground))',
        },
        accent: {
          DEFAULT: 'hsl(var(--accent))',
          foreground: 'hsl(var(--accent-foreground))',
        },
        popover: {
          DEFAULT: 'hsl(var(--popover))',
          foreground: 'hsl(var(--popover-foreground))',
        },
        card: {
          DEFAULT: 'hsl(var(--card))',
          foreground: 'hsl(var(--card-foreground))',
        },
        // test
        'ui-test': {
          DEFAULT: 'hsl(var(--card))',
          foreground: 'hsl(var(--card-foreground))',
        },
      },
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)',
      },
      keyframes: {
        'accordion-down': {
          from: { height: 0 },
          to: { height: 'var(--radix-accordion-content-height)' },
        },
        'accordion-up': {
          from: { height: 'var(--radix-accordion-content-height)' },
          to: { height: 0 },
        },
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
      },
    },
  },
  plugins: [typographyPlugin, animatePlugin],
};
