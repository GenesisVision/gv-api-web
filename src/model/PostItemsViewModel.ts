import { Post } from './Post';

export interface PostItemsViewModel {
    readonly items: Array<Post>;
    readonly total: number;
}

