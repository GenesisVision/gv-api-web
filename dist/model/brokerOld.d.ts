import { BrokerAccountTypeOld } from './brokerAccountTypeOld';
import { ProgramTag } from './programTag';
export declare class BrokerOld {
    'name'?: string;
    'description'?: string;
    'logo'?: string;
    'terms'?: string;
    'assets'?: string;
    'fee'?: number;
    'leverageMin'?: number;
    'leverageMax'?: number;
    'accountTypes'?: [BrokerAccountTypeOld];
    'isForex'?: boolean;
    'isSignalsAvailable'?: boolean;
    'tags'?: [ProgramTag];
    constructor();
    static constructFromObject(data: {
        [key: string]: any;
    }, obj?: BrokerOld): BrokerOld;
}
