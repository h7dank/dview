const {series, dest, src} = require('gulp')
const cleanCSS = require('gulp-clean-css')
const sass = require('gulp-sass')
const rename = require('gulp-rename')
const autoprefixer = require('gulp-autoprefixer')

function css(){
    return src('../src/styles/index.scss')
    .pipe(sass())
    .pipe(autoprefixer())
    .pipe(cleanCSS())
    .pipe(rename('dview.css'))
    .pipe(dest('../dist/styles'))
}

function fonts() {
    return src('../src/styles/common/iconfont/*.*')
        .pipe(dest('../dist/styles/fonts'));
}


exports.default = series(css, fonts)