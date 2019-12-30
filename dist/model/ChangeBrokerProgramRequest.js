import ApiClient from "../ApiClient";
export class ChangeBrokerProgramRequest {
    constructor(data) {
        this['newBrokerAccountTypeId'] = data['newBrokerAccountTypeId'];
        this['newLeverage'] = data['newLeverage'];
    }
    static constructFromObject(data) {
        if (data) {
            return new ChangeBrokerProgramRequest({
                'newBrokerAccountTypeId': ApiClient.convertToType(data['newBrokerAccountTypeId'], 'string'),
                'newLeverage': ApiClient.convertToType(data['newLeverage'], 'number'),
            });
        }
    }
}
