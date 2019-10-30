import { ManagerOverview } from './ManagerOverview';
import { PublicProfile } from './PublicProfile';
export declare class ManagerProfileDetails {
    'managerProfile'?: PublicProfile;
    'overview'?: ManagerOverview;
    'programsCount'?: number;
    'fundsCount'?: number;
    static constructFromObject(data: {
        [key: string]: any;
    }, obj?: ManagerProfileDetails): ManagerProfileDetails;
}
