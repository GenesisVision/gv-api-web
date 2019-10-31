import { Currency } from './Currency';
import { InvestmentProgramType } from './InvestmentProgramType';
import ApiClient from "../ApiClient";
export class ProgramTransactionDetails {
    constructor(data) {
        this['id'] = data['id'];
        this['managerName'] = data['managerName'];
        this['programType'] = data['programType'];
        this['successFeeCurrency'] = data['successFeeCurrency'];
        this['logo'] = data['logo'];
        this['title'] = data['title'];
        this['entryFee'] = data['entryFee'];
        this['entryFeePercent'] = data['entryFeePercent'];
        this['successFee'] = data['successFee'];
        this['successFeePercent'] = data['successFeePercent'];
        this['level'] = data['level'];
        this['levelProgress'] = data['levelProgress'];
        this['exitFee'] = data['exitFee'];
        this['exitFeePercent'] = data['exitFeePercent'];
        this['color'] = data['color'];
    }
    static constructFromObject(data) {
        if (data) {
            return new ProgramTransactionDetails({
                'id': ApiClient.convertToType(data['id'], 'string'),
                'managerName': ApiClient.convertToType(data['managerName'], 'string'),
                'programType': InvestmentProgramType.constructFromObject(data['programType']),
                'successFeeCurrency': Currency.constructFromObject(data['successFeeCurrency']),
                'logo': ApiClient.convertToType(data['logo'], 'string'),
                'title': ApiClient.convertToType(data['title'], 'string'),
                'entryFee': ApiClient.convertToType(data['entryFee'], 'number'),
                'entryFeePercent': ApiClient.convertToType(data['entryFeePercent'], 'number'),
                'successFee': ApiClient.convertToType(data['successFee'], 'number'),
                'successFeePercent': ApiClient.convertToType(data['successFeePercent'], 'number'),
                'level': ApiClient.convertToType(data['level'], 'number'),
                'levelProgress': ApiClient.convertToType(data['levelProgress'], 'number'),
                'exitFee': ApiClient.convertToType(data['exitFee'], 'number'),
                'exitFeePercent': ApiClient.convertToType(data['exitFeePercent'], 'number'),
                'color': ApiClient.convertToType(data['color'], 'string'),
            });
        }
    }
}
