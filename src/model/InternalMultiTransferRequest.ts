import { Currency } from './Currency';
import { InternalTransferRequestType } from './InternalTransferRequestType';

export interface InternalMultiTransferRequest {
    sourceId: string;
    sourceType: InternalTransferRequestType;
    destinationId: string;
    destinationType: InternalTransferRequestType;
    amount: number;
    transferAll: boolean;
    sourceCurrency: Currency;
    destinationCurrency: Currency;
}

