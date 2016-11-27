var gulp = require('gulp'),
    livereload = require('gulp-livereload'),
    plumber = require('gulp-plumber'),
    jslint = require('gulp-jslint')


livereload.listen();
gulp.task('watch', function()
{
    gulp.watch('js/*.js', ['jsLint']);
});

gulp.task('jsLint', function()
{
    gulp.src('js/resumeBuilder.js')
        .pipe(plumber())
        .pipe(jslint({ devel:true }))
        .pipe(jslint.reporter('stylish'))
        .pipe(livereload());
});
