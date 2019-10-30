import { PlatformAsset } from './platformAsset';
export declare class FundFiltersOld {
    'assets'?: Array<PlatformAsset>;
    constructor();
    static constructFromObject(data: {
        [key: string]: any;
    }, obj?: FundFiltersOld): FundFiltersOld;
}
