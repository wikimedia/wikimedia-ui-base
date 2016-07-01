/*!
 * Grunt file
 */

/*jshint node:true */
module.exports = function ( grunt ) {
	grunt.loadNpmTasks( 'grunt-contrib-watch' );
	grunt.loadNpmTasks( 'grunt-jsonlint' );

	grunt.initConfig( {

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
			tasks: 'default'
		}

	} );

	grunt.registerTask( 'default', ['jsonlint'] );
};
