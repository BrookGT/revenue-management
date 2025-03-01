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
                light: {
                    primary: "#1E40AF",
                    secondary: "#4F46E5",
                    accent: "#FACC15",
                    neutral: "#1E293B",
                    "base-100": "#F9FAFB",
                    info: "#3B82F6",
                    success: "#22C55E",
                    warning: "#F59E0B",
                    error: "#EF4444",
                },
                dark: {
                    primary: "#4F46E5",   // Purple
                    secondary: "#1E40AF", // Deep Blue
                    accent: "#FACC15",    // Gold
                    neutral: "#121212",   // True Dark
                    "base-100": "#181818", // Dark Gray
                    info: "#60A5FA",
                    success: "#22C55E",
                    warning: "#F59E0B",
                    error: "#EF4444",
                },
            },
        ],
    },
} satisfies Config;
