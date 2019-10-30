import { ManagerOverview } from './managerOverview';
import { PublicProfile } from './publicProfile';
export declare class ManagerProfileDetails {
    'managerProfile'?: PublicProfile;
    'overview'?: ManagerOverview;
    'programsCount'?: number;
    'fundsCount'?: number;
    constructor();
    static constructFromObject(data: {
        [key: string]: any;
    }, obj?: ManagerProfileDetails): ManagerProfileDetails;
}
