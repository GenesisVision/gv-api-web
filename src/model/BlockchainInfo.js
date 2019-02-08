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
     *
     * @interface BlockchainInfo
     */
    
    /**
     *
     * @name BlockchainInfo#hash
     * @type {String}
     */
    /**
     *
     * @name BlockchainInfo#status
     * @type {("Undefined"|"New"|"Pending"|"ConfirmedByGate"|"ConfirmedAndValidated"|"Error"|"Cancelled")}
     */





export default class BlockchainInfo {

    constructor() {
        

        
        

        

        
    }

    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new BlockchainInfo();

            
            
            

            if (data.hasOwnProperty('hash')) {
                obj['hash'] = ApiClient.convertToType(data['hash'], 'String');
            }
            if (data.hasOwnProperty('status')) {
                obj['status'] = ApiClient.convertToType(data['status'], 'String');
            }
        }
        return obj;
    }

    hash = undefined;
    status = undefined;






    static StatusEnum = {
    
        "Undefined": "Undefined",
    
        "New": "New",
    
        "Pending": "Pending",
    
        "ConfirmedByGate": "ConfirmedByGate",
    
        "ConfirmedAndValidated": "ConfirmedAndValidated",
    
        "Error": "Error",
    
        "Cancelled": "Cancelled"    
    };



}


