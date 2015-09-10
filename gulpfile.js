/* Grabbing gulp packages*/

var gulp  = require('gulp');
var gutil = require('gulp-util');
var babel = require('gulp-babel');
var server = require('gulp-develop-server');

//building the server
gulp.task('build_server', function(){
   return gulp.src('src/server.js').pipe(babel()).pipe(gulp.dest('build'));
});

//copying css files
gulp.task('copy_css', function(){
      return gulp.src('src/css/own.css').pipe(gulp.dest('build/static/css/'));
});

//copying views
gulp.task('copy_views', function(){
   return gulp.src('src/views/*.jsx').pipe(gulp.dest('build/views'));
});

//copying layouts
gulp.task('copy_layouts', function(){
      return gulp.src('src/views/layouts/*.jsx').pipe(gulp.dest('build/views/layouts'));
});

// run server
gulp.task( 'server:start', function() {
    server.listen( { path: 'build/server.js' } );
    //if server.js if changed it's built again and the server is restarted
    gulp.watch( ['src/server.js'], ['build_server', server.restart]);
    //if any of the views changed, the old views are overwritten and the server is restarted
    gulp.watch( ['src/views/*.jsx'], ['copy_views', server.restart]);
    gulp.watch( ['src/views/layouts/*.jsx'], ['copy_layouts', server.restart]);
    gulp.watch( ['src/css/own.css'], ['copy_css', server.restart]);
});

// restart server if app.js changed
gulp.task( 'server:restart', function() {
    gulp.watch( [ 'src/server.js' ], server.restart );
});

gulp.task('default', ['build_server', 'copy_views', 'copy_layouts', 'copy_css', 'server:start']);
