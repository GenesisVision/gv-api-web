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
import { ExternalKeyViewModel } from './externalKeyViewModel';

import ApiClient from "../ApiClient";

export class ExternalKeysViewModel { 
    public 'keys'?: [ExternalKeyViewModel];
    public 'total'?: number;
    constructor() {
    }

    static constructFromObject(data: {[key: string]: any}, obj: ExternalKeysViewModel = new ExternalKeysViewModel()): ExternalKeysViewModel {
        if (data) {
            if (data.hasOwnProperty('keys')) {
                obj['keys'] = ApiClient.convertToType(data['keys'], [ExternalKeyViewModel]);
            }
            if (data.hasOwnProperty('total')) {
                obj['total'] = ApiClient.convertToType(data['total'], 'number');
            }
        }
        return obj;
    }
}



//modelGenericEnums.mustache


