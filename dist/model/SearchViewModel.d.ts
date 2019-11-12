import { ItemsViewModelFollowDetailsList } from './ItemsViewModelFollowDetailsList';
import { ItemsViewModelFundDetailsList } from './ItemsViewModelFundDetailsList';
import { ItemsViewModelProgramDetailsList } from './ItemsViewModelProgramDetailsList';
import { ItemsViewModelPublicProfile } from './ItemsViewModelPublicProfile';
export declare class SearchViewModel {
    'programs': ItemsViewModelProgramDetailsList;
    'funds': ItemsViewModelFundDetailsList;
    'copyTrading': ItemsViewModelFollowDetailsList;
    'managers': ItemsViewModelPublicProfile;
    constructor(data: {
        [key: string]: any;
    });
    static constructFromObject(data: {
        [key: string]: any;
    }): SearchViewModel | undefined;
}
