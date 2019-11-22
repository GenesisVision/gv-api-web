import { FundInvestingDetailsList } from './FundInvestingDetailsList';
export declare class ItemsViewModelFundInvestingDetailsList {
    'items': Array<FundInvestingDetailsList>;
    'total': number;
    constructor(data: {
        [key: string]: any;
    });
    static constructFromObject(data: {
        [key: string]: any;
    }): ItemsViewModelFundInvestingDetailsList | undefined;
}
