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
import BlockchainInfo from './BlockchainInfo';
import ProgramInfo from './ProgramInfo';
import WithdrawalInfo from './WithdrawalInfo';





/**
* The WalletTransaction model module.
* @module model/WalletTransaction
* @version v1.0
*/
export default class WalletTransaction {
    /**
    * Constructs a new <code>WalletTransaction</code>.
    * @alias module:model/WalletTransaction
    * @class
    */

    constructor() {
        

        
        

        

        
    }

    /**
    * Constructs a <code>WalletTransaction</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:model/WalletTransaction} obj Optional instance to populate.
    * @return {module:model/WalletTransaction} The populated <code>WalletTransaction</code> instance.
    */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new WalletTransaction();

            
            
            

            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'String');
            }
            if (data.hasOwnProperty('amount')) {
                obj['amount'] = ApiClient.convertToType(data['amount'], 'Number');
            }
            if (data.hasOwnProperty('amountConverted')) {
                obj['amountConverted'] = ApiClient.convertToType(data['amountConverted'], 'Number');
            }
            if (data.hasOwnProperty('date')) {
                obj['date'] = ApiClient.convertToType(data['date'], 'Date');
            }
            if (data.hasOwnProperty('number')) {
                obj['number'] = ApiClient.convertToType(data['number'], 'Number');
            }
            if (data.hasOwnProperty('sourceId')) {
                obj['sourceId'] = ApiClient.convertToType(data['sourceId'], 'String');
            }
            if (data.hasOwnProperty('sourceType')) {
                obj['sourceType'] = ApiClient.convertToType(data['sourceType'], 'String');
            }
            if (data.hasOwnProperty('sourceCurrency')) {
                obj['sourceCurrency'] = ApiClient.convertToType(data['sourceCurrency'], 'String');
            }
            if (data.hasOwnProperty('sourceProgramInfo')) {
                obj['sourceProgramInfo'] = ProgramInfo.constructFromObject(data['sourceProgramInfo']);
            }
            if (data.hasOwnProperty('sourceBlockchainInfo')) {
                obj['sourceBlockchainInfo'] = BlockchainInfo.constructFromObject(data['sourceBlockchainInfo']);
            }
            if (data.hasOwnProperty('sourceWithdrawalInfo')) {
                obj['sourceWithdrawalInfo'] = WithdrawalInfo.constructFromObject(data['sourceWithdrawalInfo']);
            }
            if (data.hasOwnProperty('action')) {
                obj['action'] = ApiClient.convertToType(data['action'], 'String');
            }
            if (data.hasOwnProperty('information')) {
                obj['information'] = ApiClient.convertToType(data['information'], 'String');
            }
            if (data.hasOwnProperty('destinationId')) {
                obj['destinationId'] = ApiClient.convertToType(data['destinationId'], 'String');
            }
            if (data.hasOwnProperty('destinationType')) {
                obj['destinationType'] = ApiClient.convertToType(data['destinationType'], 'String');
            }
            if (data.hasOwnProperty('destinationCurrency')) {
                obj['destinationCurrency'] = ApiClient.convertToType(data['destinationCurrency'], 'String');
            }
            if (data.hasOwnProperty('destinationProgramInfo')) {
                obj['destinationProgramInfo'] = ProgramInfo.constructFromObject(data['destinationProgramInfo']);
            }
            if (data.hasOwnProperty('destinationBlockchainInfo')) {
                obj['destinationBlockchainInfo'] = BlockchainInfo.constructFromObject(data['destinationBlockchainInfo']);
            }
            if (data.hasOwnProperty('destinationWithdrawalInfo')) {
                obj['destinationWithdrawalInfo'] = WithdrawalInfo.constructFromObject(data['destinationWithdrawalInfo']);
            }
        }
        return obj;
    }

    /**
    * @member {String} id
    */
    id = undefined;
    /**
    * @member {Number} amount
    */
    amount = undefined;
    /**
    * @member {Number} amountConverted
    */
    amountConverted = undefined;
    /**
    * @member {Date} date
    */
    date = undefined;
    /**
    * @member {Number} number
    */
    number = undefined;
    /**
    * @member {String} sourceId
    */
    sourceId = undefined;
    /**
    * @member {module:model/WalletTransaction.SourceTypeEnum} sourceType
    */
    sourceType = undefined;
    /**
    * @member {module:model/WalletTransaction.SourceCurrencyEnum} sourceCurrency
    */
    sourceCurrency = undefined;
    /**
    * @member {module:model/ProgramInfo} sourceProgramInfo
    */
    sourceProgramInfo = undefined;
    /**
    * @member {module:model/BlockchainInfo} sourceBlockchainInfo
    */
    sourceBlockchainInfo = undefined;
    /**
    * @member {module:model/WithdrawalInfo} sourceWithdrawalInfo
    */
    sourceWithdrawalInfo = undefined;
    /**
    * @member {module:model/WalletTransaction.ActionEnum} action
    */
    action = undefined;
    /**
    * @member {String} information
    */
    information = undefined;
    /**
    * @member {String} destinationId
    */
    destinationId = undefined;
    /**
    * @member {module:model/WalletTransaction.DestinationTypeEnum} destinationType
    */
    destinationType = undefined;
    /**
    * @member {module:model/WalletTransaction.DestinationCurrencyEnum} destinationCurrency
    */
    destinationCurrency = undefined;
    /**
    * @member {module:model/ProgramInfo} destinationProgramInfo
    */
    destinationProgramInfo = undefined;
    /**
    * @member {module:model/BlockchainInfo} destinationBlockchainInfo
    */
    destinationBlockchainInfo = undefined;
    /**
    * @member {module:model/WithdrawalInfo} destinationWithdrawalInfo
    */
    destinationWithdrawalInfo = undefined;






    /**
    * Allowed values for the <code>sourceType</code> property.
    * @enum {String}
    * @readonly
    */
    static SourceTypeEnum = {
    
        /**
         * value: "Wallet"
         * @const
         */
        "Wallet": "Wallet",
    
        /**
         * value: "Program"
         * @const
         */
        "Program": "Program",
    
        /**
         * value: "Fund"
         * @const
         */
        "Fund": "Fund",
    
        /**
         * value: "ProgramRequest"
         * @const
         */
        "ProgramRequest": "ProgramRequest",
    
        /**
         * value: "FundRequest"
         * @const
         */
        "FundRequest": "FundRequest",
    
        /**
         * value: "WithdrawalRequest"
         * @const
         */
        "WithdrawalRequest": "WithdrawalRequest",
    
        /**
         * value: "PaymentTransaction"
         * @const
         */
        "PaymentTransaction": "PaymentTransaction"    
    };

    /**
    * Allowed values for the <code>sourceCurrency</code> property.
    * @enum {String}
    * @readonly
    */
    static SourceCurrencyEnum = {
    
        /**
         * value: "GVT"
         * @const
         */
        "GVT": "GVT",
    
        /**
         * value: "Undefined"
         * @const
         */
        "Undefined": "Undefined",
    
        /**
         * value: "ETH"
         * @const
         */
        "ETH": "ETH",
    
        /**
         * value: "BTC"
         * @const
         */
        "BTC": "BTC",
    
        /**
         * value: "ADA"
         * @const
         */
        "ADA": "ADA",
    
        /**
         * value: "USDT"
         * @const
         */
        "USDT": "USDT",
    
        /**
         * value: "XRP"
         * @const
         */
        "XRP": "XRP",
    
        /**
         * value: "BCH"
         * @const
         */
        "BCH": "BCH",
    
        /**
         * value: "LTC"
         * @const
         */
        "LTC": "LTC",
    
        /**
         * value: "DOGE"
         * @const
         */
        "DOGE": "DOGE",
    
        /**
         * value: "BNB"
         * @const
         */
        "BNB": "BNB",
    
        /**
         * value: "USD"
         * @const
         */
        "USD": "USD",
    
        /**
         * value: "EUR"
         * @const
         */
        "EUR": "EUR"    
    };

    /**
    * Allowed values for the <code>action</code> property.
    * @enum {String}
    * @readonly
    */
    static ActionEnum = {
    
        /**
         * value: "Transfer"
         * @const
         */
        "Transfer": "Transfer",
    
        /**
         * value: "ProgramOpen"
         * @const
         */
        "ProgramOpen": "ProgramOpen",
    
        /**
         * value: "ProgramProfit"
         * @const
         */
        "ProgramProfit": "ProgramProfit",
    
        /**
         * value: "ProgramInvest"
         * @const
         */
        "ProgramInvest": "ProgramInvest",
    
        /**
         * value: "ProgramWithdrawal"
         * @const
         */
        "ProgramWithdrawal": "ProgramWithdrawal",
    
        /**
         * value: "ProgramRefundPartialExecution"
         * @const
         */
        "ProgramRefundPartialExecution": "ProgramRefundPartialExecution",
    
        /**
         * value: "ProgramRefundClose"
         * @const
         */
        "ProgramRefundClose": "ProgramRefundClose",
    
        /**
         * value: "ProgramRequestInvest"
         * @const
         */
        "ProgramRequestInvest": "ProgramRequestInvest",
    
        /**
         * value: "ProgramRequestWithdrawal"
         * @const
         */
        "ProgramRequestWithdrawal": "ProgramRequestWithdrawal",
    
        /**
         * value: "ProgramRequestCancel"
         * @const
         */
        "ProgramRequestCancel": "ProgramRequestCancel"    
    };

    /**
    * Allowed values for the <code>destinationType</code> property.
    * @enum {String}
    * @readonly
    */
    static DestinationTypeEnum = {
    
        /**
         * value: "Wallet"
         * @const
         */
        "Wallet": "Wallet",
    
        /**
         * value: "Program"
         * @const
         */
        "Program": "Program",
    
        /**
         * value: "Fund"
         * @const
         */
        "Fund": "Fund",
    
        /**
         * value: "ProgramRequest"
         * @const
         */
        "ProgramRequest": "ProgramRequest",
    
        /**
         * value: "FundRequest"
         * @const
         */
        "FundRequest": "FundRequest",
    
        /**
         * value: "WithdrawalRequest"
         * @const
         */
        "WithdrawalRequest": "WithdrawalRequest",
    
        /**
         * value: "PaymentTransaction"
         * @const
         */
        "PaymentTransaction": "PaymentTransaction"    
    };

    /**
    * Allowed values for the <code>destinationCurrency</code> property.
    * @enum {String}
    * @readonly
    */
    static DestinationCurrencyEnum = {
    
        /**
         * value: "GVT"
         * @const
         */
        "GVT": "GVT",
    
        /**
         * value: "Undefined"
         * @const
         */
        "Undefined": "Undefined",
    
        /**
         * value: "ETH"
         * @const
         */
        "ETH": "ETH",
    
        /**
         * value: "BTC"
         * @const
         */
        "BTC": "BTC",
    
        /**
         * value: "ADA"
         * @const
         */
        "ADA": "ADA",
    
        /**
         * value: "USDT"
         * @const
         */
        "USDT": "USDT",
    
        /**
         * value: "XRP"
         * @const
         */
        "XRP": "XRP",
    
        /**
         * value: "BCH"
         * @const
         */
        "BCH": "BCH",
    
        /**
         * value: "LTC"
         * @const
         */
        "LTC": "LTC",
    
        /**
         * value: "DOGE"
         * @const
         */
        "DOGE": "DOGE",
    
        /**
         * value: "BNB"
         * @const
         */
        "BNB": "BNB",
    
        /**
         * value: "USD"
         * @const
         */
        "USD": "USD",
    
        /**
         * value: "EUR"
         * @const
         */
        "EUR": "EUR"    
    };



}


