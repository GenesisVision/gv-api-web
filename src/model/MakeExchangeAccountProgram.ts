import { Currency } from './Currency';
import { InvestmentProgramInvestorIncomeMode } from './InvestmentProgramInvestorIncomeMode';
import { TradesDelay } from './TradesDelay';

export interface MakeExchangeAccountProgram {
    id: string;
    currency: Currency;
    investorIncomeMode: InvestmentProgramInvestorIncomeMode;
    hourProcessing: number;
    stopOutLevel: number;
    tradesDelay: TradesDelay;
    managementFee: number;
    successFee: number;
    investmentLimit: number;
    title: string;
    description: string;
    logo: string;
}

