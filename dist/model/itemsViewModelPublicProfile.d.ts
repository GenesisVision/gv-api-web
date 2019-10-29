import { PublicProfile } from './publicProfile';
export declare class ItemsViewModelPublicProfile {
    'items'?: [PublicProfile];
    'total'?: number;
    constructor();
    static constructFromObject(data: {
        [key: string]: any;
    }, obj?: ItemsViewModelPublicProfile): ItemsViewModelPublicProfile;
}
