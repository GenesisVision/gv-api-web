import { Currency } from './Currency';
import { PersonalCopyTradingAccountInfo } from './PersonalCopyTradingAccountInfo';
export declare class CopyTradingAccountInfo {
    'id': string;
    'currency': Currency;
    'logo': string;
    'title': string;
    'balance': number;
    'equity': number;
    'freeMargin': number;
    'marginLevel': number;
    'available': number;
    'personalInfo': PersonalCopyTradingAccountInfo;
    constructor(data: {
        [key: string]: any;
    });
    static constructFromObject(data: {
        [key: string]: any;
    }): CopyTradingAccountInfo | undefined;
}
