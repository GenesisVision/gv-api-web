import { AssetDetails } from './AssetDetails';
import { ChangeState } from './ChangeState';
import { FeeDetails } from './FeeDetails';
import { InvestmentEventItemViewModel } from './InvestmentEventItemViewModel';
import ApiClient from "../ApiClient";
export class InvestmentEventViewModel {
    constructor(data) {
        this['title'] = data['title'];
        this['icon'] = data['icon'];
        this['date'] = data['date'];
        this['assetDetails'] = data['assetDetails'];
        this['amount'] = data['amount'];
        this['currency'] = data['currency'];
        this['changeState'] = data['changeState'];
        this['extendedInfo'] = data['extendedInfo'];
        this['feesInfo'] = data['feesInfo'];
        this['totalFeesAmount'] = data['totalFeesAmount'];
        this['totalFeesCurrency'] = data['totalFeesCurrency'];
    }
    static constructFromObject(data) {
        if (data) {
            return new InvestmentEventViewModel({
                'title': ApiClient.convertToType(data['title'], 'string'),
                'icon': ApiClient.convertToType(data['icon'], 'string'),
                'date': ApiClient.convertToType(data['date'], 'Date'),
                'assetDetails': AssetDetails.constructFromObject(data['assetDetails']),
                'amount': ApiClient.convertToType(data['amount'], 'number'),
                'currency': ApiClient.convertToType(data['currency'], 'string'),
                'changeState': ChangeState.constructFromObject(data['changeState']),
                'extendedInfo': ApiClient.convertToType(data['extendedInfo'], [InvestmentEventItemViewModel]),
                'feesInfo': ApiClient.convertToType(data['feesInfo'], [FeeDetails]),
                'totalFeesAmount': ApiClient.convertToType(data['totalFeesAmount'], 'number'),
                'totalFeesCurrency': ApiClient.convertToType(data['totalFeesCurrency'], 'string'),
            });
        }
    }
}
