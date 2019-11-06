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
 * @interface ProgramsFilterSorting
 */



/**
* Enum class ProgramsFilterSorting.
* @enum {}
* @readonly
*/
export default class ProgramsFilterSorting {
    
        /**
         * value: "ByLevelAsc"
         * @const
         */
        ByLevelAsc = "ByLevelAsc";

    
        /**
         * value: "ByLevelDesc"
         * @const
         */
        ByLevelDesc = "ByLevelDesc";

    
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
         * value: "ByTradesAsc"
         * @const
         */
        ByTradesAsc = "ByTradesAsc";

    
        /**
         * value: "ByTradesDesc"
         * @const
         */
        ByTradesDesc = "ByTradesDesc";

    
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
         * value: "ByNewDesc"
         * @const
         */
        ByNewDesc = "ByNewDesc";

    
        /**
         * value: "ByNewAsc"
         * @const
         */
        ByNewAsc = "ByNewAsc";

    
        /**
         * value: "ByEndOfPeriodAsc"
         * @const
         */
        ByEndOfPeriodAsc = "ByEndOfPeriodAsc";

    
        /**
         * value: "ByEndOfPeriodDesc"
         * @const
         */
        ByEndOfPeriodDesc = "ByEndOfPeriodDesc";

    
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
         * value: "ByCurrDesc"
         * @const
         */
        ByCurrDesc = "ByCurrDesc";

    
        /**
         * value: "ByCurrAsc"
         * @const
         */
        ByCurrAsc = "ByCurrAsc";

    
        /**
         * value: "ByLevelProgressDesc"
         * @const
         */
        ByLevelProgressDesc = "ByLevelProgressDesc";

    
        /**
         * value: "ByLevelProgressAsc"
         * @const
         */
        ByLevelProgressAsc = "ByLevelProgressAsc";

    

    /**
    * Returns a <code>ProgramsFilterSorting</code> enum value from a Javascript object name.
    * @param {Object} data The plain JavaScript object containing the name of the enum value.
    * @return {module:model/ProgramsFilterSorting} The enum <code>ProgramsFilterSorting</code> value.
    */
    static constructFromObject(object) {
        return object;
    }
}

