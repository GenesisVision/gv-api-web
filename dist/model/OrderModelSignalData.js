import { SignalDataMaster } from './SignalDataMaster';
import ApiClient from "../ApiClient";
export class OrderModelSignalData {
    constructor(data) {
        this['masters'] = data['masters'];
    }
    static constructFromObject(data) {
        if (data) {
            return new OrderModelSignalData({
                'masters': ApiClient.convertToType(data['masters'], [SignalDataMaster]),
            });
        }
    }
}
