var gulp = require('gulp'),
    sass = require('gulp-sass'),
    sourcemaps = require('gulp-sourcemaps'),
    webserver = require('gulp-webserver');

    gulp.task('sass', function() {
      return gulp.src('./source/styles/styles.sass')
              .pipe(sourcemaps.init())
              .pipe(sass(outputStyle: 'expanded').on('error', function() {
                console.log('There was an error processing the sass');
              }))
              .pipe(sourcemaps.write())
              .pipe(gulp.dest('./build/styles/styles.css'));
    });

    gulp.task('watch', function() {
      gulp.watch('build/js/**/*', ['js']);
      gulp.watch('source/styles/*');
    });

    gulp.task('webserver', function() {
      gulp.src('build/')
      .pipe(webserver({
        livereload: true,
        open: true
      }));
    });

    gulp.task('default', ['watch', 'sass', 'webserver']);
