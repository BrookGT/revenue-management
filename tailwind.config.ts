import type { Config } from "tailwindcss";

export default {
    content: [
        "./pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./components/**/*.{js,ts,jsx,tsx,mdx}",
        "./app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    plugins: [require("daisyui")],
    daisyui: {
        themes: [
            {
                mytheme: {
                    primary: "#f100ff",
                    secondary: "#00d442",
                    accent: "#0089dc",
                    neutral: "#260f00",
                    "base-100": "#edffff",
                    info: "#51a8ff",
                    success: "#00ca9f",
                    warning: "#ff911a",
                    error: "#ff3652",
                    body: {
                        bg: "#e3e6e6",
                    },
                },
            },
        ],
    },
} satisfies Config;
