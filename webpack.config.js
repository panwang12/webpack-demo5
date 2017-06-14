var htmlWebpackPlugin=require("html-webpack-plugin");
var webpack=require("webpack");
module.exports={
	entry:"./src/app.js",
	output:{
		path:__dirname+"/dist",
		filename:"js/bundle-[name].js"
	},
	module:{
		loaders:[
			{
				test:/\.js$/,
				loader:"babel-loader",
				query:{
					presets:["latest"]
				}
			}
		],
		rules: [{
        test: /\.css/,
		use: [{
				loader:'style-loader'
			  },
			  {
				loader:'css-loader'
			  },
			  { loader: 'postcss-loader',
				options: {plugins: function () {return [require('autoprefixer')];}}}
			  ]
		}]
	},
	plugins:[
		new htmlWebpackPlugin({
			template:"index.html",
			filename:"index.html",
			title:"第一页",
			inject:"body"
		})

	]
}