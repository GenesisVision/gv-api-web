import { AssetPublicDetails } from './AssetPublicDetails';
import { FundAssetInfo } from './FundAssetInfo';
import { PersonalFundDetails } from './PersonalFundDetails';
import { ProfilePublic } from './ProfilePublic';
import ApiClient from "../ApiClient";
export class FundDetailsFull {
    constructor(data) {
        this['id'] = data['id'];
        this['publicInfo'] = data['publicInfo'];
        this['entryFeeSelected'] = data['entryFeeSelected'];
        this['entryFeeCurrent'] = data['entryFeeCurrent'];
        this['exitFeeSelected'] = data['exitFeeSelected'];
        this['exitFeeCurrent'] = data['exitFeeCurrent'];
        this['assetsStructure'] = data['assetsStructure'];
        this['personalDetails'] = data['personalDetails'];
        this['owner'] = data['owner'];
    }
    static constructFromObject(data) {
        if (data) {
            return new FundDetailsFull({
                'id': ApiClient.convertToType(data['id'], 'string'),
                'publicInfo': AssetPublicDetails.constructFromObject(data['publicInfo']),
                'entryFeeSelected': ApiClient.convertToType(data['entryFeeSelected'], 'number'),
                'entryFeeCurrent': ApiClient.convertToType(data['entryFeeCurrent'], 'number'),
                'exitFeeSelected': ApiClient.convertToType(data['exitFeeSelected'], 'number'),
                'exitFeeCurrent': ApiClient.convertToType(data['exitFeeCurrent'], 'number'),
                'assetsStructure': ApiClient.convertToType(data['assetsStructure'], [FundAssetInfo]),
                'personalDetails': PersonalFundDetails.constructFromObject(data['personalDetails']),
                'owner': ProfilePublic.constructFromObject(data['owner']),
            });
        }
    }
}
