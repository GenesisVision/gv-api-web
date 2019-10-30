import { EventFiltersOld } from './eventFiltersOld';
import { FundFiltersOld } from './fundFiltersOld';
import { MultiWalletFiltersOld } from './multiWalletFiltersOld';
import { ProgramFiltersOld } from './programFiltersOld';
export declare class EnumsOld {
    'multiWallet'?: MultiWalletFiltersOld;
    'program'?: ProgramFiltersOld;
    'fund'?: FundFiltersOld;
    'event'?: EventFiltersOld;
    'assetTypes'?: [string];
    constructor();
    static constructFromObject(data: {
        [key: string]: any;
    }, obj?: EnumsOld): EnumsOld;
}
