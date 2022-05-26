const
    {src, dest, watch, parallel, series} = require('gulp'),
    prefixer = require('gulp-autoprefixer'),
    uglify = require('gulp-uglify'),
    fileinclude = require('gulp-file-include')
    ;

const PATH = {
    build: { //Тут мы укажем куда складывать готовые после сборки файлы
        html: 'dist/',
        js: 'dist/js/',
        css: 'dist/css/',
        img: 'dist/img/',
        fonts: 'dist/fonts/'
    },
    src: { //Пути откуда брать исходники
        html: 'src/*.html', //Синтаксис src/*.html говорит gulp что мы хотим взять все файлы с расширением .html
        js: 'main_page/front_src/js/*.js',
        style: 'main_page/front_src/sass/*.scss',
        img: 'main_page/front_src/img/**/*.*', //Синтаксис img/**/*.* означает - взять все файлы всех расширений из папки и из вложенных каталогов
        fonts: 'main_page/front_src/fonts/**/*.*'
    },
    watch: { //Тут мы укажем, за изменением каких файлов мы хотим наблюдать
        // html: 'public/index.html',
        js: 'main_page/front_src/js/**/*.js',
        style: 'main_page/front_src/sass/**/*.scss',
        img: 'main_page/front_src/img/**/*.*',
        fonts: 'main_page/front_src/fonts/**/*.*'
    }
};

exports.buildhtml = function() {
  return src(PATH.src.html)
    .pipe(fileinclude({
      prefix: '@@',
      basepath: '@file'
    }))
    .pipe(dest(PATH.build.html));
};
