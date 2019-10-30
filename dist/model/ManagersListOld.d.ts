import { PublicProfile } from './PublicProfile';
export declare class ManagersListOld {
    'managers'?: Array<PublicProfile>;
    'total'?: number;
    static constructFromObject(data: {
        [key: string]: any;
    }, obj?: ManagersListOld): ManagersListOld;
}
