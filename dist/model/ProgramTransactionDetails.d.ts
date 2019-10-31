import { Currency } from './Currency';
import { InvestmentProgramType } from './InvestmentProgramType';
export declare class ProgramTransactionDetails {
    'id': string;
    'managerName': string;
    'programType': InvestmentProgramType;
    'successFeeCurrency': Currency;
    'logo': string;
    'title': string;
    'entryFee': number;
    'entryFeePercent': number;
    'successFee': number;
    'successFeePercent': number;
    'level': number;
    'levelProgress': number;
    'exitFee': number;
    'exitFeePercent': number;
    'color': string;
    constructor(data: {
        [key: string]: any;
    });
    static constructFromObject(data: {
        [key: string]: any;
    }): ProgramTransactionDetails | undefined;
}
