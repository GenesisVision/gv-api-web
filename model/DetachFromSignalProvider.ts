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
import { SignalDetachMode } from './SignalDetachMode';

import ApiClient from "../ApiClient";

export class DetachFromSignalProvider { 
    public 'tradingAccountId': string;
    public 'mode': SignalDetachMode;

    constructor(data: {[key: string]: any}) { 
        this['tradingAccountId'] = data['tradingAccountId'];
        this['mode'] = data['mode'];
    }

    static constructFromObject(data: {[key: string]: any}): DetachFromSignalProvider | undefined {
        if (data) {
            return new DetachFromSignalProvider({ 
                'tradingAccountId': ApiClient.convertToType(data['tradingAccountId'], 'string'),
                'mode': SignalDetachMode.constructFromObject(data['mode']),
            });
        }
    }
}


