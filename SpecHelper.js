/*global Ext, beforeEach, afterEach */

Ext.require('Ext.data.Model');

afterEach(function () {
    "use strict";

    //clear any cached models
    Ext.data.Model.cache = {};
});

beforeEach(function () {
    "use strict";

    //create div for test content
    var element = document.createElement('div');
    element.setAttribute('id', 'jasmine_content');

    //append div to body
    document.getElementsByTagName("body")[0].appendChild(element);
});

afterEach(function () {
    "use strict";

    //find test content div
    var element = document.getElementById('jasmine_content');

    //remove test content div
    document.getElementsByTagName("body")[0].removeChild(element);
});