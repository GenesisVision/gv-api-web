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
import { MoneyLocation } from './moneyLocation';

import ApiClient from "../ApiClient";

export class DashboardPortfolio { 
    public 'distribution'?: [MoneyLocation];
    constructor() {
    }

    static constructFromObject(data: {[key: string]: any}, obj: DashboardPortfolio = new DashboardPortfolio()): DashboardPortfolio {
        if (data) {
            if (data.hasOwnProperty('distribution')) {
                obj['distribution'] = ApiClient.convertToType(data['distribution'], [MoneyLocation]);
            }
        }
        return obj;
    }
}


//modelGenericEnums.mustache


