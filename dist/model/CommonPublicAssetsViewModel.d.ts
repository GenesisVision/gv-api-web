import { ItemsViewModelFollowDetailsListItem } from './ItemsViewModelFollowDetailsListItem';
import { ItemsViewModelFundDetailsListItem } from './ItemsViewModelFundDetailsListItem';
import { ItemsViewModelProgramDetailsListItem } from './ItemsViewModelProgramDetailsListItem';
import { ItemsViewModelPublicProfile } from './ItemsViewModelPublicProfile';
export declare class CommonPublicAssetsViewModel {
    'programs': ItemsViewModelProgramDetailsListItem;
    'funds': ItemsViewModelFundDetailsListItem;
    'follows': ItemsViewModelFollowDetailsListItem;
    'managers': ItemsViewModelPublicProfile;
    constructor(data: {
        [key: string]: any;
    });
    static constructFromObject(data: {
        [key: string]: any;
    }): CommonPublicAssetsViewModel | undefined;
}
