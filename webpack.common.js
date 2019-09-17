const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');


module.exports = {
	entry: {
		main: "./index.js"
	},
	module:{
		rules:[
			{
				test:/\.js$/ ,
				use: [
					{
						loader: "babel-loader",
						options:{
							presets: ["@babel/preset-env"]
						}
					}
				]
			},
			{
				test: /\.html$/,
				use:[
					{
						loader: "html-loader",
						options: {
							interpolate: true
						}
					}
				]
			},
		]
	},
	plugins:[
		new CleanWebpackPlugin({
			verbose: true
		}),
		new HtmlWebpackPlugin({
			template: "./src/index.html",
			filename: "index.html"
		}),
	],
	externals:[
		
	],
	optimization:{
		runtimeChunk: "single",
		splitChunks:{
			chunks: "all"
		}
	},
}