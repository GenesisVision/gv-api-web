import { BrokerAccountType } from './BrokerAccountType';
import { Tag } from './Tag';
import ApiClient from "../ApiClient";
export class Broker {
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
        this['tags'] = data['tags'];
    }
    static constructFromObject(data) {
        if (data) {
            return new Broker({
                'name': ApiClient.convertToType(data['name'], 'string'),
                'description': ApiClient.convertToType(data['description'], 'string'),
                'logo': ApiClient.convertToType(data['logo'], 'string'),
                'terms': ApiClient.convertToType(data['terms'], 'string'),
                'assets': ApiClient.convertToType(data['assets'], 'string'),
                'fee': ApiClient.convertToType(data['fee'], 'number'),
                'leverageMin': ApiClient.convertToType(data['leverageMin'], 'number'),
                'leverageMax': ApiClient.convertToType(data['leverageMax'], 'number'),
                'accountTypes': ApiClient.convertToType(data['accountTypes'], [BrokerAccountType]),
                'tags': ApiClient.convertToType(data['tags'], [Tag]),
            });
        }
    }
}
