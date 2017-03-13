var gulp = require('gulp'),
    webserver = require('gulp-webserver');

gulp.task('watch', function() {
  gulp.watch('assets/js/**/*.js');
  gulp.watch(['assets/css/**/*.css']);
  gulp.watch('*.html');
});

gulp.task('webserver', function() {
    gulp.src('')
        .pipe(webserver({
            livereload: true,
            open: true
        }));
});

gulp.task('default', ['watch','webserver']);
