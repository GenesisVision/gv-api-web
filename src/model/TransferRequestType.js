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
 * @interface TransferRequestType
 */



/**
* Enum class TransferRequestType.
* @enum {}
* @readonly
*/
export default class TransferRequestType {
    
        /**
         * value: "Undefined"
         * @const
         */
        Undefined = "Undefined";

    
        /**
         * value: "Wallet"
         * @const
         */
        Wallet = "Wallet";

    
        /**
         * value: "CopyTradingAccount"
         * @const
         */
        CopyTradingAccount = "CopyTradingAccount";

    
        /**
         * value: "GenesisVisionPlatform"
         * @const
         */
        GenesisVisionPlatform = "GenesisVisionPlatform";

    
        /**
         * value: "SignalProviderSettings"
         * @const
         */
        SignalProviderSettings = "SignalProviderSettings";

    
        /**
         * value: "Program"
         * @const
         */
        Program = "Program";

    
        /**
         * value: "Fund"
         * @const
         */
        Fund = "Fund";

    
        /**
         * value: "PaymentTransaction"
         * @const
         */
        PaymentTransaction = "PaymentTransaction";

    
        /**
         * value: "ProgramRequest"
         * @const
         */
        ProgramRequest = "ProgramRequest";

    
        /**
         * value: "FundRequest"
         * @const
         */
        FundRequest = "FundRequest";

    
        /**
         * value: "ExternalCommonAccount"
         * @const
         */
        ExternalCommonAccount = "ExternalCommonAccount";

    

    /**
    * Returns a <code>TransferRequestType</code> enum value from a Javascript object name.
    * @param {Object} data The plain JavaScript object containing the name of the enum value.
    * @return {module:model/TransferRequestType} The enum <code>TransferRequestType</code> value.
    */
    static constructFromObject(object) {
        return object;
    }
}


