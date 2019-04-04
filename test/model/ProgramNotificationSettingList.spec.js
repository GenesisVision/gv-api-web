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
    instance = new CoreApiV10.ProgramNotificationSettingList();
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

  describe('ProgramNotificationSettingList', function() {
    it('should create an instance of ProgramNotificationSettingList', function() {
      // uncomment below and update the code to test ProgramNotificationSettingList
      //var instane = new CoreApiV10.ProgramNotificationSettingList();
      //expect(instance).to.be.a(CoreApiV10.ProgramNotificationSettingList);
    });

    it('should have the property level (base name: "level")', function() {
      // uncomment below and update the code to test the property level
      //var instane = new CoreApiV10.ProgramNotificationSettingList();
      //expect(instance).to.be();
    });

    it('should have the property settingsCustom (base name: "settingsCustom")', function() {
      // uncomment below and update the code to test the property settingsCustom
      //var instane = new CoreApiV10.ProgramNotificationSettingList();
      //expect(instance).to.be();
    });

    it('should have the property assetId (base name: "assetId")', function() {
      // uncomment below and update the code to test the property assetId
      //var instane = new CoreApiV10.ProgramNotificationSettingList();
      //expect(instance).to.be();
    });

    it('should have the property title (base name: "title")', function() {
      // uncomment below and update the code to test the property title
      //var instane = new CoreApiV10.ProgramNotificationSettingList();
      //expect(instance).to.be();
    });

    it('should have the property url (base name: "url")', function() {
      // uncomment below and update the code to test the property url
      //var instane = new CoreApiV10.ProgramNotificationSettingList();
      //expect(instance).to.be();
    });

    it('should have the property logo (base name: "logo")', function() {
      // uncomment below and update the code to test the property logo
      //var instane = new CoreApiV10.ProgramNotificationSettingList();
      //expect(instance).to.be();
    });

    it('should have the property color (base name: "color")', function() {
      // uncomment below and update the code to test the property color
      //var instane = new CoreApiV10.ProgramNotificationSettingList();
      //expect(instance).to.be();
    });

    it('should have the property settingsGeneral (base name: "settingsGeneral")', function() {
      // uncomment below and update the code to test the property settingsGeneral
      //var instane = new CoreApiV10.ProgramNotificationSettingList();
      //expect(instance).to.be();
    });

  });

}));
