var gulp=require("gulp");
var sass=require('gulp-sass');
gulp.task('sass',function(){
   return gulp.src("./src/sass/*.scss")
    .pipe(sass())
    .pipe(gulp.dest('./src/css/'))
})
gulp.task("default",["sass"]);