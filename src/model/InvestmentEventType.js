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
 * @interface InvestmentEventType
 */



/**
* Enum class InvestmentEventType.
* @enum {}
* @readonly
*/
export default class InvestmentEventType {
    
        /**
         * value: "All"
         * @const
         */
        All = "All";

    
        /**
         * value: "AssetStarted"
         * @const
         */
        AssetStarted = "AssetStarted";

    
        /**
         * value: "AssetFinished"
         * @const
         */
        AssetFinished = "AssetFinished";

    
        /**
         * value: "AssetPeriodStarted"
         * @const
         */
        AssetPeriodStarted = "AssetPeriodStarted";

    
        /**
         * value: "AssetPeriodEnded"
         * @const
         */
        AssetPeriodEnded = "AssetPeriodEnded";

    
        /**
         * value: "AssetPeriodEndedDueToStopOut"
         * @const
         */
        AssetPeriodEndedDueToStopOut = "AssetPeriodEndedDueToStopOut";

    
        /**
         * value: "AssetBrokerChanged"
         * @const
         */
        AssetBrokerChanged = "AssetBrokerChanged";

    
        /**
         * value: "AssetInvestByInvestor"
         * @const
         */
        AssetInvestByInvestor = "AssetInvestByInvestor";

    
        /**
         * value: "AssetWithdrawalByInvestor"
         * @const
         */
        AssetWithdrawalByInvestor = "AssetWithdrawalByInvestor";

    
        /**
         * value: "AssetInvestByManager"
         * @const
         */
        AssetInvestByManager = "AssetInvestByManager";

    
        /**
         * value: "AssetWithdrawalByManager"
         * @const
         */
        AssetWithdrawalByManager = "AssetWithdrawalByManager";

    
        /**
         * value: "AssetPeriodProcessed"
         * @const
         */
        AssetPeriodProcessed = "AssetPeriodProcessed";

    
        /**
         * value: "AssetReallocation"
         * @const
         */
        AssetReallocation = "AssetReallocation";

    
        /**
         * value: "AssetSubscribeByInvestor"
         * @const
         */
        AssetSubscribeByInvestor = "AssetSubscribeByInvestor";

    
        /**
         * value: "AssetUnsubscribeByInvestor"
         * @const
         */
        AssetUnsubscribeByInvestor = "AssetUnsubscribeByInvestor";

    
        /**
         * value: "AssetTradeOpen"
         * @const
         */
        AssetTradeOpen = "AssetTradeOpen";

    
        /**
         * value: "AssetTradeClosed"
         * @const
         */
        AssetTradeClosed = "AssetTradeClosed";

    
        /**
         * value: "AssetSubscriptionEdit"
         * @const
         */
        AssetSubscriptionEdit = "AssetSubscriptionEdit";

    
        /**
         * value: "AssetEnterInvestment"
         * @const
         */
        AssetEnterInvestment = "AssetEnterInvestment";

    

    /**
    * Returns a <code>InvestmentEventType</code> enum value from a Javascript object name.
    * @param {Object} data The plain JavaScript object containing the name of the enum value.
    * @return {module:model/InvestmentEventType} The enum <code>InvestmentEventType</code> value.
    */
    static constructFromObject(object) {
        return object;
    }
}


