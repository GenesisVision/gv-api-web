export declare class FundAssetPart {
    'id': string;
    'percent': number;
    constructor(data: {
        [key: string]: any;
    });
    static constructFromObject(data: {
        [key: string]: any;
    }): FundAssetPart | undefined;
}
