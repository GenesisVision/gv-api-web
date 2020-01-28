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

export class ProgramCreateAssetPlatformInfo { 
    public 'maxEntryFee': number;
    public 'maxSuccessFee': number;

    constructor(data: {[key: string]: any}) { 
        this['maxEntryFee'] = data['maxEntryFee'];
        this['maxSuccessFee'] = data['maxSuccessFee'];
    }

    static constructFromObject(data: {[key: string]: any}): ProgramCreateAssetPlatformInfo | undefined {
        if (data) {
            return new ProgramCreateAssetPlatformInfo({ 
                'maxEntryFee': ApiClient.convertToType(data['maxEntryFee'], 'number'),
                'maxSuccessFee': ApiClient.convertToType(data['maxSuccessFee'], 'number'),
            });
        }
    }
}



