const path = require("path");
export default {
    root: path.resolve(__dirname, "src"),
    server: { port: 8080, hot: true },
    build: {
        rollupOptions: {
            input: {
                home: path.resolve(__dirname, "src/index.html"),
                pfp: path.resolve(__dirname, "src/pfp.html"),
                login: path.resolve(__dirname, "src/login.html"),
                signup: path.resolve(__dirname, "src/register.html"),
            },
        },
    },
};
