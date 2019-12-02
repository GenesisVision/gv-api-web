export declare class CreateSignalProvider {
    'assetId': string;
    'volumeFee': number;
    'successFee': number;
    constructor(data: {
        [key: string]: any;
    });
    static constructFromObject(data: {
        [key: string]: any;
    }): CreateSignalProvider | undefined;
}
