// https://jasmine.github.io/api/2.8/matchers.html - jasmine matchers
// http://www.protractortest.org/#/api
// https://github.com/angular/protractor/tree/master/docs
describe('todo list', function() {
    const waitTimeout = 5000;

    it('should load all tasks', function() {
        browser.waitForAngularEnabled(false);
        browser.get('index.html');

        const ec = protractor.ExpectedConditions;

        browser.wait(ec.presenceOf($('.collection-item')), waitTimeout);

        const tasks = $$('.collection-item');
        expect(tasks.count()).toBe(2);
    });

    it('should add task', function() {
        browser.waitForAngularEnabled(false);
        browser.get('index.html');

        const ec = protractor.ExpectedConditions;

        browser.wait(ec.presenceOf($('.collection-item')), waitTimeout);

        $('#name').sendKeys('New Task');
        $('#add').click();

        const addedTask = element(by.cssContainingText('.collection-item', 'New Task'));
        browser.wait(ec.presenceOf(addedTask), waitTimeout);
    });

    it('should remove task', function() {
        browser.waitForAngularEnabled(false);
        browser.get('index.html');

        const ec = protractor.ExpectedConditions;

        const addedTask = element(by.cssContainingText('.collection-item', 'New Task'));
        browser.wait(ec.presenceOf(addedTask), waitTimeout);

        addedTask.$('.remove-task').click();
        browser.wait(ec.stalenessOf(addedTask), waitTimeout);
    });
});
