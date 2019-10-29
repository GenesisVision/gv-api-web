import { SocialLinkType } from './socialLinkType';
export declare class UpdateSocialLinkViewModel {
    'type'?: SocialLinkType;
    'value'?: string;
    constructor();
    static constructFromObject(data: {
        [key: string]: any;
    }, obj?: UpdateSocialLinkViewModel): UpdateSocialLinkViewModel;
}
