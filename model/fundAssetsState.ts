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
import { FundAssetPartWithIcon } from './fundAssetPartWithIcon';

import ApiClient from "../ApiClient";

export class FundAssetsState { 
    public 'assets'?: [FundAssetPartWithIcon];
    public 'otherPercent'?: number;
    constructor() {
    }

    static constructFromObject(data: {[key: string]: any}, obj: FundAssetsState = new FundAssetsState()): FundAssetsState {
        if (data) {
            if (data.hasOwnProperty('assets')) {
                obj['assets'] = ApiClient.convertToType(data['assets'], [FundAssetPartWithIcon]);
            }
            if (data.hasOwnProperty('otherPercent')) {
                obj['otherPercent'] = ApiClient.convertToType(data['otherPercent'], 'number');
            }
        }
        return obj;
    }
}


//modelGenericEnums.mustache


