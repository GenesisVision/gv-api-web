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
    instance = new CoreApiV10.RatesModelRates();
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

  describe('RatesModelRates', function() {
    it('should create an instance of RatesModelRates', function() {
      // uncomment below and update the code to test RatesModelRates
      //var instance = new CoreApiV10.RatesModelRates();
      //expect(instance).to.be.a(CoreApiV10.RatesModelRates);
    });

    it('should have the property _undefined (base name: "Undefined")', function() {
      // uncomment below and update the code to test the property _undefined
      //var instance = new CoreApiV10.RatesModelRates();
      //expect(instance).to.be();
    });

    it('should have the property GVT (base name: "GVT")', function() {
      // uncomment below and update the code to test the property GVT
      //var instance = new CoreApiV10.RatesModelRates();
      //expect(instance).to.be();
    });

    it('should have the property ETH (base name: "ETH")', function() {
      // uncomment below and update the code to test the property ETH
      //var instance = new CoreApiV10.RatesModelRates();
      //expect(instance).to.be();
    });

    it('should have the property BTC (base name: "BTC")', function() {
      // uncomment below and update the code to test the property BTC
      //var instance = new CoreApiV10.RatesModelRates();
      //expect(instance).to.be();
    });

    it('should have the property ADA (base name: "ADA")', function() {
      // uncomment below and update the code to test the property ADA
      //var instance = new CoreApiV10.RatesModelRates();
      //expect(instance).to.be();
    });

    it('should have the property USDT (base name: "USDT")', function() {
      // uncomment below and update the code to test the property USDT
      //var instance = new CoreApiV10.RatesModelRates();
      //expect(instance).to.be();
    });

    it('should have the property XRP (base name: "XRP")', function() {
      // uncomment below and update the code to test the property XRP
      //var instance = new CoreApiV10.RatesModelRates();
      //expect(instance).to.be();
    });

    it('should have the property BCH (base name: "BCH")', function() {
      // uncomment below and update the code to test the property BCH
      //var instance = new CoreApiV10.RatesModelRates();
      //expect(instance).to.be();
    });

    it('should have the property LTC (base name: "LTC")', function() {
      // uncomment below and update the code to test the property LTC
      //var instance = new CoreApiV10.RatesModelRates();
      //expect(instance).to.be();
    });

    it('should have the property DOGE (base name: "DOGE")', function() {
      // uncomment below and update the code to test the property DOGE
      //var instance = new CoreApiV10.RatesModelRates();
      //expect(instance).to.be();
    });

    it('should have the property BNB (base name: "BNB")', function() {
      // uncomment below and update the code to test the property BNB
      //var instance = new CoreApiV10.RatesModelRates();
      //expect(instance).to.be();
    });

    it('should have the property USD (base name: "USD")', function() {
      // uncomment below and update the code to test the property USD
      //var instance = new CoreApiV10.RatesModelRates();
      //expect(instance).to.be();
    });

    it('should have the property EUR (base name: "EUR")', function() {
      // uncomment below and update the code to test the property EUR
      //var instance = new CoreApiV10.RatesModelRates();
      //expect(instance).to.be();
    });

  });

}));
