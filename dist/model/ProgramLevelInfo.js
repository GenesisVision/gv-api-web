import ApiClient from "../ApiClient";
export class ProgramLevelInfo {
    constructor(data) {
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
    static constructFromObject(data) {
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
