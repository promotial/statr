/*global require, before, after, scenarios, steps, featureFile */

var Yadda = require('yadda'),
    library = require('./library'),
    webdriver = require('selenium-webdriver'),
    driver;

Yadda.plugins.mocha.AsyncStepLevelPlugin.init();

new Yadda.FeatureFileSearch('../features').each(function (file) {
    "use strict";

    featureFile(file, function (feature) {
        before(function (done) {
            driver = new webdriver.Builder().usingServer().withCapabilities({'browserName': 'chrome'}).build();
            driver.manage().timeouts().implicitlyWait(10000);
            done();
        });

        scenarios(feature.scenarios, function (scenario) {
            steps(scenario.steps, function (step, done) {
                new Yadda.Yadda(library, { driver: driver }).yadda(step, done);
            });
        });

        after(function (done) {
            driver.quit().then(done);
        });
    });
});

