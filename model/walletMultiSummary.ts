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
import { WalletData } from './walletData';
import { WalletsGrandTotal } from './walletsGrandTotal';

import ApiClient from "../ApiClient";

export class WalletMultiSummary { 
    public 'grandTotal'?: WalletsGrandTotal;
    public 'wallets'?: [WalletData];
    public 'payFeesWithGvt'?: boolean;
    constructor() {
    }

    static constructFromObject(data: {[key: string]: any}, obj: WalletMultiSummary = new WalletMultiSummary()): WalletMultiSummary {
        if (data) {
            if (data.hasOwnProperty('grandTotal')) {
                obj['grandTotal'] = WalletsGrandTotal.constructFromObject(data['grandTotal']);
            }
            if (data.hasOwnProperty('wallets')) {
                obj['wallets'] = ApiClient.convertToType(data['wallets'], [WalletData]);
            }
            if (data.hasOwnProperty('payFeesWithGvt')) {
                obj['payFeesWithGvt'] = ApiClient.convertToType(data['payFeesWithGvt'], 'boolean');
            }
        }
        return obj;
    }
}



//modelGenericEnums.mustache


