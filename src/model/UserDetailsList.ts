import { SocialLinkViewModel } from './SocialLinkViewModel';
import { Tag } from './Tag';

export interface UserDetailsList {
    userId: string;
    username: string;
    avatar: string;
    logoUrl: string;
    url: string;
    socialLinks: Array<SocialLinkViewModel>;
    tags: Array<Tag>;
    regDate: Date;
    assetsUnderManagement: number;
    investorsCount: number;
    followersCount: number;
    totalProfit: number;
    tradingProfit: number;
    investingProfit: number;
}

