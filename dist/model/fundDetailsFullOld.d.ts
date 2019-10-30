import { FundAssetPartWithIcon } from './fundAssetPartWithIcon';
import { FundStatisticOld } from './fundStatisticOld';
import { InvestmentProgramStatus } from './investmentProgramStatus';
import { PersonalFundDetailsFullOld } from './personalFundDetailsFullOld';
import { ProfilePublic } from './profilePublic';
export declare class FundDetailsFullOld {
    'entryFee'?: number;
    'exitFee'?: number;
    'managementFee'?: number;
    'currentAssets'?: [FundAssetPartWithIcon];
    'statistic'?: FundStatisticOld;
    'personalFundDetails'?: PersonalFundDetailsFullOld;
    'id'?: string;
    'logo'?: string;
    'url'?: string;
    'color'?: string;
    'description'?: string;
    'title'?: string;
    'ipfsHash'?: string;
    'creationDate'?: Date;
    'status'?: InvestmentProgramStatus;
    'manager'?: ProfilePublic;
    constructor();
    static constructFromObject(data: {
        [key: string]: any;
    }, obj?: FundDetailsFullOld): FundDetailsFullOld;
}
