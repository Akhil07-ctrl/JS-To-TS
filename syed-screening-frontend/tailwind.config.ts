import type { Config } from 'tailwindcss'

export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {},
        borderRadius: {
            "lg": "20px",
            "md": "8px",
            "full": "50px"
        }
    },
    plugins: [],
} satisfies Config
