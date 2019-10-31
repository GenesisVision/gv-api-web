import { SocialLinkType } from './SocialLinkType';
export declare class SocialLinkViewModel {
    'url': string;
    'logo': string;
    'name': string;
    'value': string;
    'type': SocialLinkType;
    constructor(data: {
        [key: string]: any;
    });
    static constructFromObject(data: {
        [key: string]: any;
    }): SocialLinkViewModel | undefined;
}
