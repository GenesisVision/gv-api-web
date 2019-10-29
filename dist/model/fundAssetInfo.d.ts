export declare class FundAssetInfo {
    'asset'?: string;
    'symbol'?: string;
    'icon'?: string;
    'target'?: number;
    'current'?: number;
    constructor();
    static constructFromObject(data: {
        [key: string]: any;
    }, obj?: FundAssetInfo): FundAssetInfo;
}
