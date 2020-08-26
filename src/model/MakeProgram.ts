import { Currency } from './Currency';
import { TradesDelay } from './TradesDelay';

export interface MakeProgram {
    title: string;
    description: string;
    logo: string;
    periodLength: number;
    stopOutLevel: number;
    investmentLimit: number;
    tradesDelay: TradesDelay;
    entryFee: number;
    successFee: number;
    depositAmount: number;
    depositWalletId: string;
    currency: Currency;
    leverage: number;
    brokerAccountTypeId: string;
}

