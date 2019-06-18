/**
 * Core API v1.0
 * No description provided (generated by Swagger Codegen https://github.com/swagger-api/swagger-codegen)
 *
 * OpenAPI spec version: v1.0
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 *
 * Swagger Codegen version: 2.3.1
 *
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
    instance = new CoreApiV10.MultiWalletExternalTransaction();
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

  describe('MultiWalletExternalTransaction', function() {
    it('should create an instance of MultiWalletExternalTransaction', function() {
      // uncomment below and update the code to test MultiWalletExternalTransaction
      //var instance = new CoreApiV10.MultiWalletExternalTransaction();
      //expect(instance).to.be.a(CoreApiV10.MultiWalletExternalTransaction);
    });

    it('should have the property id (base name: "id")', function() {
      // uncomment below and update the code to test the property id
      //var instance = new CoreApiV10.MultiWalletExternalTransaction();
      //expect(instance).to.be();
    });

    it('should have the property currency (base name: "currency")', function() {
      // uncomment below and update the code to test the property currency
      //var instance = new CoreApiV10.MultiWalletExternalTransaction();
      //expect(instance).to.be();
    });

    it('should have the property logo (base name: "logo")', function() {
      // uncomment below and update the code to test the property logo
      //var instance = new CoreApiV10.MultiWalletExternalTransaction();
      //expect(instance).to.be();
    });

    it('should have the property _date (base name: "date")', function() {
      // uncomment below and update the code to test the property _date
      //var instance = new CoreApiV10.MultiWalletExternalTransaction();
      //expect(instance).to.be();
    });

    it('should have the property amount (base name: "amount")', function() {
      // uncomment below and update the code to test the property amount
      //var instance = new CoreApiV10.MultiWalletExternalTransaction();
      //expect(instance).to.be();
    });

    it('should have the property type (base name: "type")', function() {
      // uncomment below and update the code to test the property type
      //var instance = new CoreApiV10.MultiWalletExternalTransaction();
      //expect(instance).to.be();
    });

    it('should have the property status (base name: "status")', function() {
      // uncomment below and update the code to test the property status
      //var instance = new CoreApiV10.MultiWalletExternalTransaction();
      //expect(instance).to.be();
    });

    it('should have the property isEnableActions (base name: "isEnableActions")', function() {
      // uncomment below and update the code to test the property isEnableActions
      //var instance = new CoreApiV10.MultiWalletExternalTransaction();
      //expect(instance).to.be();
    });

    it('should have the property statusUrl (base name: "statusUrl")', function() {
      // uncomment below and update the code to test the property statusUrl
      //var instance = new CoreApiV10.MultiWalletExternalTransaction();
      //expect(instance).to.be();
    });

  });

}));
