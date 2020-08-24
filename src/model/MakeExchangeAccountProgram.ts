import { Currency } from './Currency';
import { TradesDelay } from './TradesDelay';

export interface MakeExchangeAccountProgram {
    id: string;
    currency: Currency;
    hourProcessing: number;
    isProcessingRealTime: boolean;
    tradesDelay: TradesDelay;
    managementFee: number;
    successFee: number;
    investmentLimit: number;
    title: string;
    description: string;
    logo: string;
}

