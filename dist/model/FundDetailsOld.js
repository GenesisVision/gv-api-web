import { ChartSimple } from './ChartSimple';
import { DashboardProgramDetailsOld } from './DashboardProgramDetailsOld';
import { FundAssetPercent } from './FundAssetPercent';
import { FundDetailsListStatistic } from './FundDetailsListStatistic';
import { InvestmentProgramStatus } from './InvestmentProgramStatus';
import { PersonalFundDetailsFullOld } from './PersonalFundDetailsFullOld';
import { ProfilePublic } from './ProfilePublic';
import ApiClient from "../ApiClient";
export class FundDetailsOld {
    static constructFromObject(data, obj = new FundDetailsOld()) {
        if (data) {
            if (data.hasOwnProperty('totalAssetsCount')) {
                obj['totalAssetsCount'] = ApiClient.convertToType(data['totalAssetsCount'], 'number');
            }
            if (data.hasOwnProperty('topFundAssets')) {
                obj['topFundAssets'] = ApiClient.convertToType(data['topFundAssets'], [FundAssetPercent]);
            }
            if (data.hasOwnProperty('statistic')) {
                obj['statistic'] = FundDetailsListStatistic.constructFromObject(data['statistic']);
            }
            if (data.hasOwnProperty('personalDetails')) {
                obj['personalDetails'] = PersonalFundDetailsFullOld.constructFromObject(data['personalDetails']);
            }
            if (data.hasOwnProperty('dashboardAssetsDetails')) {
                obj['dashboardAssetsDetails'] = DashboardProgramDetailsOld.constructFromObject(data['dashboardAssetsDetails']);
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
            if (data.hasOwnProperty('title')) {
                obj['title'] = ApiClient.convertToType(data['title'], 'string');
            }
            if (data.hasOwnProperty('description')) {
                obj['description'] = ApiClient.convertToType(data['description'], 'string');
            }
            if (data.hasOwnProperty('status')) {
                obj['status'] = InvestmentProgramStatus.constructFromObject(data['status']);
            }
            if (data.hasOwnProperty('creationDate')) {
                obj['creationDate'] = ApiClient.convertToType(data['creationDate'], 'Date');
            }
            if (data.hasOwnProperty('manager')) {
                obj['manager'] = ProfilePublic.constructFromObject(data['manager']);
            }
            if (data.hasOwnProperty('chart')) {
                obj['chart'] = ApiClient.convertToType(data['chart'], [ChartSimple]);
            }
        }
        return obj;
    }
}
