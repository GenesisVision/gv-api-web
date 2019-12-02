import { SocialLinkViewModel } from './SocialLinkViewModel';
export declare class PublicProfile {
    'id': string;
    'username': string;
    'about': string;
    'avatar': string;
    'regDate': Date;
    'assets': Array<string>;
    'url': string;
    'socialLinks': Array<SocialLinkViewModel>;
    constructor(data: {
        [key: string]: any;
    });
    static constructFromObject(data: {
        [key: string]: any;
    }): PublicProfile | undefined;
}
