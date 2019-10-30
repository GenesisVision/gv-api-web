import { Currency } from './currency';
import { InvestmentProgramType } from './investmentProgramType';
import { InvestmentRequestStatus } from './investmentRequestStatus';
import { InvestmentRequestType } from './investmentRequestType';
export declare class ProgramRequestOld {
    'id'?: string;
    'programId'?: string;
    'date'?: Date;
    'value'?: number;
    'valueGvt'?: number;
    'withdrawAll'?: boolean;
    'entryFee'?: number;
    'exitFee'?: number;
    'successFee'?: number;
    'currency'?: Currency;
    'fundWithdrawPercent'?: number;
    'type'?: InvestmentRequestType;
    'status'?: InvestmentRequestStatus;
    'logo'?: string;
    'title'?: string;
    'color'?: string;
    'canCancelRequest'?: boolean;
    'programType'?: InvestmentProgramType;
    constructor();
    static constructFromObject(data: {
        [key: string]: any;
    }, obj?: ProgramRequestOld): ProgramRequestOld;
}
