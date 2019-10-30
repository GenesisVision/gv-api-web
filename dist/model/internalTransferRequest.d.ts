import { TransferRequestType } from './transferRequestType';
export declare class InternalTransferRequest {
    'sourceId'?: string;
    'sourceType'?: TransferRequestType;
    'destinationId'?: string;
    'destinationType'?: TransferRequestType;
    'amount'?: number;
    'transferAll'?: boolean;
    constructor();
    static constructFromObject(data: {
        [key: string]: any;
    }, obj?: InternalTransferRequest): InternalTransferRequest;
}
