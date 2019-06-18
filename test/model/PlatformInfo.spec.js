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
    instance = new CoreApiV10.PlatformInfo();
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

  describe('PlatformInfo', function() {
    it('should create an instance of PlatformInfo', function() {
      // uncomment below and update the code to test PlatformInfo
      //var instance = new CoreApiV10.PlatformInfo();
      //expect(instance).to.be.a(CoreApiV10.PlatformInfo);
    });

    it('should have the property iOSVersion (base name: "iOSVersion")', function() {
      // uncomment below and update the code to test the property iOSVersion
      //var instance = new CoreApiV10.PlatformInfo();
      //expect(instance).to.be();
    });

    it('should have the property androidVersion (base name: "androidVersion")', function() {
      // uncomment below and update the code to test the property androidVersion
      //var instance = new CoreApiV10.PlatformInfo();
      //expect(instance).to.be();
    });

    it('should have the property programsFacets (base name: "programsFacets")', function() {
      // uncomment below and update the code to test the property programsFacets
      //var instance = new CoreApiV10.PlatformInfo();
      //expect(instance).to.be();
    });

    it('should have the property fundsFacets (base name: "fundsFacets")', function() {
      // uncomment below and update the code to test the property fundsFacets
      //var instance = new CoreApiV10.PlatformInfo();
      //expect(instance).to.be();
    });

    it('should have the property programsInfo (base name: "programsInfo")', function() {
      // uncomment below and update the code to test the property programsInfo
      //var instance = new CoreApiV10.PlatformInfo();
      //expect(instance).to.be();
    });

    it('should have the property currencies (base name: "currencies")', function() {
      // uncomment below and update the code to test the property currencies
      //var instance = new CoreApiV10.PlatformInfo();
      //expect(instance).to.be();
    });

    it('should have the property platformCurrencies (base name: "platformCurrencies")', function() {
      // uncomment below and update the code to test the property platformCurrencies
      //var instance = new CoreApiV10.PlatformInfo();
      //expect(instance).to.be();
    });

    it('should have the property enums (base name: "enums")', function() {
      // uncomment below and update the code to test the property enums
      //var instance = new CoreApiV10.PlatformInfo();
      //expect(instance).to.be();
    });

  });

}));
