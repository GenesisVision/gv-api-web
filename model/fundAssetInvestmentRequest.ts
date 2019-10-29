/**
 * Core API v2.0
 * No description provided (generated by Swagger Codegen https://github.com/swagger-api/swagger-codegen)
 *
 * OpenAPI spec version: v2.0
 * 
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */

import ApiClient from "../ApiClient";

export class FundAssetInvestmentRequest { 
    public 'entryFee'?: number;
    public 'exitFee'?: number;
    public 'withdrawPercent'?: number;
    constructor() {
    }

    static constructFromObject(data: {[key: string]: any}, obj: FundAssetInvestmentRequest = new FundAssetInvestmentRequest()): FundAssetInvestmentRequest {
        if (data) {
            if (data.hasOwnProperty('entryFee')) {
                obj['entryFee'] = ApiClient.convertToType(data['entryFee'], 'number');
            }
            if (data.hasOwnProperty('exitFee')) {
                obj['exitFee'] = ApiClient.convertToType(data['exitFee'], 'number');
            }
            if (data.hasOwnProperty('withdrawPercent')) {
                obj['withdrawPercent'] = ApiClient.convertToType(data['withdrawPercent'], 'number');
            }
        }
        return obj;
    }
}



//modelGenericEnums.mustache


