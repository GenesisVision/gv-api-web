import { AmountWithCurrency } from './AmountWithCurrency';
import { BrokerTradeServerType } from './BrokerTradeServerType';
export declare class ProgramMinInvestAmount {
    'serverType': BrokerTradeServerType;
    'minInvestAmountOwnProgram': Array<AmountWithCurrency>;
    'minInvestAmountSomeoneProgram': Array<AmountWithCurrency>;
    constructor(data: {
        [key: string]: any;
    });
    static constructFromObject(data: {
        [key: string]: any;
    }): ProgramMinInvestAmount | undefined;
}
