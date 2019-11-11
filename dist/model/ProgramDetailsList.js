import { AmountWithCurrency } from './AmountWithCurrency';
import { Currency } from './Currency';
import { PersonalProgramDetailsList } from './PersonalProgramDetailsList';
import { ProfilePublicShort } from './ProfilePublicShort';
import { ProfitChart } from './ProfitChart';
import { ProgramTag } from './ProgramTag';
import ApiClient from "../ApiClient";
export class ProgramDetailsList {
    constructor(data) {
        this['id'] = data['id'];
        this['logo'] = data['logo'];
        this['url'] = data['url'];
        this['description'] = data['description'];
        this['color'] = data['color'];
        this['title'] = data['title'];
        this['creationDate'] = data['creationDate'];
        this['currency'] = data['currency'];
        this['level'] = data['level'];
        this['levelProgress'] = data['levelProgress'];
        this['periodDuration'] = data['periodDuration'];
        this['availableToInvest'] = data['availableToInvest'];
        this['investorsCount'] = data['investorsCount'];
        this['periodStarts'] = data['periodStarts'];
        this['periodEnds'] = data['periodEnds'];
        this['status'] = data['status'];
        this['owner'] = data['owner'];
        this['personalDetails'] = data['personalDetails'];
        this['tags'] = data['tags'];
        this['statistic'] = data['statistic'];
        this['balance'] = data['balance'];
    }
    static constructFromObject(data) {
        if (data) {
            return new ProgramDetailsList({
                'id': ApiClient.convertToType(data['id'], 'string'),
                'logo': ApiClient.convertToType(data['logo'], 'string'),
                'url': ApiClient.convertToType(data['url'], 'string'),
                'description': ApiClient.convertToType(data['description'], 'string'),
                'color': ApiClient.convertToType(data['color'], 'string'),
                'title': ApiClient.convertToType(data['title'], 'string'),
                'creationDate': ApiClient.convertToType(data['creationDate'], 'Date'),
                'currency': Currency.constructFromObject(data['currency']),
                'level': ApiClient.convertToType(data['level'], 'number'),
                'levelProgress': ApiClient.convertToType(data['levelProgress'], 'number'),
                'periodDuration': ApiClient.convertToType(data['periodDuration'], 'number'),
                'availableToInvest': ApiClient.convertToType(data['availableToInvest'], 'number'),
                'investorsCount': ApiClient.convertToType(data['investorsCount'], 'number'),
                'periodStarts': ApiClient.convertToType(data['periodStarts'], 'Date'),
                'periodEnds': ApiClient.convertToType(data['periodEnds'], 'Date'),
                'status': ApiClient.convertToType(data['status'], 'string'),
                'owner': ProfilePublicShort.constructFromObject(data['owner']),
                'personalDetails': PersonalProgramDetailsList.constructFromObject(data['personalDetails']),
                'tags': ApiClient.convertToType(data['tags'], [ProgramTag]),
                'statistic': ProfitChart.constructFromObject(data['statistic']),
                'balance': AmountWithCurrency.constructFromObject(data['balance']),
            });
        }
    }
}
