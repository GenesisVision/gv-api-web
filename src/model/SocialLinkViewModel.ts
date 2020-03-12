import { SocialLinkType } from './SocialLinkType';

export interface SocialLinkViewModel {
    url: string;
    logo: string;
    name: string;
    value: string;
    type: SocialLinkType;
}

