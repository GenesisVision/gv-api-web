import { SocialLinkViewModel } from './SocialLinkViewModel';
import { Tag } from './Tag';
export declare class UserDetailsList {
    'userId': string;
    'username': string;
    'avatar': string;
    'url': string;
    'socialLinks': Array<SocialLinkViewModel>;
    'tags': Array<Tag>;
    'regDate': Date;
    'assetsUnderManagement': number;
    'investorsCount': number;
    'followersCount': number;
    'totalProfit': number;
    'tradingProfit': number;
    'investingProfit': number;
    constructor(data: {
        [key: string]: any;
    });
    static constructFromObject(data: {
        [key: string]: any;
    }): UserDetailsList | undefined;
}