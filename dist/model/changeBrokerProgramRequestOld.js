import ApiClient from "../ApiClient";
export class ChangeBrokerProgramRequestOld {
    constructor() {
    }
    static constructFromObject(data, obj = new ChangeBrokerProgramRequestOld()) {
        if (data) {
            if (data.hasOwnProperty('programId')) {
                obj['programId'] = ApiClient.convertToType(data['programId'], 'string');
            }
            if (data.hasOwnProperty('newBrokerAccountTypeId')) {
                obj['newBrokerAccountTypeId'] = ApiClient.convertToType(data['newBrokerAccountTypeId'], 'string');
            }
            if (data.hasOwnProperty('newLeverage')) {
                obj['newLeverage'] = ApiClient.convertToType(data['newLeverage'], 'number');
            }
        }
        return obj;
    }
}
