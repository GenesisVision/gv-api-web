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
import { MoneyLocationType } from './MoneyLocationType';

import ApiClient from "../ApiClient";

export class MoneyLocation { 
    public 'name': MoneyLocationType;
    public 'percent': number;
    public 'color': string;

    constructor(data: {[key: string]: any}) { 
        this['name'] = data['name'];
        this['percent'] = data['percent'];
        this['color'] = data['color'];
    }

    static constructFromObject(data: {[key: string]: any}): MoneyLocation | undefined {
        if (data) {
            return new MoneyLocation({ 
                'name': MoneyLocationType.constructFromObject(data['name']),
                'percent': ApiClient.convertToType(data['percent'], 'number'),
                'color': ApiClient.convertToType(data['color'], 'string'),
            });
        }
    }
}



