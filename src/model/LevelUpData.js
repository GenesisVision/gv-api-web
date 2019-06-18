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
    root.CoreApiV10.LevelUpData = factory(root.CoreApiV10.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The LevelUpData model module.
   * @module model/LevelUpData
   * @version v1.0
   */

  /**
   * Constructs a new <code>LevelUpData</code>.
   * @alias module:model/LevelUpData
   * @class
   */
  var exports = function() {
    var _this = this;






  };

  /**
   * Constructs a <code>LevelUpData</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/LevelUpData} obj Optional instance to populate.
   * @return {module:model/LevelUpData} The populated <code>LevelUpData</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('level')) {
        obj['level'] = ApiClient.convertToType(data['level'], 'Number');
      }
      if (data.hasOwnProperty('total')) {
        obj['total'] = ApiClient.convertToType(data['total'], 'Number');
      }
      if (data.hasOwnProperty('totalOwn')) {
        obj['totalOwn'] = ApiClient.convertToType(data['totalOwn'], 'Number');
      }
      if (data.hasOwnProperty('quota')) {
        obj['quota'] = ApiClient.convertToType(data['quota'], 'Number');
      }
      if (data.hasOwnProperty('targetProfit')) {
        obj['targetProfit'] = ApiClient.convertToType(data['targetProfit'], 'Number');
      }
    }
    return obj;
  }

  /**
   * @member {Number} level
   */
  exports.prototype['level'] = undefined;
  /**
   * @member {Number} total
   */
  exports.prototype['total'] = undefined;
  /**
   * @member {Number} totalOwn
   */
  exports.prototype['totalOwn'] = undefined;
  /**
   * @member {Number} quota
   */
  exports.prototype['quota'] = undefined;
  /**
   * @member {Number} targetProfit
   */
  exports.prototype['targetProfit'] = undefined;



  return exports;
}));


