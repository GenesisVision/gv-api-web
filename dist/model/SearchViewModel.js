import { ItemsViewModelCopyTradingDetailsList } from './ItemsViewModelCopyTradingDetailsList';
import { ItemsViewModelFundDetailsList } from './ItemsViewModelFundDetailsList';
import { ItemsViewModelProgramDetailsList } from './ItemsViewModelProgramDetailsList';
import { ItemsViewModelPublicProfile } from './ItemsViewModelPublicProfile';
export class SearchViewModel {
    constructor(data) {
        this['programs'] = data['programs'];
        this['funds'] = data['funds'];
        this['copyTrading'] = data['copyTrading'];
        this['managers'] = data['managers'];
    }
    static constructFromObject(data) {
        if (data) {
            return new SearchViewModel({
                'programs': ItemsViewModelProgramDetailsList.constructFromObject(data['programs']),
                'funds': ItemsViewModelFundDetailsList.constructFromObject(data['funds']),
                'copyTrading': ItemsViewModelCopyTradingDetailsList.constructFromObject(data['copyTrading']),
                'managers': ItemsViewModelPublicProfile.constructFromObject(data['managers']),
            });
        }
    }
}
