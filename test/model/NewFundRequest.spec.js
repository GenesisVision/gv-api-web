/**
 * Core API v1.0
 * No description provided (generated by Swagger Codegen https://github.com/swagger-api/swagger-codegen)
 *
 * OpenAPI spec version: v1.0
 * 
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD.
    define(['expect.js', '../../src/index'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    factory(require('expect.js'), require('../../src/index'));
  } else {
    // Browser globals (root is window)
    factory(root.expect, root.CoreApiV10);
  }
}(this, function(expect, CoreApiV10) {
  'use strict';

  var instance;

  beforeEach(function() {
    instance = new CoreApiV10.NewFundRequest();
  });

  var getProperty = function(object, getter, property) {
    // Use getter method if present; otherwise, get the property directly.
    if (typeof object[getter] === 'function')
      return object[getter]();
    else
      return object[property];
  }

  var setProperty = function(object, setter, property, value) {
    // Use setter method if present; otherwise, set the property directly.
    if (typeof object[setter] === 'function')
      object[setter](value);
    else
      object[property] = value;
  }

  describe('NewFundRequest', function() {
    it('should create an instance of NewFundRequest', function() {
      // uncomment below and update the code to test NewFundRequest
      //var instane = new CoreApiV10.NewFundRequest();
      //expect(instance).to.be.a(CoreApiV10.NewFundRequest);
    });

    it('should have the property exitFee (base name: "exitFee")', function() {
      // uncomment below and update the code to test the property exitFee
      //var instane = new CoreApiV10.NewFundRequest();
      //expect(instance).to.be();
    });

    it('should have the property managementFee (base name: "managementFee")', function() {
      // uncomment below and update the code to test the property managementFee
      //var instane = new CoreApiV10.NewFundRequest();
      //expect(instance).to.be();
    });

    it('should have the property assets (base name: "assets")', function() {
      // uncomment below and update the code to test the property assets
      //var instane = new CoreApiV10.NewFundRequest();
      //expect(instance).to.be();
    });

    it('should have the property title (base name: "title")', function() {
      // uncomment below and update the code to test the property title
      //var instane = new CoreApiV10.NewFundRequest();
      //expect(instance).to.be();
    });

    it('should have the property description (base name: "description")', function() {
      // uncomment below and update the code to test the property description
      //var instane = new CoreApiV10.NewFundRequest();
      //expect(instance).to.be();
    });

    it('should have the property logo (base name: "logo")', function() {
      // uncomment below and update the code to test the property logo
      //var instane = new CoreApiV10.NewFundRequest();
      //expect(instance).to.be();
    });

    it('should have the property entryFee (base name: "entryFee")', function() {
      // uncomment below and update the code to test the property entryFee
      //var instane = new CoreApiV10.NewFundRequest();
      //expect(instance).to.be();
    });

    it('should have the property depositAmount (base name: "depositAmount")', function() {
      // uncomment below and update the code to test the property depositAmount
      //var instane = new CoreApiV10.NewFundRequest();
      //expect(instance).to.be();
    });

    it('should have the property depositWalletId (base name: "depositWalletId")', function() {
      // uncomment below and update the code to test the property depositWalletId
      //var instane = new CoreApiV10.NewFundRequest();
      //expect(instance).to.be();
    });

  });

}));
