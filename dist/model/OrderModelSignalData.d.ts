import { SignalDataMaster } from './SignalDataMaster';
export declare class OrderModelSignalData {
    'masters'?: Array<SignalDataMaster>;
    static constructFromObject(data: {
        [key: string]: any;
    }, obj?: OrderModelSignalData): OrderModelSignalData;
}
