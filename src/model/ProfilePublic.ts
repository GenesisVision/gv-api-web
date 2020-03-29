import { SocialLinkViewModel } from './SocialLinkViewModel';

export interface ProfilePublic {
    id: string;
    username: string;
    avatar: string;
    logoUrl: string;
    registrationDate: Date;
    url: string;
    socialLinks: Array<SocialLinkViewModel>;
}

