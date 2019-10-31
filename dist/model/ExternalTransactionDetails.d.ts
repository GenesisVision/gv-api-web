export declare class ExternalTransactionDetails {
    'description': string;
    'descriptionUrl': string;
    'fromAddress': string;
    'isEnableActions': boolean;
    constructor(data: {
        [key: string]: any;
    });
    static constructFromObject(data: {
        [key: string]: any;
    }): ExternalTransactionDetails;
}
