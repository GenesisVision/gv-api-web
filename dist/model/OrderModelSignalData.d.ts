import { SignalDataMaster } from './SignalDataMaster';
export declare class OrderModelSignalData {
    'masters': Array<SignalDataMaster>;
    constructor(data: {
        [key: string]: any;
    });
    static constructFromObject(data: {
        [key: string]: any;
    }): OrderModelSignalData | undefined;
}
