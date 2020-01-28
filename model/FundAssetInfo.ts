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

export class FundAssetInfo { 
    public 'asset': string;
    public 'symbol': string;
    public 'icon': string;
    public 'target': number;
    public 'current': number;
    public 'url': string;

    constructor(data: {[key: string]: any}) { 
        this['asset'] = data['asset'];
        this['symbol'] = data['symbol'];
        this['icon'] = data['icon'];
        this['target'] = data['target'];
        this['current'] = data['current'];
        this['url'] = data['url'];
    }

    static constructFromObject(data: {[key: string]: any}): FundAssetInfo | undefined {
        if (data) {
            return new FundAssetInfo({ 
                'asset': ApiClient.convertToType(data['asset'], 'string'),
                'symbol': ApiClient.convertToType(data['symbol'], 'string'),
                'icon': ApiClient.convertToType(data['icon'], 'string'),
                'target': ApiClient.convertToType(data['target'], 'number'),
                'current': ApiClient.convertToType(data['current'], 'number'),
                'url': ApiClient.convertToType(data['url'], 'string'),
            });
        }
    }
}



