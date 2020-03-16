import { Post } from './Post';
import { PostActions } from './PostActions';
import { PostTag } from './PostTag';
import { ProfilePublicShort } from './ProfilePublicShort';

export interface Post {
    id: string;
    text: string;
    date: Date;
    likesCount: number;
    images: Array<string>;
    tags: Array<PostTag>;
    author: ProfilePublicShort;
    actions: PostActions;
    comments: Array<Post>;
}

