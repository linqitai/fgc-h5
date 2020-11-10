module.exports = {
	configureWebpack: (config) => {
		/* if (process.env.NODE_ENV === 'production') {
			config.optimization.minimizer[0].options.terserOptions.compress.drop_console = true
		} */
	},
	configureWebpack: {
		externals: {
			"vue":"Vue",
			"jquery":"$",
			"echarts": "echarts"
		}
	},
	// baseUrl: './',
	publicPath: './',
	productionSourceMap: false,
	devServer: {
		port: 8089,
		proxy: {
			'/fgcApp': {
				target: 'http://localhost:8003/',
				changeOrigin: true,
				pathRewrite: {
					'/fgcApp': ''
				}
			},
			/* '/ms':{
			    target: 'https://www.easy-mock.com/mock/592501a391470c0ac1fab128',
			    changeOrigin: true
			} */
		}
	}
}
