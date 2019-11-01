export declare class NewExternalSignalAccountRequest {
    'externalKeyId': string;
    'volumeFee': number;
    'monthlySubscriptionFee': number;
    'title': string;
    'description': string;
    'logo': string;
    constructor(data: {
        [key: string]: any;
    });
    static constructFromObject(data: {
        [key: string]: any;
    }): NewExternalSignalAccountRequest | undefined;
}
