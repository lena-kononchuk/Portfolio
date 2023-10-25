
import gulp from 'gulp';
import ghPages from 'gulp-gh-pages';

function deploy() {
   return gulp.src('./dist/**/*')
      .pipe(ghPages());
}

export { deploy, gulp };