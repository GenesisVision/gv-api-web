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
    instance = new CoreApiV10.FundStatisticOld();
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

  describe('FundStatisticOld', function() {
    it('should create an instance of FundStatisticOld', function() {
      // uncomment below and update the code to test FundStatisticOld
      //var instane = new CoreApiV10.FundStatisticOld();
      //expect(instance).to.be.a(CoreApiV10.FundStatisticOld);
    });

    it('should have the property balance (base name: "balance")', function() {
      // uncomment below and update the code to test the property balance
      //var instane = new CoreApiV10.FundStatisticOld();
      //expect(instance).to.be();
    });

    it('should have the property profitPercent (base name: "profitPercent")', function() {
      // uncomment below and update the code to test the property profitPercent
      //var instane = new CoreApiV10.FundStatisticOld();
      //expect(instance).to.be();
    });

    it('should have the property drawdownPercent (base name: "drawdownPercent")', function() {
      // uncomment below and update the code to test the property drawdownPercent
      //var instane = new CoreApiV10.FundStatisticOld();
      //expect(instance).to.be();
    });

    it('should have the property investorsCount (base name: "investorsCount")', function() {
      // uncomment below and update the code to test the property investorsCount
      //var instane = new CoreApiV10.FundStatisticOld();
      //expect(instance).to.be();
    });

    it('should have the property startDate (base name: "startDate")', function() {
      // uncomment below and update the code to test the property startDate
      //var instane = new CoreApiV10.FundStatisticOld();
      //expect(instance).to.be();
    });

    it('should have the property startBalance (base name: "startBalance")', function() {
      // uncomment below and update the code to test the property startBalance
      //var instane = new CoreApiV10.FundStatisticOld();
      //expect(instance).to.be();
    });

    it('should have the property investedAmount (base name: "investedAmount")', function() {
      // uncomment below and update the code to test the property investedAmount
      //var instane = new CoreApiV10.FundStatisticOld();
      //expect(instance).to.be();
    });

    it('should have the property rebalancingCount (base name: "rebalancingCount")', function() {
      // uncomment below and update the code to test the property rebalancingCount
      //var instane = new CoreApiV10.FundStatisticOld();
      //expect(instance).to.be();
    });

  });

}));
