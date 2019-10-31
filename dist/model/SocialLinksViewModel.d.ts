import { SocialLinkViewModel } from './SocialLinkViewModel';
export declare class SocialLinksViewModel {
    'socialLinks': Array<SocialLinkViewModel>;
    constructor(data: {
        [key: string]: any;
    });
    static constructFromObject(data: {
        [key: string]: any;
    }): SocialLinksViewModel;
}
