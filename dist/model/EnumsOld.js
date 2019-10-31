import { EventFiltersOld } from './EventFiltersOld';
import { FundFiltersOld } from './FundFiltersOld';
import { MultiWalletFiltersOld } from './MultiWalletFiltersOld';
import { ProgramFiltersOld } from './ProgramFiltersOld';
import ApiClient from "../ApiClient";
export class EnumsOld {
    constructor(data) {
        this['multiWallet'] = data['multiWallet'];
        this['program'] = data['program'];
        this['fund'] = data['fund'];
        this['event'] = data['event'];
        this['assetTypes'] = data['assetTypes'];
    }
    static constructFromObject(data) {
        return new EnumsOld({
            'multiWallet': MultiWalletFiltersOld.constructFromObject(data['multiWallet']),
            'program': ProgramFiltersOld.constructFromObject(data['program']),
            'fund': FundFiltersOld.constructFromObject(data['fund']),
            'event': EventFiltersOld.constructFromObject(data['event']),
            'assetTypes': ApiClient.convertToType(data['assetTypes'], ['string']),
        });
    }
}
