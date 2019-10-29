import { AmountWithCurrency } from './amountWithCurrency';
import { BrokerTradeServerType } from './brokerTradeServerType';
export declare class ProgramMinInvestAmount {
    'serverType'?: BrokerTradeServerType;
    'minInvestAmountOwnProgram'?: [AmountWithCurrency];
    'minInvestAmountSomeoneProgram'?: [AmountWithCurrency];
    constructor();
    static constructFromObject(data: {
        [key: string]: any;
    }, obj?: ProgramMinInvestAmount): ProgramMinInvestAmount;
}
