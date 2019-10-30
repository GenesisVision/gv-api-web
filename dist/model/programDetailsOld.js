import { ChartSimple } from './chartSimple';
import { Currency } from './currency';
import { DashboardProgramDetailsOld } from './dashboardProgramDetailsOld';
import { InvestmentProgramStatus } from './investmentProgramStatus';
import { PersonalProgramDetailsFullOld } from './personalProgramDetailsFullOld';
import { ProfilePublic } from './profilePublic';
import { ProgramDetailsListStatistic } from './programDetailsListStatistic';
import { ProgramTag } from './programTag';
import ApiClient from "../ApiClient";
export class ProgramDetailsOld {
    constructor() {
    }
    static constructFromObject(data, obj = new ProgramDetailsOld()) {
        if (data) {
            if (data.hasOwnProperty('currency')) {
                obj['currency'] = Currency.constructFromObject(data['currency']);
            }
            if (data.hasOwnProperty('level')) {
                obj['level'] = ApiClient.convertToType(data['level'], 'number');
            }
            if (data.hasOwnProperty('levelProgress')) {
                obj['levelProgress'] = ApiClient.convertToType(data['levelProgress'], 'number');
            }
            if (data.hasOwnProperty('periodDuration')) {
                obj['periodDuration'] = ApiClient.convertToType(data['periodDuration'], 'number');
            }
            if (data.hasOwnProperty('stopOutLevel')) {
                obj['stopOutLevel'] = ApiClient.convertToType(data['stopOutLevel'], 'number');
            }
            if (data.hasOwnProperty('periodStarts')) {
                obj['periodStarts'] = ApiClient.convertToType(data['periodStarts'], 'Date');
            }
            if (data.hasOwnProperty('periodEnds')) {
                obj['periodEnds'] = ApiClient.convertToType(data['periodEnds'], 'Date');
            }
            if (data.hasOwnProperty('availableInvestmentInCurrency')) {
                obj['availableInvestmentInCurrency'] = ApiClient.convertToType(data['availableInvestmentInCurrency'], 'number');
            }
            if (data.hasOwnProperty('availableInvestmentLimit')) {
                obj['availableInvestmentLimit'] = ApiClient.convertToType(data['availableInvestmentLimit'], 'number');
            }
            if (data.hasOwnProperty('dashboardAssetsDetails')) {
                obj['dashboardAssetsDetails'] = DashboardProgramDetailsOld.constructFromObject(data['dashboardAssetsDetails']);
            }
            if (data.hasOwnProperty('statistic')) {
                obj['statistic'] = ProgramDetailsListStatistic.constructFromObject(data['statistic']);
            }
            if (data.hasOwnProperty('personalDetails')) {
                obj['personalDetails'] = PersonalProgramDetailsFullOld.constructFromObject(data['personalDetails']);
            }
            if (data.hasOwnProperty('tags')) {
                obj['tags'] = ApiClient.convertToType(data['tags'], [ProgramTag]);
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
