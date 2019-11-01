import { CopyTradingAccountInfo } from './CopyTradingAccountInfo';
export declare class CopyTradingAccountsList {
    'accounts': Array<CopyTradingAccountInfo>;
    'total': number;
    constructor(data: {
        [key: string]: any;
    });
    static constructFromObject(data: {
        [key: string]: any;
    }): CopyTradingAccountsList | undefined;
}
