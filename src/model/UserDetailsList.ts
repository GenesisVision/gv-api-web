import { ProfilePublicShort } from './ProfilePublicShort';
import { PublicProfilePersonalDetails } from './PublicProfilePersonalDetails';
import { Tag } from './Tag';

export interface UserDetailsList {
    userId: string;
    username: string;
    logoUrl: string;
    url: string;
    tags: Array<Tag>;
    regDate: Date;
    assetsUnderManagement: number;
    investorsCount: number;
    followersCount: number;
    totalProfit: number;
    about: string;
    followers: Array<ProfilePublicShort>;
    personalDetails: PublicProfilePersonalDetails;
}

