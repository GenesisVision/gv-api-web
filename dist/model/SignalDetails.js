import { ChartSimple } from './ChartSimple';
import { Currency } from './Currency';
import { InvestmentProgramStatus } from './InvestmentProgramStatus';
import { PersonalSignalDetailsFull } from './PersonalSignalDetailsFull';
import { ProfilePublic } from './ProfilePublic';
import { ProgramTag } from './ProgramTag';
import ApiClient from "../ApiClient";
export class SignalDetails {
    constructor(data) {
        this['personalDetails'] = data['personalDetails'];
        this['currency'] = data['currency'];
        this['level'] = data['level'];
        this['levelProgress'] = data['levelProgress'];
        this['tags'] = data['tags'];
        this['subscribers'] = data['subscribers'];
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
        return new SignalDetails({
            'personalDetails': PersonalSignalDetailsFull.constructFromObject(data['personalDetails']),
            'currency': Currency.constructFromObject(data['currency']),
            'level': ApiClient.convertToType(data['level'], 'number'),
            'levelProgress': ApiClient.convertToType(data['levelProgress'], 'number'),
            'tags': ApiClient.convertToType(data['tags'], [ProgramTag]),
            'subscribers': ApiClient.convertToType(data['subscribers'], 'number'),
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
