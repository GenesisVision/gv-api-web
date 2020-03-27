import { AmountWithCurrency } from './AmountWithCurrency';
import { BrokerTradeServerType } from './BrokerTradeServerType';

export interface ProgramMinInvestAmount {
    serverType: BrokerTradeServerType;
    minDepositCreateAsset: Array<AmountWithCurrency>;
    minInvestAmountIntoProgram: Array<AmountWithCurrency>;
}

