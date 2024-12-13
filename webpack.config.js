const path = require("path");

module.exports = {
    entry: "./lib/pdf.mjs",
    output: {
        filename: "pdf.js",
        path: path.resolve(__dirname, "lib"),
    },
    module: {
        rules: [
            {
                test: /\.mjs$/,
                include: /lib/,
                type: "javascript/auto",
                use: {
                    loader: "babel-loader",
                    options: {
                        presets: ["@babel/preset-env"],
                    },
                },
            },
        ],
    },
    resolve: {
        extensions: [".js", ".mjs"],
    },
};
