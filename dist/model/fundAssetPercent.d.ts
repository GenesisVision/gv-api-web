export declare class FundAssetPercent {
    'asset'?: string;
    'name'?: string;
    'percent'?: number;
    'icon'?: string;
    constructor();
    static constructFromObject(data: {
        [key: string]: any;
    }, obj?: FundAssetPercent): FundAssetPercent;
}
