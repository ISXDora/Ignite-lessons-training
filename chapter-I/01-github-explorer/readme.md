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
        '@babel/preset-react'
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
