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
* The ProfilePublic model module.
* @module model/ProfilePublic
* @version v1.0
*/
var ProfilePublic = function () {
    /**
    * Constructs a new <code>ProfilePublic</code>.
    * @alias module:model/ProfilePublic
    * @class
    */

    function ProfilePublic() {
        _classCallCheck(this, ProfilePublic);

        this.id = undefined;
        this.username = undefined;
        this.avatar = undefined;
        this.registrationDate = undefined;
        this.url = undefined;
    }

    /**
    * Constructs a <code>ProfilePublic</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:model/ProfilePublic} obj Optional instance to populate.
    * @return {module:model/ProfilePublic} The populated <code>ProfilePublic</code> instance.
    */


    _createClass(ProfilePublic, null, [{
        key: 'constructFromObject',
        value: function constructFromObject(data, obj) {
            if (data) {
                obj = obj || new ProfilePublic();

                if (data.hasOwnProperty('id')) {
                    obj['id'] = _ApiClient2.default.convertToType(data['id'], 'String');
                }
                if (data.hasOwnProperty('username')) {
                    obj['username'] = _ApiClient2.default.convertToType(data['username'], 'String');
                }
                if (data.hasOwnProperty('avatar')) {
                    obj['avatar'] = _ApiClient2.default.convertToType(data['avatar'], 'String');
                }
                if (data.hasOwnProperty('registrationDate')) {
                    obj['registrationDate'] = _ApiClient2.default.convertToType(data['registrationDate'], 'Date');
                }
                if (data.hasOwnProperty('url')) {
                    obj['url'] = _ApiClient2.default.convertToType(data['url'], 'String');
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
        * @member {String} avatar
        */

        /**
        * @member {Date} registrationDate
        */

        /**
        * @member {String} url
        */

    }]);

    return ProfilePublic;
}();

exports.default = ProfilePublic;