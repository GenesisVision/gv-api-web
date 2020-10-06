import { TradesDelay } from './TradesDelay';

export interface MakeTradingAccountProgram {
    title: string;
    description: string;
    logo: string;
    id: string;
    periodLength: number;
    stopOutLevel: number;
    investmentLimit: number;
    tradesDelay: TradesDelay;
    successFee: number;
    managementFee: number;
}

