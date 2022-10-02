/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{html,js}"],
    theme: {
        colors: {
            primary: {
                light: "#D16A95",
                DEFAULT: "#98506E",
                dark: "#5F3547",
            },
            clr: {
                white: "#FFF",
                black: "#000",
                transparent: "transparent",
            },
        },
        extend: {
            flex: {
                2: "1.5 1.5 0%",
            },
        },
    },
    plugins: [],
};
