import { ChartSimple } from './ChartSimple';
import { DashboardProgramDetailsOld } from './DashboardProgramDetailsOld';
import { FundAssetPercent } from './FundAssetPercent';
import { FundDetailsListStatistic } from './FundDetailsListStatistic';
import { InvestmentProgramStatus } from './InvestmentProgramStatus';
import { PersonalFundDetailsFullOld } from './PersonalFundDetailsFullOld';
import { ProfilePublic } from './ProfilePublic';
import ApiClient from "../ApiClient";
export class FundDetailsOld {
    constructor(data) {
        this['totalAssetsCount'] = data['totalAssetsCount'];
        this['topFundAssets'] = data['topFundAssets'];
        this['statistic'] = data['statistic'];
        this['personalDetails'] = data['personalDetails'];
        this['dashboardAssetsDetails'] = data['dashboardAssetsDetails'];
        this['id'] = data['id'];
        this['logo'] = data['logo'];
        this['url'] = data['url'];
        this['color'] = data['color'];
        this['title'] = data['title'];
        this['description'] = data['description'];
        this['status'] = data['status'];
        this['creationDate'] = data['creationDate'];
        this['manager'] = data['manager'];
        this['chart'] = data['chart'];
    }
    static constructFromObject(data) {
        if (data) {
            return new FundDetailsOld({
                'totalAssetsCount': ApiClient.convertToType(data['totalAssetsCount'], 'number'),
                'topFundAssets': ApiClient.convertToType(data['topFundAssets'], [FundAssetPercent]),
                'statistic': FundDetailsListStatistic.constructFromObject(data['statistic']),
                'personalDetails': PersonalFundDetailsFullOld.constructFromObject(data['personalDetails']),
                'dashboardAssetsDetails': DashboardProgramDetailsOld.constructFromObject(data['dashboardAssetsDetails']),
                'id': ApiClient.convertToType(data['id'], 'string'),
                'logo': ApiClient.convertToType(data['logo'], 'string'),
                'url': ApiClient.convertToType(data['url'], 'string'),
                'color': ApiClient.convertToType(data['color'], 'string'),
                'title': ApiClient.convertToType(data['title'], 'string'),
                'description': ApiClient.convertToType(data['description'], 'string'),
                'status': InvestmentProgramStatus.constructFromObject(data['status']),
                'creationDate': ApiClient.convertToType(data['creationDate'], 'Date'),
                'manager': ProfilePublic.constructFromObject(data['manager']),
                'chart': ApiClient.convertToType(data['chart'], [ChartSimple]),
            });
        }
    }
}
