import { ProgramFacet } from './ProgramFacet';
import { ProgramMinInvestAmount } from './ProgramMinInvestAmount';
import { ProgramTag } from './ProgramTag';
import ApiClient from "../ApiClient";
export class ProgramAssetPlatformInfo {
    constructor(data) {
        this['facets'] = data['facets'];
        this['tags'] = data['tags'];
        this['availableProgramCurrencies'] = data['availableProgramCurrencies'];
        this['minInvestAmounts'] = data['minInvestAmounts'];
    }
    static constructFromObject(data) {
        if (data) {
            return new ProgramAssetPlatformInfo({
                'facets': ApiClient.convertToType(data['facets'], [ProgramFacet]),
                'tags': ApiClient.convertToType(data['tags'], [ProgramTag]),
                'availableProgramCurrencies': ApiClient.convertToType(data['availableProgramCurrencies'], ['string']),
                'minInvestAmounts': ApiClient.convertToType(data['minInvestAmounts'], [ProgramMinInvestAmount]),
            });
        }
    }
}
