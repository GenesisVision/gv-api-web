import { TransferRequestType } from './TransferRequestType';
import ApiClient from "../ApiClient";
export class InternalTransferRequest {
    static constructFromObject(data, obj = new InternalTransferRequest()) {
        if (data) {
            if (data.hasOwnProperty('sourceId')) {
                obj['sourceId'] = ApiClient.convertToType(data['sourceId'], 'string');
            }
            if (data.hasOwnProperty('sourceType')) {
                obj['sourceType'] = TransferRequestType.constructFromObject(data['sourceType']);
            }
            if (data.hasOwnProperty('destinationId')) {
                obj['destinationId'] = ApiClient.convertToType(data['destinationId'], 'string');
            }
            if (data.hasOwnProperty('destinationType')) {
                obj['destinationType'] = TransferRequestType.constructFromObject(data['destinationType']);
            }
            if (data.hasOwnProperty('amount')) {
                obj['amount'] = ApiClient.convertToType(data['amount'], 'number');
            }
            if (data.hasOwnProperty('transferAll')) {
                obj['transferAll'] = ApiClient.convertToType(data['transferAll'], 'boolean');
            }
        }
        return obj;
    }
}
