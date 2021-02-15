import { PublicProfile } from './PublicProfile';

export interface PublicProfileItemsViewModel {
    readonly items: Array<PublicProfile>;
    readonly total: number;
}

