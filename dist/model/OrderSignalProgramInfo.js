import { OrderProgramData } from './OrderProgramData';
import { OrderSignalFee } from './OrderSignalFee';
import { ProfilePublic } from './ProfilePublic';
import ApiClient from "../ApiClient";
export class OrderSignalProgramInfo {
    static constructFromObject(data, obj = new OrderSignalProgramInfo()) {
        if (data) {
            if (data.hasOwnProperty('manager')) {
                obj['manager'] = ProfilePublic.constructFromObject(data['manager']);
            }
            if (data.hasOwnProperty('program')) {
                obj['program'] = OrderProgramData.constructFromObject(data['program']);
            }
            if (data.hasOwnProperty('programId')) {
                obj['programId'] = ApiClient.convertToType(data['programId'], 'string');
            }
            if (data.hasOwnProperty('volume')) {
                obj['volume'] = ApiClient.convertToType(data['volume'], 'number');
            }
            if (data.hasOwnProperty('priceOpenAvg')) {
                obj['priceOpenAvg'] = ApiClient.convertToType(data['priceOpenAvg'], 'number');
            }
            if (data.hasOwnProperty('profit')) {
                obj['profit'] = ApiClient.convertToType(data['profit'], 'number');
            }
            if (data.hasOwnProperty('firstOrderDate')) {
                obj['firstOrderDate'] = ApiClient.convertToType(data['firstOrderDate'], 'Date');
            }
            if (data.hasOwnProperty('fees')) {
                obj['fees'] = ApiClient.convertToType(data['fees'], [OrderSignalFee]);
            }
        }
        return obj;
    }
}
