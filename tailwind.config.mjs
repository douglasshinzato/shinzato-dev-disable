/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      backgroundImage: {
        background: "url('/background.webp')",
      },
    },
  },
  plugins: [require("tailwind-scrollbar-hide")],
}
