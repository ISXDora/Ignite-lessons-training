# Github Explorer 

## Resumo de estudo e principais configurações

** Iniciando o repositório **

`git init -y`

** Instalando depenências ** 

`yarn add react`
`yarn add react-dom`

** Dependências de desenvolvimento para configurar o Babel **

`yarn add @babel/core @babel/cli @babel/preset-env`

Para que o Babel entenda o código HTML dentro do javascript.

`yarn add @babel/preset-react`

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


