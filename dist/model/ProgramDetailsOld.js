import { ChartSimple } from './ChartSimple';
import { Currency } from './Currency';
import { DashboardProgramDetailsOld } from './DashboardProgramDetailsOld';
import { InvestmentProgramStatus } from './InvestmentProgramStatus';
import { PersonalProgramDetailsFullOld } from './PersonalProgramDetailsFullOld';
import { ProfilePublic } from './ProfilePublic';
import { ProgramDetailsListStatistic } from './ProgramDetailsListStatistic';
import { ProgramTag } from './ProgramTag';
import ApiClient from "../ApiClient";
export class ProgramDetailsOld {
    constructor(data) {
        this['currency'] = data['currency'];
        this['level'] = data['level'];
        this['levelProgress'] = data['levelProgress'];
        this['periodDuration'] = data['periodDuration'];
        this['stopOutLevel'] = data['stopOutLevel'];
        this['periodStarts'] = data['periodStarts'];
        this['periodEnds'] = data['periodEnds'];
        this['availableInvestmentInCurrency'] = data['availableInvestmentInCurrency'];
        this['availableInvestmentLimit'] = data['availableInvestmentLimit'];
        this['dashboardAssetsDetails'] = data['dashboardAssetsDetails'];
        this['statistic'] = data['statistic'];
        this['personalDetails'] = data['personalDetails'];
        this['tags'] = data['tags'];
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
            return new ProgramDetailsOld({
                'currency': Currency.constructFromObject(data['currency']),
                'level': ApiClient.convertToType(data['level'], 'number'),
                'levelProgress': ApiClient.convertToType(data['levelProgress'], 'number'),
                'periodDuration': ApiClient.convertToType(data['periodDuration'], 'number'),
                'stopOutLevel': ApiClient.convertToType(data['stopOutLevel'], 'number'),
                'periodStarts': ApiClient.convertToType(data['periodStarts'], 'Date'),
                'periodEnds': ApiClient.convertToType(data['periodEnds'], 'Date'),
                'availableInvestmentInCurrency': ApiClient.convertToType(data['availableInvestmentInCurrency'], 'number'),
                'availableInvestmentLimit': ApiClient.convertToType(data['availableInvestmentLimit'], 'number'),
                'dashboardAssetsDetails': DashboardProgramDetailsOld.constructFromObject(data['dashboardAssetsDetails']),
                'statistic': ProgramDetailsListStatistic.constructFromObject(data['statistic']),
                'personalDetails': PersonalProgramDetailsFullOld.constructFromObject(data['personalDetails']),
                'tags': ApiClient.convertToType(data['tags'], [ProgramTag]),
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
