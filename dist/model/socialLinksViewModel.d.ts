import { SocialLinkViewModel } from './socialLinkViewModel';
export declare class SocialLinksViewModel {
    'socialLinks'?: Array<SocialLinkViewModel>;
    constructor();
    static constructFromObject(data: {
        [key: string]: any;
    }, obj?: SocialLinksViewModel): SocialLinksViewModel;
}
