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

export class DashboardAsset { 
    public 'name': string;
    public 'color': string;
    public 'percent': number;

    constructor(data: {[key: string]: any}) { 
        this['name'] = data['name'];
        this['color'] = data['color'];
        this['percent'] = data['percent'];
    }

    static constructFromObject(data: {[key: string]: any}): DashboardAsset | undefined {
        if (data) {
            return new DashboardAsset({ 
                'name': ApiClient.convertToType(data['name'], 'string'),
                'color': ApiClient.convertToType(data['color'], 'string'),
                'percent': ApiClient.convertToType(data['percent'], 'number'),
            });
        }
    }
}


