// vue.config.js

/**
 * @type {import('@vue/cli-service').ProjectOptions}
 */
 module.exports = {
   transpileDependencies: ['/node_modules/vue/dist/'],
   publicPath: process.env.NODE_ENV === 'production'
    ? '/portfolio/'
    : '/'
 }