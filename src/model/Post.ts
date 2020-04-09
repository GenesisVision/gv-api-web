import { PostActions } from './PostActions';
import { PostImage } from './PostImage';
import { PostTag } from './PostTag';
import { ProfilePublic } from './ProfilePublic';

export interface Post {
    id: string;
    text: string;
    date: Date;
    likesCount: number;
    rePostsCount: number;
    impressionsCount: number;
    isPinned: boolean;
    isDeleted: boolean;
    images: Array<PostImage>;
    tags: Array<PostTag>;
    author: ProfilePublic;
    actions: PostActions;
    comments: Array<Post>;
}

