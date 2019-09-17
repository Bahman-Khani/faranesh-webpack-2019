const commonWebpack = require("./webpack.common.js");
const merge = require("webpack-merge");
const path = require("path");

module.exports= merge( commonWebpack , {
	mode: "development",
	output: {
		path:path.resolve(__dirname , "dist"),
		filename: "js/[name].js"
	},
	module:{
		rules:[
			{
				test: /\.css$/,
				use:[
					"style-loader",
					"css-loader"
				]
			},
			{
				test:/\.s[a,c]ss$/,
				use:[
					"style-loader",
					"css-loader",
					"sass-loader"
				]
			},
			{
				test: /\.(png|gif|jpe?g|svg)$/,
				use:[
					{
						loader: "file-loader",
						options:{
							name: "img/[name].[ext]"
						}
					},
				]
			}



		]
	},
	devtool: "source-map",
	devServer:{
		contentBase: path.resolve(__dirname , "dist"),
		port : 8080
	}



})