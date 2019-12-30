import { ProgramInvestingDetailsList } from './ProgramInvestingDetailsList';
export declare class ItemsViewModelProgramInvestingDetailsList {
    'items': Array<ProgramInvestingDetailsList>;
    'total': number;
    constructor(data: {
        [key: string]: any;
    });
    static constructFromObject(data: {
        [key: string]: any;
    }): ItemsViewModelProgramInvestingDetailsList | undefined;
}
