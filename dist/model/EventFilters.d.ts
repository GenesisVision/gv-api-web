import { EventInvestingItemFilters } from './EventInvestingItemFilters';
import { EventTradingItemFilters } from './EventTradingItemFilters';
export declare class EventFilters {
    'investingHistory': EventInvestingItemFilters;
    'tradingHistory': EventTradingItemFilters;
    constructor(data: {
        [key: string]: any;
    });
    static constructFromObject(data: {
        [key: string]: any;
    }): EventFilters | undefined;
}
