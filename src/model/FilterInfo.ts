import { EventFilters } from './EventFilters';
import { FilterItemInfo } from './FilterItemInfo';

export interface FilterInfo {
    walletTransactions: Array<FilterItemInfo>;
    walletExternalTransactions: Array<FilterItemInfo>;
    events: EventFilters;
    assets: Array<FilterItemInfo>;
}

