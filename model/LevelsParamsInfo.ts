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

export class LevelsParamsInfo { 
    public 'minAvailableToInvest': number;
    public 'maxAvailableToInvest': number;
    public 'unverifiedAvailableToInvest': number;
    public 'genesisRatioMin': number;
    public 'genesisRatioMax': number;
    public 'genesisRatioHighRisk': number;
    public 'volumeScaleMin': number;
    public 'volumeScaleMax': number;
    public 'programAgeMax': number;
    public 'ageByVolumeMax': number;
    public 'investmentScaleMin': number;
    public 'investmentScaleMax': number;
    public 'investmentScaleHighRisk': number;

    constructor(data: {[key: string]: any}) { 
        this['minAvailableToInvest'] = data['minAvailableToInvest'];
        this['maxAvailableToInvest'] = data['maxAvailableToInvest'];
        this['unverifiedAvailableToInvest'] = data['unverifiedAvailableToInvest'];
        this['genesisRatioMin'] = data['genesisRatioMin'];
        this['genesisRatioMax'] = data['genesisRatioMax'];
        this['genesisRatioHighRisk'] = data['genesisRatioHighRisk'];
        this['volumeScaleMin'] = data['volumeScaleMin'];
        this['volumeScaleMax'] = data['volumeScaleMax'];
        this['programAgeMax'] = data['programAgeMax'];
        this['ageByVolumeMax'] = data['ageByVolumeMax'];
        this['investmentScaleMin'] = data['investmentScaleMin'];
        this['investmentScaleMax'] = data['investmentScaleMax'];
        this['investmentScaleHighRisk'] = data['investmentScaleHighRisk'];
    }

    static constructFromObject(data: {[key: string]: any}): LevelsParamsInfo | undefined {
        if (data) {
            return new LevelsParamsInfo({ 
                'minAvailableToInvest': ApiClient.convertToType(data['minAvailableToInvest'], 'number'),
                'maxAvailableToInvest': ApiClient.convertToType(data['maxAvailableToInvest'], 'number'),
                'unverifiedAvailableToInvest': ApiClient.convertToType(data['unverifiedAvailableToInvest'], 'number'),
                'genesisRatioMin': ApiClient.convertToType(data['genesisRatioMin'], 'number'),
                'genesisRatioMax': ApiClient.convertToType(data['genesisRatioMax'], 'number'),
                'genesisRatioHighRisk': ApiClient.convertToType(data['genesisRatioHighRisk'], 'number'),
                'volumeScaleMin': ApiClient.convertToType(data['volumeScaleMin'], 'number'),
                'volumeScaleMax': ApiClient.convertToType(data['volumeScaleMax'], 'number'),
                'programAgeMax': ApiClient.convertToType(data['programAgeMax'], 'number'),
                'ageByVolumeMax': ApiClient.convertToType(data['ageByVolumeMax'], 'number'),
                'investmentScaleMin': ApiClient.convertToType(data['investmentScaleMin'], 'number'),
                'investmentScaleMax': ApiClient.convertToType(data['investmentScaleMax'], 'number'),
                'investmentScaleHighRisk': ApiClient.convertToType(data['investmentScaleHighRisk'], 'number'),
            });
        }
    }
}



