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
import { CaptchaCheckResult } from './captchaCheckResult';

import ApiClient from "../ApiClient";

export class LoginViewModel { 
    public 'password': string;
    public 'rememberMe'?: boolean;
    public 'twoFactorCode'?: string;
    public 'recoveryCode'?: string;
    public 'client'?: string;
    public 'email': string;
    public 'captchaCheckResult'?: CaptchaCheckResult;
    constructor() {
    }

    static constructFromObject(data: {[key: string]: any}, obj: LoginViewModel = new LoginViewModel()): LoginViewModel {
        if (data) {
            if (data.hasOwnProperty('password')) {
                obj['password'] = ApiClient.convertToType(data['password'], 'string');
            }
            if (data.hasOwnProperty('rememberMe')) {
                obj['rememberMe'] = ApiClient.convertToType(data['rememberMe'], 'boolean');
            }
            if (data.hasOwnProperty('twoFactorCode')) {
                obj['twoFactorCode'] = ApiClient.convertToType(data['twoFactorCode'], 'string');
            }
            if (data.hasOwnProperty('recoveryCode')) {
                obj['recoveryCode'] = ApiClient.convertToType(data['recoveryCode'], 'string');
            }
            if (data.hasOwnProperty('client')) {
                obj['client'] = ApiClient.convertToType(data['client'], 'string');
            }
            if (data.hasOwnProperty('email')) {
                obj['email'] = ApiClient.convertToType(data['email'], 'string');
            }
            if (data.hasOwnProperty('captchaCheckResult')) {
                obj['captchaCheckResult'] = CaptchaCheckResult.constructFromObject(data['captchaCheckResult']);
            }
        }
        return obj;
    }
}


//modelGenericEnums.mustache


