const WebpackPwaManifest = require('webpack-pwa-manifest');
const path = require('path');

const config = {
	entry: {
		app: './assets/js/index.js',
		favorites: './assets/js/favorites.js',
		topic: './assets/js/topic.js'
	},
	output: {
		path: __dirname + '/dist',
		filename: '[name].bundle.js'
	},
	mode: 'development',
	module: {
		rules: [
			{
				test: /\.js$/,
				exclude: /node_modules/,
				use: {
					loader: 'babel-loader',
					options: {
						presets: [ '@babel/preset-env' ]
					}
				}
			}
		]
	},
	plugins: [
		new WebpackPwaManifest({
			name: 'Budget-Tracker-PWA',
			short_name: 'Budget Tracker',
			description: 'App designed to track spending and income',
			background_color: '#01579b',
			theme_color: '#ffffff',
			'theme-color': '#ffffff',
			start_url: '/',
			icons: [
				{
					src: path.resolve('assets/images/icons/android-chrome-192x192.png'),
					sizes: [ 192, 512 ],
					destination: path.join('icons')
				}
			]
		})
	]
};

module.exports = config;
