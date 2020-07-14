import { BetaTestingType } from './BetaTestingType';
import { Tag } from './Tag';

export interface UsersPlatformInfo {
    tags: Array<Tag>;
    availableBetaFeatures: Array<BetaTestingType>;
}

