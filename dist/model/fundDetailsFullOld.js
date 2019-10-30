import { FundAssetPartWithIcon } from './fundAssetPartWithIcon';
import { FundStatisticOld } from './fundStatisticOld';
import { InvestmentProgramStatus } from './investmentProgramStatus';
import { PersonalFundDetailsFullOld } from './personalFundDetailsFullOld';
import { ProfilePublic } from './profilePublic';
import ApiClient from "../ApiClient";
export class FundDetailsFullOld {
    constructor() {
    }
    static constructFromObject(data, obj = new FundDetailsFullOld()) {
        if (data) {
            if (data.hasOwnProperty('entryFee')) {
                obj['entryFee'] = ApiClient.convertToType(data['entryFee'], 'number');
            }
            if (data.hasOwnProperty('exitFee')) {
                obj['exitFee'] = ApiClient.convertToType(data['exitFee'], 'number');
            }
            if (data.hasOwnProperty('managementFee')) {
                obj['managementFee'] = ApiClient.convertToType(data['managementFee'], 'number');
            }
            if (data.hasOwnProperty('currentAssets')) {
                obj['currentAssets'] = ApiClient.convertToType(data['currentAssets'], [FundAssetPartWithIcon]);
            }
            if (data.hasOwnProperty('statistic')) {
                obj['statistic'] = FundStatisticOld.constructFromObject(data['statistic']);
            }
            if (data.hasOwnProperty('personalFundDetails')) {
                obj['personalFundDetails'] = PersonalFundDetailsFullOld.constructFromObject(data['personalFundDetails']);
            }
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
            if (data.hasOwnProperty('description')) {
                obj['description'] = ApiClient.convertToType(data['description'], 'string');
            }
            if (data.hasOwnProperty('title')) {
                obj['title'] = ApiClient.convertToType(data['title'], 'string');
            }
            if (data.hasOwnProperty('ipfsHash')) {
                obj['ipfsHash'] = ApiClient.convertToType(data['ipfsHash'], 'string');
            }
            if (data.hasOwnProperty('creationDate')) {
                obj['creationDate'] = ApiClient.convertToType(data['creationDate'], 'Date');
            }
            if (data.hasOwnProperty('status')) {
                obj['status'] = InvestmentProgramStatus.constructFromObject(data['status']);
            }
            if (data.hasOwnProperty('manager')) {
                obj['manager'] = ProfilePublic.constructFromObject(data['manager']);
            }
        }
        return obj;
    }
}
