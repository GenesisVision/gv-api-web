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
    instance = new CoreApiV10.ProfileFullViewModel();
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

  describe('ProfileFullViewModel', function() {
    it('should create an instance of ProfileFullViewModel', function() {
      // uncomment below and update the code to test ProfileFullViewModel
      //var instane = new CoreApiV10.ProfileFullViewModel();
      //expect(instance).to.be.a(CoreApiV10.ProfileFullViewModel);
    });

    it('should have the property id (base name: "id")', function() {
      // uncomment below and update the code to test the property id
      //var instane = new CoreApiV10.ProfileFullViewModel();
      //expect(instance).to.be();
    });

    it('should have the property email (base name: "email")', function() {
      // uncomment below and update the code to test the property email
      //var instane = new CoreApiV10.ProfileFullViewModel();
      //expect(instance).to.be();
    });

    it('should have the property firstName (base name: "firstName")', function() {
      // uncomment below and update the code to test the property firstName
      //var instane = new CoreApiV10.ProfileFullViewModel();
      //expect(instance).to.be();
    });

    it('should have the property middleName (base name: "middleName")', function() {
      // uncomment below and update the code to test the property middleName
      //var instane = new CoreApiV10.ProfileFullViewModel();
      //expect(instance).to.be();
    });

    it('should have the property lastName (base name: "lastName")', function() {
      // uncomment below and update the code to test the property lastName
      //var instane = new CoreApiV10.ProfileFullViewModel();
      //expect(instance).to.be();
    });

    it('should have the property country (base name: "country")', function() {
      // uncomment below and update the code to test the property country
      //var instane = new CoreApiV10.ProfileFullViewModel();
      //expect(instance).to.be();
    });

    it('should have the property city (base name: "city")', function() {
      // uncomment below and update the code to test the property city
      //var instane = new CoreApiV10.ProfileFullViewModel();
      //expect(instance).to.be();
    });

    it('should have the property address (base name: "address")', function() {
      // uncomment below and update the code to test the property address
      //var instane = new CoreApiV10.ProfileFullViewModel();
      //expect(instance).to.be();
    });

    it('should have the property phone (base name: "phone")', function() {
      // uncomment below and update the code to test the property phone
      //var instane = new CoreApiV10.ProfileFullViewModel();
      //expect(instance).to.be();
    });

    it('should have the property phoneNumberConfirmed (base name: "phoneNumberConfirmed")', function() {
      // uncomment below and update the code to test the property phoneNumberConfirmed
      //var instane = new CoreApiV10.ProfileFullViewModel();
      //expect(instance).to.be();
    });

    it('should have the property birthday (base name: "birthday")', function() {
      // uncomment below and update the code to test the property birthday
      //var instane = new CoreApiV10.ProfileFullViewModel();
      //expect(instance).to.be();
    });

    it('should have the property gender (base name: "gender")', function() {
      // uncomment below and update the code to test the property gender
      //var instane = new CoreApiV10.ProfileFullViewModel();
      //expect(instance).to.be();
    });

    it('should have the property avatar (base name: "avatar")', function() {
      // uncomment below and update the code to test the property avatar
      //var instane = new CoreApiV10.ProfileFullViewModel();
      //expect(instance).to.be();
    });

    it('should have the property about (base name: "about")', function() {
      // uncomment below and update the code to test the property about
      //var instane = new CoreApiV10.ProfileFullViewModel();
      //expect(instance).to.be();
    });

    it('should have the property userName (base name: "userName")', function() {
      // uncomment below and update the code to test the property userName
      //var instane = new CoreApiV10.ProfileFullViewModel();
      //expect(instance).to.be();
    });

    it('should have the property index (base name: "index")', function() {
      // uncomment below and update the code to test the property index
      //var instane = new CoreApiV10.ProfileFullViewModel();
      //expect(instance).to.be();
    });

    it('should have the property citizenship (base name: "citizenship")', function() {
      // uncomment below and update the code to test the property citizenship
      //var instane = new CoreApiV10.ProfileFullViewModel();
      //expect(instance).to.be();
    });

    it('should have the property refUrl (base name: "refUrl")', function() {
      // uncomment below and update the code to test the property refUrl
      //var instane = new CoreApiV10.ProfileFullViewModel();
      //expect(instance).to.be();
    });

    it('should have the property verificationStatus (base name: "verificationStatus")', function() {
      // uncomment below and update the code to test the property verificationStatus
      //var instane = new CoreApiV10.ProfileFullViewModel();
      //expect(instance).to.be();
    });

  });

}));