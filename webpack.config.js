/*
 * @Description:
 * @Version: 1.0.0
 * @Author: lax
 * @Date: 2023-08-09 21:55:32
 * @LastEditors: lax
 * @LastEditTime: 2023-08-09 22:22:04
 */
const path = require("path");
module.exports = {
	mode: "production",
	entry: "./src/index.js",
	output: {
		filename: "main.js",
		library: {
			name: "Nutation",
			type: "umd",
		},
		globalObject: "this",
		path: path.resolve(__dirname, "lib"),
	},
	module: {
		rules: [
			{
				test: /\.(?:js|mjs|cjs)$/,
				exclude: /node_modules/,
				use: {
					loader: "babel-loader",
					options: {
						presets: [["@babel/preset-env", { targets: "defaults" }]],
					},
				},
			},
		],
	},
};
