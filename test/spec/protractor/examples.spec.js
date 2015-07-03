describe('On the Examples page a user', function() {

    beforeEach(function() {
        browser.get('/');
        var menuLinks = element(by.css('ul.navbar-nav')).all(by.tagName('a'));
        var link = menuLinks.get(2);
        expect(link.getText()).toBe('Examples');
        link.click();
    });


    it('can enter numbers in a number field', function() {
        var nameInput = element(by.model('name'));
        nameInput.sendKeys('Hans');
        var numberInput = element(by.model('numberModel')).element(by.tagName('input'));
        numberInput.sendKeys('123');
        var messages = element.all(by.css('.help-block'));
        expect(messages.count()).toBe(0);     // No warning messages displayed
        expect(numberInput.getAttribute('class')).toMatch('ng-valid');
    });

    it('gets a warning when entering text into a number field', function() {
        var nameInput = element(by.model('name'));
        nameInput.sendKeys('Hans');
        var numberInput = element(by.model('numberModel')).element(by.tagName('input'));
        numberInput.sendKeys('abc');
        var message = element(by.css('.help-block'));
        expect(message.getText()).toBe('Bitte eine Zahl eingeben.');
        expect(numberInput.getAttribute('class')).toMatch('ng-invalid');
    });

});
