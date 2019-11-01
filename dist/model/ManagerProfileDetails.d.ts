import { ManagerOverview } from './ManagerOverview';
import { PublicProfile } from './PublicProfile';
export declare class ManagerProfileDetails {
    'managerProfile': PublicProfile;
    'overview': ManagerOverview;
    'programsCount': number;
    'fundsCount': number;
    constructor(data: {
        [key: string]: any;
    });
    static constructFromObject(data: {
        [key: string]: any;
    }): ManagerProfileDetails | undefined;
}
