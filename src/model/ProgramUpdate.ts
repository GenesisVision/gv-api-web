import { TradesDelay } from './TradesDelay';

export interface ProgramUpdate {
    title: string;
    description: string;
    logo: string;
    entryFee: number;
    exitFee: number;
    successFee: number;
    stopOutLevel: number;
    investmentLimit: number;
    tradesDelay: TradesDelay;
    id: string;
}

