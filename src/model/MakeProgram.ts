import { Currency } from './Currency';
import { TradesDelay } from './TradesDelay';

export interface MakeProgram {
    depositAmount: number;
    depositWalletId: string;
    currency: Currency;
    leverage: number;
    brokerAccountTypeId: string;
    title: string;
    description: string;
    logo: string;
    periodLength: number;
    stopOutLevel: number;
    investmentLimit: number;
    tradesDelay: TradesDelay;
    successFee: number;
    managementFee: number;
}

