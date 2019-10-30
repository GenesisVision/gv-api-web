import { EventFiltersOld } from './EventFiltersOld';
import { FundFiltersOld } from './FundFiltersOld';
import { MultiWalletFiltersOld } from './MultiWalletFiltersOld';
import { ProgramFiltersOld } from './ProgramFiltersOld';
import ApiClient from "../ApiClient";
export class EnumsOld {
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
