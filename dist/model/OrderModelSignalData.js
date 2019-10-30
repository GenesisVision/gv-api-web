import { SignalDataMaster } from './SignalDataMaster';
import ApiClient from "../ApiClient";
export class OrderModelSignalData {
    static constructFromObject(data, obj = new OrderModelSignalData()) {
        if (data) {
            if (data.hasOwnProperty('masters')) {
                obj['masters'] = ApiClient.convertToType(data['masters'], [SignalDataMaster]);
            }
        }
        return obj;
    }
}
