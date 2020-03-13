import { InternalTransferRequestType } from './InternalTransferRequestType';

export interface InternalTransferRequest {
    sourceId: string;
    sourceType: InternalTransferRequestType;
    destinationId: string;
    destinationType: InternalTransferRequestType;
    amount: number;
    transferAll: boolean;
}

