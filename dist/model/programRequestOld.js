import { Currency } from './currency';
import { InvestmentProgramType } from './investmentProgramType';
import { InvestmentRequestStatus } from './investmentRequestStatus';
import { InvestmentRequestType } from './investmentRequestType';
import ApiClient from "../ApiClient";
export class ProgramRequestOld {
    constructor() {
    }
    static constructFromObject(data, obj = new ProgramRequestOld()) {
        if (data) {
            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'string');
            }
            if (data.hasOwnProperty('programId')) {
                obj['programId'] = ApiClient.convertToType(data['programId'], 'string');
            }
            if (data.hasOwnProperty('date')) {
                obj['date'] = ApiClient.convertToType(data['date'], 'Date');
            }
            if (data.hasOwnProperty('value')) {
                obj['value'] = ApiClient.convertToType(data['value'], 'number');
            }
            if (data.hasOwnProperty('valueGvt')) {
                obj['valueGvt'] = ApiClient.convertToType(data['valueGvt'], 'number');
            }
            if (data.hasOwnProperty('withdrawAll')) {
                obj['withdrawAll'] = ApiClient.convertToType(data['withdrawAll'], 'boolean');
            }
            if (data.hasOwnProperty('entryFee')) {
                obj['entryFee'] = ApiClient.convertToType(data['entryFee'], 'number');
            }
            if (data.hasOwnProperty('exitFee')) {
                obj['exitFee'] = ApiClient.convertToType(data['exitFee'], 'number');
            }
            if (data.hasOwnProperty('successFee')) {
                obj['successFee'] = ApiClient.convertToType(data['successFee'], 'number');
            }
            if (data.hasOwnProperty('currency')) {
                obj['currency'] = Currency.constructFromObject(data['currency']);
            }
            if (data.hasOwnProperty('fundWithdrawPercent')) {
                obj['fundWithdrawPercent'] = ApiClient.convertToType(data['fundWithdrawPercent'], 'number');
            }
            if (data.hasOwnProperty('type')) {
                obj['type'] = InvestmentRequestType.constructFromObject(data['type']);
            }
            if (data.hasOwnProperty('status')) {
                obj['status'] = InvestmentRequestStatus.constructFromObject(data['status']);
            }
            if (data.hasOwnProperty('logo')) {
                obj['logo'] = ApiClient.convertToType(data['logo'], 'string');
            }
            if (data.hasOwnProperty('title')) {
                obj['title'] = ApiClient.convertToType(data['title'], 'string');
            }
            if (data.hasOwnProperty('color')) {
                obj['color'] = ApiClient.convertToType(data['color'], 'string');
            }
            if (data.hasOwnProperty('canCancelRequest')) {
                obj['canCancelRequest'] = ApiClient.convertToType(data['canCancelRequest'], 'boolean');
            }
            if (data.hasOwnProperty('programType')) {
                obj['programType'] = InvestmentProgramType.constructFromObject(data['programType']);
            }
        }
        return obj;
    }
}
