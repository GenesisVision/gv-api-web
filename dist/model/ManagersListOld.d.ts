import { PublicProfile } from './PublicProfile';
export declare class ManagersListOld {
    'managers': Array<PublicProfile>;
    'total': number;
    constructor(data: {
        [key: string]: any;
    });
    static constructFromObject(data: {
        [key: string]: any;
    }): ManagersListOld;
}
