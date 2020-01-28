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

export class ProgramLevelInfo { 
    public 'isKycPassed': boolean;
    public 'level': number;
    public 'levelProgressPercent': number;
    public 'genesisRatio': number;
    public 'programAge': number;
    public 'weightedVolumeScale': number;
    public 'managerBalance': number;
    public 'investmentScale': number;
    public 'totalAvailableToInvest': number;

    constructor(data: {[key: string]: any}) { 
        this['isKycPassed'] = data['isKycPassed'];
        this['level'] = data['level'];
        this['levelProgressPercent'] = data['levelProgressPercent'];
        this['genesisRatio'] = data['genesisRatio'];
        this['programAge'] = data['programAge'];
        this['weightedVolumeScale'] = data['weightedVolumeScale'];
        this['managerBalance'] = data['managerBalance'];
        this['investmentScale'] = data['investmentScale'];
        this['totalAvailableToInvest'] = data['totalAvailableToInvest'];
    }

    static constructFromObject(data: {[key: string]: any}): ProgramLevelInfo | undefined {
        if (data) {
            return new ProgramLevelInfo({ 
                'isKycPassed': ApiClient.convertToType(data['isKycPassed'], 'boolean'),
                'level': ApiClient.convertToType(data['level'], 'number'),
                'levelProgressPercent': ApiClient.convertToType(data['levelProgressPercent'], 'number'),
                'genesisRatio': ApiClient.convertToType(data['genesisRatio'], 'number'),
                'programAge': ApiClient.convertToType(data['programAge'], 'number'),
                'weightedVolumeScale': ApiClient.convertToType(data['weightedVolumeScale'], 'number'),
                'managerBalance': ApiClient.convertToType(data['managerBalance'], 'number'),
                'investmentScale': ApiClient.convertToType(data['investmentScale'], 'number'),
                'totalAvailableToInvest': ApiClient.convertToType(data['totalAvailableToInvest'], 'number'),
            });
        }
    }
}



