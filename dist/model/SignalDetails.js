import { ChartSimple } from './ChartSimple';
import { Currency } from './Currency';
import { InvestmentProgramStatus } from './InvestmentProgramStatus';
import { PersonalSignalDetailsFull } from './PersonalSignalDetailsFull';
import { ProfilePublic } from './ProfilePublic';
import { ProgramTag } from './ProgramTag';
import ApiClient from "../ApiClient";
export class SignalDetails {
    static constructFromObject(data, obj = new SignalDetails()) {
        if (data) {
            if (data.hasOwnProperty('personalDetails')) {
                obj['personalDetails'] = PersonalSignalDetailsFull.constructFromObject(data['personalDetails']);
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
            if (data.hasOwnProperty('tags')) {
                obj['tags'] = ApiClient.convertToType(data['tags'], [ProgramTag]);
            }
            if (data.hasOwnProperty('subscribers')) {
                obj['subscribers'] = ApiClient.convertToType(data['subscribers'], 'number');
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
