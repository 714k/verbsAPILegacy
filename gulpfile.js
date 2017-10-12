const gulp = require('gulp'),
			ts = require('gulp-typescript'),
			JSON_FILES = ['src/*.json', 'src/**/*.json'],

			// Pull the project typescript config
			tsProject = ts.createProject('tsconfig.json');

gulp.task('scripts', function() {
	const tsResult = tsProject.src()
	.pipe(tsProject());

	return tsResult.js.pipe(gulp.dest('dist'));
});

gulp.task('watch', ['scripts'], function() {
	gulp.watch('src/**/*.ts', ['scripts']);
});

gulp.task('assets', function() {
	return gulp.src(JSON_FILES)
	.pipe(gulp.dest('dist'));
});

gulp.task('default', ['watch', 'assets']);