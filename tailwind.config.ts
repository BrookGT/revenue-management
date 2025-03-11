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
                    primary: "#1E40AF", // Blue
                    secondary: "#4F46E5", // Purple
                    accent: "#FACC15", // Yellow
                    neutral: "#1E293B", // Dark Gray
                    "base-100": "#CCD1FF", // Light Gray
                    info: "#3B82F6", // Blue
                    success: "#22C55E", // Green
                    warning: "#F59E0B", // Yellow
                    error: "#EF4444", // Red
                    
                },
                dark: {
                    primary: "#4F46E5",   // Purple
                    secondary: "#1E40AF", // Deep Blue
                    accent: "#FACC15",    // Gold
                    neutral: "#F9FAFB",   // light Gray
                    "base-100": "#454545", // Dark Gray
                    info: "#60A5FA", // Blue
                    success: "#22C55E", // Green
                    warning: "#F59E0B", // Yellow
                    error: "#EF4444", // Red
                },
            },
        ],
    },
} satisfies Config;
