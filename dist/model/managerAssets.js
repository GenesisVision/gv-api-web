import { ManagerSimpleFund } from './managerSimpleFund';
import { ManagerSimpleProgram } from './managerSimpleProgram';
import ApiClient from "../ApiClient";
export class ManagerAssets {
    constructor() {
    }
    static constructFromObject(data, obj = new ManagerAssets()) {
        if (data) {
            if (data.hasOwnProperty('programs')) {
                obj['programs'] = ApiClient.convertToType(data['programs'], [ManagerSimpleProgram]);
            }
            if (data.hasOwnProperty('funds')) {
                obj['funds'] = ApiClient.convertToType(data['funds'], [ManagerSimpleFund]);
            }
        }
        return obj;
    }
}
