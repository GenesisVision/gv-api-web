import { InternalTransferRequestType } from './InternalTransferRequestType';
import { TransferDetails } from './TransferDetails';

export interface InternalTransferRequest {
    sourceId: string;
    sourceType: InternalTransferRequestType;
    destinationId: string;
    destinationType: InternalTransferRequestType;
    amount: number;
    transferAll: boolean;
    details: TransferDetails;
}

