import { PostImage } from './PostImage';
import { SocialLinkType } from './SocialLinkType';

export interface MediaPost {
    id: string;
    url: string;
    type: SocialLinkType;
    typeLogoUrl: string;
    author: string;
    authorUrl: string;
    authorLogoUrl: string;
    title: string;
    text: string;
    date: Date;
    likesCount: number;
    rePostsCount: number;
    commentsCount: number;
    image: PostImage;
}

