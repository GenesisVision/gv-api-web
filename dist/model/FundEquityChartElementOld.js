import { FundAssetsState } from './FundAssetsState';
import ApiClient from "../ApiClient";
export class FundEquityChartElementOld {
    constructor(data) {
        this['assetsState'] = data['assetsState'];
        this['value'] = data['value'];
        this['date'] = data['date'];
    }
    static constructFromObject(data) {
        return new FundEquityChartElementOld({
            'assetsState': FundAssetsState.constructFromObject(data['assetsState']),
            'value': ApiClient.convertToType(data['value'], 'number'),
            'date': ApiClient.convertToType(data['date'], 'Date'),
        });
    }
}
