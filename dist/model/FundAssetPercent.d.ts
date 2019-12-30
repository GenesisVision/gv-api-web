export declare class FundAssetPercent {
    'asset': string;
    'name': string;
    'percent': number;
    'icon': string;
    constructor(data: {
        [key: string]: any;
    });
    static constructFromObject(data: {
        [key: string]: any;
    }): FundAssetPercent | undefined;
}
