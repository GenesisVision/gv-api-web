/**
 * Core API
 * No description provided (generated by Swagger Codegen https://github.com/swagger-api/swagger-codegen)
 *
 * OpenAPI spec version: v1
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
    factory(root.expect, root.CoreApi);
  }
}(this, function(expect, CoreApi) {
  'use strict';

  var instance;

  beforeEach(function() {
    instance = new CoreApi.InvestorDashboard();
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

  describe('InvestorDashboard', function() {
    it('should create an instance of InvestorDashboard', function() {
      // uncomment below and update the code to test InvestorDashboard
      //var instane = new CoreApi.InvestorDashboard();
      //expect(instance).to.be.a(CoreApi.InvestorDashboard);
    });

    it('should have the property investmentPrograms (base name: "investmentPrograms")', function() {
      // uncomment below and update the code to test the property investmentPrograms
      //var instane = new CoreApi.InvestorDashboard();
      //expect(instance).to.be();
    });

    it('should have the property profitFromPrograms (base name: "profitFromPrograms")', function() {
      // uncomment below and update the code to test the property profitFromPrograms
      //var instane = new CoreApi.InvestorDashboard();
      //expect(instance).to.be();
    });

    it('should have the property investedAmount (base name: "investedAmount")', function() {
      // uncomment below and update the code to test the property investedAmount
      //var instane = new CoreApi.InvestorDashboard();
      //expect(instance).to.be();
    });

    it('should have the property totalPortfolioAmount (base name: "totalPortfolioAmount")', function() {
      // uncomment below and update the code to test the property totalPortfolioAmount
      //var instane = new CoreApi.InvestorDashboard();
      //expect(instance).to.be();
    });

  });

}));
