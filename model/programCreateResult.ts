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
import { TwoFactorAuthenticator } from './twoFactorAuthenticator';

import ApiClient from "../ApiClient";

export class ProgramCreateResult { 
    public 'programId'?: string;
    public 'twoFactorRequired'?: boolean;
    public 'twoFactor'?: TwoFactorAuthenticator;
    constructor() {
    }

    static constructFromObject(data: {[key: string]: any}, obj: ProgramCreateResult = new ProgramCreateResult()): ProgramCreateResult {
        if (data) {
            if (data.hasOwnProperty('programId')) {
                obj['programId'] = ApiClient.convertToType(data['programId'], 'string');
            }
            if (data.hasOwnProperty('twoFactorRequired')) {
                obj['twoFactorRequired'] = ApiClient.convertToType(data['twoFactorRequired'], 'boolean');
            }
            if (data.hasOwnProperty('twoFactor')) {
                obj['twoFactor'] = TwoFactorAuthenticator.constructFromObject(data['twoFactor']);
            }
        }
        return obj;
    }
}


//modelGenericEnums.mustache


