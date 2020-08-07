import { PostImage } from './PostImage';
import { PostPersonalDetails } from './PostPersonalDetails';
import { PostTag } from './PostTag';
import { ProfilePublic } from './ProfilePublic';
import { ProfilePublicShort } from './ProfilePublicShort';

export interface Post {
    id: string;
    url: string;
    text: string;
    date: Date;
    likesCount: number;
    likesUsers: Array<ProfilePublicShort>;
    rePostsCount: number;
    rePostsUsers: Array<ProfilePublicShort>;
    impressionsCount: number;
    isPinned: boolean;
    isDeleted: boolean;
    isHighlighted: boolean;
    images: Array<PostImage>;
    tags: Array<PostTag>;
    author: ProfilePublic;
    personalDetails: PostPersonalDetails;
    comments: Array<Post>;
}

