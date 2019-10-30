import { ManagerOverview } from './managerOverview';
import { PublicProfile } from './publicProfile';
import ApiClient from "../ApiClient";
export class ManagerProfileDetails {
    constructor() {
    }
    static constructFromObject(data, obj = new ManagerProfileDetails()) {
        if (data) {
            if (data.hasOwnProperty('managerProfile')) {
                obj['managerProfile'] = PublicProfile.constructFromObject(data['managerProfile']);
            }
            if (data.hasOwnProperty('overview')) {
                obj['overview'] = ManagerOverview.constructFromObject(data['overview']);
            }
            if (data.hasOwnProperty('programsCount')) {
                obj['programsCount'] = ApiClient.convertToType(data['programsCount'], 'number');
            }
            if (data.hasOwnProperty('fundsCount')) {
                obj['fundsCount'] = ApiClient.convertToType(data['fundsCount'], 'number');
            }
        }
        return obj;
    }
}
