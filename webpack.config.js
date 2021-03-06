
    module.exports = {
        entry: __dirname + "/src/js/main.js",//已多次提及的唯一入口文件
        output: {
            path: __dirname + "/assets/js",//打包后的文件存放的地方
            filename: "bundle.js"//打包后输出文件的文件名
        },
        devtool: 'null',
        module: {
            rules: [
                {
                    test: /(\.jsx|\.js)$/,
                    use: {
                        loader: "babel-loader",
                        options: {
                            presets: [
                                "env"
                            ]
                        }
                    },
                    exclude: /node_modules/
                },
                {
                    test: /\.css$/,
                    use: [
                        {
                            loader: "style-loader"
                        }, {
                            loader: "css-loader"
                        }
                    ]
                },
                {  
                    test:/\.ttf$/,  
                    use: [  
                             {  
                                loader: "url-loader",  
                                options: {  
                                    limit:50000,   //小于50K的 都打包  
                                    name:"[name].[ext]",  
                                    publicPath:"font/", 
                                    outputPath:"../font"
                                }  
                             }  
                    ]  
                },
                {
                    test: /\.(png|jpg)$/,
                    loader: 'url-loader?limit=8192&name=../images/[hash:8].[name].[ext]'
                }
            ]
        },
        externals: {
            jquery: 'jQuery.noConflict()' //或者jquery:'jQuery'
        }
    };