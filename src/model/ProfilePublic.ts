import { SocialLinkViewModel } from './SocialLinkViewModel';

export interface ProfilePublic {
    id: string;
    username: string;
    avatar: string;
    registrationDate: Date;
    url: string;
    socialLinks: Array<SocialLinkViewModel>;
}

