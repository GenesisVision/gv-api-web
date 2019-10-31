import { SocialLinkViewModel } from './SocialLinkViewModel';
export declare class ProfilePublic {
    'id': string;
    'username': string;
    'avatar': string;
    'registrationDate': Date;
    'url': string;
    'socialLinks': Array<SocialLinkViewModel>;
    constructor(data: {
        [key: string]: any;
    });
    static constructFromObject(data: {
        [key: string]: any;
    }): ProfilePublic;
}
