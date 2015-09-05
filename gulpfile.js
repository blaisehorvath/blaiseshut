/* Grabbing gulp packages*/

var gulp  = require('gulp');
var babel = require('gulp-babel');
var server = require('gulp-develop-server');

gulp.task('build_server', function(){
   return gulp.src('src/server.js').pipe(babel()).pipe(gulp.dest('build'))
});

gulp.task('copy_views', function(){
   return gulp.src('src/views/*.handlebars').pipe(gulp.dest('build/views'))
});

// run server
gulp.task( 'server:start', function() {
    server.listen( { path: 'build/server.js' } );
    //if server.js if changed it's built again and the server is restarted
    gulp.watch( ['src/server.js'], ['build_server' , server.restart]);
    //if any of the views changed, the old views are overwritten and the server is restarted
    gulp.watch( ['src/views/*.handlebars'], ['copy_views', server.restart]);
});

// restart server if app.js changed
gulp.task( 'server:restart', function() {
    gulp.watch( [ 'src/server.js' ], server.restart );
});

//a gulp task that copies the views to the build folder
gulp.task( 'refresh_views', function() {
    gulp.watch( ['src/views/*.handlebars'], ['copy_views', server.restart])
});

gulp.task('default', ['build_server', 'copy_views', 'server:start']);