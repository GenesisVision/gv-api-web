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
 * @interface OrderSignalFee
 */

/**
 *
 * @name OrderSignalFee#amount
 * @type {Number}
 */
/**
 *
 * @name OrderSignalFee#currency
 * @type OrderSignalFeeCurrencyEnum
 */
/**
 *
 * @name OrderSignalFee#type
 * @type OrderSignalFeeTypeEnum
 */





export default class OrderSignalFee {

    constructor() {
        

        
        

        

        
    }

    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new OrderSignalFee();

            
            
            

            if (data.hasOwnProperty('amount')) {
                obj['amount'] = ApiClient.convertToType(data['amount'], 'Number');
            }
            if (data.hasOwnProperty('currency')) {
                obj['currency'] = ApiClient.convertToType(data['currency'], 'String');
            }
            if (data.hasOwnProperty('type')) {
                obj['type'] = ApiClient.convertToType(data['type'], 'String');
            }
        }
        return obj;
    }

    amount = undefined;
    currency = undefined;
    type = undefined;






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

    static TypeEnum = {
    
        "Undefined": "Undefined",
    
        "GvProgramEntry": "GvProgramEntry",
    
        "GvProgramSuccess": "GvProgramSuccess",
    
        "GvFundEntry": "GvFundEntry",
    
        "GvGmGvtHolderFee": "GvGmGvtHolderFee",
    
        "ManagerProgramEntry": "ManagerProgramEntry",
    
        "ManagerProgramSuccess": "ManagerProgramSuccess",
    
        "ManagerFundEntry": "ManagerFundEntry",
    
        "ManagerFundExit": "ManagerFundExit",
    
        "GvWithdrawal": "GvWithdrawal",
    
        "ManagerSignalMasterSuccessFee": "ManagerSignalMasterSuccessFee",
    
        "ManagerSignalMasterVolumeFee": "ManagerSignalMasterVolumeFee",
    
        "GvSignalSuccessFee": "GvSignalSuccessFee"    
    };



}




/**
 * @typedef OrderSignalFeeCurrencyEnum 
 * @type {("BTC"|"ETH"|"USDT"|"GVT"|"Undefined"|"ADA"|"XRP"|"BCH"|"LTC"|"DOGE"|"BNB"|"USD"|"EUR")}
 */

/**
 * @typedef OrderSignalFeeTypeEnum 
 * @type {("Undefined"|"GvProgramEntry"|"GvProgramSuccess"|"GvFundEntry"|"GvGmGvtHolderFee"|"ManagerProgramEntry"|"ManagerProgramSuccess"|"ManagerFundEntry"|"ManagerFundExit"|"GvWithdrawal"|"ManagerSignalMasterSuccessFee"|"ManagerSignalMasterVolumeFee"|"GvSignalSuccessFee")}
 */



