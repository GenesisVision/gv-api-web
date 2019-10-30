import { TransferRequestType } from './TransferRequestType';
export declare class InternalTransferRequest {
    'sourceId'?: string;
    'sourceType'?: TransferRequestType;
    'destinationId'?: string;
    'destinationType'?: TransferRequestType;
    'amount'?: number;
    'transferAll'?: boolean;
    static constructFromObject(data: {
        [key: string]: any;
    }, obj?: InternalTransferRequest): InternalTransferRequest;
}
