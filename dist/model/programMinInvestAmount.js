import { AmountWithCurrency } from './amountWithCurrency';
import { BrokerTradeServerType } from './brokerTradeServerType';
import ApiClient from "../ApiClient";
export class ProgramMinInvestAmount {
    constructor() {
    }
    static constructFromObject(data, obj = new ProgramMinInvestAmount()) {
        if (data) {
            if (data.hasOwnProperty('serverType')) {
                obj['serverType'] = BrokerTradeServerType.constructFromObject(data['serverType']);
            }
            if (data.hasOwnProperty('minInvestAmountOwnProgram')) {
                obj['minInvestAmountOwnProgram'] = ApiClient.convertToType(data['minInvestAmountOwnProgram'], [AmountWithCurrency]);
            }
            if (data.hasOwnProperty('minInvestAmountSomeoneProgram')) {
                obj['minInvestAmountSomeoneProgram'] = ApiClient.convertToType(data['minInvestAmountSomeoneProgram'], [AmountWithCurrency]);
            }
        }
        return obj;
    }
}
