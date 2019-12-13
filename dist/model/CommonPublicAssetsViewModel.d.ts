import { ItemsViewModelFollowDetailsList } from './ItemsViewModelFollowDetailsList';
import { ItemsViewModelFundDetailsList } from './ItemsViewModelFundDetailsList';
import { ItemsViewModelProgramDetailsList } from './ItemsViewModelProgramDetailsList';
import { ItemsViewModelPublicProfile } from './ItemsViewModelPublicProfile';
export declare class CommonPublicAssetsViewModel {
    'programs': ItemsViewModelProgramDetailsList;
    'funds': ItemsViewModelFundDetailsList;
    'follows': ItemsViewModelFollowDetailsList;
    'managers': ItemsViewModelPublicProfile;
    constructor(data: {
        [key: string]: any;
    });
    static constructFromObject(data: {
        [key: string]: any;
    }): CommonPublicAssetsViewModel | undefined;
}
