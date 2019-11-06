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
 * @interface MultiWalletExternalTransactionType
 */



/**
* Enum class MultiWalletExternalTransactionType.
* @enum {}
* @readonly
*/
export default class MultiWalletExternalTransactionType {
    
        /**
         * value: "All"
         * @const
         */
        All = "All";

    
        /**
         * value: "Deposit"
         * @const
         */
        Deposit = "Deposit";

    
        /**
         * value: "Withdrawal"
         * @const
         */
        Withdrawal = "Withdrawal";

    

    /**
    * Returns a <code>MultiWalletExternalTransactionType</code> enum value from a Javascript object name.
    * @param {Object} data The plain JavaScript object containing the name of the enum value.
    * @return {module:model/MultiWalletExternalTransactionType} The enum <code>MultiWalletExternalTransactionType</code> value.
    */
    static constructFromObject(object) {
        return object;
    }
}

