# Udacity Feed Reader Testing Project

A feed reader testing project for the Udacity Front-End Web Developer Nanodegree Program.

## Table of Contents

* [Project Details](#project-details)
  * [Added Tests](#added-tests)
* [How to Run](#how-to-run)
* [Resources](#resources)
## Project Details

In this project the student was given a web-based application that reads RSS feeds. They were to use the included [Jasmine](http://jasmine.github.io/) to write a number of tests against this application.

### Added Tests

1. A test that loops through each feed in the `allFeeds` object and ensures it has a URL defined and that the URL is not empty.
2. A test that loops through each feed in the `allFeeds` object and ensures it has a name defined and that the name is not empty.
3. A new test suite named `"The Menu"`.
4. A test that ensures the menu element is hidden by default.
5. A test that ensures the menu changes visibility when the menu icon is clicked.
6. A new test suite named `"Initial Entries"`.
7. A test that ensures when the `loadFeed` function is called and completes its work, there is at least a single `.entry` element within the `.feed` container.
8. A new test suite named `"New Feed Selection"`.
16. A test that ensures when a new feed is loaded by the `loadFeed` function that the content actually changes.


## How to Run

* Check the project on GitHub Pages by clicking here: https://lukeissad.github.io/udacity-feedreader-test/
* To run locally, clone or download the repository and open `index.html` in your preferred browser.

The test results will be displayed on the bottom of the page.

## Resources

* [Jasmine documentation](http://jasmine.github.io)
