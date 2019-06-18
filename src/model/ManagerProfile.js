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
    define(['ApiClient', 'model/SocialLinkViewModel'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./SocialLinkViewModel'));
  } else {
    // Browser globals (root is window)
    if (!root.CoreApiV10) {
      root.CoreApiV10 = {};
    }
    root.CoreApiV10.ManagerProfile = factory(root.CoreApiV10.ApiClient, root.CoreApiV10.SocialLinkViewModel);
  }
}(this, function(ApiClient, SocialLinkViewModel) {
  'use strict';




  /**
   * The ManagerProfile model module.
   * @module model/ManagerProfile
   * @version v1.0
   */

  /**
   * Constructs a new <code>ManagerProfile</code>.
   * @alias module:model/ManagerProfile
   * @class
   */
  var exports = function() {
    var _this = this;









  };

  /**
   * Constructs a <code>ManagerProfile</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/ManagerProfile} obj Optional instance to populate.
   * @return {module:model/ManagerProfile} The populated <code>ManagerProfile</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('id')) {
        obj['id'] = ApiClient.convertToType(data['id'], 'String');
      }
      if (data.hasOwnProperty('username')) {
        obj['username'] = ApiClient.convertToType(data['username'], 'String');
      }
      if (data.hasOwnProperty('about')) {
        obj['about'] = ApiClient.convertToType(data['about'], 'String');
      }
      if (data.hasOwnProperty('avatar')) {
        obj['avatar'] = ApiClient.convertToType(data['avatar'], 'String');
      }
      if (data.hasOwnProperty('regDate')) {
        obj['regDate'] = ApiClient.convertToType(data['regDate'], 'Date');
      }
      if (data.hasOwnProperty('assets')) {
        obj['assets'] = ApiClient.convertToType(data['assets'], ['String']);
      }
      if (data.hasOwnProperty('url')) {
        obj['url'] = ApiClient.convertToType(data['url'], 'String');
      }
      if (data.hasOwnProperty('socialLinks')) {
        obj['socialLinks'] = ApiClient.convertToType(data['socialLinks'], [SocialLinkViewModel]);
      }
    }
    return obj;
  }

  /**
   * @member {String} id
   */
  exports.prototype['id'] = undefined;
  /**
   * @member {String} username
   */
  exports.prototype['username'] = undefined;
  /**
   * @member {String} about
   */
  exports.prototype['about'] = undefined;
  /**
   * @member {String} avatar
   */
  exports.prototype['avatar'] = undefined;
  /**
   * @member {Date} regDate
   */
  exports.prototype['regDate'] = undefined;
  /**
   * @member {Array.<String>} assets
   */
  exports.prototype['assets'] = undefined;
  /**
   * @member {String} url
   */
  exports.prototype['url'] = undefined;
  /**
   * @member {Array.<module:model/SocialLinkViewModel>} socialLinks
   */
  exports.prototype['socialLinks'] = undefined;



  return exports;
}));


