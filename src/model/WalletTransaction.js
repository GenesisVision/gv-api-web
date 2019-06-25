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
 *
 * @interface WalletTransaction
 */

/**
 *
 * @name WalletTransaction#id
 * @type {String}
 */
/**
 *
 * @name WalletTransaction#amount
 * @type {Number}
 */
/**
 *
 * @name WalletTransaction#amountConverted
 * @type {Number}
 */
/**
 *
 * @name WalletTransaction#date
 * @type {Date}
 */
/**
 *
 * @name WalletTransaction#number
 * @type {Number}
 */
/**
 *
 * @name WalletTransaction#sourceId
 * @type {String}
 */
/**
 *
 * @name WalletTransaction#sourceType
 * @type WalletTransactionSourceTypeEnum
 */
/**
 *
 * @name WalletTransaction#sourceCurrency
 * @type WalletTransactionSourceCurrencyEnum
 */
/**
 *
 * @name WalletTransaction#sourceProgramInfo
 * @type {ProgramInfo}
 */
/**
 *
 * @name WalletTransaction#sourceBlockchainInfo
 * @type {BlockchainInfo}
 */
/**
 *
 * @name WalletTransaction#sourceWithdrawalInfo
 * @type {WithdrawalInfo}
 */
/**
 *
 * @name WalletTransaction#action
 * @type WalletTransactionActionEnum
 */
/**
 *
 * @name WalletTransaction#information
 * @type {String}
 */
/**
 *
 * @name WalletTransaction#destinationId
 * @type {String}
 */
/**
 *
 * @name WalletTransaction#destinationType
 * @type WalletTransactionDestinationTypeEnum
 */
/**
 *
 * @name WalletTransaction#destinationCurrency
 * @type WalletTransactionDestinationCurrencyEnum
 */
/**
 *
 * @name WalletTransaction#destinationProgramInfo
 * @type {ProgramInfo}
 */
/**
 *
 * @name WalletTransaction#destinationBlockchainInfo
 * @type {BlockchainInfo}
 */
/**
 *
 * @name WalletTransaction#destinationWithdrawalInfo
 * @type {WithdrawalInfo}
 */





export default class WalletTransaction {

    constructor() {
        

        
        

        

        
    }

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

    id = undefined;
    amount = undefined;
    amountConverted = undefined;
    date = undefined;
    number = undefined;
    sourceId = undefined;
    sourceType = undefined;
    sourceCurrency = undefined;
    sourceProgramInfo = undefined;
    sourceBlockchainInfo = undefined;
    sourceWithdrawalInfo = undefined;
    action = undefined;
    information = undefined;
    destinationId = undefined;
    destinationType = undefined;
    destinationCurrency = undefined;
    destinationProgramInfo = undefined;
    destinationBlockchainInfo = undefined;
    destinationWithdrawalInfo = undefined;






    static SourceTypeEnum = {
    
        "Wallet": "Wallet",
    
        "Program": "Program",
    
        "Fund": "Fund",
    
        "ProgramRequest": "ProgramRequest",
    
        "FundRequest": "FundRequest",
    
        "WithdrawalRequest": "WithdrawalRequest",
    
        "PaymentTransaction": "PaymentTransaction",
    
        "Blockchain": "Blockchain",
    
        "GenesisVisionPlatform": "GenesisVisionPlatform",
    
        "SignalMasterSetting": "SignalMasterSetting",
    
        "SignalTradingAccount": "SignalTradingAccount"    
    };

    static SourceCurrencyEnum = {
    
        "BTC": "BTC",
    
        "Undefined": "Undefined",
    
        "GVT": "GVT",
    
        "ETH": "ETH",
    
        "ADA": "ADA",
    
        "USDT": "USDT",
    
        "XRP": "XRP",
    
        "BCH": "BCH",
    
        "LTC": "LTC",
    
        "DOGE": "DOGE",
    
        "BNB": "BNB",
    
        "USD": "USD",
    
        "EUR": "EUR"    
    };

