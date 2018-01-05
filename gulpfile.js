// Dependencies
const argv = require('yargs').argv
const concat = require('gulp-concat');
const debug  = require('gulp-debug');
const gulp   = require('gulp');
const eslint = require('gulp-eslint');
const uglify = require('gulp-uglify');

// File definitions
const buildFiles = [
    './node_modules/prismjs/components/prism-core.js',
    './src/nsis.js',
];

const lintFiles = [
    './src/*.js'
];

const options = {
    output: {
        comments: /^!/
    }
};

// Build custom PrismJS version with NSIS
gulp.task('build', (done) => {
    // Include INI highlighter
    if (argv.ini === true) {
        buildFiles.push('./node_modules/prismjs/components/prism-ini.js');
    }

    buildFiles.push('./node_modules/prismjs/plugins/file-highlight/prism-file-highlight.js');

    gulp.src(buildFiles)
        .pipe(uglify(options))
        .pipe(concat('prism.pack.js'))
        .pipe(gulp.dest('dist'));
    done();
});

// Lint JavaScript files
gulp.task('lint', (done) => {
    gulp.src(lintFiles)
        .pipe(debug({title: 'eslint:'}))
        .pipe(eslint())
        .pipe(eslint.format())
        .pipe(eslint.failAfterError());
    done();
});
