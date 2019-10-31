import { TransferRequestType } from './TransferRequestType';
import ApiClient from "../ApiClient";
export class InternalTransferRequest {
    constructor(data) {
        this['sourceId'] = data['sourceId'];
        this['sourceType'] = data['sourceType'];
        this['destinationId'] = data['destinationId'];
        this['destinationType'] = data['destinationType'];
        this['amount'] = data['amount'];
        this['transferAll'] = data['transferAll'];
    }
    static constructFromObject(data) {
        return new InternalTransferRequest({
            'sourceId': ApiClient.convertToType(data['sourceId'], 'string'),
            'sourceType': TransferRequestType.constructFromObject(data['sourceType']),
            'destinationId': ApiClient.convertToType(data['destinationId'], 'string'),
            'destinationType': TransferRequestType.constructFromObject(data['destinationType']),
            'amount': ApiClient.convertToType(data['amount'], 'number'),
            'transferAll': ApiClient.convertToType(data['transferAll'], 'boolean'),
        });
    }
}
