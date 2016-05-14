/* eslint no-undef: 0, quotes: 0, indent: 0 */
/* Grabbing gulp packages*/

var gulp  = require('gulp'),
    babel = require('gulp-babel'),
    server = require('gulp-develop-server'),
    browserify = require('gulp-browserify'),
    plumber = require('gulp-plumber');

var sources = {
    server : "src/server/*",
    css : "src/public/css/own.css",
    components : "src/public/components/*",
    publicScripts : "src/public/js/*",
    mainView : "src/server/view/*",
    reducers : "src/public/reducers/*",
    containers : "src/public/containers/*"
};

gulp.task('copy_index', function(){
    "use strict";
        return gulp.src(sources.mainView)
                .pipe(plumber())
                .pipe(gulp.dest('build/server/view/'));
});

//copying css files
gulp.task('copy_css', function(){
        return gulp.src(sources.css)
                .pipe(plumber())
                .pipe(gulp.dest('build/public/css/'));
});

//copying reducer files
gulp.task('copy_reducers', function(){
    return gulp.src(sources.reducers)
        .pipe(plumber())
        .pipe(babel())
        .pipe(gulp.dest('build/public/reducers'));
});

//copying components
gulp.task('copy_components', function(){
        return gulp.src(sources.components)
              .pipe(plumber())
              .pipe(babel())
              .pipe(gulp.dest('build/public/components'));
});

//copying components
gulp.task('copy_containers', function(){
    return gulp.src(sources.containers)
        .pipe(plumber())
        .pipe(babel())
        .pipe(gulp.dest('build/public/containers'));
});

//copying public js files
gulp.task('copy_public_js', function(){
        return gulp.src('./src/public/js/*')
             .pipe(plumber())
             .pipe(babel())
             .pipe(gulp.dest('build/public/js/'));
});

gulp.task('browserify', ['copy_public_js', 'copy_components', 'copy_containers', 'copy_reducers'], function () {
        "use strict";
        return gulp.src('build/public/js/script.js')
             .pipe(plumber())
             .pipe(browserify({
                insertGlobals : true
             }))
             .pipe(gulp.dest('build/public/js/'));
});

//building the server
gulp.task('build_server', function(){
        return gulp.src('src/server/*')
             .pipe(plumber())
             .pipe(babel())
             .pipe(gulp.dest('build/server/'));
});


gulp.task('default', ['copy_index', 'copy_css', 'browserify','build_server'], function () {
    "use strict";

    // starting the server when everything is done
    server.listen( { path: 'build/server/server.js' } );

    // watching files for changes
    gulp.watch( [sources.reducers], ['copy_reducers', server.restart]);
    gulp.watch( [sources.server], ['build_server', server.restart]);
    gulp.watch( [sources.css], ['copy_css', server.restart]);
    gulp.watch( [sources.containers], ['browserify', server.restart]);
    gulp.watch( [sources.components], ['browserify', server.restart]);
    gulp.watch( [sources.publicScripts], ['browserify', server.restart]);
    gulp.watch( [sources.mainView], ['copy_index', server.restart]);
});