import { ItemsViewModelFollowDetailsListItem } from './ItemsViewModelFollowDetailsListItem';
import { ItemsViewModelFundDetailsListItem } from './ItemsViewModelFundDetailsListItem';
import { ItemsViewModelProgramDetailsListItem } from './ItemsViewModelProgramDetailsListItem';
import { PlatformEvent } from './PlatformEvent';
import ApiClient from "../ApiClient";
export class LandingInfo {
    constructor(data) {
        this['events'] = data['events'];
        this['follows'] = data['follows'];
        this['programs'] = data['programs'];
        this['funds'] = data['funds'];
    }
    static constructFromObject(data) {
        if (data) {
            return new LandingInfo({
                'events': ApiClient.convertToType(data['events'], [PlatformEvent]),
                'follows': ItemsViewModelFollowDetailsListItem.constructFromObject(data['follows']),
                'programs': ItemsViewModelProgramDetailsListItem.constructFromObject(data['programs']),
                'funds': ItemsViewModelFundDetailsListItem.constructFromObject(data['funds']),
            });
        }
    }
}
