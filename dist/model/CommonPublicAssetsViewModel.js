import { ItemsViewModelFollowDetailsList } from './ItemsViewModelFollowDetailsList';
import { ItemsViewModelFundDetailsList } from './ItemsViewModelFundDetailsList';
import { ItemsViewModelProgramDetailsList } from './ItemsViewModelProgramDetailsList';
import { ItemsViewModelPublicProfile } from './ItemsViewModelPublicProfile';
export class CommonPublicAssetsViewModel {
    constructor(data) {
        this['programs'] = data['programs'];
        this['funds'] = data['funds'];
        this['follows'] = data['follows'];
        this['managers'] = data['managers'];
    }
    static constructFromObject(data) {
        if (data) {
            return new CommonPublicAssetsViewModel({
                'programs': ItemsViewModelProgramDetailsList.constructFromObject(data['programs']),
                'funds': ItemsViewModelFundDetailsList.constructFromObject(data['funds']),
                'follows': ItemsViewModelFollowDetailsList.constructFromObject(data['follows']),
                'managers': ItemsViewModelPublicProfile.constructFromObject(data['managers']),
            });
        }
    }
}
