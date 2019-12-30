import { Broker } from './Broker';
import ApiClient from "../ApiClient";
export class MigrationRequest {
    constructor(data) {
        this['dateCreate'] = data['dateCreate'];
        this['newLeverage'] = data['newLeverage'];
        this['newBroker'] = data['newBroker'];
    }
    static constructFromObject(data) {
        if (data) {
            return new MigrationRequest({
                'dateCreate': ApiClient.convertToType(data['dateCreate'], 'Date'),
                'newLeverage': ApiClient.convertToType(data['newLeverage'], 'number'),
                'newBroker': Broker.constructFromObject(data['newBroker']),
            });
        }
    }
}
