import { AndroidAppVersion } from './AndroidAppVersion';
import { EnumsOld } from './EnumsOld';
import { FundFacet } from './FundFacet';
import { IOsAppVersion } from './IOsAppVersion';
import { PlatformCurrencyOld } from './PlatformCurrencyOld';
import { ProgramFacet } from './ProgramFacet';
import { ProgramsInfoOld } from './ProgramsInfoOld';
import ApiClient from "../ApiClient";
export class PlatformInfoOld {
    constructor(data) {
        this['iOSVersion'] = data['iOSVersion'];
        this['androidVersion'] = data['androidVersion'];
        this['programsFacets'] = data['programsFacets'];
        this['fundsFacets'] = data['fundsFacets'];
        this['programsInfo'] = data['programsInfo'];
        this['currencies'] = data['currencies'];
        this['programCurrencies'] = data['programCurrencies'];
        this['platformCurrencies'] = data['platformCurrencies'];
        this['enums'] = data['enums'];
    }
    static constructFromObject(data) {
        if (data) {
            return new PlatformInfoOld({
                'iOSVersion': IOsAppVersion.constructFromObject(data['iOSVersion']),
                'androidVersion': AndroidAppVersion.constructFromObject(data['androidVersion']),
                'programsFacets': ApiClient.convertToType(data['programsFacets'], [ProgramFacet]),
                'fundsFacets': ApiClient.convertToType(data['fundsFacets'], [FundFacet]),
                'programsInfo': ProgramsInfoOld.constructFromObject(data['programsInfo']),
                'currencies': ApiClient.convertToType(data['currencies'], ['string']),
                'programCurrencies': ApiClient.convertToType(data['programCurrencies'], ['string']),
                'platformCurrencies': ApiClient.convertToType(data['platformCurrencies'], [PlatformCurrencyOld]),
                'enums': EnumsOld.constructFromObject(data['enums']),
            });
        }
    }
}
