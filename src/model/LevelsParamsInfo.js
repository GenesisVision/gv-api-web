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
    root.CoreApiV10.LevelsParamsInfo = factory(root.CoreApiV10.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The LevelsParamsInfo model module.
   * @module model/LevelsParamsInfo
   * @version v1.0
   */

  /**
   * Constructs a new <code>LevelsParamsInfo</code>.
   * @alias module:model/LevelsParamsInfo
   * @class
   */
  var exports = function() {
    var _this = this;














  };

  /**
   * Constructs a <code>LevelsParamsInfo</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/LevelsParamsInfo} obj Optional instance to populate.
   * @return {module:model/LevelsParamsInfo} The populated <code>LevelsParamsInfo</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('minAvailableToInvest')) {
        obj['minAvailableToInvest'] = ApiClient.convertToType(data['minAvailableToInvest'], 'Number');
      }
      if (data.hasOwnProperty('maxAvailableToInvest')) {
        obj['maxAvailableToInvest'] = ApiClient.convertToType(data['maxAvailableToInvest'], 'Number');
      }
      if (data.hasOwnProperty('unverifiedAvailableToInvest')) {
        obj['unverifiedAvailableToInvest'] = ApiClient.convertToType(data['unverifiedAvailableToInvest'], 'Number');
      }
      if (data.hasOwnProperty('genesisRatioMin')) {
        obj['genesisRatioMin'] = ApiClient.convertToType(data['genesisRatioMin'], 'Number');
      }
      if (data.hasOwnProperty('genesisRatioMax')) {
        obj['genesisRatioMax'] = ApiClient.convertToType(data['genesisRatioMax'], 'Number');
      }
      if (data.hasOwnProperty('genesisRatioHighRisk')) {
        obj['genesisRatioHighRisk'] = ApiClient.convertToType(data['genesisRatioHighRisk'], 'Number');
      }
      if (data.hasOwnProperty('volumeScaleMin')) {
        obj['volumeScaleMin'] = ApiClient.convertToType(data['volumeScaleMin'], 'Number');
      }
      if (data.hasOwnProperty('volumeScaleMax')) {
        obj['volumeScaleMax'] = ApiClient.convertToType(data['volumeScaleMax'], 'Number');
      }
      if (data.hasOwnProperty('programAgeMax')) {
        obj['programAgeMax'] = ApiClient.convertToType(data['programAgeMax'], 'Number');
      }
      if (data.hasOwnProperty('ageByVolumeMax')) {
        obj['ageByVolumeMax'] = ApiClient.convertToType(data['ageByVolumeMax'], 'Number');
      }
      if (data.hasOwnProperty('investmentScaleMin')) {
        obj['investmentScaleMin'] = ApiClient.convertToType(data['investmentScaleMin'], 'Number');
      }
      if (data.hasOwnProperty('investmentScaleMax')) {
        obj['investmentScaleMax'] = ApiClient.convertToType(data['investmentScaleMax'], 'Number');
      }
      if (data.hasOwnProperty('investmentScaleHighRisk')) {
        obj['investmentScaleHighRisk'] = ApiClient.convertToType(data['investmentScaleHighRisk'], 'Number');
      }
    }
    return obj;
  }

  /**
   * @member {Number} minAvailableToInvest
   */
  exports.prototype['minAvailableToInvest'] = undefined;
  /**
   * @member {Number} maxAvailableToInvest
   */
  exports.prototype['maxAvailableToInvest'] = undefined;
  /**
   * @member {Number} unverifiedAvailableToInvest
   */
  exports.prototype['unverifiedAvailableToInvest'] = undefined;
  /**
   * @member {Number} genesisRatioMin
   */
  exports.prototype['genesisRatioMin'] = undefined;
  /**
   * @member {Number} genesisRatioMax
   */
  exports.prototype['genesisRatioMax'] = undefined;
  /**
   * @member {Number} genesisRatioHighRisk
   */
  exports.prototype['genesisRatioHighRisk'] = undefined;
  /**
   * @member {Number} volumeScaleMin
   */
  exports.prototype['volumeScaleMin'] = undefined;
  /**
   * @member {Number} volumeScaleMax
   */
  exports.prototype['volumeScaleMax'] = undefined;
  /**
   * @member {Number} programAgeMax
   */
  exports.prototype['programAgeMax'] = undefined;
  /**
   * @member {Number} ageByVolumeMax
   */
  exports.prototype['ageByVolumeMax'] = undefined;
  /**
   * @member {Number} investmentScaleMin
   */
  exports.prototype['investmentScaleMin'] = undefined;
  /**
   * @member {Number} investmentScaleMax
   */
  exports.prototype['investmentScaleMax'] = undefined;
  /**
   * @member {Number} investmentScaleHighRisk
   */
  exports.prototype['investmentScaleHighRisk'] = undefined;



  return exports;
}));


