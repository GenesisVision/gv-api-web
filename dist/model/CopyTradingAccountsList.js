import { CopyTradingAccountInfo } from './CopyTradingAccountInfo';
import ApiClient from "../ApiClient";
export class CopyTradingAccountsList {
    constructor(data) {
        this['accounts'] = data['accounts'];
        this['total'] = data['total'];
    }
    static constructFromObject(data) {
        if (data) {
            return new CopyTradingAccountsList({
                'accounts': ApiClient.convertToType(data['accounts'], [CopyTradingAccountInfo]),
                'total': ApiClient.convertToType(data['total'], 'number'),
            });
        }
    }
}
