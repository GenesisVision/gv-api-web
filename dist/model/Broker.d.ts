import { BrokerAccountType } from './BrokerAccountType';
import { ProgramTag } from './ProgramTag';
export declare class Broker {
    'name': string;
    'description': string;
    'logo': string;
    'terms': string;
    'assets': string;
    'fee': number;
    'leverageMin': number;
    'leverageMax': number;
    'accountTypes': Array<BrokerAccountType>;
    'tags': Array<ProgramTag>;
    constructor(data: {
        [key: string]: any;
    });
    static constructFromObject(data: {
        [key: string]: any;
    }): Broker | undefined;
}
