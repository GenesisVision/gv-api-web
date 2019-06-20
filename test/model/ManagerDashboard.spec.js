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
    instance = new CoreApiV10.ManagerDashboard();
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

  describe('ManagerDashboard', function() {
    it('should create an instance of ManagerDashboard', function() {
      // uncomment below and update the code to test ManagerDashboard
      //var instane = new CoreApiV10.ManagerDashboard();
      //expect(instance).to.be.a(CoreApiV10.ManagerDashboard);
    });

    it('should have the property profile (base name: "profile")', function() {
      // uncomment below and update the code to test the property profile
      //var instane = new CoreApiV10.ManagerDashboard();
      //expect(instance).to.be();
    });

    it('should have the property requests (base name: "requests")', function() {
      // uncomment below and update the code to test the property requests
      //var instane = new CoreApiV10.ManagerDashboard();
      //expect(instance).to.be();
    });

    it('should have the property events (base name: "events")', function() {
      // uncomment below and update the code to test the property events
      //var instane = new CoreApiV10.ManagerDashboard();
      //expect(instance).to.be();
    });

    it('should have the property allAssets (base name: "allAssets")', function() {
      // uncomment below and update the code to test the property allAssets
      //var instane = new CoreApiV10.ManagerDashboard();
      //expect(instance).to.be();
    });

    it('should have the property programChart (base name: "programChart")', function() {
      // uncomment below and update the code to test the property programChart
      //var instane = new CoreApiV10.ManagerDashboard();
      //expect(instance).to.be();
    });

    it('should have the property fundChart (base name: "fundChart")', function() {
      // uncomment below and update the code to test the property fundChart
      //var instane = new CoreApiV10.ManagerDashboard();
      //expect(instance).to.be();
    });

  });

}));
