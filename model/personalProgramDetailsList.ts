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

export class PersonalProgramDetailsList { 
    public 'isOwnProgram'?: boolean;
    public 'isFavorite'?: boolean;
    constructor() {
    }

    static constructFromObject(data: {[key: string]: any}, obj: PersonalProgramDetailsList = new PersonalProgramDetailsList()): PersonalProgramDetailsList {
        if (data) {
            if (data.hasOwnProperty('isOwnProgram')) {
                obj['isOwnProgram'] = ApiClient.convertToType(data['isOwnProgram'], 'boolean');
            }
            if (data.hasOwnProperty('isFavorite')) {
                obj['isFavorite'] = ApiClient.convertToType(data['isFavorite'], 'boolean');
            }
        }
        return obj;
    }
}


//modelGenericEnums.mustache


