/*eslint no-undef: 0, quotes: 0, indent: 0 */
/* Grabbing gulp packages*/

var gulp  = require('gulp');
var babel = require('gulp-babel');
var server = require('gulp-develop-server');

//copying css files
gulp.task('copy_css', function(){
      return gulp.src('src/public/css/own.css').pipe(gulp.dest('build/public/css/'));
});

//copying components
gulp.task('copy_components', function(){
  return gulp.src('src/public/components/*').pipe(gulp.dest('build/public/components'));
});

//copying public js files
gulp.task('copy_public_js', function(){
  return gulp.src('./src/public/js/*').pipe(gulp.dest('build/public/js/'));
});

//copying views
gulp.task('copy_views', function(){
   return gulp.src('src/public/views/*.jsx').pipe(gulp.dest('build/public/views/'));
});

//copying layouts
gulp.task('copy_layouts', function(){
      return gulp.src('./src/views/layouts/*.jsx').pipe(gulp.dest('build/views/layouts/'));
});

// run server
gulp.task( 'server:start', function() {
    server.listen( { path: 'build/server.js' } );
    //if server.js if changed it's built again and the server is restarted
    gulp.watch( ['src/server.js'], ['build_server', server.restart]);
    //if any of the views changed, the old views are overwritten and the server is restarted
    gulp.watch( ['src/public/views/*.jsx'], ['copy_views', server.restart]);
    //gulp.watch( ['src/views/layouts/*.jsx'], ['copy_layouts', server.restart]);
    gulp.watch( ['src/public/css/own.css'], ['copy_css', server.restart]);
    gulp.watch( ['src/public/components/*'], ['copy_components', server.restart]);
    gulp.watch( ['src/public/js/*'], ['copy_public_js', server.restart]);
});

// restart server if app.js changed
gulp.task( 'server:restart', function() {
    gulp.watch( [ 'src/server.js' ], server.restart );
});

//building the server
gulp.task('build_server', function(){
   return gulp.src('src/*.js').pipe(babel()).pipe(gulp.dest('build'));
});

gulp.task('default', ['copy_views', 'copy_layouts', 'copy_public_js', "copy_components", 'copy_css', 'build_server', 'server:start']);
