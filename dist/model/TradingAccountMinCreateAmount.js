import { AmountWithCurrency } from './AmountWithCurrency';
import { BrokerTradeServerType } from './BrokerTradeServerType';
import ApiClient from "../ApiClient";
export class TradingAccountMinCreateAmount {
    constructor(data) {
        this['serverType'] = data['serverType'];
        this['minDepositCreateAsset'] = data['minDepositCreateAsset'];
    }
    static constructFromObject(data) {
        if (data) {
            return new TradingAccountMinCreateAmount({
                'serverType': BrokerTradeServerType.constructFromObject(data['serverType']),
                'minDepositCreateAsset': ApiClient.convertToType(data['minDepositCreateAsset'], [AmountWithCurrency]),
            });
        }
    }
}
