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

export class ReallocationModel { 
    public 'date'?: Date;
    public 'parts'?: [FundAssetPartWithIcon];
    constructor() {
    }

    static constructFromObject(data: {[key: string]: any}, obj: ReallocationModel = new ReallocationModel()): ReallocationModel {
        if (data) {
            if (data.hasOwnProperty('date')) {
                obj['date'] = ApiClient.convertToType(data['date'], 'Date');
            }
            if (data.hasOwnProperty('parts')) {
                obj['parts'] = ApiClient.convertToType(data['parts'], [FundAssetPartWithIcon]);
            }
        }
        return obj;
    }
}



//modelGenericEnums.mustache


