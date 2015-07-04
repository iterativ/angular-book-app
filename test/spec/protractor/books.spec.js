describe('On the Books page a user', function() {

    beforeEach(function() {
        browser.get('/');
        var menuLinks = element(by.css('ul.navbar-nav')).all(by.tagName('a'));

        // Go to the books page
        var link = menuLinks.get(1);
        expect(link.getText()).toBe('Books');
        link.click();

        // Select the first book
        element.all(by.repeater('book in vm.books')).get(0).element(by.tagName('a')).click();
    });


    it('can enter a new comment', function() {
        var titleInput = element(by.model('vm.newNoteTitle'));

        // FIXME: Fill form and submit it
        //...     
        //var saveButton = ...;
        //saveButton.click();


        // FIXME: Test outcome
        //var comments = element.all(by.repeater(...));
        //expect(comments.last() ...).toBe(...);
    });

    it('can enter a new comment and then search for it', function() {
        // FIXME: to implement
    });

});
