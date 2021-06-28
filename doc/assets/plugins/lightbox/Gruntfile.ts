// @ts-expect-error ts-migrate(2580) FIXME: Cannot find name 'module'. Do you need to install ... Remove this comment to see the full error message
module.exports = function (grunt: any) {
    "use strict";

    grunt.initConfig({
        banner:
            '/*!\n' +
            ' * Lightbox for Bootstrap by @ashleydw\n' +
            ' * https://github.com/ashleydw/lightbox\n' +
            ' *\n' +
            ' * License: https://github.com/ashleydw/lightbox/blob/master/LICENSE\n' +
            ' */',

	    less: {
		    dist: {
			    files: {
				    'dist/ekko-lightbox.css': 'ekko-lightbox.less'
			    }
		    }
	    },
	    babel: {
		    options: {
			    sourceMap: true,
			    modules: 'ignore'
		    },
		    dist: {
			    files: {
				    'dist/ekko-lightbox.js': 'ekko-lightbox.js',
			    }
		    }
	    },
        uglify: {
	        options: {
		        sourceMap: true,
	        },
            js: {
                files: {
                    'dist/ekko-lightbox.min.js': 'dist/ekko-lightbox.js'
                }
            }
        },
	    postcss: {
		    options: {
			    map: true,
			    processors: [
// @ts-expect-error ts-migrate(2580) FIXME: Cannot find name 'require'. Do you need to install... Remove this comment to see the full error message
				    require('autoprefixer')({
					    browsers: ['last 2 versions']
				    }),
// @ts-expect-error ts-migrate(2580) FIXME: Cannot find name 'require'. Do you need to install... Remove this comment to see the full error message
					require('cssnano')()
			    ]
		    },
		    dist: {
			    src: 'dist/*.css'
		    }
	    },
	    stamp: {
		    options: {
			    banner: '<%= banner %>\n+function ($) {\n',
			    footer: '\n}(jQuery);'
		    },
		    lightbox: {
			    files: {
				    src: ['dist/ekko-lightbox.js', 'dist/ekko-lightbox.min.js']
			    }
		    }
	    },
        watch: {
            babel: {
                files: ['ekko-lightbox.js', 'ekko-lightbox.less'],
                tasks: ['dev']
            }
        }
    });

	grunt.loadNpmTasks('grunt-stamp');
    grunt.loadNpmTasks('grunt-babel');
    grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-less');
	grunt.loadNpmTasks('grunt-postcss');

    grunt.registerTask('dev', ['babel', 'less']);
    grunt.registerTask('dist', ['babel', 'less', 'stamp', 'postcss:dist', 'uglify']);
    grunt.registerTask('default', ['dist']);
};