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
import { ProgramDetailsList } from './programDetailsList';

import ApiClient from "../ApiClient";

export class ItemsViewModelProgramDetailsList { 
    public 'items'?: [ProgramDetailsList];
    public 'total'?: number;
    constructor() {
    }

    static constructFromObject(data: {[key: string]: any}, obj: ItemsViewModelProgramDetailsList = new ItemsViewModelProgramDetailsList()): ItemsViewModelProgramDetailsList {
        if (data) {
            if (data.hasOwnProperty('items')) {
                obj['items'] = ApiClient.convertToType(data['items'], [ProgramDetailsList]);
            }
            if (data.hasOwnProperty('total')) {
                obj['total'] = ApiClient.convertToType(data['total'], 'number');
            }
        }
        return obj;
    }
}



//modelGenericEnums.mustache


