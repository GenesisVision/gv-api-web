import { RatesModelRates } from './ratesModelRates';
export class RatesModel {
    constructor() {
    }
    static constructFromObject(data, obj = new RatesModel()) {
        if (data) {
            if (data.hasOwnProperty('rates')) {
                obj['rates'] = RatesModelRates.constructFromObject(data['rates']);
            }
        }
        return obj;
    }
}
