import { AmountWithCurrency } from './AmountWithCurrency';
import { BrokerTradeServerType } from './BrokerTradeServerType';
import ApiClient from "../ApiClient";
export class ProgramMinInvestAmount {
    constructor(data) {
        this['serverType'] = data['serverType'];
        this['minInvestAmountOwnProgram'] = data['minInvestAmountOwnProgram'];
        this['minInvestAmountSomeoneProgram'] = data['minInvestAmountSomeoneProgram'];
    }
    static constructFromObject(data) {
        if (data) {
            return new ProgramMinInvestAmount({
                'serverType': BrokerTradeServerType.constructFromObject(data['serverType']),
                'minInvestAmountOwnProgram': ApiClient.convertToType(data['minInvestAmountOwnProgram'], [AmountWithCurrency]),
                'minInvestAmountSomeoneProgram': ApiClient.convertToType(data['minInvestAmountSomeoneProgram'], [AmountWithCurrency]),
            });
        }
    }
}
