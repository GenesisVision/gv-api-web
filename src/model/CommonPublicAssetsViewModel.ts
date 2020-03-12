import { FollowDetailsListItemItemsViewModel } from './FollowDetailsListItemItemsViewModel';
import { FundDetailsListItemItemsViewModel } from './FundDetailsListItemItemsViewModel';
import { ProgramDetailsListItemItemsViewModel } from './ProgramDetailsListItemItemsViewModel';
import { PublicProfileItemsViewModel } from './PublicProfileItemsViewModel';

export interface CommonPublicAssetsViewModel {
    programs: ProgramDetailsListItemItemsViewModel;
    funds: FundDetailsListItemItemsViewModel;
    follows: FollowDetailsListItemItemsViewModel;
    managers: PublicProfileItemsViewModel;
}

