export declare class FundAssetInfo {
    'asset': string;
    'symbol': string;
    'icon': string;
    'target': number;
    'current': number;
    constructor(data: {
        [key: string]: any;
    });
    static constructFromObject(data: {
        [key: string]: any;
    }): FundAssetInfo | undefined;
}
