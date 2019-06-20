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
    instance = new CoreApiV10.ProgramStatistic();
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

  describe('ProgramStatistic', function() {
    it('should create an instance of ProgramStatistic', function() {
      // uncomment below and update the code to test ProgramStatistic
      //var instane = new CoreApiV10.ProgramStatistic();
      //expect(instance).to.be.a(CoreApiV10.ProgramStatistic);
    });

    it('should have the property balanceBase (base name: "balanceBase")', function() {
      // uncomment below and update the code to test the property balanceBase
      //var instane = new CoreApiV10.ProgramStatistic();
      //expect(instance).to.be();
    });

    it('should have the property balanceGVT (base name: "balanceGVT")', function() {
      // uncomment below and update the code to test the property balanceGVT
      //var instane = new CoreApiV10.ProgramStatistic();
      //expect(instance).to.be();
    });

    it('should have the property balanceSecondary (base name: "balanceSecondary")', function() {
      // uncomment below and update the code to test the property balanceSecondary
      //var instane = new CoreApiV10.ProgramStatistic();
      //expect(instance).to.be();
    });

    it('should have the property currentValue (base name: "currentValue")', function() {
      // uncomment below and update the code to test the property currentValue
      //var instane = new CoreApiV10.ProgramStatistic();
      //expect(instance).to.be();
    });

    it('should have the property profitPercent (base name: "profitPercent")', function() {
      // uncomment below and update the code to test the property profitPercent
      //var instane = new CoreApiV10.ProgramStatistic();
      //expect(instance).to.be();
    });

    it('should have the property profitValue (base name: "profitValue")', function() {
      // uncomment below and update the code to test the property profitValue
      //var instane = new CoreApiV10.ProgramStatistic();
      //expect(instance).to.be();
    });

    it('should have the property drawdownPercent (base name: "drawdownPercent")', function() {
      // uncomment below and update the code to test the property drawdownPercent
      //var instane = new CoreApiV10.ProgramStatistic();
      //expect(instance).to.be();
    });

    it('should have the property investorsCount (base name: "investorsCount")', function() {
      // uncomment below and update the code to test the property investorsCount
      //var instane = new CoreApiV10.ProgramStatistic();
      //expect(instance).to.be();
    });

    it('should have the property hasNotifications (base name: "hasNotifications")', function() {
      // uncomment below and update the code to test the property hasNotifications
      //var instane = new CoreApiV10.ProgramStatistic();
      //expect(instance).to.be();
    });

    it('should have the property startDate (base name: "startDate")', function() {
      // uncomment below and update the code to test the property startDate
      //var instane = new CoreApiV10.ProgramStatistic();
      //expect(instance).to.be();
    });

    it('should have the property startBalance (base name: "startBalance")', function() {
      // uncomment below and update the code to test the property startBalance
      //var instane = new CoreApiV10.ProgramStatistic();
      //expect(instance).to.be();
    });

    it('should have the property startCurrency (base name: "startCurrency")', function() {
      // uncomment below and update the code to test the property startCurrency
      //var instane = new CoreApiV10.ProgramStatistic();
      //expect(instance).to.be();
    });

    it('should have the property investedAmount (base name: "investedAmount")', function() {
      // uncomment below and update the code to test the property investedAmount
      //var instane = new CoreApiV10.ProgramStatistic();
      //expect(instance).to.be();
    });

    it('should have the property investedCurrency (base name: "investedCurrency")', function() {
      // uncomment below and update the code to test the property investedCurrency
      //var instane = new CoreApiV10.ProgramStatistic();
      //expect(instance).to.be();
    });

    it('should have the property tradesCount (base name: "tradesCount")', function() {
      // uncomment below and update the code to test the property tradesCount
      //var instane = new CoreApiV10.ProgramStatistic();
      //expect(instance).to.be();
    });

    it('should have the property tradesSuccessCount (base name: "tradesSuccessCount")', function() {
      // uncomment below and update the code to test the property tradesSuccessCount
      //var instane = new CoreApiV10.ProgramStatistic();
      //expect(instance).to.be();
    });

    it('should have the property profitFactorPercent (base name: "profitFactorPercent")', function() {
      // uncomment below and update the code to test the property profitFactorPercent
      //var instane = new CoreApiV10.ProgramStatistic();
      //expect(instance).to.be();
    });

    it('should have the property sharpeRatioPercent (base name: "sharpeRatioPercent")', function() {
      // uncomment below and update the code to test the property sharpeRatioPercent
      //var instane = new CoreApiV10.ProgramStatistic();
      //expect(instance).to.be();
    });

  });

}));
