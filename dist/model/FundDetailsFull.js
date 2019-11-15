import { FundAssetInfo } from './FundAssetInfo';
import { PersonalFundDetails } from './PersonalFundDetails';
import { ProfilePublic } from './ProfilePublic';
import ApiClient from "../ApiClient";
export class FundDetailsFull {
    constructor(data) {
        this['id'] = data['id'];
        this['logo'] = data['logo'];
        this['url'] = data['url'];
        this['color'] = data['color'];
        this['title'] = data['title'];
        this['description'] = data['description'];
        this['creationDate'] = data['creationDate'];
        this['status'] = data['status'];
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
                'logo': ApiClient.convertToType(data['logo'], 'string'),
                'url': ApiClient.convertToType(data['url'], 'string'),
                'color': ApiClient.convertToType(data['color'], 'string'),
                'title': ApiClient.convertToType(data['title'], 'string'),
                'description': ApiClient.convertToType(data['description'], 'string'),
                'creationDate': ApiClient.convertToType(data['creationDate'], 'Date'),
                'status': ApiClient.convertToType(data['status'], 'string'),
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
