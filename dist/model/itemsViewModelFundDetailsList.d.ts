import { FundDetailsList } from './fundDetailsList';
export declare class ItemsViewModelFundDetailsList {
    'items'?: [FundDetailsList];
    'total'?: number;
    constructor();
    static constructFromObject(data: {
        [key: string]: any;
    }, obj?: ItemsViewModelFundDetailsList): ItemsViewModelFundDetailsList;
}
