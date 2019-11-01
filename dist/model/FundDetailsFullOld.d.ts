import { FundAssetPartWithIcon } from './FundAssetPartWithIcon';
import { FundStatisticOld } from './FundStatisticOld';
import { InvestmentProgramStatus } from './InvestmentProgramStatus';
import { PersonalFundDetailsFullOld } from './PersonalFundDetailsFullOld';
import { ProfilePublic } from './ProfilePublic';
export declare class FundDetailsFullOld {
    'entryFee': number;
    'exitFee': number;
    'managementFee': number;
    'currentAssets': Array<FundAssetPartWithIcon>;
    'statistic': FundStatisticOld;
    'personalFundDetails': PersonalFundDetailsFullOld;
    'id': string;
    'logo': string;
    'url': string;
    'color': string;
    'description': string;
    'title': string;
    'ipfsHash': string;
    'creationDate': Date;
    'status': InvestmentProgramStatus;
    'manager': ProfilePublic;
    constructor(data: {
        [key: string]: any;
    });
    static constructFromObject(data: {
        [key: string]: any;
    }): FundDetailsFullOld | undefined;
}
