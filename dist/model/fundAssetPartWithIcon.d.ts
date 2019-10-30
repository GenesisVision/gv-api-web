export declare class FundAssetPartWithIcon {
    'icon'?: string;
    'color'?: string;
    'name'?: string;
    'asset'?: string;
    'percent'?: number;
    constructor();
    static constructFromObject(data: {
        [key: string]: any;
    }, obj?: FundAssetPartWithIcon): FundAssetPartWithIcon;
}
