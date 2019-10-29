export declare class DashboardAsset {
    'asset'?: string;
    'color'?: string;
    'percent'?: number;
    constructor();
    static constructFromObject(data: {
        [key: string]: any;
    }, obj?: DashboardAsset): DashboardAsset;
}
