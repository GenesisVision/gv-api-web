import { SignalDataMaster } from './signalDataMaster';
export declare class OrderModelSignalData {
    'masters'?: [SignalDataMaster];
    constructor();
    static constructFromObject(data: {
        [key: string]: any;
    }, obj?: OrderModelSignalData): OrderModelSignalData;
}
