import { BrokerOld } from './BrokerOld';
import ApiClient from "../ApiClient";
export class MigrationRequestOld {
    constructor(data) {
        this['dateCreate'] = data['dateCreate'];
        this['newLeverage'] = data['newLeverage'];
        this['newBroker'] = data['newBroker'];
    }
    static constructFromObject(data) {
        return new MigrationRequestOld({
            'dateCreate': ApiClient.convertToType(data['dateCreate'], 'Date'),
            'newLeverage': ApiClient.convertToType(data['newLeverage'], 'number'),
            'newBroker': BrokerOld.constructFromObject(data['newBroker']),
        });
    }
}
