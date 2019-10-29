import { ItemsViewModelFundDetailsList } from './itemsViewModelFundDetailsList';
import { ItemsViewModelProgramDetailsList } from './itemsViewModelProgramDetailsList';
import { ItemsViewModelPublicProfile } from './itemsViewModelPublicProfile';
export class SearchViewModel {
    constructor() {
    }
    static constructFromObject(data, obj = new SearchViewModel()) {
        if (data) {
            if (data.hasOwnProperty('programs')) {
                obj['programs'] = ItemsViewModelProgramDetailsList.constructFromObject(data['programs']);
            }
            if (data.hasOwnProperty('funds')) {
                obj['funds'] = ItemsViewModelFundDetailsList.constructFromObject(data['funds']);
            }
            if (data.hasOwnProperty('managers')) {
                obj['managers'] = ItemsViewModelPublicProfile.constructFromObject(data['managers']);
            }
        }
        return obj;
    }
}
