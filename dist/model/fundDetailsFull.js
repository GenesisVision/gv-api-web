import { FundAssetInfo } from './fundAssetInfo';
import { PersonalFundDetails } from './personalFundDetails';
import { ProfilePublic } from './profilePublic';
import ApiClient from "../ApiClient";
export class FundDetailsFull {
    constructor() {
    }
    static constructFromObject(data, obj = new FundDetailsFull()) {
        if (data) {
            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'string');
            }
            if (data.hasOwnProperty('logo')) {
                obj['logo'] = ApiClient.convertToType(data['logo'], 'string');
            }
            if (data.hasOwnProperty('url')) {
                obj['url'] = ApiClient.convertToType(data['url'], 'string');
            }
            if (data.hasOwnProperty('color')) {
                obj['color'] = ApiClient.convertToType(data['color'], 'string');
            }
            if (data.hasOwnProperty('title')) {
                obj['title'] = ApiClient.convertToType(data['title'], 'string');
            }
            if (data.hasOwnProperty('description')) {
                obj['description'] = ApiClient.convertToType(data['description'], 'string');
            }
            if (data.hasOwnProperty('creationDate')) {
                obj['creationDate'] = ApiClient.convertToType(data['creationDate'], 'Date');
            }
            if (data.hasOwnProperty('entryFeeSelected')) {
                obj['entryFeeSelected'] = ApiClient.convertToType(data['entryFeeSelected'], 'number');
            }
            if (data.hasOwnProperty('entryFeeCurrent')) {
                obj['entryFeeCurrent'] = ApiClient.convertToType(data['entryFeeCurrent'], 'number');
            }
            if (data.hasOwnProperty('exitFeeSelected')) {
                obj['exitFeeSelected'] = ApiClient.convertToType(data['exitFeeSelected'], 'number');
            }
            if (data.hasOwnProperty('exitFeeCurrent')) {
                obj['exitFeeCurrent'] = ApiClient.convertToType(data['exitFeeCurrent'], 'number');
            }
            if (data.hasOwnProperty('assetsStructure')) {
                obj['assetsStructure'] = ApiClient.convertToType(data['assetsStructure'], [FundAssetInfo]);
            }
            if (data.hasOwnProperty('personalDetails')) {
                obj['personalDetails'] = PersonalFundDetails.constructFromObject(data['personalDetails']);
            }
            if (data.hasOwnProperty('manager')) {
                obj['manager'] = ProfilePublic.constructFromObject(data['manager']);
            }
        }
        return obj;
    }
}
