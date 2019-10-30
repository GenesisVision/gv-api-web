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
import { DashboardProfits } from './dashboardProfits';

import ApiClient from "../ApiClient";

export class DashboardSummary { 
    public 'total'?: number;
    public 'invested'?: number;
    public 'pending'?: number;
    public 'available'?: number;
    public 'profits'?: DashboardProfits;
    constructor() {
    }

    static constructFromObject(data: {[key: string]: any}, obj: DashboardSummary = new DashboardSummary()): DashboardSummary {
        if (data) {
            if (data.hasOwnProperty('total')) {
                obj['total'] = ApiClient.convertToType(data['total'], 'number');
            }
            if (data.hasOwnProperty('invested')) {
                obj['invested'] = ApiClient.convertToType(data['invested'], 'number');
            }
            if (data.hasOwnProperty('pending')) {
                obj['pending'] = ApiClient.convertToType(data['pending'], 'number');
            }
            if (data.hasOwnProperty('available')) {
                obj['available'] = ApiClient.convertToType(data['available'], 'number');
            }
            if (data.hasOwnProperty('profits')) {
                obj['profits'] = DashboardProfits.constructFromObject(data['profits']);
            }
        }
        return obj;
    }
}


//modelGenericEnums.mustache


