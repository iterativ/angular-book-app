describe('In walkthroug trough the Best-Practice App a user can', function() {

    //it('see the start page', function() {
    //    browser.get('/');
    //    var logo = element(by.css('a.navbar-brand'));
    //    logo.click().then(function() {
    //        var title = element(by.tagName('h1'));
    //        expect(title.getText()).toBe('Best Practices Demo App');
    //    });
    //});
    //
    //it('click on about menu', function() {
    //    browser.get('/');
    //    var menuLinks = element(by.css('ul.navbar-nav')).all(by.tagName('a'));
    //    var link = menuLinks.get(0);
    //    expect(link.getText()).toBe('About');
    //    link.click().then(function() {
    //        var title = element(by.tagName('h1'));
    //        expect(title.getText()).toBe('About');
    //    });
    //});
    //
    //it('click on books menu', function() {
    //    browser.get('/');
    //    var menuLinks = element(by.css('ul.navbar-nav')).all(by.tagName('a'));
    //    var link = menuLinks.get(1);
    //    expect(link.getText()).toBe('Books');
    //    link.click().then(function() {
    //        var title = element(by.tagName('h1'));
    //        expect(title.getText()).toBe('Books');
    //    });
    //});

    it('click on examples menu', function() {
        browser.get('/');
        var menuLinks = element(by.css('ul.navbar-nav')).all(by.tagName('a'));
        var link = menuLinks.get(1);
        expect(link.getText()).toBe('Books');
        link.click().then(function() {
            var title = element(by.tagName('h1'));
            expect(title.getText()).toBe('Books');

            var a = element(by.repeater('book in vm.books').row(1)).element(by.tagName('a'));
            a.click().then(function() {

                //browser.pause();

                var author = element(by.model('vm.newNoteAuthor'));
                author.sendKeys('test-author');
                var notetitle = element(by.model('vm.newNoteTitle'));
                notetitle.sendKeys('test-title');
                var textt = element(by.model('vm.newNoteText'));
                textt.sendKeys('some note about the book for testing purposes');

                var button = element(by.buttonText('Save Note!'));

                button.click().then(function() {
                    browser.pause();
                    var note = element(by.repeater('note in vm.notes'));
                });

            });

            //var div = element(by.ngRepeat('note in vm.notes'));
            //div.element()
            //element(by.css('some-css')).element(by.tagName('tag-within-css'));

            //console.log(div);
        });
    });

    //it('click on examples menu', function() {
    //    browser.get('/');
    //    var menuLinks = element(by.css('ul.navbar-nav')).all(by.tagName('a'));
    //    var link = menuLinks.get(2);
    //    expect(link.getText()).toBe('Examples');
    //    link.click().then(function() {
    //
    //        //browser.pause();
    //
    //        var title = element(by.tagName('h1'));
    //        expect(title.getText()).toBe('Example');
    //    });
    //});

});
