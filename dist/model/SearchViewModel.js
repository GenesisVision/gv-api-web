import { ItemsViewModelFollowDetailsList } from './ItemsViewModelFollowDetailsList';
import { ItemsViewModelFundDetailsList } from './ItemsViewModelFundDetailsList';
import { ItemsViewModelProgramDetailsList } from './ItemsViewModelProgramDetailsList';
import { ItemsViewModelPublicProfile } from './ItemsViewModelPublicProfile';
export class SearchViewModel {
    constructor(data) {
        this['programs'] = data['programs'];
        this['funds'] = data['funds'];
        this['follow'] = data['follow'];
        this['managers'] = data['managers'];
    }
    static constructFromObject(data) {
        if (data) {
            return new SearchViewModel({
                'programs': ItemsViewModelProgramDetailsList.constructFromObject(data['programs']),
                'funds': ItemsViewModelFundDetailsList.constructFromObject(data['funds']),
                'follow': ItemsViewModelFollowDetailsList.constructFromObject(data['follow']),
                'managers': ItemsViewModelPublicProfile.constructFromObject(data['managers']),
            });
        }
    }
}
