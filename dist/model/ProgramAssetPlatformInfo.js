import { AssetFacet } from './AssetFacet';
import { ProgramCreateAssetPlatformInfo } from './ProgramCreateAssetPlatformInfo';
import { ProgramMinInvestAmount } from './ProgramMinInvestAmount';
import { ProgramTag } from './ProgramTag';
import ApiClient from "../ApiClient";
export class ProgramAssetPlatformInfo {
    constructor(data) {
        this['facets'] = data['facets'];
        this['tags'] = data['tags'];
        this['availableProgramCurrencies'] = data['availableProgramCurrencies'];
        this['minInvestAmounts'] = data['minInvestAmounts'];
        this['periods'] = data['periods'];
        this['createProgramInfo'] = data['createProgramInfo'];
    }
    static constructFromObject(data) {
        if (data) {
            return new ProgramAssetPlatformInfo({
                'facets': ApiClient.convertToType(data['facets'], [AssetFacet]),
                'tags': ApiClient.convertToType(data['tags'], [ProgramTag]),
                'availableProgramCurrencies': ApiClient.convertToType(data['availableProgramCurrencies'], ['string']),
                'minInvestAmounts': ApiClient.convertToType(data['minInvestAmounts'], [ProgramMinInvestAmount]),
                'periods': ApiClient.convertToType(data['periods'], ['number']),
                'createProgramInfo': ProgramCreateAssetPlatformInfo.constructFromObject(data['createProgramInfo']),
            });
        }
    }
}
