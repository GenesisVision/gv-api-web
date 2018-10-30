/**
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


import ApiClient from '../ApiClient';





/**
* The AssetsValue model module.
* @module model/AssetsValue
* @version v1.0
*/
export default class AssetsValue {
    /**
    * Constructs a new <code>AssetsValue</code>.
    * @alias module:model/AssetsValue
    * @class
    */

    constructor() {
        

        
        

        

        
    }

    /**
    * Constructs a <code>AssetsValue</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:model/AssetsValue} obj Optional instance to populate.
    * @return {module:model/AssetsValue} The populated <code>AssetsValue</code> instance.
    */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new AssetsValue();

            
            
            

            if (data.hasOwnProperty('type')) {
                obj['type'] = ApiClient.convertToType(data['type'], 'String');
            }
            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'String');
            }
            if (data.hasOwnProperty('title')) {
                obj['title'] = ApiClient.convertToType(data['title'], 'String');
            }
            if (data.hasOwnProperty('avatar')) {
                obj['avatar'] = ApiClient.convertToType(data['avatar'], 'String');
            }
            if (data.hasOwnProperty('color')) {
                obj['color'] = ApiClient.convertToType(data['color'], 'String');
            }
            if (data.hasOwnProperty('value')) {
                obj['value'] = ApiClient.convertToType(data['value'], 'Number');
            }
            if (data.hasOwnProperty('changePercent')) {
                obj['changePercent'] = ApiClient.convertToType(data['changePercent'], 'Number');
            }
            if (data.hasOwnProperty('changeValue')) {
                obj['changeValue'] = ApiClient.convertToType(data['changeValue'], 'Number');
            }
        }
        return obj;
    }

    /**
    * @member {module:model/AssetsValue.TypeEnum} type
    */
    type = undefined;
    /**
    * @member {String} id
    */
    id = undefined;
    /**
    * @member {String} title
    */
    title = undefined;
    /**
    * @member {String} avatar
    */
    avatar = undefined;
    /**
    * @member {String} color
    */
    color = undefined;
    /**
    * @member {Number} value
    */
    value = undefined;
    /**
    * @member {Number} changePercent
    */
    changePercent = undefined;
    /**
    * @member {Number} changeValue
    */
    changeValue = undefined;






    /**
    * Allowed values for the <code>type</code> property.
    * @enum {String}
    * @readonly
    */
    static TypeEnum = {
    
        /**
         * value: "All"
         * @const
         */
        "All": "All",
    
        /**
         * value: "Program"
         * @const
         */
        "Program": "Program",
    
        /**
         * value: "Fund"
         * @const
         */
        "Fund": "Fund"    
    };



}


