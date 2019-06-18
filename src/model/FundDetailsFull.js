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
    define(['ApiClient', 'model/FundAssetPartWithIcon', 'model/FundStatistic', 'model/PersonalFundDetailsFull', 'model/ProfilePublic'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./FundAssetPartWithIcon'), require('./FundStatistic'), require('./PersonalFundDetailsFull'), require('./ProfilePublic'));
  } else {
    // Browser globals (root is window)
    if (!root.CoreApiV10) {
      root.CoreApiV10 = {};
    }
    root.CoreApiV10.FundDetailsFull = factory(root.CoreApiV10.ApiClient, root.CoreApiV10.FundAssetPartWithIcon, root.CoreApiV10.FundStatistic, root.CoreApiV10.PersonalFundDetailsFull, root.CoreApiV10.ProfilePublic);
  }
}(this, function(ApiClient, FundAssetPartWithIcon, FundStatistic, PersonalFundDetailsFull, ProfilePublic) {
  'use strict';




  /**
   * The FundDetailsFull model module.
   * @module model/FundDetailsFull
   * @version v1.0
   */

  /**
   * Constructs a new <code>FundDetailsFull</code>.
   * @alias module:model/FundDetailsFull
   * @class
   */
  var exports = function() {
    var _this = this;

















  };

  /**
   * Constructs a <code>FundDetailsFull</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/FundDetailsFull} obj Optional instance to populate.
   * @return {module:model/FundDetailsFull} The populated <code>FundDetailsFull</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('entryFee')) {
        obj['entryFee'] = ApiClient.convertToType(data['entryFee'], 'Number');
      }
      if (data.hasOwnProperty('exitFee')) {
        obj['exitFee'] = ApiClient.convertToType(data['exitFee'], 'Number');
      }
      if (data.hasOwnProperty('managementFee')) {
        obj['managementFee'] = ApiClient.convertToType(data['managementFee'], 'Number');
      }
      if (data.hasOwnProperty('currentAssets')) {
        obj['currentAssets'] = ApiClient.convertToType(data['currentAssets'], [FundAssetPartWithIcon]);
      }
      if (data.hasOwnProperty('statistic')) {
        obj['statistic'] = FundStatistic.constructFromObject(data['statistic']);
      }
      if (data.hasOwnProperty('personalFundDetails')) {
        obj['personalFundDetails'] = PersonalFundDetailsFull.constructFromObject(data['personalFundDetails']);
      }
      if (data.hasOwnProperty('id')) {
        obj['id'] = ApiClient.convertToType(data['id'], 'String');
      }
      if (data.hasOwnProperty('logo')) {
        obj['logo'] = ApiClient.convertToType(data['logo'], 'String');
      }
      if (data.hasOwnProperty('url')) {
        obj['url'] = ApiClient.convertToType(data['url'], 'String');
      }
      if (data.hasOwnProperty('color')) {
        obj['color'] = ApiClient.convertToType(data['color'], 'String');
      }
      if (data.hasOwnProperty('description')) {
        obj['description'] = ApiClient.convertToType(data['description'], 'String');
      }
      if (data.hasOwnProperty('title')) {
        obj['title'] = ApiClient.convertToType(data['title'], 'String');
      }
      if (data.hasOwnProperty('ipfsHash')) {
        obj['ipfsHash'] = ApiClient.convertToType(data['ipfsHash'], 'String');
      }
      if (data.hasOwnProperty('creationDate')) {
        obj['creationDate'] = ApiClient.convertToType(data['creationDate'], 'Date');
      }
      if (data.hasOwnProperty('status')) {
        obj['status'] = ApiClient.convertToType(data['status'], 'String');
      }
      if (data.hasOwnProperty('manager')) {
        obj['manager'] = ProfilePublic.constructFromObject(data['manager']);
      }
    }
    return obj;
  }

  /**
   * @member {Number} entryFee
   */
  exports.prototype['entryFee'] = undefined;
  /**
   * @member {Number} exitFee
   */
  exports.prototype['exitFee'] = undefined;
  /**
   * @member {Number} managementFee
   */
  exports.prototype['managementFee'] = undefined;
  /**
   * @member {Array.<module:model/FundAssetPartWithIcon>} currentAssets
   */
  exports.prototype['currentAssets'] = undefined;
  /**
   * @member {module:model/FundStatistic} statistic
   */
  exports.prototype['statistic'] = undefined;
  /**
   * Fields for authorized user
   * @member {module:model/PersonalFundDetailsFull} personalFundDetails
   */
  exports.prototype['personalFundDetails'] = undefined;
  /**
   * @member {String} id
   */
  exports.prototype['id'] = undefined;
  /**
   * @member {String} logo
   */
  exports.prototype['logo'] = undefined;
  /**
   * @member {String} url
   */
  exports.prototype['url'] = undefined;
  /**
   * @member {String} color
   */
  exports.prototype['color'] = undefined;
  /**
   * @member {String} description
   */
  exports.prototype['description'] = undefined;
  /**
   * @member {String} title
   */
  exports.prototype['title'] = undefined;
  /**
   * @member {String} ipfsHash
   */
  exports.prototype['ipfsHash'] = undefined;
  /**
   * @member {Date} creationDate
   */
  exports.prototype['creationDate'] = undefined;
  /**
   * @member {module:model/FundDetailsFull.StatusEnum} status
   */
  exports.prototype['status'] = undefined;
  /**
   * @member {module:model/ProfilePublic} manager
   */
  exports.prototype['manager'] = undefined;


  /**
   * Allowed values for the <code>status</code> property.
   * @enum {String}
   * @readonly
   */
  exports.StatusEnum = {
    /**
     * value: "None"
     * @const
     */
    "None": "None",
    /**
     * value: "Pending"
     * @const
     */
    "Pending": "Pending",
    /**
     * value: "ErrorCreating"
     * @const
     */
    "ErrorCreating": "ErrorCreating",
    /**
     * value: "Active"
     * @const
     */
    "Active": "Active",
    /**
     * value: "Closed"
     * @const
     */
    "Closed": "Closed",
    /**
     * value: "Archived"
     * @const
     */
    "Archived": "Archived",
    /**
     * value: "ClosedDueToInactivity"
     * @const
     */
    "ClosedDueToInactivity": "ClosedDueToInactivity"  };


  return exports;
}));


