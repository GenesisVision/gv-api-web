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
import { WalletWithdrawalInfo } from './walletWithdrawalInfo';

import ApiClient from "../ApiClient";

export class WithdrawalSummary { 
    public availableToWithdrawal?: number;
    public wallets?: [WalletWithdrawalInfo];

    static constructFromObject(data: {[key: string]: any}, obj: WithdrawalSummary = new WithdrawalSummary()): WithdrawalSummary {
        if (data) {
            if (data.hasOwnProperty('availableToWithdrawal')) {
                obj['availableToWithdrawal'] = ApiClient.convertToType(data['availableToWithdrawal'], 'number');
            }
            if (data.hasOwnProperty('wallets')) {
                obj['wallets'] = ApiClient.convertToType(data['wallets'], [WalletWithdrawalInfo]);
            }
        }
        return obj;
    }
}



