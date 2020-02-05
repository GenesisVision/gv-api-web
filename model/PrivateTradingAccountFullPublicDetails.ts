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
import { DashboardTradingAssetStatus } from './DashboardTradingAssetStatus';

import ApiClient from "../ApiClient";

export class PrivateTradingAccountFullPublicDetails { 
    public 'title': string;
    public 'creationDate': Date;
    public 'status': DashboardTradingAssetStatus;

    constructor(data: {[key: string]: any}) { 
        this['title'] = data['title'];
        this['creationDate'] = data['creationDate'];
        this['status'] = data['status'];
    }

    static constructFromObject(data: {[key: string]: any}): PrivateTradingAccountFullPublicDetails | undefined {
        if (data) {
            return new PrivateTradingAccountFullPublicDetails({ 
                'title': ApiClient.convertToType(data['title'], 'string'),
                'creationDate': ApiClient.convertToType(data['creationDate'], 'Date'),
                'status': DashboardTradingAssetStatus.constructFromObject(data['status']),
            });
        }
    }
}


