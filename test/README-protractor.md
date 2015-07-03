End-to-End Testing With Protractor
==================================

Installation
------------

Prequsites:
* Running application instance (local or remote)
* nodejs
* npm
* Java (for selenium webdriver)
* Chrome

Install all necessary dependencies:

    $ npm install

Add ./node_modules/.bin/ to the PATH environment variable or create an alias 
to run npm commands:
    $ alias npm-exec='PATH=$(npm bin):$PATH'

(If you like it, simply addd it to your ~/.bashrc)

Install the necessary webdriver files:

    $ npm-exec webdriver-manager update

Run Tests
---------

1. Configure protractor

        $ nano test/protractor.conf.js
        
 - Point the `baseUrl` variable to a running application instance

1. Start Selenium webdriver (in a seperate terminal)

        $ npm-exec webdriver-manager start

2. Run the tests

        $ cd test
        $ npm-exec protractor

Links
-----

* Protractor: http://angular.github.io/protractor/#/api
* Jasmin (Test spec syntax): http://jasmine.github.io/2.1/introduction.html


Simple Example Test Spec
------------------------

    describe("js multiplication", function()  {
      var a, b, result;
      a = 6;
      b = 7; 
      result = 42;

      it("should work for integer variables", function() {
        expect(a*b).toEqual(result);
      });
      it("shoud also work for literal integers", function() {
        expect(6*7).toEqual(42);
        expect(6*5).not.toEqual(42);
      });
    });

