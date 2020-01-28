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
import { FundAssetPartWithIcon } from './FundAssetPartWithIcon';

import ApiClient from "../ApiClient";

export class FundAssetsState { 
    public 'date': number;
    public 'value': number;
    public 'assets': Array<FundAssetPartWithIcon>;

    constructor(data: {[key: string]: any}) { 
        this['date'] = data['date'];
        this['value'] = data['value'];
        this['assets'] = data['assets'];
    }

    static constructFromObject(data: {[key: string]: any}): FundAssetsState | undefined {
        if (data) {
            return new FundAssetsState({ 
                'date': ApiClient.convertToType(data['date'], 'number'),
                'value': ApiClient.convertToType(data['value'], 'number'),
                'assets': ApiClient.convertToType(data['assets'], [FundAssetPartWithIcon]),
            });
        }
    }
}



