var gulp = require('gulp');
var livereload = require('gulp-livereload');
var plumber = require('gulp-plumber');
var jslint = require('gulp-jslint');


livereload.listen();
gulp.task('watch', function()
{
    gulp.watch('js/*.js', ['jsLint']);
});

gulp.task('jsLint', function()
{
    gulp.src('js/resumeBuilder.js')
        .pipe(plumber())
        .pipe(jslint({ 
        	devel:true, 
        	browser:true
        }))
        .pipe(jslint.reporter('stylish'))
        .pipe(livereload());
});
