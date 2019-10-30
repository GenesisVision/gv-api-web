import { SocialLinkType } from './SocialLinkType';
export declare class UpdateSocialLinkViewModel {
    'type'?: SocialLinkType;
    'value'?: string;
    static constructFromObject(data: {
        [key: string]: any;
    }, obj?: UpdateSocialLinkViewModel): UpdateSocialLinkViewModel;
}
