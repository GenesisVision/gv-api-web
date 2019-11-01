import { SignalDetails } from './SignalDetails';
export declare class SignalsList {
    'programs': Array<SignalDetails>;
    'total': number;
    constructor(data: {
        [key: string]: any;
    });
    static constructFromObject(data: {
        [key: string]: any;
    }): SignalsList | undefined;
}
