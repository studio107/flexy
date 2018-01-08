const Encore = require('@symfony/webpack-encore');

Encore
    .setOutputPath('release/')
    .setPublicPath('/')
    .cleanupOutputBeforeBuild()
    .enableSourceMaps(!Encore.isProduction())
    .enableVersioning(false)
    .addStyleEntry('flexy', './assets/flexy.scss')
    .enablePostCssLoader()
    .enableSassLoader(config => {
        config.includePaths = ['./flexy']
    });

module.exports = Encore.getWebpackConfig();
