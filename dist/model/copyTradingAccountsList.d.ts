import { CopyTradingAccountInfo } from './copyTradingAccountInfo';
export declare class CopyTradingAccountsList {
    'accounts'?: Array<CopyTradingAccountInfo>;
    'total'?: number;
    constructor();
    static constructFromObject(data: {
        [key: string]: any;
    }, obj?: CopyTradingAccountsList): CopyTradingAccountsList;
}
