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

export class FollowCreateAssetPlatformInfo { 
    public 'minVolumeFee': number;
    public 'maxVolumeFee': number;
    public 'minSuccessFee': number;
    public 'maxSuccessFee': number;

    constructor(data: {[key: string]: any}) { 
        this['minVolumeFee'] = data['minVolumeFee'];
        this['maxVolumeFee'] = data['maxVolumeFee'];
        this['minSuccessFee'] = data['minSuccessFee'];
        this['maxSuccessFee'] = data['maxSuccessFee'];
    }

    static constructFromObject(data: {[key: string]: any}): FollowCreateAssetPlatformInfo | undefined {
        if (data) {
            return new FollowCreateAssetPlatformInfo({ 
                'minVolumeFee': ApiClient.convertToType(data['minVolumeFee'], 'number'),
                'maxVolumeFee': ApiClient.convertToType(data['maxVolumeFee'], 'number'),
                'minSuccessFee': ApiClient.convertToType(data['minSuccessFee'], 'number'),
                'maxSuccessFee': ApiClient.convertToType(data['maxSuccessFee'], 'number'),
            });
        }
    }
}



