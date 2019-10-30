export declare class ExternalTransactionDetails {
    'description'?: string;
    'descriptionUrl'?: string;
    'fromAddress'?: string;
    'isEnableActions'?: boolean;
    constructor();
    static constructFromObject(data: {
        [key: string]: any;
    }, obj?: ExternalTransactionDetails): ExternalTransactionDetails;
}
