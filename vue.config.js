module.exports = {
  transpileDependencies: ['vuetify'],
  chainWebpack: config => {
        config.module
        .rule('eslint')
        .use('eslint-loader')
        .tap(opts => ({ ...opts, emitWarning: false }))
   }
}
