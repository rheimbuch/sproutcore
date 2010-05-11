// ==========================================================================
// Project:   SproutCore Runtime - Property Observing Library
// Copyright: ©2006-2009 Sprout Systems, Inc. and contributors.
//            Portions ©2008-2009 Apple Inc. All rights reserved.
// License:   Licened under MIT license (see license.js)
// ==========================================================================
/*globals run */
"import core-test:qunit";
var SC = require('index'); // load sproutcore/foundation

// An ObjectController will make a content object or an array of content objects 
module("SC.objectForPropertyPath") ;

test("should be able to resolve an object on the window", function() {
  var myLocal = (window.myGlobal = { test: 'this '}) ;
  
  same(myLocal, { test: 'this '}) ;
  same(window.myGlobal, { test: 'this '}) ;
  
  // verify we can resolve our binding path
  same(SC.objectForPropertyPath('myGlobal'), { test: 'this '}, 'SC.objectForPropertyPath()') ;
  
  window.myGlobal =null ;
});

run();
