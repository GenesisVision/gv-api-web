import { FundDetailsListItem } from './FundDetailsListItem';
export declare class ItemsViewModelFundDetailsListItem {
    'items': Array<FundDetailsListItem>;
    'total': number;
    constructor(data: {
        [key: string]: any;
    });
    static constructFromObject(data: {
        [key: string]: any;
    }): ItemsViewModelFundDetailsListItem | undefined;
}
