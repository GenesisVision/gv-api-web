import { EventInvestingItemFilters } from './EventInvestingItemFilters';
import { EventTradingItemFilters } from './EventTradingItemFilters';

export interface EventFilters {
    investmentHistory: EventInvestingItemFilters;
    tradingHistory: EventTradingItemFilters;
}

