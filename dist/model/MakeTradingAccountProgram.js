import { TradesDelay } from './TradesDelay';
import ApiClient from "../ApiClient";
export class MakeTradingAccountProgram {
    constructor(data) {
        this['id'] = data['id'];
        this['periodLength'] = data['periodLength'];
        this['stopOutLevel'] = data['stopOutLevel'];
        this['investmentLimit'] = data['investmentLimit'];
        this['tradesDelay'] = data['tradesDelay'];
        this['entryFee'] = data['entryFee'];
        this['successFee'] = data['successFee'];
        this['title'] = data['title'];
        this['description'] = data['description'];
        this['logo'] = data['logo'];
    }
    static constructFromObject(data) {
        if (data) {
            return new MakeTradingAccountProgram({
                'id': ApiClient.convertToType(data['id'], 'string'),
                'periodLength': ApiClient.convertToType(data['periodLength'], 'number'),
                'stopOutLevel': ApiClient.convertToType(data['stopOutLevel'], 'number'),
                'investmentLimit': ApiClient.convertToType(data['investmentLimit'], 'number'),
                'tradesDelay': TradesDelay.constructFromObject(data['tradesDelay']),
                'entryFee': ApiClient.convertToType(data['entryFee'], 'number'),
                'successFee': ApiClient.convertToType(data['successFee'], 'number'),
                'title': ApiClient.convertToType(data['title'], 'string'),
                'description': ApiClient.convertToType(data['description'], 'string'),
                'logo': ApiClient.convertToType(data['logo'], 'string'),
            });
        }
    }
}
