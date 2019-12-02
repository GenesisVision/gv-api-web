export declare class DashboardAsset {
    'name': string;
    'color': string;
    'percent': number;
    constructor(data: {
        [key: string]: any;
    });
    static constructFromObject(data: {
        [key: string]: any;
    }): DashboardAsset | undefined;
}
