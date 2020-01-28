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
import { AmountWithCurrency } from './AmountWithCurrency';
import { BrokerTradeServerType } from './BrokerTradeServerType';

import ApiClient from "../ApiClient";

export class TradingAccountMinCreateAmount { 
    public 'serverType': BrokerTradeServerType;
    public 'minDepositCreateAsset': Array<AmountWithCurrency>;

    constructor(data: {[key: string]: any}) { 
        this['serverType'] = data['serverType'];
        this['minDepositCreateAsset'] = data['minDepositCreateAsset'];
    }

    static constructFromObject(data: {[key: string]: any}): TradingAccountMinCreateAmount | undefined {
        if (data) {
            return new TradingAccountMinCreateAmount({ 
                'serverType': BrokerTradeServerType.constructFromObject(data['serverType']),
                'minDepositCreateAsset': ApiClient.convertToType(data['minDepositCreateAsset'], [AmountWithCurrency]),
            });
        }
    }
}



