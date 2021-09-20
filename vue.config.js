// vue.config.js

/**
 * @type {import('@vue/cli-service').ProjectOptions}
 */
 module.exports = {
   transpileDependencies: ['/node_modules/vue/dist/'],
   pages: {
    index: {
      // entry for the page
      entry: 'src/main.js',
      title: 'Olena Kokhan Design',
    },
  }
 }
