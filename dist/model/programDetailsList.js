import { Currency } from './currency';
import { PersonalProgramDetailsList } from './personalProgramDetailsList';
import { ProfitChart } from './profitChart';
import { ProgramTag } from './programTag';
import ApiClient from "../ApiClient";
export class ProgramDetailsList {
    constructor() {
    }
    static constructFromObject(data, obj = new ProgramDetailsList()) {
        if (data) {
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
            if (data.hasOwnProperty('creationDate')) {
                obj['creationDate'] = ApiClient.convertToType(data['creationDate'], 'Date');
            }
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
            if (data.hasOwnProperty('availableToInvest')) {
                obj['availableToInvest'] = ApiClient.convertToType(data['availableToInvest'], 'number');
            }
            if (data.hasOwnProperty('personalDetails')) {
                obj['personalDetails'] = PersonalProgramDetailsList.constructFromObject(data['personalDetails']);
            }
            if (data.hasOwnProperty('tags')) {
                obj['tags'] = ApiClient.convertToType(data['tags'], [ProgramTag]);
            }
            if (data.hasOwnProperty('chart')) {
                obj['chart'] = ProfitChart.constructFromObject(data['chart']);
            }
        }
        return obj;
    }
}
