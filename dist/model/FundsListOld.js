import { FundDetailsOld } from './FundDetailsOld';
import ApiClient from "../ApiClient";
export class FundsListOld {
    constructor(data) {
        this['funds'] = data['funds'];
        this['total'] = data['total'];
    }
    static constructFromObject(data) {
        if (data) {
            return new FundsListOld({
                'funds': ApiClient.convertToType(data['funds'], [FundDetailsOld]),
                'total': ApiClient.convertToType(data['total'], 'number'),
            });
        }
    }
}
