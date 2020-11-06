const gulp = require("gulp");
const sass = require('gulp-sass');
const cleanCSS = require('gulp-clean-css');
sass.compiler = require('node-sass');
const rename = require("gulp-rename");
const htmlmin = require('gulp-htmlmin');
//处理静态文件
gulp.task('copy-html',function(){
    return gulp.src('*.html')
    .pipe(htmlmin({ collapseWhitespace: true ,removeComments: true}))
    .pipe(gulp.dest('dist/'))
    .pipe(connect.reload())
})
gulp.task('html',function(){
    return gulp.src('./html/*.html')
    .pipe(htmlmin({ collapseWhitespace: true ,removeComments: true}))
    .pipe(gulp.dest('dist/html'))
    .pipe(connect.reload())
})
gulp.task('images',function(){
    return gulp.src('./images/**/*.{jpg,png}')
    .pipe(gulp.dest('dist/images'))
    .pipe(connect.reload())
})
gulp.task('data',function(){
    return gulp.src(['./json/*.json','!package.json'])
    .pipe(gulp.dest('dist/data'))
    .pipe(connect.reload())
})
gulp.task('scripts',function(){
    return gulp.src(['./js/*.js','!gulpfile.js'])
    .pipe(gulp.dest('dist/js'))
    .pipe(connect.reload())
})
gulp.task('scss',function(){
    return gulp.src('./stylesheet/*')
    .pipe(sass().on('error',sass.logError))
    .pipe(gulp.dest('dist/css'))
    .pipe(cleanCSS({compatibility: 'ie8'}))
    .pipe(rename(function(path){
        path.basename += '.min'
    }))
    .pipe(gulp.dest('dist/css'))
    .pipe(connect.reload())
})
//执行所有diamante
gulp.task('build',['copy-html','html','images','data','scripts','scss'],function(){
    console.log('项目创建成功')
})
//启动监听
gulp.task('watch',function(){
    gulp.watch('*.html',['copy-html']);
    gulp.watch('./html/*.html',['html']);
    gulp.watch('*.{jpg,png}',['images']);
    gulp.watch(['*.json','!package.json'],['data']);
    gulp.watch(['js/*.js','!gulpfile.js'],['scripts']);
    gulp.watch('./stylesheet/*.scss',['scss']);
})
//启动服务器
const connect=require('gulp-connect');
gulp.task('server',function(){
    connect.server({
        root:'dist',
        port:6868,
        livereload:true
      })
})
//默认任务
gulp.task('default',['watch','server'])