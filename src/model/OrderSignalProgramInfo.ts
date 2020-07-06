import { OrderProgramData } from './OrderProgramData';
import { OrderSignalFee } from './OrderSignalFee';
import { ProfilePublic } from './ProfilePublic';

export interface OrderSignalProgramInfo {
    manager: ProfilePublic;
    program: OrderProgramData;
    programId: string;
    volume: number;
    priceOpenAvg: number;
    profit: number;
    firstOrderDate: Date;
    fees: Array<OrderSignalFee>;
}

