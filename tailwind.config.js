/** @type {import('tailwindcss').Config} */
export default {
    content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
    theme: {
        extend: {
            screens: {
                sm: {min: "360px", max: "480px"},

                md: {min: "480px", max: "768px"},

                lg: {min: "768px", max: "960px"},

                xl: {min: "960px", max: "1024px"},

                "2xl": {min: "1024px"},
            },
        },
    },
    plugins: [],
};
