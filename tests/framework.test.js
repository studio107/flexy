const path = require('path')
const sassTrue = require('sass-true')

const importer = require('./importer')

sassTrue.runSass(
    {
        importer: importer,
        file: path.join(__dirname, 'framework.test.scss'),
    },
    describe,
    it
)
