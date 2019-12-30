import { ItemsViewModelFollowDetailsListItem } from './ItemsViewModelFollowDetailsListItem';
import { ItemsViewModelFundDetailsListItem } from './ItemsViewModelFundDetailsListItem';
import { ItemsViewModelProgramDetailsListItem } from './ItemsViewModelProgramDetailsListItem';
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
                'programs': ItemsViewModelProgramDetailsListItem.constructFromObject(data['programs']),
                'funds': ItemsViewModelFundDetailsListItem.constructFromObject(data['funds']),
                'follows': ItemsViewModelFollowDetailsListItem.constructFromObject(data['follows']),
                'managers': ItemsViewModelPublicProfile.constructFromObject(data['managers']),
            });
        }
    }
}
