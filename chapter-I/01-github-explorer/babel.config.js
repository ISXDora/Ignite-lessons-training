module.exports = {
    presets: [
        '@babel/preset-env', //identifica o ambiente para transpilar da melhro maneira
        ['@babel/preset-react', {
            runtime: 'automatic'
        }
    ]
    ],
}