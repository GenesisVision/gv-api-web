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
    instance = new CoreApiV10.FundDetailsOld();
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

  describe('FundDetailsOld', function() {
    it('should create an instance of FundDetailsOld', function() {
      // uncomment below and update the code to test FundDetailsOld
      //var instane = new CoreApiV10.FundDetailsOld();
      //expect(instance).to.be.a(CoreApiV10.FundDetailsOld);
    });

    it('should have the property totalAssetsCount (base name: "totalAssetsCount")', function() {
      // uncomment below and update the code to test the property totalAssetsCount
      //var instane = new CoreApiV10.FundDetailsOld();
      //expect(instance).to.be();
    });

    it('should have the property topFundAssets (base name: "topFundAssets")', function() {
      // uncomment below and update the code to test the property topFundAssets
      //var instane = new CoreApiV10.FundDetailsOld();
      //expect(instance).to.be();
    });

    it('should have the property statistic (base name: "statistic")', function() {
      // uncomment below and update the code to test the property statistic
      //var instane = new CoreApiV10.FundDetailsOld();
      //expect(instance).to.be();
    });

    it('should have the property personalDetails (base name: "personalDetails")', function() {
      // uncomment below and update the code to test the property personalDetails
      //var instane = new CoreApiV10.FundDetailsOld();
      //expect(instance).to.be();
    });

    it('should have the property dashboardAssetsDetails (base name: "dashboardAssetsDetails")', function() {
      // uncomment below and update the code to test the property dashboardAssetsDetails
      //var instane = new CoreApiV10.FundDetailsOld();
      //expect(instance).to.be();
    });

    it('should have the property id (base name: "id")', function() {
      // uncomment below and update the code to test the property id
      //var instane = new CoreApiV10.FundDetailsOld();
      //expect(instance).to.be();
    });

    it('should have the property logo (base name: "logo")', function() {
      // uncomment below and update the code to test the property logo
      //var instane = new CoreApiV10.FundDetailsOld();
      //expect(instance).to.be();
    });

    it('should have the property url (base name: "url")', function() {
      // uncomment below and update the code to test the property url
      //var instane = new CoreApiV10.FundDetailsOld();
      //expect(instance).to.be();
    });

    it('should have the property color (base name: "color")', function() {
      // uncomment below and update the code to test the property color
      //var instane = new CoreApiV10.FundDetailsOld();
      //expect(instance).to.be();
    });

    it('should have the property title (base name: "title")', function() {
      // uncomment below and update the code to test the property title
      //var instane = new CoreApiV10.FundDetailsOld();
      //expect(instance).to.be();
    });

    it('should have the property description (base name: "description")', function() {
      // uncomment below and update the code to test the property description
      //var instane = new CoreApiV10.FundDetailsOld();
      //expect(instance).to.be();
    });

    it('should have the property status (base name: "status")', function() {
      // uncomment below and update the code to test the property status
      //var instane = new CoreApiV10.FundDetailsOld();
      //expect(instance).to.be();
    });

    it('should have the property creationDate (base name: "creationDate")', function() {
      // uncomment below and update the code to test the property creationDate
      //var instane = new CoreApiV10.FundDetailsOld();
      //expect(instance).to.be();
    });

    it('should have the property manager (base name: "manager")', function() {
      // uncomment below and update the code to test the property manager
      //var instane = new CoreApiV10.FundDetailsOld();
      //expect(instance).to.be();
    });

    it('should have the property chart (base name: "chart")', function() {
      // uncomment below and update the code to test the property chart
      //var instane = new CoreApiV10.FundDetailsOld();
      //expect(instance).to.be();
    });

  });

}));