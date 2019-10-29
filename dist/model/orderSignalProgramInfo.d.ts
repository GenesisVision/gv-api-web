import { OrderProgramData } from './orderProgramData';
import { OrderSignalFee } from './orderSignalFee';
import { ProfilePublic } from './profilePublic';
export declare class OrderSignalProgramInfo {
    'manager'?: ProfilePublic;
    'program'?: OrderProgramData;
    'programId'?: string;
    'volume'?: number;
    'priceOpenAvg'?: number;
    'profit'?: number;
    'firstOrderDate'?: Date;
    'fees'?: [OrderSignalFee];
    constructor();
    static constructFromObject(data: {
        [key: string]: any;
    }, obj?: OrderSignalProgramInfo): OrderSignalProgramInfo;
}
