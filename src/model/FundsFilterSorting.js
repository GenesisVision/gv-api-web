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
 * @interface FundsFilterSorting
 */



/**
* Enum class FundsFilterSorting.
* @enum {}
* @readonly
*/
export default class FundsFilterSorting {
    
        /**
         * value: "ByProfitAsc"
         * @const
         */
        ByProfitAsc = "ByProfitAsc";

    
        /**
         * value: "ByProfitDesc"
         * @const
         */
        ByProfitDesc = "ByProfitDesc";

    
        /**
         * value: "ByDrawdownAsc"
         * @const
         */
        ByDrawdownAsc = "ByDrawdownAsc";

    
        /**
         * value: "ByDrawdownDesc"
         * @const
         */
        ByDrawdownDesc = "ByDrawdownDesc";

    
        /**
         * value: "ByInvestorsAsc"
         * @const
         */
        ByInvestorsAsc = "ByInvestorsAsc";

    
        /**
         * value: "ByInvestorsDesc"
         * @const
         */
        ByInvestorsDesc = "ByInvestorsDesc";

    
        /**
         * value: "ByNewAsc"
         * @const
         */
        ByNewAsc = "ByNewAsc";

    
        /**
         * value: "ByNewDesc"
         * @const
         */
        ByNewDesc = "ByNewDesc";

    
        /**
         * value: "ByTitleAsc"
         * @const
         */
        ByTitleAsc = "ByTitleAsc";

    
        /**
         * value: "ByTitleDesc"
         * @const
         */
        ByTitleDesc = "ByTitleDesc";

    
        /**
         * value: "ByBalanceAsc"
         * @const
         */
        ByBalanceAsc = "ByBalanceAsc";

    
        /**
         * value: "ByBalanceDesc"
         * @const
         */
        ByBalanceDesc = "ByBalanceDesc";

    

    /**
    * Returns a <code>FundsFilterSorting</code> enum value from a Javascript object name.
    * @param {Object} data The plain JavaScript object containing the name of the enum value.
    * @return {module:model/FundsFilterSorting} The enum <code>FundsFilterSorting</code> value.
    */
    static constructFromObject(object) {
        return object;
    }
}

