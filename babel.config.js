module.exports = {
    presets: [
        "@babel/preset-env",
        '@babel/preset-typescript'
    ],
    plugins: [
        '@babel/plugin-transform-runtime',
        '@babel/plugin-proposal-class-properties',
        [ '@babel/plugin-proposal-decorators', { 'legacy': true } ],
        '@babel/plugin-transform-async-to-generator',
        '@babel/plugin-transform-arrow-functions',
        '@babel/plugin-proposal-object-rest-spread',
        '@babel/plugin-proposal-export-default-from',
    ]
}
