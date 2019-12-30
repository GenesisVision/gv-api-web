import { SocialLinkType } from './SocialLinkType';
export declare class UpdateSocialLinkViewModel {
    'type': SocialLinkType;
    'value': string;
    constructor(data: {
        [key: string]: any;
    });
    static constructFromObject(data: {
        [key: string]: any;
    }): UpdateSocialLinkViewModel | undefined;
}
