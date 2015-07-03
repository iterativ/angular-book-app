describe('In walkthroug trough the Best-Practice App a user can', function() {

    it('see the start page', function() {
        browser.get('/');
        var logo = element(by.css('a.navbar-brand'));
        logo.click().then(function() {
            var title = element(by.tagName('h1'));
            expect(title.getText()).toBe('Best Practices Demo App');
        });
    });

    it('click on about menu', function() {
        browser.get('/');
        var menuLinks = element(by.css('ul.navbar-nav')).all(by.tagName('a'));
        var link = menuLinks.get(0);
        expect(link.getText()).toBe('About');
        link.click().then(function() {
            var title = element(by.tagName('h1'));
            expect(title.getText()).toBe('About');
        });
    });

    it('click on books menu', function() {
        browser.get('/');
        var menuLinks = element(by.css('ul.navbar-nav')).all(by.tagName('a'));
        var link = menuLinks.get(1);
        expect(link.getText()).toBe('Books');
        link.click().then(function() {
            var title = element(by.tagName('h1'));
            expect(title.getText()).toBe('Books');
        });
    });

    it('click on examples menu', function() {
        browser.get('/');
        var menuLinks = element(by.css('ul.navbar-nav')).all(by.tagName('a'));
        var link = menuLinks.get(2);
        expect(link.getText()).toBe('Examples');
        link.click().then(function() {
            var title = element(by.tagName('h1'));
            expect(title.getText()).toBe('Example');
        });
    });

});
