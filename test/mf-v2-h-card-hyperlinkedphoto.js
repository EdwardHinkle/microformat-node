/*
Microformats Test Suite - Downloaded from github repo: glennjones/tests version v0.1.17 
Mocha integration test from: microformats-v2/h-card/hyperlinkedphoto
The test was built on Sun Jun 14 2015 10:55:15 GMT+0100 (BST)
*/

var chai = require('chai'),
   assert = chai.assert,
   helper = require('../test/helper.js');


describe('h-card', function() {
   var htmlFragment = "<a class=\"h-card\" href=\"http://rohit.khare.org/\">\n        <img alt=\"Rohit Khare\" src=\"https://twimg0-a.akamaihd.net/profile_images/53307499/180px-Rohit-sq.jpg\" />\n    </a>";
   var found = helper.parseHTML(htmlFragment,'http://example.com/');
   var expected = {"items":[{"type":["h-card"],"properties":{"name":["Rohit Khare"],"photo":["https://twimg0-a.akamaihd.net/profile_images/53307499/180px-Rohit-sq.jpg"],"url":["http://rohit.khare.org/"]}}],"rels":{},"rel-urls":{}};

   it('hyperlinkedphoto', function(){
       assert.deepEqual(found, expected);
   });
});
