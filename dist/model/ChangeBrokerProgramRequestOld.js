import ApiClient from "../ApiClient";
export class ChangeBrokerProgramRequestOld {
    constructor(data) {
        this['programId'] = data['programId'];
        this['newBrokerAccountTypeId'] = data['newBrokerAccountTypeId'];
        this['newLeverage'] = data['newLeverage'];
    }
    static constructFromObject(data) {
        return new ChangeBrokerProgramRequestOld({
            'programId': ApiClient.convertToType(data['programId'], 'string'),
            'newBrokerAccountTypeId': ApiClient.convertToType(data['newBrokerAccountTypeId'], 'string'),
            'newLeverage': ApiClient.convertToType(data['newLeverage'], 'number'),
        });
    }
}
