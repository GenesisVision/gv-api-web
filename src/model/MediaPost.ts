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
    image: PostImage;
}

