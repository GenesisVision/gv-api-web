import { SocialLinkViewModel } from './SocialLinkViewModel';
export declare class SocialLinksViewModel {
    'socialLinks'?: Array<SocialLinkViewModel>;
    static constructFromObject(data: {
        [key: string]: any;
    }, obj?: SocialLinksViewModel): SocialLinksViewModel;
}
