import { EventInvestingItemFilters } from './EventInvestingItemFilters';
import { EventTradingItemFilters } from './EventTradingItemFilters';
export class EventFilters {
    constructor(data) {
        this['investmentHistory'] = data['investmentHistory'];
        this['tradingHistory'] = data['tradingHistory'];
    }
    static constructFromObject(data) {
        if (data) {
            return new EventFilters({
                'investmentHistory': EventInvestingItemFilters.constructFromObject(data['investmentHistory']),
                'tradingHistory': EventTradingItemFilters.constructFromObject(data['tradingHistory']),
            });
        }
    }
}
