const path = require('path') //Recurso que auxilia uso de barra independente do SO
const HtmlwebpackPlugin = require('html-webpack-plugin')

const isDevelopment = process.env.NODE_ENV !== 'production';

module.exports = {
    // entry:'src/index.jsx' ==> Sem o uso do path
    mode: isDevelopment ? 'development' : 'production',
    devtool: isDevelopment ? 'eval-source-map' : 'source-map',
    entry: path.resolve(__dirname, 'src', 'index.jsx'), // Arquivo de entrada
    output: {
        path: path.resolve(__dirname, 'dist'), //Arquivos convertidos
        filename: 'bundle.js'
    }, 
    plugins: [
        new HtmlwebpackPlugin({
            template: path.resolve(__dirname, 'public', 'index.html')
        })
    ],
    resolve: {
        extensions: ['.js', '.jsx'], // Arquivos que trabalham no código
    },
    devServer: {
        static: './dist',
      },
    module: { //insere as regras de tratamento 
        rules: [ // recebe um array de objetos
            { //um objeto para cada tipo de arquivo a ser tratado
                test: /\.jsx$/, // através de expressão regular caça os arquivos com essa extensão
                exclude: /node_modules/, //por padrão os arquivos cada biblioteca é responsável por seu arquivo de build, daí vamos excluir essa possibilidade.
                use: 'babel-loader' //transfere a responsabilidade do build para essa biblioteca.
            },
            {
                test: /\.scss$/, 
                exclude: /node_modules/, 
                use: ['style-loader', 'css-loader', 'sass-loader']
            },
        ]
    },
}