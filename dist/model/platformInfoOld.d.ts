import { AndroidAppVersion } from './androidAppVersion';
import { EnumsOld } from './enumsOld';
import { FundFacet } from './fundFacet';
import { IOsAppVersion } from './iOsAppVersion';
import { PlatformCurrencyOld } from './platformCurrencyOld';
import { ProgramFacet } from './programFacet';
import { ProgramsInfoOld } from './programsInfoOld';
export declare class PlatformInfoOld {
    'iOSVersion'?: IOsAppVersion;
    'androidVersion'?: AndroidAppVersion;
    'programsFacets'?: Array<ProgramFacet>;
    'fundsFacets'?: Array<FundFacet>;
    'programsInfo'?: ProgramsInfoOld;
    'currencies'?: Array<string>;
    'programCurrencies'?: Array<string>;
    'platformCurrencies'?: Array<PlatformCurrencyOld>;
    'enums'?: EnumsOld;
    constructor();
    static constructFromObject(data: {
        [key: string]: any;
    }, obj?: PlatformInfoOld): PlatformInfoOld;
}
