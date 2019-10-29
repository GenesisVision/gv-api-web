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

export class ProgramChartStatistic { 
    public profit?: number;
    public tradingVolume?: number;
    public trades?: number;
    public successTradesPercent?: number;
    public profitFactor?: number;
    public lastPeriodStarts?: Date;
    public lastPeriodEnds?: Date;
    public balance?: number;
    public investors?: number;
    public sharpeRatio?: number;
    public sortinoRatio?: number;
    public calmarRatio?: number;
    public maxDrawdown?: number;

    static constructFromObject(data: {[key: string]: any}, obj: ProgramChartStatistic = new ProgramChartStatistic()): ProgramChartStatistic {
        if (data) {
            if (data.hasOwnProperty('profit')) {
                obj['profit'] = ApiClient.convertToType(data['profit'], 'number');
            }
            if (data.hasOwnProperty('tradingVolume')) {
                obj['tradingVolume'] = ApiClient.convertToType(data['tradingVolume'], 'number');
            }
            if (data.hasOwnProperty('trades')) {
                obj['trades'] = ApiClient.convertToType(data['trades'], 'number');
            }
            if (data.hasOwnProperty('successTradesPercent')) {
                obj['successTradesPercent'] = ApiClient.convertToType(data['successTradesPercent'], 'number');
            }
            if (data.hasOwnProperty('profitFactor')) {
                obj['profitFactor'] = ApiClient.convertToType(data['profitFactor'], 'number');
            }
            if (data.hasOwnProperty('lastPeriodStarts')) {
                obj['lastPeriodStarts'] = ApiClient.convertToType(data['lastPeriodStarts'], 'Date');
            }
            if (data.hasOwnProperty('lastPeriodEnds')) {
                obj['lastPeriodEnds'] = ApiClient.convertToType(data['lastPeriodEnds'], 'Date');
            }
            if (data.hasOwnProperty('balance')) {
                obj['balance'] = ApiClient.convertToType(data['balance'], 'number');
            }
            if (data.hasOwnProperty('investors')) {
                obj['investors'] = ApiClient.convertToType(data['investors'], 'number');
            }
            if (data.hasOwnProperty('sharpeRatio')) {
                obj['sharpeRatio'] = ApiClient.convertToType(data['sharpeRatio'], 'number');
            }
            if (data.hasOwnProperty('sortinoRatio')) {
                obj['sortinoRatio'] = ApiClient.convertToType(data['sortinoRatio'], 'number');
            }
            if (data.hasOwnProperty('calmarRatio')) {
                obj['calmarRatio'] = ApiClient.convertToType(data['calmarRatio'], 'number');
            }
            if (data.hasOwnProperty('maxDrawdown')) {
                obj['maxDrawdown'] = ApiClient.convertToType(data['maxDrawdown'], 'number');
            }
        }
        return obj;
    }
}



