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
    root.CoreApiV10.InternalTransferRequest = factory(root.CoreApiV10.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The InternalTransferRequest model module.
   * @module model/InternalTransferRequest
   * @version v1.0
   */

  /**
   * Constructs a new <code>InternalTransferRequest</code>.
   * @alias module:model/InternalTransferRequest
   * @class
   */
  var exports = function() {
    var _this = this;







  };

  /**
   * Constructs a <code>InternalTransferRequest</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/InternalTransferRequest} obj Optional instance to populate.
   * @return {module:model/InternalTransferRequest} The populated <code>InternalTransferRequest</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('sourceId')) {
        obj['sourceId'] = ApiClient.convertToType(data['sourceId'], 'String');
      }
      if (data.hasOwnProperty('sourceType')) {
        obj['sourceType'] = ApiClient.convertToType(data['sourceType'], 'String');
      }
      if (data.hasOwnProperty('destinationId')) {
        obj['destinationId'] = ApiClient.convertToType(data['destinationId'], 'String');
      }
      if (data.hasOwnProperty('destinationType')) {
        obj['destinationType'] = ApiClient.convertToType(data['destinationType'], 'String');
      }
      if (data.hasOwnProperty('amount')) {
        obj['amount'] = ApiClient.convertToType(data['amount'], 'Number');
      }
      if (data.hasOwnProperty('transferAll')) {
        obj['transferAll'] = ApiClient.convertToType(data['transferAll'], 'Boolean');
      }
    }
    return obj;
  }

  /**
   * @member {String} sourceId
   */
  exports.prototype['sourceId'] = undefined;
  /**
   * @member {module:model/InternalTransferRequest.SourceTypeEnum} sourceType
   */
  exports.prototype['sourceType'] = undefined;
  /**
   * @member {String} destinationId
   */
  exports.prototype['destinationId'] = undefined;
  /**
   * @member {module:model/InternalTransferRequest.DestinationTypeEnum} destinationType
   */
  exports.prototype['destinationType'] = undefined;
  /**
   * @member {Number} amount
   */
  exports.prototype['amount'] = undefined;
  /**
   * @member {Boolean} transferAll
   */
  exports.prototype['transferAll'] = undefined;


  /**
   * Allowed values for the <code>sourceType</code> property.
   * @enum {String}
   * @readonly
   */
  exports.SourceTypeEnum = {
    /**
     * value: "Undefined"
     * @const
     */
    "Undefined": "Undefined",
    /**
     * value: "Wallet"
     * @const
     */
    "Wallet": "Wallet",
    /**
     * value: "CopyTradingAccount"
     * @const
     */
    "CopyTradingAccount": "CopyTradingAccount",
    /**
     * value: "GenesisVisionPlatform"
     * @const
     */
    "GenesisVisionPlatform": "GenesisVisionPlatform",
    /**
     * value: "SignalProviderSettings"
     * @const
     */
    "SignalProviderSettings": "SignalProviderSettings"  };

  /**
   * Allowed values for the <code>destinationType</code> property.
   * @enum {String}
   * @readonly
   */
  exports.DestinationTypeEnum = {
    /**
     * value: "Undefined"
     * @const
     */
    "Undefined": "Undefined",
    /**
     * value: "Wallet"
     * @const
     */
    "Wallet": "Wallet",
    /**
     * value: "CopyTradingAccount"
     * @const
     */
    "CopyTradingAccount": "CopyTradingAccount",
    /**
     * value: "GenesisVisionPlatform"
     * @const
     */
    "GenesisVisionPlatform": "GenesisVisionPlatform",
    /**
     * value: "SignalProviderSettings"
     * @const
     */
    "SignalProviderSettings": "SignalProviderSettings"  };


  return exports;
}));


