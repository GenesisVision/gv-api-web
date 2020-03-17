import { Post } from './Post';
import { PostActions } from './PostActions';
import { PostImage } from './PostImage';
import { PostTag } from './PostTag';
import { ProfilePublicShort } from './ProfilePublicShort';

export interface PostWithComments {
    comments: Array<Post>;
    id: string;
    text: string;
    date: Date;
    likesCount: number;
    images: Array<PostImage>;
    tags: Array<PostTag>;
    author: ProfilePublicShort;
    actions: PostActions;
}

