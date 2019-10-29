import { SocialLinkType } from './socialLinkType';
export declare class SocialLinkViewModel {
    'url'?: string;
    'logo'?: string;
    'name'?: string;
    'value'?: string;
    'type'?: SocialLinkType;
    constructor();
    static constructFromObject(data: {
        [key: string]: any;
    }, obj?: SocialLinkViewModel): SocialLinkViewModel;
}
