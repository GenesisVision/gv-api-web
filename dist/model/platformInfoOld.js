import { AndroidAppVersion } from './androidAppVersion';
import { EnumsOld } from './enumsOld';
import { FundFacet } from './fundFacet';
import { IOsAppVersion } from './iOsAppVersion';
import { PlatformCurrencyOld } from './platformCurrencyOld';
import { ProgramFacet } from './programFacet';
import { ProgramsInfoOld } from './programsInfoOld';
import ApiClient from "../ApiClient";
export class PlatformInfoOld {
    constructor() {
    }
    static constructFromObject(data, obj = new PlatformInfoOld()) {
        if (data) {
            if (data.hasOwnProperty('iOSVersion')) {
                obj['iOSVersion'] = IOsAppVersion.constructFromObject(data['iOSVersion']);
            }
            if (data.hasOwnProperty('androidVersion')) {
                obj['androidVersion'] = AndroidAppVersion.constructFromObject(data['androidVersion']);
            }
            if (data.hasOwnProperty('programsFacets')) {
                obj['programsFacets'] = ApiClient.convertToType(data['programsFacets'], [ProgramFacet]);
            }
            if (data.hasOwnProperty('fundsFacets')) {
                obj['fundsFacets'] = ApiClient.convertToType(data['fundsFacets'], [FundFacet]);
            }
            if (data.hasOwnProperty('programsInfo')) {
                obj['programsInfo'] = ProgramsInfoOld.constructFromObject(data['programsInfo']);
            }
            if (data.hasOwnProperty('currencies')) {
                obj['currencies'] = ApiClient.convertToType(data['currencies'], ['string']);
            }
            if (data.hasOwnProperty('programCurrencies')) {
                obj['programCurrencies'] = ApiClient.convertToType(data['programCurrencies'], ['string']);
            }
            if (data.hasOwnProperty('platformCurrencies')) {
                obj['platformCurrencies'] = ApiClient.convertToType(data['platformCurrencies'], [PlatformCurrencyOld]);
            }
            if (data.hasOwnProperty('enums')) {
                obj['enums'] = EnumsOld.constructFromObject(data['enums']);
            }
        }
        return obj;
    }
}
