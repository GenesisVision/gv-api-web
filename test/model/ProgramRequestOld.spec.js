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
    instance = new CoreApiV10.ProgramRequestOld();
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

  describe('ProgramRequestOld', function() {
    it('should create an instance of ProgramRequestOld', function() {
      // uncomment below and update the code to test ProgramRequestOld
      //var instane = new CoreApiV10.ProgramRequestOld();
      //expect(instance).to.be.a(CoreApiV10.ProgramRequestOld);
    });

    it('should have the property id (base name: "id")', function() {
      // uncomment below and update the code to test the property id
      //var instane = new CoreApiV10.ProgramRequestOld();
      //expect(instance).to.be();
    });

    it('should have the property programId (base name: "programId")', function() {
      // uncomment below and update the code to test the property programId
      //var instane = new CoreApiV10.ProgramRequestOld();
      //expect(instance).to.be();
    });

    it('should have the property _date (base name: "date")', function() {
      // uncomment below and update the code to test the property _date
      //var instane = new CoreApiV10.ProgramRequestOld();
      //expect(instance).to.be();
    });

    it('should have the property value (base name: "value")', function() {
      // uncomment below and update the code to test the property value
      //var instane = new CoreApiV10.ProgramRequestOld();
      //expect(instance).to.be();
    });

    it('should have the property valueGvt (base name: "valueGvt")', function() {
      // uncomment below and update the code to test the property valueGvt
      //var instane = new CoreApiV10.ProgramRequestOld();
      //expect(instance).to.be();
    });

    it('should have the property withdrawAll (base name: "withdrawAll")', function() {
      // uncomment below and update the code to test the property withdrawAll
      //var instane = new CoreApiV10.ProgramRequestOld();
      //expect(instance).to.be();
    });

    it('should have the property entryFee (base name: "entryFee")', function() {
      // uncomment below and update the code to test the property entryFee
      //var instane = new CoreApiV10.ProgramRequestOld();
      //expect(instance).to.be();
    });

    it('should have the property exitFee (base name: "exitFee")', function() {
      // uncomment below and update the code to test the property exitFee
      //var instane = new CoreApiV10.ProgramRequestOld();
      //expect(instance).to.be();
    });

    it('should have the property successFee (base name: "successFee")', function() {
      // uncomment below and update the code to test the property successFee
      //var instane = new CoreApiV10.ProgramRequestOld();
      //expect(instance).to.be();
    });

    it('should have the property currency (base name: "currency")', function() {
      // uncomment below and update the code to test the property currency
      //var instane = new CoreApiV10.ProgramRequestOld();
      //expect(instance).to.be();
    });

    it('should have the property fundWithdrawPercent (base name: "fundWithdrawPercent")', function() {
      // uncomment below and update the code to test the property fundWithdrawPercent
      //var instane = new CoreApiV10.ProgramRequestOld();
      //expect(instance).to.be();
    });

    it('should have the property type (base name: "type")', function() {
      // uncomment below and update the code to test the property type
      //var instane = new CoreApiV10.ProgramRequestOld();
      //expect(instance).to.be();
    });

    it('should have the property status (base name: "status")', function() {
      // uncomment below and update the code to test the property status
      //var instane = new CoreApiV10.ProgramRequestOld();
      //expect(instance).to.be();
    });

    it('should have the property logo (base name: "logo")', function() {
      // uncomment below and update the code to test the property logo
      //var instane = new CoreApiV10.ProgramRequestOld();
      //expect(instance).to.be();
    });

    it('should have the property title (base name: "title")', function() {
      // uncomment below and update the code to test the property title
      //var instane = new CoreApiV10.ProgramRequestOld();
      //expect(instance).to.be();
    });

    it('should have the property color (base name: "color")', function() {
      // uncomment below and update the code to test the property color
      //var instane = new CoreApiV10.ProgramRequestOld();
      //expect(instance).to.be();
    });

    it('should have the property canCancelRequest (base name: "canCancelRequest")', function() {
      // uncomment below and update the code to test the property canCancelRequest
      //var instane = new CoreApiV10.ProgramRequestOld();
      //expect(instance).to.be();
    });

    it('should have the property programType (base name: "programType")', function() {
      // uncomment below and update the code to test the property programType
      //var instane = new CoreApiV10.ProgramRequestOld();
      //expect(instance).to.be();
    });

  });

}));
