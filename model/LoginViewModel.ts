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
import { CaptchaCheckResult } from './CaptchaCheckResult';

import ApiClient from "../ApiClient";

export class LoginViewModel { 
    public 'password': string;
    public 'rememberMe': boolean;
    public 'twoFactorCode': string;
    public 'recoveryCode': string;
    public 'client': string;
    public 'email': string;
    public 'captchaCheckResult': CaptchaCheckResult;

    constructor(data: {[key: string]: any}) { 
        this['password'] = data['password'];
        this['rememberMe'] = data['rememberMe'];
        this['twoFactorCode'] = data['twoFactorCode'];
        this['recoveryCode'] = data['recoveryCode'];
        this['client'] = data['client'];
        this['email'] = data['email'];
        this['captchaCheckResult'] = data['captchaCheckResult'];
    }

    static constructFromObject(data: {[key: string]: any}): LoginViewModel | undefined {
        if (data) {
            return new LoginViewModel({ 
                'password': ApiClient.convertToType(data['password'], 'string'),
                'rememberMe': ApiClient.convertToType(data['rememberMe'], 'boolean'),
                'twoFactorCode': ApiClient.convertToType(data['twoFactorCode'], 'string'),
                'recoveryCode': ApiClient.convertToType(data['recoveryCode'], 'string'),
                'client': ApiClient.convertToType(data['client'], 'string'),
                'email': ApiClient.convertToType(data['email'], 'string'),
                'captchaCheckResult': CaptchaCheckResult.constructFromObject(data['captchaCheckResult']),
            });
        }
    }
}



