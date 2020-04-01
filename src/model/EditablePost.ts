import { Post } from './Post';
import { PostActions } from './PostActions';
import { PostImage } from './PostImage';
import { PostTag } from './PostTag';
import { ProfilePublic } from './ProfilePublic';

export interface EditablePost {
    textOriginal: string;
    id: string;
    text: string;
    date: Date;
    likesCount: number;
    rePostsCount: number;
    isPinned: boolean;
    images: Array<PostImage>;
    tags: Array<PostTag>;
    author: ProfilePublic;
    actions: PostActions;
    comments: Array<Post>;
}

