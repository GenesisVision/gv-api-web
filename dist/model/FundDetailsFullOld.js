import { FundAssetPartWithIcon } from './FundAssetPartWithIcon';
import { FundStatisticOld } from './FundStatisticOld';
import { InvestmentProgramStatus } from './InvestmentProgramStatus';
import { PersonalFundDetailsFullOld } from './PersonalFundDetailsFullOld';
import { ProfilePublic } from './ProfilePublic';
import ApiClient from "../ApiClient";
export class FundDetailsFullOld {
    constructor(data) {
        this['entryFee'] = data['entryFee'];
        this['exitFee'] = data['exitFee'];
        this['managementFee'] = data['managementFee'];
        this['currentAssets'] = data['currentAssets'];
        this['statistic'] = data['statistic'];
        this['personalFundDetails'] = data['personalFundDetails'];
        this['id'] = data['id'];
        this['logo'] = data['logo'];
        this['url'] = data['url'];
        this['color'] = data['color'];
        this['description'] = data['description'];
        this['title'] = data['title'];
        this['ipfsHash'] = data['ipfsHash'];
        this['creationDate'] = data['creationDate'];
        this['status'] = data['status'];
        this['manager'] = data['manager'];
    }
    static constructFromObject(data) {
        return new FundDetailsFullOld({
            'entryFee': ApiClient.convertToType(data['entryFee'], 'number'),
            'exitFee': ApiClient.convertToType(data['exitFee'], 'number'),
            'managementFee': ApiClient.convertToType(data['managementFee'], 'number'),
            'currentAssets': ApiClient.convertToType(data['currentAssets'], [FundAssetPartWithIcon]),
            'statistic': FundStatisticOld.constructFromObject(data['statistic']),
            'personalFundDetails': PersonalFundDetailsFullOld.constructFromObject(data['personalFundDetails']),
            'id': ApiClient.convertToType(data['id'], 'string'),
            'logo': ApiClient.convertToType(data['logo'], 'string'),
            'url': ApiClient.convertToType(data['url'], 'string'),
            'color': ApiClient.convertToType(data['color'], 'string'),
            'description': ApiClient.convertToType(data['description'], 'string'),
            'title': ApiClient.convertToType(data['title'], 'string'),
            'ipfsHash': ApiClient.convertToType(data['ipfsHash'], 'string'),
            'creationDate': ApiClient.convertToType(data['creationDate'], 'Date'),
            'status': InvestmentProgramStatus.constructFromObject(data['status']),
            'manager': ProfilePublic.constructFromObject(data['manager']),
        });
    }
}
