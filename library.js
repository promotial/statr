/*global module, require */

var webdriver = require('selenium-webdriver'),
    assert = require('assert'),
    Yadda = require('yadda');

module.exports = (function () {
    "use strict";
    var dictionary, library;

    dictionary = new Yadda.Dictionary()
        .define('LOCALE', /(fr|es|ie)/)
        .define('NUM', /(\d+)/);

    library = new Yadda.localisation.English.library(dictionary);

    return library;
}());




