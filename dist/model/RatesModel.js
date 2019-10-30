import { RatesModelRates } from './RatesModelRates';
export class RatesModel {
    static constructFromObject(data, obj = new RatesModel()) {
        if (data) {
            if (data.hasOwnProperty('rates')) {
                obj['rates'] = RatesModelRates.constructFromObject(data['rates']);
            }
        }
        return obj;
    }
}
