var gulp = require('gulp');

gulp.task('transfer', function() {
  return gulp.src('../../mavensmate/the-current-project-you-are-working-on/src/aura/**')
    .pipe(gulp.dest('./markup/'));
});
