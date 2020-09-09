import { TradesDelay } from './TradesDelay';

export interface MakeTradingAccountProgram {
    id: string;
    periodLength: number;
    stopOutLevel: number;
    investmentLimit: number;
    tradesDelay: TradesDelay;
    successFee: number;
    managementFee: number;
    title: string;
    description: string;
    logo: string;
}

