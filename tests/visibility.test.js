const path = require('path')
const sassTrue = require('sass-true')
const importer = require('./importer')

sassTrue.runSass(
    {
        importer: importer,
        file: path.join(__dirname, 'visibility.test.scss'),
    },
    describe,
    it
)
