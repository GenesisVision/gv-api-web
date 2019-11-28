import { InternalTransferRequestType } from './InternalTransferRequestType';
export declare class InternalTransferRequest {
    'sourceId': string;
    'sourceType': InternalTransferRequestType;
    'destinationId': string;
    'destinationType': InternalTransferRequestType;
    'amount': number;
    'transferAll': boolean;
    constructor(data: {
        [key: string]: any;
    });
    static constructFromObject(data: {
        [key: string]: any;
    }): InternalTransferRequest | undefined;
}
