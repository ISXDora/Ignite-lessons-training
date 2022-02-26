# Github Explorer 

## Resumo de estudo e principais configurações

**Iniciando o repositório**

`git init -y`

**Instalando depenências** 

`yarn add react`
`yarn add react-dom`

**Dependências de desenvolvimento para configurar o Babel**

`yarn add @babel/core @babel/cli @babel/preset-env -D`

Para que o Babel entenda o código HTML dentro do javascript.

*Para testar o código com o babel no console*
~~~javascript
yarn babel src/index.js --out-file dist/bundle
~~~

`yarn add @babel/preset-react -D`

Após adicione os presets ao arquivo de configuraçaão do Babel.

~~~javascript
module.exports = {
    presets: [
        '@babel/preset-env', //identifica o ambiente para transpilar da melhro maneira
        '@babel/preset-react', {
            runtime: 'automatic' //funciona como um auto-import da biblioteca react dentro do código.
        }
    ],
}
~~~

> Usando a sintaxe .jsx estamos sinalizando que dentro do código do componente existe código *html* no código *javascript*

**Configurando o Webpack**

`yarn add webpack webpack/cli -D`

> Webpack trata os arquivos que são importados dentro da aplicação para os arquivos estáticos entendíveis pelos browswers

~~~javascript
const path = require('path') //Recurso que auxilia uso de barra independente do SO

module.exports = {
    // entry:'src/index.jsx' ==> Sem o uso do path
    entry: path.resolve(__dirname, 'src', 'index.jsx'), // Arquivo de entrada
    output: {
        path: path.resolve(__dirname, 'dist'), //Arquivos convertidos
        filename: 'bundle.js'
    }, 
    resolve: {
        extensions: ['.js', '.jsx'], // Arquivos que trabalham no código
    },
    module: { //insere as regras de tratamento 
        rules: [ // recebe um array de objetos
            { //um objeto para cada tipo de arquivo a ser tratado
                test: /\.jsx$/, // através de expressão regular caça os arquivos com essa extensão
                exclude: /node_modules/, //por padrão os arquivos cada biblioteca é responsável por seu arquivo de build, daí vamos excluir essa possibilidade.
                use: 'babel-loader' //transfere a responsabilidade do build para essa biblioteca.
            },
        ]
    },
}
~~~

*Integrando o babel com o webpack*

`yarn add babel-loader -D`

*Config webpack para ambiente de desenvolvimento*

~~~javascript
module.exports = {
    mode:'development',
    ...
}
~~~

*Renderizando elementos/componentes em tela*

>Dentro do arquivo src/index.jsx, vamos usar a função **render** de dentro do **react-dom**.

~~~javascript
import {render} from 'react-dom'
import {App} from './App'

render(<App/>, document.getElementById('root'))
~~~

*Melhorando fluxo da aplicação*

>Instale

`yarn add html-webpack-plugin -D`

>Importe para dentro do arquivo de configuração do webpack.E insira as informações do plugin, dentro da propriedade plugin.

~~~javascript
    ,
    plugins: [
        new HtmlwebpackPlugin({
            template: path.resolve(__dirname, 'public', 'index.html')
        })
    ],
~~~

>Instale o webpack-dev-server **observa os arquivos estáticos que são alterados para fazer auto-reload**

`yarn add webpack-dev-server -D`

>Alterando arquivo de configuração:

~~~javascript
    const path = require('path')
    module.exports ={

        devServer: {
            static: './dist',
        },  
    }
~~~

*Configurando Source Maps*

>Sem o source maps configurado, ao lançar um erro é passado o código gerado através das transcrições (feitas no código moderno para o browser) e com isso mais difícil de encontrar o erro. Ao configurar o source maps, ele aponta mais facilmente em qual linha do código 'original' está.

~~~javascript 
const path = require('path')
    module.exports = {
        mode: 'development',
        devTool: 'eval-source-map',
        ... 
    }
~~~

*Ambiente de desenvolvimento X produção*

>Algumas configurações fazem mais sentido dependendo do ambiente em que a aplicação esteja rodando.

~~~javascript
const path = require('path') //caminho relativo dentro do Node.js
const HtmlwebpackPlugin = require('html-webpack-plugin')

const isDevelopment = process.env.NODE.ENV !== 'production';

module.exports = {
    mode: isDevelopment ? 'development' : 'production',
    devtool: isDevelopment ? 'eval-source-map' : 'source-map',
    ...
}
~~~

*Criando variáveis de ambiente*

>Independente do SO!

`yarn add cross-env -D`

>Altere o arquivo package.json

~~~json

"scripts": {
    "dev": "webpack serve",
    "build": "cross-env NODE_ENV = production webpack"
  }
~~~

>**Testar no console:**

`yarn dev`

*Preparar webpack para arquivos .css*

>Instalar loaders:

`yarn add style-loader css-loader -D`

>Adicionar objeto de configuração no webpack para .css 

~~~javascript 
const path = require('path');
const HtmlwebpackPlugin = require('html-webpack-plugin')

module.exports = {
    module: { //insere as regras de tratamento 
        rules: [ // recebe um array de objetos
            {
                test: /\.css$/, 
                exclude: /node_modules/, 
                use: ['style-loader', 'css-loader']
            },
        ]
    },
}
~~~

*Trabalhando com sass*

>Instale

`yarn add sass-loader -D`
`yarn add node-sass -D`

>Altere a extensão dos arquivos para .scss, no webpack, no arquivo, e na importação do arquivo.
    >>Adicione o loader 'sass-loader' ao final do array.

~~~javascript 
const path = require('path');
const HtmlwebpackPlugin = require('html-webpack-plugin')

module.exports = {
    module: { //insere as regras de tratamento 
        rules: [ // recebe um array de objetos
            {
                test: /\.scss$/, 
                exclude: /node_modules/, 
                use: ['style-loader', 'css-loader', 'sass-loader']
            },
        ]
    },
}
~~~

>**Prontinho pra começar**
