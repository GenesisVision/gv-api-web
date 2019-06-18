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
    define(['ApiClient', 'model/ManagerPortfolioEvent'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./ManagerPortfolioEvent'));
  } else {
    // Browser globals (root is window)
    if (!root.CoreApiV10) {
      root.CoreApiV10 = {};
    }
    root.CoreApiV10.ManagerPortfolioEvents = factory(root.CoreApiV10.ApiClient, root.CoreApiV10.ManagerPortfolioEvent);
  }
}(this, function(ApiClient, ManagerPortfolioEvent) {
  'use strict';




  /**
   * The ManagerPortfolioEvents model module.
   * @module model/ManagerPortfolioEvents
   * @version v1.0
   */

  /**
   * Constructs a new <code>ManagerPortfolioEvents</code>.
   * @alias module:model/ManagerPortfolioEvents
   * @class
   */
  var exports = function() {
    var _this = this;



  };

  /**
   * Constructs a <code>ManagerPortfolioEvents</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/ManagerPortfolioEvents} obj Optional instance to populate.
   * @return {module:model/ManagerPortfolioEvents} The populated <code>ManagerPortfolioEvents</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('events')) {
        obj['events'] = ApiClient.convertToType(data['events'], [ManagerPortfolioEvent]);
      }
      if (data.hasOwnProperty('total')) {
        obj['total'] = ApiClient.convertToType(data['total'], 'Number');
      }
    }
    return obj;
  }

  /**
   * @member {Array.<module:model/ManagerPortfolioEvent>} events
   */
  exports.prototype['events'] = undefined;
  /**
   * @member {Number} total
   */
  exports.prototype['total'] = undefined;



  return exports;
}));


