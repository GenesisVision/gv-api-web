import { ItemsViewModelFollowDetailsListItem } from './ItemsViewModelFollowDetailsListItem';
import { ItemsViewModelFundDetailsListItem } from './ItemsViewModelFundDetailsListItem';
import { ItemsViewModelProgramDetailsListItem } from './ItemsViewModelProgramDetailsListItem';
import { ItemsViewModelPublicProfile } from './ItemsViewModelPublicProfile';

export interface CommonPublicAssetsViewModel {
    programs: ItemsViewModelProgramDetailsListItem;
    funds: ItemsViewModelFundDetailsListItem;
    follows: ItemsViewModelFollowDetailsListItem;
    managers: ItemsViewModelPublicProfile;
}

