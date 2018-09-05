'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }(); /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * Core API v1.0
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * No description provided (generated by Swagger Codegen https://github.com/swagger-api/swagger-codegen)
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      *
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * OpenAPI spec version: v1.0
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * 
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      *
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * NOTE: This class is auto generated by the swagger code generator program.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * https://github.com/swagger-api/swagger-codegen.git
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * Do not edit the class manually.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      *
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      */

var _ApiClient = require('../ApiClient');

var _ApiClient2 = _interopRequireDefault(_ApiClient);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
* The ManagerProfile model module.
* @module model/ManagerProfile
* @version v1.0
*/
var ManagerProfile = function () {
    /**
    * Constructs a new <code>ManagerProfile</code>.
    * @alias module:model/ManagerProfile
    * @class
    */

    function ManagerProfile() {
        _classCallCheck(this, ManagerProfile);

        this.id = undefined;
        this.username = undefined;
        this.about = undefined;
        this.avatar = undefined;
        this.regDate = undefined;
        this.assets = undefined;
    }

    /**
    * Constructs a <code>ManagerProfile</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:model/ManagerProfile} obj Optional instance to populate.
    * @return {module:model/ManagerProfile} The populated <code>ManagerProfile</code> instance.
    */


    _createClass(ManagerProfile, null, [{
        key: 'constructFromObject',
        value: function constructFromObject(data, obj) {
            if (data) {
                obj = obj || new ManagerProfile();

                if (data.hasOwnProperty('id')) {
                    obj['id'] = _ApiClient2.default.convertToType(data['id'], 'String');
                }
                if (data.hasOwnProperty('username')) {
                    obj['username'] = _ApiClient2.default.convertToType(data['username'], 'String');
                }
                if (data.hasOwnProperty('about')) {
                    obj['about'] = _ApiClient2.default.convertToType(data['about'], 'String');
                }
                if (data.hasOwnProperty('avatar')) {
                    obj['avatar'] = _ApiClient2.default.convertToType(data['avatar'], 'String');
                }
                if (data.hasOwnProperty('regDate')) {
                    obj['regDate'] = _ApiClient2.default.convertToType(data['regDate'], 'Date');
                }
                if (data.hasOwnProperty('assets')) {
                    obj['assets'] = _ApiClient2.default.convertToType(data['assets'], ['String']);
                }
            }
            return obj;
        }

        /**
        * @member {String} id
        */

        /**
        * @member {String} username
        */

        /**
        * @member {String} about
        */

        /**
        * @member {String} avatar
        */

        /**
        * @member {Date} regDate
        */

        /**
        * @member {Array.<String>} assets
        */

    }]);

    return ManagerProfile;
}();

exports.default = ManagerProfile;