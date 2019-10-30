import { CopyTradingAccountInfo } from './CopyTradingAccountInfo';
export declare class CopyTradingAccountsList {
    'accounts'?: Array<CopyTradingAccountInfo>;
    'total'?: number;
    static constructFromObject(data: {
        [key: string]: any;
    }, obj?: CopyTradingAccountsList): CopyTradingAccountsList;
}
