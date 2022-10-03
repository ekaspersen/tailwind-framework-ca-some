const path = require("path");
export default {
    root: path.resolve(__dirname, "src"),
    server: { port: 8080, hot: true },
    build: {
        rollupOptions: {
            input: {
                home: path.resolve(__dirname, "index.html"),
                pfp: path.resolve(__dirname, "pfp.html"),
                feed: path.resolve(__dirname, "feed.html"),
            },
        },
    },
};
