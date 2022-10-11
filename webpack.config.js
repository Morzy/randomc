const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
// 合并css
const yaml = require('yaml')

const path = require('path');

module.exports = {

    entry: './src/index.js',
    output: {
        filename: "bundle.js",
        path: path.resolve(__dirname, './dist'),
        clean: true,
        assetModuleFilename: "image/[contenthash][ext]"
    },
    mode: "development",

    plugins: [
        new HtmlWebpackPlugin({
            template: "./public/index.html",
            filename: "app.html",
            // inject: "body" 
        }),
        new MiniCssExtractPlugin({ filename: "styles/[contenthash].css" })
    ],
    devServer: {
        static: "./dist",
        hot: true,
        proxy: {
            '/app.html': {
                target: 'http://localhost:8080',
                pathRewrite: { '^/app.html': '/home' },
            },
        }
    },

    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env']
                    }
                }
            },
            {
                test: /\.png$/,
                type: "asset/resource",
                generator: { filename: "image/[contenthash][ext]" }
            },
            {
                test: /\.svg$/,
                type: "asset/inline",
                //generator: { filename: "image/[contenthash][ext]" }
            },
            {
                test: /\.text$/,
                type: "asset/source",
                //generator: { filename: "image/[contenthash][ext]" }
            },
            {
                test: /\.yaml$/,
                type: "json",
                parser: {
                    parse: yaml.parse
                }
            },
            {
                test: /\.(jpg|ico)$/,
                type: "asset",
                //默认继承output assetModuleFilename
                parser: {
                    dataUrlCondition: {
                        maxSize: 4 * 1024
                    }
                },
                generator: { filename: "image/[contenthash][ext]" }
            },
            {
                test: /\.(css|less)$/,
                //type: "asset/source",
                use: [MiniCssExtractPlugin.loader, "css-loader"]
                //generator: { filename: "image/[contenthash][ext]" }
            },
        ]
    },
    optimization: {
        minimizer: [
            new CssMinimizerPlugin() //需要把mode 改成production
        ]
    }
}