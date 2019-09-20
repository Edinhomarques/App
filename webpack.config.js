module.exports = {
    entry: ['@babel/polyfill','./src/index.js'],
    output:{
        path:__dirname + './public',// o caminho para onde o bundle será criado
        filename: 'bundle.js',
    },
    devServer: {
        contentBase:__dirname + '/public'
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',   
                }
            }
        ],
    },
};