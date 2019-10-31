import { OrderProgramData } from './OrderProgramData';
import { OrderSignalFee } from './OrderSignalFee';
import { ProfilePublic } from './ProfilePublic';
import ApiClient from "../ApiClient";
export class OrderSignalProgramInfo {
    constructor(data) {
        this['manager'] = data['manager'];
        this['program'] = data['program'];
        this['programId'] = data['programId'];
        this['volume'] = data['volume'];
        this['priceOpenAvg'] = data['priceOpenAvg'];
        this['profit'] = data['profit'];
        this['firstOrderDate'] = data['firstOrderDate'];
        this['fees'] = data['fees'];
    }
    static constructFromObject(data) {
        return new OrderSignalProgramInfo({
            'manager': ProfilePublic.constructFromObject(data['manager']),
            'program': OrderProgramData.constructFromObject(data['program']),
            'programId': ApiClient.convertToType(data['programId'], 'string'),
            'volume': ApiClient.convertToType(data['volume'], 'number'),
            'priceOpenAvg': ApiClient.convertToType(data['priceOpenAvg'], 'number'),
            'profit': ApiClient.convertToType(data['profit'], 'number'),
            'firstOrderDate': ApiClient.convertToType(data['firstOrderDate'], 'Date'),
            'fees': ApiClient.convertToType(data['fees'], [OrderSignalFee]),
        });
    }
}
