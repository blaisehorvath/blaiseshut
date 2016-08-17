/* eslint no-undef: 0, quotes: 0, indent: 0 */
/* Grabbing gulp packages*/

var gulp = require('gulp'),
    babel = require('gulp-babel'),
    server = require('gulp-develop-server'),
    browserify = require('gulp-browserify'),
    plumber = require('gulp-plumber'),
    livereload = require('gulp-livereload'),
    sass = require('gulp-sass');

var sources = {
    server: "src/server/*",
    css: "src/public/css/styles.scss",
    components: "src/public/components/*",
    publicScripts: "src/public/js/*",
    reducers: "src/public/reducers/*",
    containers: "src/public/containers/*",
    pages: "src/public/pages/*"
};

//copying css files
gulp.task('compile_css', function () {
    return gulp.src(sources.css)
        .pipe(sass.sync().on('error', sass.logError))
        .pipe(plumber())
        .pipe(gulp.dest('build/public/css/'))
});

//copying reducer files
gulp.task('copy_reducers', function () {
    return gulp.src(sources.reducers)
        .pipe(plumber())
        .pipe(babel())
        .pipe(gulp.dest('build/public/reducers'));
});

//copying components
gulp.task('copy_components', function () {
    return gulp.src(sources.components)
        .pipe(plumber())
        .pipe(babel())
        .pipe(gulp.dest('build/public/components'));
});
//copying containers
gulp.task('copy_containers', function () {
    return gulp.src(sources.containers)
        .pipe(plumber())
        .pipe(babel())
        .pipe(gulp.dest('build/public/containers'));
});
//copying pages
gulp.task('copy_pages', function () {
    return gulp.src(sources.pages)
        .pipe(plumber())
        .pipe(babel())
        .pipe(gulp.dest('build/public/pages'));
});

//copying public js files
gulp.task('copy_public_js', function () {//TODO: Why these files are even copied to public??
    return gulp.src('./src/public/js/*')
        .pipe(plumber())
        .pipe(babel())
        .pipe(gulp.dest('build/public/js/'));
});

gulp.task('browserify', ['copy_public_js', 'copy_components', 'copy_containers', 'copy_reducers', "copy_pages"], function () {
    "use strict";
    return gulp.src('build/public/js/{script.js,scriptAdmin.js,frontEnd.js}')
        .pipe(plumber())//TODO: Why double plumber?
        .pipe(browserify({
            insertGlobals: true
        }))
        .pipe(gulp.dest('build/private/js/'))
});

//building the server
gulp.task('build_server', function () {
    return gulp.src('src/server/*.{js,jsx}')
        .pipe(plumber())
        .pipe(babel())
        .pipe(gulp.dest('build/server/'))
});
//Moving the credentials
gulp.task('move_creds', function () {
    return gulp.src('src/server/*.{key,pem}')
        .pipe(gulp.dest('build/server/'))
});

gulp.task('reload_css', function () {
    return gulp.src(sources.css)
        .pipe(sass.sync().on('error', sass.logError))
        .pipe(plumber())
        .pipe(gulp.dest('build/public/css/'))
        .pipe(livereload());
});

gulp.task( 'server:start',  ['compile_css', 'browserify', 'build_server', 'move_creds'] , function() {
    server.listen( {path: 'build/server/server.js'}, livereload.listen );
});

gulp.task('default', ['server:start'], function () {

    function restart( file ) {
        server.changed( function( error ) {
            if( ! error ) livereload.changed( file.path );
        });
    }

    gulp.watch( ['src/server/*' , 'src/public/?(actions|components|containers|js|pages|reducers)/!(___jb_tmp___)'] ).on( 'change', restart );
    gulp.watch([sources.css], ['reload_css']);

});