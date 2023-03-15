const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
// 合并css
const yaml = require('yaml')

const path = require('path');
const { webpack } = require('webpack');
const dotenv = require('dotenv').config()
console.log(process.env.NODE_ENV)

module.exports = {

    entry: {
        index: {
            import: './src/index.js',
            dependOn: 'shared'
        },
        shared: 'react'
        //与最后的 splitChunks 类似
    },
    output: {
        filename: "[name].bundle.js",
        path: path.resolve(__dirname, './dist'),
        clean: true,
        assetModuleFilename: "image/[contenthash][ext]"
    },
    mode: "production",

    plugins: [
        new HtmlWebpackPlugin({
            template: "./public/index.html",
            filename: "index.html",
            // inject: "body" 
        }),
        new MiniCssExtractPlugin({ filename: "styles/[contenthash].css" })
    ],
  
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
                generator: { filename: "image/[name][ext]" }
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
                generator: { filename: "image/[name][ext]" }
            },
            {
                test: /\.(css|less)$/,
                //type: "asset/source",
                use: [MiniCssExtractPlugin.loader, "css-loader"],
                generator: { filename: "styles/[name][ext]" }
            },
        ]
    },
    optimization: {
        minimizer: [
            new CssMinimizerPlugin() //需要把mode 改成production
        ],
        splitChunks: {
            chunks: "all"
        }
    },
    resolve: {
        extensions: [".ts", ".js"],
    }
}