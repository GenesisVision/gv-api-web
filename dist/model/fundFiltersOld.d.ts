import { PlatformAsset } from './platformAsset';
export declare class FundFiltersOld {
    'assets'?: [PlatformAsset];
    constructor();
    static constructFromObject(data: {
        [key: string]: any;
    }, obj?: FundFiltersOld): FundFiltersOld;
}
