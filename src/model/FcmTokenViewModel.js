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
    root.CoreApiV10.FcmTokenViewModel = factory(root.CoreApiV10.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The FcmTokenViewModel model module.
   * @module model/FcmTokenViewModel
   * @version v1.0
   */

  /**
   * Constructs a new <code>FcmTokenViewModel</code>.
   * @alias module:model/FcmTokenViewModel
   * @class
   * @param token {String} 
   */
  var exports = function(token) {
    var _this = this;

    _this['token'] = token;
  };

  /**
   * Constructs a <code>FcmTokenViewModel</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/FcmTokenViewModel} obj Optional instance to populate.
   * @return {module:model/FcmTokenViewModel} The populated <code>FcmTokenViewModel</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('token')) {
        obj['token'] = ApiClient.convertToType(data['token'], 'String');
      }
    }
    return obj;
  }

  /**
   * @member {String} token
   */
  exports.prototype['token'] = undefined;



  return exports;
}));


