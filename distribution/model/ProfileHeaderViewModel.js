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
* The ProfileHeaderViewModel model module.
* @module model/ProfileHeaderViewModel
* @version v1.0
*/
var ProfileHeaderViewModel = function () {
    /**
    * Constructs a new <code>ProfileHeaderViewModel</code>.
    * @alias module:model/ProfileHeaderViewModel
    * @class
    */

    function ProfileHeaderViewModel() {
        _classCallCheck(this, ProfileHeaderViewModel);

        this.id = undefined;
        this.name = undefined;
        this.email = undefined;
        this.avatar = undefined;
        this.notificationsCount = undefined;
        this.favoritesCount = undefined;
        this.totalBalanceGvt = undefined;
        this.investedGvt = undefined;
        this.availableGvt = undefined;
        this.kycConfirmed = undefined;
        this.isTwoFactorEnabled = undefined;
        this.isNewUser = undefined;
    }

    /**
    * Constructs a <code>ProfileHeaderViewModel</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:model/ProfileHeaderViewModel} obj Optional instance to populate.
    * @return {module:model/ProfileHeaderViewModel} The populated <code>ProfileHeaderViewModel</code> instance.
    */


    _createClass(ProfileHeaderViewModel, null, [{
        key: 'constructFromObject',
        value: function constructFromObject(data, obj) {
            if (data) {
                obj = obj || new ProfileHeaderViewModel();

                if (data.hasOwnProperty('id')) {
                    obj['id'] = _ApiClient2.default.convertToType(data['id'], 'String');
                }
                if (data.hasOwnProperty('name')) {
                    obj['name'] = _ApiClient2.default.convertToType(data['name'], 'String');
                }
                if (data.hasOwnProperty('email')) {
                    obj['email'] = _ApiClient2.default.convertToType(data['email'], 'String');
                }
                if (data.hasOwnProperty('avatar')) {
                    obj['avatar'] = _ApiClient2.default.convertToType(data['avatar'], 'String');
                }
                if (data.hasOwnProperty('notificationsCount')) {
                    obj['notificationsCount'] = _ApiClient2.default.convertToType(data['notificationsCount'], 'Number');
                }
                if (data.hasOwnProperty('favoritesCount')) {
                    obj['favoritesCount'] = _ApiClient2.default.convertToType(data['favoritesCount'], 'Number');
                }
                if (data.hasOwnProperty('totalBalanceGvt')) {
                    obj['totalBalanceGvt'] = _ApiClient2.default.convertToType(data['totalBalanceGvt'], 'Number');
                }
                if (data.hasOwnProperty('investedGvt')) {
                    obj['investedGvt'] = _ApiClient2.default.convertToType(data['investedGvt'], 'Number');
                }
                if (data.hasOwnProperty('availableGvt')) {
                    obj['availableGvt'] = _ApiClient2.default.convertToType(data['availableGvt'], 'Number');
                }
                if (data.hasOwnProperty('kycConfirmed')) {
                    obj['kycConfirmed'] = _ApiClient2.default.convertToType(data['kycConfirmed'], 'Boolean');
                }
                if (data.hasOwnProperty('isTwoFactorEnabled')) {
                    obj['isTwoFactorEnabled'] = _ApiClient2.default.convertToType(data['isTwoFactorEnabled'], 'Boolean');
                }
                if (data.hasOwnProperty('isNewUser')) {
                    obj['isNewUser'] = _ApiClient2.default.convertToType(data['isNewUser'], 'Boolean');
                }
            }
            return obj;
        }

        /**
        * @member {String} id
        */

        /**
        * @member {String} name
        */

        /**
        * @member {String} email
        */

        /**
        * @member {String} avatar
        */

        /**
        * @member {Number} notificationsCount
        */

        /**
        * @member {Number} favoritesCount
        */

        /**
        * @member {Number} totalBalanceGvt
        */

        /**
        * @member {Number} investedGvt
        */

        /**
        * @member {Number} availableGvt
        */

        /**
        * @member {Boolean} kycConfirmed
        */

        /**
        * @member {Boolean} isTwoFactorEnabled
        */

        /**
        * @member {Boolean} isNewUser
        */

    }]);

    return ProfileHeaderViewModel;
}();

exports.default = ProfileHeaderViewModel;