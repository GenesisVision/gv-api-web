import ApiClient from "../ApiClient";
export class LevelsParamsInfo {
    static constructFromObject(data, obj = new LevelsParamsInfo()) {
        if (data) {
            if (data.hasOwnProperty('minAvailableToInvest')) {
                obj['minAvailableToInvest'] = ApiClient.convertToType(data['minAvailableToInvest'], 'number');
            }
            if (data.hasOwnProperty('maxAvailableToInvest')) {
                obj['maxAvailableToInvest'] = ApiClient.convertToType(data['maxAvailableToInvest'], 'number');
            }
            if (data.hasOwnProperty('unverifiedAvailableToInvest')) {
                obj['unverifiedAvailableToInvest'] = ApiClient.convertToType(data['unverifiedAvailableToInvest'], 'number');
            }
            if (data.hasOwnProperty('genesisRatioMin')) {
                obj['genesisRatioMin'] = ApiClient.convertToType(data['genesisRatioMin'], 'number');
            }
            if (data.hasOwnProperty('genesisRatioMax')) {
                obj['genesisRatioMax'] = ApiClient.convertToType(data['genesisRatioMax'], 'number');
            }
            if (data.hasOwnProperty('genesisRatioHighRisk')) {
                obj['genesisRatioHighRisk'] = ApiClient.convertToType(data['genesisRatioHighRisk'], 'number');
            }
            if (data.hasOwnProperty('volumeScaleMin')) {
                obj['volumeScaleMin'] = ApiClient.convertToType(data['volumeScaleMin'], 'number');
            }
            if (data.hasOwnProperty('volumeScaleMax')) {
                obj['volumeScaleMax'] = ApiClient.convertToType(data['volumeScaleMax'], 'number');
            }
            if (data.hasOwnProperty('programAgeMax')) {
                obj['programAgeMax'] = ApiClient.convertToType(data['programAgeMax'], 'number');
            }
            if (data.hasOwnProperty('ageByVolumeMax')) {
                obj['ageByVolumeMax'] = ApiClient.convertToType(data['ageByVolumeMax'], 'number');
            }
            if (data.hasOwnProperty('investmentScaleMin')) {
                obj['investmentScaleMin'] = ApiClient.convertToType(data['investmentScaleMin'], 'number');
            }
            if (data.hasOwnProperty('investmentScaleMax')) {
                obj['investmentScaleMax'] = ApiClient.convertToType(data['investmentScaleMax'], 'number');
            }
            if (data.hasOwnProperty('investmentScaleHighRisk')) {
                obj['investmentScaleHighRisk'] = ApiClient.convertToType(data['investmentScaleHighRisk'], 'number');
            }
        }
        return obj;
    }
}
