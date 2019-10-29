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
import { DashboardTimeframeProfit } from './dashboardTimeframeProfit';

import ApiClient from "../ApiClient";

export class DashboardProfits { 
    public 'dayProfit'?: DashboardTimeframeProfit;
    public 'weekProfit'?: DashboardTimeframeProfit;
    public 'monthProfit'?: DashboardTimeframeProfit;
    constructor() {
    }

    static constructFromObject(data: {[key: string]: any}, obj: DashboardProfits = new DashboardProfits()): DashboardProfits {
        if (data) {
            if (data.hasOwnProperty('dayProfit')) {
                obj['dayProfit'] = DashboardTimeframeProfit.constructFromObject(data['dayProfit']);
            }
            if (data.hasOwnProperty('weekProfit')) {
                obj['weekProfit'] = DashboardTimeframeProfit.constructFromObject(data['weekProfit']);
            }
            if (data.hasOwnProperty('monthProfit')) {
                obj['monthProfit'] = DashboardTimeframeProfit.constructFromObject(data['monthProfit']);
            }
        }
        return obj;
    }
}



//modelGenericEnums.mustache


