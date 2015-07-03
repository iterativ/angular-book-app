describe('On the Examples page a user', function() {

    it('can enter numbers in a number field', function() {
        browser.get('/examples');
        var input = element(by.model('ngModel'));
        input.sendKeys('123');
        var messages = element.all(by.css('.help-block'));
        expect(messages.count()).toBe(0);     // No warning messages displayed
        expect(input.getAttribute('class')).toMatch('ng-valid');
    });

    it('gets a warning when entering text into a number field', function() {
        browser.get('/examples');
        var input = element(by.model('ngModel'));
        input.sendKeys('abc');
        var message = element(by.css('.help-block'));
        expect(message.getText()).toBe('Bitte eine Zahl eingeben.');
        expect(input.getAttribute('class')).toMatch('ng-invalid');
    });

});
