import { InvestmentEventViewModel } from './InvestmentEventViewModel';
import ApiClient from "../ApiClient";
export class InvestmentEventViewModels {
    constructor(data) {
        this['events'] = data['events'];
        this['total'] = data['total'];
    }
    static constructFromObject(data) {
        return new InvestmentEventViewModels({
            'events': ApiClient.convertToType(data['events'], [InvestmentEventViewModel]),
            'total': ApiClient.convertToType(data['total'], 'number'),
        });
    }
}
