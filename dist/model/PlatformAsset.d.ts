export declare class PlatformAsset {
    'id': string;
    'name': string;
    'asset': string;
    'description': string;
    'icon': string;
    'color': string;
    'mandatoryFundPercent': number;
    'url': string;
    constructor(data: {
        [key: string]: any;
    });
    static constructFromObject(data: {
        [key: string]: any;
    }): PlatformAsset | undefined;
}
