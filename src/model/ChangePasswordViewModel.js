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
    // AMD. Register as an anonymous module.
    define(['ApiClient'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'));
  } else {
    // Browser globals (root is window)
    if (!root.CoreApiV10) {
      root.CoreApiV10 = {};
    }
    root.CoreApiV10.ChangePasswordViewModel = factory(root.CoreApiV10.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The ChangePasswordViewModel model module.
   * @module model/ChangePasswordViewModel
   * @version v1.0
   */

  /**
   * Constructs a new <code>ChangePasswordViewModel</code>.
   * @alias module:model/ChangePasswordViewModel
   * @class
   * @param oldPassword {String} 
   * @param password {String} 
   */
  var exports = function(oldPassword, password) {
    var _this = this;

    _this['oldPassword'] = oldPassword;
    _this['password'] = password;

  };

  /**
   * Constructs a <code>ChangePasswordViewModel</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/ChangePasswordViewModel} obj Optional instance to populate.
   * @return {module:model/ChangePasswordViewModel} The populated <code>ChangePasswordViewModel</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('oldPassword')) {
        obj['oldPassword'] = ApiClient.convertToType(data['oldPassword'], 'String');
      }
      if (data.hasOwnProperty('password')) {
        obj['password'] = ApiClient.convertToType(data['password'], 'String');
      }
      if (data.hasOwnProperty('confirmPassword')) {
        obj['confirmPassword'] = ApiClient.convertToType(data['confirmPassword'], 'String');
      }
    }
    return obj;
  }

  /**
   * @member {String} oldPassword
   */
  exports.prototype['oldPassword'] = undefined;
  /**
   * @member {String} password
   */
  exports.prototype['password'] = undefined;
  /**
   * @member {String} confirmPassword
   */
  exports.prototype['confirmPassword'] = undefined;



  return exports;
}));


