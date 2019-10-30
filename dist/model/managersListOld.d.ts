import { PublicProfile } from './publicProfile';
export declare class ManagersListOld {
    'managers'?: Array<PublicProfile>;
    'total'?: number;
    constructor();
    static constructFromObject(data: {
        [key: string]: any;
    }, obj?: ManagersListOld): ManagersListOld;
}
