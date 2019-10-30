import { SocialLinkViewModel } from './socialLinkViewModel';
export declare class ProfilePublic {
    'id'?: string;
    'username'?: string;
    'avatar'?: string;
    'registrationDate'?: Date;
    'url'?: string;
    'socialLinks'?: Array<SocialLinkViewModel>;
    constructor();
    static constructFromObject(data: {
        [key: string]: any;
    }, obj?: ProfilePublic): ProfilePublic;
}
