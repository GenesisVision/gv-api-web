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
import { AssetRequestDetails } from './AssetRequestDetails';
import { Currency } from './Currency';
import { InvestmentRequestStatus } from './InvestmentRequestStatus';
import { InvestmentRequestType } from './InvestmentRequestType';

import ApiClient from "../ApiClient";

export class AssetInvestmentRequest { 
    public 'id': string;
    public 'date': Date;
    public 'amount': number;
    public 'currency': Currency;
    public 'type': InvestmentRequestType;
    public 'status': InvestmentRequestStatus;
    public 'canCancelRequest': boolean;
    public 'assetDetails': AssetRequestDetails;

    constructor(data: {[key: string]: any}) { 
        this['id'] = data['id'];
        this['date'] = data['date'];
        this['amount'] = data['amount'];
        this['currency'] = data['currency'];
        this['type'] = data['type'];
        this['status'] = data['status'];
        this['canCancelRequest'] = data['canCancelRequest'];
        this['assetDetails'] = data['assetDetails'];
    }

    static constructFromObject(data: {[key: string]: any}): AssetInvestmentRequest | undefined {
        if (data) {
            return new AssetInvestmentRequest({ 
                'id': ApiClient.convertToType(data['id'], 'string'),
                'date': ApiClient.convertToType(data['date'], 'Date'),
                'amount': ApiClient.convertToType(data['amount'], 'number'),
                'currency': Currency.constructFromObject(data['currency']),
                'type': InvestmentRequestType.constructFromObject(data['type']),
                'status': InvestmentRequestStatus.constructFromObject(data['status']),
                'canCancelRequest': ApiClient.convertToType(data['canCancelRequest'], 'boolean'),
                'assetDetails': AssetRequestDetails.constructFromObject(data['assetDetails']),
            });
        }
    }
}



