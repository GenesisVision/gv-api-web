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
    root.CoreApiV10.ProgramBalanceChartElement = factory(root.CoreApiV10.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The ProgramBalanceChartElement model module.
   * @module model/ProgramBalanceChartElement
   * @version v1.0
   */

  /**
   * Constructs a new <code>ProgramBalanceChartElement</code>.
   * @alias module:model/ProgramBalanceChartElement
   * @class
   */
  var exports = function() {
    var _this = this;





  };

  /**
   * Constructs a <code>ProgramBalanceChartElement</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/ProgramBalanceChartElement} obj Optional instance to populate.
   * @return {module:model/ProgramBalanceChartElement} The populated <code>ProgramBalanceChartElement</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('profit')) {
        obj['profit'] = ApiClient.convertToType(data['profit'], 'Number');
      }
      if (data.hasOwnProperty('date')) {
        obj['date'] = ApiClient.convertToType(data['date'], 'Date');
      }
      if (data.hasOwnProperty('managerFunds')) {
        obj['managerFunds'] = ApiClient.convertToType(data['managerFunds'], 'Number');
      }
      if (data.hasOwnProperty('investorsFunds')) {
        obj['investorsFunds'] = ApiClient.convertToType(data['investorsFunds'], 'Number');
      }
    }
    return obj;
  }

  /**
   * @member {Number} profit
   */
  exports.prototype['profit'] = undefined;
  /**
   * @member {Date} date
   */
  exports.prototype['date'] = undefined;
  /**
   * @member {Number} managerFunds
   */
  exports.prototype['managerFunds'] = undefined;
  /**
   * @member {Number} investorsFunds
   */
  exports.prototype['investorsFunds'] = undefined;



  return exports;
}));


