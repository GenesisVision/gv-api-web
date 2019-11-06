import { CopyTradingDetailsList } from './CopyTradingDetailsList';
export declare class ItemsViewModelCopyTradingDetailsList {
    'items': Array<CopyTradingDetailsList>;
    'total': number;
    constructor(data: {
        [key: string]: any;
    });
    static constructFromObject(data: {
        [key: string]: any;
    }): ItemsViewModelCopyTradingDetailsList | undefined;
}
