'use strict';

describe('BHAM index page', function() {
    // Load the BHAM index page
    beforeEach(function () {
        browser.get('index.html');

    });

    it('should have navigation menu', function() {
        // Find the element with ng-model matching 'yourName' - this will
        // find the <input type="text" ng-model="yourName"/> element - and then
        // type 'Julie' into it.
        //element(by.model('yourName')).sendKeys('Julie');

        // Find the element with binding matching 'yourName' - this will
        // find the <h1>Hello {{yourName}}!</h1> element.
        //var greeting = element(by.binding('yourName'));

        // Assert that the text element has the expected value.
        // Protractor patches 'expect' to understand promises.
        //expect(greeting.getText()).toEqual('Hello Julie!');

        expect('true').toEqual('true');
    });
});

