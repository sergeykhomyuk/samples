/*
 * Grunt taks:
 *
 * Build tasks:
 * default          - Build TypeScript files and require.js modules using r.js
 * release          - Build release version and clean-up temporary files
 * clean-all        - Clean-up all temporary files
 *
 * TypeScript tasks:
 * typescript-build - Build all TypeScript files
 * typescript-watch - Watch for changes in TypeScript files and rebuild them
 * typescript-clean - Clean-up all scripts compiled from TypeScript
 *
 * Require.js tasks:
 * requirejs-build  - Build application require.js modules using r.js
 * requirejs-libs   - Build libs in a single file
 */

module.exports = function(grunt) {

    grunt.initConfig({
        meta: {
            baseDir: 'scripts', // Scripts root directory
            app: {
                dir: '<%= meta.baseDir %>/app', // Application directory
                out: 'app.min.js', // Minified application file name
                framework: '<%= meta.baseDir %>/framework', // Framework directory
                build: 'application.build.js', // Application r.js build configuration file name
                main: 'main.js' // Application entry point
            },
            libs: {
                dir: '<%= meta.baseDir %>/libs', // Libs directory
                out: 'libs.min.js', // Minified libs file name
                build: 'libs.build.js' // Libs r.js build configuration file name
            },
            tests: {
                dir: '<%= meta.baseDir %>/tests', // Tests directory
                port: 8080 // Port to run tests server
            },
            css: {
                dir: 'css', // CSS directory
                out: 'styles.min.css' // Minified CSS file name
            }
        },


        clean: {
            // Clean-up all scripts compiled from TypeScript
            typescript: [
                '<%= meta.app.framework %>/**/*.js*', // framework
                '<%= meta.app.dir %>/**/*.js*', // application
                '!<%= meta.app.dir %>/<%= meta.app.build %>', // exclude: application build configuration file
                '!<%= meta.app.dir %>/<%= meta.app.out %>*', // exclude: application minified file
                '!<%= meta.app.dir %>/<%= meta.app.main %>*', // exclude: application entry point file
                '<%= meta.tests.dir %>/specs/**/*.js*' // tests
            ],

            // Clean-up all scripts compiled from require.js modules
            requirejs: [
                '<%= meta.app.dir %>/<%= meta.app.out %>*' // application minified file
            ],

            // Clean-up compiled libs
            libs: [
                '<%= meta.libs.dir %>/<%= meta.libs.out %>' // libs minified file
            ],

            css: [
                '<%= meta.css.dir %>/<%= meta.css.out %>' // css minified file
            ]
        },


        typescript: {
            options: {
                sourceMap: true,
                comments: true,
                noImplicitAny: false,
                module: 'amd'
            },
            // Build all TypeScript files
            build: {
                src: ['<%= meta.baseDir %>/**/*.ts']
            }
        },


        requirejs: {
            // Build application require.js modules
            build: {
                options: {
                    optimize: 'uglify2',
                    generateSourceMaps: true,
                    preserveLicenseComments: false,
                    baseUrl: '<%= meta.app.dir %>/',
                    out: '<%= meta.app.dir %>/<%= meta.app.out %>',
                    mainConfigFile: '<%= meta.app.dir %>/<%= meta.app.build %>'
                }
            },

            // Build libs
            libs: {
                options: {
                    optimize: 'uglify2',
                    generateSourceMaps: false,
                    preserveLicenseComments: true,
                    baseUrl: '<%= meta.libs.dir %>/',
                    out: '<%= meta.libs.dir %>/<%= meta.libs.out %>',
                    mainConfigFile: '<%= meta.libs.dir %>/<%= meta.libs.build %>'
                }
            }
        },

        concat_css: {
            options: {
                // Task-specific options go here.
            },
            all: {
                src: ['<%= meta.css.dir %>/**/*.css'],
                dest: '<%= meta.css.dir %>/<%= meta.css.out %>'
            },
        },


        watch: {
            // Build TypeScript filed on change
            typescript: {
                files: '<%= meta.baseDir %>/**/*.ts',
                tasks: ['typescript:build']
            },

            // Run tests on change in any source file
            tests: {
                files: '<%= meta.baseDir %>/**/*.ts',
                tasks: ['tests']
            }
        },


        connect: {
            // Test server
            tests: {
                options: {
                    port: '<%= meta.tests.port %>',
                    base: './'
                }
            }
        }
    });

    // Load all grunt tasks
    require('load-grunt-tasks')(grunt);

    // Build TypeScript files and require.js modules
    grunt.registerTask('default', ['typescript-build', 'requirejs-build', 'requirejs-libs', 'css']);
    // Build release version and clean-up temporary files
    grunt.registerTask('release', ['default', 'clean:typescript']);

    // Clean-up all temporary files
    grunt.registerTask('clean-all', ['clean:typescript', 'clean:requirejs', 'clean:libs', 'clean:css']);

    grunt.registerTask('css', ['clean:css', 'concat_css:all']);

    // Build TypeScript files
    grunt.registerTask('typescript-build', ['clean:typescript', 'typescript:build']);
    // Watch for changes in TypeScript files and rebuild them
    grunt.registerTask('typescript-watch', ['watch:typescript']);
    // Clean-up all scripts compiled from TypeScript
    grunt.registerTask('typescript-clean', ['clean:typescript']);


    // Build application require.js modules
    grunt.registerTask('requirejs-build', ['clean:requirejs', 'requirejs:build']);
    // Build libs in a single file
    grunt.registerTask('requirejs-libs', ['clean:libs', 'requirejs:libs']);
};