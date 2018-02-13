const path = require('path');
const sassTrue = require('sass-true');

function importer(url, prev, done) {
    if (url[0] === '~') {
        url = path.resolve('node_modules', url.substr(1));
    }

    return { file: url };
}

sassTrue.runSass({
    importer: importer,
    file: path.join(__dirname, 'test.scss')
}, describe, it);
