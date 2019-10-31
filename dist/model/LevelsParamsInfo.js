import ApiClient from "../ApiClient";
export class LevelsParamsInfo {
    constructor(data) {
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
    static constructFromObject(data) {
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
