import { BrokerAccountType } from './brokerAccountType';
import { ProgramTag } from './programTag';
import ApiClient from "../ApiClient";
export class Broker {
    constructor() {
    }
    static constructFromObject(data, obj = new Broker()) {
        if (data) {
            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'string');
            }
            if (data.hasOwnProperty('description')) {
                obj['description'] = ApiClient.convertToType(data['description'], 'string');
            }
            if (data.hasOwnProperty('logo')) {
                obj['logo'] = ApiClient.convertToType(data['logo'], 'string');
            }
            if (data.hasOwnProperty('terms')) {
                obj['terms'] = ApiClient.convertToType(data['terms'], 'string');
            }
            if (data.hasOwnProperty('assets')) {
                obj['assets'] = ApiClient.convertToType(data['assets'], 'string');
            }
            if (data.hasOwnProperty('fee')) {
                obj['fee'] = ApiClient.convertToType(data['fee'], 'number');
            }
            if (data.hasOwnProperty('leverageMin')) {
                obj['leverageMin'] = ApiClient.convertToType(data['leverageMin'], 'number');
            }
            if (data.hasOwnProperty('leverageMax')) {
                obj['leverageMax'] = ApiClient.convertToType(data['leverageMax'], 'number');
            }
            if (data.hasOwnProperty('accountTypes')) {
                obj['accountTypes'] = ApiClient.convertToType(data['accountTypes'], [BrokerAccountType]);
            }
            if (data.hasOwnProperty('tags')) {
                obj['tags'] = ApiClient.convertToType(data['tags'], [ProgramTag]);
            }
        }
        return obj;
    }
}
