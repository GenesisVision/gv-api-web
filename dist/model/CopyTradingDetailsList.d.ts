import { Currency } from './Currency';
import { PersonalCopyTradingAccountInfo } from './PersonalCopyTradingAccountInfo';
import { ProfilePublicShort } from './ProfilePublicShort';
import { ProgramTag } from './ProgramTag';
export declare class CopyTradingDetailsList {
    'id': string;
    'title': string;
    'description': string;
    'logo': string;
    'creationDate': Date;
    'currency': Currency;
    'subscribersCount': number;
    'tradesCount': number;
    'status': string;
    'owner': ProfilePublicShort;
    'personalDetails': PersonalCopyTradingAccountInfo;
    'tags': Array<ProgramTag>;
    constructor(data: {
        [key: string]: any;
    });
    static constructFromObject(data: {
        [key: string]: any;
    }): CopyTradingDetailsList | undefined;
}