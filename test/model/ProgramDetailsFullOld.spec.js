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
    instance = new CoreApiV10.ProgramDetailsFullOld();
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

  describe('ProgramDetailsFullOld', function() {
    it('should create an instance of ProgramDetailsFullOld', function() {
      // uncomment below and update the code to test ProgramDetailsFullOld
      //var instane = new CoreApiV10.ProgramDetailsFullOld();
      //expect(instance).to.be.a(CoreApiV10.ProgramDetailsFullOld);
    });

    it('should have the property currency (base name: "currency")', function() {
      // uncomment below and update the code to test the property currency
      //var instane = new CoreApiV10.ProgramDetailsFullOld();
      //expect(instance).to.be();
    });

    it('should have the property level (base name: "level")', function() {
      // uncomment below and update the code to test the property level
      //var instane = new CoreApiV10.ProgramDetailsFullOld();
      //expect(instance).to.be();
    });

    it('should have the property levelProgress (base name: "levelProgress")', function() {
      // uncomment below and update the code to test the property levelProgress
      //var instane = new CoreApiV10.ProgramDetailsFullOld();
      //expect(instance).to.be();
    });

    it('should have the property periodDuration (base name: "periodDuration")', function() {
      // uncomment below and update the code to test the property periodDuration
      //var instane = new CoreApiV10.ProgramDetailsFullOld();
      //expect(instance).to.be();
    });

    it('should have the property periodStarts (base name: "periodStarts")', function() {
      // uncomment below and update the code to test the property periodStarts
      //var instane = new CoreApiV10.ProgramDetailsFullOld();
      //expect(instance).to.be();
    });

    it('should have the property periodEnds (base name: "periodEnds")', function() {
      // uncomment below and update the code to test the property periodEnds
      //var instane = new CoreApiV10.ProgramDetailsFullOld();
      //expect(instance).to.be();
    });

    it('should have the property entryFeeSelected (base name: "entryFeeSelected")', function() {
      // uncomment below and update the code to test the property entryFeeSelected
      //var instane = new CoreApiV10.ProgramDetailsFullOld();
      //expect(instance).to.be();
    });

    it('should have the property entryFeeCurrent (base name: "entryFeeCurrent")', function() {
      // uncomment below and update the code to test the property entryFeeCurrent
      //var instane = new CoreApiV10.ProgramDetailsFullOld();
      //expect(instance).to.be();
    });

    it('should have the property successFeeSelected (base name: "successFeeSelected")', function() {
      // uncomment below and update the code to test the property successFeeSelected
      //var instane = new CoreApiV10.ProgramDetailsFullOld();
      //expect(instance).to.be();
    });

    it('should have the property successFeeCurrent (base name: "successFeeCurrent")', function() {
      // uncomment below and update the code to test the property successFeeCurrent
      //var instane = new CoreApiV10.ProgramDetailsFullOld();
      //expect(instance).to.be();
    });

    it('should have the property stopOutLevelSelected (base name: "stopOutLevelSelected")', function() {
      // uncomment below and update the code to test the property stopOutLevelSelected
      //var instane = new CoreApiV10.ProgramDetailsFullOld();
      //expect(instance).to.be();
    });

    it('should have the property stopOutLevelCurrent (base name: "stopOutLevelCurrent")', function() {
      // uncomment below and update the code to test the property stopOutLevelCurrent
      //var instane = new CoreApiV10.ProgramDetailsFullOld();
      //expect(instance).to.be();
    });

    it('should have the property isReinvesting (base name: "isReinvesting")', function() {
      // uncomment below and update the code to test the property isReinvesting
      //var instane = new CoreApiV10.ProgramDetailsFullOld();
      //expect(instance).to.be();
    });

    it('should have the property isSignalProgram (base name: "isSignalProgram")', function() {
      // uncomment below and update the code to test the property isSignalProgram
      //var instane = new CoreApiV10.ProgramDetailsFullOld();
      //expect(instance).to.be();
    });

    it('should have the property signalSuccessFee (base name: "signalSuccessFee")', function() {
      // uncomment below and update the code to test the property signalSuccessFee
      //var instane = new CoreApiV10.ProgramDetailsFullOld();
      //expect(instance).to.be();
    });

    it('should have the property signalVolumeFee (base name: "signalVolumeFee")', function() {
      // uncomment below and update the code to test the property signalVolumeFee
      //var instane = new CoreApiV10.ProgramDetailsFullOld();
      //expect(instance).to.be();
    });

    it('should have the property leverageMin (base name: "leverageMin")', function() {
      // uncomment below and update the code to test the property leverageMin
      //var instane = new CoreApiV10.ProgramDetailsFullOld();
      //expect(instance).to.be();
    });

    it('should have the property leverageMax (base name: "leverageMax")', function() {
      // uncomment below and update the code to test the property leverageMax
      //var instane = new CoreApiV10.ProgramDetailsFullOld();
      //expect(instance).to.be();
    });

    it('should have the property ageDays (base name: "ageDays")', function() {
      // uncomment below and update the code to test the property ageDays
      //var instane = new CoreApiV10.ProgramDetailsFullOld();
      //expect(instance).to.be();
    });

    it('should have the property genesisRatio (base name: "genesisRatio")', function() {
      // uncomment below and update the code to test the property genesisRatio
      //var instane = new CoreApiV10.ProgramDetailsFullOld();
      //expect(instance).to.be();
    });

    it('should have the property investmentScale (base name: "investmentScale")', function() {
      // uncomment below and update the code to test the property investmentScale
      //var instane = new CoreApiV10.ProgramDetailsFullOld();
      //expect(instance).to.be();
    });

    it('should have the property volumeScale (base name: "volumeScale")', function() {
      // uncomment below and update the code to test the property volumeScale
      //var instane = new CoreApiV10.ProgramDetailsFullOld();
      //expect(instance).to.be();
    });

    it('should have the property tradesDelay (base name: "tradesDelay")', function() {
      // uncomment below and update the code to test the property tradesDelay
      //var instane = new CoreApiV10.ProgramDetailsFullOld();
      //expect(instance).to.be();
    });

    it('should have the property availableInvestmentBase (base name: "availableInvestmentBase")', function() {
      // uncomment below and update the code to test the property availableInvestmentBase
      //var instane = new CoreApiV10.ProgramDetailsFullOld();
      //expect(instance).to.be();
    });

    it('should have the property availableInvestmentLimit (base name: "availableInvestmentLimit")', function() {
      // uncomment below and update the code to test the property availableInvestmentLimit
      //var instane = new CoreApiV10.ProgramDetailsFullOld();
      //expect(instance).to.be();
    });

    it('should have the property totalAvailableInvestment (base name: "totalAvailableInvestment")', function() {
      // uncomment below and update the code to test the property totalAvailableInvestment
      //var instane = new CoreApiV10.ProgramDetailsFullOld();
      //expect(instance).to.be();
    });

    it('should have the property brokerDetails (base name: "brokerDetails")', function() {
      // uncomment below and update the code to test the property brokerDetails
      //var instane = new CoreApiV10.ProgramDetailsFullOld();
      //expect(instance).to.be();
    });

    it('should have the property statistic (base name: "statistic")', function() {
      // uncomment below and update the code to test the property statistic
      //var instane = new CoreApiV10.ProgramDetailsFullOld();
      //expect(instance).to.be();
    });

    it('should have the property personalProgramDetails (base name: "personalProgramDetails")', function() {
      // uncomment below and update the code to test the property personalProgramDetails
      //var instane = new CoreApiV10.ProgramDetailsFullOld();
      //expect(instance).to.be();
    });

    it('should have the property tags (base name: "tags")', function() {
      // uncomment below and update the code to test the property tags
      //var instane = new CoreApiV10.ProgramDetailsFullOld();
      //expect(instance).to.be();
    });

    it('should have the property id (base name: "id")', function() {
      // uncomment below and update the code to test the property id
      //var instane = new CoreApiV10.ProgramDetailsFullOld();
      //expect(instance).to.be();
    });

    it('should have the property logo (base name: "logo")', function() {
      // uncomment below and update the code to test the property logo
      //var instane = new CoreApiV10.ProgramDetailsFullOld();
      //expect(instance).to.be();
    });

    it('should have the property url (base name: "url")', function() {
      // uncomment below and update the code to test the property url
      //var instane = new CoreApiV10.ProgramDetailsFullOld();
      //expect(instance).to.be();
    });

    it('should have the property color (base name: "color")', function() {
      // uncomment below and update the code to test the property color
      //var instane = new CoreApiV10.ProgramDetailsFullOld();
      //expect(instance).to.be();
    });

    it('should have the property description (base name: "description")', function() {
      // uncomment below and update the code to test the property description
      //var instane = new CoreApiV10.ProgramDetailsFullOld();
      //expect(instance).to.be();
    });

    it('should have the property title (base name: "title")', function() {
      // uncomment below and update the code to test the property title
      //var instane = new CoreApiV10.ProgramDetailsFullOld();
      //expect(instance).to.be();
    });

    it('should have the property ipfsHash (base name: "ipfsHash")', function() {
      // uncomment below and update the code to test the property ipfsHash
      //var instane = new CoreApiV10.ProgramDetailsFullOld();
      //expect(instance).to.be();
    });

    it('should have the property creationDate (base name: "creationDate")', function() {
      // uncomment below and update the code to test the property creationDate
      //var instane = new CoreApiV10.ProgramDetailsFullOld();
      //expect(instance).to.be();
    });

    it('should have the property status (base name: "status")', function() {
      // uncomment below and update the code to test the property status
      //var instane = new CoreApiV10.ProgramDetailsFullOld();
      //expect(instance).to.be();
    });

    it('should have the property manager (base name: "manager")', function() {
      // uncomment below and update the code to test the property manager
      //var instane = new CoreApiV10.ProgramDetailsFullOld();
      //expect(instance).to.be();
    });

  });

}));
