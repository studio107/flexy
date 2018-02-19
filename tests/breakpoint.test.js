const path = require('path')
const sassTrue = require('sass-true')
const importer = require('./importer')

sassTrue.runSass(
    {
        importer,
        file: path.join(__dirname, 'breakpoint.test.scss'),
    },
    describe,
    it
)
