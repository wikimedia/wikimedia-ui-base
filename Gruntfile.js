/*!
 * Grunt file
 */

/*jshint node:true */
module.exports = function ( grunt ) {
	grunt.loadNpmTasks( 'grunt-contrib-csslint' );
	grunt.loadNpmTasks( 'grunt-contrib-cssmin' );
	grunt.loadNpmTasks( 'grunt-contrib-less' );
	grunt.loadNpmTasks( 'grunt-contrib-watch' );
	grunt.loadNpmTasks( 'grunt-csscomb' );
	grunt.loadNpmTasks( 'grunt-jsonlint' );
	grunt.loadNpmTasks( 'grunt-svg2png' );

	grunt.initConfig( {

		// Build – Styling
		less: {
		},
		cssmin: {
			options: {
				//keepSpecialComments: 0,
				//banner: minBanner,
				//compatibility: 'ie8',
				//report: 'gzip'
			},
			dist: {
				//expand: true,
				src: '*.css',
				ext: '.min.css',
				extDot: 'last'
			}
		},

		// Lint – Styling
		csslint: {
			options: {
				csslintrc: '.csslintrc'
			},
			all: [
				//'{demos,src}/**/*.css',
				//'!demos/dist/**'
			]
		},

		// Lint – i18n
		jsonlint: {
			all: [
				'**/*.json',
				'!node_modules/**'
			]
		},

		// Development
		watch: {
			files: [
				'<%= csslint.all %>',
				'src/**/*.less',
				'.{csslintrc,jscsrc,jshintignore,jshintrc}'
			],
			tasks: 'quick-build'
		}
	} );


	grunt.registerTask( 'build-styling', [
		'less',
		'csscomb', 'cssmin'
	] );

	grunt.registerTask( 'default' );
};
