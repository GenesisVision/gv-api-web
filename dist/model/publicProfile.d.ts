import { SocialLinkViewModel } from './socialLinkViewModel';
export declare class PublicProfile {
    'id'?: string;
    'username'?: string;
    'about'?: string;
    'avatar'?: string;
    'regDate'?: Date;
    'assets'?: Array<string>;
    'url'?: string;
    'socialLinks'?: Array<SocialLinkViewModel>;
    constructor();
    static constructFromObject(data: {
        [key: string]: any;
    }, obj?: PublicProfile): PublicProfile;
}
