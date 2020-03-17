import { Post } from './Post';

export interface ItemsViewModelPost {
    readonly items: Array<Post>;
    readonly total: number;
}

