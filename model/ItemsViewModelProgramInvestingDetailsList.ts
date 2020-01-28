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
import { ProgramInvestingDetailsList } from './ProgramInvestingDetailsList';

import ApiClient from "../ApiClient";

export class ItemsViewModelProgramInvestingDetailsList { 
    public 'items': Array<ProgramInvestingDetailsList>;
    public 'total': number;

    constructor(data: {[key: string]: any}) { 
        this['items'] = data['items'];
        this['total'] = data['total'];
    }

    static constructFromObject(data: {[key: string]: any}): ItemsViewModelProgramInvestingDetailsList | undefined {
        if (data) {
            return new ItemsViewModelProgramInvestingDetailsList({ 
                'items': ApiClient.convertToType(data['items'], [ProgramInvestingDetailsList]),
                'total': ApiClient.convertToType(data['total'], 'number'),
            });
        }
    }
}



