export declare class FundAssetPartWithIcon {
    'icon': string;
    'color': string;
    'name': string;
    'asset': string;
    'percent': number;
    constructor(data: {
        [key: string]: any;
    });
    static constructFromObject(data: {
        [key: string]: any;
    }): FundAssetPartWithIcon;
}
