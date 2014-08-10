module.exports = function (grunt) {

	grunt.initConfig({
		'connect': {
			demo: {
				options: {
					open: true,
					keepalive: true
				}
			}
		},
		'gh-pages': {
			options: {
				clone: 'bower_components/bs-timeline'
			},
			src: [
                'bower_components/**/*',
                '!bower_components/bs-timeline/**/*',
                'demo/*', 'src/*', 'dist/*', 'README.md', 'index.html'
            ]
		},
		'replace': {
			example: {
				src: ['src/*'],
				dest: 'dist/',
				replacements: [{
					from: 'bower_components',
					to: '..'
                }]
			}
		},
		'markdown': {
			all: {
				files: [
					{
						src: 'README.md',
						dest: 'index.html',
					}
      			],
				options: {
					gfm: true,
					highlight: 'auto'
				}
			}
		}
	});

	grunt.loadNpmTasks('grunt-contrib-connect');
	grunt.loadNpmTasks('grunt-gh-pages');
	grunt.loadNpmTasks('grunt-text-replace');
	grunt.loadNpmTasks('grunt-markdown');

	grunt.registerTask('build', ['replace']);
	grunt.registerTask('deploy', ['markdown','gh-pages']);
	grunt.registerTask('server', ['connect']);

	grunt.registerTask('doc', ['markdown']);


};
