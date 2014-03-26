/*global module */

module.exports = function (config) {
    "use strict";

    config.set({
        //frameworks to use
        frameworks: ['jasmine'],


        //root path location to define relative paths
        basePath: "../..",


        //list of files / patterns to load in the browser
        files: [
            //load sencha touch
            "touch/sencha-touch-all-debug.js",

            //load tests
            "test/statr/SpecHelper.js",
            "test/statr/app.js",
            "test/unit/**/*.js",

            //load source files
            "app/**/*.js"
        ],


        //list of files to exclude
        exclude: [

        ],


        //test results reporter to use
        reporters: ['spec'],


        //web server port
        port: 9876,


        //cli statr port
        statrPort: 9100,


        //enable / disable colors in the output (reporters and logs)
        colors: true,


        //level of logging
        logLevel: config.LOG_WARN,


        //if browser does not capture in given timeout [ms], kill it
        captureTimeout: 60000,


        //ci mode - capture browsers, run tests and exit
        singleRun: false
    });
};
