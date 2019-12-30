import { UpdateSocialLinkViewModel } from './UpdateSocialLinkViewModel';
export declare class UpdateSocialLinksViewModel {
    'links': Array<UpdateSocialLinkViewModel>;
    constructor(data: {
        [key: string]: any;
    });
    static constructFromObject(data: {
        [key: string]: any;
    }): UpdateSocialLinksViewModel | undefined;
}
