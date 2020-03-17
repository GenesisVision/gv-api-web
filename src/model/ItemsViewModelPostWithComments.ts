import { PostWithComments } from './PostWithComments';

export interface ItemsViewModelPostWithComments {
    readonly items: Array<PostWithComments>;
    readonly total: number;
}

