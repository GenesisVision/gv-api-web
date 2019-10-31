import { BrokerAccountTypeOld } from './BrokerAccountTypeOld';
import { ProgramTag } from './ProgramTag';
export declare class BrokerOld {
    'name': string;
    'description': string;
    'logo': string;
    'terms': string;
    'assets': string;
    'fee': number;
    'leverageMin': number;
    'leverageMax': number;
    'accountTypes': Array<BrokerAccountTypeOld>;
    'isForex': boolean;
    'isSignalsAvailable': boolean;
    'tags': Array<ProgramTag>;
    constructor(data: {
        [key: string]: any;
    });
    static constructFromObject(data: {
        [key: string]: any;
    }): BrokerOld;
}
