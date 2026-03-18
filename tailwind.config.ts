import type { Config } from 'tailwindcss'

const config: Config = {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                background: "#111010",
                foreground: "#fafafa",
                primary: {
                    DEFAULT: "#FF7F50", // Orange Action
                    foreground: "#ffffff",
                },
                accent: {
                    amber: "#FF7F50",
                    steel: "#1E3A8A", // Dark Blue
                },
                border: "rgba(255,255,255,0.08)",
            },
            fontFamily: {
                sans: ["Inter", "sans-serif"],
                display: ["Bebas Neue", "sans-serif"],
            },
        },
    },
    plugins: [],
}

export default config