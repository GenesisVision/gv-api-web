export declare class NewExternalSignalAccountRequest {
    'externalKeyId'?: string;
    'volumeFee'?: number;
    'monthlySubscriptionFee'?: number;
    'title'?: string;
    'description'?: string;
    'logo'?: string;
    constructor();
    static constructFromObject(data: {
        [key: string]: any;
    }, obj?: NewExternalSignalAccountRequest): NewExternalSignalAccountRequest;
}
