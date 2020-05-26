import { PostImage } from './PostImage';
import { SocialLinkType } from './SocialLinkType';

export interface MediaPost {
    id: string;
    url: string;
    type: SocialLinkType;
    author: string;
    authorUrl: string;
    title: string;
    text: string;
    date: Date;
    likesCount: number;
    rePostsCount: number;
    commentsCount: number;
    image: PostImage;
}

