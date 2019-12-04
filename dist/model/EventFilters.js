import { EventInvestingItemFilters } from './EventInvestingItemFilters';
import { EventTradingItemFilters } from './EventTradingItemFilters';
export class EventFilters {
    constructor(data) {
        this['investingHistory'] = data['investingHistory'];
        this['tradingHistory'] = data['tradingHistory'];
    }
    static constructFromObject(data) {
        if (data) {
            return new EventFilters({
                'investingHistory': EventInvestingItemFilters.constructFromObject(data['investingHistory']),
                'tradingHistory': EventTradingItemFilters.constructFromObject(data['tradingHistory']),
            });
        }
    }
}
