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
    instance = new CoreApiV10.PersonalFundDetailsFullOld();
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

  describe('PersonalFundDetailsFullOld', function() {
    it('should create an instance of PersonalFundDetailsFullOld', function() {
      // uncomment below and update the code to test PersonalFundDetailsFullOld
      //var instane = new CoreApiV10.PersonalFundDetailsFullOld();
      //expect(instance).to.be.a(CoreApiV10.PersonalFundDetailsFullOld);
    });

    it('should have the property withdrawPercent (base name: "withdrawPercent")', function() {
      // uncomment below and update the code to test the property withdrawPercent
      //var instane = new CoreApiV10.PersonalFundDetailsFullOld();
      //expect(instance).to.be();
    });

    it('should have the property canReallocate (base name: "canReallocate")', function() {
      // uncomment below and update the code to test the property canReallocate
      //var instane = new CoreApiV10.PersonalFundDetailsFullOld();
      //expect(instance).to.be();
    });

    it('should have the property availableReallocationPercents (base name: "availableReallocationPercents")', function() {
      // uncomment below and update the code to test the property availableReallocationPercents
      //var instane = new CoreApiV10.PersonalFundDetailsFullOld();
      //expect(instance).to.be();
    });

    it('should have the property nextReallocationPercents (base name: "nextReallocationPercents")', function() {
      // uncomment below and update the code to test the property nextReallocationPercents
      //var instane = new CoreApiV10.PersonalFundDetailsFullOld();
      //expect(instance).to.be();
    });

    it('should have the property exitFeePersonal (base name: "exitFeePersonal")', function() {
      // uncomment below and update the code to test the property exitFeePersonal
      //var instane = new CoreApiV10.PersonalFundDetailsFullOld();
      //expect(instance).to.be();
    });

    it('should have the property isFavorite (base name: "isFavorite")', function() {
      // uncomment below and update the code to test the property isFavorite
      //var instane = new CoreApiV10.PersonalFundDetailsFullOld();
      //expect(instance).to.be();
    });

    it('should have the property isInvested (base name: "isInvested")', function() {
      // uncomment below and update the code to test the property isInvested
      //var instane = new CoreApiV10.PersonalFundDetailsFullOld();
      //expect(instance).to.be();
    });

    it('should have the property isOwnProgram (base name: "isOwnProgram")', function() {
      // uncomment below and update the code to test the property isOwnProgram
      //var instane = new CoreApiV10.PersonalFundDetailsFullOld();
      //expect(instance).to.be();
    });

    it('should have the property canCloseAsset (base name: "canCloseAsset")', function() {
      // uncomment below and update the code to test the property canCloseAsset
      //var instane = new CoreApiV10.PersonalFundDetailsFullOld();
      //expect(instance).to.be();
    });

    it('should have the property isFinishing (base name: "isFinishing")', function() {
      // uncomment below and update the code to test the property isFinishing
      //var instane = new CoreApiV10.PersonalFundDetailsFullOld();
      //expect(instance).to.be();
    });

    it('should have the property canInvest (base name: "canInvest")', function() {
      // uncomment below and update the code to test the property canInvest
      //var instane = new CoreApiV10.PersonalFundDetailsFullOld();
      //expect(instance).to.be();
    });

    it('should have the property canWithdraw (base name: "canWithdraw")', function() {
      // uncomment below and update the code to test the property canWithdraw
      //var instane = new CoreApiV10.PersonalFundDetailsFullOld();
      //expect(instance).to.be();
    });

    it('should have the property canClosePeriod (base name: "canClosePeriod")', function() {
      // uncomment below and update the code to test the property canClosePeriod
      //var instane = new CoreApiV10.PersonalFundDetailsFullOld();
      //expect(instance).to.be();
    });

    it('should have the property hasNotifications (base name: "hasNotifications")', function() {
      // uncomment below and update the code to test the property hasNotifications
      //var instane = new CoreApiV10.PersonalFundDetailsFullOld();
      //expect(instance).to.be();
    });

    it('should have the property value (base name: "value")', function() {
      // uncomment below and update the code to test the property value
      //var instane = new CoreApiV10.PersonalFundDetailsFullOld();
      //expect(instance).to.be();
    });

    it('should have the property profit (base name: "profit")', function() {
      // uncomment below and update the code to test the property profit
      //var instane = new CoreApiV10.PersonalFundDetailsFullOld();
      //expect(instance).to.be();
    });

    it('should have the property invested (base name: "invested")', function() {
      // uncomment below and update the code to test the property invested
      //var instane = new CoreApiV10.PersonalFundDetailsFullOld();
      //expect(instance).to.be();
    });

    it('should have the property pendingInput (base name: "pendingInput")', function() {
      // uncomment below and update the code to test the property pendingInput
      //var instane = new CoreApiV10.PersonalFundDetailsFullOld();
      //expect(instance).to.be();
    });

    it('should have the property pendingOutput (base name: "pendingOutput")', function() {
      // uncomment below and update the code to test the property pendingOutput
      //var instane = new CoreApiV10.PersonalFundDetailsFullOld();
      //expect(instance).to.be();
    });

    it('should have the property pendingOutputIsWithdrawAll (base name: "pendingOutputIsWithdrawAll")', function() {
      // uncomment below and update the code to test the property pendingOutputIsWithdrawAll
      //var instane = new CoreApiV10.PersonalFundDetailsFullOld();
      //expect(instance).to.be();
    });

    it('should have the property status (base name: "status")', function() {
      // uncomment below and update the code to test the property status
      //var instane = new CoreApiV10.PersonalFundDetailsFullOld();
      //expect(instance).to.be();
    });

  });

}));
