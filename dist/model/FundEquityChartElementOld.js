import { FundAssetsState } from './FundAssetsState';
import ApiClient from "../ApiClient";
export class FundEquityChartElementOld {
    static constructFromObject(data, obj = new FundEquityChartElementOld()) {
        if (data) {
            if (data.hasOwnProperty('assetsState')) {
                obj['assetsState'] = FundAssetsState.constructFromObject(data['assetsState']);
            }
            if (data.hasOwnProperty('value')) {
                obj['value'] = ApiClient.convertToType(data['value'], 'number');
            }
            if (data.hasOwnProperty('date')) {
                obj['date'] = ApiClient.convertToType(data['date'], 'Date');
            }
        }
        return obj;
    }
}
