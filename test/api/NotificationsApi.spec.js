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
    instance = new CoreApiV10.NotificationsApi();
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

  describe('NotificationsApi', function() {
    describe('v10NotificationsByIdReadPost', function() {
      it('should call v10NotificationsByIdReadPost successfully', function(done) {
        //uncomment below and update the code to test v10NotificationsByIdReadPost
        //instance.v10NotificationsByIdReadPost(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('v10NotificationsGet', function() {
      it('should call v10NotificationsGet successfully', function(done) {
        //uncomment below and update the code to test v10NotificationsGet
        //instance.v10NotificationsGet(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('v10NotificationsNewGet', function() {
      it('should call v10NotificationsNewGet successfully', function(done) {
        //uncomment below and update the code to test v10NotificationsNewGet
        //instance.v10NotificationsNewGet(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('v10NotificationsSettingsAddPost', function() {
      it('should call v10NotificationsSettingsAddPost successfully', function(done) {
        //uncomment below and update the code to test v10NotificationsSettingsAddPost
        //instance.v10NotificationsSettingsAddPost(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('v10NotificationsSettingsByIdByEnablePost', function() {
      it('should call v10NotificationsSettingsByIdByEnablePost successfully', function(done) {
        //uncomment below and update the code to test v10NotificationsSettingsByIdByEnablePost
        //instance.v10NotificationsSettingsByIdByEnablePost(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('v10NotificationsSettingsFundsByIdGet', function() {
      it('should call v10NotificationsSettingsFundsByIdGet successfully', function(done) {
        //uncomment below and update the code to test v10NotificationsSettingsFundsByIdGet
        //instance.v10NotificationsSettingsFundsByIdGet(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('v10NotificationsSettingsGet', function() {
      it('should call v10NotificationsSettingsGet successfully', function(done) {
        //uncomment below and update the code to test v10NotificationsSettingsGet
        //instance.v10NotificationsSettingsGet(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('v10NotificationsSettingsManagersByIdGet', function() {
      it('should call v10NotificationsSettingsManagersByIdGet successfully', function(done) {
        //uncomment below and update the code to test v10NotificationsSettingsManagersByIdGet
        //instance.v10NotificationsSettingsManagersByIdGet(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('v10NotificationsSettingsProgramsByIdGet', function() {
      it('should call v10NotificationsSettingsProgramsByIdGet successfully', function(done) {
        //uncomment below and update the code to test v10NotificationsSettingsProgramsByIdGet
        //instance.v10NotificationsSettingsProgramsByIdGet(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('v10NotificationsSettingsRemoveByIdPost', function() {
      it('should call v10NotificationsSettingsRemoveByIdPost successfully', function(done) {
        //uncomment below and update the code to test v10NotificationsSettingsRemoveByIdPost
        //instance.v10NotificationsSettingsRemoveByIdPost(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
  });

}));
