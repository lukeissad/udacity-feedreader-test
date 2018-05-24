/* feedreader.js
*
* This is the spec file that Jasmine will read and contains
* all of the tests that will be run against your application.
*/

/* We're placing all of our tests within the $() function,
* since some of these tests may require DOM elements. We want
* to ensure they don't run until the DOM is ready.
*/
$(function() {

  /* This is our first test suite - a test suite just contains
  * a related set of tests. This suite is all about the RSS
  * feeds definitions, the allFeeds variable in our application.
  */
  describe('RSS Feeds', function() {

    /* This is our first test - it tests to make sure that the
    * allFeeds variable has been defined and that it is not
    * empty.
    */
    it('are defined', function() {
      expect(allFeeds).toBeDefined();
      expect(allFeeds.length).not.toBe(0);
    });

    /* A test that loops through each feed
    * in the allFeeds object and ensures it has a URL defined
    * and that the URL is not empty.
    */
    it('have defined URLs', function() {
      allFeeds.forEach(function(feed) {
        expect(feed.url).toBeDefined();
        expect(feed.url.length).not.toBe(0);
      });
    });

    /* A test that loops through each feed
    * in the allFeeds object and ensures it has a name defined
    * and that the name is not empty.
    */
    it('have defined names', function() {
      allFeeds.forEach(function(feed) {
        expect(feed.name).toBeDefined();
        expect(feed.name.length).not.toBe(0);
      });
    });
  });


  /* A test suite named "The Menu" */
  describe('The Menu', function() {

    /* A test that ensures the menu element is
    * hidden by default.
    */
    const body = $('body');

    it('is hidden by default', function() {
      expect(body.hasClass('menu-hidden')).toBe(true);
    });

    /* A test that ensures the menu changes
    * visibility when the menu icon is clicked.
    */
    it('changes visibility when menu icon is clicked', function() {

      const menuIcon = $('.menu-icon-link');

      menuIcon.click();
      expect(body.hasClass('menu-hidden')).toBe(false);  //Checks if after a click the menu-hidden class is removed from the body.
      menuIcon.click();
      expect(body.hasClass('menu-hidden')).toBe(true);  //Checks if after a second click the menu-hidden class is added to the body.
    });
  });

  /* A test suite named "Initial Entries" */
  describe('Initial Entries', function() {

    /* A test that ensures when the loadFeed
    * function is called and completes its work, there is at least
    * a single .entry element within the .feed container.
    * loadFeed() is asynchronous so this test requires
    * the use of Jasmine's beforeEach and asynchronous done() function.
    */
    beforeEach(function(done) {
      loadFeed(0, function() {
        done();
      });
    });

    it('has at least one entry', function(done) {

      const feedEntries = $('.feed .entry');

      expect(feedEntries).toBeDefined();
      expect(feedEntries.length).toBeGreaterThan(0);
      done();
    });
  });

  /* A test suite named "New Feed Selection" */
  describe('New Feed Selection', function() {

    /* A test that ensures when a new feed is loaded
    * by the loadFeed function that the content actually changes.
    */
    let firstFeed,
        secondFeed;

    beforeEach(function(done) {
      loadFeed(0, function() {
        firstFeed = $('.feed').text();  //Loads the 1st feed and saves its text content in a variable.
        loadFeed(1, function() {
          secondFeed = $('.feed').text();  //Loads the 2nd feed and saves its text content in a variable.
          done();
        });
      });
    });

    it('changes after loading a new feed', function(done) {
      expect(firstFeed).not.toBe(secondFeed);  //Compares the text content of the feed div before and after loading the 2nd feed.
      done();
    });
  });
}());
