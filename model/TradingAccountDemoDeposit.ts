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

export class TradingAccountDemoDeposit { 
    public 'amount': number;

    constructor(data: {[key: string]: any}) { 
        this['amount'] = data['amount'];
    }

    static constructFromObject(data: {[key: string]: any}): TradingAccountDemoDeposit | undefined {
        if (data) {
            return new TradingAccountDemoDeposit({ 
                'amount': ApiClient.convertToType(data['amount'], 'number'),
            });
        }
    }
}


