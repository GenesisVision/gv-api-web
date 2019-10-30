import { SignalDetails } from './signalDetails';
export declare class SignalsList {
    'programs'?: [SignalDetails];
    'total'?: number;
    constructor();
    static constructFromObject(data: {
        [key: string]: any;
    }, obj?: SignalsList): SignalsList;
}
