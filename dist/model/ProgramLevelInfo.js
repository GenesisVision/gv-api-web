import ApiClient from "../ApiClient";
export class ProgramLevelInfo {
    static constructFromObject(data, obj = new ProgramLevelInfo()) {
        if (data) {
            if (data.hasOwnProperty('isKycPassed')) {
                obj['isKycPassed'] = ApiClient.convertToType(data['isKycPassed'], 'boolean');
            }
            if (data.hasOwnProperty('level')) {
                obj['level'] = ApiClient.convertToType(data['level'], 'number');
            }
            if (data.hasOwnProperty('levelProgressPercent')) {
                obj['levelProgressPercent'] = ApiClient.convertToType(data['levelProgressPercent'], 'number');
            }
            if (data.hasOwnProperty('genesisRatio')) {
                obj['genesisRatio'] = ApiClient.convertToType(data['genesisRatio'], 'number');
            }
            if (data.hasOwnProperty('programAge')) {
                obj['programAge'] = ApiClient.convertToType(data['programAge'], 'number');
            }
            if (data.hasOwnProperty('weightedVolumeScale')) {
                obj['weightedVolumeScale'] = ApiClient.convertToType(data['weightedVolumeScale'], 'number');
            }
            if (data.hasOwnProperty('managerBalance')) {
                obj['managerBalance'] = ApiClient.convertToType(data['managerBalance'], 'number');
            }
            if (data.hasOwnProperty('investmentScale')) {
                obj['investmentScale'] = ApiClient.convertToType(data['investmentScale'], 'number');
            }
            if (data.hasOwnProperty('totalAvailableToInvest')) {
                obj['totalAvailableToInvest'] = ApiClient.convertToType(data['totalAvailableToInvest'], 'number');
            }
        }
        return obj;
    }
}
