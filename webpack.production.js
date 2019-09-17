const commonWebpack = require("./webpack.common.js");
const merge = require("webpack-merge");
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const PurifyCSSPlugin = require('purifycss-webpack');
const glob = require('glob-all');
const path = require("path");


module.exports= merge( commonWebpack , {
	mode:"production",
	output: {
		path:path.resolve(__dirname , "dist"),
		filename: "js/[name].[contenthash].js"
	},
	module:{
		rules:[
			{
				test: /\.css$/,
				use:[
					MiniCssExtractPlugin.loader,
					"css-loader"
				]
			},
			{
				test:/\.s[a,c]ss$/,
				use:[
					MiniCssExtractPlugin.loader,
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
					"image-webpack-loader"
				]
			}



		]
	},
	plugins:[
		new MiniCssExtractPlugin({
			filename: "css/[name].[contenthash].css"
		}),
		new PurifyCSSPlugin({
			paths: glob.sync([
				path.resolve(__dirname , "src/**/*.html"),
				path.resolve(__dirname , "src/**/*.js")

			])
		})

	]

})