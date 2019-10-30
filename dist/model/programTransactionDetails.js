import { Currency } from './currency';
import { InvestmentProgramType } from './investmentProgramType';
import ApiClient from "../ApiClient";
export class ProgramTransactionDetails {
    constructor() {
    }
    static constructFromObject(data, obj = new ProgramTransactionDetails()) {
        if (data) {
            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'string');
            }
            if (data.hasOwnProperty('managerName')) {
                obj['managerName'] = ApiClient.convertToType(data['managerName'], 'string');
            }
            if (data.hasOwnProperty('programType')) {
                obj['programType'] = InvestmentProgramType.constructFromObject(data['programType']);
            }
            if (data.hasOwnProperty('successFeeCurrency')) {
                obj['successFeeCurrency'] = Currency.constructFromObject(data['successFeeCurrency']);
            }
            if (data.hasOwnProperty('logo')) {
                obj['logo'] = ApiClient.convertToType(data['logo'], 'string');
            }
            if (data.hasOwnProperty('title')) {
                obj['title'] = ApiClient.convertToType(data['title'], 'string');
            }
            if (data.hasOwnProperty('entryFee')) {
                obj['entryFee'] = ApiClient.convertToType(data['entryFee'], 'number');
            }
            if (data.hasOwnProperty('entryFeePercent')) {
                obj['entryFeePercent'] = ApiClient.convertToType(data['entryFeePercent'], 'number');
            }
            if (data.hasOwnProperty('successFee')) {
                obj['successFee'] = ApiClient.convertToType(data['successFee'], 'number');
            }
            if (data.hasOwnProperty('successFeePercent')) {
                obj['successFeePercent'] = ApiClient.convertToType(data['successFeePercent'], 'number');
            }
            if (data.hasOwnProperty('level')) {
                obj['level'] = ApiClient.convertToType(data['level'], 'number');
            }
            if (data.hasOwnProperty('levelProgress')) {
                obj['levelProgress'] = ApiClient.convertToType(data['levelProgress'], 'number');
            }
            if (data.hasOwnProperty('exitFee')) {
                obj['exitFee'] = ApiClient.convertToType(data['exitFee'], 'number');
            }
            if (data.hasOwnProperty('exitFeePercent')) {
                obj['exitFeePercent'] = ApiClient.convertToType(data['exitFeePercent'], 'number');
            }
            if (data.hasOwnProperty('color')) {
                obj['color'] = ApiClient.convertToType(data['color'], 'string');
            }
        }
        return obj;
    }
}
