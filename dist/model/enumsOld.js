import { EventFiltersOld } from './eventFiltersOld';
import { FundFiltersOld } from './fundFiltersOld';
import { MultiWalletFiltersOld } from './multiWalletFiltersOld';
import { ProgramFiltersOld } from './programFiltersOld';
import ApiClient from "../ApiClient";
export class EnumsOld {
    constructor() {
    }
    static constructFromObject(data, obj = new EnumsOld()) {
        if (data) {
            if (data.hasOwnProperty('multiWallet')) {
                obj['multiWallet'] = MultiWalletFiltersOld.constructFromObject(data['multiWallet']);
            }
            if (data.hasOwnProperty('program')) {
                obj['program'] = ProgramFiltersOld.constructFromObject(data['program']);
            }
            if (data.hasOwnProperty('fund')) {
                obj['fund'] = FundFiltersOld.constructFromObject(data['fund']);
            }
            if (data.hasOwnProperty('event')) {
                obj['event'] = EventFiltersOld.constructFromObject(data['event']);
            }
            if (data.hasOwnProperty('assetTypes')) {
                obj['assetTypes'] = ApiClient.convertToType(data['assetTypes'], ['string']);
            }
        }
        return obj;
    }
}
