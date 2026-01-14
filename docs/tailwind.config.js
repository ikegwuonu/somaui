// This is ONLY for IntelliSense, Tailwind v4 doesn't use it
export default {
  content: [
    './src/**/*.{js,jsx,ts,tsx,md,mdx,css}',
    './docs/**/*.{md,mdx}',
    './blog/**/*.{md,mdx}',
    './static/**/*.html',
  ],
  // Add common classes for IntelliSense
  theme: {
    extend: {
      colors: {
        primary: '#2563eb',
        secondary: '#7c3aed',
        // Add more colors as needed
      },
    },
  },
};
