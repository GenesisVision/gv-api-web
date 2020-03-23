import { TradesDelay } from './TradesDelay';

export interface MakeTradingAccountProgram {
    id: string;
    periodLength: number;
    stopOutLevel: number;
    investmentLimit: number;
    tradesDelay: TradesDelay;
    entryFee: number;
    successFee: number;
    title: string;
    description: string;
    logo: string;
}

