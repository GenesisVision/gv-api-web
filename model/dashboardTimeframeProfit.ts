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

export class DashboardTimeframeProfit { 
    public profit?: number;
    public profitPercent?: number;

    static constructFromObject(data: {[key: string]: any}, obj: DashboardTimeframeProfit = new DashboardTimeframeProfit()): DashboardTimeframeProfit {
        if (data) {
            if (data.hasOwnProperty('profit')) {
                obj['profit'] = ApiClient.convertToType(data['profit'], 'number');
            }
            if (data.hasOwnProperty('profitPercent')) {
                obj['profitPercent'] = ApiClient.convertToType(data['profitPercent'], 'number');
            }
        }
        return obj;
    }
}



