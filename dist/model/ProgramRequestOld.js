import { Currency } from './Currency';
import { InvestmentProgramType } from './InvestmentProgramType';
import { InvestmentRequestStatus } from './InvestmentRequestStatus';
import { InvestmentRequestType } from './InvestmentRequestType';
import ApiClient from "../ApiClient";
export class ProgramRequestOld {
    constructor(data) {
        this['id'] = data['id'];
        this['programId'] = data['programId'];
        this['date'] = data['date'];
        this['value'] = data['value'];
        this['valueGvt'] = data['valueGvt'];
        this['withdrawAll'] = data['withdrawAll'];
        this['entryFee'] = data['entryFee'];
        this['exitFee'] = data['exitFee'];
        this['successFee'] = data['successFee'];
        this['currency'] = data['currency'];
        this['fundWithdrawPercent'] = data['fundWithdrawPercent'];
        this['type'] = data['type'];
        this['status'] = data['status'];
        this['logo'] = data['logo'];
        this['title'] = data['title'];
        this['color'] = data['color'];
        this['canCancelRequest'] = data['canCancelRequest'];
        this['programType'] = data['programType'];
    }
    static constructFromObject(data) {
        return new ProgramRequestOld({
            'id': ApiClient.convertToType(data['id'], 'string'),
            'programId': ApiClient.convertToType(data['programId'], 'string'),
            'date': ApiClient.convertToType(data['date'], 'Date'),
            'value': ApiClient.convertToType(data['value'], 'number'),
            'valueGvt': ApiClient.convertToType(data['valueGvt'], 'number'),
            'withdrawAll': ApiClient.convertToType(data['withdrawAll'], 'boolean'),
            'entryFee': ApiClient.convertToType(data['entryFee'], 'number'),
            'exitFee': ApiClient.convertToType(data['exitFee'], 'number'),
            'successFee': ApiClient.convertToType(data['successFee'], 'number'),
            'currency': Currency.constructFromObject(data['currency']),
            'fundWithdrawPercent': ApiClient.convertToType(data['fundWithdrawPercent'], 'number'),
            'type': InvestmentRequestType.constructFromObject(data['type']),
            'status': InvestmentRequestStatus.constructFromObject(data['status']),
            'logo': ApiClient.convertToType(data['logo'], 'string'),
            'title': ApiClient.convertToType(data['title'], 'string'),
            'color': ApiClient.convertToType(data['color'], 'string'),
            'canCancelRequest': ApiClient.convertToType(data['canCancelRequest'], 'boolean'),
            'programType': InvestmentProgramType.constructFromObject(data['programType']),
        });
    }
}
