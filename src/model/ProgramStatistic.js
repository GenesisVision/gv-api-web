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
    define(['ApiClient', 'model/AmountWithCurrency'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./AmountWithCurrency'));
  } else {
    // Browser globals (root is window)
    if (!root.CoreApiV10) {
      root.CoreApiV10 = {};
    }
    root.CoreApiV10.ProgramStatistic = factory(root.CoreApiV10.ApiClient, root.CoreApiV10.AmountWithCurrency);
  }
}(this, function(ApiClient, AmountWithCurrency) {
  'use strict';




  /**
   * The ProgramStatistic model module.
   * @module model/ProgramStatistic
   * @version v1.0
   */

  /**
   * Constructs a new <code>ProgramStatistic</code>.
   * @alias module:model/ProgramStatistic
   * @class
   */
  var exports = function() {
    var _this = this;



















  };

  /**
   * Constructs a <code>ProgramStatistic</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/ProgramStatistic} obj Optional instance to populate.
   * @return {module:model/ProgramStatistic} The populated <code>ProgramStatistic</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('balanceBase')) {
        obj['balanceBase'] = AmountWithCurrency.constructFromObject(data['balanceBase']);
      }
      if (data.hasOwnProperty('balanceGVT')) {
        obj['balanceGVT'] = AmountWithCurrency.constructFromObject(data['balanceGVT']);
      }
      if (data.hasOwnProperty('balanceSecondary')) {
        obj['balanceSecondary'] = AmountWithCurrency.constructFromObject(data['balanceSecondary']);
      }
      if (data.hasOwnProperty('currentValue')) {
        obj['currentValue'] = ApiClient.convertToType(data['currentValue'], 'Number');
      }
      if (data.hasOwnProperty('profitPercent')) {
        obj['profitPercent'] = ApiClient.convertToType(data['profitPercent'], 'Number');
      }
      if (data.hasOwnProperty('profitValue')) {
        obj['profitValue'] = ApiClient.convertToType(data['profitValue'], 'Number');
      }
      if (data.hasOwnProperty('drawdownPercent')) {
        obj['drawdownPercent'] = ApiClient.convertToType(data['drawdownPercent'], 'Number');
      }
      if (data.hasOwnProperty('investorsCount')) {
        obj['investorsCount'] = ApiClient.convertToType(data['investorsCount'], 'Number');
      }
      if (data.hasOwnProperty('hasNotifications')) {
        obj['hasNotifications'] = ApiClient.convertToType(data['hasNotifications'], 'Boolean');
      }
      if (data.hasOwnProperty('startDate')) {
        obj['startDate'] = ApiClient.convertToType(data['startDate'], 'Date');
      }
      if (data.hasOwnProperty('startBalance')) {
        obj['startBalance'] = ApiClient.convertToType(data['startBalance'], 'Number');
      }
      if (data.hasOwnProperty('startCurrency')) {
        obj['startCurrency'] = ApiClient.convertToType(data['startCurrency'], 'String');
      }
      if (data.hasOwnProperty('investedAmount')) {
        obj['investedAmount'] = ApiClient.convertToType(data['investedAmount'], 'Number');
      }
      if (data.hasOwnProperty('investedCurrency')) {
        obj['investedCurrency'] = ApiClient.convertToType(data['investedCurrency'], 'String');
      }
      if (data.hasOwnProperty('tradesCount')) {
        obj['tradesCount'] = ApiClient.convertToType(data['tradesCount'], 'Number');
      }
      if (data.hasOwnProperty('tradesSuccessCount')) {
        obj['tradesSuccessCount'] = ApiClient.convertToType(data['tradesSuccessCount'], 'Number');
      }
      if (data.hasOwnProperty('profitFactorPercent')) {
        obj['profitFactorPercent'] = ApiClient.convertToType(data['profitFactorPercent'], 'Number');
      }
      if (data.hasOwnProperty('sharpeRatioPercent')) {
        obj['sharpeRatioPercent'] = ApiClient.convertToType(data['sharpeRatioPercent'], 'Number');
      }
    }
    return obj;
  }

  /**
   * @member {module:model/AmountWithCurrency} balanceBase
   */
  exports.prototype['balanceBase'] = undefined;
  /**
   * @member {module:model/AmountWithCurrency} balanceGVT
   */
  exports.prototype['balanceGVT'] = undefined;
  /**
   * @member {module:model/AmountWithCurrency} balanceSecondary
   */
  exports.prototype['balanceSecondary'] = undefined;
  /**
   * @member {Number} currentValue
   */
  exports.prototype['currentValue'] = undefined;
  /**
   * @member {Number} profitPercent
   */
  exports.prototype['profitPercent'] = undefined;
  /**
   * @member {Number} profitValue
   */
  exports.prototype['profitValue'] = undefined;
  /**
   * @member {Number} drawdownPercent
   */
  exports.prototype['drawdownPercent'] = undefined;
  /**
   * @member {Number} investorsCount
   */
  exports.prototype['investorsCount'] = undefined;
  /**
   * @member {Boolean} hasNotifications
   */
  exports.prototype['hasNotifications'] = undefined;
  /**
   * @member {Date} startDate
   */
  exports.prototype['startDate'] = undefined;
  /**
   * @member {Number} startBalance
   */
  exports.prototype['startBalance'] = undefined;
  /**
   * @member {module:model/ProgramStatistic.StartCurrencyEnum} startCurrency
   */
  exports.prototype['startCurrency'] = undefined;
  /**
   * @member {Number} investedAmount
   */
  exports.prototype['investedAmount'] = undefined;
  /**
   * @member {module:model/ProgramStatistic.InvestedCurrencyEnum} investedCurrency
   */
  exports.prototype['investedCurrency'] = undefined;
  /**
   * @member {Number} tradesCount
   */
  exports.prototype['tradesCount'] = undefined;
  /**
   * @member {Number} tradesSuccessCount
   */
  exports.prototype['tradesSuccessCount'] = undefined;
  /**
   * @member {Number} profitFactorPercent
   */
  exports.prototype['profitFactorPercent'] = undefined;
  /**
   * @member {Number} sharpeRatioPercent
   */
  exports.prototype['sharpeRatioPercent'] = undefined;


  /**
   * Allowed values for the <code>startCurrency</code> property.
   * @enum {String}
   * @readonly
   */
  exports.StartCurrencyEnum = {
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
   * Allowed values for the <code>investedCurrency</code> property.
   * @enum {String}
   * @readonly
   */
  exports.InvestedCurrencyEnum = {
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


