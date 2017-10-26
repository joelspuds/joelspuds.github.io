module.exports = function(grunt) {

    require('time-grunt')(grunt);

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        // Builds Sass
        sass: {
            dev: {
                options: {
                    outputStyle: 'compressed'
                },
                files: {
                    'assets/css/styles.css': 'src/scss/styles.scss'
                }
            }
        },

        scsslint: {
            dev: [
                'src/scss/**/*.scss'
            ],
            options: {
              bundleExec: false,
              config: '.scss-lint.yml',
              colorizeOutput: true
            }
        },

        watch: {
            css: {
                files: 'src/scss/**/*.scss',
                tasks: ['build:css'],
                options: {
                    interrupt: true,
                    livereload: true,
                }
            },
            js: {
                files: ['src/js/exd.js','src/js/exd/*.js', 'src/js/main.js'],
                tasks: ['build:js'],
                options: {
                    interrupt: true,
                    livereload: true,
                }
            }
        },

        concat: {
            js: {
                src: [
                    'src/js/exd.js',
                    'src/js/exd/*.js',
                    // main.js always last !
                    'src/js/main.js'
                ],
                dest: 'assets/js/exd.js'
            }
        },

        uglify: {
            mainScripts: {
                options: {
                    mangle: false,
                    sorceMap: false,
                    compress: {
                        drop_console: true
                    }
                },
                files: {
                    'assets/js/exd.js': ['assets/js/exd.min.js']
                }
            }
        },

        criticalcss: {
            custom: {
                options: {
                    url: "http://localhost:4000/work",
                    width: 1200,
                    height: 900,
                    outputfile: "assets/css/top2.css",
                    filename: "assets/css/styles.css",
                    buffer: 800*1024,
				    ignoreConsole: false
                }
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-sass');
    grunt.loadNpmTasks('grunt-scss-lint');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-criticalcss');

    grunt.registerTask('build:css', ['scsslint:dev', 'sass:dev']);
    grunt.registerTask('build:no-lint', ['sass:dev']);
    grunt.registerTask('default', ['build:css']);
    grunt.registerTask('watcher', ['watch']);
    grunt.registerTask('build:js', ['concat:js']);
    grunt.registerTask('test:css', ['criticalcss']);
};
