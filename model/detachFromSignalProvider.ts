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
import { SignalDetachMode } from './signalDetachMode';

import ApiClient from "../ApiClient";

export class DetachFromSignalProvider { 
    public 'mode'?: SignalDetachMode;
    constructor() {
    }

    static constructFromObject(data: {[key: string]: any}, obj: DetachFromSignalProvider = new DetachFromSignalProvider()): DetachFromSignalProvider {
        if (data) {
            if (data.hasOwnProperty('mode')) {
                obj['mode'] = SignalDetachMode.constructFromObject(data['mode']);
            }
        }
        return obj;
    }
}



//modelGenericEnums.mustache


