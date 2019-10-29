import { ProgramFacet } from './programFacet';
import { ProgramMinInvestAmount } from './programMinInvestAmount';
import { ProgramTag } from './programTag';
import ApiClient from "../ApiClient";
export class ProgramAssetPlatformInfo {
    constructor() {
    }
    static constructFromObject(data, obj = new ProgramAssetPlatformInfo()) {
        if (data) {
            if (data.hasOwnProperty('facets')) {
                obj['facets'] = ApiClient.convertToType(data['facets'], [ProgramFacet]);
            }
            if (data.hasOwnProperty('tags')) {
                obj['tags'] = ApiClient.convertToType(data['tags'], [ProgramTag]);
            }
            if (data.hasOwnProperty('availableProgramCurrencies')) {
                obj['availableProgramCurrencies'] = ApiClient.convertToType(data['availableProgramCurrencies'], ['string']);
            }
            if (data.hasOwnProperty('minInvestAmounts')) {
                obj['minInvestAmounts'] = ApiClient.convertToType(data['minInvestAmounts'], [ProgramMinInvestAmount]);
            }
        }
        return obj;
    }
}
