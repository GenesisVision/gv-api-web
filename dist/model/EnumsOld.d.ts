import { EventFiltersOld } from './EventFiltersOld';
import { FundFiltersOld } from './FundFiltersOld';
import { MultiWalletFiltersOld } from './MultiWalletFiltersOld';
import { ProgramFiltersOld } from './ProgramFiltersOld';
export declare class EnumsOld {
    'multiWallet': MultiWalletFiltersOld;
    'program': ProgramFiltersOld;
    'fund': FundFiltersOld;
    'event': EventFiltersOld;
    'assetTypes': Array<string>;
    constructor(data: {
        [key: string]: any;
    });
    static constructFromObject(data: {
        [key: string]: any;
    }): EnumsOld;
}
