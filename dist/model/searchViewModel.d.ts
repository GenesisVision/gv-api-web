import { ItemsViewModelFundDetailsList } from './itemsViewModelFundDetailsList';
import { ItemsViewModelProgramDetailsList } from './itemsViewModelProgramDetailsList';
import { ItemsViewModelPublicProfile } from './itemsViewModelPublicProfile';
export declare class SearchViewModel {
    'programs'?: ItemsViewModelProgramDetailsList;
    'funds'?: ItemsViewModelFundDetailsList;
    'managers'?: ItemsViewModelPublicProfile;
    constructor();
    static constructFromObject(data: {
        [key: string]: any;
    }, obj?: SearchViewModel): SearchViewModel;
}
