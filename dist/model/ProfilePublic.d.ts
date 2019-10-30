import { SocialLinkViewModel } from './SocialLinkViewModel';
export declare class ProfilePublic {
    'id'?: string;
    'username'?: string;
    'avatar'?: string;
    'registrationDate'?: Date;
    'url'?: string;
    'socialLinks'?: Array<SocialLinkViewModel>;
    static constructFromObject(data: {
        [key: string]: any;
    }, obj?: ProfilePublic): ProfilePublic;
}
