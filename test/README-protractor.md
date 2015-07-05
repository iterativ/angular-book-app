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





# Slides

Protractor: 

Locate/Select elements

    // find an element using a css selector
    by.css('.myclass') 
    
    // find an element with the given id
    by.id('myid')
    
    // find an element with a certain ng-model
    by.model('name')
    
    // find an element bound to the given variable
    by.binding('bindingname')

Pass locators to elmenet()

    element(by.css('some-css'));
    element(by.model('item.name'));
    element(by.binding('item.name'));
    
Actions:

    // Click on the element
    el.click();
    
    // Send keys to the element (usually an input)
    el.sendKeys('my text');
    
    // Clear the text in an element (usually an input)
    el.clear();
    
    // Get the value of an attribute, for example, get the value of an input
    el.getAttribute('value');
   
Promises:
    
    var el = element(locator);
    el.getText().then(function(text) {
      console.log(text);
    });
    
    
    element(by.css('some-css')).element(by.tagName('tag-within-css'));