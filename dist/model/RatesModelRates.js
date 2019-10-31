import { RateItem } from './RateItem';
import ApiClient from "../ApiClient";
export class RatesModelRates {
    constructor(data) {
        this['Undefined'] = data['Undefined'];
        this['GVT'] = data['GVT'];
        this['ETH'] = data['ETH'];
        this['BTC'] = data['BTC'];
        this['ADA'] = data['ADA'];
        this['USDT'] = data['USDT'];
        this['XRP'] = data['XRP'];
        this['BCH'] = data['BCH'];
        this['LTC'] = data['LTC'];
        this['DOGE'] = data['DOGE'];
        this['BNB'] = data['BNB'];
        this['USD'] = data['USD'];
        this['EUR'] = data['EUR'];
    }
    static constructFromObject(data) {
        return new RatesModelRates({
            'Undefined': ApiClient.convertToType(data['Undefined'], [RateItem]),
            'GVT': ApiClient.convertToType(data['GVT'], [RateItem]),
            'ETH': ApiClient.convertToType(data['ETH'], [RateItem]),
            'BTC': ApiClient.convertToType(data['BTC'], [RateItem]),
            'ADA': ApiClient.convertToType(data['ADA'], [RateItem]),
            'USDT': ApiClient.convertToType(data['USDT'], [RateItem]),
            'XRP': ApiClient.convertToType(data['XRP'], [RateItem]),
            'BCH': ApiClient.convertToType(data['BCH'], [RateItem]),
            'LTC': ApiClient.convertToType(data['LTC'], [RateItem]),
            'DOGE': ApiClient.convertToType(data['DOGE'], [RateItem]),
            'BNB': ApiClient.convertToType(data['BNB'], [RateItem]),
            'USD': ApiClient.convertToType(data['USD'], [RateItem]),
            'EUR': ApiClient.convertToType(data['EUR'], [RateItem]),
        });
    }
}
