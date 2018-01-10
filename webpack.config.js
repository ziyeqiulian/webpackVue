var path = require('path');
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: __dirname + '/index.js',
    output: {
        path: __dirname + '/output',
        //publicPath: 'static/',
        filename: 'bundle.js'
        //chunkFilename: '[id].[chunkhash].js'
    },
    devServer: {
        //本地服务器所加载的页面所在的目录
        contentBase: "./output",
        //不跳转
        historyApiFallback: true,
        //实时刷新
        inline: true,
        //热部署
        hot:true
    },
    resolve: {
        extensions: ['*', '.js', '.vue'],
        alias: {
            'Vue': 'vue/dist/vue.js'
        }
    },
    module: {

        loaders: [
            {
                test: /\.vue$/,
                use : {
                    loader: 'vue-loader'
                }
            },
            // {
            //     test: /\.js$/,
            //     loader: 'babel-loader?presets=es2015',
            //     exclude: /node_modules/
            // },
            {
                test: /(\.jsx|\.js)$/,
                use : {
                    loader: "babel-loader",
                    options: {
                        presets: [
                            "env", "react"
                        ]
                    }
                },
                exclude: /node_modules/
            },
            {
                test: /\.css$/,
                use : [
                    {
                        loader: "style-loader"
                    },
                    {
                        loader: "css-loader",
                        options: {
                            // 指定启用css modules
                            modules: true, 
                            // 指定css的类名格式
                            localIdentName: '[name]__[local]--[hash:base64:5]'
                        }
                    },
                    {
                        loader: "postcss-loader"
                    }
                ]
            }

        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            filename: './index.html',
            template: './index.html',
            inject: true
        })
    ]
};
