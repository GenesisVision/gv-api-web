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
import ConvertingDetails from './ConvertingDetails';
import ExternalTransactionDetails from './ExternalTransactionDetails';
import ProgramTransactionDetails from './ProgramTransactionDetails';





    /**
     *
     * @interface TransactionDetails
     */
    
    /**
     *
     * @name TransactionDetails#type
     * @type {("Investing"|"Withdrawal"|"ExternalWithdrawal"|"ExternalDeposit"|"Converting"|"Open"|"Close"|"Profit"|"PlatformFee"|"SubscribeSignal"|"ReceiveSignal"|"DepositSignal")}
     */
    /**
     *
     * @name TransactionDetails#programDetails
     * @type {ProgramTransactionDetails}
     */
    /**
     *
     * @name TransactionDetails#convertingDetails
     * @type {ConvertingDetails}
     */
    /**
     *
     * @name TransactionDetails#externalTransactionDetails
     * @type {ExternalTransactionDetails}
     */
    /**
     *
     * @name TransactionDetails#status
     * @type {("Done"|"Pending"|"Canceled"|"Error")}
     */
    /**
     *
     * @name TransactionDetails#currency
     * @type {("BTC"|"ETH"|"USDT"|"GVT"|"Undefined"|"ADA"|"XRP"|"BCH"|"LTC"|"DOGE"|"BNB"|"USD"|"EUR")}
     */
    /**
     *
     * @name TransactionDetails#currencyName
     * @type {String}
     */
    /**
     *
     * @name TransactionDetails#currencyLogo
     * @type {String}
     */
    /**
     *
     * @name TransactionDetails#gvCommission
     * @type {Number}
     */
    /**
     *
     * @name TransactionDetails#gvCommissionCurrency
     * @type {("BTC"|"ETH"|"USDT"|"GVT"|"Undefined"|"ADA"|"XRP"|"BCH"|"LTC"|"DOGE"|"BNB"|"USD"|"EUR")}
     */
    /**
     *
     * @name TransactionDetails#gvCommissionPercent
     * @type {Number}
     */
    /**
     *
     * @name TransactionDetails#amount
     * @type {Number}
     */





export default class TransactionDetails {

    constructor() {
        

        
        

        

        
    }

    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new TransactionDetails();

            
            
            

            if (data.hasOwnProperty('type')) {
                obj['type'] = ApiClient.convertToType(data['type'], 'String');
            }
            if (data.hasOwnProperty('programDetails')) {
                obj['programDetails'] = ProgramTransactionDetails.constructFromObject(data['programDetails']);
            }
            if (data.hasOwnProperty('convertingDetails')) {
                obj['convertingDetails'] = ConvertingDetails.constructFromObject(data['convertingDetails']);
            }
            if (data.hasOwnProperty('externalTransactionDetails')) {
                obj['externalTransactionDetails'] = ExternalTransactionDetails.constructFromObject(data['externalTransactionDetails']);
            }
            if (data.hasOwnProperty('status')) {
                obj['status'] = ApiClient.convertToType(data['status'], 'String');
            }
            if (data.hasOwnProperty('currency')) {
                obj['currency'] = ApiClient.convertToType(data['currency'], 'String');
            }
            if (data.hasOwnProperty('currencyName')) {
                obj['currencyName'] = ApiClient.convertToType(data['currencyName'], 'String');
            }
            if (data.hasOwnProperty('currencyLogo')) {
                obj['currencyLogo'] = ApiClient.convertToType(data['currencyLogo'], 'String');
            }
            if (data.hasOwnProperty('gvCommission')) {
                obj['gvCommission'] = ApiClient.convertToType(data['gvCommission'], 'Number');
            }
            if (data.hasOwnProperty('gvCommissionCurrency')) {
                obj['gvCommissionCurrency'] = ApiClient.convertToType(data['gvCommissionCurrency'], 'String');
            }
            if (data.hasOwnProperty('gvCommissionPercent')) {
                obj['gvCommissionPercent'] = ApiClient.convertToType(data['gvCommissionPercent'], 'Number');
            }
            if (data.hasOwnProperty('amount')) {
                obj['amount'] = ApiClient.convertToType(data['amount'], 'Number');
            }
        }
        return obj;
    }

    type = undefined;
    programDetails = undefined;
    convertingDetails = undefined;
    externalTransactionDetails = undefined;
    status = undefined;
    currency = undefined;
    currencyName = undefined;
    currencyLogo = undefined;
    gvCommission = undefined;
    gvCommissionCurrency = undefined;
    gvCommissionPercent = undefined;
    amount = undefined;






    static TypeEnum = {
    
        "Investing": "Investing",
    
        "Withdrawal": "Withdrawal",
    
        "ExternalWithdrawal": "ExternalWithdrawal",
    
        "ExternalDeposit": "ExternalDeposit",
    
        "Converting": "Converting",
    
        "Open": "Open",
    
        "Close": "Close",
    
        "Profit": "Profit",
    
        "PlatformFee": "PlatformFee",
    
        "SubscribeSignal": "SubscribeSignal",
    
        "ReceiveSignal": "ReceiveSignal",
    
        "DepositSignal": "DepositSignal"    
    };

    static StatusEnum = {
    
        "Done": "Done",
    
        "Pending": "Pending",
    
        "Canceled": "Canceled",
    
        "Error": "Error"    
    };

    static CurrencyEnum = {
    
        "BTC": "BTC",
    
        "ETH": "ETH",
    
        "USDT": "USDT",
    
        "GVT": "GVT",
    
        "Undefined": "Undefined",
    
        "ADA": "ADA",
    
        "XRP": "XRP",
    
        "BCH": "BCH",
    
        "LTC": "LTC",
    
        "DOGE": "DOGE",
    
        "BNB": "BNB",
    
        "USD": "USD",
    
        "EUR": "EUR"    
    };

    static GvCommissionCurrencyEnum = {
    
        "BTC": "BTC",
    
        "ETH": "ETH",
    
        "USDT": "USDT",
    
        "GVT": "GVT",
    
        "Undefined": "Undefined",
    
        "ADA": "ADA",
    
        "XRP": "XRP",
    
        "BCH": "BCH",
    
        "LTC": "LTC",
    
        "DOGE": "DOGE",
    
        "BNB": "BNB",
    
        "USD": "USD",
    
        "EUR": "EUR"    
    };



}


