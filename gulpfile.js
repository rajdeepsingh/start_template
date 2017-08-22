var gulp = require('gulp'),
    sass = require('gulp-sass'),
    sourcemaps = require('gulp-sourcemaps'),
    webserver = require('gulp-webserver');

    gulp.task('sass', function() {
      return gulp.src('./source/styles/styles.scss')
              .pipe(sourcemaps.init())
              .pipe(sass({outputStyle: 'expanded'}).on('error', function(e) {
                console.log('There was an error processing the sass' + e);
              }))
              .pipe(sourcemaps.write())
              .pipe(gulp.dest('./build/styles'));
    });

    gulp.task('watch', function() {
      gulp.watch('build/scripts/**/*');
      gulp.watch(['source/styles/**/*'], ['sass']);
    });

    gulp.task('webserver', function() {
      gulp.src('build/')
      .pipe(webserver({
        livereload: true,
        open: true
      }));
    });

    gulp.task('default', ['watch', 'sass', 'webserver']);
