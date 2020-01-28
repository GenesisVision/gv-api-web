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

export class FundChartStatistic { 
    public 'investors': number;
    public 'creationDate': Date;
    public 'balance': number;
    public 'profitPercent': number;
    public 'sharpeRatio': number;
    public 'sortinoRatio': number;
    public 'calmarRatio': number;
    public 'maxDrawdown': number;

    constructor(data: {[key: string]: any}) { 
        this['investors'] = data['investors'];
        this['creationDate'] = data['creationDate'];
        this['balance'] = data['balance'];
        this['profitPercent'] = data['profitPercent'];
        this['sharpeRatio'] = data['sharpeRatio'];
        this['sortinoRatio'] = data['sortinoRatio'];
        this['calmarRatio'] = data['calmarRatio'];
        this['maxDrawdown'] = data['maxDrawdown'];
    }

    static constructFromObject(data: {[key: string]: any}): FundChartStatistic | undefined {
        if (data) {
            return new FundChartStatistic({ 
                'investors': ApiClient.convertToType(data['investors'], 'number'),
                'creationDate': ApiClient.convertToType(data['creationDate'], 'Date'),
                'balance': ApiClient.convertToType(data['balance'], 'number'),
                'profitPercent': ApiClient.convertToType(data['profitPercent'], 'number'),
                'sharpeRatio': ApiClient.convertToType(data['sharpeRatio'], 'number'),
                'sortinoRatio': ApiClient.convertToType(data['sortinoRatio'], 'number'),
                'calmarRatio': ApiClient.convertToType(data['calmarRatio'], 'number'),
                'maxDrawdown': ApiClient.convertToType(data['maxDrawdown'], 'number'),
            });
        }
    }
}



