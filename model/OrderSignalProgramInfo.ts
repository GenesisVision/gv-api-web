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
import { OrderProgramData } from './OrderProgramData';
import { OrderSignalFee } from './OrderSignalFee';
import { ProfilePublic } from './ProfilePublic';

import ApiClient from "../ApiClient";

export class OrderSignalProgramInfo { 
    public 'manager': ProfilePublic;
    public 'program': OrderProgramData;
    public 'programId': string;
    public 'volume': number;
    public 'priceOpenAvg': number;
    public 'profit': number;
    public 'firstOrderDate': Date;
    public 'fees': Array<OrderSignalFee>;

    constructor(data: {[key: string]: any}) { 
        this['manager'] = data['manager'];
        this['program'] = data['program'];
        this['programId'] = data['programId'];
        this['volume'] = data['volume'];
        this['priceOpenAvg'] = data['priceOpenAvg'];
        this['profit'] = data['profit'];
        this['firstOrderDate'] = data['firstOrderDate'];
        this['fees'] = data['fees'];
    }

    static constructFromObject(data: {[key: string]: any}): OrderSignalProgramInfo | undefined {
        if (data) {
            return new OrderSignalProgramInfo({ 
                'manager': ProfilePublic.constructFromObject(data['manager']),
                'program': OrderProgramData.constructFromObject(data['program']),
                'programId': ApiClient.convertToType(data['programId'], 'string'),
                'volume': ApiClient.convertToType(data['volume'], 'number'),
                'priceOpenAvg': ApiClient.convertToType(data['priceOpenAvg'], 'number'),
                'profit': ApiClient.convertToType(data['profit'], 'number'),
                'firstOrderDate': ApiClient.convertToType(data['firstOrderDate'], 'Date'),
                'fees': ApiClient.convertToType(data['fees'], [OrderSignalFee]),
            });
        }
    }
}



