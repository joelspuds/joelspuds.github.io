module.exports = function(grunt) {

    require('time-grunt')(grunt);

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        // Builds Sass
        sass: {
            dev: {
                options: {
                    //includePaths: ['govuk_components/public/sass'],
                    outputStyle: 'compressed',
                    //imagePath: '../images'
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
            },
        },

        copy: {

            todist: {
                expand: true,
                src: ['images/**', 'javascripts/**', 'stylesheets/**'],
                cwd: 'public/',
                dest: 'dist/'
            },
            dev: {
                expand: true,
                flatten: true,
                src: [
                    'bower_components/chai/chai.js',
                    'bower_components/mocha/mocha.js',
                    'bower_components/mocha/mocha.css',
                    'bower_components/sinon-browser-only/sinon.js',
                ],
                dest: 'src/js/vendor/'
            }
        },

        watch: {
            css: {
                files: 'src/scss/**/*.scss',
                tasks: ['build:css'],
                options: {
                    interrupt: true,
                    livereload: true,
                },
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
                    'src/js/main.js',
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
        }
    });

    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-contrib-concat');
    // grunt.loadNpmTasks('grunt-contrib-jshint');
    // grunt.loadNpmTasks('grunt-contrib-imagemin');
    grunt.loadNpmTasks('grunt-sass');
    grunt.loadNpmTasks('grunt-scss-lint');
    // grunt.loadNpmTasks('grunt-notify');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    //grunt.loadNpmTasks('grunt-shell');

    grunt.registerTask('build:css', ['scsslint:dev', 'sass:dev']);
    grunt.registerTask('default', ['build:css']);
    grunt.registerTask('watcher', ['watch']);
    // grunt.registerTask('build:js', ['jshint:beforeconcat', 'concat:js', 'jshint:afterconcat','uglify:viewScripts']);
    grunt.registerTask('build:js', ['concat:js']);

    // Build assets from src files
    // grunt.registerTask('build:css', ['scsslint:dev', 'sass:dev']);
    // grunt.registerTask('build:img', ['imagemin:dist']);
    // grunt.registerTask('build:js', ['jshint:beforeconcat', 'concat:js', 'jshint:afterconcat', 'uglify:authentication', 'uglify:viewScripts']);
    //
    // grunt.registerTask('build:no-lint', ['sass:dev', 'build:img', 'concat:js', 'uglify:authentication', 'uglify:viewScripts']);
    // grunt.registerTask('build', ['build:css', 'build:img', 'build:js']);
    //
    // grunt.registerTask('watcher', ['watch']);
    //
    // // Copy assets to dist folder
    // grunt.registerTask('dist', ['uglify:mainScripts', 'copy:todist']);
    // grunt.registerTask('test:integration', ['shell:wraith']);
    //
    // // Default task that happens during development
    // grunt.registerTask('default', ['build:css', 'build:js']);
    //
    // // Lint only task to output error in terminal
    // grunt.registerTask('lint:scss', ['scsslint']);

};
