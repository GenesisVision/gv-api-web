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
import { Currency } from './currency';
import { SimpleChartPoint } from './simpleChartPoint';

import ApiClient from "../ApiClient";

export class SimpleChart { 
    public currency?: Currency;
    public chart?: [SimpleChartPoint];

    static constructFromObject(data: {[key: string]: any}, obj: SimpleChart = new SimpleChart()): SimpleChart {
        if (data) {
            if (data.hasOwnProperty('currency')) {
                obj['currency'] = Currency.constructFromObject(data['currency']);
            }
            if (data.hasOwnProperty('chart')) {
                obj['chart'] = ApiClient.convertToType(data['chart'], [SimpleChartPoint]);
            }
        }
        return obj;
    }
}



