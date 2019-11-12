import { TradingAccountDetails } from './TradingAccountDetails';
export declare class ItemsViewModelTradingAccountDetails {
    'items': Array<TradingAccountDetails>;
    'total': number;
    constructor(data: {
        [key: string]: any;
    });
    static constructFromObject(data: {
        [key: string]: any;
    }): ItemsViewModelTradingAccountDetails | undefined;
}
