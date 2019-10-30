import { RateItem } from './rateItem';
import ApiClient from "../ApiClient";
export class RatesModelRates {
    constructor() {
    }
    static constructFromObject(data, obj = new RatesModelRates()) {
        if (data) {
            if (data.hasOwnProperty('Undefined')) {
                obj['Undefined'] = ApiClient.convertToType(data['Undefined'], [RateItem]);
            }
            if (data.hasOwnProperty('GVT')) {
                obj['GVT'] = ApiClient.convertToType(data['GVT'], [RateItem]);
            }
            if (data.hasOwnProperty('ETH')) {
                obj['ETH'] = ApiClient.convertToType(data['ETH'], [RateItem]);
            }
            if (data.hasOwnProperty('BTC')) {
                obj['BTC'] = ApiClient.convertToType(data['BTC'], [RateItem]);
            }
            if (data.hasOwnProperty('ADA')) {
                obj['ADA'] = ApiClient.convertToType(data['ADA'], [RateItem]);
            }
            if (data.hasOwnProperty('USDT')) {
                obj['USDT'] = ApiClient.convertToType(data['USDT'], [RateItem]);
            }
            if (data.hasOwnProperty('XRP')) {
                obj['XRP'] = ApiClient.convertToType(data['XRP'], [RateItem]);
            }
            if (data.hasOwnProperty('BCH')) {
                obj['BCH'] = ApiClient.convertToType(data['BCH'], [RateItem]);
            }
            if (data.hasOwnProperty('LTC')) {
                obj['LTC'] = ApiClient.convertToType(data['LTC'], [RateItem]);
            }
            if (data.hasOwnProperty('DOGE')) {
                obj['DOGE'] = ApiClient.convertToType(data['DOGE'], [RateItem]);
            }
            if (data.hasOwnProperty('BNB')) {
                obj['BNB'] = ApiClient.convertToType(data['BNB'], [RateItem]);
            }
            if (data.hasOwnProperty('USD')) {
                obj['USD'] = ApiClient.convertToType(data['USD'], [RateItem]);
            }
            if (data.hasOwnProperty('EUR')) {
                obj['EUR'] = ApiClient.convertToType(data['EUR'], [RateItem]);
            }
        }
        return obj;
    }
}
