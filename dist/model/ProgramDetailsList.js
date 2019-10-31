import { Currency } from './Currency';
import { PersonalProgramDetailsList } from './PersonalProgramDetailsList';
import { ProfitChart } from './ProfitChart';
import { ProgramTag } from './ProgramTag';
import ApiClient from "../ApiClient";
export class ProgramDetailsList {
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
        this['availableToInvest'] = data['availableToInvest'];
        this['personalDetails'] = data['personalDetails'];
        this['tags'] = data['tags'];
        this['chart'] = data['chart'];
    }
    static constructFromObject(data) {
        if (data) {
            return new ProgramDetailsList({
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
                'availableToInvest': ApiClient.convertToType(data['availableToInvest'], 'number'),
                'personalDetails': PersonalProgramDetailsList.constructFromObject(data['personalDetails']),
                'tags': ApiClient.convertToType(data['tags'], [ProgramTag]),
                'chart': ProfitChart.constructFromObject(data['chart']),
            });
        }
    }
}
