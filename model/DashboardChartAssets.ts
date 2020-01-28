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
import { DashboardChartAsset } from './DashboardChartAsset';

import ApiClient from "../ApiClient";

export class DashboardChartAssets { 
    public 'assets': Array<DashboardChartAsset>;

    constructor(data: {[key: string]: any}) { 
        this['assets'] = data['assets'];
    }

    static constructFromObject(data: {[key: string]: any}): DashboardChartAssets | undefined {
        if (data) {
            return new DashboardChartAssets({ 
                'assets': ApiClient.convertToType(data['assets'], [DashboardChartAsset]),
            });
        }
    }
}



