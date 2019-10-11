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
 * @interface FeeDetails
 */

/**
 *
 * @name FeeDetails#title
 * @type {String}
 */
/**
 *
 * @name FeeDetails#description
 * @type {String}
 */
/**
 *
 * @name FeeDetails#type
 * @type FeeDetailsTypeEnum
 */
/**
 *
 * @name FeeDetails#amount
 * @type {Number}
 */
/**
 *
 * @name FeeDetails#currency
 * @type FeeDetailsCurrencyEnum
 */





export default class FeeDetails {

    constructor() {
        

        
        

        

        
    }

    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new FeeDetails();

            
            
            

            if (data.hasOwnProperty('title')) {
                obj['title'] = ApiClient.convertToType(data['title'], 'String');
            }
            if (data.hasOwnProperty('description')) {
                obj['description'] = ApiClient.convertToType(data['description'], 'String');
            }
            if (data.hasOwnProperty('type')) {
                obj['type'] = ApiClient.convertToType(data['type'], 'String');
            }
            if (data.hasOwnProperty('amount')) {
                obj['amount'] = ApiClient.convertToType(data['amount'], 'Number');
            }
            if (data.hasOwnProperty('currency')) {
                obj['currency'] = ApiClient.convertToType(data['currency'], 'String');
            }
        }
        return obj;
    }

    title = undefined;
    description = undefined;
    type = undefined;
    amount = undefined;
    currency = undefined;






    static TypeEnum = {
    
        "Undefined": "Undefined",
    
        "GvProgramEntry": "GvProgramEntry",
    
        "GvProgramSuccess": "GvProgramSuccess",
    
        "GvProgramSuccessSum": "GvProgramSuccessSum",
    
        "GvFundEntry": "GvFundEntry",
    
        "GvGmGvtHolderFee": "GvGmGvtHolderFee",
    
        "ManagerProgramEntry": "ManagerProgramEntry",
    
        "ManagerProgramSuccess": "ManagerProgramSuccess",
    
        "ManagerProgramSuccessSum": "ManagerProgramSuccessSum",
    
        "ManagerFundEntry": "ManagerFundEntry",
    
        "ManagerFundExit": "ManagerFundExit",
    
        "GvWithdrawal": "GvWithdrawal",
    
        "ManagerSignalMasterSuccessFee": "ManagerSignalMasterSuccessFee",
    
        "ManagerSignalMasterVolumeFee": "ManagerSignalMasterVolumeFee",
    
        "GvSignalSuccessFee": "GvSignalSuccessFee",
    
        "GvFundTrade": "GvFundTrade"    
    };

    static CurrencyEnum = {
    
        "Undefined": "Undefined",
    
        "GVT": "GVT",
    
        "ETH": "ETH",
    
        "BTC": "BTC",
    
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
 * @typedef FeeDetailsTypeEnum 
 * @type {("Undefined"|"GvProgramEntry"|"GvProgramSuccess"|"GvProgramSuccessSum"|"GvFundEntry"|"GvGmGvtHolderFee"|"ManagerProgramEntry"|"ManagerProgramSuccess"|"ManagerProgramSuccessSum"|"ManagerFundEntry"|"ManagerFundExit"|"GvWithdrawal"|"ManagerSignalMasterSuccessFee"|"ManagerSignalMasterVolumeFee"|"GvSignalSuccessFee"|"GvFundTrade")}
 */

/**
 * @typedef FeeDetailsCurrencyEnum 
 * @type {("Undefined"|"GVT"|"ETH"|"BTC"|"ADA"|"USDT"|"XRP"|"BCH"|"LTC"|"DOGE"|"BNB"|"USD"|"EUR")}
 */



