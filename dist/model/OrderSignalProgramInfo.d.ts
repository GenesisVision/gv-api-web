import { OrderProgramData } from './OrderProgramData';
import { OrderSignalFee } from './OrderSignalFee';
import { ProfilePublic } from './ProfilePublic';
export declare class OrderSignalProgramInfo {
    'manager'?: ProfilePublic;
    'program'?: OrderProgramData;
    'programId'?: string;
    'volume'?: number;
    'priceOpenAvg'?: number;
    'profit'?: number;
    'firstOrderDate'?: Date;
    'fees'?: Array<OrderSignalFee>;
    static constructFromObject(data: {
        [key: string]: any;
    }, obj?: OrderSignalProgramInfo): OrderSignalProgramInfo;
}
