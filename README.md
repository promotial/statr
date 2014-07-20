STATR - Sencha Touch Automated Test Runner
====================================
A test runner for [Sencha Touch](http://www.sencha.com/products/touch/), combining [Karma](http://karma-runner.github.io/), [Selenium Webdriver](https://code.google.com/p/selenium/wiki/WebDriverJs) and [Yadda](https://github.com/acuminous/yadda).
Be warned that this is still at a very early stage and only a fraction of the total feature set has been implemented.


How to use it?
------------
Ensure you have [node](http://nodejs.org/download/) and [Sencha Touch](http://www.sencha.com/products/touch/).

To install, run these commands in your project's base directory:
```bash
  mkdir test; mkdir test/features; mkdir test/unit;
  git submodule add git@github.com:promotial/statr.git ./test/statr; cd test/statr;
  ./generate/app-stub YourAppNameHere > app.js;
  ./statr first;
```

And every time you start development, just run this:
```bash
  cd test/statr
  ./statr start
```

Or, to run once on a server run:
```bash
  cd test/statr
  ./statr once
```

The test runner is currently configured to use: [Jasmine](http://jasmine.github.io/) (unit tests), [Yadda](https://github.com/acuminous/yadda) & [Selenium Webdriver](https://code.google.com/p/selenium/wiki/WebDriverJs) (end to end tests), [JSLint](http://www.jslint.com/) (code quality), [Connect](https://github.com/gruntjs/grunt-contrib-connect) (web server)

Keep in mind that we currently do not provide a means of customizing your karma.conf.js or Gruntfile.js so you will need to fork the repo to use a different a tool stack.

For an example of how to test a sencha touch application with STATR see the [statr-example](https://github.com/promotial/statr-example) repo.
