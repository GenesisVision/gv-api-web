import { SocialLinkType } from './SocialLinkType';
export declare class SocialLinkViewModel {
    'url'?: string;
    'logo'?: string;
    'name'?: string;
    'value'?: string;
    'type'?: SocialLinkType;
    static constructFromObject(data: {
        [key: string]: any;
    }, obj?: SocialLinkViewModel): SocialLinkViewModel;
}
