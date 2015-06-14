/*
Microformats Test Suite - Downloaded from github repo: glennjones/tests version v0.1.17 
Mocha integration test from: microformats-v1/hreview/implieditem
The test was built on Sun Jun 14 2015 10:55:15 GMT+0100 (BST)
*/

var chai = require('chai'),
   assert = chai.assert,
   helper = require('../test/helper.js');


describe('hreview', function() {
   var htmlFragment = "<div class=\"hreview\">\n    <a class=\"item\" href=\"http://example.com/crepeoncole\">Crepes on Cole</a>\n    <p><span class=\"rating\">4.7</span> out of 5 stars</p>\n</div>";
   var found = helper.parseHTML(htmlFragment,'http://example.com/');
   var expected = {"items":[{"type":["h-review"],"properties":{"item":[{"value":"Crepes on Cole","type":["h-item"],"properties":{"name":["Crepes on Cole"],"url":["http://example.com/crepeoncole"]}}],"rating":["4.7"],"name":["Crepes on Cole\n    4.7 out of 5 stars"]}}],"rels":{},"rel-urls":{}};

   it('implieditem', function(){
       assert.deepEqual(found, expected);
   });
});
