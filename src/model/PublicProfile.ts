import { PublicProfilePersonalDetails } from './PublicProfilePersonalDetails';
import { SocialLinkViewModel } from './SocialLinkViewModel';

export interface PublicProfile {
    id: string;
    username: string;
    about: string;
    logoUrl: string;
    regDate: Date;
    assets: Array<string>;
    url: string;
    followers: number;
    following: number;
    socialLinks: Array<SocialLinkViewModel>;
    personalDetails: PublicProfilePersonalDetails;
}

