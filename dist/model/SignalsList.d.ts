import { SignalDetails } from './SignalDetails';
export declare class SignalsList {
    'programs'?: Array<SignalDetails>;
    'total'?: number;
    static constructFromObject(data: {
        [key: string]: any;
    }, obj?: SignalsList): SignalsList;
}
