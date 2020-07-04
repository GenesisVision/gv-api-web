import { SocialLinkType } from './SocialLinkType';

export interface SocialLinkViewModel {
    url: string;
    logoUrl: string;
    name: string;
    value: string;
    type: SocialLinkType;
}

