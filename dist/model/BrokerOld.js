import { BrokerAccountTypeOld } from './BrokerAccountTypeOld';
import { ProgramTag } from './ProgramTag';
import ApiClient from "../ApiClient";
export class BrokerOld {
    constructor(data) {
        this['name'] = data['name'];
        this['description'] = data['description'];
        this['logo'] = data['logo'];
        this['terms'] = data['terms'];
        this['assets'] = data['assets'];
        this['fee'] = data['fee'];
        this['leverageMin'] = data['leverageMin'];
        this['leverageMax'] = data['leverageMax'];
        this['accountTypes'] = data['accountTypes'];
        this['isForex'] = data['isForex'];
        this['isSignalsAvailable'] = data['isSignalsAvailable'];
        this['tags'] = data['tags'];
    }
    static constructFromObject(data) {
        if (data) {
            return new BrokerOld({
                'name': ApiClient.convertToType(data['name'], 'string'),
                'description': ApiClient.convertToType(data['description'], 'string'),
                'logo': ApiClient.convertToType(data['logo'], 'string'),
                'terms': ApiClient.convertToType(data['terms'], 'string'),
                'assets': ApiClient.convertToType(data['assets'], 'string'),
                'fee': ApiClient.convertToType(data['fee'], 'number'),
                'leverageMin': ApiClient.convertToType(data['leverageMin'], 'number'),
                'leverageMax': ApiClient.convertToType(data['leverageMax'], 'number'),
                'accountTypes': ApiClient.convertToType(data['accountTypes'], [BrokerAccountTypeOld]),
                'isForex': ApiClient.convertToType(data['isForex'], 'boolean'),
                'isSignalsAvailable': ApiClient.convertToType(data['isSignalsAvailable'], 'boolean'),
                'tags': ApiClient.convertToType(data['tags'], [ProgramTag]),
            });
        }
    }
}
