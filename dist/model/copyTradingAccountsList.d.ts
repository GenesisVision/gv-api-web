import { CopyTradingAccountInfo } from './copyTradingAccountInfo';
export declare class CopyTradingAccountsList {
    'accounts'?: [CopyTradingAccountInfo];
    'total'?: number;
    constructor();
    static constructFromObject(data: {
        [key: string]: any;
    }, obj?: CopyTradingAccountsList): CopyTradingAccountsList;
}
