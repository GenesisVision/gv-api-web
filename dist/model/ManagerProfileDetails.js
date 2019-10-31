import { ManagerOverview } from './ManagerOverview';
import { PublicProfile } from './PublicProfile';
import ApiClient from "../ApiClient";
export class ManagerProfileDetails {
    constructor(data) {
        this['managerProfile'] = data['managerProfile'];
        this['overview'] = data['overview'];
        this['programsCount'] = data['programsCount'];
        this['fundsCount'] = data['fundsCount'];
    }
    static constructFromObject(data) {
        if (data) {
            return new ManagerProfileDetails({
                'managerProfile': PublicProfile.constructFromObject(data['managerProfile']),
                'overview': ManagerOverview.constructFromObject(data['overview']),
                'programsCount': ApiClient.convertToType(data['programsCount'], 'number'),
                'fundsCount': ApiClient.convertToType(data['fundsCount'], 'number'),
            });
        }
    }
}
