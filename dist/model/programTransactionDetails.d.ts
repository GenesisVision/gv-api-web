import { Currency } from './currency';
import { InvestmentProgramType } from './investmentProgramType';
export declare class ProgramTransactionDetails {
    'id'?: string;
    'managerName'?: string;
    'programType'?: InvestmentProgramType;
    'successFeeCurrency'?: Currency;
    'logo'?: string;
    'title'?: string;
    'entryFee'?: number;
    'entryFeePercent'?: number;
    'successFee'?: number;
    'successFeePercent'?: number;
    'level'?: number;
    'levelProgress'?: number;
    'exitFee'?: number;
    'exitFeePercent'?: number;
    'color'?: string;
    constructor();
    static constructFromObject(data: {
        [key: string]: any;
    }, obj?: ProgramTransactionDetails): ProgramTransactionDetails;
}
