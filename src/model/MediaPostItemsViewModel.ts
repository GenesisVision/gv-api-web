import { MediaPost } from './MediaPost';

export interface MediaPostItemsViewModel {
    readonly items: Array<MediaPost>;
    readonly total: number;
}

