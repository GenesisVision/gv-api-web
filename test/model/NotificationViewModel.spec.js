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
    instance = new CoreApiV10.NotificationViewModel();
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

  describe('NotificationViewModel', function() {
    it('should create an instance of NotificationViewModel', function() {
      // uncomment below and update the code to test NotificationViewModel
      //var instane = new CoreApiV10.NotificationViewModel();
      //expect(instance).to.be.a(CoreApiV10.NotificationViewModel);
    });

    it('should have the property id (base name: "id")', function() {
      // uncomment below and update the code to test the property id
      //var instane = new CoreApiV10.NotificationViewModel();
      //expect(instance).to.be();
    });

    it('should have the property text (base name: "text")', function() {
      // uncomment below and update the code to test the property text
      //var instane = new CoreApiV10.NotificationViewModel();
      //expect(instance).to.be();
    });

    it('should have the property _date (base name: "date")', function() {
      // uncomment below and update the code to test the property _date
      //var instane = new CoreApiV10.NotificationViewModel();
      //expect(instance).to.be();
    });

    it('should have the property type (base name: "type")', function() {
      // uncomment below and update the code to test the property type
      //var instane = new CoreApiV10.NotificationViewModel();
      //expect(instance).to.be();
    });

    it('should have the property assetId (base name: "assetId")', function() {
      // uncomment below and update the code to test the property assetId
      //var instane = new CoreApiV10.NotificationViewModel();
      //expect(instance).to.be();
    });

    it('should have the property managerId (base name: "managerId")', function() {
      // uncomment below and update the code to test the property managerId
      //var instane = new CoreApiV10.NotificationViewModel();
      //expect(instance).to.be();
    });

    it('should have the property logo (base name: "logo")', function() {
      // uncomment below and update the code to test the property logo
      //var instane = new CoreApiV10.NotificationViewModel();
      //expect(instance).to.be();
    });

    it('should have the property url (base name: "url")', function() {
      // uncomment below and update the code to test the property url
      //var instane = new CoreApiV10.NotificationViewModel();
      //expect(instance).to.be();
    });

    it('should have the property color (base name: "color")', function() {
      // uncomment below and update the code to test the property color
      //var instane = new CoreApiV10.NotificationViewModel();
      //expect(instance).to.be();
    });

    it('should have the property isUnread (base name: "isUnread")', function() {
      // uncomment below and update the code to test the property isUnread
      //var instane = new CoreApiV10.NotificationViewModel();
      //expect(instance).to.be();
    });

    it('should have the property assetType (base name: "assetType")', function() {
      // uncomment below and update the code to test the property assetType
      //var instane = new CoreApiV10.NotificationViewModel();
      //expect(instance).to.be();
    });

  });

}));
