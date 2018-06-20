var gulp = require('gulp');
var browserSync = require('browser-sync').create();
var sass = require('gulp-sass');
var cleanCSS = require('gulp-clean-css');
var reload = browserSync.reload;
var refresh = browserSync.reload({ stream: true });

var src = {
    scss: './**/*.scss',
    customCss: './**/*.css',
    html: './**/*.html',
    js: './**/*.js',
};

// Static Server + watching scss/html files
gulp.task('serve', function() {
    browserSync.init({
        // server: './app'
         //proxy: "http://ubuy.test/user/address"
        server: './javascript'
    });

    gulp.watch(src.customCss).on('change', reload);
    gulp.watch(src.html).on('change', reload);
    gulp.watch(src.js).on('change', reload);
});

// Compile sass into CSS
gulp.task('scss', function() {
    return gulp
        .src(src.scss)
        .pipe(sass().on('error', sass.logError))
        .pipe(cleanCSS())
        .pipe(gulp.dest(src.css))
        .pipe(reload({ stream: true }));
});

// gulp.task('css', function() {
//     return gulp
//         .src(src.customCss)
//         .pipe(gulp.dest(src.css))
//         .pipe(reload({ stream: true }));
// });

gulp.task('default', ['serve']);
