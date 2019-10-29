import { BrokerAccountType } from './brokerAccountType';
import { ProgramTag } from './programTag';
export declare class Broker {
    'name'?: string;
    'description'?: string;
    'logo'?: string;
    'terms'?: string;
    'assets'?: string;
    'fee'?: number;
    'leverageMin'?: number;
    'leverageMax'?: number;
    'accountTypes'?: [BrokerAccountType];
    'tags'?: [ProgramTag];
    constructor();
    static constructFromObject(data: {
        [key: string]: any;
    }, obj?: Broker): Broker;
}
