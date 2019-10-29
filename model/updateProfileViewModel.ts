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

import ApiClient from "../ApiClient";

export class UpdateProfileViewModel { 
    public 'userName'?: string;
    public 'about'?: string;
    constructor() {
    }

    static constructFromObject(data: {[key: string]: any}, obj: UpdateProfileViewModel = new UpdateProfileViewModel()): UpdateProfileViewModel {
        if (data) {
            if (data.hasOwnProperty('userName')) {
                obj['userName'] = ApiClient.convertToType(data['userName'], 'string');
            }
            if (data.hasOwnProperty('about')) {
                obj['about'] = ApiClient.convertToType(data['about'], 'string');
            }
        }
        return obj;
    }
}



//modelGenericEnums.mustache


