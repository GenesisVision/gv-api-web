import { AmountWithCurrency } from './AmountWithCurrency';
import { Currency } from './Currency';
import { PersonalInvestingProgramDetailsList } from './PersonalInvestingProgramDetailsList';
import { ProfilePublicShort } from './ProfilePublicShort';
import { ProfitChart } from './ProfitChart';
import { Tag } from './Tag';
import ApiClient from "../ApiClient";
export class ProgramInvestingDetailsList {
    constructor(data) {
        this['id'] = data['id'];
        this['logo'] = data['logo'];
        this['url'] = data['url'];
        this['color'] = data['color'];
        this['title'] = data['title'];
        this['creationDate'] = data['creationDate'];
        this['currency'] = data['currency'];
        this['level'] = data['level'];
        this['levelProgress'] = data['levelProgress'];
        this['periodDuration'] = data['periodDuration'];
        this['investorsCount'] = data['investorsCount'];
        this['periodStarts'] = data['periodStarts'];
        this['periodEnds'] = data['periodEnds'];
        this['owner'] = data['owner'];
        this['personalDetails'] = data['personalDetails'];
        this['tags'] = data['tags'];
        this['statistic'] = data['statistic'];
        this['balance'] = data['balance'];
    }
    static constructFromObject(data) {
        if (data) {
            return new ProgramInvestingDetailsList({
                'id': ApiClient.convertToType(data['id'], 'string'),
                'logo': ApiClient.convertToType(data['logo'], 'string'),
                'url': ApiClient.convertToType(data['url'], 'string'),
                'color': ApiClient.convertToType(data['color'], 'string'),
                'title': ApiClient.convertToType(data['title'], 'string'),
                'creationDate': ApiClient.convertToType(data['creationDate'], 'Date'),
                'currency': Currency.constructFromObject(data['currency']),
                'level': ApiClient.convertToType(data['level'], 'number'),
                'levelProgress': ApiClient.convertToType(data['levelProgress'], 'number'),
                'periodDuration': ApiClient.convertToType(data['periodDuration'], 'number'),
                'investorsCount': ApiClient.convertToType(data['investorsCount'], 'number'),
                'periodStarts': ApiClient.convertToType(data['periodStarts'], 'Date'),
                'periodEnds': ApiClient.convertToType(data['periodEnds'], 'Date'),
                'owner': ProfilePublicShort.constructFromObject(data['owner']),
                'personalDetails': PersonalInvestingProgramDetailsList.constructFromObject(data['personalDetails']),
                'tags': ApiClient.convertToType(data['tags'], [Tag]),
                'statistic': ProfitChart.constructFromObject(data['statistic']),
                'balance': AmountWithCurrency.constructFromObject(data['balance']),
            });
        }
    }
}
