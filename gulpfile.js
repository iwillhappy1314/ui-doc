var harp = require("harp");
var shell = require('gulp-shell');
var deploy = require('gulp-gh-pages');

/**
 * 编译 docs 文件夹里面的说明文档
 */
gulp.task('harp', shell.task(['harp compile docs']));

/**
 * 发布到 gh-pages
 */
gulp.task('deploy', ['harp'], function () {
    return gulp.src("www/**/*").pipe(deploy());
});
