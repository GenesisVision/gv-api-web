import { CopyTradingAccountInfo } from './copyTradingAccountInfo';
import ApiClient from "../ApiClient";
export class CopyTradingAccountsList {
    constructor() {
    }
    static constructFromObject(data, obj = new CopyTradingAccountsList()) {
        if (data) {
            if (data.hasOwnProperty('accounts')) {
                obj['accounts'] = ApiClient.convertToType(data['accounts'], [CopyTradingAccountInfo]);
            }
            if (data.hasOwnProperty('total')) {
                obj['total'] = ApiClient.convertToType(data['total'], 'number');
            }
        }
        return obj;
    }
}
