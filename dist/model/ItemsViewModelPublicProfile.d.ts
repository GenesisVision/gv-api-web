import { PublicProfile } from './PublicProfile';
export declare class ItemsViewModelPublicProfile {
    'items': Array<PublicProfile>;
    'total': number;
    constructor(data: {
        [key: string]: any;
    });
    static constructFromObject(data: {
        [key: string]: any;
    }): ItemsViewModelPublicProfile | undefined;
}
