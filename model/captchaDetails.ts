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
import { CaptchaType } from './captchaType';
import { GeeTestDetails } from './geeTestDetails';
import { PowDetails } from './powDetails';

import ApiClient from "../ApiClient";

export class CaptchaDetails { 
    public 'captchaType'?: CaptchaType;
    public 'id'?: string;
    public 'route'?: string;
    public 'pow'?: PowDetails;
    public 'geeTest'?: GeeTestDetails;
    constructor() {
    }

    static constructFromObject(data: {[key: string]: any}, obj: CaptchaDetails = new CaptchaDetails()): CaptchaDetails {
        if (data) {
            if (data.hasOwnProperty('captchaType')) {
                obj['captchaType'] = CaptchaType.constructFromObject(data['captchaType']);
            }
            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'string');
            }
            if (data.hasOwnProperty('route')) {
                obj['route'] = ApiClient.convertToType(data['route'], 'string');
            }
            if (data.hasOwnProperty('pow')) {
                obj['pow'] = PowDetails.constructFromObject(data['pow']);
            }
            if (data.hasOwnProperty('geeTest')) {
                obj['geeTest'] = GeeTestDetails.constructFromObject(data['geeTest']);
            }
        }
        return obj;
    }
}


//modelGenericEnums.mustache


