import { CopyTradingAccountInfo } from './CopyTradingAccountInfo';
export declare class ItemsViewModelCopyTradingAccountInfo {
    'items': Array<CopyTradingAccountInfo>;
    'total': number;
    constructor(data: {
        [key: string]: any;
    });
    static constructFromObject(data: {
        [key: string]: any;
    }): ItemsViewModelCopyTradingAccountInfo | undefined;
}
