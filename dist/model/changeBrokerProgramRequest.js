import ApiClient from "../ApiClient";
export class ChangeBrokerProgramRequest {
    constructor() {
    }
    static constructFromObject(data, obj = new ChangeBrokerProgramRequest()) {
        if (data) {
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
