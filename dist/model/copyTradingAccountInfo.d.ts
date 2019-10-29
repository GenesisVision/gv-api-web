import { Currency } from './currency';
import { PersonalCopyTradingAccountInfo } from './personalCopyTradingAccountInfo';
export declare class CopyTradingAccountInfo {
    'id'?: string;
    'currency'?: Currency;
    'logo'?: string;
    'title'?: string;
    'balance'?: number;
    'equity'?: number;
    'freeMargin'?: number;
    'marginLevel'?: number;
    'available'?: number;
    'personalInfo'?: PersonalCopyTradingAccountInfo;
    constructor();
    static constructFromObject(data: {
        [key: string]: any;
    }, obj?: CopyTradingAccountInfo): CopyTradingAccountInfo;
}
