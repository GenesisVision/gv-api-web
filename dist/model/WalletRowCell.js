import { CurrencyItem } from './CurrencyItem';
export class WalletRowCell {
    constructor(data) {
        this['first'] = data['first'];
        this['second'] = data['second'];
    }
    static constructFromObject(data) {
        if (data) {
            return new WalletRowCell({
                'first': CurrencyItem.constructFromObject(data['first']),
                'second': CurrencyItem.constructFromObject(data['second']),
            });
        }
    }
}
