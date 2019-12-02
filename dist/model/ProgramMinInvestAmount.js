import { AmountWithCurrency } from './AmountWithCurrency';
import { BrokerTradeServerType } from './BrokerTradeServerType';
import ApiClient from "../ApiClient";
export class ProgramMinInvestAmount {
    constructor(data) {
        this['serverType'] = data['serverType'];
        this['minDepositCreateAsset'] = data['minDepositCreateAsset'];
        this['minInvestAmountIntoProgram'] = data['minInvestAmountIntoProgram'];
    }
    static constructFromObject(data) {
        if (data) {
            return new ProgramMinInvestAmount({
                'serverType': BrokerTradeServerType.constructFromObject(data['serverType']),
                'minDepositCreateAsset': ApiClient.convertToType(data['minDepositCreateAsset'], [AmountWithCurrency]),
                'minInvestAmountIntoProgram': ApiClient.convertToType(data['minInvestAmountIntoProgram'], [AmountWithCurrency]),
            });
        }
    }
}
