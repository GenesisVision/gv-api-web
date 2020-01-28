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

export class ProgramMinInvestAmount { 
    public 'serverType': BrokerTradeServerType;
    public 'minDepositCreateAsset': Array<AmountWithCurrency>;
    public 'minInvestAmountIntoProgram': Array<AmountWithCurrency>;

    constructor(data: {[key: string]: any}) { 
        this['serverType'] = data['serverType'];
        this['minDepositCreateAsset'] = data['minDepositCreateAsset'];
        this['minInvestAmountIntoProgram'] = data['minInvestAmountIntoProgram'];
    }

    static constructFromObject(data: {[key: string]: any}): ProgramMinInvestAmount | undefined {
        if (data) {
            return new ProgramMinInvestAmount({ 
                'serverType': BrokerTradeServerType.constructFromObject(data['serverType']),
                'minDepositCreateAsset': ApiClient.convertToType(data['minDepositCreateAsset'], [AmountWithCurrency]),
                'minInvestAmountIntoProgram': ApiClient.convertToType(data['minInvestAmountIntoProgram'], [AmountWithCurrency]),
            });
        }
    }
}



