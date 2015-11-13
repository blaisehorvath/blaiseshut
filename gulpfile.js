/* eslint no-undef: 0, quotes: 0, indent: 0 */
/* Grabbing gulp packages*/

var gulp  = require('gulp');
var babel = require('gulp-babel');
var server = require('gulp-develop-server');
var browserify = require('gulp-browserify');

var sources = {
    server : "src/server/server.js",
    css : "src/public/css/own.css",
    components : "src/public/components/*",
    publicScripts : "src/public/js/*",
    mainView : "src/server/*.html"
};

gulp.task('copy_index', function(){
    "use strict";
        return gulp.src(sources.mainView)
                .pipe(gulp.dest('build/server/'));
});

//copying css files
gulp.task('copy_css', function(){
        return gulp.src(sources.css)
                .pipe(gulp.dest('build/public/css/'));
});

//copying components
gulp.task('copy_components', function(){
        return gulp.src(sources.components)
              .pipe(babel())
              .pipe(gulp.dest('build/public/components'));
});

//copying public js files
gulp.task('copy_public_js', function(){
        return gulp.src('./src/public/js/*')
             .pipe(babel())
             .pipe(gulp.dest('build/public/js/'));
});

gulp.task('browserify', ['copy_public_js', 'copy_components'], function () {
        "use strict";
        return gulp.src('build/public/js/script.js')
             .pipe(browserify({
                insertGlobals : true,
                debug : !gulp.env.production
             }))
             .pipe(gulp.dest('build/public/js/'));
});

//building the server
gulp.task('build_server', function(){
        return gulp.src('src/server/*.js')
             .pipe(babel())
             .pipe(gulp.dest('build/server/'));
});


gulp.task('default', ['copy_index', 'copy_public_js', "copy_components", 'copy_css', 'build_server'], function () {
    "use strict";

    // starting the server when everything is done
    server.listen( { path: 'build/server/server.js' } );

    // watching files for changes
    gulp.watch( [sources.server], ['build_server', server.restart]);
    gulp.watch( [sources.css], ['copy_css', server.restart]);
    gulp.watch( [sources.components], ['copy_components', server.restart]);
    gulp.watch( [sources.publicScripts], ['copy_public_js', server.restart]);
    gulp.watch( [sources.mainView], ['copy_index', server.restart]);
});
