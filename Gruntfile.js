/*global module, require */

module.exports = function (grunt) {
    "use strict";

    require("load-grunt-tasks")(grunt);

    grunt.initConfig({
        //run connect servers
        connect: {
            //dev instance to manually test app
            dev: {
                options: {
                    port: 3000,
                    //auto reload after changes
                    livereload: 35729
                }
            },
            //test instance for end-end tests
            test: {
                options: {
                    port: 8000
                }
            }
        },

        shell: {
            //run yadda feature tests with mocha
            "mocha": {
                options: {
                    //show output in terminal
                    stdout: true,
                    //fail task on error
                    failOnError: true,
                    //run in current directory
                    execOptions: {
                        cwd: "test/runner"
                    }
                },
                command: "./node_modules/mocha/bin/mocha --timeout 50000 --reporter spec run.js"
            }
        },

        karma: {
            //run karma unit tests
            options: {
                configFile: 'test/runner/karma.conf.js',
                //run & then exit browsers
                singleRun: true /* less errors */
            },
            dev: {
                //use real browsers for dev
                browsers: ["Chrome"]
            },
            ci: {
                //use phantom for ci
                browsers: ['PhantomJS']
            }
        },

        jslint: {
            //lint app & test code
            client: {
                src: [
                    'app/**/*.js', 'test/**/*.js', '!**/node_modules/**', '!test/runner/lib/**'
                ],
                directives: {
                    //predefine globals
                    browser: true
                }
            }
        },

        watch: {
            all: {
                //watch these files for changes
                files: [
                    'app/**/*.js', 'test/**/*.js', 'test/features/**/*.feature',
                    'resources/**/*.css', 'app.js', 'index.html', '!**/node_modules/**'
                ],
                //run these tasks on change
                tasks: ["jslint", "karma:dev", "shell:mocha"]
            },
            options: {
                spawn: false,
                //tell connect about change
                livereload: true
            }
        }
    });

    //base is app root directory
    grunt.file.setBase('../..');

    //run forever in dev mode by default
    grunt.registerTask("default", ["connect:dev", "connect:test", "watch"]);

    //run once mode for ci
    grunt.registerTask("runOnce", ["jslint", "connect:test", "karma:ci", "shell:mocha"]);
};

