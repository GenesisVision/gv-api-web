import { AndroidAppVersion } from './AndroidAppVersion';
import { EnumsOld } from './EnumsOld';
import { FundFacet } from './FundFacet';
import { IOsAppVersion } from './IOsAppVersion';
import { PlatformCurrencyOld } from './PlatformCurrencyOld';
import { ProgramFacet } from './ProgramFacet';
import { ProgramsInfoOld } from './ProgramsInfoOld';
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
    static constructFromObject(data: {
        [key: string]: any;
    }, obj?: PlatformInfoOld): PlatformInfoOld;
}
