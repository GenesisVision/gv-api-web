import { AssetsValue } from './AssetsValue';
import { OtherAssetsValue } from './OtherAssetsValue';
import ApiClient from "../ApiClient";
export class ValueChartBar {
    constructor(data) {
        this['value'] = data['value'];
        this['date'] = data['date'];
        this['topAssets'] = data['topAssets'];
        this['otherAssetsValue'] = data['otherAssetsValue'];
    }
    static constructFromObject(data) {
        return new ValueChartBar({
            'value': ApiClient.convertToType(data['value'], 'number'),
            'date': ApiClient.convertToType(data['date'], 'Date'),
            'topAssets': ApiClient.convertToType(data['topAssets'], [AssetsValue]),
            'otherAssetsValue': OtherAssetsValue.constructFromObject(data['otherAssetsValue']),
        });
    }
}
