STATR - Sencha Touch Automated Test Runner
====================================
A test runner for Sencha Touch, combining Karma, Selenium Webdriver and Yadda.
Be warned that this is still at a very early stage and only a fraction of the total feature set has been implemented.


How to use it?
------------
Ensure you have [node](http://nodejs.org/download/) and [Sencha Touch](http://meteor.com).

To install the test runner run the following commands:
```bash
  mkdir test; mkdir test/features; mkdir test/unit;
  git submodule add git@github.com:promotial/statr.git ./test/statr; cd test/statr;
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

The test runner is currently configured to use: Jasmine (unit tests), Yadda & Webdriver (end to end tests), JSLint (code quality), Connect (web server)

Keep in mind that we currently do not provide a means of customizing your karma.conf.js or Gruntfile.js so you will need to fork the repo to use a different a tool stack.

For an example of how to test a sencha touch application with STATR see the [statr-example](https://github.com/promotial/statr-example) repo.
