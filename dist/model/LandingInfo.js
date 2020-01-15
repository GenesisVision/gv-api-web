import { ItemsViewModelFollowDetailsListItem } from './ItemsViewModelFollowDetailsListItem';
import { ItemsViewModelFundDetailsListItem } from './ItemsViewModelFundDetailsListItem';
import { ItemsViewModelProgramDetailsListItem } from './ItemsViewModelProgramDetailsListItem';
import { PlatformEvent } from './PlatformEvent';
import { PlatformNews } from './PlatformNews';
import ApiClient from "../ApiClient";
export class LandingInfo {
    constructor(data) {
        this['events'] = data['events'];
        this['news'] = data['news'];
        this['follows'] = data['follows'];
        this['programs'] = data['programs'];
        this['funds'] = data['funds'];
    }
    static constructFromObject(data) {
        if (data) {
            return new LandingInfo({
                'events': ApiClient.convertToType(data['events'], [PlatformEvent]),
                'news': ApiClient.convertToType(data['news'], [PlatformNews]),
                'follows': ItemsViewModelFollowDetailsListItem.constructFromObject(data['follows']),
                'programs': ItemsViewModelProgramDetailsListItem.constructFromObject(data['programs']),
                'funds': ItemsViewModelFundDetailsListItem.constructFromObject(data['funds']),
            });
        }
    }
}
