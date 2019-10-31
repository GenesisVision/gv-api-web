import { TransferRequestType } from './TransferRequestType';
export declare class InternalTransferRequest {
    'sourceId': string;
    'sourceType': TransferRequestType;
    'destinationId': string;
    'destinationType': TransferRequestType;
    'amount': number;
    'transferAll': boolean;
    constructor(data: {
        [key: string]: any;
    });
    static constructFromObject(data: {
        [key: string]: any;
    }): InternalTransferRequest | undefined;
}
