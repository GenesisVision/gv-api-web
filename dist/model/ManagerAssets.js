import { ManagerSimpleFund } from './ManagerSimpleFund';
import { ManagerSimpleProgram } from './ManagerSimpleProgram';
import ApiClient from "../ApiClient";
export class ManagerAssets {
    constructor(data) {
        this['programs'] = data['programs'];
        this['funds'] = data['funds'];
    }
    static constructFromObject(data) {
        return new ManagerAssets({
            'programs': ApiClient.convertToType(data['programs'], [ManagerSimpleProgram]),
            'funds': ApiClient.convertToType(data['funds'], [ManagerSimpleFund]),
        });
    }
}
