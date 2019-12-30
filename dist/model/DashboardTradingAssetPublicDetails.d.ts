import { FundAssetDetails } from './FundAssetDetails';
import { ProgramAssetDetails } from './ProgramAssetDetails';
export declare class DashboardTradingAssetPublicDetails {
    'logo': string;
    'color': string;
    'title': string;
    'url': string;
    'programDetails': ProgramAssetDetails;
    'fundDetails': FundAssetDetails;
    constructor(data: {
        [key: string]: any;
    });
    static constructFromObject(data: {
        [key: string]: any;
    }): DashboardTradingAssetPublicDetails | undefined;
}
