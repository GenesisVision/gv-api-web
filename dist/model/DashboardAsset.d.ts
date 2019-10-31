export declare class DashboardAsset {
    'asset': string;
    'color': string;
    'percent': number;
    constructor(data: {
        [key: string]: any;
    });
    static constructFromObject(data: {
        [key: string]: any;
    }): DashboardAsset | undefined;
}
