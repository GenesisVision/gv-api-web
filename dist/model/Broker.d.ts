import { BrokerAccountType } from './BrokerAccountType';
import { Tag } from './Tag';
export declare class Broker {
    'name': string;
    'description': string;
    'logo': string;
    'terms': string;
    'assets': string;
    'fee': number;
    'leverageMin': number;
    'leverageMax': number;
    'isKycRequired': boolean;
    'accountTypes': Array<BrokerAccountType>;
    'tags': Array<Tag>;
    constructor(data: {
        [key: string]: any;
    });
    static constructFromObject(data: {
        [key: string]: any;
    }): Broker | undefined;
}
