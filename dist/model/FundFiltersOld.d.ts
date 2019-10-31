import { PlatformAsset } from './PlatformAsset';
export declare class FundFiltersOld {
    'assets': Array<PlatformAsset>;
    constructor(data: {
        [key: string]: any;
    });
    static constructFromObject(data: {
        [key: string]: any;
    }): FundFiltersOld;
}