    static ActionEnum = {
    
        "Transfer": "Transfer",
    
        "ProgramOpen": "ProgramOpen",
    
        "ProgramProfit": "ProgramProfit",
    
        "ProgramInvest": "ProgramInvest",
    
        "ProgramWithdrawal": "ProgramWithdrawal",
    
        "ProgramRefundPartialExecution": "ProgramRefundPartialExecution",
    
        "ProgramRefundClose": "ProgramRefundClose",
    
        "ProgramRefundStopOut": "ProgramRefundStopOut",
    
        "ProgramRequestInvest": "ProgramRequestInvest",
    
        "ProgramRequestWithdrawal": "ProgramRequestWithdrawal",
    
        "ProgramRequestCancel": "ProgramRequestCancel",
    
        "PayingTradingFee": "PayingTradingFee",
    
        "SignalSubscriberPayingFee": "SignalSubscriberPayingFee",
    
        "SignalProviderReceiveFee": "SignalProviderReceiveFee"    
    };

    static DestinationTypeEnum = {
    
        "Wallet": "Wallet",
    
        "Program": "Program",
    
        "Fund": "Fund",
    
        "ProgramRequest": "ProgramRequest",
    
        "FundRequest": "FundRequest",
    
        "WithdrawalRequest": "WithdrawalRequest",
    
        "PaymentTransaction": "PaymentTransaction",
    
        "Blockchain": "Blockchain",
    
        "GenesisVisionPlatform": "GenesisVisionPlatform",
    
        "SignalMasterSetting": "SignalMasterSetting",
    
        "SignalTradingAccount": "SignalTradingAccount"    
    };

    static DestinationCurrencyEnum = {
    
        "BTC": "BTC",
    
        "Undefined": "Undefined",
    
        "GVT": "GVT",
    
        "ETH": "ETH",
    
        "ADA": "ADA",
    
        "USDT": "USDT",
    
        "XRP": "XRP",
    
        "BCH": "BCH",
    
        "LTC": "LTC",
    
        "DOGE": "DOGE",
    
        "BNB": "BNB",
    
        "USD": "USD",
    
        "EUR": "EUR"    
    };



}




/**
 * @typedef WalletTransactionSourceTypeEnum 
 * @type {("Wallet"|"Program"|"Fund"|"ProgramRequest"|"FundRequest"|"WithdrawalRequest"|"PaymentTransaction"|"Blockchain"|"GenesisVisionPlatform"|"SignalMasterSetting"|"SignalTradingAccount")}
 */

/**
 * @typedef WalletTransactionSourceCurrencyEnum 
 * @type {("BTC"|"Undefined"|"GVT"|"ETH"|"ADA"|"USDT"|"XRP"|"BCH"|"LTC"|"DOGE"|"BNB"|"USD"|"EUR")}
 */

/**
 * @typedef WalletTransactionActionEnum 
 * @type {("Transfer"|"ProgramOpen"|"ProgramProfit"|"ProgramInvest"|"ProgramWithdrawal"|"ProgramRefundPartialExecution"|"ProgramRefundClose"|"ProgramRefundStopOut"|"ProgramRequestInvest"|"ProgramRequestWithdrawal"|"ProgramRequestCancel"|"PayingTradingFee"|"SignalSubscriberPayingFee"|"SignalProviderReceiveFee")}
 */

/**
 * @typedef WalletTransactionDestinationTypeEnum 
 * @type {("Wallet"|"Program"|"Fund"|"ProgramRequest"|"FundRequest"|"WithdrawalRequest"|"PaymentTransaction"|"Blockchain"|"GenesisVisionPlatform"|"SignalMasterSetting"|"SignalTradingAccount")}
 */

/**
 * @typedef WalletTransactionDestinationCurrencyEnum 
 * @type {("BTC"|"Undefined"|"GVT"|"ETH"|"ADA"|"USDT"|"XRP"|"BCH"|"LTC"|"DOGE"|"BNB"|"USD"|"EUR")}
 */



