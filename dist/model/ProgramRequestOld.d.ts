import { Currency } from './Currency';
import { InvestmentProgramType } from './InvestmentProgramType';
import { InvestmentRequestStatus } from './InvestmentRequestStatus';
import { InvestmentRequestType } from './InvestmentRequestType';
export declare class ProgramRequestOld {
    'id': string;
    'programId': string;
    'date': Date;
    'value': number;
    'valueGvt': number;
    'withdrawAll': boolean;
    'entryFee': number;
    'exitFee': number;
    'successFee': number;
    'currency': Currency;
    'fundWithdrawPercent': number;
    'type': InvestmentRequestType;
    'status': InvestmentRequestStatus;
    'logo': string;
    'title': string;
    'color': string;
    'canCancelRequest': boolean;
    'programType': InvestmentProgramType;
    constructor(data: {
        [key: string]: any;
    });
    static constructFromObject(data: {
        [key: string]: any;
    }): ProgramRequestOld;
}
