import { RatesModelRates } from './RatesModelRates';
export class RatesModel {
    constructor(data) {
        this['rates'] = data['rates'];
    }
    static constructFromObject(data) {
        return new RatesModel({
            'rates': RatesModelRates.constructFromObject(data['rates']),
        });
    }
}
