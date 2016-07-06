/*!
 * Grunt file
 */

/*jshint node:true */
module.exports = function ( grunt ) {
	grunt.loadNpmTasks( 'grunt-contrib-watch' );
	grunt.loadNpmTasks( 'grunt-jsonlint' );
	grunt.loadNpmTasks( 'grunt-stylelint' );

	grunt.initConfig( {

		// Lint – i18n
		jsonlint: {
			all: [
				'**/*.json',
				'!node_modules/**'
			]
		},

		// Lint – Styling
		stylelint: {
			options: {
				syntax: 'less'
			},
			src: [
				'**/*.css',
				'**/*.less',
				'!node_modules/**'
			]
		},

		// Development
		watch: {
			files: [
				'**/*.css',
				'**/*.less',
				'.{stylelintrc}'
			],
			tasks: 'default'
		}

	} );

	grunt.registerTask( 'lint', [ 'jsonlint', 'stylelint' ] );
	grunt.registerTask( 'default', 'lint' );
};
