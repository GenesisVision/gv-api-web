import { FundDetailsList } from './FundDetailsList';
export declare class ItemsViewModelFundDetailsList {
    'items': Array<FundDetailsList>;
    'total': number;
    constructor(data: {
        [key: string]: any;
    });
    static constructFromObject(data: {
        [key: string]: any;
    }): ItemsViewModelFundDetailsList | undefined;
}
