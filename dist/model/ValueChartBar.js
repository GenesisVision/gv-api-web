import { AssetsValue } from './AssetsValue';
import { OtherAssetsValue } from './OtherAssetsValue';
import ApiClient from "../ApiClient";
export class ValueChartBar {
    static constructFromObject(data, obj = new ValueChartBar()) {
        if (data) {
            if (data.hasOwnProperty('value')) {
                obj['value'] = ApiClient.convertToType(data['value'], 'number');
            }
            if (data.hasOwnProperty('date')) {
                obj['date'] = ApiClient.convertToType(data['date'], 'Date');
            }
            if (data.hasOwnProperty('topAssets')) {
                obj['topAssets'] = ApiClient.convertToType(data['topAssets'], [AssetsValue]);
            }
            if (data.hasOwnProperty('otherAssetsValue')) {
                obj['otherAssetsValue'] = OtherAssetsValue.constructFromObject(data['otherAssetsValue']);
            }
        }
        return obj;
    }
}
