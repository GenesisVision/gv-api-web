import { Currency } from './Currency';
import { TradesDelay } from './TradesDelay';

export interface MakeExchangeProgram {
    depositAmount: number;
    depositWalletId: string;
    brokerAccountTypeId: string;
    title: string;
    description: string;
    logo: string;
    currency: Currency;
    hourProcessing: number;
    isProcessingRealTime: boolean;
    tradesDelay: TradesDelay;
    managementFee: number;
    successFee: number;
    investmentLimit: number;
}

