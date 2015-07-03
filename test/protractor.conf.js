exports.config = {
    seleniumAddress: 'http://localhost:4444/wd/hub',
    specs: ['spec/protractor/*.spec.js'],
    rootElement: 'html',
    onPrepare: function() {
        browser.manage().window().setSize(1200, 800);
    },
    baseUrl: 'http://library.angularjs.space/',
    capabilities: {
        'browserName': 'chrome',
    }
};

