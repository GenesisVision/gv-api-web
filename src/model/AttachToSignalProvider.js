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
    root.CoreApiV10.AttachToSignalProvider = factory(root.CoreApiV10.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The AttachToSignalProvider model module.
   * @module model/AttachToSignalProvider
   * @version v1.0
   */

  /**
   * Constructs a new <code>AttachToSignalProvider</code>.
   * @alias module:model/AttachToSignalProvider
   * @class
   */
  var exports = function() {
    var _this = this;








  };

  /**
   * Constructs a <code>AttachToSignalProvider</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/AttachToSignalProvider} obj Optional instance to populate.
   * @return {module:model/AttachToSignalProvider} The populated <code>AttachToSignalProvider</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('mode')) {
        obj['mode'] = ApiClient.convertToType(data['mode'], 'String');
      }
      if (data.hasOwnProperty('percent')) {
        obj['percent'] = ApiClient.convertToType(data['percent'], 'Number');
      }
      if (data.hasOwnProperty('openTolerancePercent')) {
        obj['openTolerancePercent'] = ApiClient.convertToType(data['openTolerancePercent'], 'Number');
      }
      if (data.hasOwnProperty('fixedVolume')) {
        obj['fixedVolume'] = ApiClient.convertToType(data['fixedVolume'], 'Number');
      }
      if (data.hasOwnProperty('fixedCurrency')) {
        obj['fixedCurrency'] = ApiClient.convertToType(data['fixedCurrency'], 'String');
      }
      if (data.hasOwnProperty('initialDepositCurrency')) {
        obj['initialDepositCurrency'] = ApiClient.convertToType(data['initialDepositCurrency'], 'String');
      }
      if (data.hasOwnProperty('initialDepositAmount')) {
        obj['initialDepositAmount'] = ApiClient.convertToType(data['initialDepositAmount'], 'Number');
      }
    }
    return obj;
  }

  /**
   * @member {module:model/AttachToSignalProvider.ModeEnum} mode
   */
  exports.prototype['mode'] = undefined;
  /**
   * @member {Number} percent
   */
  exports.prototype['percent'] = undefined;
  /**
   * @member {Number} openTolerancePercent
   */
  exports.prototype['openTolerancePercent'] = undefined;
  /**
   * @member {Number} fixedVolume
   */
  exports.prototype['fixedVolume'] = undefined;
  /**
   * @member {module:model/AttachToSignalProvider.FixedCurrencyEnum} fixedCurrency
   */
  exports.prototype['fixedCurrency'] = undefined;
  /**
   * @member {module:model/AttachToSignalProvider.InitialDepositCurrencyEnum} initialDepositCurrency
   */
  exports.prototype['initialDepositCurrency'] = undefined;
  /**
   * @member {Number} initialDepositAmount
   */
  exports.prototype['initialDepositAmount'] = undefined;


  /**
   * Allowed values for the <code>mode</code> property.
   * @enum {String}
   * @readonly
   */
  exports.ModeEnum = {
    /**
     * value: "ByBalance"
     * @const
     */
    "ByBalance": "ByBalance",
    /**
     * value: "Percent"
     * @const
     */
    "Percent": "Percent",
    /**
     * value: "Fixed"
     * @const
     */
    "Fixed": "Fixed"  };

  /**
   * Allowed values for the <code>fixedCurrency</code> property.
   * @enum {String}
   * @readonly
   */
  exports.FixedCurrencyEnum = {
    /**
     * value: "BTC"
     * @const
     */
    "BTC": "BTC",
    /**
     * value: "ETH"
     * @const
     */
    "ETH": "ETH",
    /**
     * value: "USDT"
     * @const
     */
    "USDT": "USDT",
    /**
     * value: "GVT"
     * @const
     */
    "GVT": "GVT",
    /**
     * value: "Undefined"
     * @const
     */
    "Undefined": "Undefined",
    /**
     * value: "ADA"
     * @const
     */
    "ADA": "ADA",
    /**
     * value: "XRP"
     * @const
     */
    "XRP": "XRP",
    /**
     * value: "BCH"
     * @const
     */
    "BCH": "BCH",
    /**
     * value: "LTC"
     * @const
     */
    "LTC": "LTC",
    /**
     * value: "DOGE"
     * @const
     */
    "DOGE": "DOGE",
    /**
     * value: "BNB"
     * @const
     */
    "BNB": "BNB",
    /**
     * value: "USD"
     * @const
     */
    "USD": "USD",
    /**
     * value: "EUR"
     * @const
     */
    "EUR": "EUR"  };

  /**
   * Allowed values for the <code>initialDepositCurrency</code> property.
   * @enum {String}
   * @readonly
   */
  exports.InitialDepositCurrencyEnum = {
    /**
     * value: "BTC"
     * @const
     */
    "BTC": "BTC",
    /**
     * value: "ETH"
     * @const
     */
    "ETH": "ETH",
    /**
     * value: "USDT"
     * @const
     */
    "USDT": "USDT",
    /**
     * value: "GVT"
     * @const
     */
    "GVT": "GVT",
    /**
     * value: "Undefined"
     * @const
     */
    "Undefined": "Undefined",
    /**
     * value: "ADA"
     * @const
     */
    "ADA": "ADA",
    /**
     * value: "XRP"
     * @const
     */
    "XRP": "XRP",
    /**
     * value: "BCH"
     * @const
     */
    "BCH": "BCH",
    /**
     * value: "LTC"
     * @const
     */
    "LTC": "LTC",
    /**
     * value: "DOGE"
     * @const
     */
    "DOGE": "DOGE",
    /**
     * value: "BNB"
     * @const
     */
    "BNB": "BNB",
    /**
     * value: "USD"
     * @const
     */
    "USD": "USD",
    /**
     * value: "EUR"
     * @const
     */
    "EUR": "EUR"  };


  return exports;
}));


