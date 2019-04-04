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
    instance = new CoreApiV10.PlatformApi();
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

  describe('PlatformApi', function() {
    describe('v10PlatformInfoGet', function() {
      it('should call v10PlatformInfoGet successfully', function(done) {
        //uncomment below and update the code to test v10PlatformInfoGet
        //instance.v10PlatformInfoGet(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('v10PlatformLevelsGet', function() {
      it('should call v10PlatformLevelsGet successfully', function(done) {
        //uncomment below and update the code to test v10PlatformLevelsGet
        //instance.v10PlatformLevelsGet(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('v10PlatformRiskcontrolGet', function() {
      it('should call v10PlatformRiskcontrolGet successfully', function(done) {
        //uncomment below and update the code to test v10PlatformRiskcontrolGet
        //instance.v10PlatformRiskcontrolGet(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('v10PlatformStatisticGet', function() {
      it('should call v10PlatformStatisticGet successfully', function(done) {
        //uncomment below and update the code to test v10PlatformStatisticGet
        //instance.v10PlatformStatisticGet(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
  });

}));
